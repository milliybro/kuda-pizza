import { createContext, useState } from "react";
import { PropTypes } from "prop-types";
import languages from "../components/data/languages";
import { LANGUAGE } from "../constants";

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const [langType, setLangType] = useState(
    localStorage.getItem(LANGUAGE) || "ru"
  );

  const changeLang = (e)=>{
   setLangType(e.target.value)
   localStorage.setItem(LANGUAGE, e.target.value)
 }

  const state = { langType, lang: languages[langType], changeLang };

  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageContextProvider.propTypes = {
  children: PropTypes.node,
};
export default LanguageContextProvider;
