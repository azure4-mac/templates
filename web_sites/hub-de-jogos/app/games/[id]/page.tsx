// app/games/[id]/page.tsx
import prisma from "@/lib/prisma";
import styles from "@/app/styles/GameDetail.module.css";

async function getGame(id: string) {
    const game = await prisma.game.findUnique({
        where: { id },
        include: { author: true },
    });
    return game;
}

export default async function GameDetailPage({ params }: { params: { id: string } }) {
    const game = await getGame(params.id);

    if (!game) {
        return <div>Jogo não encontrado.</div>;
    }

    return (
        <div className={styles.container}>
            {game.imageUrl && <img src={game.imageUrl} alt={game.title} className={styles.mainImage} />}
            <h1 className={styles.title}>{game.title}</h1>
            <p className={styles.author}>Publicado por: {game.author.name}</p>
            <p className={styles.description}>{game.description}</p>
            <a href={game.downloadLink} target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
                Baixar o Jogo
            </a>
        </div>
    );
}