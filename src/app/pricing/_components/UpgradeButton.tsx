import { Zap } from 'lucide-react';
import Link from 'next/link';

export default function UpgradeButton() {
  const CHEKOUT_URL =
    'https://b-code-sass.lemonsqueezy.com/buy/2f00b683-9d93-43d5-ae88-690f558a66ad';

  return (
    <Link
      href={CHEKOUT_URL}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
        bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg 
        hover:from-blue-600 hover:to-blue-700 transition-all"
    >
      <Zap className="w-5 h-5" />
      Upgrade to Pro
    </Link>
  );
}
