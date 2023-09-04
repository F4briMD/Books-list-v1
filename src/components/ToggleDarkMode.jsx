import { DarkThemeToggle, Flowbite } from 'flowbite-react';

const ToggleDarkMode = ({toggleDark,isDarkMode}) => {
  return (
    <div>
       <Flowbite dark={isDarkMode}>
      
      <DarkThemeToggle onClick={toggleDark} />
      
    </Flowbite>
    </div>
  )
}

export default ToggleDarkMode
