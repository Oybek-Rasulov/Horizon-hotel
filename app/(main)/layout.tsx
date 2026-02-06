import { Header } from "../_components/Header";
import { ToastAlert } from "../_components/ToastAlert";
import { Logout } from "../_components/Logout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { template: "%s | Horizon hotel", default: "Welcome | Horizon hotel" },
  description: "Here is our best hotel rooms so reserve and enjoy",
};

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
      <div className="fixed bottom-10 right-10">
        <Logout />
      </div>
      <ToastAlert />
    </>
  );
}
