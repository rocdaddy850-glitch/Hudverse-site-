This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## HUDverse additions

This scaffold includes two small example components to help you get started with HUD-driven UIs and motion:

- `components/HudOverlay.tsx` — a toggleable overlay HUD you can expand into your app's UI.
- `components/GsapDemo.tsx` — a small GSAP demo that animates three color boxes on mount.

Run the dev server and open http://localhost:3000 to see them in action. The HUD overlay button is in the bottom-right corner of the page.

### Dynamic HUD

The HUD overlay now shows a mock metric and a timestamp that updates every 2 seconds. Use this to prototype live-updating HUD data.

### GSAP demo controls

The GSAP demo includes basic controls: Play/Pause and Reverse. Use them to experiment with timelines and create more complex sequences.
