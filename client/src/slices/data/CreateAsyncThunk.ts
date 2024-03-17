import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiDataService from '../services/apiDataService';
import { AddAppealType, AppealType } from '../../types/dataTypes';

export const thunkLoadData = createAsyncThunk(
  'dataSlice/thunkLoadData',
  async () => ApiDataService.getData()
);
export const thunkAddData = createAsyncThunk(
  'dataSlice/thunkAddData',
  async (formData: AddAppealType) => ApiDataService.addPost(formData)
);
export const thunkDeleteData = createAsyncThunk(
  'dataSlice/thunkDeleteData',
  async (id: AppealType['id']) => ApiDataService.deletePost(id)
);
export const thunkEditData = createAsyncThunk(
  'dataSlice/thunkEditData',
  async ({ formData, id }: { formData: AddAppealType; id: AppealType['id'] }) =>
    ApiDataService.editAppeal(formData, id)
);
