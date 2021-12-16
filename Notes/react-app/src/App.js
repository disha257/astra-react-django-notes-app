import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CSRFToken from "./components/CSRFToken";
import NotePage from "./pages/NotePage";
import NotesListPage from "./pages/NotesListPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container dark">
        <div className="app">
          <header />
          <Routes>
            <Route path="/note/:id" element={<NotePage />} />
            <Route path="/" exact element={<NotesListPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
