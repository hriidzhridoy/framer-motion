"use client";

import { useRef } from "react";
import { cn } from "@/libs/utils";
import { buttonVariants } from "@/components/ui/button";
import confetti from "canvas-confetti";
import { ClockFace } from "../ui/clock";

const CustomButton = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleConfetti5 = () => {
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      colors: ["#bb0000", "#ffffff"],
      shapes: ["circle"],
      origin: { x: Math.random(), y: Math.random() },
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className={cn(buttonVariants(), "w-[50px]  ml-2")}
        onClick={handleConfetti5}
      >
        <ClockFace />
      </button>
    </div>
  );
};

export default CustomButton;
