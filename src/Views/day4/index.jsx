import React, {useContext} from 'react';
import AppContext from './AppContext'

const { 
  LangContext, 
  LangProvider,
  ThemeProvider,
  ThemeContext
} = AppContext;


function LangPage() {

  return (
    <LangProvider>
      <ThemeProvider>
        <Header />
        <Footer />
      </ThemeProvider>
    </LangProvider>
  )
};

function Header() {
  return (
    <>
      <i>--- Header ----</i>
      <Menu />
    </>
  )
};

function Menu() {
  const langProps = useContext(LangContext);
  const themeProps = useContext(ThemeContext);

  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>
          Languange
          <select value={langProps.lang} onChange={langProps.changeLang}>
            <option value="🇬🇧"> 🇬🇧 English </option>
            <option value="🇮🇩"> 🇮🇩 Indonesia </option>
          </select>
        </li>
        <li>
          Theme
          <select value={themeProps.theme} onChange={themeProps.changeTheme}>
            <option value="light"> Light </option>
            <option value="dark"> Dark </option>
          </select>
        </li>
      </ul>
    </div>
  )
}

function Footer() {
  const langProps = useContext(LangContext);
  const themeProps = useContext(ThemeContext);

  return (
    <>
      <i> -- Footer --</i>
      <p>Language: {langProps.lang} </p>
      <p>Theme : {themeProps.theme}</p>
    </>
  );
};
export default LangPage;