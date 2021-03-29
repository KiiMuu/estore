import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Skeleton from 'antd/lib/skeleton';
import Card from 'antd/lib/card';
import { Fragment } from 'react';

const ProductSkeleton = ({ count }) => {
    const cards = () => {
        let totalCards = [];

        for (let i = 0; i < count; i++) {
            totalCards.push(
                <Col xs={24} md={12} key={i}>
                    <Card>
                        <Skeleton active></Skeleton>
                    </Card>
                </Col>
            );
        }

        return totalCards;
    }

    return (
        <Fragment>
            <Row gutter={[20, 20]}>
                {cards()}
            </Row>
            <Row gutter={[20, 20]}>
                <Col xs={24} md={12}>
                    <Card>
                        <Skeleton active></Skeleton>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
}

export default ProductSkeleton;