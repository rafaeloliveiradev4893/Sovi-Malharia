import { business } from "../config/business.ts";

export function productMessage(orderName: string): string {
  return `Olá! Quero orçamento de ${orderName}.`;
}

export function whatsappHref(message: string = business.messages.default): string {
  return `https://wa.me/${business.whatsappE164}?text=${encodeURIComponent(message)}`;
}
