// import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import Card from './Card/Card'


// const Banner = () => {
  
//     const mono=[
//         {
//             "imageurl":"https://github.com/anamika-malakar-perp/ecommerce-frontend/blob/master/src/assets/image-one.png?raw=true"
//         },
//         {
//             "imageurl":"https://github.com/anamika-malakar-perp/ecommerce-frontend/blob/master/src/assets/image-two.jpg?raw=true"
//         },
//         {
//             "imageurl":"https://github.com/anamika-malakar-perp/ecommerce-frontend/blob/master/src/assets/image-three.jpg?raw=true"
//         },
//         {
//             "imageurl":"https://github.com/anamika-malakar-perp/ecommerce-frontend/blob/master/src/assets/image-four.jpg?raw=true"
//         },
//         {
//             "imageurl":"https://github.com/anamika-malakar-perp/ecommerce-frontend/blob/master/src/assets/image-five.png?raw=true"
//         },
//     ]
    
//   return (
//     <div className='parent'>
//      <Carousel >
//         {mono.map((item)=>{
//             return (
//                 <div>
//                     <Card image={item.imageurl}/>
//                 </div>
//             )
//         })}
//      </Carousel>
//     </div>
//   )
// }

// export default Banner



import React, {useEffect, useState} from 'react';
import img1 from "./BannerImage/1.png";
import img2 from "./BannerImage/2.jpg";
import img3 from "./BannerImage/3.jpg";
import img4 from "./BannerImage/4.jpg";
import img5 from "./BannerImage/5.png";
import "./Banner.css"


const Banner = () => {
  const [selectImage, setSelectImage] = useState(0);
  const [allImage ] = useState([img1, img2, img3, img4, img5]);

  useEffect(() =>{
    setInterval(() => {
      setSelectImage(selectImage => selectImage < 5 ? selectImage + 1 : 0)
    }, 3000);
  }, [])
  return (
    <div>
      <img className='imageSlider' src={allImage[selectImage]} alt="Not Found"  />
    </div>
  )
}

export default Banner;