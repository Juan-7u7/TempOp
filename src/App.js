import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App" style={{ backgroundColor: '#ffe4ec' }}>
        {/* Configuración de rutas */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/loginP" element={<LoginP />} />
          <Route path="/registerP" element={<RegisterP />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/mensajes" element={<Mensajes />} />
          <Route path="/mensajesm" element={<Mensajesm />} />
          <Route path="/empleo" element={<Empleo />} />
          <Route path="/vacantes" element={<Vacantes />} />
          <Route path="/publicaciones" element={<Publicaciones />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
