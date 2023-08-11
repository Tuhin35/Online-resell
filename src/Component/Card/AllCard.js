import React, { useEffect, useState } from 'react';
import DisplayCard from './DisplayCard';
import { useParams } from 'react-router-dom';


const AllCard = () => {

   const {id} = useParams();


  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5)


  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    fetch(`https://online-resel-server-tuhin35.vercel.app/products/category/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setCount(data.count)
      }
      )

  }, [id,page,size])


  useEffect(() => {
    fetch(`https://online-resel-server.vercel.app/products?page=${page}&size=${size}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setCount(data.count);
      });
  }, [page, size]);
  
 
console.log(products);


  const pages = Math.ceil(count / size)

  return (
    <div className='mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-5  mx-auto'>
        {
          products.map(product => <DisplayCard
            key={product._id}
            product={product}
          ></DisplayCard>)
        }

      </div>
      <div className="pagination">
        <p>Currently selected page : {page + 1} and Size is {size}</p>
        {
          [...Array(pages).keys()].map(number => <button
            className='btn m-2 btn-warning' key={number}

            onClick={() => setPage(number)
            }
          >
            {number + 1}

          </button>)
        }
        <select className='bg-slate-400' onChange={event => setSize(event.target.value)}>
          <option value="3" >3</option>
          <option value="5" selected>5</option>
          <option value="8" >8</option>
        </select>
      </div>
    </div>




  );
};

export default AllCard;