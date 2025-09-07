"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import DynamicForm, { FormField } from "@/components/form/DynamicForm";
import { useCreateCategoryMutation } from "@/store/api/categorey";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  name?: string;
  description?: string;
  onSave?: (data: { fullName: string; description: string }) => void;
}

export default function useUpdateCategoreyModel({
  isOpen,
  onClose,
  name = "",
  description = "",
  onSave,
}: Props) {
  const [values, setValues] = React.useState({
    name,
    description,
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [createCategory] = useCreateCategoryMutation();
  React.useEffect(() => {
    setValues({ name, description });
  }, [, description, isOpen]);

  const formFields: FormField[] = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter full name",
      fieldClass:
        "mt-2 w-full rounded-lg bg-gray-800 border border-gray-700 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600",
      labelClass: "text-sm font-medium text-gray-300",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Enter a short description",
      fieldClass:
        "mt-2 w-full rounded-lg bg-gray-800 border border-gray-700 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600",
      labelClass: "text-sm font-medium text-gray-300",
    },
  ];

  const handleSubmit = async (e: React.FormEvent, formValues: any) => {
    e.preventDefault();

    // validate
    if (!formValues.name) {
      setErrors({ name: "Name is required" }); // ✅ matches field name
      return;
    }

    try {
      await createCategory(formValues).unwrap(); // ✅ unwrap for proper error handling
      onClose();
    } catch (error) {
      console.error("Failed to create category:", error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop with blur */}
          <div
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ y: 20, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative z-10 w-full max-w-xl mx-4 rounded-2xl bg-gradient-to-b from-black/90 to-gray-900/95 border border-gray-800 shadow-2xl p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Category</h3>
                <p className="mt-1 text-sm text-gray-400">
                  full name and description
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="rounded-md p-2 text-gray-300 hover:bg-white/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <DynamicForm
                values={values}
                setValues={setValues}
                errors={errors}
                formFields={formFields}
                handleSubmit={handleSubmit}
                mode="edit"
                submitTitle="Save"
                submitBtnClass="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
                submitClass="flex justify-end gap-3"
              />
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-white/5"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
