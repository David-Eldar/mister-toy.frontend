

import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'
import axios from 'axios'

const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor", "Flexible", "Heros","Social"]

const KEY = 'toys_db'

const API = '//localhost:3030/api/toy/'

//_createToys ()

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy,
}

function query(filterBy) {
    return axios.get(API, { params: filterBy }).then((res) => res.data)
    // return storageService.query(TOY_KEY)
}

function getById(toyId) {
    return axios.get(API + toyId).then((res) => res.data);
}

function remove(toyId) {
    return axios.delete(API + toy._id).then((res) => res.data);
}

function save(toy) {
    if (toy._id) {
        return axios.put(API + toy._id, toy).then((res) => res.data);
    } else {
        return axios.post(API, toy).then((res) => res.data);
    }

    // if (toy.id) return storageService.put(KEY, toy)
    // return storageService.post(KEY, toy)
}

function getEmptyToy() {
    return {
        name: '',
        price: null,
        labels: [],
        createdAt: null,
        inStock: true,
    }
}

// function _createToys() {
//     let toys = utilService.loadFromStorage(KEY)
//     if (!toys || !toys.length) {
//         toys = [
//             {
//                 _id: utilService.makeId(), name: 'Talking Doll', price: 30, labels: ["Doll", "Battery Powered", "Baby"], createdAt: Date.now(), inStock: true,
//             },
//             {
//                 _id: utilService.makeId(), name: 'Remote Control Car', price: 30, labels: ["Car", "On wheels", "Outdoor"], createdAt: Date.now(), inStock: true,
//             },
//             {
//                 _id: utilService.makeId(), name: 'Action Figure', price: 30, labels: ["Doll", "Flexible", "Heros"], createdAt: Date.now(), inStock: true,
//             },
//             {
//                 _id: utilService.makeId(), name: '3D 1000 Peaces Puzzle ', price: 30, labels: ["Box game", "Puzzle", "Art"], createdAt: Date.now(), inStock: true,
//             },
//         ]
//         utilService.saveToStorage(KEY, toys)
//     }
//     return toys
// }

