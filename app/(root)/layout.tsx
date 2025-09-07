export default function RootLayout({
  navbar,
  children,
}: Readonly<{
  children: React.ReactNode;
  navbar: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {navbar}
        {/* <Navbar />   */}
        {children}
      </body>
    </html>
  );
}
