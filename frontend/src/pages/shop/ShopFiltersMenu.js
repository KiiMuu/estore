import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_QUERY } from '../../state/constants/product';
import { searchProducts } from '../../state/actions/product';
import { getCategories } from '../../state/actions/category';

// * styled
import {
    ListItem,
    StyledSider,
    FilterHeading,
    CheckBoxItem,
} from './styles';

// * @antd
import Slider from 'antd/lib/slider';
import Menu from 'antd/lib/menu';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { 
    CheckSquareOutlined,
    DollarOutlined,
    LoadingOutlined,
} from '@ant-design/icons';
import Alert from 'antd/lib/alert';

const { SubMenu } = Menu;

const ShopFiltersMenu = ({ setShopProds }) => {
    const [price, setPrice] = useState([0, 0]);
    const [ok, setOk] = useState(false);
    const [categoriesIds, setCategoriesIds] = useState([]);

    const dispatch = useDispatch();

    const fecthFilteredProds = arg => {
        searchProducts(arg).then(res => {
            setShopProds(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    // * price filtering
    useEffect(() => {
        fecthFilteredProds({ price });
        // execute when ok is true
        // eslint-disable-next-line
    }, [ok]);

    const handleSliderChange = val => {
        dispatch({
            type: SEARCH_QUERY,
            payload: {
                text: '',
            }
        });

        setCategoriesIds([]);
        setPrice(val);

        setTimeout(() => {
            setOk(!ok);
        }, 300);
    }

    // * category filtering
    const catsList = useSelector(state => state.categoryList);
    const { 
        loading: categoryLoading, 
        error: categoryError, 
        categories
    } = catsList;
    
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const showCategories = () => (
        categories?.map(category => (
            <CheckBoxItem key={category._id}>
                <Checkbox 
                    value={category._id} 
                    checked={categoriesIds.includes(category._id)}
                    onChange={handleCheckChange}
                    name='category'>
                        {category.name}
                </Checkbox>
            </CheckBoxItem>
        ))
    )

    const handleCheckChange = e => {
        dispatch({
            type: SEARCH_QUERY,
            payload: {
                text: '',
            }
        });

        setPrice([0, 0]);

        let inTheState = [...categoriesIds];
        let checkedCategory = e.target.value;
        let foundInTheState = inTheState.indexOf(checkedCategory); // * true or -1

        if (foundInTheState === -1) {
            inTheState.push(checkedCategory);
        } else {
            inTheState.splice(foundInTheState, 1);
        }

        setCategoriesIds(inTheState);

        fecthFilteredProds({ category: inTheState });
    }

    return (
        <StyledSider
            breakpoint='md'
            collapsedWidth='0'
        >
            <FilterHeading>Filter Products</FilterHeading>
            <Menu
                mode='inline'
                defaultOpenKeys={['1', '2']}
            >
                <SubMenu icon={<DollarOutlined />} title='Price' key='1'>
                    <ListItem>
                        <Slider 
                            tipFormatter={v => `$${v}`} 
                            range 
                            value={price} 
                            onChange={handleSliderChange}
                            max='5000'
                        />
                    </ListItem>
                </SubMenu>
                <SubMenu icon={<CheckSquareOutlined />} title='Categories' key='2'>
                    <ListItem>
                        {categoryLoading ? (
                            <LoadingOutlined 
                                style={{ 
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '1rem' 
                                }} 
                                spin 
                            />  
                        ) : categoryError ? (
                            <Alert message={categoryError} type='error' showIcon />
                        ) : (
                            showCategories()
                        )}
                    </ListItem>
                </SubMenu>
            </Menu>
        </StyledSider>
    )
}

export default ShopFiltersMenu;