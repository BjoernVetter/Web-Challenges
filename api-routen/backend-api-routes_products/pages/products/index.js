import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductList() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) return <p>Lade Produkte...</p>;
  if (error) return <p>Fehler beim Laden der Daten</p>;

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}
