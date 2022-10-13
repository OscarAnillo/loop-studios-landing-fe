import HeroComponent from './components/hero-component';

import './App.css';
import ArticleComponent from './components/article-component';
import MainComponent from './components/main-component';
import FooterComponent from './components/footer-component';

function App() {
  return (
    <div className="App">
      <HeroComponent />
      <div className="container">
        <ArticleComponent />
        <MainComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
