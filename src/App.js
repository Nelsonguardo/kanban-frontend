import { BrowserRouter } from "react-router-dom";
import AppRouter from "../src/components/Router/AppRouter";
import './App.css';
import'./global.css';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
