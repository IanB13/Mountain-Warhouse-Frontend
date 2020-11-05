import React from 'react'
import { Image, Modal } from 'semantic-ui-react'

const SlideHolder = ({item}) =>(
        <Modal.Content>
        <h3>{item.name}</h3>
        <Image src ={item.imageURL} style ={ {"height": "50vh"}}/>
        <a href = {item.itemURL}>Click here to get!</a>
        </Modal.Content>
)


export default SlideHolder