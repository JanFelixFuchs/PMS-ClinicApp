import {
  PlusOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from '@ant-design/icons';
import { Button, Flex, Input } from 'antd';
import type { SearchProps } from 'antd/es/input';
import type { SortingOption } from '../../../utils/types/utils/SortingOption';
import styles from './Toolbar.module.css';

/* - - - STATIC ELEMENTS - - - */
interface Props {
  filterPlaceholder: string;
  addHandler: () => void;
  setFilterText: React.Dispatch<React.SetStateAction<string | null>>;
  sortingOption: SortingOption;
  setSortingOption: React.Dispatch<React.SetStateAction<SortingOption>>;
}

const { Search } = Input;

/* - - - COMPONENT - - - */
const Toolbar = ({
  filterPlaceholder,
  addHandler,
  setFilterText,
  sortingOption,
  setSortingOption,
}: Props) => {
  /* - - - DESTRUCTING - - - */

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */
  const changeSortOptionHandler = () =>
    setSortingOption(sortingOption === 'asc' ? 'desc' : 'asc');

  const filterHandler: SearchProps['onSearch'] = (filterInput) => {
    const trimmedFilterInput = filterInput.trim();
    setFilterText(trimmedFilterInput === '' ? null : trimmedFilterInput);
  };

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <Flex
      className={styles['flex-container'] ?? ''}
      justify='space-between'
    >
      <Button
        type='primary'
        variant='solid'
        icon={<PlusOutlined />}
        shape='circle'
        onClick={addHandler}
      />

      <Flex gap={12}>
        <Search
          placeholder={filterPlaceholder}
          allowClear
          onSearch={filterHandler}
        />

        <Button
          type='primary'
          variant='solid'
          icon={
            sortingOption === 'asc' ? (
              <SortAscendingOutlined />
            ) : (
              <SortDescendingOutlined />
            )
          }
          shape='circle'
          onClick={changeSortOptionHandler}
        />
      </Flex>
    </Flex>
  );
};

export default Toolbar;
