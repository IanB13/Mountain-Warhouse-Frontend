//simple modal that displays info in modal when button clicked
import React from 'react'
import { Button, Modal, Image } from 'semantic-ui-react'
import smile from '../../resources/defaultIcons/smile.svg'

function InfoModal({x,y}) {
  const [open, setOpen] = React.useState(false)
  
  //default button postion
  x = x?x:12
  y = y?y:12

  const buttonStyle ={
    "display": "block",
    "position": "absolute",
    "left": `${x}px`,
    "top": `${y}px`,
    "marginRight": "0px"
  }

  const iconStyle = {
    "height": "1.5em",
    'paddingLeft':' 0.2em',
    'paddingRight': '0.2em'
  }

  return (
    <Modal
      closeIcon
      open={open}
      size = 'tiny' 
      trigger={<Button style ={buttonStyle} className = "black" id = "infoModalButton"> Info </Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Modal.Content>
        <p>
          Generic INFO
        </p>
        <Image src = {smile} alt="smile" inline style = {iconStyle} /> 
        <div></div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Modal.Content>
    </Modal>
  )
}

export default InfoModal
