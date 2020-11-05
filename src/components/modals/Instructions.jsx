//simple modal that pops up on start then never again
import React from 'react'
import { Modal, List ,Image } from 'semantic-ui-react'
import smile from '../../resources/defaultIcons/smile.svg'

const InfoModal = () => {
  const [open, setOpen] = React.useState(true)

  const IconStyle = {
    "height": "1.5em",
    'paddingLeft':' 0.2em',
    'paddingRight': '0.2em'
}
  return (
    <Modal
      closeIcon
      open={open}
      size = 'tiny' 
      onClose={() => setOpen(false)}
    >
      <Modal.Content>
        <List as='ol'>
        <List.Item as='li'>Instruction steps </List.Item>
        <List.Item as='li'>For you </List.Item>
        <List.Item as='li'>
          To use
          <Image src = {smile} alt="smile" inline style = {IconStyle} /> 
         </List.Item>
        </List>
      </Modal.Content>
    </Modal>
  )
}

export default InfoModal