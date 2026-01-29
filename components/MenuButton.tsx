"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface MenuButtonProps {
  href: string;
  icon: ReactNode | string;
  label: string;
}

export function MenuButton({ href, icon, label }: MenuButtonProps) {
  return (
    <Link href={href}>
      <button
        className="
          w-full h-full
          aspect-square
          flex flex-col items-center justify-center
          bg-white dark:bg-black
          text-black dark:text-white
          hover:bg-gray-100 dark:hover:bg-gray-900
          active:bg-gray-200 dark:active:bg-gray-800
          transition-colors
          p-4
        "
      >
        <div className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3 flex items-center justify-center text-black dark:text-white flex-shrink-0">
          {icon}
        </div>
        <span className="text-xs md:text-sm font-medium text-center">{label}</span>
      </button>
    </Link>
  );
}
