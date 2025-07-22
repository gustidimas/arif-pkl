import Link from "next/link";

function Header() {
  return (
    <div className="w-full p-4 flex flex-row justify-between items-center bg-green-800 text-white">
      <div className="flex flex-row justify-center items-center gap-2">
        <Link href="/" className="flex flex-row justify-start items-center gap-2">
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
      <div className="flex flex-row justify-center items-center gap-2">
        <Link href="/" className="hover:underline">
          Beranda
        </Link>
        <Link href="/profil" className="hover:underline">
          Profil
        </Link>
        <Link href="/struktur" className="hover:underline">
          Struktur
        </Link>
      </div>
    </div>
  );
}

export default Header;
