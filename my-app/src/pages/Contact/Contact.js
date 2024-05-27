import React from 'react'
import NavbarPicture from '../../components/navbar/navBarPicture'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='' >
        <NavbarPicture/>
        <div  className="flex w-full max-w-[2800px]  gap-[20px]  items-center justify-center p-[200px]">
                <div className="  w-full md:w-2/3 lg:w-1/2">
                    <div className="bg-white shadow-md border-2 border-solid border-blue-400 rounded-lg p-[90px]  w-[100%] h-[900px]">
                        <h3 className="text-[40px] mb-8 text-[#0D19A3] p-4 justify-center">Contact Us</h3>
                        <form id="contactForm" action="#" method="POST" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label for="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter your name"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                                <div id="nameValidation" className="hidden text-red-600 text-sm">Please enter your name.</div>
                            </div>
                            <div>
                                <label for="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                                <div id="emailValidation" className="hidden text-red-600 text-sm">Please enter a valid email address.</div>
                            </div>
                            <div className="sm:col-span-2">
                                <label for="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="Enter the subject"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                                <div id="subjectValidation" className="hidden text-red-600 text-sm">Please enter the subject.</div>
                            </div>
                            <div className="sm:col-span-2">
                                <label for="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea id="message" name="message" placeholder="Enter your message" rows="5"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                                <div id="messageValidation" className="hidden text-red-600 text-sm">Please enter your message.</div>
                            </div>
                            <div className="sm:col-span-2">
                                <button type="submit"
                                    className="w-full bg-[#0D19A3] text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                    {/* <img src="/book.jpg" alt="" className='w-[700px] h-[700px]'/> */}
                    <div className='flex flex-col  gap-[20px]'>
                        <div className='flex w-[700px] gap-[20px]'>
                                <div className=' flex flex-col border-[2px] border-solid border-[#0D19A3] p-[40px] gap-[15px] w-[500px]'>
                                    <h1 className='text-[20px] font-bold'>Casablaca</h1>
                                    <div className='flex gap-[10px]'>
                                        <FontAwesomeIcon icon={faEnvelope} className='w-[30px] h-[30px]'/>
                                        <span className='text-[20px] font-bold'>Booking@gmail.com</span>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <FontAwesomeIcon icon={faLocationDot} className='w-[30px] h-[30px]'/>
                                        <span className='text-[20px] font-bold w-[300px]'>219 Boulevard Zerktouni 1er étage Casablanca, Maroc, 20042</span>

                                    </div>

                                </div>
                                <div className=' flex flex-col border-[2px] border-solid border-[#0D19A3] p-[40px] gap-[15px] w-[500px]'>
                                    <h1 className='text-[20px] font-bold'>FÈS</h1>
                                    <div className='flex gap-[10px]'>
                                        <FontAwesomeIcon icon={faEnvelope} className='w-[30px] h-[30px]'/>
                                        <span className='text-[20px] font-bold'>Booking@gmail.com</span>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <FontAwesomeIcon icon={faLocationDot} className='w-[30px] h-[30px]'/>
                                        <span className='text-[20px] font-bold w-[300px]'>Angle Rue Tarik Ibn Ziad Et Rue Abdelkrim Benjelloun 6ème Etage, Commune Agdal, Fès</span>

                                    </div>

                                </div>

                        </div>
                        
                        <div className=''>
                            <img src="/map.jpg" alt="" className='w-[800px] h-[500px]'/>
                        </div>
                    </div>
            </div>
      
    </div>
  )
}

export default Contact
