import React, { useState } from 'react';

function Navigation({ toggleModal }: { toggleModal?: () => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (toggleModal) {
      toggleModal();
    }
  };

  return (
    <div className="w-1/3 border border-gray-400 rounded">
      <button
        className="w-full p-4 bg-lime-950 text-white rounded hover:bg-emerald-800"
        onClick={handleToggleModal}
      >
        Add new goal
      </button>

      {isModalOpen && (
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">New Goal Modal</h2>
          <p>This is where the new goal form would go.</p>
        </div>
      )}
    </div>
  );
}

export default Navigation;
