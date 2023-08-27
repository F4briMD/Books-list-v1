import { useState,useEffect } from "react"
import Books from "./components/Books"
import Header from "./components/Header"
import BookModal from "./components/BookModal"



function App() {

  const [bookModal,setBookModal]= useState(false)
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  
  
  const openBookModal = (id) => {
    setSelectedBookId(id);
    setBookModal(true);
  };

  // const handleAddToFavorites = (book) => {
  //   setFavoritos((prevFavoritos) => [...prevFavoritos, book]);
  // };
  
  // const handleRemoveFavorites = (bookId) => {
  //   setFavoritos((prevFavoritos) => prevFavoritos.filter((book) => book.id !== bookId));
  // };


  const handleAddToFavorites = (book) => {
    setFavoritos((prevFavoritos) => {
      const newFavoritos = [...prevFavoritos, book];
      localStorage.setItem('favoritos', JSON.stringify(newFavoritos));
      return newFavoritos;
    });
  };
  
  const handleRemoveFavorites = (bookId) => {
    setFavoritos((prevFavoritos) => {
      const newFavoritos = prevFavoritos.filter((book) => book.id !== bookId);
      localStorage.setItem('favoritos', JSON.stringify(newFavoritos));
      return newFavoritos;
    });
  };
  
  

  // Agregar efecto para guardar los favoritos en el almacenamiento local
  useEffect(() => {
    const storedFavoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    setFavoritos(storedFavoritos);
  }, []);

  // Agregar efecto para guardar los favoritos en el almacenamiento local cuando cambian
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  

  return (
    <main className="flex flex-col items-center h-screen font-Poppins ">
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
    </main>
  )
}

export default App
