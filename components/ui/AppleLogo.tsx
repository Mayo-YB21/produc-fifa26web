// components/ui/AppleLogo.tsx
import Link from 'next/link';

const AppleLogo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
        <span className="text-white font-bold text-sm">F26</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-light tracking-tight">FIFA26</span>
        <span className="text-xs text-gray-500 -mt-1">Store</span>
      </div>
    </Link>
  );
};

export default AppleLogo;