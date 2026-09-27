"use client";
// context/booking-modal-context.tsx

import { createContext, useContext, useState, ReactNode } from "react";

type BookingModalContextType = {
  isOpen: boolean;
  selectedDoctorId: string | null;
  openModal: (doctorId?: string) => void;
  closeModal: () => void;
};

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);

  const openModal = (doctorId?: string) => {
    setSelectedDoctorId(doctorId || null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedDoctorId(null);
  };

  return (
    <BookingModalContext.Provider value={{ isOpen, selectedDoctorId, openModal, closeModal }}>
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) throw new Error("useBookingModal must be used within BookingModalProvider");
  return ctx;
}