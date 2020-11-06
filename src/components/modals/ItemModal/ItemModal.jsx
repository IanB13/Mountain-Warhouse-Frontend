import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {openItemModal} from '../../../reducers/actions'
import {store} from '../../../reducers/store'
import ItemModalContent from './ItemModalContent'
import getItems from '../../../services/getItems'

const ItemModal = () =>{
    const [openModal,setOpenModal] = useState(false)
    const [items,setItems] =useState(null)


    const dispatchOpenFunc = () =>{
        setOpenModal(true)
        store.dispatch(openItemModal())
    }

    const itemStore = useSelector(state => state.items)

    useSelector( ()=>{
        const button = document.getElementById("buyGear")
        if(button){
            button.onclick = dispatchOpenFunc
        }
    })

    useEffect(()=>{
        if(itemStore.tags){
        const itemsFunc = async() =>{
            const response = await getItems(itemStore.tags)
            setItems(response)   
        }
        itemsFunc()
        }
    },[itemStore.tags])

    if(itemStore.open && items) return <ItemModalContent openModal= {openModal} setOpenModal ={setOpenModal} items = {items} />
    return null
}

export default ItemModal