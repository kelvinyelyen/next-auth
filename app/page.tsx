import Link from 'next/link';
import { DEPLOY_URL } from '@/lib/constants';

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="container">
      <h2 className="text-2xl tracking-tighter text-center lg:mt-0 mt-3">NextAuth</h2>
      <p className="text-sm text-center p-3 text-secondary">
        NextAuth with Vercel Postgres & Prisma
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1  gap-4 p-4">
        <Card>
          <CardHeader>
            <CardTitle>NextAuth.js</CardTitle>
            <CardDescription>
              An complete open-source authentication solution for Next.js applications
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href="https://next-auth.js.org/getting-started/introduction" target="_blank">
                Learn more
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prisma</CardTitle>
            <CardDescription>Next-generation Node.js and TypeScript ORM</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href="https://www.prisma.io/docs/getting-started" target="_blank">
                Learn more
              </Link>
            </Button>
          </CardFooter>
        </Card>


        <Card>
          <CardHeader>
            <CardTitle>Vercel Postgres</CardTitle>
            <CardDescription>
              Serverless SQL database designed to integrate with Vercel Functions and your frontend framework
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href="https://vercel.com/docs/storage/vercel-postgres" target="_blank">
                Learn more
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shadcn</CardTitle>
            <CardDescription>
              Beautifully designed components that you can copy and paste into
              your apps.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href="https://ui.shadcn.com/" target="_blank">Learn more</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>One-Click Deploy</CardTitle>
            <CardDescription>
              Instantly deploy your Next.js site to Vercel.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href={DEPLOY_URL} target="_blank">
                Deploy to Vercel
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>GitHub</CardTitle>
            <CardDescription>Star this project on GitHub</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href="https://github.com/kelvinyelyen/next-auth" target="_blank">
                Star on GitHub
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
