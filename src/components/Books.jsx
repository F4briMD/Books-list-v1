import BooksList from '../books.json'
import BaselineDensity from '../assets/icons/Baseline_density.svg'
import { useState } from 'react'
// import { useState } from 'react'

const Books = ({setBookModal,openBookModal}) => {

 

  return (
    <section className="container ">
      <main className="grid grid-cols-4 gap-8 py-8 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:p-5">
        
          {BooksList.library.map((item,index)=>(
            
            <article key={index} className='flex flex-col w-auto p-3 bg-gray-200 rounded-md '>
                <div className='relative w-full h-[400px]'>
                <img src={item.book.cover} 
                alt={`Portada de ${item.book.title}`}
                className='object-cover w-full h-full rounded-md'
                />
                </div>
                <h2 className='pt-2 text-lg font-semibold text-center'>{item.book.title}</h2>
                {/* <p>{item.book.synopsis}</p> */}
                <p className='pb-2 mt-auto font-medium text-gray-500'>
                    {item.book.author.name}
                </p>
                
                <div id='vermas' className='flex justify-between gap-3 mt-auto'>
                <span className='w-auto text-white bg-gray-600 badge'>            
                    {item.book.genre}
                </span>
                <img src={BaselineDensity} 
                alt="" 
                className='cursor-pointer'
                onClick={()=>{
                  openBookModal(item.book.id)
                  
                }}
                />
                </div>
                
            </article>
          ))}
         
      </main>
    </section>
  )
}

export default Books
