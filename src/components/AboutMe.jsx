import { Element } from "react-scroll";

export const AboutMe = () => {
  return (
    <Element name="about">
      <section>
        <div className="container">
          <h2 id="about">О нас</h2>
          <p>
            Информационный центр «Навигатор» – это официальный представитель
            более десятка российских и мировых IT-компаний в регионе Кавказских
            Минеральных Вод, который реализует программное обеспечение и
            производит настройку и обслуживание 1С и другого продаваемого
            программного обеспечения (ПО), а также налаживает и обслуживает
            локальные сети внутри компаний.
          </p>
          <p>
            Специалисты «Навигатора» стремятся выполнить работу своих заказчиков
            максимально эффективно, качественно и оперативно. Эти принципы
            работы обеспечиваются современным, надежным и простым в пользовании
            ПО, к которым прибегают при автоматизации под ключ.
          </p>
          <p>
            Наш информационный центр разрабатывает и подбирает программы
            автоматизации, учитывая сферу деятельности клиента и специфику
            ведения его бизнеса, независимо от размера.
          </p>
        </div>
      </section>
    </Element>
  );
};
