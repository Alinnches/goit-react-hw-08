import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={s.userMenu}>
      <p className={s.welcome}>Welcome, {user.name}!</p>
      <button className={s.logoutBtn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
