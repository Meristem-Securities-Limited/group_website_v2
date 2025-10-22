"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  type: "success" | "error";
}

const AlertModal: React.FC<AlertModalProps> = ({ isOpen, onClose, message, type }) => {
  const textColor = type === "success" ? "text-emerald-900" : "text-red-900";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <motion.div
            className={`relative shadow-xl max-w-md w-full p-6 text-center bg-white`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <h3 className={`text-2xl font-semibold mb-4 mt-5 ${textColor}`}>
              {type === "success" ? "Success!" : "Error"}
            </h3>
            <p className={`mb-6 ${textColor}`}>{message}</p>
            <button
              onClick={onClose}
              className={`absolute top-2 right-3 px-6 py-2 rounded-lg font-semibold ${
                type === "success"
                  ? "bg-emerald-900 text-white hover:bg-emerald-800"
                  : "bg-red-900 text-white hover:bg-red-800"
              } transition`}>
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertModal;
