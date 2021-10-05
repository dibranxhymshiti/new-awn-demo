import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import Users from '../pages/Users/Users';
import UserDetails from '../pages/Users/UserDetails/UserDetails';
import Login from '../pages/Login/Login';
import {
  DAILY_REPORTS,
  EMPLOYEES,
  LOGIN,
  MONTHLY_REPORTS,
  ROOT,
  USERS
} from './constants';
import DailyReports from '../pages/DailyReports/DailyReports';
import MonthlyReports from '../pages/MonthlyReports/MonthlyReports';
import Employees from '../pages/Employees/Employees';
import EmployeeDetails from '../pages/Employees/EmployeeDetails/EmployeeDetails';

const RouterConfig = () => {
  return (
    <Switch>
      <Route path={ROOT} exact component={Dashboard} />
      <Route path={DAILY_REPORTS} component={DailyReports} />
      <Route path={MONTHLY_REPORTS} component={MonthlyReports} />
      <Route path={EMPLOYEES} exact component={Employees} />
      <Route path={`${EMPLOYEES}/create`} component={EmployeeDetails} />
      <Route path={`${EMPLOYEES}/:id`} component={EmployeeDetails} />
      <Route path={USERS} exact component={Users} />
      <Route path={`${USERS}/create`} component={UserDetails} />
      <Route path={`${USERS}/:id`} component={UserDetails} />
      <Route path={LOGIN} component={Login} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default RouterConfig;
