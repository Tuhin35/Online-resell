import React, { useContext } from 'react';
import { useNavigate , useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import { error } from 'daisyui/src/colors';


const CheckOut = () => {
    const products = useLoaderData();
    const navigate = useNavigate();
  
    const {_id, Company, price,category } = products;
    const { user } = useContext(AuthContext)

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
     

        const order = {
            place: _id,
            Company,
            category,
            price,
            customer: name,
            email,
            phone,
          
            }

            fetch('https://online-resel-server.vercel.app/orders',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(order)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Booking successfully')
                form.reset();  
                navigate('/orders')
            })
            .then(error => console.log(error))
        }



    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2> have a good journey</h2>
                <h2 className='text-4xl'>{Company}</h2>
                <h4 className='text-3xl'> Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 text-black text-xl'>
                    <input name='firstName' type="text" placeholder="first name" className="input input-ghost w-full input-border" />
                    <input name='lastName' type="text" placeholder="last name" className="input input-ghost w-full input-border" />
                    <input name='phone' type="text" placeholder="Your Phone" required className="input input-ghost w-full input-border" />
                    <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} readOnly className="input input-ghost w-full input-border" />

                </div>
               
                <input className='btn mt-5' type="submit" value="submit your Booking" />
            </form>

        </div>
    );
};

export default CheckOut;