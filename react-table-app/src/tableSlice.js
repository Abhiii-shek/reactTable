import { createSlice } from '@reduxjs/toolkit';
import { dummyData } from './data';

const tableSlice = createSlice({
  name: 'table',
  initialState: {
    data: dummyData, // Initial table data
  },
  reducers: {
    addRow: (state, action) => {
      state.data.push(action.payload); // Add a new row
    },
  },
});

export const { addRow } = tableSlice.actions;
export default tableSlice.reducer;
