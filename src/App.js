import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isWelcomePage = location.pathname === '/welcome';
  const isPerfilPage = location.pathname === '/perfil';
  const isMensajesPage = location.pathname === '/mensajes';
  const isMensajesmPage = location.pathname === '/mensajesm';
  const isEmpleoPage = location.pathname === '/empleo';
  const isVacantesPage = location.pathname === '/vacantes';
  const isPublicaciones = location.pathname === '/publicaciones';

  return (
    <BrowserRouter basename="/TempOp">
      <div className="App" style={{ backgroundColor: '#ffe4ec' }}>
        {/* Barra de navegación condicional */}
        {isWelcomePage || isPerfilPage || isMensajesPage || isMensajesmPage || isEmpleoPage || isVacantesPage || isPublicaciones ? (
          <Navbaru />
        ) : (
          <ResponsiveAppBar />
        )}

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
    </BrowserRouter>
  );
}

export default App;
