import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemPostDetailPage from "./pages/ItemPostDetailPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/item-posts/:itemPostId" element={<ItemPostDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
