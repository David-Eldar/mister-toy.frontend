

import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'
import axios from 'axios'

const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor", "Flexible", "Heros", "Social"]

const KEY = 'toys_db'

// const API = '//localhost:3030/api/toy/'
const API = (process.env.NODE_ENV !== 'development')
    ? '/api/toy'
    : '//localhost:3030/api/toy';

//_createToys ()

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy,
}

async function query(filterBy) {

    var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
    return httpService.get(`review${queryStr}`)
    

    // try {
    //     const res = await axios.get(API, { params: filterBy })
    //     return res.data
    // } catch (err) {
    //     console.err(err)
    // }

    // return axios.get(BASE_URL, { params: filterBy }).then((res) => res.data)
    // return storageService.query(TOY_KEY)
}

async function getById(toyId) {
    try {
        const res = await axios.get(API + toyId)
        return res.data
    } catch (err) {

    }

    // return axios.get(BASE_URL + toyId).then((res) => res.data);
    // return storageService.get(KEY, toyId)
}


async function remove(toyId) {

    try {
        const res = await axios.delete(API + toyId)
        return res.data
    } catch (err) {

    }

    // if (toy._id) {
    //     return axios.put(API + toy._id, toy).then((res) => res.data);
    // } else {
    //     return axios.post(API, toy).then((res) => res.data);
    // }
}

async function save(toy) {

    try {
        if (toy._id) {
            const res = await axios.put(BASE_URL + toy._id, toy)
            return res.data
        } else {
            const res = await axios.post(BASE_URL, toy)
            return res.data
        }
    } catch (err) {
        console.err(err)
    }

    // if (toy._id) {
    //     return axios.put(API + toy._id, toy).then((res) => res.data);
    // } else {
    //     return axios.post(API, toy).then((res) => res.data);
    // }

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

