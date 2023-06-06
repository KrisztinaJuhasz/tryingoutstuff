import useTechStore from './store/tech'

const List = () => {
    const { techList, toggleDone } = useTechStore(state => state)

    const handleToggleDone = (name) => {
        toggleDone(name)
    }

    return (
        <ul>
            {techList.map(tech => (
                <li
                    onClick={() => handleToggleDone(tech.name)}
                    className={`list-item ${tech.done ? 'done' : ''}`}
                    key={tech.name}
                >{tech.name}</li>
            ))}
        </ul>
    )
}

export default List
