// app/register/page.tsx
import { registerUser } from "@/app/actions";
import styles from "@/app/styles/Form.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Criar Conta</h1>
      <form action={registerUser} className={styles.form}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit" className={styles.button}>Cadastrar</button>
      </form>
    </div>
  );
}