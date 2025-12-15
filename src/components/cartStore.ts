'use client';

import { create } from 'zustand';

type CartItem = {
  bookId: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  increase: (bookId: string) => void;
  decrease: (bookId: string) => void;
  remove: (bookId: string) => void;
  reset: () => void; // ← добавили
};

const savedCart =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("cart") || "[]")
    : [];

export const useCartStore = create<CartState>((set, get) => ({
  items: savedCart,

  addItem: (newItem) => {
    const items = get().items;
    const existed = items.find((i) => i.bookId === newItem.bookId);

    let updated;

    if (existed) {
      updated = items.map((i) =>
        i.bookId === newItem.bookId
          ? { ...i, quantity: i.quantity + 1 }
          : i
      );
    } else {
      updated = [...items, newItem];
    }

    localStorage.setItem("cart", JSON.stringify(updated));
    set({ items: updated });
  },

  increase: (bookId) => {
    const updated = get().items.map((i) =>
      i.bookId === bookId ? { ...i, quantity: i.quantity + 1 } : i
    );
    localStorage.setItem("cart", JSON.stringify(updated));
    set({ items: updated });
  },

  decrease: (bookId) => {
    const updated = get().items.map((i) =>
      i.bookId === bookId
        ? { ...i, quantity: Math.max(i.quantity - 1, 1) }
        : i
    );
    localStorage.setItem("cart", JSON.stringify(updated));
    set({ items: updated });
  },

  remove: (bookId) => {
    const updated = get().items.filter((i) => i.bookId !== bookId);
    localStorage.setItem("cart", JSON.stringify(updated));
    set({ items: updated });
  },

  reset: () => {
    localStorage.removeItem("cart");
    set({ items: [] });
  }
}));
