import {useEffect,usestate} from react 

function UsecurrencyInfo(currency){
    useEffect(()=>{
        fetch("https://en.wikipedia.org/wiki/List_of_circulating_currencies")
    },[])
} 