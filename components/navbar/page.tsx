"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { HiOutlineLightningBolt, HiOutlineSearch } from "react-icons/hi";

function Navbar({ onReposFetched }) {
  const [username, setUsername] = useState("");

  const handleSearch = async (e) => {
    if (e.key === "Enter" && username.trim() !== "") {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos?type=public&sort=updated`
        );
        onReposFetched(response.data);
        setUsername("");
      } catch (error) {
        console.error("Error fetching repos:", error);
        alert("User tidak ditemukan atau terjadi kesalahan!");
      }
    }
  };

  return (
    <div className="fixed w-full bg-gray-100 shadow-gray-300 shadow z-10">
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
