import Image from "next/image";
import { business } from "@/config/business";

export function Logo({
  className = "h-9 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={business.logo.src}
      alt={business.logo.alt}
      width={business.logo.width}
      height={business.logo.height}
      priority={priority}
      className={className}
    />
  );
}
