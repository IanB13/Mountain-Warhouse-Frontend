import React from 'react'
import { Image, Modal } from 'semantic-ui-react'

const Slide = ({item}) =>(
        <Modal.Content>
                <h3>{item?.name}</h3>
                <Image src={item?.imageURL} style={{ "height": "50vh", "margin":"auto"}} />
                <a href={item.itemURL} rel="noopener noreferrer nofollow"
                        target="_blank">Click here to get!</a>
        </Modal.Content>
)


export default Slide