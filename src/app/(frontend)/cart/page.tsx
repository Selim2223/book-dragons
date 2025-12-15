'use client'

import { useCartStore } from '@/components/cartStore'
import Link from 'next/link'

export default function CartPage() {
  const items = useCartStore((state) => state.items)
  const removeItem = useCartStore((state) => state.remove)

  return (
    <section style={{ maxWidth: 500, margin: '40px auto' }}>
      <h2>Handlekurv</h2>

      {items.length === 0 && <p>Handlekurven er tom</p>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.bookId}
            style={{
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>
              {item.title} – {item.quantity} stk
            </span>

            <button
              onClick={() => removeItem(item.bookId)}
              style={{
                background: '#b30000',
                color: 'white',
                border: 'none',
                padding: '6px 10px',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Slett
            </button>
          </li>
        ))}
      </ul>

      {items.length > 0 && (
        <Link href="/checkout">
          <button
            style={{
              marginTop: '20px',
              padding: '12px 20px',
              background: '#333',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Gå til utsjekk
          </button>
        </Link>
      )}
    </section>
  )
}
