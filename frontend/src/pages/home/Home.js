import { Fragment } from 'react';

import HomePreview from './HomePreview';
import NewArrivals from './NewArrivals';
import BestSellers from './BestSellers';
import CategoryList from '../../components/category/CategoryList';

const Home = () => {
    return (
        <Fragment>
            <HomePreview />
            <div className='container'>
                <NewArrivals />
                <BestSellers />
                <CategoryList />
            </div>
        </Fragment>
    )
}

export default Home;