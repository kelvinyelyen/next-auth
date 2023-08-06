# Authentication Boilerplate for Nextjs

![Project Logo](/public/banner.png)

An authentication template built using Next.js, Vercel Postgres, Prisma, and NextAuth.js.  A great foundation for implementing authentication in various web applications.

Inspired by [Steven Tey's](https://github.com/steven-tey) [Precedent](https://github.com/steven-tey/precedent)

## Tech Stack

- [Next.js](https://nextjs.org/) & [Vercel](https://vercel.com/) Deployment
- [Prisma](https://www.prisma.io/) Vercel PostgreSQL Management
- [NextAuth.js](https://next-auth.js.org/) Integration
- [Tailwind CSS](https://tailwindcss.com/) for UI
- [Framer Motion](https://www.framer.com/motion/) for Animations
- [Lucide Icons](https://lucide.dev/) for Icons

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)

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

## Contributing

This project is aimed at streamlining and automating common project tasks, with a focus on creating an authentication template for Next.js projects. This template is under development, and contributions, feedback, and suggestions are highly appreciated.

### How to Contribute

1. **Clone the Repository:** Fork this repository, clone it to your local machine, and create a new branch.

   ```bash
   git clone https://github.com/kelvinyelyen/nextjs-postgres-auth.git
   cd nextjs-postgres-auth
   git checkout -b feature/your-feature-name

### Get Involved
- Feel free to clone, use, and customize this template for your projects.
- If you encounter any issues, have ideas for improvements, or want to contribute, please open an issue or pull request.
- Your feedback and contributions will greatly help me enhance and evolve this template.
