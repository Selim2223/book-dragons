"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/components/cartStore";

export default function CheckoutPage() {
  const router = useRouter();
  const cartItems = useCartStore((state) => state.items);
  const resetCart = useCartStore((state) => state.reset);

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [pickupNote, setPickupNote] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerName,
        customerEmail,
        customerPhone,
        pickupNote,
        items: cartItems.map((item) => ({
          bookId: item.bookId,
          quantity: item.quantity,
        })),
      }),
    });

    if (!res.ok) {
      alert("Feil ved sending av bestilling!");
      return;
    }

    resetCart();

    router.push("/success");
  }

  return (
    <section className="checkout-container">
      <h2>Utsjekk</h2>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>Navn</label>
        <input
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />

        <label>E-post</label>
        <input
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          required
        />

        <label>Telefon</label>
        <input
          value={customerPhone}
          onChange={(e) => setCustomerPhone(e.target.value)}
          required
        />

        <label>Ønsket hentetid</label>
        <input
          value={pickupNote}
          onChange={(e) => setPickupNote(e.target.value)}
        />

        <button type="submit">Send bestilling</button>
      </form>
    </section>
  );
}
