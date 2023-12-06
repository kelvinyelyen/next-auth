import Modal from "@/components/shared/modal";
import { signIn } from "next-auth/react";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { LoadingDots, Google, Github } from "@/components/shared/icons";
import Image from "next/image";

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [googleSignInClicked, setGoogleSignInClicked] = useState(false);
  const [githubSignInClicked, setGithubSignInClicked] = useState(false);

  const handleSignIn = async (provider: string) => {
    if (provider === 'google') {
      setGoogleSignInClicked(true);
    } else if (provider === 'github') {
      setGithubSignInClicked(true);
    }

    await signIn(provider);

    if (provider === 'google') {
      setGoogleSignInClicked(false);
    } else if (provider === 'github') {
      setGithubSignInClicked(false);
    }
  };

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-background px-4 py-6 pt-8 text-center md:px-16">
          <a href="">
            <Image
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Sign In</h3>
          <p className="text-sm text-secondary">
            This is strictly for demo purposes - only your email and profile
            picture will be stored.
          </p>
        </div>

        <div className="flex flex-col space-y-4 bg-background px-4 py-8 md:px-16">
          <button
            disabled={googleSignInClicked}
            className={`${
              googleSignInClicked
                ? "cursor-not-allowed bg-button"
                : "border bg-button text-primary hover:bg-button/90"
            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={() => handleSignIn("google")}
          >
            {googleSignInClicked ? (
              <LoadingDots color="#808080" />
            ) : (
              <>
                <Google className="h-5 w-5" />
                <p>Sign In with Google</p>
              </>
            )}
          </button>
          <button
            disabled={githubSignInClicked}
            className={`${
              githubSignInClicked
                ? "cursor-not-allowed bg-button"
                : "border bg-button text-primary hover:bg-button/90"
            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={() => handleSignIn("github")}
          >
            {githubSignInClicked ? (
              <LoadingDots color="#808080" />
            ) : (
              <>
                <Github className="h-5 w-5" />
                <p>Sign In with GitHub</p>
              </>
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    );
  }, [showSignInModal, setShowSignInModal]);

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback]
  );
}
