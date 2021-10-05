import {
  DAILY_REPORTS,
  EMPLOYEES,
  MONTHLY_REPORTS,
  ROOT,
  USERS
} from '../../navigation/constants';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TodayIcon from '@material-ui/icons/Today';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

export const navigationList = [
  {
    name: 'Dashboard',
    route: ROOT,
    icon: <DashboardIcon />
  },
  {
    name: 'Work',
    route: DAILY_REPORTS,
    icon: <AssignmentIcon />,
    child: [
      {
        name: 'Create a Project'
      },
      {
        name: 'View Project'
      },
      {
        name: 'Create a Payment'
      }
    ]
  },
  {
    name: 'Invoices',
    route: MONTHLY_REPORTS,
    icon: <TodayIcon />
  },
  {
    name: 'Reporting',
    route: EMPLOYEES,
    icon: <PermContactCalendarIcon />
  },
  {
    name: 'Talent',
    route: USERS,
    icon: <TodayIcon />
  },
  {
    name: 'Gallery',
    route: USERS,
    icon: <TodayIcon />
  },
  {
    name: 'Profile',
    route: USERS,
    icon: <TodayIcon />
  },
  {
    name: 'Integrations',
    route: USERS,
    icon: <TodayIcon />
  },
  {
    name: 'Logout',
    route: USERS,
    icon: <TodayIcon />
  }
];
