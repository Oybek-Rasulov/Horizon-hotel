import Image from "next/image";
import contact from "@/public/images/contact.jpg";
import ContactForm from "../../_components/ContactForm";
import { Title } from "../../_components/Title";

export default function Page() {
  return (
    <div>
      <Image src={contact} fill alt="contact" className="object-cover" />
      <div className="relative flex justify-between mt-3">
        <div className="mt-20">
          <Title size="text-5xl" color="white">
            Contact
          </Title>
          <p className="w-150 mt-5">
            We’d love to hear from you! Whether you have questions about your
            stay, need assistance with a booking, or want to learn more about
            our services, our friendly team is always ready to help. Reach out
            to us via phone, email, or our online form, and we’ll respond as
            quickly as possible.
          </p>
        </div>
        <div className="w-[50%] h-[600] backdrop-blur-xl bg-black/10 border-white/25 py-6 px-6 border rounded-xl shadow-md">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
