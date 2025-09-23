import { cn } from "@/lib/utils";// ✅ Ruta corregida

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
};

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "px-4 py-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300",
        variant === "primary" &&
          "bg-yellow-400 text-black hover:bg-yellow-300 shadow-md",
        variant === "secondary" &&
          "bg-white text-[#733CEB] hover:bg-gray-100 shadow-md",
        variant === "outline" &&
          "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black",
        className
      )}
    >
      {children}
    </button>
  );
}
