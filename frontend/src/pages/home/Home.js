import { Fragment } from 'react';

import HomePreview from './HomePreview';
import NewArrivals from './NewArrivals';
import BestSellers from './BestSellers';

const Home = () => {
    return (
        <Fragment>
            <HomePreview />
            <div className='container'>
                <NewArrivals />
                <BestSellers />
            </div>
        </Fragment>
    )
}

export default Home;