import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppealState, AppealType } from '../../types/dataTypes';
import {
  thunkAddData,
  thunkDeleteData,
  thunkEditData,
  thunkLoadData,
} from './CreateAsyncThunk';


const initialState: AppealState = {
  data: [],
  currentAppeal: null,
  sorted: {
    date: null,
    type: null,
  },
};

export const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    addAppeal: (state, action: PayloadAction<AppealType>) => {
      state.data.push(action.payload);
    },
    setCurrentAppeal: (state, action: PayloadAction<AppealType>) => {
      state.currentAppeal = action.payload;
    },
    clearCurrentAppeal: (state) => {
      state.currentAppeal = null;
    },
    sort: (state, action) => {
      if (action.payload === 'date') {
        if (state.sorted.date) {
          state.data.sort((a, b) => new Date(a.date) - new Date(b.date));
          state.sorted.date = false;
        } else {
          state.data.sort((a, b) => new Date(b.date) - new Date(a.date));
          state.sorted.date = true;
        }
      }

      if (action.payload === 'type') {
        if (state.sorted.type) {
          state.data.sort((a, b) => a.type.localeCompare(b.type));
          state.sorted.type = false;
        } else {
          state.data.sort((a, b) => b.type.localeCompare(a.type));
          state.sorted.type = true;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      thunkLoadData.fulfilled,
      (state, action: PayloadAction<AppealType[]>) => {
        state.data = action.payload;
      }
    );
    builder.addCase(thunkLoadData.rejected, (state, action) => {
      console.log(action.error);
      state.data = [];
    });
    builder.addCase(thunkAddData.fulfilled, (state, action) => {
      state.data.unshift(action.payload);
      console.log(action.payload);
    });
    builder.addCase(
      thunkDeleteData.fulfilled,
      (state, action: PayloadAction<AppealType['id']>) => {
        state.data = state.data.filter(
          (appeal) => appeal.id !== action.payload
        );
      }
    );
    builder.addCase(
      thunkEditData.fulfilled,
      (state, action: PayloadAction<AppealType>) => {
        const index = state.data.findIndex(
          (data) => data.id === action.payload.id
        );
        if (index !== -1) state.data[index] = action.payload;
        state.currentAppeal = null;
      }
    );
  },
});
export const { addAppeal, setCurrentAppeal, clearCurrentAppeal, sort } =
  dataSlice.actions;

export default dataSlice.reducer;


