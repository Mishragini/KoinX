import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Sentiment(){
    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2, 
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    return(
        <div id="sentiments" className="bg-white mx-3 p-4 mt-2 rounded-md">
            <div className="text-xl font-semibold mb-2">Sentiment</div>
            <div className="flex items-center">
            <div className="text-lg font-semibold mr-2 text-slate-600">Key Events 
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="grey" className="w-6  h-6 text-slate-500">
             <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
           </svg>
            </div>
            <Slider {...carouselSettings}>
             <CarouselCard1 />
             <CarouselCard2 />
             <CarouselCard1 />
             <CarouselCard2 />
           </Slider>
           <div className="flex items-center mt-4 ">
            <div className="text-lg font-semibold mr-2 text-slate-600">Analyst Estimates 
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="grey" className="w-6 h-6 text-slate-500 ">
             <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
           </svg>
            </div>
           <div className='flex items-center mt-4'>
          
           <div className='rounded-full bg-green-200 p-4 w-20 h-20 md:w-40 md:h-40 flex items-center justify-center mr-6 text-slate-500'>
               <div className='text-green-600 text-2xl md:text-3xl'>76%</div>
            </div>
            <div>
                <div className='flex items-center'>
                <div className='mx-6 text-slate-500'>Buy</div>
                <hr className=" w-48 h-1 md:w-96 md:h-2   bg-green-700 border-0 rounded md:my-10"></hr>
                <div className='text-slate-500 ml-2'>76%</div>

                </div>
                <div className='flex items-center'>
                <div className='mx-6 text-slate-500'>Hold</div>
                <hr className=" w-6 h-1 md:w-12 md:h-2  bg-slate-400 border-0 rounded md:my-10"></hr>
                <div className='text-slate-500 ml-2'>8%</div>

                </div >
                <div className='flex items-center'>
                <div className='mx-6 text-slate-500'>Sell</div>
                <hr className=" w-12 h-1 md:w-24 md:h-2 bg-red-700 border-0 rounded md:my-10"></hr>
                <div className='text-slate-500 ml-2'>16%</div>

                </div>
            </div>
           </div>
           
        </div>
    )
    }
    
    function CarouselCard1(){
        return(
            <div className="bg-blue-200 rounded-md mx-2 my-2 p-2">
                <div className="flex justify-between items-center ">
                <div className="bg-blue-600 rounded-full p-2 w-10 h-10 mr-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 mr-2">
                 <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6 text-slate-500.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6 text-slate-500.75H6Z" clipRule="evenodd" />
                 <path d="M18.75 6 text-slate-500.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
               </svg>
                </div>
    
                <div className='font-semibold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat at ad repellendus corrupti optio nisi ex in modi.
                </div>
                </div>
                
                <div className='text-slate-700 ml-12'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quaerat corporis vero molestiae! Quod, dolorum suscipit? Quaerat fuga illo nam consequatur doloribus. Tenetur similique iure sint ducimus iusto accusamus exercitationem!
                    Nulla in earum quaerat nisi reprehenderit? Eius neque ipsa explicabo at maiores rem, blanditiis cupiditate ratione sint, consequatur qui vero ullam, accusantium aperiam. Sint aperiam praesentium quos corporis, laboriosam eveniet!
                </div>
            </div>
        )
    }
    
    function CarouselCard2(){
        return(
            <div className="bg-green-200 rounded-md mx-2 my-2 p-2">
            <div className="flex justify-between items-center ">
            <div className="bg-green-600 rounded-full p-2 w-10 h-10 mr-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
            <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
            </svg>

            </div>

            <div className='font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat at ad repellendus corrupti optio nisi ex in modi.
            </div>
            </div>
            
            <div className='text-slate-700 ml-12'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quaerat corporis vero molestiae! Quod, dolorum suscipit? Quaerat fuga illo nam consequatur doloribus. Tenetur similique iure sint ducimus iusto accusamus exercitationem!
                Nulla in earum quaerat nisi reprehenderit? Eius neque ipsa explicabo at maiores rem, blanditiis cupiditate ratione sint, consequatur qui vero ullam, accusantium aperiam. Sint aperiam praesentium quos corporis, laboriosam eveniet!
            </div>
        </div>
        )
    }

    