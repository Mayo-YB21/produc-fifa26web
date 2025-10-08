"use client";

import { useState } from "react";
// Update the import path if Input is located elsewhere, for example:
import { Input } from "../../components/ui/Input";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // borra el error al escribir
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Por favor, ingresa un correo válido.");
      return;
    }

    // Validación de contraseñas
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // Si todo es válido, simulamos registro
    console.log("Datos de registro:", formData);
    alert("✅ Registro exitoso. ¡Bienvenido!");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#A885F2] px-4">
      {/* TÍTULO */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-2">
        Crear Cuenta
      </h1>
      <p className="text-white/90 text-lg mb-8 text-center">
        Únete a la Tienda del Mundial 2026
      </p>

      {/* FORMULARIO DE REGISTRO */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#733CEB] rounded-2xl shadow-lg w-full max-w-md p-8 flex flex-col gap-4"
      >
        <Input
          name="nombre"
          type="text"
          label="Nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <Input
          name="apellido"
          type="text"
          label="Apellido"
          placeholder="Tu apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          label="Correo Electrónico"
          placeholder="tucorreo@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          name="password"
          type="password"
          label="Contraseña"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Input
          name="confirmPassword"
          type="password"
          label="Confirmar Contraseña"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        {/* MENSAJE DE ERROR */}
        {error && <p className="text-red-300 text-sm text-center">{error}</p>}

        {/* BOTÓN */}
        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-800 transition-colors"
        >
          Registrarme
        </button>

        {/* ENLACE A LOGIN */}
        <p className="text-sm text-center mt-4 text-white/80">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-yellow-300 hover:underline">
            Inicia sesión aquí
          </a>
        </p>
      </form>
    </main>
  );
}
