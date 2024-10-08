import React, { useCallback, useEffect, useRef, useState } from 'react'
import Password from './components/password'

export default function App() {

  const [length,setLength] = useState(10);
  const [numbers,Setnumbers] = useState(false)
  const [character,SetCharcter] = useState(false)
  const [password,SetPassword] = useState("")

const passwordref = useRef(null);

const passwordgenrator = useCallback(()=>{
  let pass = ""
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(numbers) str += "0123456789"
  if(character) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~ "


  for(let i = 1;i<=length;i++){
    let char = Math.floor(Math.random() * str.length+1);

    pass += str.charAt(char);
  }


  SetPassword(pass)
},[SetPassword,length,numbers,character])

const copytoclipboard =  useCallback(()=>{
passwordref.current?.select()
  window.navigator.clipboard.writeText(password);

},[password])



useEffect(()=>{
passwordgenrator()
},[passwordgenrator,length,numbers,character])




  return (
    <div>
   <Password
        password={password}
        setlength={setLength}
        numbers={numbers}
        setNumbers={Setnumbers}
        SetCharcter={SetCharcter}
        length={length}

       copytoclipboard = {copytoclipboard}
        passwordref = {passwordref}
      />    </div>
  )
}
