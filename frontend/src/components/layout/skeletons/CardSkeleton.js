import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Skeleton from 'antd/lib/skeleton';
import Card from 'antd/lib/card';

const CardSkeleton = ({ count }) => {
    const cards = () => {
        let totalCards = [];

        for (let i = 0; i < count; i++) {
            totalCards.push(
                <Col xs={24} md={12} lg={8}>
                    <Card>
                        <Skeleton active></Skeleton>
                    </Card>
                </Col>
            );
        }

        return totalCards;
    }

    return (
        <Row gutter={[20, 20]}>
            {cards()}
        </Row>
    );
}

export default CardSkeleton;
