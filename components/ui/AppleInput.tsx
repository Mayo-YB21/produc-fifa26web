import { InputHTMLAttributes } from 'react';

interface AppleInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const AppleInput = ({ label, className = '', ...props }: AppleInputProps) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-3 border border-gray-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          transition-all duration-300
          placeholder-gray-400
          ${className}
        `}
        {...props}
      />
    </div>
  );
};
