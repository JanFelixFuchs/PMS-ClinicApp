import { useDispatch as useDispatchRedux } from 'react-redux';
import type { AppDispatch } from '../store/configureStore';

const useDispatch = useDispatchRedux.withTypes<AppDispatch>();

export default useDispatch;
