
import {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0)

    //increment to modify the state
    const increment = () => {
        setCount(count + 1);
    }

    const decerement = () => {
        setCount(count - 1);
    }
    const reset=(value)=>{
        setCount(value)
    }

    return (
        <div className='flex flex-col items-center justify-center mt-4 ring-2 p-4'>
            <h1 className='border-2 p-3 text-3xl'>Count: {count}</h1>
            <div className='mt-2 flex gap-3'>
                <button className='bg-green-500 text-3xl p-3' onClick={increment} >+</button>
            <button className='bg-red-400 text-3xl p-3' onClick={decerement}>-</button>
             <button className='bg-yellow-400 text-3xl p-3' onClick={()=>reset(0)}>reset</button>
            </div>
        </div>
    )
}

export default Counter;