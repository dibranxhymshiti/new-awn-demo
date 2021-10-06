import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
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
import { Box, Collapse, Container } from '@material-ui/core';
import { useLayoutStyles } from './layoutStyles';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const Layout = ({ children }) => {
  const classes = useLayoutStyles();
  const theme = useTheme();
  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState({});

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubMenus = (name) => {
    setOpenSubmenu((state) => ({ [name]: !state[name] }));
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
        <Box mt={3} />
        <List>
          {navigationList.map((navItem) => (
            <div key={navItem.id}>
              {navItem.subMenu !== undefined ? (
                <div key={navItem.id}>
                  <ListItem
                    button
                    className={clsx({
                      [classes.active]: location.pathname === navItem.route
                    })}
                    onClick={() => handleSubMenus(navItem.name)}
                  >
                    <ListItemIcon>{navItem.icon}</ListItemIcon>
                    <ListItemText primary={navItem.name} />
                    {openSubmenu[navItem.name] ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )}
                  </ListItem>

                  <Collapse
                    in={openSubmenu[navItem.name]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {navItem.subMenu.map((subMenu) => (
                        <ListItem button key={subMenu.id}>
                          <Box pl={4}>
                            <ListItemText primary={subMenu.name} />
                          </Box>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </div>
              ) : (
                <ListItem
                  button
                  key={navItem.id}
                  className={clsx({
                    [classes.active]: location.pathname === navItem.route
                  })}
                  onClick={() => history.push(navItem.route)}
                >
                  <ListItemIcon>{navItem.icon}</ListItemIcon>
                  <ListItemText primary={navItem.name} />
                </ListItem>
              )}
            </div>
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
