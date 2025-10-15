// app/dashboard/new/page.tsx
import { createGame } from "@/app/actions";
import { auth } from "@/auth";
import styles from "@/app/styles/Form.module.css";

export default async function NewGamePage() {
  const session = await auth();

  if (!session?.user?.id) {
    return <p>Você precisa estar logado para criar um jogo.</p>;
  }

  // Não usamos mais o .bind() aqui
  
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Promover Novo Jogo</h1>
      {/* A action agora aponta diretamente para a função createGame */}
      <form action={createGame} className={styles.form}>
        {/* CAMPO OCULTO para enviar o ID do autor junto com o formulário */}
        <input type="hidden" name="authorId" value={session.user.id} />

        <label htmlFor="title">Título do Jogo</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="description">Descrição</label>
        <textarea id="description" name="description" rows={5} required></textarea>

        <label htmlFor="downloadLink">Link para Download</label>
        <input type="url" id="downloadLink" name="downloadLink" required />

        <label htmlFor="imageUrl">URL da Imagem (Opcional)</label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          placeholder="https://exemplo.com/imagem.png"
        />

        <button type="submit" className={styles.button}>
          Publicar Jogo
        </button>
      </form>
    </div>
  );
}