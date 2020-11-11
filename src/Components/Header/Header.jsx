import { Avatar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    flexGrow: 1,
  },

  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

export let Header = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    let rs = localStorage.getItem('is_admin');
    setIsAdmin(rs == 'true');
  }, []);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  let handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('is_admin');
    history.replace('/login');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.logo}>
            <Avatar
              className={classes.large}
              src="https://www.enp.edu.dz/storage/2020/06/cerist.png"
            />
          </Link>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              {isAdmin && (
                <MenuItem onClick={handleClose}>
                  <Link to="/admin">Administration</Link>
                </MenuItem>
              )}
              <MenuItem onClick={handleLogout}>Deconnexion</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
