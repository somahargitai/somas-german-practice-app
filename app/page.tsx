"use client";

import { MenuButton } from "@/components/MenuButton";
import {
  BookIcon,
  ClockIcon,
  ArrowsIcon,
  QuestionIcon,
  GlobeIcon,
  ChatIcon,
  LightningIcon,
  GearIcon,
} from "@/components/Icons";

export default function Home() {
  const menuItems = [
    { icon: <BookIcon />, label: "Igeragozás" },
    { icon: <ClockIcon />, label: "Múlt idő" },
    { icon: <ArrowsIcon />, label: "Folyamatos" },
    { icon: <QuestionIcon />, label: "Feltételes" },
    { icon: <GlobeIcon />, label: "Szókincs" },
    { icon: <ChatIcon />, label: "Társalgás" },
    { icon: <LightningIcon />, label: "Nyelvtan" },
    { icon: <GearIcon />, label: "Beállítások" },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Mobile: 4x2 grid filling the screen */}
      <div className="md:hidden h-screen flex flex-col">
        <div className="px-4 py-3 border-b-2 border-black dark:border-white flex-shrink-0">
          <h1 className="text-xl font-bold text-center text-black dark:text-white">
            Nyelvtan Gyakorló
          </h1>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-0 border-t-2 border-l-2 border-black dark:border-white" style={{ gridAutoRows: '1fr' }}>
          {menuItems.map((item, index) => {
            const isLastInRow = (index + 1) % 2 === 0;
            const isLastRow = index >= 6;
            return (
              <div
                key={index}
                className={`bg-white dark:bg-black border-black dark:border-white ${
                  !isLastInRow ? "border-r-2" : ""
                } ${!isLastRow ? "border-b-2" : ""}`}
              >
                <MenuButton
                  href={index === 0 ? "/conjugation" : `/placeholder/${index}`}
                  icon={item.icon}
                  label={item.label}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop: Centered 4x2 grid */}
      <div className="hidden md:flex flex-col items-center justify-center px-8">
        <h1 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
          Nyelvtan Gyakorló
        </h1>

        <div className="grid grid-cols-4 gap-0 bg-white dark:bg-black border-2 border-black dark:border-white">
          {menuItems.map((item, index) => {
            const isLastInRow = (index + 1) % 4 === 0;
            const isLastRow = index >= 4;
            return (
              <div
                key={index}
                className={`aspect-square bg-white dark:bg-black ${
                  !isLastInRow ? "border-r-2 border-black dark:border-white" : ""
                } ${!isLastRow ? "border-b-2 border-black dark:border-white" : ""}`}
              >
                <MenuButton
                  href={index === 0 ? "/conjugation" : `/placeholder/${index}`}
                  icon={item.icon}
                  label={item.label}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
