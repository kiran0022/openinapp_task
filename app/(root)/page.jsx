"use client";

import LeftSide from "@/components/login/LeftSide";
import RightSide from "@/components/login/RightSide";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import { redirect } from "next/navigation";

const page = () => {
  const session = useSession();
  // console.log(session);

  if (session.status === "authenticated") redirect("/dashboard");

  return (
    <>
      {session.status === "unauthenticated" && (
        <main className="flex flex-1 max-sm:flex-col min-h-screen">
          <section className="w-2/5 max-sm:w-full blue-bg">
            <LeftSide />
          </section>
          <section className="w-3/5 max-sm:w-full">
            <RightSide />
          </section>
        </main>
      )}
    </>
  );
};

export default page;
