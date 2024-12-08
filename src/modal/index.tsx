import { lazy } from 'react';

const CreateProductItemModal = lazy(() => import('./create-product-item'));
const AddProcessModal = lazy(() => import('./add-process'));
const AddProductItemModal = lazy(() => import('./add-product-item'));
const TaskUsersModal = lazy(() => import('./task-users'));

const ModalProvider = () => (
  <>
    <CreateProductItemModal />
    <AddProcessModal />
    <AddProductItemModal />
    <TaskUsersModal />
  </>
);

export default ModalProvider;
