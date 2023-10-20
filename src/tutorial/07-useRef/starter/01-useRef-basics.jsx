import { useEffect, useRef, useState } from 'react';

// useRef doesn't triggers re renders in a component (used in some specific cases)

const UseRefBasics = () => {
  const [value, setValue] = useState(0);

  const refContainer = useRef(null)

  // console.log(refContainer)

  // useEffect(()=>{
  //   console.log(refContainer)
  // })

  useEffect(()=>{
    refContainer.current.focus();
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // setting uncontrolled input using useRef (not with useState)
    const name = refContainer.current.value
    console.log(name)

  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input ref={refContainer} type='text' id='name' className='form-input' />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className='btn'>
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;