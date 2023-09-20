import React from 'react'

const App = () => {

  const onClickButton = () => {
    console.log('Local date: ', new Date())
  }

  return (
    <div className='flex justify-center items-center h-screen bg-slate-700'>
      <div className='flex flex-col text-white text-center items-center'>
        <h1 className='text-4xl text-white font-extrabold mb-8'>React App + Tailwind Css 🖌️</h1>
        <a href='https://github.com/DavidConstante' target='_blank' className='hover:text-slate-500' rel="noreferrer">By Célimo Constante</a>
        <button
          id='button'
          className='w-1/4 bg-white text-black m-5 py-2 rounded-xl'
          onClick={onClickButton}
        >
          Botton
        </button>
      </div>
    </div>
  )
}

export default App