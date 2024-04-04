"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
const ModalWrapper = ({ isOpen, title, children, onClose, className }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={cn("w-max", className)}>
        <DialogHeader className="text-lg font-semibold font-montserrat border-b border-solid border-slate-200 py-3">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
export default ModalWrapper;
