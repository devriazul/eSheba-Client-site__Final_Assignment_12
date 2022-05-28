import { useEffect, useState } from "react";

const useCart = (email) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`https://e-sheba-server.herokuapp.com/my-carts/${email}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [cart]);
  return [cart, setCart];
};

export default useCart;
