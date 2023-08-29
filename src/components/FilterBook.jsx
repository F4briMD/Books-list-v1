import Filter_adjust from '../assets/icons/Filter_adjustments.svg'
import Booksvg from '../assets/icons/Book.svg'
// import BookList from '../books.json'
import { useState } from 'react'
import BookMarkFav from './BookMarkFav';

const FilterBook = ({handleGenreChange,handlePageRangeChange,handleRemoveFavorites,favoritos }) => {

    const [selectedPageRange, setSelectedPageRange] = useState('');
    const [bookMenu,setBookMenu]=useState(false)

    const handlePageRangeSelection = (event) => {
        const selectedRange = parseInt(event.target.value);
        setSelectedPageRange(selectedRange);
        handlePageRangeChange(selectedRange);
      };
    
    const toggleMenu=()=>{
        setBookMenu(!bookMenu)
    }


  return (
    <section className="">
        <main className="flex items-center justify-between p-3 my-3 bg-white rounded-md shadow-lg">
        <div className="flex flex-row items-center ">
            
            <div className='flex flex-row items-center pr-2 '>
               <img src={Filter_adjust} alt="" 
               className='w-8 h-8 align-middle'
               /> 
              
            </div>           
            <select name="" id="categorias"
            className="p-2 mr-5 border rounded-full cursor-pointer border-slate-600"
            onClick={(e)=>
                handleGenreChange(e.target.value)
            }
            >
                <option value="" disabled >Generos</option>
                <option value="" >Todos</option>
                <option value="Fantasía">Fantasia</option>
                <option value="Terror">Terror</option>
                <option value="Ciencia ficción">Ciencia ficción</option>
                <option value="Zombies">Zombies</option>
            </select>
            <input type="range" 
                   min='100'
                   max='1500'
                   value={selectedPageRange}
                   onChange={handlePageRangeSelection }
                   className='max-sm:hidden'
            /> 
        </div>
        <div className='flex flex-row items-center'>
            <div className='flex flex-row items-center'>
                
               
            </div>
            
            <img src={Booksvg} alt="" 
            className='p-1 transition-all duration-200 rounded-full cursor-pointer bg-sky-400 hover:bg-blue-500'
            onClick={toggleMenu}
            />
            
        </div>
        </main>
        <BookMarkFav 
        bookMenuOpen={bookMenu}
        onClose={toggleMenu}
        handleRemoveFavorites={handleRemoveFavorites}
        favoritos={favoritos}
        />
    </section>


  )
}

export default FilterBook
