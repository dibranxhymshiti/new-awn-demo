import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useState } from 'react';
import { navigationList } from './navigationList';
import { useHistory, useLocation } from 'react-router-dom';
import { Collapse, Container } from '@material-ui/core';
import { useLayoutStyles } from './layoutStyles';

const Layout = ({ children }) => {
  const classes = useLayoutStyles();
  const theme = useTheme();
  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [openNestedList, setOpenNestedList] = useState(false);

  const handleClick = () => {
    setOpenNestedList(!openNestedList);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            AWN 2.0
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationList.map((navItem) => (
            <>
              <ListItem
                button
                key={navItem.name}
                className={clsx({
                  [classes.active]: location.pathname === navItem.route
                })}
                onClick={() => history.push(navItem.route)}
              >
                <ListItemIcon>{navItem.icon}</ListItemIcon>
                <ListItemText primary={navItem.name} />
              </ListItem>
              {navItem.child &&
                navItem.child.map((child) => (
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button key={child.name}>
                        <ListItemText primary={child.name} />
                      </ListItem>
                    </List>
                  </Collapse>
                ))}
            </>
          ))}
        </List>
      </Drawer>
      <Container className={classes.container}>
        <Toolbar />
        {children}
      </Container>
    </div>
  );
};

export default Layout;
