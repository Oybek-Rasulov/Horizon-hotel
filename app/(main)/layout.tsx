import { Header } from "../_components/Header";
import { ToastAlert } from "../_components/ToastAlert";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full sticky top-0 z-20 p-3">
        <Header />
      </div>

      <main className="flex-1 grid">
        <div className="max-w-7xl mx-auto w-full">{children}</div>
      </main>
      <ToastAlert />
    </>
  );
}
