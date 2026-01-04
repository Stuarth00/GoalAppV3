import Hello from './hello';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function App() {
  return (
    <div>
      <Header />
      <h1>Hello World!</h1>
      <Hello userName="Cedric" career="Software Engineering" />

      <Footer />
    </div>
  );
}

export default App;
