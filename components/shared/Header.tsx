import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='w-full h-12 flex justify-between items-center px-5'>
      <Link href='/' className='flex gap-2 items-center w-2/12'>
        <Image src='/Photonix.svg' alt='Logo' width={24} height={24} priority />
        <h1 className='text-2xl font-black uppercase tracking-wider text-gray-700'>
          Photonix
        </h1>
      </Link>
    </header>
  );
};

export default Header;
