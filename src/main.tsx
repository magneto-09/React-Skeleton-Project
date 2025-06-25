import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (import.meta.env.PROD) {
  disableReactDevTools();
}

export const themeObj = {
  appTheme: "oklch(0.541 0.281 293.009)",
};

// default react-query config
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15 * 60 * 1000,
      refetchOnMount: false, // do not fetch on mount if data is stale
      refetchOnWindowFocus: false,
      retryOnMount: false, // do not fetch failed API from prev. mount in curr. mount
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>
  </BrowserRouter>
);
