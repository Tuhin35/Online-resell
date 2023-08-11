

import './news.css'

import Banner from './Banner';
import Services from './Services';
import { Content } from './Content';
import { Faq } from './Faq';
import { Feature } from '../header/Feature';
import AfterHeader from '../header/AfterHeader';
import Hero from './Hero';
import Product from './Product';
import Details from './Details';
import Bottom from './Bottom';

const Home = () => {
 

 


  return (
    <div className='min-h-screen flex flex-col text-black  w-auto'>
   <Hero></Hero>
   <Content></Content>
    <Product></Product>
    <Banner></Banner>
    <Details></Details>
    <hr className='border-2'/>
    <Feature></Feature>
    <hr />
   <Bottom></Bottom>
    
    
           <Faq></Faq>
    </div>
  );
};

export default Home;