// // productFormFields.ts
// // import { FormField } from "@/components/global/DynamicForm";

// import { FormField } from "@/components/form/DynamicForm";

// export const productFormFields: FormField[] = [
//   {
//     name: "name",
//     label: "Product Name",
//     type: "text",
//     placeholder: "Enter product name",
//   },
//   { name: "sku", label: "SKU", type: "text", placeholder: "Enter SKU" },
//   {
//     name: "keyword",
//     label: "Search Keyword",
//     type: "text",
//     placeholder: "Enter keyword",
//   },
//   {
//     name: "discount",
//     label: "Discount (%)",
//     type: "number",
//     placeholder: "Enter discount",
//   },
//   { name: "length", label: "Length", type: "number", placeholder: "Length" },
//   { name: "width", label: "Width", type: "number", placeholder: "Width" },
//   { name: "height", label: "Height", type: "number", placeholder: "Height" },
//   { name: "weight", label: "Weight", type: "number", placeholder: "Weight" },
//   {
//     name: "description",
//     label: "Description",
//     type: "textarea",
//     placeholder: "Enter description",
//   },
//   { name: "specification", label: "Specification", type: "richtext" },

//   // File upload as custom field
//   {
//     name: "images",
//     label: "Upload Images",
//     type: "custom",
//     customRender: (field, values, setValues, errors) => (
//       <div>
//         <label className="block text-lg font-medium">{field.label}</label>
//         <input
//           type="file"
//           multiple
//           accept="image/*"
//           onChange={(e) => {
//             if (e.target.files) {
//               setValues((prev) => ({
//                 ...prev,
//                 images: [
//                   ...(prev.images || []),
//                   ...Array.from(e.target.files!),
//                 ],
//               }));
//             }
//           }}
//           className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4
//             file:rounded-lg file:border-0
//             file:text-sm file:font-semibold
//             file:bg-gradient-to-r file:from-blue-600 file:to-indigo-600
//             hover:file:opacity-90 cursor-pointer"
//         />
//         {errors[field.name] && (
//           <p className="text-red-500 text-sm">{errors[field.name]}</p>
//         )}
//       </div>
//     ),
//   },
// ];
