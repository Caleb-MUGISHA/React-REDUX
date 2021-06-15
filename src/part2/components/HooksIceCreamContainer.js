import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../index";

function HooksIceCreamContainer() {
  const numOfIceCream = useSelector((state) => state.IceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of IceCream - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
}

export default HooksIceCreamContainer;
