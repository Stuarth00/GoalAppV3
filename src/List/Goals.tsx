import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Mock, mockGoals } from '../List/Mock';

interface GoalsContextType {
  goals: Mock[];
  isLoading: boolean;
  addGoal: (goal: string) => void;
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

  const addGoal = (goal: string) => {
    const newGoal: Mock = {
      id: Date.now().toString(),
      icon: '🎯',
      description: goal,
      freqUnit: 1,
      freqType: 'week',
      targetCompleted: 0,
      targetTotal: 10,
    };
    setGoals([...goals, newGoal]);
  };

  return (
    <GoalsContext.Provider value={{ goals, isLoading, addGoal }}>{children}</GoalsContext.Provider>
  );
};
