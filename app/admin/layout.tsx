import AdminSidebar from "@/components/layout/AdminSidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="flex">
          <AdminSidebar />
          <div className="flex-1  bg-gradient-to-br from-black via-gray-900 to-black text-white">{children}</div>
        </div>
      </body>
    </html>
  );
}
