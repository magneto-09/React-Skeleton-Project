import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// lazy load the component.
const SignUpForm = lazy(() => import("./components/SignUp"));
const SignInForm = lazy(() => import("./components/SignIn"));
const Headers = lazy(() => import("./components/Headers"));
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
      </Routes>
    </Suspense>
  );
};

export default App;
