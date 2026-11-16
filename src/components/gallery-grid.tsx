"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { GalleryItem } from "@/config/business";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const photo = items[active];

  function open(index: number) {
    setActive(index);
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  function step(direction: number) {
    setActive((current) => (current + direction + items.length) % items.length);
  }

  if (!photo) return null;

  return (
    <>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => open(index)}
              className="block w-full border border-line bg-white text-left"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[4/5] w-full object-cover"
              />
              {item.caption ? (
                <span className="block px-4 py-3 text-sm font-medium text-ink">
                  {item.caption}
                </span>
              ) : null}
            </button>
          </li>
        ))}
      </ul>
      <dialog
        ref={dialogRef}
        className="gallery-dialog"
        aria-label={photo.caption || photo.alt}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
          <p className="text-sm font-semibold text-ink">
            {photo.caption || "Trabalho entregue"}
          </p>
          <button type="button" className="text-sm font-semibold text-brand" onClick={close}>
            Fechar
          </button>
        </div>
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="max-h-[70vh] w-full object-contain"
        />
        {items.length > 1 ? (
          <div className="flex justify-between gap-3 border-t border-line px-4 py-3">
            <button type="button" className="text-sm font-semibold text-brand" onClick={() => step(-1)}>
              Anterior
            </button>
            <button type="button" className="text-sm font-semibold text-brand" onClick={() => step(1)}>
              Próxima
            </button>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
