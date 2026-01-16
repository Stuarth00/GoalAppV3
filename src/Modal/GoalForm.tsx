import { ChangeEvent, FormEvent, useState } from 'react';
import { useContext } from 'react';
import { GoalsContext } from '../List/GoalProvider';

interface GoalFormData {
  icon: string;
  // id: string;
  description: string;
  freqUnit: number;
  freqType: string;
  targetCompleted: number;
  targetTotal: number;
}

function GoalForm({
  onClose,
  // onAddGoal,
}: {
  onClose: () => void;
  // onAddGoal: (newGoalData: GoalFormData) => void;
}) {
  const { handleAddGoal } = useContext(GoalsContext);

  const [formData, setFormData] = useState<GoalFormData>({
    icon: '',
    // id: '',
    description: '',
    freqUnit: 0,
    freqType: '',
    targetCompleted: 0,
    targetTotal: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    onClose();
    handleAddGoal(formData);
    setFormData({
      icon: '',
      // id: '',
      description: '',
      freqUnit: 0,
      freqType: '',
      targetCompleted: 0,
      targetTotal: 0,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-[48px] bg-lime-900 p-4 rounded-md"
    >
      <h1>Add a new goal</h1>
      <div className="flex flex-col gap-1">
        <label htmlFor="description">Description of your goal:</label>
        <input
          type="text"
          id="description"
          placeholder="Enter your goal description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="bg-lime-950 p-2 rounded-md"
        />
        <label htmlFor="frequency">What's the frequency you want to achieve this goal:</label>
        <div className="flex flex-row gap-2">
          <input
            type="number"
            id="freqUnit"
            name="freqUnit"
            value={formData.freqUnit}
            onChange={handleChange}
            className="bg-lime-950 p-2 rounded-md basis-1/2"
            required
          />
          <select
            id="freqType"
            name="freqType"
            value={formData.freqType}
            onChange={handleChange}
            className="bg-lime-950 p-2 rounded-md basis-1/2"
            required
          >
            <option value="">Select</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </div>

        <label htmlFor="target-completed">How many times you've completed this goal</label>
        <input
          type="number"
          id="target"
          placeholder="e.g. 50"
          name="targetCompleted"
          value={formData.targetCompleted}
          onChange={handleChange}
          required
          className="bg-lime-950 p-2 rounded-md"
        />

        <label htmlFor="target-completed">How many times you want to complete this goal</label>
        <input
          type="number"
          id="target"
          placeholder="e.g. 50"
          name="targetTotal"
          value={formData.targetTotal}
          onChange={handleChange}
          required
          className="bg-lime-950 p-2 rounded-md"
        />

        <label htmlFor="icon">Select the icon for your goal</label>
        <select
          id="icon"
          name="icon"
          value={formData.icon}
          onChange={handleChange}
          required
          className="bg-lime-950 p-2 rounded-md"
        >
          <option value="">Select your icon</option>
          <option value="🏃‍♂️">🏃‍♂️ </option>
          <option value="📚">📚 </option>
        </select>
        <button className="bg-lime-950 rounded-md">Create your goal</button>
      </div>
    </form>
  );
}

export default GoalForm;
export { GoalFormData };
