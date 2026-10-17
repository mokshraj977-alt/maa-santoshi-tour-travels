import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Hello, I would like to enquire about travel from Bilaspur. Please share the details.",
  );

  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/918770972173?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Maa Santoshi Tour & Travels on WhatsApp"
    >
      <MessageCircle size={23} aria-hidden="true" />
      <span>WhatsApp us</span>
    </a>
  );
}
