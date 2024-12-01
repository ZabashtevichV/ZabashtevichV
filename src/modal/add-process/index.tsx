import { useDispatch } from 'react-redux';

import { Card, Modal, Container } from '@mui/material';

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
