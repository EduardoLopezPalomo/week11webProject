import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/" color="inherit">
          {t('home')}
        </Button>
        <Button component={Link} to="/about" color="inherit">
          {t('about')}
        </Button>
        <Button color="inherit" id="fi" onClick={() => changeLanguage('fi')}>
          Finnish
        </Button>
        <Button color="inherit" id="en" onClick={() => changeLanguage('en')}>
          English
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


