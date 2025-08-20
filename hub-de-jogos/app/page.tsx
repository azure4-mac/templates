// app/page.tsx
import prisma from "@/lib/prisma";
import styles from "@/app/styles/Home.module.css";
import Link from "next/link";

async function getGames() {
    const games = await prisma.game.findMany({
        orderBy: { createdAt: 'desc' },
        include: { author: true },
    });
    return games;
}

export default async function HomePage() {
    const games = await getGames();

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>Jogos em Destaque</h1>
            <div className={styles.grid}>
                {games.map((game) => (
                    <div key={game.id} className={styles.card}>
                        {game.imageUrl && <img src={game.imageUrl} alt={game.title} className={styles.cardImage} />}
                        <h2>{game.title}</h2>
                        <p className={styles.author}>por {game.author.name}</p>
                        <p className={styles.description}>{game.description.substring(0, 100)}...</p>
                        <Link href={`/games/${game.id}`} className={styles.readMore}>Ver Mais</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}