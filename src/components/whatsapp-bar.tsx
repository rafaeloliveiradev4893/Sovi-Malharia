import { WhatsAppLink } from "@/components/whatsapp-link";

export function WhatsAppBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <WhatsAppLink className="w-full">Pedir orçamento no WhatsApp</WhatsAppLink>
    </div>
  );
}
