import React from 'react';
import './about.css';

const About = () => {
  return (
    <>
      <h1 className='header_view'>О нас</h1>
      <div className="about-container">
        <h2>Piззa – место, где тебе действительно рады!</h2>
        <p>
          История ресторана началась в 1998 году с желания создать место для семьи и друзей<br />
          И более чем за четверть века мы завели тысячи новых друзей<br />
          Нас любят за качественные ингредиенты и демократичные цены<br />
          <h3>«Наши гости – это наши друзья»</h3>
          Идея создания ресторана была простая: мы решили открыть ресторан для молодых семей с детьми.
          То самое место, куда можно позвать друзей и близких, и где можно отдохнуть с ребёнком в выходные.
          Где каждый посетитель почувствует себя желанным гостем в уютной атмосфере с ароматами «домашней кухни».
          Не важно кто ты – студент, домохозяйка или офисный работник, тебе всегда будут рады и предложат любимые блюда по доступной цене.
          Так появился план самого первого ресторана: уютного, демократичного, с качественными продуктами.<br />
        </p>
      </div>
    </>
  );
};

export default About;
