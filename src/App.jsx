import { useState } from "react"
import Books from "./components/Books"
import Header from "./components/Header"
import BookModal from "./components/BookModal"



function App() {

  const [bookModal,setBookModal]= useState(false)
  const [selectedBookId, setSelectedBookId] = useState(null);

  const openBookModal = (id) => {
    setSelectedBookId(id);
    setBookModal(true);
  };

  return (
    <main className="flex flex-col items-center h-screen font-Poppins ">
      <Header/>
      <section className="container mx-auto">
        <Books
        bookModal={bookModal}
        setBookModal={setBookModal}
        openBookModal={openBookModal}
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
