import { Container } from "./components/Container";
import { Routes, Route } from 'react-router-dom';
import { Component02 } from "./components/Component02";

function App() {

  const isLogado = true;

  return (
    <Routes>
      {isLogado === true ? <Route path="/componente2" element={<Component02/>} /> : null}
      <Route path="*" element={<Container/>} />
    </Routes>
  );
}

export default App;
