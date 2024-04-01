import { Routes, Route } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import Loader from "./components/common/Loader";
import { useAppContext } from "./contexts/AppContext";

const Homepage = lazy(() => import("./pages/client/Homepage"));
const About = lazy(() => import("./pages/client/About"));
const Contact = lazy(() => import("./pages/client/Contact"));
const Information = lazy(() => import("./pages/client/Information"));
const NewsDetails = lazy(() => import("./pages/client/NewsDetails"));
const BlendOfCultures = lazy(() => import("./pages/client/BlendOfCultures"));
const BuildALife = lazy(() => import("./pages/client/BuildALife"));
const Heritage = lazy(() => import("./pages/client/Heritage"));
const Experience = lazy(() => import("./pages/client/Experience"));

const PageNotFound = lazy(() => import("./pages/common/PageNotFound"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* client */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/information" element={<Information />} />
        <Route path="/news/:slug" element={<NewsDetails />} />
        <Route path="/a-blend-of-cultures" element={<BlendOfCultures />} />
        <Route path="/build-a-life-in-hungary" element={<BuildALife />} />
        <Route
          path="/celebrate-your-heritage-in-hungary"
          element={<Heritage />}
        />
        <Route
          path="/experience-the-beauty-of-nigeria"
          element={<Experience />}
        />

        {/* admin */}

        {/* page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
