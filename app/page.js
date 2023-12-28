import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href='/community'>community</Link></p>
      <p><Link href='/meals'>meals</Link></p>
      <p><Link href='/meals/share'>meals/share</Link></p>
      <p><Link href='/meals/post-1'>post 1</Link></p>
    </main>
  );
}
