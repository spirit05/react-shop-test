import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "MALM",
          img: "malm.avif",
          descr: "Комод с 2 ящиками, белый, 40x55 см",
          category: "dressers",
          price: "59.99",
        },
        {
          id: 2,
          title: "SKRUVBY",
          img: "skruvby.avif",
          descr: "Приставной столик, белый, 40x32 см",
          category: "dressers",
          price: "49.99",
        },
        {
          id: 3,
          title: "TOLKNING",
          img: "tolkning.avif",
          descr: "Тумбочка, ручная работа, 52 см",
          category: "dressers",
          price: "89.99",
        },
        {
          id: 4,
          title: "ÅRSTID",
          img: "arstid-lampe.avif",
          descr: "Настольная лампа, латунь/белое основание",
          category: "light",
          price: "29.99",
        },
        {
          id: 5,
          title: "SOLTULPAN",
          img: "soltulpan.avif",
          descr: "Плед, кремовый, 130х170 см",
          category: "plaids",
          price: "39.99",
        },
        {
          id: 6,
          title: "VALLKRASSING",
          img: "vallkrassing.avif",
          descr: "Плед, синий фон, 150x200 см",
          category: "plaids",
          price: "19.99",
        },
        {
          id: 7,
          title: "INGRUN",
          img: "ingrun.avif",
          descr: "Пледб 130x170 см",
          category: "plaids",
          price: "14.99",
        },
        {
          id: 8,
          title: "ÅSKMULLER",
          img: "askmuller-lampe.avif",
          descr: "Настольная лампа, серо-зеленая, 24 см",
          category: "light",
          price: "19.99",
        },
        {
          id: 9,
          title: "SAXHYTTAN",
          img: "saxhyttan-lampe.avif",
          descr: "Настольная лампа, бежевый/черный, 26 см",
          category: "light",
          price: "16.99",
        },
        {
          id: 10,
          title: "STEFAN",
          img: "stefan-chaise.avif",
          descr: "Стул, черно-коричневый",
          category: "chairs",
          price: "34.99",
        },
        {
          id: 11,
          title: "FANBYN",
          img: "fanbyn-chaise.avif",
          descr: "Стул, белый/для интерьера/улицы",
          category: "chairs",
          price: "99.99",
        },
        {
          id: 12,
          title: "NILSOVE / NORNA",
          img: "nilsove-norna.avif",
          descr: "Стул+подушка, ротанг белый/Лайла натуральный",
          category: "chairs",
          price: "139.99",
        },
      ],
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
