import { useSelector as useSelectorRedux } from 'react-redux';
import type { RootState } from '../store/configureStore';

const useSelector = useSelectorRedux.withTypes<RootState>();

export default useSelector;
