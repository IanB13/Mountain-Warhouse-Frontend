import React,{ useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import SlideHolder from './SlideHolder';
import { useDispatch } from 'react-redux';
import {closeItemModal} from '../../../reducers/actions'

const ItemModal = ({items,openModal,setOpenModal}) => {
    const dispatch = useDispatch()
    const [slideNum,setSlideNum] = useState(0)

    const forward = () =>{
        if(slideNum < items.length-1){
            setSlideNum(slideNum+1)
        }
    }
    
    const backwards = () =>{
        if(slideNum >= 0){
            setSlideNum(slideNum-1)
        }
    }

    const setClose = () =>{
        dispatch(closeItemModal)
        setOpenModal(false)
    }

    const prevColor = (slideNum === 0)?"grey":"blue"
    const nextColor = (slideNum === items.length-1)?"grey":"blue"

    return (
        <Modal
            onClose={() => setClose()}
            open = {openModal}
            closeIcon
            size="small"
        >
            <Modal.Header> Mountain Warehouse Gear for the Conditions!</Modal.Header>
            <Modal.Content image style = {{"justifyContent": "center", "display": "flex"}}>
                <SlideHolder item ={items[slideNum]}/>
            </Modal.Content>

            <Modal.Actions style = {{"justifyContent": "space-between", "display": "flex"}}>
                <Button color={prevColor} onClick={() => backwards()}>
                    Previous
                </Button>

                <Button color={nextColor} onClick={() => forward()} >
                    Next
                </Button>
            </Modal.Actions>

        </Modal>
  )
}

export default ItemModal