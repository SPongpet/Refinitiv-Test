import React, { useEffect, useState } from 'react'
import { ContainerStyle } from './style'

const App = () => {
  const [inputNumber, setInputNumber] = useState(0)
  const [inputSelection, setInputSelection] = useState('isPrime')
  const [inputBoolean, setInputBoolean] = useState('')

  const onChangeValue = (e) => {
    setInputNumber(e.target.value)
  }

  const onBlurInput = (e) => {
    const newInput = parseInt(e.target.value)
    if (newInput < 0) {
      setInputNumber(1)
    } else {
      setInputNumber(Math.round(newInput))
    }
  }

  const checkPrime = num => {
    if (num === 1) {
      setInputBoolean('1 is neither prime nor composite number.')
    } else {
      let isPrime = 'True'
      for (let i = 2 ; i < num ; i++) {
        if (num % i === 0) {
          isPrime = 'False'
          break;
        }
      }
      setInputBoolean(isPrime)
    }
  }

  const checkFibonacci = (num, count = 1, last = 0) => {
    if(count < num){
      return checkFibonacci(num, count+last, count);
    }
    if(count === num){
      return setInputBoolean('True')
    }
    return setInputBoolean('False')
  }

  useEffect(() => {
    if (inputSelection === 'isPrime') {
      checkPrime(parseInt(inputNumber))
    } else {
      checkFibonacci(parseInt(inputNumber))
    }
  }, [inputNumber, inputSelection])

  return (
    <ContainerStyle>
      <div className='left-box'>
        <input value={inputNumber} onChange={e => onChangeValue(e)} onBlur={e => onBlurInput(e)}/>
      </div>
      <div className='middle-box'>
      <select className='select-box' value={inputSelection} onChange={e => {setInputSelection(e.target.value)}}>
        <option selected value="isPrime">isPrime</option>
        <option value="isFibonacci">isFibonacci</option>
      </select>
      </div>
      <div className='right-box'>
        {inputBoolean}
      </div>
    </ContainerStyle>
  );
}

export default App;
