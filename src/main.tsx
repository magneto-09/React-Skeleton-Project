import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./components/my-ui-elements/error-boundary/Fallback.tsx";

if (import.meta.env.PROD) {
  disableReactDevTools();
}

export const themeObj = {
  appTheme: "oklch(0.541 0.281 293.009)",
  appFontFamily: "Inter, Arial, Helvetica, sans-serif",
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
    <ErrorBoundary fallbackRender={Fallback}>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </StrictMode>
    </ErrorBoundary>
  </BrowserRouter>
);
