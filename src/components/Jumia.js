import "../styles/Jumia.css";
import Banner from "./../components/Banner";
import GoodsOption from "./../components/GoodsOption";
import Header from "./../components/Header";
import Sidebar from "./../components/Sidebar";
import Widget from "./../components/Widget";
import AirplanemodeActiveOutlinedIcon from "@material-ui/icons/AirplanemodeActiveOutlined";
import StoreMallDirectoryOutlinedIcon from "@material-ui/icons/StoreMallDirectoryOutlined";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import Account from "./../components/Account";
import Help from "./../components/Help";
import Products from "./../components/Products";
import { useEffect, useState } from "react";

function Jumia() {
  const [popLogin, setPopLogin] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  // const [getProduct, setGetProduct] = useState([])

  // useEffect(() => {
  //   async function getProducts() {
  //     const products = await fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     // .then(products => console.log(products))
  //     // setGetProduct(products.data)
      

  //     return { props: { products } };
  //   }
  //   getProducts();
  // }, []);
  // console.log(products)

  const handleMenu = () => {
    setPopLogin(!popLogin);
  };
  const handleSecondMenu = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div className="jumia">
      <Header changeMenu={handleMenu} changeSecondMenu={handleSecondMenu} />
      <Account trigger={popLogin} />
      <Help trigger={showHelp} />
      <div className="jumia__body">
        <Sidebar />
        <Banner />
        <Widget />
      </div>
      <div className="jumia__goods">
        <GoodsOption
          Icon={AirplanemodeActiveOutlinedIcon}
          text="Jumia Globals"
        />
        <GoodsOption
          Icon={StoreMallDirectoryOutlinedIcon}
          text="Official Stores"
        />
        <GoodsOption Icon={FastfoodOutlinedIcon} text="Jumia Foods" />
        <GoodsOption Icon={MonetizationOnOutlinedIcon} text="Borrow Money" />
      </div>
      <div className="product__rows">
        <Products
        
          id="12321341"
          title="You Don't Know JS Yet: Drives deep into the core mechanisim of JavaScript"
          price={12000}
          rating={5}
          image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457542606l/25136217._SY475_.jpg"
        />
        <Products
          id="12376947"
          title=" IPhone 11 pro max 256GB.Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras."
          price={350000}
          rating={4}
          image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/W/153608_1569283611.jpg "
        />
         <Products
          id="12301341"
          title="Sony Playstation 4 Pro 1tb Console - Black Sony Playing Station 4 - 500GB.Prepare yourself for the greatest gaming console to ever grace the world of gaming."
          price={200000.99}
          rating={3}
          image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/N/3650_1585764288.jpg"
        />
        <Products
          id="12321391"
          title="Beats Studio3 Wireless Over-ear Headphones.Put the world on hold with a pair of Beats"
          price={7000}
          rating={2}
          image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/M/169248_1584100940.jpg"
        />
      </div>
      <div className="product__rows">
        <Products
          id="12321741"
          title="This Team Football Backpack features a large main zipped compartment."
          price={9000}
          rating={5}
          image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/a/Barcelona-Team-Backpack-7590502.jpg"
        />
        <Products
          id="12336781"
          title="XIAOMI Redmi 9A 6.53 Inches 2GB RAM 32GB ROM 13MP REAR CAMERA, 5MP FRONT CAMERA, 5000mAH- Grey."
          price={78000}
          rating={5}
          image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/48/840086/1.jpg?6370"
        />
      </div>
    </div>
  );
}

export default Jumia;
