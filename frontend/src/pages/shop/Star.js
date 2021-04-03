import { Fragment } from 'react'

// * @antd
import Rate from 'antd/lib/rate';

const Star = ({ starClick, star }) => {
    return <Fragment>
        <Rate
            onChange={val => starClick(val)} 
            value={star}
        />
    </Fragment>
}

export default Star;