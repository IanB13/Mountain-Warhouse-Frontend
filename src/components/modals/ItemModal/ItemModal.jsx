import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {openItemModal} from '../../../reducers/actions'
import {store} from '../../../reducers/store'
import ItemModalContent from './ItemModalContent'
import getItems from '../../../services/getItems'

const ItemModal = () =>{
    const [openModal,setOpenModal] = useState(false)
    const [items,setItems] =useState(null)
    console.log(items)

    const openModalBoi = () =>{
        setOpenModal(true)
        store.dispatch(openItemModal())
    }

    const itemStore = useSelector(state => state.items)

    useSelector(()=>{
        console.log("useSelector firing")
        const x = document.getElementById("buyGear")
        if(x){
            x.onclick = openModalBoi
        }
    })

    useEffect(()=>{
        if(itemStore.tags){
        const x = async() =>{
            const response = await getItems(itemStore.tags)
            setItems(response)   
        }
        x()
        }
    },[itemStore.tags])

    if(itemStore.open && items) return <ItemModalContent openModal= {openModal} setOpenModal ={setOpenModal} items = {items} />
    return null
}

export default ItemModal