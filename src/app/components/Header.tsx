import Link from "next/link";

function Header() {
  return (
    <div className="w-full p-4 flex flex-col md:flex-row md:justify-between md:items-center bg-green-800 text-white gap-8 md:gap-0">
      <div className="flex flex-row justify-center items-center gap-2">
        <Link
          href="/"
          className="flex flex-row justify-start items-center gap-2"
        >
          <img
            src="/images/logokajari.png"
            alt="Logo Kajari"
            className="w-20 h-24"
          />
          <div className="flex flex-col justify-center items-start">
            <p className="font-bold">TINDAK PIDANA UMUM</p>
            <p>KEJAKSAAN NEGERI SAMARINDA</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-2">
        <Link href="/" className="hover:underline">
          Beranda
        </Link>
        <Link href="/struktur" className="hover:underline">
          Struktur
        </Link>
        <Link href="/tufungsi" className="hover:underline">
          Tufungsi
        </Link>
        <Link href="/berita" className="hover:underline">
          Berita
        </Link>
      </div>
    </div>
  );
}

export default Header;
