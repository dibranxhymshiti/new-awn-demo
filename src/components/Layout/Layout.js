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
import {
  Box,
  Collapse,
  Container,
  Dialog,
  DialogActions,
  Grid,
  MenuItem,
  TextField
} from '@material-ui/core';
import { useLayoutStyles } from './layoutStyles';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

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

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
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
          <Box mb={2}>
            <Typography variant="subtitle2" noWrap>
              AWN 2.0
            </Typography>
          </Box>
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
                        <ListItem
                          button
                          key={subMenu.id}
                          onClick={subMenu.id === 'a' ? handleClickOpen : null}
                        >
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
        <Dialog
          open={openDialog}
          maxWidth={'md'}
          fullWidth
          className={classes.dialog}
          scroll="paper"
          onClose={handleClose}
        >
          <Box m={5}>
            <Typography variant="h4">Project Details</Typography>
            <Box mt={4} />
            <Grid container spacing={6}>
              <Grid item xs={12} md={6} className={classes.borderRightDotted}>
                <Box mb={3}>
                  <TextField
                    label="PO#"
                    type="text"
                    fullWidth
                    size="small"
                    variant="outlined"
                  />
                </Box>
                <Box mb={3}>
                  <TextField
                    label="PROJECT TITLE"
                    type="text"
                    fullWidth
                    size="small"
                    variant="outlined"
                  />
                </Box>
                <Box mb={3}>
                  <TextField
                    label="CATEGORY"
                    type="text"
                    fullWidth
                    size="small"
                    variant="outlined"
                  />
                </Box>
                <Box mb={2}>
                  <Typography variant="subtitle2" gutterBottom>
                    SCHEDULE OPTIONS
                  </Typography>
                </Box>
                <Box mb={3}>
                  <TextField
                    label="SCHEDULE OPTIONS"
                    type="text"
                    fullWidth
                    size="small"
                    select
                    variant="outlined"
                  >
                    <MenuItem value={1}>Specific date and time</MenuItem>
                    <MenuItem value={2}>No Specific date and time</MenuItem>
                  </TextField>
                </Box>
                <Box mb={3}>
                  <TextField
                    label="DATE AND TIME"
                    type="text"
                    fullWidth
                    size="small"
                    variant="outlined"
                  />
                </Box>
                <Box mb={2}>
                  <Typography variant="subtitle2" gutterBottom>
                    LOCATION OPTIONS
                  </Typography>
                </Box>
                <Box mb={3}>
                  <TextField
                    label="LOCATION OPTIONS"
                    type="text"
                    fullWidth
                    size="small"
                    variant="outlined"
                    select
                  >
                    <MenuItem value={1}>Select Location</MenuItem>
                    <MenuItem value={1}>Create new location</MenuItem>
                    <MenuItem value={1}>No location/virtual</MenuItem>
                  </TextField>
                </Box>
                <Box mb={3}>
                  <TextField
                    label="ADDRESS"
                    type="text"
                    fullWidth
                    size="small"
                    variant="outlined"
                  />
                </Box>
                <Box mb={2}>
                  <Typography variant="subtitle2" gutterBottom>
                    DESCRIPTION
                  </Typography>
                </Box>
                <Box mb={3}>
                  <TextField
                    type="text"
                    fullWidth
                    size="small"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Box>
                <Box mb={2}>
                  <Typography variant="subtitle2" gutterBottom>
                    SPECIAL INSTRUCTIONS
                  </Typography>
                </Box>
                <Box mb={3}>
                  <TextField
                    type="text"
                    fullWidth
                    size="small"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={3}>
                  <TextField
                    label="SELECT TALENT"
                    type="text"
                    fullWidth
                    size="small"
                    variant="outlined"
                  />
                </Box>
                <Box mb={2}>
                  <Typography variant="subtitle2" gutterBottom>
                    PAYMENT OPTIONS
                  </Typography>
                </Box>
                <Box mb={3}>
                  <TextField
                    label="PAYMENT TYPE"
                    type="text"
                    fullWidth
                    size="small"
                    variant="outlined"
                    select
                  >
                    <MenuItem value={1}>Flat fee on time</MenuItem>
                    <MenuItem value={2}>Hourly rate</MenuItem>
                  </TextField>
                </Box>
                <Box mb={3}>
                  <TextField
                    label="PRICING"
                    type="text"
                    fullWidth
                    size="small"
                    variant="outlined"
                  />
                </Box>
              </Grid>
            </Grid>
            <DialogActions>
              <Button
                onClick={handleClose}
                variant="outlined"
                color="primary"
                size="large"
              >
                Save as draft
              </Button>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                size="large"
                onClick={handleClose}
              >
                Send Now
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
