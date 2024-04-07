import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Hotel = () => {
  const pictures = [
    {
      src: "https://www.bordeaux-tourisme.com/sites/bordeaux_tourisme/files/styles/large/public/medias/widgets/misc/Burdigala%20H%C3%B4tel%20Inwood%20Bordeaux.jpg.webp?itok=oNrQn0N_"
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/0e/49/c7/f1/steigenberger-hotel-bad.jpg"
    },
    {
      src : "https://assets.hrewards.com/assets/jpg.large_111_SHR_Bad_Homburg_public_7806_61ea5c1053.jpg?optimize"
    },
    {
      src: "https://voyageursintrepides.com/wp-content/uploads/2022/08/meilleurs-hotels-luxe-thailande-1-1.jpg"
    },
    {
      src: "https://www.thailandee.com/img/top-hotels-thailand.jpg"
    },
    {
      src : "https://www.marriott.com/content/dam/marriott-renditions/dm-static-renditions/tx/emea/hws/s/seztx/en_us/photo/unlimited/assets/tx-seztx-pool-21834-square.jpg"
    },
    {
      src: "https://www.bordeaux-tourisme.com/sites/bordeaux_tourisme/files/styles/large/public/medias/widgets/misc/Burdigala%20H%C3%B4tel%20Inwood%20Bordeaux.jpg.webp?itok=oNrQn0N_"
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/0e/49/c7/f1/steigenberger-hotel-bad.jpg"
    },
    {
      src : "https://assets.hrewards.com/assets/jpg.large_111_SHR_Bad_Homburg_public_7806_61ea5c1053.jpg?optimize"
    }
  ]
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className=''>
        <div className=''>
          <h1 className=''>Grand hotel</h1>
          <div className=''>
            <FontAwesomeIcon icon={faLocationDot}/>
            <span className=''>Elton St 125 New york</span>
          </div>
          <span>Excelent location -500m from center</span>
          <span>Book a stay over $117 at this property and get a free airport taxi</span>
          <div className='flex gap-[10px]'>
            {pictures.map((elem)=>(
              <div>
                <img className="w-[1000px] h-[800px] object-cover" src={elem.src} alt=""/>
              </div>
            )

            )}
          </div>
          <div className=''>
            <div className=''>
              <h1 className=''>Stayin the heart of Krakow</h1>
              <p className=''>is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of Taormina and the Ionian Sea.

                  The rooms at the Panoramic Hotel are new, well-lit and inviting. Our reception staff will be happy to help you during your stay in Taormina, suggesting itineraries, guided visits and some good restaurants in the historic centre.

                  While you enjoy a cocktail by the swimming pool on the rooftop terrace, you will be stunned by the breathtaking view of the bay of Isola Bella. Here, during your summer stays, our bar serves traditional Sicilian dishes, snacks and salads.

                  At the end of a stairway across from the hotel, the white pebbles on the beach of Isola Bella await you as well as beach facilities with lounge chairs and umbrellas and areas with free access to the pristine clear sea that becomes deep just a few metres from the shore.</p>
            </div>
            <div className=''>
              <h1 className=''>Perfect for a 9 night stay</h1>
              <span className=''>Located in real heart of krakow, this property has an excelent location score of 9.8 ! </span>
              <h2 className=''><b>925$</b> 9 nights</h2>
              <button className=''>Reserve or book now</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hotel
