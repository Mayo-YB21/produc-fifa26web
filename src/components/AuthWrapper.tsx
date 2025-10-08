"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 👇 Evita errores de renderizado en servidor
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // ⚙️ Simulación de autenticación
    const isLoggedIn = false; // luego puedes reemplazarlo con lógica real

    // 🚫 Redirige si no está logueado y trata de acceder a rutas protegidas
    if (!isLoggedIn && pathname !== "/login" && pathname !== "/registro") {
      router.push("/login");
    }
  }, [isClient, pathname, router]);

  // Evita renderizar en el servidor
  if (!isClient) return null;

  return <>{children}</>;
}
