import { scroller } from "react-scroll";

const scrollTo = (id) => {
  scroller.scrollTo(id, {
    duration: 1000,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

export const Firstscreen = () => {
  return (
    <div className="first-screen section-bg">
      <div className="blur">
        <div className="container">
          <div>
            <h1>
              БЕЗОБЛАЧНАЯ РАБОТА С ВАШИМ 1С:ПРЕДПРИЯТИЕМ ИЗ ЛЮБОЙ ТОЧКИ МИРА,
              ГДЕ ЕСТЬ ИНТЕРНЕТ
            </h1>
          </div>
          <div className="frame">
            <button
              className="custom-btn btn-7"
              onClick={() => scrollTo("title")}
            >
              <span>Написать</span>
            </button>
            <button
              className="custom-btn btn-7"
              onClick={() => scrollTo("about")}
            >
              <span>Узнать больше</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
