export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-dvh flex justify-center items-center">{children}</main>
  );
}
