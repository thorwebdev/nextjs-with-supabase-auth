# Example: Supabase authentication client- and server-side (API routes)

This example shows how to use Supabase auth both on the client (`useUser` hook) and server in [API routes](https://nextjs.org/docs/api-routes/introduction).

## Demo

- See it in action on [CodeSandbox](https://codesandbox.io/s/github/thorwebdev/nextjs-with-supabase-auth).

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example with-supabase-auth with-supabase-auth-app
# or
yarn create next-app --example with-supabase-auth with-supabase-auth-app
```

## Configuration

### 1. Create new project

Sign up to Supabase - [https://app.supabase.io](https://app.supabase.io) and create a new project. Wait for your database to start.

### 2. Get the URL and Key

Create a copy of `.env.local.example`:

```bash
cp .env.local.example .env.local
```

Go to the Project Settings (the cog icon), open the API tab, and find your API URL and `anon` key and set them in your newly created `.env.local` file.

### 3. Install and run

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

After deploying, copy the deployment URL and navigate to your Supabase project settings (Authentication > Settings) and set your site url.
