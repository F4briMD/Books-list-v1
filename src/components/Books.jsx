import BooksList from '../books.json'
import BaselineDensity from '../assets/icons/Baseline_density.svg'
import BookMark from '../assets/icons/BookMark.svg'
import BookMarkMinus from '../assets/icons/BookMarkMinus.svg'
import { useState } from 'react'
import FilterBook from './FilterBook'


const Books = ({openBookModal,handleAddToFavorites,handleRemoveFavorites,favoritos}) => {

  const [generoSelect,setGeneroSelect]= useState('')
  const [selectedPageRange, setSelectedPageRange] = useState(0);


  const handleGenreChange = (generoSelect)=>{
      
      setGeneroSelect(generoSelect)
  }
  const handlePageRangeChange = (selectedRange) => {
    setSelectedPageRange(selectedRange);
  }

 

  return (
    // 
    <section className="container">
      <FilterBook 
      handleGenreChange={handleGenreChange} 
      handlePageRangeChange={handlePageRangeChange}
      handleRemoveFavorites={handleRemoveFavorites}
      favoritos={favoritos}
      // setSelectedPageRange={setSelectedPageRange}
      />
      <main className="grid items-center grid-cols-4 gap-8 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:p-5 ">
        {BooksList.library.map((item, index) => {
          const isBookInFavorites = favoritos.some((book) => book.id === item.book.id);
          if (
            (generoSelect === '' ||
            generoSelect === 'Todos' ||
            generoSelect === item.book.genre) && (
              (selectedPageRange === 0 || item.book.pages <= selectedPageRange)
            )

          ) {
            return (
              <article 
                key={index}
                className="flex flex-col w-full h-full p-2 transition duration-200 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                <div className="relative  h-[400px] group">
                  <img
                    src={isBookInFavorites ? BookMarkMinus :BookMark }
                    alt="icons"
                    className={`absolute top-0 right-0 p-2 m-4  transition-all duration-300 ${isBookInFavorites ? 'bg-red-500' :'bg-green-500'} bg-green-500 rounded-full opacity-0 cursor-pointer ${isBookInFavorites ? 'hover:bg-red-700' :'hover:bg-green-700'} group-hover:opacity-100`}
                    onClick={()=>{
                      isBookInFavorites ? handleRemoveFavorites(item.book.id)
                      : handleAddToFavorites(item.book)
                    }}
                  />
                  <img
                    src={item.book.cover}
                    alt={`Portada de ${item.book.title}`}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <h2 className="pt-2 text-lg font-semibold text-center">
                  {item.book.title}
                </h2>
                <div className='px-2 pb-1 mt-auto'>
                
                {/* <p>{item.book.synopsis}</p> */}
                <p className="pb-2 mt-auto font-medium text-gray-500">
                  {item.book.author.name}
                </p>

                <div
                  id="vermas"
                  className="flex justify-between gap-3 mt-auto"
                >
                  <span className="w-auto text-white bg-gray-600 badge">
                    {item.book.genre}
                  </span>
                  <img
                    src={BaselineDensity}
                    alt=""
                    className="cursor-pointer"
                    onClick={() => {
                      openBookModal(item.book.id);
                    }}
                  />
                </div>
                </div>
              </article>
            );
          }
          return null;
        })}
      </main>
    </section>
  )
}

export default Books
