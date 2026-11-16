"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { GalleryItem } from "@/config/business";

const PREVIEW_MOBILE = 4;
const PREVIEW_DESKTOP = 3;

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const photo = items[active];
  const hasMoreMobile = items.length > PREVIEW_MOBILE;
  const hasMoreDesktop = items.length > PREVIEW_DESKTOP;
  const hasMore = hasMoreMobile || hasMoreDesktop;
  const visible =
    expanded || !hasMore ? items : items.slice(0, PREVIEW_MOBILE);

  function open(index: number) {
    setActive(index);
    setDialogOpen(true);
  }

  function close() {
    dialogRef.current?.close();
  }

  function step(direction: number) {
    setActive((current) => (current + direction + items.length) % items.length);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !dialogOpen || dialog.open) return;
    dialog.showModal();
  }, [dialogOpen]);

  if (!photo) return null;

  return (
    <>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, index) => {
          const hideOnDesktop =
            !expanded && hasMoreDesktop && index >= PREVIEW_DESKTOP;

          return (
            <li
              key={item.src}
              className={hideOnDesktop ? "lg:hidden" : undefined}
            >
              <button
                type="button"
                onClick={() => open(index)}
                className="block w-full border border-brand/20 bg-white text-left"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                  fetchPriority="low"
                  className="aspect-[4/5] w-full bg-brand-soft object-cover"
                />
                {item.caption ? (
                  <span className="block px-4 py-3 text-sm font-medium text-ink">
                    {item.caption}
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
      {hasMore ? (
        <div
          className={`mt-8 justify-center ${hasMoreMobile ? "flex" : "hidden lg:flex"}`}
        >
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="motion-link inline-flex h-12 items-center justify-center border border-brand/30 bg-white px-5 text-sm font-semibold text-brand hover:border-accent/50 hover:bg-brand-soft"
            aria-expanded={expanded}
          >
            {expanded ? "Ver menos" : "Ver mais"}
          </button>
        </div>
      ) : null}
      <dialog
        ref={dialogRef}
        className="gallery-dialog"
        aria-label={photo.caption || photo.alt}
        onClose={() => setDialogOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
      >
        {dialogOpen ? (
          <>
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
              sizes="(min-width: 960px) 960px, calc(100vw - 2rem)"
              loading="eager"
              className="max-h-[70vh] w-full bg-white object-contain"
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
          </>
        ) : null}
      </dialog>
    </>
  );
}
