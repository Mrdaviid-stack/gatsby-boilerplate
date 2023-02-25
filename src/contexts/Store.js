import React, { createContext, useContext, useState } from "react";

const StoreContext = new createContext();

export function useStore()
{
  return useContext(StoreContext)
}

export function StoreProvider({ children })
{
  const [cart, setCart] = useState("cart")

  const contextValue = 
  {
    cart,
    setCart
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}
