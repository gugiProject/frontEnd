export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-w-[375px] max-w-[600px] mx-auto">{children}</div>;
}
