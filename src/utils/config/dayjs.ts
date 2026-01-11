import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import localeData from 'dayjs/plugin/localeData';

import 'dayjs/locale/de';
import 'dayjs/locale/en-gb';

dayjs.extend(isoWeek);
dayjs.extend(localeData);

export default dayjs;
