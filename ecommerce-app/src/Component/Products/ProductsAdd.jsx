import React,{useState,useEffect} from 'react';
import Header from '../Header';
import axios from 'axios';

const ProductsAdd = () => {

    const [data, setData] = useState([]);
    const [getData,setGetData]=useState([]);
    const [brandData,setBrandData]=useState([]);
    const [message, setMessage] = useState(null);
    // product hook
    const [cat_id,setcat_id]=useState('');
    const [subcat_id,setsubcat_id]=useState('');
    const [brand_id,setbrand_id]=useState('');
    const [pro_name,setpro_name]=useState('');
    const [pro_details,setpro_details]=useState('');
    const [price,setprice]=useState('');
    const [image,setimage]=useState('');
    const [size,setsize]=useState('');
    const [discount_price,setdiscount_price]=useState('');
    const [stockout,setstockout]=useState('');
    const [hot_deal,sethot_deal]=useState('');
    const [by_one_get_one,setby_one_get_one]=useState('');
    const[color,setcolor]=useState('');
    useEffect(() => {
        GetDataCategory();
        BrandView();
    }, [])
    //  category view
    function GetDataCategory() {
        axios.get('CategoryView')
            .then(res => {
                console.log(res);
                setGetData(res.data);
            });
    }
    function BrandView(){
        axios.get('BrandView')
        .then(res => {
            console.log(res);
            setBrandData(res.data);
        });
    }
    
    //subcat serch
    async function search(key){
        let result= await fetch("http://127.0.0.1:8000/api/subcatSearch/"+key);
        result=await result.json();
        setData(result);
    }

    //brand api

    

    // product submit api
    
   async function Producthandale(){
    
        // const items={cat_id,subcat_id,brand_id,pro_name,pro_details,price,image,size,discount_price,stockout,hot_deal,by_one_get_one}
        const formData = new FormData();
        setMessage(null);
        formData.append("cat_id", cat_id);
        formData.append("subcat_id", subcat_id);
        formData.append("brand_id", brand_id);
        formData.append("pro_name", pro_name);
        formData.append("pro_details", pro_details);
        formData.append("price", price);
        formData.append("image", image);
        formData.append("size", size);
        formData.append("discount_price", discount_price);
        formData.append("stockout", stockout);
        formData.append("hot_deal", hot_deal);
        formData.append("by_one_get_one", by_one_get_one);
        formData.append("color", color);
        try {
            const response = await axios({
              method: "post",
              url: "ProductAdd",
              data: formData,
              headers: { "Content-Type": "multipart/form-data" },
            });
            setMessage(response.data.message)
          } catch(error) {
            console.log(error)
          }
    }
 //subcat search and cat_id submit hook
    function selecthandel(e){
        search(e.target.value)
        setcat_id(e.target.value)
    }
    
    return (
        <>
            <Header />
            <div class="page-wrapper">
                <div class="page-content">
                    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                        <div class="breadcrumb-title pe-3">eCommerce</div>
                        <div class="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0 p-0">
                                    <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">Orders</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body p-4">
                            <h5 class="card-title">Add New Product</h5>
                            <hr />
                            <div class="form-body mt-4">
                                <div class="row">
                                    <div class="col-lg-8">
                                    {message && <div class="alert alert-primary" role="alert">
                                          {message}
                                     </div>}
                                        <div class="border border-3 p-4 rounded">
                                            <div class="mb-3">
                                                <label for="inputProductTitle" class="form-label">Product Title</label>
                                                <input type="text"  onChange={(e)=>setpro_name(e.target.value)} class="form-control" id="inputProductTitle" placeholder="Enter product title" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="inputProductDescription" class="form-label">Description</label>
                                                <textarea  onChange={(e)=>setpro_details(e.target.value)} class="form-control" id="inputProductDescription" rows="3"></textarea>
                                            </div>
                                            <div class="mb-3">
                                                <label for="inputProductDescription" class="form-label">Product Images</label>
                                                <input  onChange={(e)=>setimage(e.target.files[0])} type="file" class="form-control" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="inputProductTitle" class="form-label">Product Hot deals</label>
                                                <input  onChange={(e)=>sethot_deal(e.target.value)} type="text" class="form-control" id="inputProductTitle" placeholder="Enter product title" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="inputProductTitle" class="form-label">By one get one</label>
                                                <input  onChange={(e)=>setby_one_get_one(e.target.value)} type="text" class="form-control" id="inputProductTitle" placeholder="Enter product title" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="inputProductTitle" class="form-label">Product Color</label>
                                                <input  onChange={(e)=>setcolor(e.target.value)} type="text" class="form-control" id="inputProductTitle" placeholder="Enter product title" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="border border-3 p-4 rounded">
                                            <div class="row g-3">
                                                <div class="col-md-6">
                                                    <label for="inputPrice" class="form-label">Price</label>
                                                    <input  onChange={(e)=>setprice(e.target.value)} type="text" class="form-control" id="inputPrice" placeholder="00.00" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputCompareatprice" class="form-label">Products Size</label>
                                                    <input  onChange={(e)=>setsize(e.target.value)} type="text" class="form-control" id="inputCompareatprice" placeholder="00.00" />
                                                </div>
                                                {/* <div class="col-md-6">
                                                    <label for="inputCostPerPrice" class="form-label">color</label>
                                                    <input value={cat_id} onChange={(e)=>setcat_id(e.target.value)} type="text" class="form-control" id="inputCostPerPrice" placeholder="00.00" />
                                                </div> */}
                                                <div class="col-md-6">
                                                    <label for="inputStarPoints" class="form-label">Discount Price</label>
                                                    <input  onChange={(e)=>setdiscount_price(e.target.value)} type="text" class="form-control" id="inputStarPoints" placeholder="00.00" />
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputProductType" class="form-label">Category</label>
                                                    <select class="form-select"  onChange={selecthandel} id="inputProductType">
                                                        <option value="">--select---</option>
                                                    {
                                                        getData.map((item)=>
                                                        <option value={item.id} >{item.categroy_name}</option>
                                                        )
                                                    }
                                                  
                                                        
                                                    </select>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputVendor" class="form-label">SubCategory</label>
                                                    <select class="form-select"  onChange={(e)=>setsubcat_id(e.target.value)} id="inputVendor">
                                                       <option value="">--select---</option>
                                                        {data.map(x=>
                                                           <option value={x.id}>{x.subcategroy_name}</option>
                                                           )
                                                         }
                                                    </select>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputCollection" class="form-label">Brand Name</label>
                                                    <select  onChange={(e)=>setbrand_id(e.target.value)} class="form-select" id="inputCollection">
                                                       <option value="">--select---</option>
                                                       {
                                                            brandData.map((x)=>
                                                              <option value={x.id}>{x.brands_name} </option>
                                                            )
                                                       }
                                                    </select>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputProductTags" class="form-label">Product Stock out</label>
                                                    <input  onChange={(e)=>setstockout(e.target.value)} type="text" class="form-control" id="inputProductTags" placeholder="Enter Product Tags" />
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button onClick={Producthandale}  type="button" class="btn btn-primary">Save Product</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsAdd
