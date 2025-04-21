import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const readValue = () => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log("Error reading localstorage key", key, error);
      return initialValue;
    }
  };


//   
const [storedValue , setStoredValue] = useState(readValue)

const setValue = (value)=>{
    try {
        const valueToStore = value instanceof Function ? value(storedValue) : value

        setStoredValue(valueToStore)

        if(typeof window === "undefined"){
            window.localStorage.setItem(key , JSON.stringify(valueToStore))
        }
    } catch (error) {
        console.log("Error setting localstorage key" , key , error)
    }

}

useEffect(()=>{
    setStoredValue(readValue())
},[]);

return [storedValue , setValue]
}
