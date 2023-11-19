This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Deployed here using Vercel: <https://sylvera-project-list.vercel.app>

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

## TODO

- Show message when no data found for an entry.  I added some logic to handle this, but it's not working
- Add time to the feed data shown on the cards for a project
- Fix project feed cards, they are not responsive.  The text overflows
- Add more test coverage


## Decisions

- Used app router 
- Didn't use tRPC because I'm not practised with it, so would have slowed me down.  I think this would have been a more safe choice if I had more time since the response would have been typed
- Used cypress component testing instead of react testing library to rapidly create tests.  Thought it was the safest choice given the time limit
