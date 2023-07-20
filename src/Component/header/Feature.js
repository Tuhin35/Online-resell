import death from '../Home/image/death-wish-coffee-9512e9d17fdeedebb9abfce9ce082598ee47d470fd0f0272ccac128044b7fc70.png'
import telfar from '../Home/image/telfar-5ad6221e7d86aeb6db1f6ece956ba85dd7f46ca1b54cef63dbec91d8cee62fbf.png'
import kylie from '../Home/image/kylie-cosmetics-260bf2e2e655124c9331d97c26967ee10d71bd7384265e76013422c1d1386f84.png'
import gymahark from '../Home/image/gymshark-6dee5a0bce30830832bb264c6abe948259f5fbc3fae496363d65b93285c0def0.png'
import lessa from "../Home/image/leesa-en-2b8ff54cd3589e8f971a15bec9d18d284f341e021f6d3b5342e5df0b99f90aa6.png"
import jungalow from "../Home/image/jungalow-en-db026f34f2a0e403d05c12364aa7e8525c04a1bee09adfc20b794c1badec72d7.png"

export const Feature = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-10 row-gap-8 md:grid-cols-4">
          <div className="text-center">
          <img src={death} className='w-64 '  alt="" />
           
          </div>
          <div className="text-center">
           
          <img src={telfar} className='w-64 '  alt="" />
          </div>
          <div className="text-center">
          <img src={kylie} className='w-64 '  alt="" />
          </div>
          <div className="text-center">
          <img src={gymahark} className='w-64 '  alt="" />
          </div>
          <div className="text-center">
           
          <img src={lessa} className='w-64 '  alt="" />
          </div>
          <div className="text-center">
          <img src={gymahark} className='w-64 '  alt="" />
           
          </div>
          <div className="text-center">
           
          <img src={jungalow} className='w-64 '  alt="" />
          </div>
          <div className="text-center">
          <img src={kylie} className='w-64 '  alt="" />
          </div>
        </div>
      </div>
    );
  };