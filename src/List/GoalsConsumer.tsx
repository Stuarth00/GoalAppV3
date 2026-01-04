import React, { useContext } from 'react';
import { GoalsContext } from './Goals';

const GoalsConsumer = () => {
  const contextValue = useContext(GoalsContext);

  return (
    <div>
      <h2>Goals Consumer</h2>
      {contextValue.isLoading ? (
        <p>Loading goals...</p>
      ) : (
        <ul>
          {contextValue.goals.map((goal) => (
            <li key={goal.id}>
              {goal.icon} {goal.description} - {goal.targetCompleted}/{goal.targetTotal} completed
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => contextValue.addGoal('New Goal')}>Add Goal</button>
    </div>
  );
};

export default GoalsConsumer;
