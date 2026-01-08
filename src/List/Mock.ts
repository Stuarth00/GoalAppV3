export interface Mock {
    icon: string;
    id: string;
    description: string;
    freqUnit: number;
    freqType: string;
    targetCompleted: number;
    targetTotal: number;
}

export const mockGoals: Mock[] = [
    {
        icon: '🏃‍♂️',
        id: '1',
        description: 'Run 15km',
        freqUnit: 3,
        freqType: 'week',
        targetCompleted: 5,
        targetTotal: 15,
    },
        {
        icon: '📚',
        id: '2',
        description: 'Create a React App',
        freqUnit: 3,
        freqType: 'week',
        targetCompleted: 5,
        targetTotal: 15,
    }
];
