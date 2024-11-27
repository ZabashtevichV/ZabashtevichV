import { lazy } from 'react';

const CreateProductItemModal = lazy(() => import('./create-product-item'));
const AddProcessModal = lazy(() => import('./add-process'));

const ModalProvider = () => (
  <>
    <CreateProductItemModal />
    <AddProcessModal />
  </>
);

export default ModalProvider;
