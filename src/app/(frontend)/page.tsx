



import config from "@payload-config";
import { getPayload } from "payload";
import BookCard from "@/components/BookCard";

export default async function HomePage() {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "books",
    depth: 2,
  });

  const books = result.docs;

  return (
    <section>
      {/* Если книг НЕТ */}
      {books.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "40px", fontSize: "22px" }}>
          Ingen bøker tilgjengelig 
        </p>
      )}

      {/* Если книги ЕСТЬ — показываем сетку */}
      <div className="book-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
