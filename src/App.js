import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
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
          descr: "Плед 130x170 см",
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
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chouseCategory = this.chouseCategory.bind(this);
    this.onShowFullItem = this.onShowFullItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chouseCategory={this.chouseCategory} />
        <Items
          items={this.state.currentItems}
          onAdd={this.addToOrder}
          onShowFullItem={this.onShowFullItem}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            item={this.state.fullItem}
            onAdd={this.addToOrder}
            onShowFullItem={this.onShowFullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowFullItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chouseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isExist = false;

    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isExist = true;
      }
    });

    if (!isExist) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
