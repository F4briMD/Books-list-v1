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
  
  
  const openBookModal = (id) => {
    setSelectedBookId(id);
    setBookModal(true);
  };
  
  useEffect(() => {
       localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const handleAddToFavorites = (book) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, book]);
  };
  
  const handleRemoveFavorites = (bookId) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter((book) => book.id !== bookId));
  };

  

  
  return (
    <main className="flex flex-col items-center h-full bg-[#ebecee] dark:bg-[#0e0e0c] font-Poppins ">
      <Header/>
      <section className="container mx-auto">
        <Books
        bookModal={bookModal}
        setBookModal={setBookModal}
        openBookModal={openBookModal}
        handleRemoveFavorites={handleRemoveFavorites}
        handleAddToFavorites={handleAddToFavorites}
        favoritos={favoritos}
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
