import Image from "next/image";
import { business } from "@/config/business";

export function Logo({
  className = "h-9 w-auto",
  loading = "lazy",
  fetchPriority,
}: {
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}) {
  return (
    <Image
      src={business.logo.src}
      alt={business.logo.alt}
      width={business.logo.width}
      height={business.logo.height}
      loading={loading}
      fetchPriority={fetchPriority}
      className={className}
    />
  );
}
