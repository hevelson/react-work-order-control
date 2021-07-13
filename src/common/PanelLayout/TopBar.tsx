import React from 'react';
import { useHistory } from 'react-router-dom';
import { getLocalUser, userLogout } from '../../services/localStorage';

const TopBar = (): JSX.Element => {
  const history = useHistory();
  const { email, name, image } = getLocalUser();

  const logout = () => {
    userLogout();
    history.push('/');
  };

  return (
    <header className="panel-top-bar">
      <div className="user-info">
        <div className="profile">
          <div className="name">{name}</div>
          <div className="email">{email}</div>
        </div>
        <div className="image">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="logout">
        <button type="button" onClick={logout}>
          Sair
        </button>
      </div>
    </header>
  );
};

export default TopBar;
