import "./Header.scss";
import BackArrow from "../../asset/images/icons/arrow.svg";
import SearchIcon from "../../asset/images/icons/search.png";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <img className="header__arrow" src={BackArrow} alt="back-arrow" />
          <h2 className="header__text">Monthly Survey </h2>
        </div>
        <img className="header__search" src={SearchIcon} alt="search" />
      </header>
    </>
  );
}

export default Header;
