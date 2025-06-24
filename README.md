# 🚀 ReactSkeletonProject

A blazing-fast, scalable **React Skeleton Project** with real-world architecture — purpose-built for production apps that depend on dynamic backend APIs.  
It blends the **minimalism of ShadCN**, the **power of MUI**, and **custom logic to sync UI + data + state** — wrapped in a clean violet-themed aesthetic. 🎨

---

## 🔧 Tech Stack

| Layer      | Library/Tooling                        |
|------------|----------------------------------------|
| UI Core    | [React](https://react.dev/)            |
| Styling    | [TailwindCSS](https://tailwindcss.com/) + `shadcn/ui (minimal)` + **Custom Violet Theme**
| Components | [Material UI (MUI)](https://mui.com/) for advanced component needs (e.g. Modal, Pagination)
| State Mgmt | [Zustand](https://zustand-demo.pmnd.rs/) (controlled table + filters + shared state)
| Table      | [TanStack Table](https://tanstack.com/table) (with full control + backend sync)
| Routing    | `react-router-dom`
| Form       | `formik` + `yup` for schema-based form validation
| API Layer  | `axios` + optional [TanStack Query](https://tanstack.com/query)

---

## 📦 Features

- ⚙️ **Backend-Aware Design**: Table config (`columns`, `data`, `pagination`, `filters`) tightly coupled with backend API contracts.
- 🧠 **Controlled TanStack Table**: A custom wrapper to sync internal state (pagination, sorting, filters) with Zustand & backend query params.
- 🧱 **ShadCN Minimal Setup**: Only essentials from `shadcn/ui`, keeping the project lean but extendable.
- 🎨 **Violet-Themed UI**: MUI + Tailwind + `index.css` violet overrides for a consistent, modern look.
- 🧩 **Reusable Components**: Modal, Pagination, Table, Loader, and FormField — all extracted for reusability and isolation.
- 🔁 **MUI Components as Fallback**: For components like Modal & Pagination, where ShadCN lacks fine-grained props.

---

## 🧪 How to Use

### 1. Clone & Install

```bash
git clone https://github.com/magneto-09/ReactSkeletonProject.git

cd ReactSkeletonProject

npm install
```

### 2. Start Dev Server

```bash
npm run dev
```
---

## 💡 Suggestion

**Configure** the table columns, filters, API handlers, etc. **based on your backend API design** and data structure to ensure full synchronization between UI state and server response.

---

## 📘 License

**MIT** — use it, scale it, break it, and make it yours!
