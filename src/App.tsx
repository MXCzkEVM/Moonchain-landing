import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader2Icon } from "lucide-react";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const EcosystemPage = lazy(() => import("./pages/EcosystemPage"));

function App() {
  return (
    <div className="dark">
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
