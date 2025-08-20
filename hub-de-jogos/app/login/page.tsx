// app/login/page.tsx
"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/Form.module.css";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      router.push("/dashboard");
    } else {
      alert("Email ou senha inválidos!");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Entrar</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
}