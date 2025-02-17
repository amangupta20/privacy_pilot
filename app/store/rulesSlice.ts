import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Rule {
  id: string;
  appName: string;
  permissionType: string;
  action: 'allow' | 'block' | 'obfuscate';
  conditions?: {
    timeRestriction?: {
      start?: string;
      end?: string;
    };
  };
}

interface RulesState {
  rules: Rule[];
}

const initialState: RulesState = {
  rules: [],
};

export const rulesSlice = createSlice({
  name: 'rules',
  initialState,
  reducers: {
    addRule: (state, action: PayloadAction<Rule>) => {
      state.rules.push(action.payload);
    },
    removeRule: (state, action: PayloadAction<string>) => {
      state.rules = state.rules.filter(rule => rule.id !== action.payload);
    },
    updateRule: (state, action: PayloadAction<Rule>) => {
      const index = state.rules.findIndex(rule => rule.id === action.payload.id);
      if (index !== -1) {
        state.rules[index] = action.payload;
      }
    },
  },
});

export const { addRule, removeRule, updateRule } = rulesSlice.actions;
export default rulesSlice.reducer; 