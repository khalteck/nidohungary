import { Routes, Route } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import Loader from "./components/common/Loader";
import { useAppContext } from "./contexts/AppContext";

const Homepage = lazy(() => import("./pages/client/Homepage"));

const PageNotFound = lazy(() => import("./pages/common/PageNotFound"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* client */}
        <Route path="/" element={<Homepage />} />

        {/* admin */}

        {/* page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
