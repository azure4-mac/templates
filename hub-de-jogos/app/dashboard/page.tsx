// app/dashboard/page.tsx
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import Link from "next/link";
import styles from "@/app/styles/Dashboard.module.css";

async function getUserGames(userId: string) {
  const games = await prisma.game.findMany({
    where: { authorId: userId },
    orderBy: { createdAt: "desc" },
  });
  return games;
}

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user?.id) { // Verificação mais segura
    return <p>Acesso negado. Faça login para ver seu dashboard.</p>;
  }

  const games = await getUserGames(session.user.id);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Meu Dashboard</h1>
        <Link href="/dashboard/new" className={styles.newGameButton}>
          + Promover Novo Jogo
        </Link>
      </div>

      <div className={styles.gamesList}>
        {games.length > 0 ? (
          games.map((game) => (
            <div key={game.id} className={styles.gameItem}>
              <h3>{game.title}</h3>
              {/* Futuramente, adicionar botões de editar/excluir aqui */}
            </div>
          ))
        ) : (
          <p>Você ainda não promoveu nenhum jogo.</p>
        )}
      </div>
    </div>
  );
}