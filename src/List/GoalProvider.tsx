import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Mock, mockGoals } from './Mock';
import { GoalFormData } from '../Modal/GoalForm';

interface GoalsContextType {
  goals: Mock[];
  handleAddGoal: (goal: GoalFormData) => void;
}

export const GoalsContext = createContext<GoalsContextType>({} as GoalsContextType);

export const GoalsProvider = ({ children }: { children: ReactNode }) => {
  //Saving goals to localStorage
  const [goals, setGoals] = useState<Mock[]>(() => {
    const savedGoals = localStorage.getItem('goals');
    if (savedGoals) {
      return JSON.parse(savedGoals);
    }
    return [
      {
        icon: '🏃‍♂️',
        id: '1',
        description: 'Run 15km',
        freqUnit: 3,
        freqType: 'week',
        targetCompleted: 5,
        targetTotal: 15,
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  const handleAddGoal = (newGoalData: GoalFormData) => {
    const newGoal: Mock = {
      id: Date.now().toString(),
      ...newGoalData,
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
    console.log('New Goal Added:', newGoal);
  };

  return <GoalsContext.Provider value={{ goals, handleAddGoal }}>{children}</GoalsContext.Provider>;
};
