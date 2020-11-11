import {
  CircularProgress,
  Grid,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { authHttp } from '../../utils';
import { Admin } from '../Admin';
import './AdminRoute.css';

let useStyles = makeStyles({});
export const AdminRoute = () => {
  let classes = useStyles();
  let location = useLocation();
  let history = useHistory();
  let [users, setUsers] = useState(null);
  let teams = ['A', 'B', 'C', 'D'];
  useEffect(() => {
    let isAdmin = localStorage.getItem('is_admin') || false;
    console.log('location', location);
    if (!isAdmin) {
      history.replace('/');
    }
  }, []);

  useEffect(() => {
    let fetchUsers = async () => {
      let response = await authHttp.get('/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);
  if (users == null)
    return (
      <div className="Admin__spinner">
        <CircularProgress size={90} />
      </div>
    );
  let deleteUser = async (id) => {
    try {
      let response = await authHttp.delete(`/users/${id}`);
      setUsers((old) => old.filter((user) => user.id != id));
    } catch (error) {
      debugger;
    }
  };
  return (
    <Admin>
      <Grid container spacing={2}>
        {users.map((user) => {
          return (
            <Grid key={user.id} item xs={12} md={6} lg={4}>
              <div className="Admin__User">
                <div className="Admin__User--header">
                  <div className="left">
                    <h1>
                      {user.lastName} {user.firstName}
                    </h1>
                    <span>{user.email}</span>
                  </div>
                  <div className="right">
                    <Link to={`/user/${user.id}/edit`}>
                      <IconButton aria-label="settings">
                        <EditIcon />
                      </IconButton>
                    </Link>

                    <IconButton
                      aria-label="settings"
                      onClick={() => deleteUser(user.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
                <div className="Admin__User--content">
                  <div className="card-user-info">
                    Nom <span>{user.lastName}</span>
                  </div>
                  <div className="card-user-info">
                    Prenom <span>{user.firstName}</span>
                  </div>
                  <div className="card-user-info">
                    Division <span>{user.domain.name}</span>
                  </div>
                  <div className="card-user-info">
                    Equipe <span>{teams[user.equipe] || 'A'}</span>
                  </div>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Admin>
  );
};
