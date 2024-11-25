import { lazy } from 'react';

const CreateProductItem = lazy(() => import('./create-product-item'));

const ModalProvider = () => <CreateProductItem />;

export default ModalProvider;
