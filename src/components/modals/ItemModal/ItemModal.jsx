import React from 'react'
import { useSelector } from 'react-redux'
import {openItemModal} from '../../../reducers/actions'
import {store} from '../../../reducers/store'
import ItemModalContent from './ItemModalContent'

const ItemModal = () =>{
    const openModal = () =>{
        console.log("hello clicker")
        store.dispatch(openItemModal())
    }

    const open = useSelector(state => state.tags.open)

    useSelector(()=>{
        console.log("useSelector firing")
        const x = document.getElementById("buyGear")
        if(x){
            x.onclick = openModal
        }
    })

    if(open) return <ItemModalContent />
    return null
}

export default ItemModal