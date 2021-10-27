import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <H1 className="quaselog">Wishlist</H1>
      </header>
      <main>
        <nav className="pratcMain">
          <span className="pdH2">Olá Username, o que deseja fazer?</span>
          <section class="Escolhas">
            <Link to="" className="secRed">
              <div>
                <span className="ajeitar">Adicionar Desejo</span>
              </div>
              <div className="d2">
                <image src="../Assets/wish 1.png" alt="imagem check-list"></image>
              </div>
            </Link>
            <Link to="" className="secRed" >
              <div>
                <span>Ver Wishlist</span>
              </div>
              <div className="d2">
                <image src="../Assets/check-list 1.png" alt="imagem check-list"></image>
              </div>
            </Link>
            <Link to="" className="secRed">
              <div>
                <span className="trabaio">Ver Wishlist de outros usuarios</span>
              </div>
              <div className="d1">
                <image src="../Assets/image 4.png" alt="imagem lista"></image>
              </div>
            </Link>
          </section>
        </nav>
      </main>
      <footer>
        <span className="quaselog">Wishlist</span>
      </footer>
    </div>
  );
}

export default App;