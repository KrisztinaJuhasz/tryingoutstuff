import { useRef } from 'react'
import useTechStore from './store/tech'

const Input = () => {
    const { addToList } = useTechStore(state => state)
    const inputRef = useRef()

    const handleAddTech = (e) => {
        e.preventDefault()
        addToList(inputRef.current.value)
        console.log(inputRef.current.value);
    }

    return (
        <>
            <input className='input-field' type="text" ref={inputRef} />
            <button onClick={handleAddTech}>Add</button>
        </>
    )
}

export default Input
