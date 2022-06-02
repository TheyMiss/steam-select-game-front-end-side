import { BrowserRouter, Route, Routes } from "react-router-dom";
import Party from "./pages/Party";
import SinglePlayer from "./pages/SinglePlayer";
import StartMeniu from "./pages/StartMeniu";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartMeniu />} />
        <Route path="/singlePlayer" element={<SinglePlayer />} />
        <Route path="/party" element={<Party />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
