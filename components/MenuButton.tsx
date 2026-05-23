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
          flex flex-col items-center justify-center
          gap-2 md:gap-3
          bg-white dark:bg-black
          text-black dark:text-white
          hover:bg-gray-100 dark:hover:bg-gray-900
          active:bg-gray-200 dark:active:bg-gray-800
          transition-colors
          p-3 md:p-4
        "
      >
        <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 flex items-center justify-center text-black dark:text-white flex-shrink-0">
          {icon}
        </div>
        <span className="text-sm md:text-base font-medium text-center leading-tight">
          {label}
        </span>
      </button>
    </Link>
  );
}
