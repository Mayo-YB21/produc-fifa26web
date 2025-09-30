// src/app/login/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos de inicio de sesión:", { email, password });
    // Aquí podrías hacer la lógica de autenticación
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#A885F2] px-4">
      <h1 className="text-4xl font-bold mb-2 text-black">Bienvenido</h1>
      <p className="text-lg mb-6 text-black">
        Inicia sesión para continuar
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-[#8E6AE6] p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        {/* Correo */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-black font-medium">
            Correo
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="p-2 rounded-lg text-black"
            required
          />
        </div>

        {/* Contraseña */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-black font-medium">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="p-2 rounded-lg text-black"
            required
          />
        </div>

        {/* Botón */}
        <Button type="submit" className="w-full">
          Iniciar Sesión
        </Button>

        {/* Link a Registro */}
        <p className="text-center text-black">
          ¿No tienes cuenta?{" "}
          <Link href="/register" className="text-yellow-300 hover:underline">
            Regístrate
          </Link>
        </p>
      </form>
    </div>
  );
}
