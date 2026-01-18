import { useContext } from 'react';
import { GoalsContext } from '../List/GoalProvider';

function Navigation({ toggleModal }: { toggleModal: () => void }) {
  return (
    <div className="w-1/3 border border-gray-400 rounded">
      <button
        className="w-full p-4 bg-lime-950 text-white rounded hover:bg-emerald-800"
        onClick={toggleModal}
      >
        Add new goal
      </button>
    </div>
  );
}

export default Navigation;
