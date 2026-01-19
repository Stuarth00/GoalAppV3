import React, { useContext } from 'react';
import { GoalsContext } from './GoalProvider';

const GoalsConsumer = () => {
  const contextValue = useContext(GoalsContext);
  const { handleEditGoal, handleCompletedGoal } = useContext(GoalsContext);

  return (
    <div className="w-full">
      <ul>
        {contextValue.goals.map((goal) => (
          <li
            key={goal.id}
            className="border rounded-xl p-4 m-4 shadow-md flex flex-row gap-8 items-center"
          >
            <div className="border rounded-4xl p-4 text-3xl">{goal.icon}</div>
            <div className="text-xl font-bold gap-4 flex-1">
              {goal.freqUnit}/{goal.freqType}
              <button onClick={() => handleEditGoal(goal)}>{goal.description}</button>
            </div>
            <div className="flex flex-col items-center font-bold">
              <button onClick={() => handleCompletedGoal(goal.id)}>Completed</button>
              <div>
                <p className="text-sm mb-1 text-center">
                  {goal.targetCompleted}/{goal.targetTotal} completed
                </p>
                <div className="w-full bg-gray-400 rounded-full h-4 oroder-3 col-span-2">
                  <div
                    className="bg-lime-800 h-4 rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min((goal.targetCompleted / goal.targetTotal) * 100, 100)}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalsConsumer;
