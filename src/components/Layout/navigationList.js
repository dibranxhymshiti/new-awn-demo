import {
  EMPLOYEES,
  MONTHLY_REPORTS,
  ROOT,
  USERS
} from '../../navigation/constants';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TodayIcon from '@material-ui/icons/Today';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import LinkIcon from '@material-ui/icons/Link';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import GroupIcon from '@material-ui/icons/Group';

export const navigationList = [
  {
    id: 1,
    name: 'Dashboard',
    route: ROOT,
    icon: <DashboardIcon />
  },
  {
    id: 2,
    name: 'Work',
    icon: <AssignmentIcon />,
    subMenu: [
      {
        id: 'a',
        name: 'Create a Project'
      },
      {
        id: 'b',
        name: 'View Project'
      },
      {
        id: 'c',
        name: 'Create a Payment'
      }
    ]
  },
  {
    id: 3,
    name: 'Invoices',
    route: MONTHLY_REPORTS,
    icon: <TodayIcon />
  },
  {
    id: 4,
    name: 'Reporting',
    route: EMPLOYEES,
    icon: <PermContactCalendarIcon />
  },
  {
    id: 5,
    name: 'Talent',
    route: USERS,
    icon: <GroupIcon />
  },
  {
    id: 6,
    name: 'Gallery',
    icon: <InsertPhotoIcon />
  },
  {
    id: 7,
    name: 'Profile',
    icon: <AccountCircleIcon />
  },
  {
    id: 8,
    name: 'Integrations',
    icon: <LinkIcon />
  },
  {
    id: 9,
    name: 'Logout',
    icon: <PowerSettingsNewIcon />
  }
];
