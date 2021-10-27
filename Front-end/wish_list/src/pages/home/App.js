import './App.css';
import checklist from './Assets/check-list1.png'
import banner from './Assets/banner.png'
import img1 from './Assets/img.png'
import img2 from './Assets/img2.png'

function App() {
  return (
    <body>
  <header class="header">
    <h1 class="quaselog">Wishlist</h1>
  </header>
  <main>
    <nav class = "pratcMain">
      <span class="pdH2">Olá Username, o que deseja fazer?</span>
      <section class="Escolhas">
        <a class="secRed">
          <div>
            <span class = "ajeitar">Adicionar Desejo</span>
          </div>
          <div class="d2">
            <img src={img1} alt=""></img>
          </div>
        </a>
        <a class="secRed" >
          <div>
            <span>Ver Wishlist</span>
          </div>
          <div class="d2">
            <img src={checklist} alt="imagem check-list"></img>
          </div>
        </a>
        <a class="secRed">
          <div>
            <span class = "trabaio" >Ver Wishlist de outros usuarios</span>
          </div>
          <div class="d1">
            <img src={img2} alt="imagem lista"></img>
          </div>
        </a>
      </section>
    </nav>
  </main>
  <footer>
    <span class="quaselog">Wishlist</span>
  </footer>
</body>
  );
}

export default App;