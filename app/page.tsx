import { HiFingerPrint } from "react-icons/hi";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center min-h-screen gap-4">
      <HiFingerPrint size={100} />
      <div className="text-black text-2xl font-semibold">Selamat datang 🥳</div>
      <div className="text-black">
        Silahkan masukan username github anda pada kolom pencarian di atas
      </div>
    </div>
  );
}
