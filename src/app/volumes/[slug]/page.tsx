import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../../lib/data";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const book = volumes.filter(volume => volume.slug === slug);

  if(book.length == 0){
    return notFound();
  }
  const index = volumes.indexOf(book[0]);
  const books = book[0].books.map( (book, index) => 
  <li key={index}>
    <h3>{book.ordinal} {book.title}</h3>
  </li>)
  let nextButtons = <div></div>;
  switch (index) {
    case 0:
      nextButtons = <div  className="buttongroup"><div></div><Link href={volumes[index+1].slug}>Next</Link></div>;
      break;
    case volumes.length-1:
      nextButtons = <div><Link href={volumes[index-1].slug}>Previous</Link></div>;
      break;
    default:
      nextButtons = <div className="buttongroup">
        <Link href={volumes[index-1].slug}>Previous</Link>
        <Link href={volumes[index+1].slug}>Next</Link>
        </div>;
      break;
  }
  return (
    <div>
      <Link href="/volumes">All Volumes</Link>
      <h1>{book[0].title}</h1>
      <p>{book[0].description}</p>
      <ul>{books}</ul>
      <Image src={book[0].cover} alt={book[0].cover} width='140' height='230'></Image>
      <hr></hr>
      {nextButtons}
    </div>
  )
}