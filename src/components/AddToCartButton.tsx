'use client'

import { useCartStore } from '@/components/cartStore'

type Book = {
  id: string
  title: string
  price: number
}

export default function AddToCartButton({ book }: { book: Book }) {
  const addItem = useCartStore((state) => state.addItem)

  function handleClick() {
    addItem({
      bookId: book.id,
      title: book.title,
      price: book.price,
      quantity: 1,
    })
  }

  return <button onClick={handleClick}>Legg i handlekurv</button>
}
