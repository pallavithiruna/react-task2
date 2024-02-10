
import { useState } from "react";
import {Card } from "react-bootstrap";
import Button from "./Button";

export function Cards({prod, idx, setCount, count}){
    const [show, setShow] = useState(false);
  
    function addToCart(){
      setShow(!show)
      setCount(count + 1)
    }
  
    function removeFromCart(){
      setShow(!show)
      setCount(count - 1)
    }
  
    return (
        <Card  style={{ width: "18rem" }}>
          <Card.Img variant="top" src={prod.productImage} />
          <Card.Body>
            <Card.Title>{prod.productName}</Card.Title>
            <Card.Text>{prod.price} RS</Card.Text>
            <Card.Text>{prod.rating} ♥</Card.Text>
          {/* conditional rendering */}
  
           {!show ? <Button
           name="addToCart"
           Bgclr="pink"
           clr="blue"
           onClick={addToCart}
           /> : ""}
  
  
             {show ? <Button 
              name="removeFromCart"
              Bgclr="pink"
              clr="blue"
              onClick={removeFromCart}
             /> : ""}
  
          </Card.Body>
        </Card>
    )
  }