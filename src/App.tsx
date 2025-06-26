import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// lazy load the component.
const SignUpForm = lazy(() => import("./components/my-ui-elements/SignUp"));
const SignInForm = lazy(() => import("./components/my-ui-elements/SignIn"));
const Headers = lazy(() => import("./components/my-ui-elements/Headers"));
const PageNotFound = lazy(
  () => import("./components/my-ui-elements/error-boundary/PageNotFound")
);
const DummyComponent = lazy(
  () => import("./components/my-ui-elements/table/DummyComponent")
);

// lazy load the pages
const Home = lazy(() => import("./pages/Home"));
const Admin = lazy(() => import("./pages/Admin"));

const App = () => {
  return (
    <Suspense fallback={<div>div....</div>}>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<DummyComponent />} />

        {/* Define in the last - ALWAYS🚀 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
