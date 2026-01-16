import { useState } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import GoalsConsumer from './List/GoalsConsumer';
import { GoalsProvider } from './List/GoalProvider';
import Navigation from './Navegation/Navigation';
import Modal from './Modal/Modal';
import GoalForm from './Modal/GoalForm';
import { GoalFormData } from './Modal/GoalForm';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<GoalFormData>({
    icon: '',
    // id: '',
    description: '',
    freqUnit: 0,
    freqType: '',
    targetCompleted: 0,
    targetTotal: 0,
  });

  //Modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAddGoal = (newGoalData: GoalFormData) => {
    const newGoal = {
      id: Date.now().toString(),
      ...newGoalData,
    };
    setData(newGoal);
    // console.log('New Goal Added:', newGoal);
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />

      <main className="flex flex-row p-4 gap-4">
        <GoalsProvider>
          <Navigation toggleModal={toggleModal} />

          <Modal isOpen={isOpen} onClose={closeModal}>
            <GoalForm onClose={closeModal} />
          </Modal>

          <GoalsConsumer data={data} />
        </GoalsProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
