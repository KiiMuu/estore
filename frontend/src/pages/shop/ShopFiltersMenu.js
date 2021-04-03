import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_QUERY } from '../../state/constants/product';
import { getProductsByCount, searchProducts } from '../../state/actions/product';
import { getCategories } from '../../state/actions/category';
import { getSubCategories } from '../../state/actions/subCategory';
import Star from './Star';

// * styled
import {
    ListItem,
    StyledSider,
    FilterHeading,
    CheckBoxItem,
    ResetFilter,
} from './styles';

// * @antd
import Slider from 'antd/lib/slider';
import Menu from 'antd/lib/menu';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import Radio from 'antd/lib/radio'
import Space from 'antd/lib/space';
import Tag from 'antd/lib/tag';
import Alert from 'antd/lib/alert';
import { 
    BgColorsOutlined,
    CheckSquareOutlined,
    DollarOutlined,
    GiftOutlined,
    LoadingOutlined,
    SettingOutlined,
    SplitCellsOutlined,
    StarOutlined,
    TransactionOutlined,
} from '@ant-design/icons';
import Button from 'antd/lib/button';

const { SubMenu } = Menu;

const ShopFiltersMenu = ({ setShopProds }) => {
    const [price, setPrice] = useState([0, 0]);
    const [ok, setOk] = useState(false);
    const [categoriesIds, setCategoriesIds] = useState([]);
    const [star, setStar] = useState(0);
    const [subCategory, setSubCategory] = useState('');
    const [colors] = useState(['Black', 'White', 'Brown', 'Silver', 'Blue']);
    const [brands] = useState(['Apple', 'Samsung', 'Dell', 'Acer', 'Microsoft']);
    const [color, setColor] = useState('');
    const [brand, setBrand] = useState('');
    const [shipping, setShipping] = useState('');

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
        setStar(0);
        setSubCategory('');
        setBrand('');
        setColor('');
        setShipping('');

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
        dispatch(getSubCategories());
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
        setStar(0);
        setSubCategory('');
        setColor('');
        setBrand('');
        setShipping('');

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

    // * star filtering
    const handleStarClick = num => {
        dispatch({
            type: SEARCH_QUERY,
            payload: {
                text: '',
            }
        });

        setPrice([0, 0]);
        setCategoriesIds([]);
        setBrand('');
        setColor('');
        setShipping('');
        setStar(num);

        fecthFilteredProds({ stars: num });
    }

    // * sub-categories filtering
    const subCatsList = useSelector(state => state.subCategoryList);
    const { 
        loading: subsLoading, 
        error: subsError, 
        subCategories
    } = subCatsList;

    const handleSubs = sub => {
        dispatch({
            type: SEARCH_QUERY,
            payload: {
                text: '',
            }
        });

        setPrice([0, 0]);
        setCategoriesIds([]);
        setStar(0);
        setBrand('');
        setColor('');
        setShipping('');
        setSubCategory(sub);

        fecthFilteredProds({ sub });
    }

    const showSubs = () => (
        <Space size={[8, 10]} wrap>
            {subCategories?.map(sub => (
                <Tag 
                    key={sub._id} 
                    onClick={() => handleSubs(sub)}
                    title={subCategory}
                    color='#555'
                    style={{ cursor: 'pointer' }}
                >
                    {sub.name}
                </Tag>
            ))}
        </Space>
    )

    // * brands filtering
    const handleBrandChange = e => {
        dispatch({
            type: SEARCH_QUERY,
            payload: {
                text: '',
            }
        });

        setPrice([0, 0]);
        setCategoriesIds([]);
        setStar(0);
        setSubCategory('');
        setColor('');
        setShipping('');
        setBrand(e.target.value)

        fecthFilteredProds({ brand: e.target.value });
    }

    const showBrands = () => (
        brands.map(b => (
            <Radio 
                value={b} 
                name={b} 
                checked={b === brand} 
                onChange={handleBrandChange}
                style={{ display: 'block' }}
            >
                {b}
            </Radio>
        ))
    )

    // * colors filtering
    const handleColorChange = e => {
        dispatch({
            type: SEARCH_QUERY,
            payload: {
                text: '',
            }
        });

        setPrice([0, 0]);
        setCategoriesIds([]);
        setStar(0);
        setSubCategory('');
        setBrand('');
        setShipping('');
        setColor(e.target.value);

        fecthFilteredProds({ color: e.target.value });
    }

    const showColors = () => (
        colors.map(c => (
            <Radio 
                value={c} 
                name={c} 
                checked={c === color} 
                onChange={handleColorChange}
                style={{ display: 'block' }}
            >
                {c}
            </Radio>
        ))
    )

    // * shipping filtering
    const handleShippingChange = e => {
        dispatch({
            type: SEARCH_QUERY,
            payload: {
                text: '',
            }
        });

        setPrice([0, 0]);
        setCategoriesIds([]);
        setStar(0);
        setSubCategory('');
        setBrand('');
        setColor('');
        setShipping(e.target.value);

        fecthFilteredProds({ shipping: e.target.value });
    }

    const showShipping = () => (
        <Fragment>
            <Radio 
                onChange={handleShippingChange} 
                value='Yes' 
                checked={shipping === 'Yes'} 
            >Yes</Radio>
            <Radio 
                onChange={handleShippingChange} 
                value='No' 
                checked={shipping === 'No'} 
            >No</Radio>
        </Fragment>
    )

    const resetFiltering = () => {
        setPrice([0, 0]);
        setCategoriesIds([]);
        setStar(0);
        setSubCategory('');
        setBrand('');
        setColor('');
        setShipping('');

        dispatch(getProductsByCount(12));
    }

    return (
        <StyledSider
            breakpoint='md'
            collapsedWidth='0'
        >
            <FilterHeading>
                <SettingOutlined /> Filter Products
            </FilterHeading>
            <Menu
                mode='inline'
                defaultOpenKeys={['1', '3', '7']}
            >
                <SubMenu icon={<DollarOutlined style={{ color: 'darkgoldenrod' }} />} title='Price' key='1'>
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
                <SubMenu icon={<CheckSquareOutlined style={{ color: 'green' }} />} title='Categories' key='2'>
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
                <SubMenu icon={<StarOutlined style={{ color: 'orangered' }} />} title='Rating' key='3'>
                    <ListItem>
                        <Star starClick={handleStarClick} star={star} />
                    </ListItem>
                </SubMenu>
                <SubMenu icon={<SplitCellsOutlined style={{ color: 'green' }} />} title='Sub-categories' key='4'>
                    <ListItem>
                        {subsLoading ? (
                            <LoadingOutlined 
                                style={{ 
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '1rem' 
                                }} 
                                spin 
                            />  
                        ) : subsError ? (
                            <Alert message={subsError} type='error' showIcon />
                        ) : (
                            showSubs()
                        )}
                    </ListItem>
                </SubMenu>
                <SubMenu icon={<GiftOutlined style={{ color: 'purple' }} />} title='Brands' key='5'>
                    <ListItem>
                        {showBrands()}
                    </ListItem>
                </SubMenu>
                <SubMenu icon={<BgColorsOutlined style={{ color: 'fuchsia' }} />} title='Colors' key='6'>
                    <ListItem>
                        {showColors()}
                    </ListItem>
                </SubMenu>
                <SubMenu icon={<TransactionOutlined style={{ color: 'darkorchid' }} />} title='Shipping' key='7'>
                    <ListItem>
                        {showShipping()}
                    </ListItem>
                </SubMenu>
            </Menu>
            <ResetFilter>
                <Button type='primary' onClick={resetFiltering}>Reset</Button>
            </ResetFilter>
        </StyledSider>
    )
}

export default ShopFiltersMenu;