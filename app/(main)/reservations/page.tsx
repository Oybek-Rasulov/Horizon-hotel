import Reservations from "@/app/_components/Reservations";
import { Spinner } from "@/app/_components/Spinner";
import { Suspense } from "react";

// export const metadata: Metadata = {
//   title: "Reservation",
// };

export const revalidate = 0;

export default function Page() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Reservations />
      </Suspense>
    </div>
  );
}
