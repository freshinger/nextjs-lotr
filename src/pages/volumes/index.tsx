import Link from "next/link";
import { introduction, volumes } from "../../lib/data";

export default function Index() {
  const volumeItems = volumes.map( (volume, index) => 
  <li key={index}><Link href={'/volumes/'+encodeURIComponent(volume.slug)}>{volume.title}</Link></li>);

  const randomIndex = Math.floor(Math.random() * volumes.length);

  return (
    <main>
        <h1>Lord of the Rings</h1>
        <p>{introduction}</p>
        <h2>All Volumes</h2>
        <hr></hr>
        <ul>
          {volumeItems}
        </ul>
        <hr></hr>
        <Link href={'/volumes/'+encodeURIComponent(volumes[randomIndex].slug)}>Random Volume</Link>
    </main>
  );
}
