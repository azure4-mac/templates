// app/components/Header.tsx
"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import styles from "@/app/styles/Header.module.css";

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Hub de Jogos
        </Link>
        <nav className={styles.nav}>
          {status === "loading" ? (
            <p>Carregando...</p>
          ) : session ? (
            <>
              <Link href="/dashboard">Meu Dashboard</Link>
              <button onClick={() => signOut()} className={styles.button}>
                Sair
              </button>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register" className={styles.button}>
                Cadastrar
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}