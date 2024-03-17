import { useEffect } from 'react';
import Appeals from './pages/appeals/Appeals';
import { useAppDispatch } from './slices/hooks';
import { thunkLoadData } from './slices/data/CreateAsyncThunk';


function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(thunkLoadData());
  }, []);
  return <Appeals />;
}

export default App;