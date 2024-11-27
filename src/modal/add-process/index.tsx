import { Card, Container, Modal } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSelector } from 'src/store';

export default function AddProcessModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.addProcess.isModalOpen);

  return (
    <Modal
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      disableAutoFocus
      open={isOpen}
    >
      <Container maxWidth="lg">
        <Card sx={{ padding: '24px' }}>123</Card>
      </Container>
    </Modal>
  );
}
