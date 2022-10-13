import HeroComponent from './components/hero-component';

import './App.css';
import ArticleComponent from './components/article-component';

function App() {
  return (
    <div className="App">
      <HeroComponent />
      <div className="container">
        <ArticleComponent />

      </div>
    </div>
  );
}

export default App;
