import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HU01HacerLogin from "./pages/HU01HacerLogin";
import HU06RecuperarContrasea from "./pages/HU06RecuperarContrasea";
import Hu12Soporte from "./pages/Hu12Soporte";
import HU02CIAx from "./pages/HU02CIAx";
import Pensum from "./pages/Pensum";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/hu06-recuperar-contrasea":
        title = "";
        metaDescription = "";
        break;
      case "/hu12-soporte":
        title = "";
        metaDescription = "";
        break;
      case "/hu02-ciax":
        title = "";
        metaDescription = "";
        break;
      case "/pensum":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HU01HacerLogin />} />
      <Route
        path="/hu06-recuperar-contrasea"
        element={<HU06RecuperarContrasea />}
      />
      <Route path="/hu12-soporte" element={<Hu12Soporte />} />
      <Route path="/hu02-ciax" element={<HU02CIAx />} />
      <Route path="/pensum" element={<Pensum />} />
    </Routes>
  );
}
export default App;
