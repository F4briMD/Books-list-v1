

const BookMarkList = ({bookMenuOpen,onClose}) => {

    
    return(
    <div
    className={` fixed right-0 top-0 h-screen w-80 bg-white transition-transform transform ${
        bookMenuOpen ? 'translate-x-0' : 'translate-x-full'
    } overflow-y-auto ease-in-out duration-300 z-50`}
    // style={{ zIndex: 1000 }}
  >
    {/* Contenido del menú aquí */}
    <button onClick={onClose}>Cerrar</button>
  </div>
)}

export default BookMarkList
