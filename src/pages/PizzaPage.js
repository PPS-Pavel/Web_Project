import React from 'react';
import PizzaCard from '../components/pizza_card';
import "./Pizza_combo_drink_page.css"
const pizzas = [
    { image: 'https://optim.tildacdn.com/tild6665-3433-4031-b438-343930626335/-/resize/520x/-/format/webp/_2023-02-28_21301697.png', title: 'Маргарита', description: 'Сырный бортик, моцарелла, пицца-соус, помидоры, базилик', size: '30 см', weight: 600, price: 550 },
    { image: 'https://optim.tildacdn.com/tild3339-3330-4366-a364-626666373664/-/format/webp/large_3.jpg', title: 'Пепперони', description: 'Томат, пепперони, моцарелла', size: '35 см', weight: 730, price: 600 },
    { image: 'https://optim.tildacdn.com/tild3662-6632-4933-b235-656563313237/-/format/webp/sb5dhudhrczje63w9mj7.png', title: 'Ветчина и грибы', description: 'Ветчина, моцарелла, пицца-соус, шампиньоны', size: '35 см', weight: 810, price: 700 },
    { image: 'https://optim.tildacdn.com/tild3539-6563-4863-b461-366232623361/-/format/webp/noroot.png', title: 'Цезарь', description: 'Соус цезарь, курица, помидоры черри, пармезан, моцарелла, салат айсберг', size: '30 см', weight: 630, price: 650 },
    { image: 'https://optim.tildacdn.com/tild3938-6131-4062-a636-623435373563/-/format/webp/image1.jpg', title: '4 сыра', description: 'Белый соус, моцарелла, рокфор, чеддер, пармезан', size: '35 см', weight: 750, price: 700 },
    { image: 'https://optim.tildacdn.com/tild3239-3339-4162-a461-623632333935/-/resize/520x/-/format/webp/_2023-02-28_21490995.png', title: '4 вкуса', description: 'Томат, итальянский сыр, пепперони, ветчина, шампиньоны, курица, сладкий перец, фета, помидоры', size: '30 см', weight: 620, price: 650 },
    { image: 'https://optim.tildacdn.com/tild3266-3865-4032-b135-356361376438/-/resize/520x/-/format/webp/_2023-02-28_21432055.png', title: 'Острая пепперони', description: 'Томат, пепперони, итальянский сыр, халапеньо', size: '30 см', weight: 600, price: 600 },
    { image: 'https://optim.tildacdn.com/tild3734-6538-4239-b961-343836343766/-/resize/520x/-/format/webp/_2023-02-28_21333329.png', title: 'Сырная', description: 'Томат, итальянский сыр, чеддер, орегано', size: '35 см', weight: 710, price: 690 },
    { image: 'https://optim.tildacdn.com/tild3336-3834-4565-a434-326466396635/-/resize/520x/-/format/webp/_2023-02-28_21474222.png', title: 'Двойная пепперони', description: 'Томат, много пепперони и двойной сыр', size: '35 см', weight: 900, price: 820 },
    { image: 'https://optim.tildacdn.com/tild6432-3536-4330-a561-636365653137/-/format/webp/large__.jpg', title: 'Грибная', description: 'Томат, шампиньоны, оливки, моцарелла, орегано', size: '30 см', weight: 580, price: 600 },
    { image: 'https://optim.tildacdn.com/tild3066-3365-4363-b462-333562306534/-/format/webp/large_img_1397.jpg', title: 'Барбекю', description: 'Томат, курица, бекон, моцарелла, чеддер, соус барбекю, орегано', size: '30 см', weight: 800, price: 780 },
    { image: 'https://optim.tildacdn.com/tild3030-3066-4437-b539-616266363861/-/resize/520x/-/format/webp/_2023-02-28_21540035.png', title: 'Мясная', description: 'Томат, бекон, чоризо,пепперони, курица, моцарелла', size: '35 см', weight: 900, price: 890 },
];



function PizzaPage({ addToCart }) {
  return (
    <div>
      <h1 className="header_view">Пиццы</h1>
      <div className="cards-container">
        {pizzas.map((pizza, index) => (
          <PizzaCard
            key={index}
            image={pizza.image}
            title={pizza.title}
            description={pizza.description}
            size={pizza.size}
            weight={pizza.weight}
            price={pizza.price}
            addToCart={() => addToCart({ title: pizza.title, price: pizza.price })}
          />
        ))}
      </div>
    </div>
  );
}

export default PizzaPage;