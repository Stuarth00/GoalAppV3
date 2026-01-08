import { useState } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import GoalsConsumer from './List/GoalsConsumer';
import { GoalsProvider } from './List/Goals';
import Navigation from './Navegation/Navigation';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />

      <main className="flex flex-row p-4 gap-4">
        <Navigation toggleModal={toggleModal} />

        <GoalsProvider>
          <GoalsConsumer />
        </GoalsProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
