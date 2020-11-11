import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { authHttp } from '../../utils';
import { Admin } from '../Admin';
import { EditUser } from '../EditUser/EditUser';

export let EditRoute = () => {
  let params = useParams();
  let [user, setUser] = useState();
  let history = useHistory();

  useEffect(() => {
    let fetchUser = async () => {
      //@ts-ignore

      let response = await authHttp.get(`/users/${params.id}`);
      setUser(response.data);
    };
    console.log('hi');

    fetchUser();
  }, []);

  if (!user) {
    return (
      <Admin>
        <></>
      </Admin>
    );
  }

  let onSubmit = async (data) => {
    try {
      //@ts-ignore
      let response = await authHttp.patch(`/users/${params.id}`, data);
      history.replace('/admin');
    } catch (e) {
      let [key] = Object.keys(e.response.data.error);
      alert(e.response.data.error[key]);
    }
  };
  let onReset = async () => {
    history.push('/admin');
  };
  return (
    <Admin>
      <EditUser user={user} onSubmit={onSubmit} onReset={onReset} />
    </Admin>
  );
};
