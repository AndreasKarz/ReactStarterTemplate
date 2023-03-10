# Complete React Starter Template

Starter template based on [Vite](https://vitejs.dev/guide/) with a small boilerplate page incl. **routing & theming**.

**Includes**:

- React 18
- React Router
- React Query (comming soon)
- Axios
- TailwindCSS
- Flowbite React
- Iconify

## Docs

### [Vite](https://vitejs.dev/guide/env-and-mode.html)

### [React](https://reactjs.org/docs/getting-started.html)

#### [React Router](https://reactrouter.com/en/main/start/overview)

> React Router enables _client side routing_. Client side routing allows your app to update the URL from a link click without making another request for another document from the server.
> There is a [good intrudoction](https://www.youtube.com/watch?v=Ul3y1LXxzdU) on YouTube.

#### [React i18n](https://react.i18next.com/)

#### [React Query](https://react-query-v3.tanstack.com/)

> Performant and powerful data synchronization for React
>
> - [React Query Makes Writing React Code 200% Better](https://www.youtube.com/watch?v=lVLz_ASqAio)
> - [Learn React Query In 50 Minutes](https://www.youtube.com/watch?v=r8Dg0KVnfMA)

#### [Axios](https://axios-http.com/docs/intro)

> Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase).

#### [usehooks-ts](https://usehooks-ts.com/)

> Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
>
> There is also a [Free React Hooks Course](https://courses.webdevsimplified.com/react-hooks-simplified)

### [TailwindCSS](https://tailwindcss.com/docs/utility-first)

> A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
> A special section ist [theming](https://flowbite.com/docs/customize/theming/) your website.

### [Flowbite](https://flowbite.com/docs/getting-started/introduction/)

> Get started with the most popular open-source library of interactive UI components built with the utility classes from Tailwind CSS.

#### [Flowbite React](https://flowbite-react.com/)

> Brings Flowbite to React with special React Components.

### [Iconify](https://icon-sets.iconify.design/)

> Over 100,000 open source vector icons as a React Component.

### [vite-plugin-html-env](https://github.com/lxs24sxl/vite-plugin-html-env)

## Tips

### VS Code extensions

#### [Tailwind CSS IntelliSense](https://braydoncoyer.dev/blog/enable-autocomplete-for-tailwind-css-in-vscode)

#### React

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Organize imports

> Shift + Alt + O

## Manual installation

```powershell
yarn create vite my-app --template react-swc-ts

cd my-app

yarn add react-router-dom localforage match-sorter sort-by

yarn add -D tailwindcss postcss autoprefixer

yarn run tailwindcss init -p

yarn add flowbite flowbite-react

yarn add --dev @iconify/react

yarn add usehooks-ts

yarn add vite-plugin-html-env -D

yarn add i18next

yarn add i18next-browser-languagedetector

yarn add i18next-http-backend

yarn add react-i18next
```

### src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### tailwind.config.cjs

```js
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			gray: colors.coolGray,
			blue: colors.lightBlue,
			red: colors.rose,
			pink: colors.fuchsia,
		},
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
};
```

## Helpers

### Layout & Design

[CSS Layout Generator](https://layout.bradwoods.io/)

[CSS Gradient](https://cssgradient.io/)

[CSS Background Patterns](https://www.magicpattern.design/tools/css-backgrounds)

[Responsively App](https://responsively.app/)

### SEO

#### Allgemein

[Structured routes](https://developers.google.com/search/docs/crawling-indexing/url-structure)
[Create and deploy sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

#### [HTML Meta tags](https://www.w3schools.com/tags/tag_meta.asp)

[It's a simple guide to HTML](https://htmlhead.dev/)

#### Structured data

[Generate structured data](https://developers.google.com/search/docs/appearance/structured-data/generate-structured-data-with-javascript#use-google-tag-manager)
[Schema markup generator](https://technicalseo.com/tools/schema-markup-generator/)
[Markup helper](https://www.google.com/webmasters/markup-helper/)
[Benefits](https://www.o8.agency/blog/using-structured-data-google-seo-dont-miss-out-benefits)

## Learn

[This One Line Of Code Catches React Bugs For You](https://www.youtube.com/watch?v=XUwzASyHr4Q)

[Most Beginner React Developers Do This Wrong](https://www.youtube.com/watch?v=E1cklb4aeXA)

[React Hooks Simplified Free Course](https://courses.webdevsimplified.com/react-hooks-simplified)

## Channels to follow

[Web Dev Simplified (React)](https://www.youtube.com/@WebDevSimplified)

[Kevin Powell (CSS)](https://www.youtube.com/@KevinPowell)

# [TODO]

- Add https://react-query-v3.tanstack.com/
  - https://jsonplaceholder.typicode.com/posts
- Complete ld+json
- Make the Pages more beauty
