import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader2Icon } from "lucide-react";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const EcosystemPage = lazy(() => import("./pages/EcosystemPage"));

function App() {
  return (
    <div className="dark">
      <div className="w-full bg-yellow-500 text-black text-center py-3 px-4 font-semibold text-sm md:text-base z-50 relative">
        For inquiries contact:{" "}
        <a
          href="https://gritbrokerage.com/inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold hover:text-gray-800"
        >
          gritbrokerage.com/inquiry
        </a>
      </div>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <Loader2Icon className="w-16 h-16 animate-spin" />
          </div>
        }
      >
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
