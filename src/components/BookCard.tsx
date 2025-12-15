import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

export default function BookCard({ book }: { book: any }) {
  const coverAny = book.cover as any;
  const imageUrl = coverAny?.url || null;

  return (
    <article className="book-card">
      {/* ДЕЛАЕМ ВЕСЬ БЛОК КЛИКАБЕЛЬНЫМ */}
      <Link href={`/books/${book.slug}`} className="book-link">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={book.title}
            width={150}
            height={220}
            style={{ borderRadius: "6px" }}
          />
        )}

        <h3>{book.title}</h3>
        <p>Pris: {book.price} kr</p>
        <p>{book.stock > 0 ? "På lager" : "Ikke på lager"}</p>

        <p className="see-more">Se mer</p>
      </Link>

      {/* КНОПКА ДОБАВЛЕНИЯ В КОРЗИНУ ОСТАЁТСЯ ОТДЕЛЬНО */}
      <AddToCartButton book={book} />
    </article>
  );
}
