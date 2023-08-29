

const Header = () => {
  return (
    <section className="w-full bg-white shadow-lg ">
      <header className="container p-5 py-6 mx-auto">
      <div className="flex items-center justify-between">
        <span className="text-xl text-black">F/M</span>
        {/* <div>
          <input
          className="w-[300px] h-[40px] p-5 rounded-md"  
          type="search" 
          name="" 
          id="" />
        </div> */}
        <h1 className="text-2xl font-medium underline underline-offset-4 ">Book List </h1>
        <span>Inicio</span>
      </div>
      </header>
    </section>
  )
}

export default Header
