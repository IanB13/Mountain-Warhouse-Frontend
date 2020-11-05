import React, {useRef} from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { CarouselProvider, Slider} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import SlideHolder from './SlideHolder';
import { useDispatch } from 'react-redux';
import {closeItemModal} from '../../../reducers/actions'

const ItemModal = ({items,openModal,setOpenModal}) => {
    const dispatch = useDispatch()
    const buttonRef = useRef(null)

    const forward = () =>{
        const slideNum = buttonRef.current.getStore().getStoreState().currentSlide +1
        if(slideNum < items.length){
            buttonRef.current.carouselStore.setStoreState({currentSlide: slideNum})
        }
    }
    
    const backwards = () =>{
        const slideNum = buttonRef.current.getStore().getStoreState().currentSlide -1
        if(slideNum >= 0){
            buttonRef.current.carouselStore.setStoreState({currentSlide: slideNum})
        }
    }

    const setClose = () =>{
        dispatch(closeItemModal)
        setOpenModal(false)
    }

    return (
        <Modal
            onClose={() => setClose()}
            open = {openModal}
            closeIcon
        >
            <Modal.Header> Mountain Warehouse Gear for the Conditions!</Modal.Header>
            <Modal.Content image>
                <CarouselProvider
                    ref={buttonRef}
                    naturalSlideWidth={10}
                    naturalSlideHeight={5}
                    totalSlides={items.length}
                >
                    <Slider>
                        {items.map(item => <SlideHolder key = {item.id} item ={item} />)}
                    </Slider>
                </CarouselProvider>
            </Modal.Content>

            <Modal.Actions>
                <Button color='black' onClick={() => backwards()}>
                    backwards
                </Button>
                <Button
                    content="forwards"
                    onClick={() => forward()}
                    positive
                />
            </Modal.Actions>

        </Modal>
  )
}

export default ItemModal