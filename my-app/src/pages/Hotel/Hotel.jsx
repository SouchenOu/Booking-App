import React, { useContext, useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'
import Reserve from '../reserve/Reserve'
import './Hotel.css'
import NavbarPicture from '../../components/navbar/navBarPicture'
import HeaderPicture from '../../components/header/headerPicture'
import { useAuth } from '../../context/AuthenticationContext'

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const location = useLocation();
  const [openState, setOpenState] = useState(false);
  const navigate = useNavigate();
  const id = location.pathname.split("/");
  const idFinal = id[2];
  const {data, loading, error} = useFetch(`https://booking-app-udqo.onrender.com/hotels/find/${idFinal}`);
  const [open , setOpen] = useState(false);
  const {dates, options} = useContext(SearchContext);
  
  const {isAuthenticated} = useAuth();
  const MILISECOND_PERdAYS = 1000 *60 * 60 * 24;
  const calculeDayDifference = (date1, date2) => {
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
    const diffDay = Math.ceil(timeDiff / MILISECOND_PERdAYS);
    return diffDay;
  }

  const days = calculeDayDifference(dates[0]?.endDate, dates[0]?.startDate );

  const handleClick = () =>{
    if(!isAuthenticated){
      navigate("/login");
    }else{
      setOpenState(true);

    }
    }

  

  
  const handleOpen = (i)=>{

    setSlideNumber(i);
    setOpen(true);

  }

  const handleMove = (direction) =>{
    let newSlideNumber;
    if(direction === "left"){
      newSlideNumber = slideNumber === 0 ? 11 : slideNumber - 1;


    }else{
      newSlideNumber = slideNumber === 11 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);

  }
  return (
    <div>
      <Navbar/>
      <HeaderPicture type="list"/>
      <div className=' flex flex-col  mt-[20px] p-[20px] items-center'>
        {open && <div className='sticky top-[0] left-[0] w-[80vw] h-[100vh] z-[999] flex items-center' style={{background : 'rgba(240, 240, 240, 0.613)'}}>
        <div className='absolute top-[100px] left-[200px]'>
          <FontAwesomeIcon icon={faCircleXmark} className='top-[0] left-[0] w-[40px] h-[40px]  cursor-pointer sticky' style={{color : 'rgba(0, 0, 0, 0.613)'}} onClick={()=>setOpen(false)}  />
        </div>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='cursor-pointer m-[20px] text-2xl w-[50px] h-[50px]' style={{color : 'lightgray'}} onClick={()=>handleMove("left")}/>
          <div className='w-full h-full flex items-center justify-center'>
            <img  className='h-[900px] w-[1000px] cursor-pointer' src={data.photos[slideNumber]} alt=""/>
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='cursor-pointer m-[20px] text-2xl w-[50px] h-[50px]' style={{color : 'lightgray'}} onClick={()=>handleMove("right")}/>
          
          </div>}
        <div className='w-full w-max-[2000px] flex flex-col gap-[20px]'>
          <button onClick={handleClick} className='text-white text-2xl font-bold absolute p-[9px] w-[300px] right-12 top-[900px] borded-none rounded-lg ' style={{background: '#0D19A3'}}>Reserve or book now</button>
          <h1 className='text-[30px] font-bold'>{data.name}</h1>
          <div className='flex gap-[4px] items-center'>
            <FontAwesomeIcon icon={faLocationDot}/>
            <span className='text-xl'>{data.address}</span>
          </div>
          <span className='text-xl font-bold' style={{color : '#B74803'}}>{data.distance}</span>
          <span className='text-xl' style={{color : 'green'}}>{data.desc} {data.Taxes}</span>
          <div className='flex gap-[10px] flex-wrap '>
                  {data?.photos?.map((photo, index) => (
                    <div key={index} className='zoom-container'>
                      <img
                        onClick={() => handleOpen(index)}
                        className="w-[500px] h-[400px] object-cover cursor-pointer "
                        src={photo}
                        alt={`hotel-img-${index}`}
                      />
                    </div>
                  ))}
                </div>
          <div className='flex space-between gap-[20px] mt-[20px]'>
            <div className='flex-[3]'>
              <h1 className='text-2xl font-bold ' style={{color : '#B74803'}}>Stayin the heart of Krakow</h1>
              <p className='text-xl mt-[20px]'>is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of Taormina and the Ionian Sea.

                  The rooms at the Panoramic Hotel are new, well-lit and inviting. Our reception staff will be happy to help you during your stay in Taormina, suggesting itineraries, guided visits and some good restaurants in the historic centre.

                  While you enjoy a cocktail by the swimming pool on the rooftop terrace, you will be stunned by the breathtaking view of the bay of Isola Bella. Here, during your summer stays, our bar serves traditional Sicilian dishes, snacks and salads.

                  At the end of a stairway across from the hotel, the white pebbles on the beach of Isola Bella await you as well as beach facilities with lounge chairs and umbrellas and areas with free access to the pristine clear sea that becomes deep just a few metres from the shore.</p>
            </div>
            <div className='flex-[1] p-[20px] flex flex-col gap-[10px]' style={{background : '#A3B4C8'}}>
              <h1 className='text-2xl font-bold' style={{color  : '#CC6D3D'}}>Perfect for a {days} night stay</h1>
              <span className='text-xl'>Located in real heart of krakow, this property has an excelent location score of 9.8 ! </span>
              <h2 className='text-xl font-bold '> ${days * data.cheapestPrice * options.room} {days} nights</h2>
              <button onClick={handleClick} className='text-white text-xl font-extrabold rounded-lg border-none border-[3px] border-gray-500 p-[9px]' style={{background : '#0D19A3'}}>Reserve or book now</button>
            </div>
          </div>
        </div>
        {openState && <Reserve setOpen={setOpenState} HotelId={idFinal}/>}
        <MailList/>
        <div className='mt-[20px]'>
          <Footer/>

        </div>
        

      </div>


        
   
        
    </div>
  )
}

export default Hotel
