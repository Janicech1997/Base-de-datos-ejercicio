import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './componentes/layout/layout';
import CRUDusuario from './componentes/crud.productos/CRUDusuario';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<CRUDusuario />}/>
            <Route path='/Inicio' element={<CRUDusuario />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
