import { cn } from "@/app/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string; // Opcional: texto arriba del input
  error?: string; // Para mostrar mensaje de error
};

export default function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        {...props}
        className={cn(
          "px-4 py-2 rounded-xl border border-gray-300 text-black bg-white focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all",
          error && "border-red-500 focus:ring-red-300",
          className
        )}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
