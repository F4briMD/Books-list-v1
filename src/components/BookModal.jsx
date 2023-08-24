

const BookModal = ({setBookModal}) => {
  
    const cerrarBookModal=()=>{
        setBookModal(false)
    }
  
    return (
    <section className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm'>
      <main className='flex flex-col items-center justify-center '>
        <div className='bg-white w-96'>
            <h2>ssssss</h2>
            <button
            onClick={cerrarBookModal}
            >x</button>
        </div>
      </main>
    </section>
  )
}

export default BookModal
