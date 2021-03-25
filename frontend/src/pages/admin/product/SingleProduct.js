import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getProductsByCount,
} from '../../../state/actions/product';
import errorAlert from '../../../components/layout/message/errorAlert';
import successAlert from '../../../components/layout/message/successAlert';
import useUserHook from '../../../hooks/useUserHook';
import AdminProductCard from '../../../components/cards/AdminProductCard';

const SingleProduct = ({ product }) => {
    const dispatch = useDispatch();

    return <AdminProductCard product={product} />;
}

export default SingleProduct;
