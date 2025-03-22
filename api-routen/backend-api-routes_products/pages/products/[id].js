import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: product,
    error,
    isLoading,
  } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (isLoading) return <p>Lade Produktdetails...</p>;
  if (error || !product) return <p>Produkt nicht gefunden</p>;



  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Preis: {product.price}{product.currency}</p>
      <p>Kategorie: {product.category}</p>
    </div>
  );
}
//////