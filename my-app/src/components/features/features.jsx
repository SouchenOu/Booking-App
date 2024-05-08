import React from 'react'
import useFetch from '../../hooks/useFetch';
const Features = () => {

    const {data, loading, error} = useFetch("http://localhost:8000/hotels/countByCity?cities=casablanca,fes,Maknes");
    console.log("data here-->", data);
  return (
    <div className='flex w-full max-w-[1024px] justify-between gap-[10px] z-[1]'>
        { loading ? ("Loading please wait ") : (
            <>
                <div className='overflow-hidden rounded-lg h-[250px] relative text-white'>
                    <img className="w-[1500px] h-[400px] object-cover brightness-75" src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=" alt="hotel"/>
                    <div className='absolute bottom-[10px] text-2xl font-bold p-2'>
                        <h1 className=''>Casablanca</h1>
                        <h1 className=''>{data[0]} properties </h1>
                    </div>
                </div>
                <div className='overflow-hidden rounded-lg h-[250px] relative text-white z-[1]'>
                    <img className="w-[1500px] h-[400px] object-cover brightness-75" src="https://assets.tivolihotels.com/image/upload/q_auto,f_auto%2Cc_limit%2Cw_1378/media/minor/tivoli/images/brand_level/footer/1920x1000/thr_aboutus1_1920x1000.jpg" alt="hotel"/>
                    <div className='absolute bottom-[10px] text-2xl font-bold p-2'>
                        <h1 className=''>Fes </h1>
                        <h1 className=''>{data[1]} properties </h1>
                    </div>
                </div>
                <div className='overflow-hidden rounded-lg h-[250px] relative text-white z-[1]'>
                    <img className="w-[1500px] h-[400px] object-cover brightness-75" src="https://media.cnn.com/api/v1/images/stellar/prod/150514125141-3-hotel-ritz-paris.jpg?q=w_2000,h_1500,x_0,y_0,c_fill/h_618" alt="hotel"/>
                    <div className='absolute bottom-[10px] text-2xl font-bold p-2'>
                        <h1 className=''>Maknes </h1>
                        <h1 className=''>{data[2]} properties </h1>
                    </div>
                </div>
            
            </>
        )
        }
    </div>
  )
}

export default Features;
