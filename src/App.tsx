import Hello from './hello';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import GoalsConsumer from './List/GoalsConsumer';
import { GoalsProvider } from './List/Goals';

function App() {
  return (
    <div>
      <Header />
      <h1>Hello World!</h1>
      <Hello userName="Cedric" career="Software Engineering" />

      <GoalsProvider>
        <GoalsConsumer />
      </GoalsProvider>

      <Footer />
    </div>
  );
}

export default App;
