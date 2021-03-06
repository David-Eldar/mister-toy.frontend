import { toyService } from '../services/toy-service'

export default {
    state: {
        toys: null,
    },
    getters: {
        toys(state) {
            return state.toys
        },
        getLabelsCount({ toys }) {
            if (!toys) return
            let labelsCount = {}
            toys.forEach((toy) => {
                toy.labels.forEach((label) => {
                    if (!labelsCount[label]) labelsCount[label] = 0
                    labelsCount[label]++
                })
            })
            return labelsCount
        },
        getToysStock({ toys }) {
            if (!toys) return
            let toysStock = [0, 0]
            toys.forEach((toy) => (toy.inStock ? toysStock[0]++ : toysStock[1]++))
            return toysStock
        },
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },
        removeToy(state, { id }) {
            const idx = state.toys.findIndex((toy) => toy._id === id)
            state.toys.splice(idx, 1)
        },
        saveToy(state, { toy }) {
            const idx = state.toys.findIndex((currToy) => currToy._id === toy._id)
            if (idx !== -1) state.toys.splice(idx, 1, toy)
            else state.toys.push(toy)
        }
    },
    actions: {
        loadToys({ commit }, { filterBy }) {
            if (!filterBy) filterBy = { name: '', staus: '' }
            toyService.query(filterBy).then((toys) => {
                console.log('toys store', toys);
                commit({ type: 'setToys', toys })
            })
        },
        removeToy({ commit }, { id }) {
            toyService.remove(id).then(() => {
                commit({ type: 'removeToy', id })
            })
        },
        saveToy({ commit }, { toy }) {
            toyService.save(toy).then((toy) => {
                commit({ type: 'saveToy', toy })
            })
        }
    }
}