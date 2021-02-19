import React, {useState, createContext} from 'react';

function AppContext() {
  const LangContext = createContext()
  const ThemeContext = createContext();

  const LangProvider = (props) => {
    // Initial State
    const [lang, setLang] = useState('🇮🇩');
    const changeLang = e => setLang(e.target.value);
    // declarasi state object
    const LangState = { lang, changeLang };

    return (
      <LangContext.Provider value={LangState}>
        {props.children}
      </LangContext.Provider>
    )
  };

  const ThemeProvider = (props) => {
    // Initial State
    const [theme, setTheme] = useState('light')
    const changeTheme = theme => setTheme(theme.target.value);
    // declarasi state object
    const ThemeState = {theme, changeTheme};

    return (
      <ThemeContext.Provider value={ThemeState}>
        {props.children}
      </ThemeContext.Provider>
    )
  };

  return {
    LangProvider,
    LangContext,
    ThemeProvider,
    ThemeContext
  }
};

export default AppContext();