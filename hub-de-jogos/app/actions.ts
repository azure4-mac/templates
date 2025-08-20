// app/actions.ts
"use server";

import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { redirect } from "next/navigation";

// Ação para cadastrar um novo usuário (continua igual)
export async function registerUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!name || !email || !password) {
    throw new Error("Todos os campos são obrigatórios.");
  }

  const hashedPassword = await hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  redirect("/login");
}

// Ação para criar um novo jogo (MODIFICADA)
export async function createGame(formData: FormData) { // <-- MUDANÇA AQUI: recebe apenas formData
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const downloadLink = formData.get("downloadLink") as string;
    const imageUrl = formData.get("imageUrl") as string;
    const authorId = formData.get("authorId") as string; // <-- NOVO: pegando o ID do formulário

    if (!title || !description || !downloadLink || !authorId) {
        throw new Error("Campos obrigatórios faltando.");
    }
    
    await prisma.game.create({
        data: {
            title,
            description,
            downloadLink,
            imageUrl: imageUrl || null,
            authorId, // Usando o ID que veio do campo oculto
        },
    });

    redirect("/dashboard");
}