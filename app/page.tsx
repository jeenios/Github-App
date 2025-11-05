"use client";

import Navbar from "@/components/navbar/page";
import { useState } from "react";
import { HiFingerPrint } from "react-icons/hi";

export default function Home() {
  const [repos, setRepos] = useState(null);

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Navbar onReposFetched={setRepos} />

      <div className="flex flex-col justify-center items-center flex-1 gap-4 mt-24 px-4">
        {!repos ? (
          <>
            <HiFingerPrint size={100} />
            <div className="text-black text-2xl font-semibold">
              Selamat datang 🥳
            </div>
            <div className="text-black text-center">
              Silahkan masukan username github anda pada kolom pencarian di atas
            </div>
          </>
        ) : repos.length === 0 ? (
          <p className="text-gray-600 mt-10">
            User ini tidak memiliki repository publik 😅
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition text-black"
              >
                <h3 className="text-lg font-semibold mb-2">{repo.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {repo.description || "Tidak ada deskripsi."}
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>{repo.language || "Unknown"}</span>
                  <span>
                    🕓 {new Date(repo.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
