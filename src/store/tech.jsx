import { create } from 'zustand'

// name
// done

const useTechStore = create(set => ({
    techList: [],
    addToList: (payload) => set(state => ({ techList: [...state.techList, { name: payload, done: false }] })),
    toggleDone: (payload) => set(state => {
        const updated =  state.techList.map(tech => {
            if (tech.name === payload) return { name: payload, done: !tech.done }
            else return tech
        })

        return { techList: updated }
    })
}))

export default useTechStore
