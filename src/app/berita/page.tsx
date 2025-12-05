import Image from "next/image";

export default function Berita() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-center items-center">
          <Image
            src={"/images/photo.jpeg"}
            alt="Photo"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
        <p className="w-full lg:max-w-4xl">
          Selama melaksanakan Praktik Kerja Lapangan (PKL) di Kejaksaan Negeri
          Samarinda, saya pernah ditugaskan untuk melakukan piket pelayanan di
          Mal Pelayanan Publik (MPP) Samarinda. Penugasan ini merupakan bagian
          dari dukungan Kejaksaan dalam memberikan pelayanan publik yang
          terintegrasi dengan berbagai instansi di satu tempat.
        </p>
        <p className="w-full lg:max-w-4xl">
          Dalam kegiatan piket tersebut, saya berperan membantu pelaksanaan
          pelayanan kepada masyarakat terkait layanan-layanan Kejaksaan. Adapun
          tugas yang saya laksanakan meliputi:
        </p>
        <ol className="list-decimal">
          <li>
            Memberikan Informasi Layanan Kejaksaan Saya membantu menjelaskan
            kepada masyarakat mengenai jenis layanan Kejaksaan yang tersedia di
            MPP, seperti informasi mengenai layanan tilang, pengambilan barang
            bukti, konsultasi hukum, maupun pelayanan administrasi lainnya.
          </li>
          <li>
            Melayani Pengunjung yang Membutuhkan Bantuan Saya membantu
            masyarakat yang datang ke stand Kejaksaan, mulai dari memberikan
            arahan mengenai prosedur layanan, membantu pengisian formulir,
            hingga mengarahkan mereka kepada petugas yang sesuai.
          </li>
          <li>
            Melakukan Pencatatan Kegiatan Harian Selama piket, saya mencatat
            jumlah pengunjung, jenis layanan yang ditanyakan, serta menyusun
            laporan singkat untuk disampaikan kepada pegawai atau pembimbing di
            Kejaksaan.
          </li>
          <li>
            Mendukung Kelancaran Operasional Stand Kejaksaan Saya menjaga area
            pelayanan tetap tertata, memastikan bahan informasi seperti brosur
            tersedia, dan membantu menjaga ketertiban antrean apabila
            diperlukan.
          </li>
          <p className="w-full lg:max-w-4xl">
            Penugasan ini memberikan pengalaman langsung kepada saya dalam
            pelayanan publik, komunikasi dengan masyarakat, serta pemahaman
            mengenai proses layanan Kejaksaan di lingkungan MPP. Selain itu,
            kegiatan ini melatih saya dalam hal tanggung jawab, kedisiplinan,
            dan etika pelayanan selama berada di lingkungan instansi pemerintah.
          </p>
        </ol>
      </div>
    </>
  );
}
