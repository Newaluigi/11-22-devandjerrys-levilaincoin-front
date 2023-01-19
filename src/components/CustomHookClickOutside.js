// XXXXXXXX This a custom hook which targets clicks outside XXXXXXXXXXXXXXX
// XXXXXXXX the element declared as ref on a page/displayed component XXXXX
import { useEffect } from "react";
const CustomHookClickOutside = (ref, callback) =>{
    const handleClick = (e) =>{
        if (ref.current && !ref.current.contains(e.target)){
            callback();
        }
    };
    useEffect(() =>{
    document.addEventListener("click", handleClick);

    return() => {
        document.removeEventListener("click", handleClick);
    };

 });
};

export default CustomHookClickOutside;