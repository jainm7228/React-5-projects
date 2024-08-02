import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";


const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://i.pinimg.com/564x/f3/1c/fe/f31cfeb73c9e0481712a88dcea046cc4.jpg";
const img3 ="https://i.pinimg.com/564x/bc/e4/74/bce474f3d97d994bb61876e0fd04f8ae.jpg";
const img4=
  "https://i.pinimg.com/564x/75/ee/bf/75eebfaf02fee3d170d980d409ceb988.jpg";
const img5 =
  "https://i.pinimg.com/236x/84/dd/10/84dd1095039557ff3e153fd63c96bdc4.jpg";


const Home = () => {
  const productList = [
    { name: "MAC Book", price: 12000, imgSrc: img1, id: "1" },
    { name: "shirt", price: 50708, imgSrc: img2, id: "2" },
    { name: "Pants", price: 50, imgSrc: img3, id: "3" },
    { name: "shoes", price: 6969, imgSrc: img4, id: "4" },
    { name: "phone", price: 7878, imgSrc: img5, id: "5" },
  ];


  const dispatch =useDispatch()


  const addToCartHandler = (options) => {
    
    toast.success("Added to cart");
    dispatch({ type: "addToCart", payload: options });
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to cart
    </button>
  </div>
);
export default Home;
