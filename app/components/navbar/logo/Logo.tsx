'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <div className='logo'>
      <Image
        alt="Logo"
        height={50}
        width={50}
        src="/images/pikachu.png"
      />
    </div>
  );
}

export default Logo;