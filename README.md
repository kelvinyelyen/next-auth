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
   cd your-authentication-template

2. Set up environment variables in `.env.local.`

 
### Folder Structure

 ```bash
   ├── .vercel/
├── app/
│ ├── api/
│ │ ├── auth/
│ │ │ ├── [...nextauth]/
│ │ │ │ └── route.ts
│ │ │ └── signin.ts
│ │ └── ...
│ ├── components/
│ │ ├── shared/
│ │ │ ├── icons.tsx
│ │ │ └── modal.tsx
│ │ └── ...
│ ├── lib/
│ │ ├── prisma.ts
│ │ └── constants.ts
│ ├── pages/
│ │ ├── api/
│ │ │ └── auth/
│ │ │ ├── [...nextauth].ts
│ │ │ └── signin.ts
│ │ ├── ...
│ │ ├── _app.tsx
│ │ ├── index.tsx
│ │ └── ...
│ └── ...
├── public/
├── tailwind.config.js
├── .env.local
├── LICENSE
└── README.md