import { lazy } from 'react';

const CreateProductItemModal = lazy(() => import('./create-product-item'));
const AddProcessModal = lazy(() => import('./add-process'));
const AddProductItemModal = lazy(() => import('./add-product-item'));

const ModalProvider = () => (
  <>
    <CreateProductItemModal />
    <AddProcessModal />
    <AddProductItemModal />
  </>
);

export default ModalProvider;
