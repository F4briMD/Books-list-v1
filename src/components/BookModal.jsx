import BooksList from "../books.json";
import SquareX from '../assets/icons/Square_rounded_x.svg'

const BookModal = ({ setBookModal, selectedBookId }) => {
  const Bookid = BooksList.library.find(
    (item) => item.book.id === selectedBookId
  );

  const cerrarBookModal = () => {
    setBookModal(false);
  };

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm">
      <main className="flex items-center justify-center">
        
        <div className="flex bg-white w-[350px] h-auto p-2 rounded-md sm:min-w-[600px] sm:min-h-[450px] relative">
          <img src={SquareX} alt=""
        onClick={cerrarBookModal}
        className="absolute top-0 right-0 m-4 cursor-pointer"
        />
          
          {/* Columna izquierda */}
          <div className="hidden w-2/5 sm:w-4/5 sm:block">
            <img
              src={Bookid.book.cover}
              alt={`Portada de ${Bookid.book.title}`}
              className="object-cover w-full h-full rounded-md"
            />
          </div>

          {/* Columna derecha */}
          <div className="p-4 w-5/5 sm:w-4/5">
            <p className="mt-4 text-xl font-semibold">{Bookid.book.title}</p>
            <p className="my-2 text-gray-500">{Bookid.book.author.name}</p>
             <div className="flex flex-row justify-around mt-4">
               <p className="text-white bg-gray-600 badge">{Bookid.book.genre}</p>   
               <span className="text-white bg-gray-600 badge">{Bookid.book.year}</span>
               <p className="text-white bg-gray-400 badge">Pages: {Bookid.book.pages}</p>
             </div>
            <p className="mt-4">{Bookid.book.synopsis}</p>
                
            <div className="mt-4 text-sm">
                <p className="font-medium">Otros Titulos</p>
                <span className="text-gray-500">{Bookid.book.author.otherBooks}</span>
            </div>
            
            
            
            
          </div>
        </div>
      </main>
    </section>
  );
};

export default BookModal;

// import BooksList from '../books.json';

// const BookModal = ({ setBookModal,SelectedBookId }) => {

//     const cerrarBookModal = () => {
//         setBookModal(false);
//     }

//    // Cambia esto según corresponda

//     // Buscar el libro seleccionado por su ID
//     const selectedBook = BooksList.library.find(item => item.book.id === selectedBookId);

//     if (!selectedBook) {
//         return null; // Manejar el caso en que el libro no se encuentre
//     }

//     return (
//         <section className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm'>
//             <main className='flex flex-row items-center justify-center '>
//                 <div key={selectedBook.book.id} className='bg-white w-96'>
//                     <img src={selectedBook.book.cover} alt={`Portada de ${selectedBook.book.title}`} />
//                 </div>
//                 <div className=''>
//                     <button
//                         onClick={cerrarBookModal}
//                     >x</button>
//                 </div>
//             </main>
//         </section>
//     );
// }

// export default BookModal;
