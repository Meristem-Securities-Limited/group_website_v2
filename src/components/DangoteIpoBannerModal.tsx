"use client";

import { useState } from "react";
import Image from "next/image";
import { DangoteIpoBanner } from "@/app/assets";
import { Modal } from "@/components/Modal";

export function DangoteIpoBannerModal() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      width="lg">
      <div className="relative">
        <a
          href="https://dangoteipo.meristemng.com"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            src={DangoteIpoBanner ?? ""}
            alt="Dangote IPO"
            className="w-full h-auto rounded-xl"
          />
        </a>
      </div>
    </Modal>
  );
}
