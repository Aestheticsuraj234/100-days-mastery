## **🔹 React Suspense**

### ✅ What is Suspense?
- `React.Suspense` lets components “wait” for something 
  - Lazy loading components
  - Data fetching (in frameworks like Next.js or Relay)

### ✅ Syntax:
```jsx
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

### ✅ Use Cases:
- Lazy loading components:
```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

- Data Fetching (with frameworks like Next.js App Router):
```tsx
// Server Component
export default async function Page() {
  const data = await fetchData();
  return <SomeClientComponent data={data} />;
}
```

> `Suspense` is used internally by frameworks to delay rendering until data/code is ready.

---

## **🔹 React Server Components (RSC)**

### ✅ What are RSCs?
- Components that run **only on the server**, never sent to the client.
- Introduced in Next.js 13+ App Router.

### ✅ Benefits:
- Zero client-side JavaScript
- Improved performance (no hydration needed)
- Server-side logic like DB access or API calls directly in component

### ✅ Syntax:
```tsx
// Server Component (by default in App Router)
async function ServerComponent() {
  const data = await fetchData();
  return <div>{data.title}</div>;
}
```

- To make a component client-side, use:
```tsx
'use client';
```

### ✅ How RSC & Suspense Work Together:
- Suspense helps stream server-rendered content in parts.
- Example: Slow components can be wrapped in Suspense to avoid blocking the entire page.

---

## **🔹 Zustand for Global State Management**

### ✅ What is Zustand?
- Lightweight, minimal global state management library.
- Based on hooks, no boilerplate, no reducers.

### ✅ Install:
```bash
npm install zustand
```

### ✅ Create a Store:
```ts
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));
```

### ✅ Use in Components:
```tsx
const Counter = () => {
  const { count, increase } = useStore();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>Increment</button>
    </div>
  );
};
```

### ✅ Features:
- Persistent storage: Zustand supports persisting state to `localStorage` easily.
- Middleware: Devtools, immer, persist, etc.
```ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      count: 0,
      increase: () => set((state) => ({ count: state.count + 1 })),
    }),
    { name: 'counter-store' }
  )
);
```

---

## 🔁 How They All Work Together

- **React Suspense**: For async loading of components/data.
- **Server Components**: To run logic on the server and reduce client JS.
- **Zustand**: For managing client-side state without prop drilling or context overhead.

