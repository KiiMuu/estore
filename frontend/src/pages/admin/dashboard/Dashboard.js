// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProductsByCount } from '../../../state/actions/product';
import AdminLayout from '../AdminLayout';
// import SingleProduct from '../product/SingleProduct';

// // * styles
// import { 
//     StyledProducts,
//     StyledPageHeader,
//     Loader,
// } from './styles';

// // * @antd
// import Row from 'antd/lib/row';
// import Result from 'antd/lib/result';
// import { LoadingOutlined } from '@ant-design/icons';

const Dashboard = () => {
    // const dispatch = useDispatch();

    // // * product state
    // const prodsList = useSelector(state => state.productList);
    // const { loading, error, products } = prodsList;

    // useEffect(() => {
    //     dispatch(getProductsByCount(100));
    // }, [dispatch]);

    // const prodsItems = () => (
    //     <Row gutter={[10, 8]}>
    //         {products?.length === 0 ? (
    //             <StyledPageHeader
    //                 subTitle='No products added yet'
    //             />
    //         ) : products?.map(product => (
    //             <SingleProduct 
    //                 product={product}
    //                 key={product._id}
    //             />
    //         ))}
    //     </Row>
    // )

    return (
        <AdminLayout>
            Admin Dashboard
            {/* <StyledProducts>
                {loading ? (
                    <Loader>
                        <LoadingOutlined spin />
                    </Loader>
                ) : error ? (
                    <Result
                        status='500'
                        subTitle='Sorry, something went wrong.'
                    />
                ) : (
                    prodsItems()
                )}
            </StyledProducts> */}
        </AdminLayout>
    )
}

export default Dashboard;