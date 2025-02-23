import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Error from './Error';
import { FaArrowRight } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert2'


const Card = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);


  useEffect(async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3005/product-api/getallproducts");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, []);

  const truncateWords = (str, numWords) => {
    if (str) {
      const wordArray = str.split(' ');
      if (wordArray.length > numWords) {
        return wordArray.slice(0, numWords).join(' ') + '...';
      }
      return str;
    }
    return ''; // Return an empty string or some default value if str is undefined or null
  };
  
  const limit = props.limit !== null ? props.limit : products.length;
  const history = useHistory();
    const handleCart=(productid,image,title,price,description,category,rating)=>{
      console.log(image)
      if(JSON.parse(localStorage.getItem('currentUser'))==null){
        swal.fire('Sorry','You don\'t have permission Please Login first','error').then(result=>{
        })
      }
        else{
          window.location.href = '/add-cart'
          history.push({
            pathname:'/add-cart',
            state:{
              productid,
              image,
              title,
              price,
              description,
              category,
              rating
            }
          })
          window.location.reload();
        }
  

    }
  return (
    <div>
      {loading && <Loader />}
      {error && <p><Error/></p>}
      <div style={{fontSize:'40px',fontWeight:'bold',textAlign:'center',alignItems:'center',justifyContent:'center',textTransform:'uppercase',marginTop:'20px'}}>{props.pagetitle}</div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        
        {products.slice(0, limit).map((product) => (
          <div key={product._id} className="col">
            <div className="card" style={{ borderRadius: '20px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
              <div className="image-container" >
                <img
                  src={`http://localhost:3005/images/${product.image}`}
                  className="card-img-top"
                  alt={product.title}
              style={{ objectFit: 'cover',objectPosition:'top'}}
                />
              </div>
              <div className="card-body" style={{ textAlign: 'center', backgroundColor: '#F2F2F2', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
                <h5 className="card-title" style={{ fontWeight: 'bold', marginBottom: '10px' }}>{product.category}</h5>
                <p className="card-text" style={{ minHeight: '80px' }}>{truncateWords(product.description, 13)}</p>
                <a onClick={()=>handleCart(product._id,product.image,product.title,product.price.$numberDecimal,product.description,product.category,product.rating.$numberDecimal)} className='shopNow'>Shop Now <FaArrowRight /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

