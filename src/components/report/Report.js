import "./Report.scss";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
function Report() {
  return (
    <>
      <Header />
      <section className="report">
        <div className="radio">
          <div className="radio__number-container">
            <p className="text-text">1</p>
          </div>
          <h2 className="radio__title">
            *How would you describe your wellbeing when you are in the
            workplace?
          </h2>
        </div>
        <div className="radio__container">
          <div className="radio__select-container">
            <input className="radio__select" type="radio" name="rating" />
            <label className="radio__text">1</label>
          </div>
          <div className="radio__select-container">
            <input className="radio__select" type="radio" name="rating" />
            <label className="radio__text">2</label>
          </div>
          <div className="radio__select-container">
            <input className="radio__select" type="radio" name="rating" />
            <label className="radio__text">3</label>
          </div>
          <div className="radio__select-container">
            <input className="radio__select" type="radio" name="rating" />
            <label className="radio__text">4</label>
          </div>
          <div className="radio__select-container">
            <input className="radio__select" type="radio" name="rating" />
            <label className="radio__text">5</label>
          </div>
        </div>
        <div className="radio-text-container">
          <label className="radio__text-long">Satisfied</label>
          <label className="radio__text-small">Dissatisfied</label>
        </div>
        <div className="text">
          <div className="text-container">
            <p className="text-text">2</p>
          </div>

          <h2 className="radio__title">
            *How would you describe your wellbeing when you are in the
            workplace?
          </h2>
        </div>
        <div className="textarea">
          <div className="textarea__container">
            <textarea
              type="text"
              className="textarea__text"
              placeholder="Sometimes I feel fatigued and find it hard to keep motivated."
              // value={text}
              // onChange={(event) => setText(event.target.value)}
            />
          </div>
        </div>
        <div className="report__button-container">
          <Link to={"/form"}>
            <button type="submit" className="report__button">
              Next
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Report;
