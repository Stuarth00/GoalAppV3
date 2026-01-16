import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Mock, mockGoals } from './Mock';
import { GoalFormData } from '../Modal/GoalForm';

interface GoalsContextType {
  goals: Mock[];
  isLoading: boolean;
  handleAddGoal: (goal: GoalFormData) => void;
}

export const GoalsContext = createContext<GoalsContextType>({} as GoalsContextType);

export const GoalsProvider = ({ children }: { children: ReactNode }) => {
  const [goals, setGoals] = useState<Mock[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching goals...');

    setTimeout(() => {
      setGoals(mockGoals);
      setIsLoading(false);
      console.log('Goals fetched:', mockGoals);
    }, 2000);
  }, []);

  const handleAddGoal = (newGoalData: GoalFormData) => {
    const newGoal: Mock = {
      id: Date.now().toString(),
      ...newGoalData,
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
    console.log('New Goal Added:', newGoal);
  };

  return (
    <GoalsContext.Provider value={{ goals, isLoading, handleAddGoal }}>
      {children}
    </GoalsContext.Provider>
  );
};
