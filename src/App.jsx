import { useState,useEffect } from "react"
import Books from "./components/Books"
import Header from "./components/Header"
import BookModal from "./components/BookModal"
import Footer from "./components/Footer"



function App() {

  const [bookModal,setBookModal]= useState(false)
  const [selectedBookId, setSelectedBookId] = useState(null);
  const storedFavoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
  const [favoritos, setFavoritos] = useState(storedFavoritos);
  const storedDarkMode = JSON.parse(localStorage.getItem('isDarkMode')) || false ;
  const [isDarkMode,setIsDarkMode] = useState(storedDarkMode)
  
  const openBookModal = (id) => {
    setSelectedBookId(id);
    setBookModal(true);
  };
  
  
  

  const handleAddToFavorites = (book) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, book]);
  };
  
  const handleRemoveFavorites = (bookId) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter((book) => book.id !== bookId));
  };
  //BookFavs
    useEffect(() => {
       localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);


  const toggleDark= () =>{
    setIsDarkMode((prevIsDarkMode)=> !prevIsDarkMode)
    console.log(isDarkMode)
  }

    // DarkMode
    useEffect(() => {
      localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);
  
  

  
  return (
 
      <main className={`flex flex-col items-center h-full ${isDarkMode ?'dark:bg-[#0e0e0c]' : 'bg-[#ebecee]' } font-Poppins `}> 
      <Header
      isDarkMode={isDarkMode}
      toggleDark={toggleDark}
      />
      <section className="container mx-auto">
        <Books
        bookModal={bookModal}
        setBookModal={setBookModal}
        openBookModal={openBookModal}
        handleRemoveFavorites={handleRemoveFavorites}
        handleAddToFavorites={handleAddToFavorites}
        favoritos={favoritos}
        isDarkMode={isDarkMode}
        />
        {bookModal && 
        <BookModal
        setBookModal={setBookModal}
        selectedBookId={selectedBookId}
        />
        }
      </section>
      <Footer/>
    </main>
  )
}

export default App
