import Link from "next/link";

export default function HomeScreen() {
  return (
    <div>
      <h1>Página Inicial [nova alteração!]</h1>
      <Link href="/sobre">Ir para a sobre</Link>
    </div>
  );
}
