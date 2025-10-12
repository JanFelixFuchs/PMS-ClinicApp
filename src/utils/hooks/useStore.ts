import { useStore as useStoreRedux } from 'react-redux';
import type { AppStore } from '../store/configureStore';

const useStore = useStoreRedux.withTypes<AppStore>();

export default useStore;
