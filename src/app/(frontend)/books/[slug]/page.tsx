


import config from "@payload-config";
import { getPayload } from "payload";
import Image from "next/image";

export default async function BookPage({ params }: { params: any }) {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "books",
    where: { slug: { equals: params.slug } },
    depth: 2,
  });

  const book = result.docs[0];

  if (!book) {
    return <p>Fant ikke boken</p>;
  }

  const coverAny = book.cover as any;
  const imageUrl = coverAny?.url || null;

  return (
    <section className="book-page">
      <h1>{book.title}</h1>

      {imageUrl && (
        <Image
          src={imageUrl}
          alt={book.title}
          width={300}
          height={400}
        />
      )}

      <p><strong>Pris:</strong> {book.price} kr</p>
      <p><strong>På lager:</strong> {book.stock}</p>

      <p className="book-description">{book.description}</p>
    </section>
  );
}
