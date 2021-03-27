import { useDispatch, useSelector } from 'react-redux';
import { 
    deleteProduct,
} from '../../../state/actions/product';
import useUserHook from '../../../hooks/useUserHook';
import AdminProductCard from '../../../components/cards/AdminProductCard';

const SingleProduct = ({ product }) => {
    const dispatch = useDispatch();

    // * user state
    const { userInfo } = useUserHook();

    // * product deletion state
    const productDeletion = useSelector(state => state.productDelete);
    const { loading: deletionLoading } = productDeletion;

    const handleDeleteProduct = slug => {
        dispatch(deleteProduct(slug, userInfo.token));
    }

    return <AdminProductCard 
        product={product} 
        handleDeleteProduct={handleDeleteProduct}
        deletionLoading={deletionLoading}
    />;
}

export default SingleProduct;