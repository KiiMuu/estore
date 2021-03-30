import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSubCategories } from '../../state/actions/subCategory';

// * styles
import { 
    StyledSubCatgeories, 
} from './styles';
import { StyledText, StyledTitle } from '../../pages/home/styles';

// * @antd
import Space from 'antd/lib/space';
import Alert from 'antd/lib/alert';
import Tag from 'antd/lib/tag';
import { LoadingOutlined } from '@ant-design/icons';
import Tooltip from 'antd/lib/tooltip';

const SubCategoryList = () => {
    const dispatch = useDispatch();

    // * categories state
    const subList = useSelector(state => state.subCategoryList);
    const { 
        loading, 
        error, 
        subCategories
    } = subList;
    
    useEffect(() => {
        dispatch(getSubCategories());
    }, [dispatch]);

    const showSubCategoires = () => (
        <Space size={[8, 10]} wrap>
            {subCategories?.length === 0 ? (
                <Alert 
                    message='No sub-categories added yet.' 
                    type='info' 
                    showIcon
                />
            ) : subCategories?.map(sub => (
                <Tooltip 
                    title={`Belongs to ${sub.parent.name}`}
                    color='#059669' 
                    key={sub._id}
                >
                    <Link to={`/sub/${sub.slug}`}>
                        <Tag color='#059669'>{sub.name}</Tag>
                    </Link>
              </Tooltip>
            ))}
        </Space>
    )

    return (
        <StyledSubCatgeories>
            <StyledTitle level={4}>Sub-Categories</StyledTitle>
            <StyledText type='secondary'>
                Here our sub-categories list
            </StyledText>
            {loading ? (
                <LoadingOutlined spin />
            ) : error ? (
                <Alert message={error} type='error' showIcon />
            ) : (
                showSubCategoires()
            )}
        </StyledSubCatgeories>
    )
}

export default SubCategoryList;