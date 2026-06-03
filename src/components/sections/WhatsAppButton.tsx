"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLang } from "@/hooks/useLang";

export function WhatsAppButton() {
  const { t } = useLang();
  const phoneNumber = "34600000000"; // Reemplaza con tu número real
  const message = t.lang === "ES" 
    ? "Hola! Me interesa tu servicio de Data Engineering. ¿Podemos hablar?"
    : "Hi! I'm interested in your Data Engineering service. Can we talk?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-lg shadow-green-500/30 cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">1</span>
    </motion.a>
  );
}