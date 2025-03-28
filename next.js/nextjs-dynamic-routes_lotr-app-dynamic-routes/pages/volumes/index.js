import { useRouter } from "next/router";
import Link from "next/link";
import { introduction, volumes } from "../../lib/data";

export default function VolumesPage() {
  const router = useRouter();


function getRandomVolume(){
const randomVolume = volumes[Math.floor(Math.random() * volumes.length)]
router.push(`/volumes/${randomVolume.slug}`)

}



  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <button onClick={getRandomVolume}>Random Book</button>

      <ul>
{volumes.map(({title, slug }) => (
<li key={slug}>
  <Link href={`/volumes/${slug}`}>{title}</Link>
</li>
))}
        {/* <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li> */}
      </ul>
    </>
  );
}
