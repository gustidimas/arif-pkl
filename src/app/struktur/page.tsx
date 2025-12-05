import Image from "next/image";

export default function Struktur() {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold text-center py-8">
        Struktur Organisasi
      </h1>
      <Image
        src="/images/struktur_pidum.png"
        alt="Struktur Pidum"
        className="w-96 h-96"
        width={500}
        height={500}
      />
    </div>
  );
}
