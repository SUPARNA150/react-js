import { useState, useCallback, useEffect } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*-_+=`~"

    for (let i = 1; i<= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
   }, [length, number, character, setPassword])

   useEffect(() => {
    passwordGenerator()
   }, [length, number, character, passwordGenerator])

  return (
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg
      px-6 py-7 my-8 bg-yellow-200 text-black'>
        <h1 className='text-blue-800 text-center my-3 font-semibold'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password} 
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        />
        <button className='outline-none bg-blue-700 text-white
        px-3 py-1 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type='range'
          min={8}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
            <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input
          type='checkbox'
          defaultChecked={number}
          id="numberInput"
          onChange={() => {setNumber((prev) => !prev);
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input
          type='checkbox'
          defaultChecked={character}
          id="characterInput"
          onChange={() => {setCharacter((prev) => !prev);
          }}
          />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
      </div>
  )
}

export default App
