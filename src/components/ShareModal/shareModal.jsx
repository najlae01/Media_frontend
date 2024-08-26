import { Modal, useMantineTheme } from '@mantine/core'
import PostShare from '../PostShare/postShare'

function ShareModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme()
  return (
    <Modal
      size='55%'
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <PostShare />
    </Modal>
  )
}

export default ShareModal
