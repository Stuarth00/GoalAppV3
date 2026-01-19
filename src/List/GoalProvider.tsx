import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Mock, mockGoals } from './Mock';
import { GoalFormData } from '../Modal/GoalForm';

interface GoalsContextType {
  goals: Mock[];
  handleAddGoal: (goal: GoalFormData) => void;
  handleEditGoal: (goal: Mock) => void;
  clearEdit: () => void;
  handleDeleteGoal: (goalId: string) => void;
  handleCompletedGoal: (goalId: string) => void;
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

  //Compleating goal
  const handleCompletedGoal = (goalId: string) => {
    setGoals(
      goals.map((goal) =>
        goal.id === goalId && goal.targetCompleted < goal.targetTotal
          ? { ...goal, targetCompleted: goal.targetCompleted + 1 }
          : goal
      )
    );
  };

  const clearEdit = () => {
    setGoalToEdit(null);
  };

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
    }
    setGoalToEdit(null);
  };

  //Edit mode
  const [goalToEdit, setGoalToEdit] = useState<Mock | null>(null);
  const handleEditGoal = (goal: Mock) => {
    setGoalToEdit(goal);
    if (toggleModal) {
      toggleModal();
    }
  };

  //Deleting goals
  const handleDeleteGoal = (goalId: string) => {
    const updatedGoals = goals.filter((goal) => goal.id !== goalId);
    setGoals(updatedGoals);
  };

  return (
    <GoalsContext.Provider
      value={{
        goals,
        handleAddGoal,
        handleEditGoal,
        goalToEdit,
        clearEdit,
        handleDeleteGoal,
        handleCompletedGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
