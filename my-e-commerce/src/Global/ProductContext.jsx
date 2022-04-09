import React,{useState,useEffect} from 'react';
import Header from '../component/header';
import ProductCard from './ProductCard';

const ProductContext = () => {

    const [data, setdata] = useState([]);
    useEffect(async() => {
       let result= await fetch("http://127.0.0.1:8000/api/ProductView");
       result=await result.json();
       setdata(result);
    }, [])
    return (
      
          <div className='container '>
                <Header/>
              <div class="row gy-2">
                {
                    data.map((item)=>{
                        return <ProductCard Name={item.name} img={"http://127.0.0.1:8000/"+item.image} price={item.price} states={item.states}/>
                    }
                     
                    )
                }
              </div>
          </div>
        
    )
}

export default ProductContext
