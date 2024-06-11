import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./protected-route";

const DashboardPage = lazy(() => import("./dashboard.route"));
const SignInPage = lazy(() => import("./sign-in.route"));
const SignUpPage = lazy(() => import("./sign-up.route"));


export const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route exact path='/' element={<SignInPage />} />
        <Route exact path='/sign-up' element={<SignUpPage />} />
        <Route exact path="/dashboard" element={<ProtectedRoute element={<DashboardPage />} />} />
      </Routes>
    </Suspense>
  )
}