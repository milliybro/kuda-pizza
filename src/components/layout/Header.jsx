import location from "../../assets/navbar/header-location.png";
import account from "../../assets/navbar/header-account.png";
import logo from "../../assets/navbar/logo.png";
import carta from "../../assets/navbar/cart.png";

import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ProductContext } from "../../context/ProductContext";

import fullHeart from "../../assets/navbar/heart-full.png";
import categories from "../data/category";

const Header = () => {
  const { langType, lang, changeLang } = useContext(LanguageContext);
  const { totalPriceOfCart } = useContext(ProductContext);

  // scroll
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 120;
      setIsSticky(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    const targetElement = document.getElementById(id);
    const offset = 70; // Adjust this value to account for any fixed headers

    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: "smooth",
    });
  };
  // scroll
  return (
    <header className="">
      <div className="container header-main">
        <ul className="nav">
          <li className="nav-item location">
            <img src={location} alt="location" />
            <select className="location-select">
              <option value="Москва">{lang.moskva}</option>
              <option value="Москва">{lang.peterburg}</option>
            </select>
          </li>
          <li>{lang.belgilash}</li>
          <li>
            {lang.yetkazish} <span>00:24:19</span>
          </li>
        </ul>
        <ul className="header-account">
          <li>{lang.ishvaqti}</li>
          <li className="d-flex align-items-center gap-2">
            <img src={account} alt="" /> {lang.accaunt}
          </li>
          <NavLink>
            <select value={langType} onChange={changeLang}>
              <option value="ru">Ru</option>
              <option value="uz">Uz</option>
            </select>
          </NavLink>
        </ul>
      </div>
      <hr className="my-0" />
      <div className={`wrapper  ${isSticky ? "sticky" : ""}`}>
        <nav className="fixed_navbar container align-items-center">
            <div className="logo_wrapper">
              <NavLink to="/" className="logoch d-flex gap-2">
                <img src={logo} alt="" />
                {lang.pizza}
              </NavLink>
              <ul className={`sticky_navbar  ${isSticky ? "show_nav" : ""}`}>
                {categories.map((res, index) => (
                  <li key={index}>
                    <NavLink
                      className="navlink"
                      onClick={() => scrollTo(res.link)}
                      href="#g"
                    >
                      {res.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-3">
              <NavLink to="/favourite" className="cart">
                <img height={25} src={fullHeart} alt="" />0
              </NavLink>
              <NavLink to="/cart" className="cart">
                <img src={carta} alt="" />
                {totalPriceOfCart} ₽
              </NavLink>
            </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
