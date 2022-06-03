import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
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
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
