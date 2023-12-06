"use client";

import Link from "next/link";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";

import { Button } from "../ui/button";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();

  return (
    <>
      <SignInModal />
      <div className="container flex h-16 items-center justify-between">
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/">
            <p className="flex items-center text-md lg:text-xl tracking-tighter">
              portal_
            </p>
          </Link>
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <Button
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}