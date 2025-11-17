"use client";

import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function Home() {
  const { fullName, setFullName } = useUser();
  const [roomID, setRoomID] = useState("");
  const router = useRouter();

  useEffect(() => {
    setFullName("");
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <section className="w-full">
        <div className="mx-auto max-w-screen-xl px-6 py-24 flex flex-col items-center gap-16">
          <Image
            src="/eneserslogo.png"
            alt="logo"
            width={260}
            height={100}
            className="opacity-90 hover:opacity-100 transition"
          />

          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-4xl font-extrabold bg-gradient-to-r from-green-300 via-blue-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Telemedicine Enesers App
            </h1>

            <h2 className="mt-2 text-2xl md:text-4xl font-semibold bg-gradient-to-r from-green-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              Experience the Future with Enesers
            </h2>

            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed mx-auto max-w-xl">
              Connect with healthcare professionals anytime, anywhere. Enjoy
              seamless telemedicine services with Enesers App.
            </p>

            <div className="flex items-center justify-center gap-3 mt-8 mb-8">
              <input
                type="text"
                id="name"
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your name"
                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              />
            </div>

            {fullName && fullName.length >= 3 && (
              <>
                <div>
                  <input
                    type="text"
                    id="roomId"
                    onChange={(e) => setRoomID(e.target.value)}
                    placeholder="Enter room ID to join meeting"
                    className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                  />
                  <button
                    onClick={(e) => router.push(`/room/${roomID}`)}
                    disabled={!roomID}
                    className="w-full bg-blue-400 px-10 py-3 rounded-sm mt-8 hover:bg-blue-500 transition-all hover:cursor-pointer"
                  >
                    Join
                  </button>
                </div>

                <div className="mt-4 flex justify-center item-center">
                  <button
                    onClick={() => router.push(`/room/${uuid()}`)}
                    className="hover:cursor-pointer hover:underline"
                  >
                    Or create a new meeting
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
