import Balancer from 'react-wrap-balancer';
import { Github } from '@/components/shared/icons';
import { DEPLOY_URL } from "@/lib/constants";

export default function Home() {
  const animationStyles = {
    animationDelay: '0.15s',
    animationFillMode: 'forwards',
  };

  return (
    <div className="z-10 w-full max-w-screen-xl px-5 xl:px-0">
      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-gray-100 bg-clip-text p-5 text-center font-display text-5xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-9xl md:leading-[7rem]"
        style={animationStyles}
      >
        <Balancer>Authentication for your Next project.</Balancer> 
      </h1>
      
      <p
        className="mt-6 animate-fade-up text-center text-gray-400 opacity-0 md:text-md"
        style={{ ...animationStyles, animationDelay: '0.25s' }}
      >
        <Balancer>
          Template built with Nextjs, Vercel Postgres,<br /> Prisma and NextAuthjs        
        </Balancer>
      </p>

      <div className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
           style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
        <a className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-white bg-white px-5 py-2 text-sm text-black transition-colors hover:border-black"
           href={DEPLOY_URL} target="_blank" rel="noopener noreferrer">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L20 20H4L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p>Deploy to Vercel</p>
        </a>
        
        <a className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
           href="https://github.com/kelvinyelyen/nextjs-postgres-auth" target="_blank" rel="noopener noreferrer">
          <Github />
          <p>
            <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
          </p>
        </a>
      </div>
      
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
      </div>
      
      <div className="max-w-screen-lg mx-auto">
        <h1 className="animate-fade-up bg-gradient-to-br from-black to-gray-100 bg-clip-text p-5 text-center font-display text-3xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-5xl md:leading-[7rem]"
            style={animationStyles}>
          <Balancer>Features.</Balancer>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <ul className='text-gray-400 font-mono text-center'>
                <li>Next.js & Vercel Deployment</li>
                <li>Prisma PostgreSQL Management</li>
                <li>Secure Environment Variables</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-black shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <ul className='text-gray-400 font-mono text-center'>
                <li>NextAuth.js Integration</li>
                <li>Multi-Provider Support</li>
                <li>Custom API Routes</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-black shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <ul className='text-gray-400 font-mono text-center'>
                <li>Protected Routes</li>
                <li>Scalable Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
