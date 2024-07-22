import Image from 'next/image';
import { lusitana } from '@/app/ui/font';

export default function StockifyLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
       <Image
        src="/logo-no-background.svg"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
     
    </div>
  );
}
