//simple modal that displays info in modal when button clicked
import React from 'react'
import { Button, Modal} from 'semantic-ui-react'


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
          Add a campsite then click on it to see the current weather conditions at that area
        </p>
        <p>
        Then click on the "Buy Gear" button to see a selection of Mountain Warehouse gear appropriate for the weather conditions
        </p>
        <p>
          Icons made by
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik"
            rel="noopener noreferrer nofollow" target="_blank">
            Freepik
            </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon"
            rel="noopener noreferrer nofollow" target="_blank">
            www.flaticon.com
            </a>
        </p>
      </Modal.Content>
    </Modal>
  )
}

export default InfoModal
