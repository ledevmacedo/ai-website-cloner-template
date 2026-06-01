"use client";

import { QrCode, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function QrDialog() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="animate-in slide-in-from-bottom-4 fade-in rounded-[10px] bg-white p-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <Image
            alt="QR Code"
            className="block"
            height={180}
            src="/qr-code.png"
            width={180}
          />
        </div>
      )}
      <button
        aria-label={open ? "Fechar QR Code" : "Abrir QR Code"}
        className="flex size-12 items-center justify-center rounded-full bg-[#6F5BEF] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        {open ? <X size={20} /> : <QrCode size={20} />}
      </button>
    </div>
  );
}
