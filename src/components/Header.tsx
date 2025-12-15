"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/components/cartStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const items = useCartStore((state) => state.items);
  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?query=${query}`);
    setQuery("");
  }

  return (
    <header className="header">
      {/* ЛОГО */}
      <Link href="/" className="logo">
        <Image src="/logo.svg" alt="Logo" width={140} height={140} />
      </Link>

      {/* НАВИГАЦИЯ */}
      <nav className="nav-center">
        <Link href="/books">Bøker</Link>
        <Link href="/genres">Sjangere</Link>
        <Link href="/authors">Forfattere</Link>
        <Link href="/age-groups">Barn</Link>
        <Link href="/age-groups">Ungdommer</Link>
        <Link href="/news">Nyheter</Link>
      </nav>

      {/* ПОИСК + КОРЗИНА */}
      <div className="right-side">
        {/* 🔍 ПОИСК */}
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Søk etter bøker..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

        {/* 🛒 КОРЗИНА */}
        <Link href="/cart" className="cart-icon">
          <Image src="/cart.svg" alt="Cart" width={40} height={40} />

          {mounted && totalCount > 0 && (
            <span className="cart-count">{totalCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
}
