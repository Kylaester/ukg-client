import "./ThankYou.scss";
import group from "../../asset/images/icons/group-high-five.png";

function ThankYou() {
  return (
    <div className="container">
      <section className="feedback">
        <h2 className="feedback__header">Great News!</h2>
      </section>

      <article className="image-container">
        <img className="image-container__pic" src={group} />
      </article>

      <section className="info2">
        <p className="info2__header">
          It seems that taking some time off could be beneficial for you.
        </p>
        <p className="info2__header">
          You currently have 10 days of paid time off (PTO) remaining.
        </p>
      </section>

      <section className="help-header">
        <h2 className="help-header__header">We're here to help !</h2>
      </section>

      <section className="buttons">
        <button className="buttons__request">
          <span>Request PTO</span>
        </button>

        <button className="buttons__remind">
          <span>Remind me later</span>
        </button>
      </section>
    </div>
  );
}

export default ThankYou;
