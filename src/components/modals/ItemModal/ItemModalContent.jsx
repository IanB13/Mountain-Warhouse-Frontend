import React, {useState,useRef} from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ItemModal = () => {
    const [open, setOpen] = useState(true) // will use redux 
    const buttonRef = useRef(null)

    const forward = () =>{
        const slideNum = buttonRef.current.getStore().getStoreState().currentSlide +1
        if(slideNum < 3){
            buttonRef.current.carouselStore.setStoreState({currentSlide: slideNum})
        }
    }
    
    const backwards = () =>{
        const slideNum = buttonRef.current.getStore().getStoreState().currentSlide -1
        if(slideNum >= 0){
            buttonRef.current.carouselStore.setStoreState({currentSlide: slideNum})
        }
    }

  console.log(buttonRef)
    return (
        <Modal
            onClose={() => setOpen(false)}
            open={open}
            closeIcon
        >
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
                <CarouselProvider
                    ref={buttonRef}
                    naturalSlideWidth={10}
                    naturalSlideHeight={5}
                    totalSlides={3}
                >
                    <Slider>
                        <Slide index={0}>
                        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
                             I am the first Slide.</Slide>
                        <Slide index={1}>I am the second Slide.</Slide>
                        <Slide index={2}>I am the third Slide.</Slide>
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