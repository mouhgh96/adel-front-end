import React, {useEffect, useState} from "../../../web_modules/react.js";
import {useHistory, useParams} from "../../../web_modules/react-router-dom.js";
import {authHttp} from "../../utils.js";
import {Admin as Admin2} from "../Admin.js";
import {EditUser as EditUser2} from "../EditUser/EditUser.js";
export let EditRoute = () => {
  let params = useParams();
  let [user, setUser] = useState();
  let history = useHistory();
  useEffect(() => {
    let fetchUser = async () => {
      let response = await authHttp.get(`/users/${params.id}`);
      setUser(response.data);
    };
    console.log("hi");
    fetchUser();
  }, []);
  if (!user) {
    return /* @__PURE__ */ React.createElement(Admin2, null, /* @__PURE__ */ React.createElement(React.Fragment, null));
  }
  let onSubmit = async (data) => {
    try {
      let response = await authHttp.patch(`/users/${params.id}`, data);
      history.replace("/admin");
    } catch (e) {
      let [key] = Object.keys(e.response.data.error);
      alert(e.response.data.error[key]);
    }
  };
  let onReset = async () => {
    history.push("/admin");
  };
  return /* @__PURE__ */ React.createElement(Admin2, null, /* @__PURE__ */ React.createElement(EditUser2, {
    user,
    onSubmit,
    onReset
  }));
};
