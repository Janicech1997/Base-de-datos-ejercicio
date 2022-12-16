import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './componentes/layout/layout';
import Inicio from './componentes/inicio/inicio';
import Usuario from './componentes/crud.usuario/crudusuario';
import Nosotros from './componentes/nosotros/nosotros';
import Servicios from './componentes/servicios/servicios';
import Proyectos from './componentes/proyectos/proyectos';
import IniciarSesion from './componentes/iniciarsesion/iniciarsesion';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Inicio />}/>
            <Route path='/Inicio' element={<Inicio />} />
            <Route path='/Usuario' element={<Usuario />} />
            <Route path='/Nosotros' element={<Nosotros />} />
            <Route path='/Servicios' element={<Servicios />} />
            <Route path='/Proyectos' element={<Proyectos />} />
            <Route path='/IniciarSesion' element={<IniciarSesion />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
