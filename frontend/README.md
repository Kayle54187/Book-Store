# Book Store Front End Application

Built using React.js Next.js 14, Tailwindcss, Shadcn UI Components and React Query.

## Install Package Dependencies

```bash
pnpm i
```

## Configure base URL of the backend in axios

```bash
    cd frontend/utils
    gedit axios.ts
```

```js
const baseInstance = axios.create({
	//Add the Base URL
	baseURL: "http://localhost:3000",
});
```

## Start the Application

```bash
pnpm dev
```

@Author @Kayle54187 HABIMANA INGABIRE Christian -2024
