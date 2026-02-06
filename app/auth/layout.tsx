import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Horizon hotel",
    default: "Welcome | Horizon hotel",
  },
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
