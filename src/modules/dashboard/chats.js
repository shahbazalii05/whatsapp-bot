"use client";
import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";

function Chats() {
  //UseState for All chats
  const [all , setAll] =useState(true);
  //UseState for Unread chats
  const[unread , setUnread] = useState(false);
  //Usestate for active btn
  const [input, setInput]= useState("Search")
  //Usestate for favourite btn
  const [favourite, setFavourite]= useState(false)
  //Usestate for Groups btn
  const [group, setGroup]= useState(false);
 

//Function for All chats
const handleAllChats =()=>{
  setAll(true);
  setInput("Search");
  setUnread(false);
  setFavourite(false);
  setGroup(false);
}
//Function for Unread chats
const handleUnreadChats=()=>{
  setAll(false);
  setUnread(true);
  setInput("Search Unread chats");
  setFavourite(false);
  setGroup(false);

}
//Functon for btn
const handleBtn =()=>{
  setUnread(false);
  setAll(true);
  setInput("Search");
  setFavourite(false);
  setGroup(false);

}
//function for Favourite btn
const handleFavouritebtn =()=>{
  setAll(false);
  setInput("Search Favoutite chats");
  setUnread(false);
  setFavourite(true);
  setGroup(false);
}
//function for Group btn
const handleGroupbtn =()=>{
  setAll(false);
  setInput("Search Group chats");
  setUnread(false);
  setFavourite(false);
  setGroup(true);
}
  return (
    <div className='bg-backgrounddefault min-h-screen max-w-[500px]  w-full flex flex-col border-r border-navbarborder'>
         <div className='w-full '>
           <div className='flex justify-between items-center px-[16px] pb-[22px] pt-[10px]'>
             <div><h1 className='font-sfpro text-[22px] text-chats font-bold'>Chats</h1></div>
             <div className='flex items-center gap-[20px] '>
                <svg
                        fill="none"
                        height="24"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white " 
                        >
                        <path
                            d="M9 12H12M15 12H12M12 12V9M12 12V15"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                </svg>
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        enableBackground="new 0 0 32 32"
                        viewBox="0 0 32 32"
                        className="w-5 h-5 text-white fill-current" 
                        >
                        <path
                            d="M13,16c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,14.346,13,16z"
                        />
                        <path
                            d="M13,26c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,24.346,13,26z"
                        />
                        <path
                            d="M13,6c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,4.346,13,6z"
                        />
                </svg>
             </div>
           </div>
           <div className="relative flex items-center w-full px-[16px]">
            <IoIosSearch className="absolute left-7 text-gray-500" />
            <input
                placeholder={input}
                className="pl-10 bg-bginput py-2 px-4 rounded-[10px]  w-full h-[35px] outline-none" />
           </div>
           <div className='flex items-center gap-[10px] px-[16px] mt-[10px]'>
            <button 
           
            onClick={handleAllChats}
            className={`bg-bginput py-[6px] px-[12px] font-sfpro font-[400] text-[15px] rounded-[42px] ${all ? "text-btn1color bg-btnactive" : "text-btncolor"}`}>All</button>
            <button
             onClick={handleUnreadChats}
             className={`bg-bginput py-[6px] px-[12px] font-sfpro font-[400] text-[15px] rounded-[42px] ${unread ? "text-btn1color bg-btnactive" : "text-btncolor"}`}>Unread</button>
            <button
            onClick={handleFavouritebtn}
            className={`bg-bginput py-[6px] px-[12px] font-sfpro font-[400] text-[15px] rounded-[42px] ${favourite ? "text-btn1color bg-btnactive" : "text-btncolor"}`}>Favourites</button>
            <button
               onClick={handleGroupbtn}  
               className={`bg-bginput py-[6px] px-[12px] font-sfpro font-[400] text-[15px] rounded-[42px] ${group ? "text-btn1color bg-btnactive" : "text-btncolor"}`}>Groups</button>
           </div>

         </div>
        {/* Div for All chats start here */}
         {
          all &&(<div className='w-full mt-[15px] pl-[10px] pr-[15px] hover:bg-divbg'>
            <div className='flex justify-center items-center gap-[15px] cursor-pointer'>
              <div className="rounded-full w-[49px] aspect-square overflow-hidden">
                <img src="/dp/images.png" alt="Profile" className="w-full h-full object-cover" />
              </div>

              <div className='border-b border-gray-600 w-full pb-[10px] '>
                <div className='flex justify-between items-center pr-[10px]'>
                    <h1 className='text-white font-sfpro text-[17px]'>Whatsapp Bot</h1>
                    <h3 className='text-btncolor text-[12px] font-[400]'>Yesterday</h3>
                </div> 
                <div>
                    <p className='text-[14px] text-btncolor'>Welcome to Whatsapp bot</p>
                </div>
              </div>
            </div>
         </div>) }
        {/* Div for All chats End here */} 

         {/* Div for Unread chats start here */}
            {
              unread &&(
                <div className='flex justify-center items-center  p-[50px] flex-grow overflow-y-hidden'>
                    <div className='flex flex-col items-center'>
                        <p className='text-sidepara1  font-sfpro font-[400] text-[16px] mb-[18px]'>No Unread chats here</p>
                        <button
                        onClick={handleBtn}
                        className='text-btn1color font-sfpro font-[400] text-[16px]'>View All Chats</button>
                     </div>
                </div>
              )}
         {/* Div for Unread chats End here */}
         {/* Div for Favourites  chats Start here */}
         {
          favourite &&( <div className='flex justify-center items-center flex-grow overflow-hidden px-[50px]'>
             <div className='flex flex-col items-center'>
                <svg
                        viewBox="0 0 228 152"
                        width="180"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        stroke-width="1.5"
                      >
                        <title>contacts-hero</title>
                        <path
                          d="M57.1726 40.4229L50.7057 111.208C49.6299 122.984 58.3036 133.401 70.079 134.477L118.338 138.886C130.113 139.962 140.531 131.288 141.607 119.513L148.074 48.7276C149.15 36.9522 140.476 26.5343 128.701 25.4585L80.4417 21.0496C68.6663 19.9738 58.2484 28.6476 57.1726 40.4229Z"
                          fill="#25D366"
                          stroke="#111B21"
                        ></path>
                        <path
                          d="M172.495 58.0682C159.552 56.106 156.831 70.2364 156.831 70.2364C157.498 68.8539 153.313 56.2672 140.572 59.0949C132.987 60.7159 130.055 66.9633 130.517 72.8237C131.222 82.0255 139.225 89.5015 147.871 94.7728C149.579 95.8844 157.86 100.372 157.86 100.372C157.86 100.372 157.912 100.229 158.108 100.138L158.199 100.333C158.199 100.333 166.219 95.2937 167.944 94.1345C176.369 88.4297 183.845 80.4267 183.819 71.1475C183.696 65.2484 180.194 59.2533 172.495 58.0682Z"
                          fill="#AFE966"
                          stroke="#111B21"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M100.459 13.3499L52.7033 21.5816C41.0508 23.5901 33.2328 34.6647 35.2413 46.3172L47.3154 116.364C49.3239 128.017 60.3985 135.835 72.051 133.826L119.807 125.595C131.459 123.586 139.277 112.512 137.269 100.859L125.195 30.8119C123.186 19.1593 112.112 11.3413 100.459 13.3499Z"
                          fill="#E6FFDA"
                          stroke="#111B21"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M104.02 50.68C105.91 61.5 98.68 71.81 87.85 73.7C77.03 75.59 66.72 68.36 64.83 57.53C62.94 46.71 70.17 36.4 81 34.51C91.82 32.62 102.13 39.85 104.02 50.68Z"
                          fill="#E6FFDA"
                          stroke="#111B21"
                        ></path>
                        <path
                          d="M85.5099 58.7C90.4099 57.84 93.6799 53.18 92.8199 48.28C91.9599 43.38 87.2999 40.11 82.3999 40.97C77.4999 41.83 74.2299 46.49 75.0899 51.39C75.9499 56.29 80.6099 59.56 85.5099 58.7Z"
                          fill="#E6FFDA"
                          stroke="#111B21"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M87.85 73.7C93.64 72.69 98.4 69.26 101.29 64.64C99.29 62.68 96.3 62.35 95.04 62.21C93.03 61.99 89.87 61.87 86.17 62.52C82.48 63.16 79.54 64.36 77.72 65.24C76.53 65.83 73.6 67.26 72.49 70.03C76.73 73.2 82.21 74.69 87.84 73.7H87.85Z"
                          fill="#E6FFDA"
                          stroke="#111B21"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path d="M67.1499 88.76L109.35 81.49" strokeWidth="#111B21" strokeLinecap="round"></path>
                        <path d="M68.7998 98.31L110.99 91.04" strokeWidth="#111B21" strokeLinecap="round"></path>
                        <path d="M83.1899 105.66L101.5 102.51" strokeWidth="#111B21" strokeLinecap="round"></path>
                        <path
                          d="M33.2599 61L42.8099 59.35C44.7899 59.01 46.6699 60.34 47.0099 62.31C47.3499 64.29 46.0199 66.17 44.0499 66.51L34.4999 68.16C32.5199 68.5 30.6399 67.17 30.2999 65.2C29.9599 63.22 31.2899 61.34 33.2599 61Z"
                          fill="white"
                          stroke="#111B21"
                        ></path>
                        <path
                          d="M36.2799 78.51L45.8299 76.86C47.8099 76.52 49.6899 77.85 50.0299 79.82C50.3699 81.8 49.0399 83.68 47.0699 84.02L37.5199 85.67C35.5399 86.01 33.6599 84.68 33.3199 82.71C32.9799 80.73 34.3099 78.85 36.2799 78.51Z"
                          fill="white"
                          stroke="#111B21"
                        ></path>
                        <path
                          d="M39.3099 96.02L48.8599 94.37C50.8399 94.03 52.7199 95.36 53.0599 97.33C53.3999 99.31 52.0699 101.19 50.0999 101.53L40.5499 103.18C38.5699 103.52 36.6899 102.19 36.3499 100.22C36.0099 98.24 37.3399 96.36 39.3099 96.02Z"
                          fill="white"
                          stroke="#111B21"
                        ></path>
                </svg>
                <h1 className='text-white mt-[24px] font-sfpro text-[24px] font-[700]'>Add to Favourites</h1>
                 <p className='text-center text-glass text-[14px] font-[400]'>Make it easy to find the people and groups that matter most across WhatsApp.</p>
                 <button className='text-btn1color font-sfpro font-[400] text-[16px] my-[8px]'>Add to Favourites</button>
             </div>
          </div>)}
        {/* Div for Favourites  chats End here */} 
         {/* Div for Groups start here */}
         {
              group &&(
                <div className='flex justify-center items-center  p-[50px] flex-grow overflow-y-hidden'>
                    <div className='flex flex-col items-center'>
                        <p className='text-sidepara1  font-sfpro font-[400] text-[16px] mb-[18px]'>No Group chats here</p>
                        <button
                        onClick={handleBtn}
                        className='text-btn1color font-sfpro font-[400] text-[16px]'>View All Chats</button>
                     </div>
                </div>
              )}
         {/* Div for Unread chats End here */}

    </div>
  )
}

export default Chats
