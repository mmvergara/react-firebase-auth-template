# React Firebase Auth with Protected Routes

<p align="center">
<img src="remove_me.png" width="450">
</p>

## Features

- 🚀 Protected Routes
- 🚀 Firebase User Object in Global Context via `useUser`
- 🚀 User Authentication
- 🚀 Routing

It's also blazingly fast 🔥 No really, [try it out for yourself.](https://react-firebase-auth-templ-mmvergaras-projects.vercel.app/)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Go to `./config.ts` and add your Firebase configuration
4. Run the app: `npm run dev`

## What you need to know

- `/router/index.tsx` is where you declare your routes
- `/context/AuthContext.tsx` is where you can find the `useUser` hook
  - This hook gives you access to the `user` object from Firebase Auth globally
- `/Providers.tsx` is where you can add more `providers` or `wrappers`
