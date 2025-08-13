import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";
import { useRouter } from 'next/router';

export default function BookDetail() {

  const router = useRouter();

  const slug = router.query.slug
  const book = volumes.filter(volume => volume.slug === slug)[0];
  const index = volumes.indexOf(book);
  const books = book.books.map( (book, index) => 
  <li key={index}>
    <h3>{book.ordinal} {book.title}</h3>
  </li>)
  let nextButtons = <div></div>;
  switch (index) {
    case 0:
      nextButtons = <div><Link href={volumes[index+1].slug}>Next</Link></div>;
      break;
    case volumes.length-1:
      nextButtons = <div><Link href={volumes[index-1].slug}>Previous</Link></div>;
      break;
    default:
      nextButtons = <div>
        <Link href={volumes[index-1].slug}>Previous</Link>
        <Link href={volumes[index+1].slug}>Next</Link>
        </div>;
      break;
  }
  return (
    <div>
      <Link href="/volumes">All Volumes</Link>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <ul>{books}</ul>
      <Image src={book.cover} alt={book.cover} width='140' height='230'></Image>
      <hr></hr>
      {nextButtons}
    </div>
  )
}