"use client"; // 👈 obligatorio porque usará hooks

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // 🚨 Aquí simulamos si el usuario está logueado o no
    const isLoggedIn = false; // <- más adelante puedes cambiarlo por un estado real

    // Si NO está logueado y no está en login o register, lo mando al login
    if (!isLoggedIn && pathname !== "/login" && pathname !== "/register") {
      router.push("/login");
    }
  }, [pathname, router]);

  return <>{children}</>; // devuelve el contenido normal
}
