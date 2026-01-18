import React, { useContext } from 'react';
import { GoalsContext } from './GoalProvider';

const GoalsConsumer = () => {
  const contextValue = useContext(GoalsContext);
  const { handleEditGoal } = useContext(GoalsContext);

  return (
    <div className="w-full">
      <ul>
        {contextValue.goals.map((goal) => (
          <li
            key={goal.id}
            className="border rounded-xl p-4 m-4 shadow-md flex flex-row gap-4 items-center"
          >
            <div className="border rounded-4xl p-4 text-3xl">{goal.icon}</div>
            <div className="text-xl font-bold gap-4 flex-1">
              {goal.freqUnit}/{goal.freqType}
              <button onClick={() => handleEditGoal(goal)}>{goal.description}</button>
            </div>
            <div>
              {goal.targetCompleted}/{goal.targetTotal} completed
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalsConsumer;
