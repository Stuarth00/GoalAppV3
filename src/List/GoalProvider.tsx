import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Mock, mockGoals } from './Mock';
import { GoalFormData } from '../Modal/GoalForm';

interface GoalsContextType {
  goals: Mock[];
  handleAddGoal: (goal: GoalFormData) => void;
  handleEditGoal: (goal: Mock) => void;
  goalToEdit: Mock | null;
}

export const GoalsContext = createContext<GoalsContextType>({} as GoalsContextType);

export const GoalsProvider = ({
  children,
  toggleModal,
}: {
  children: ReactNode;
  toggleModal?: () => void;
}) => {
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

  //Add and Edit goals
  const handleAddGoal = (newGoalData: GoalFormData) => {
    if (goalToEdit) {
      setGoals(
        goals.map((goal) => (goal.id === goalToEdit.id ? { ...goal, ...newGoalData } : goal))
      );
    } else {
      const newGoal: Mock = {
        id: Date.now().toString(),
        ...newGoalData,
      };
      setGoals((prevGoals) => [...prevGoals, newGoal]);
      console.log('New Goal Added:', newGoal);
    }
  };

  //Edit mode
  const [goalToEdit, setGoalToEdit] = useState<Mock | null>(null);
  const handleEditGoal = (goal: Mock) => {
    setGoalToEdit(goal);
    if (toggleModal) {
      toggleModal();
    }
  };

  return (
    <GoalsContext.Provider value={{ goals, handleAddGoal, handleEditGoal, goalToEdit }}>
      {children}
    </GoalsContext.Provider>
  );
};
