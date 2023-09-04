import Balancer from 'react-wrap-balancer';
import { Github } from '@/components/shared/icons';
import { DEPLOY_URL } from '@/lib/constants';

export default function Home() {
  const animationStyles = {
    animationDelay: '0.15s',
    animationFillMode: 'forwards',
  };

  const deployLinkStyles = `group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black`;
  const githubLinkStyles = `flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 transition-colors hover:border-gray-800`;

  return (
    <div className="z-10 w-full max-w-screen-xl px-5 xl:px-0">
      <h1
        className={`animate-fade-up text-black text-center font-display text-5xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-8xl md:leading-[5rem] font-inter`}
        style={animationStyles}
      >
        <Balancer>NextAuth</Balancer>
      </h1>
      <p
        className={`mt-5 animate-fade-up text-center text-gray-400 opacity-0 md:text-md`}
        style={{ ...animationStyles, animationDelay: '0.25s' }}
      >
        <Balancer>
          NextAuth with Vercel Postgres & Prisma
        </Balancer>
      </p>
      <div className="mx-auto mt-5 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
           style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
        <a className={deployLinkStyles}
           href={DEPLOY_URL} target="_blank" rel="noopener noreferrer">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L20 20H4L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p>Deploy to Vercel</p>
        </a>
        <a className={githubLinkStyles}
           href="https://github.com/kelvinyelyen/next-auth" target="_blank" rel="noopener noreferrer">
          <Github />
          <p>
            <span className="hidden sm:inline-block">Star on</span> GitHub
          </p>
        </a>
      </div>
    </div>
  );
}
