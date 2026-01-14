import { ChangeEvent, FormEvent, useState } from 'react';

interface FormData {
  icon: string;
  id: string;
  description: string;
  freqUnit: number;
  freqType: string;
  targetCompleted: number;
  targetTotal: number;
}

function GoalForm() {
  const [formData, setFormData] = useState<FormData>({
    icon: '',
    id: '',
    description: '',
    freqUnit: 0,
    freqType: '',
    targetCompleted: 0,
    targetTotal: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-[48px]">
      <div>
        <h1>Add a new goal</h1>
        <label htmlFor="description">Description of your goal:</label>
        <input
          type="text"
          id="description"
          placeholder="Enter your goal description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="frequency">What's the frequency you want to achieve this goal:</label>
        <input type="text" id="freqUnit" placeholder="e.g. 1, 2" />
        <input type="text" id="freqType" placeholder="e.g. Week" />

        <label htmlFor="">How many times you've completed this goal</label>
        <input type="text" id="target" placeholder="e.g. 50" />

        <label htmlFor="icon">Select the icon for your goal</label>
        <select name="icon" id="icon">
          icon
          <option value="🏃‍♂️">🏃‍♂️ Running</option>
          <option value="📚">📚 Reading</option>
        </select>
        <button>Create your goal</button>
      </div>
    </form>
  );
}

export default GoalForm;
