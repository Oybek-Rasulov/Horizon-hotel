"use client";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Title } from "./Title";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex justify-between items-center backdrop-blur-xs bg-white/10 border-white/25 rounded-xl py-3 px-7"
    >
      <div className="flex items-center gap-5">
        <Logo />
        <Title size="text-2xl">Horizon</Title>
      </div>
      <Navigation />
    </motion.header>
  );
}
