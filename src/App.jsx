import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import PreviewPage from "./pages/PreviewPage/PreviewPage";
import { FormProvider } from "./context/FormContext";
import { ImageProvider } from "./context/ImageContext";
import { LinkProvider } from "./context/LinkContext";


const App = () => {

  return (
      <FormProvider>
          <ImageProvider>
            <LinkProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/preview" element={<PreviewPage />} />
                </Routes>
              </Router>
            </LinkProvider>
          </ImageProvider>
        </FormProvider>
  );
}

export default App;
