export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-w-375 max-w-600 mx-auto">{children}</div>;
}
