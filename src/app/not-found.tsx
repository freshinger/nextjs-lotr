import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Page not found!</h1>
      <Link href="/volumes">Return to Overview</Link>
    </div>
  );
}
