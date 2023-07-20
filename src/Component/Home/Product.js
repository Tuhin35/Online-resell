import React, { useEffect, useState } from 'react';
import { NavLink, useActionData } from 'react-router-dom';

const Product = () => {
     const [categories, setCategories] = useState([])
     useEffect(()=>{
        fetch('https://online-resel-server.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
     },[])
     return (
        <section class="container px-6 py-8 mx-auto lg:py-16">
        <div class="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
           
           
           {
            categories.map(category =>
                <div class="p-8 space-y-3 bg-orange-200 border-2 border-indigo-400 rounded-xl">
                <span class="inline-block text-indigo-500">
                    <img className=''  src={category.image} alt="" />
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize">{category.category}</h1>

                <p class="text-gray-500">
                    Research, user experience testing, mockups, and prototypes
                </p>
                <NavLink className="bg-white btn btn-white w-40  m-5 text-black hover:bg-green-300" to={`/products/category/${category.c_id}`}
               > See all products </NavLink>
            </div>
                )
           }
          

        

            
        </div>
    </section>
    );
};

export default Product;