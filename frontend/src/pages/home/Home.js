import { Fragment } from 'react';

import HomePreview from './HomePreview';
import NewArrivals from './NewArrivals';

const Home = () => {
    return (
        <Fragment>
            <HomePreview />
            <div className='container'>
                <NewArrivals />
            </div>
        </Fragment>
    )
}

export default Home;