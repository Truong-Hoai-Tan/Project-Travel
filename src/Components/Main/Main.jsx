import React, {useEffect} from 'react'
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';


const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX', 
    fees: '$700',
    description: 'Bali is the most famous tourist island in Indonesia. The island is known as a paradise island with many landscapes, temples, monuments and beautiful, romantic beaches.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Capital London',
    location: 'England',
    grade: 'CULTURAL RELAX', 
    fees: '$700',
    description: 'London is famous for Bukingham Palace, Camden Market, and jewelry made with rare pearls. In London, there is an intersection and combination of art, fashion, cuisine and traditional local beer (called ale).'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Capital city of Istanbul',
    location: 'Türkiye',
    grade: 'CULTURAL RELAX', 
    fees: '$700',
    description: 'Istanbul was previously the capital of many powerful empires such as Roman, Ottoman, Latin... Currently Istanbul is the largest and most important city of Türkiye.'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Dubai City',
    location: 'United Arab Emirates',
    grade: 'CULTURAL RELAX', 
    fees: '$700',
    description: 'Dubai belongs to the United Arab Emirates (UAE). This city is known as one of the most luxurious and classy tourist destinations in the world. In Dubai there is a combination of modern culture with a rich history.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Capital Rome',
    location: 'Italy',
    grade: 'CULTURAL RELAX', 
    fees: '$700',
    description: 'Rome (hay Roma) là thủ đô nước Ý với bề dày lịch sử hơn 2500 năm phong phú. Rome còn là biểu tượng của nước Ý với rất nhiều danh lam thắng cảnh nổi tiếng như đài phun nước Trevi, đấu trường La mã Colosseum.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Capital Paris',
    location: 'France',
    grade: 'CULTURAL RELAX', 
    fees: '$700',
    description: 'Paris is also known as the magnificent capital, the capital of light with many attractive entertainment and entertainment venues. The symbols of the French capital Paris are the Eiffel Tower and the Arc de Triomphe.'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Crete',
    location: 'Greek',
    grade: 'CULTURAL RELAX', 
    fees: '$700',
    description: 'Crete is Greec is largest and most populous island. According to legend, this is also the birthplace of Zeus and the king of modern European civilization.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Capital city Bangkok',
    location: 'Thailand',
    grade: 'CULTURAL RELAX', 
    fees: '$700',
    description: 'Bangkok stands out with a series of ancient palaces and temples. In addition, internal markets in Bangkok are also places that regularly attract tourists.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Barcelona City',
    location: 'Spain',
    grade: 'CULTURAL RELAX', 
    fees: '$700',
    description: 'Barcelona is better known by the name of the famous football team FB Barcelona. However, this is one of the two largest cities in Spain, along with Madrid.'
  }
]



const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3  data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) =>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle}/>
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon"/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>

                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main