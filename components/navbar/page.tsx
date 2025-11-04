import Link from "next/link";
import { HiOutlineLightningBolt, HiOutlineSearch } from "react-icons/hi";

function Navbar() {
  return (
    <div className="fixed w-full bg-gray-100 shadow-gray-300 shadow">
      <header className="py-4 px-2 max-w-5xl mx-auto flex items-center justify-between text-black">
        <div className="flex justify-center items-center gap-4 md:gap-1 md:max-w-3xl">
          <HiOutlineLightningBolt size={30} />
          <Link href="/" className="hidden md:block font-bold italic text-2xl">
            Github Repos
          </Link>
        </div>
        <div className="relative flex justify-center items-center w-full sm:max-w-md">
          <HiOutlineSearch className="absolute left-4 text-gray-400" />
          <input
            placeholder="Masukan username github"
            className="w-full px-10 py-2.5 bg-white rounded-full text-black focus:outline-none text-sm"
          />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
