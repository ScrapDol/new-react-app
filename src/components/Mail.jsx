export const Mail = () => {
  return (
    <section className="section-bg">
      <div className="blur-mail">
        <div className="container">
          <div className="d-flex">
            <div className="w-60 pr-4">
              <h2 id="title">Давайте работать вместе</h2>
              <p>
                Практический опыт показывает, что новая модель организационной
                деятельности способствует повышению актуальности системы
                масштабного изменения ряда параметров!
              </p>
            </div>
            <div className="w-40">
              <form>
                {" "}
                <input type="text" placeholder="Как к вам обращаться" />{" "}
                <input type="email" placeholder="Ваш email" />{" "}
                <textarea rows={4} placeholder="Сообщение" />{" "}
                <input
                  className="btn btn-bg"
                  type={"submit"}
                  value={"Отправить"}
                  placeholder="Как к вам обращаться"
                />{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
