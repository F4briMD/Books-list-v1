

const BookMarkFav = ({bookMenuOpen,onClose,handleRemoveFavorites,favoritos}) => {

    
    return(
    <div
    className={` fixed right-0 top-0 h-screen w-80 bg-slate-200 transition-transform transform ${
        bookMenuOpen ? 'translate-x-0' : 'translate-x-full'
    } overflow-y-auto ease-in-out duration-300 z-50 shadow-2xl shadow-black`}
    // style={{ zIndex: 1000 }}
  >
    {/* Contenido del menú aquí */}
    <section className="p-2 mt-5">
      <button onClick={onClose} className="px-2 py-3 text-white rounded-full bg-slate-800">Cerrar</button>
      <div className="flex flex-col gap-2 text-center">
          <h2 className="my-2 text-2xl font-medium underline underline-offset-4">Libros Agregados</h2>

          {favoritos.map((book) => (
            <div key={book.id} className="flex flex-row items-center p-2 transition duration-200 rounded-md hover:bg-slate-400">
              <img src={book.cover} alt={`Portada de ${book.title}`} 
              className="w-auto h-[120px] object-cover"
              />
              <div className="flex flex-col w-full pl-4 text-left">
              <p className="mb-1 text-lg font-medium">{book.title}</p>
              <p className="mb-2 text-gray-600">{book.author.name}</p>
              <button onClick={() => handleRemoveFavorites(book.id)}
              className="w-2/4 py-1 bg-red-700 rounded-full text-slate-300"
              >
                Eliminar
              </button>
              </div>
              
            </div>
          ))}
      </div>
    </section>
    
  </div>
)}

export default BookMarkFav
