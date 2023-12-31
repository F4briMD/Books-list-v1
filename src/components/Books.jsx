import BooksList from '../books.json'
import BaselineDensity from '../assets/icons/Baseline_density.svg'
import BookMark from '../assets/icons/BookMark.svg'
import BookMarkMinus from '../assets/icons/BookMarkMinus.svg'
import { useState } from 'react'
import FilterBook from './FilterBook'


const Books = ({openBookModal,isDarkMode,handleAddToFavorites,handleRemoveFavorites,favoritos}) => {

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
      isDarkMode={isDarkMode}
      // setSelectedPageRange={setSelectedPageRange}
      />
      <main className="grid items-center grid-cols-4 gap-8 my-10 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:p-5 ">
        {BooksList.library.map((item, index) => {
          const isBookInFavorites = favoritos.some((book) => book.id === item.book.id);
          
          const genreClass = `w-auto font-medium text-white badge ${
            item.book.genre === 'Fantasía' ? 'bg-pink-700' :
            item.book.genre === 'Ciencia ficción' ? 'bg-blue-700' :
            item.book.genre === 'Terror' ? 'bg-red-700' :
            item.book.genre === 'Zombies' ? 'bg-green-700' :
            ''
          }`;
          
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
                className={`flex flex-col w-full max-sm:w-80 max-xs:w-64  m-auto  h-full p-2 transition duration-200 ${isDarkMode ? 'dark:bg-[#1b1d19]' : 'bg-white '}  rounded-md shadow-lg ${isDarkMode ? 'dark:hover:bg-[#292b25]' : 'hover:bg-gray-300 '} `}
              >
                <div className="relative  h-[400px] group">
                  <img
                    src={isBookInFavorites ? BookMarkMinus :BookMark }
                    alt="icons"
                    className={`absolute top-0 right-0 p-2 m-4  transition-all duration-300 ${isBookInFavorites ? 'bg-red-500' :'bg-sky-500'} bg-green-500 rounded-full opacity-0 cursor-pointer ${isBookInFavorites ? 'hover:bg-red-700' :'hover:bg-sky-700'} group-hover:opacity-100`}
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
                <h2 className={`pt-2 text-lg font-semibold text-center ${isDarkMode ? 'dark:text-[#ece9e9]' : 'text-[#131212] '} `}>
                  {item.book.title}
                </h2>
                <div className='px-2 pb-1 mt-auto '>
                
                {/* <p>{item.book.synopsis}</p> */}
                <p className={`pb-2 mt-auto font-medium  ${isDarkMode ? 'dark:text-[#b8b8b8]' : 'text-gray-500'} `}>
                  {item.book.author.name}
                </p>

                <div
                  id="vermas"
                  className="flex justify-between gap-3 mt-auto"
                >
                  <span className={genreClass}>
                    {item.book.genre}
                  </span>
                  <img
                    src={BaselineDensity}
                    alt=""
                    className="cursor-pointer dark:decoration-white"
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
