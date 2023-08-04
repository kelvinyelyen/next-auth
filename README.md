# Authentication Boilerplate for Nextjs

![Project Logo](/logo.png)

An authentication template built using Next.js, Vercel Postgres, Prisma, and NextAuth.js.  A great foundation for implementing authentication in various web applications.

Inspired by [Steven Tey's](https://github.com/steven-tey) [Precedent](https://github.com/steven-tey/precedent)

## Features

- [Next.js](https://nextjs.org/) & [Vercel](https://vercel.com/) Deployment
- [Prisma](https://www.prisma.io/) PostgreSQL Management
- Secure Environment Variables
- [NextAuth.js](https://next-auth.js.org/) Integration
- Multi-Provider Support
- Custom API Routes
- Protected Routes
- Scalable Architecture
- [Tailwind CSS](https://tailwindcss.com/) for UI
- [Framer Motion](https://www.framer.com/motion/) for Animations
- [Lucide Icons](https://lucide.dev/) for Icons

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kelvinyelyen/nextjs-postgres-auth.git
   cd nextjs-postgres-auth

2. Install dependencies:

   ```bash
   npm install

3. Set up environment variables in `.env.local.`
 
4. Start the development server:

   ```bash
   npm run dev

### Folder Structure

    ```bash
    nextjs-postgres-auth/
    ├── app/
    │   ├── api/
    │   │   ├── auth/
    │   │   │   └── [...nextauth]/
    │   │   │       └── route.ts
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── ... (other components)
    ├── lib/
    │   ├── prisma.ts
    │   └── ... (other utility files)
    ├── prisma/
    │   └── schema.prisma
    ├── .env
    └── ... (other project files and folders)


`routes.ts` in `app/api/auth/[...nextauth]/`

- Contains the API routes and configurations for authentication, specifically using NextAuth.js. It defines how the authentication process works and interacts with various authentication providers.


`prisma.ts` in `lib/`

- Utility module that exports a configured instance of the Prisma Client. Prisma Client is used to interact with your PostgreSQL database and perform CRUD operations.


`schema.prisma` in `prisma/`
- This file defines your database schema using Prisma's DSL (Domain-Specific Language). It specifies the structure of your database tables, relationships between them, and additional settings.

