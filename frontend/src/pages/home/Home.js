import { Fragment } from 'react';

import HomePreview from './HomePreview';
import NewArrivals from './NewArrivals';
import BestSellers from './BestSellers';
import TopRated from './TopRated';
import CategoryList from '../../components/category/CategoryList';
import SubCategoryList from '../../components/sub-category/SubCategoryList';

const Home = () => {
    return (
        <Fragment>
            <HomePreview />
            <div className='container'>
                <NewArrivals />
                <TopRated />
                <BestSellers />
                <CategoryList />
                <SubCategoryList />
            </div>
        </Fragment>
    )
}

export default Home;