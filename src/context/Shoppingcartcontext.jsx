import { createContext, useContext, useState } from "react";
import ShoppingCart from "../componenets/ShoppingCart";
const Shooppingcartcontext = createContext({});
const initialCartItems =[];

const ShooppingcartProvider=({children})=> {
   const[isOpen , setIsOpen]= useState(false);
    const[cartItems,setCartItems]=useState(initialCartItems);
    const openCart = ()=>{
        setIsOpen(true);
    };
    const closeCart = ()=>{
        setIsOpen(false);
    };
   const cartQuantity = cartItems.reduce(
    (quantity , item)=>(
item.quantity + quantity
   ),0)
  
const getItemsQuantity=(id)=>{
    return cartItems.find((item)=>item.id ===id)?.quantity || 0
};
const increaseCartQuantity=(id)=>{
    setCartItems((currItems)=>{
        if(currItems.find(item=> item.id === id)==null){
           return [...currItems,{id,quantity:1}];
        }else{
            return currItems.map((item)=>{
                 if (item.id ===id){
                    return{...item , quantity : item.quantity +1 };
                 
                }else {
                    return item;
                }
            });
        }

    });
    
};
const decreaseCartQuantity=(id)=>{
    setCartItems((currItems)=>{
        if(currItems.find(item=> item.id === id)==null){
           return currItems.filter((item)=>item.id !== id);
        }else{
            return currItems.map((item)=>{
                 if (item.id ===id){
                    return{...item , quantity : item.quantity - 1 };
                 
                }else {
                    return item;
                }
            });
        }

    });
    
};
const removeItemFromCart =(id)=>{
    setCartItems((currItems)=> currItems.filter((item)=>item.id !== id))
};
    return (
        <Shooppingcartcontext.Provider value={{cartItems ,
        getItemsQuantity ,
         increaseCartQuantity ,
          decreaseCartQuantity,
           removeItemFromCart , 
           openCart,
           closeCart,
           cartQuantity,
          
           
           }}>

            {children}
            <ShoppingCart isOpen={isOpen}/>
        </Shooppingcartcontext.Provider>

    );
};
export default ShooppingcartProvider;
export const useShoppingCart =()=>{
    return useContext(Shooppingcartcontext);
};
