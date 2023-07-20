import React from 'react';
import { Link } from 'react-router-dom';

const DisplayCard = ({ product }) => {
    const { _id, Company, image, guarantee , rating, description, category } = product

    return (
        <div className="card inline mb-5  ml-5 grid-cols-2 w-80 bg-slate-200 shadow-xl">
              
            <div className=" card-body items-center text-center">
            <h2 className="text-4xl mx-auto mb-2">{Company}</h2>
            <figure className="">
                <img src={image} alt="Shoes" className="rounded-xl w-32" />
            </figure>
                <h2 className="card-title">{category}</h2>
                <p>{description.split(' ').slice(0,20).join(' ')}...</p>
                <p className='text-semibold'>About {guarantee} guarantee of this products </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Rating :  {rating.rate}</div>
                    <div className="badge badge-outline"> Price : {rating.count}</div>
                </div>
                <div className="card-actions">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Booking</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DisplayCard;