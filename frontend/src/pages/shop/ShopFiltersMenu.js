import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SEARCH_QUERY } from '../../state/constants/product';
import { searchProducts } from '../../state/actions/product';

// * styled
import {
    ListItem,
    StyledSider,
    FilterHeading,
} from './styles';

// * @antd
import Slider from 'antd/lib/slider';
import Menu from 'antd/lib/menu';
import { 
    DollarOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const ShopFiltersMenu = ({ shopProds, setShopProds }) => {
    const [price, setPrice] = useState([0, 0]);
    const [ok, setOk] = useState(false);

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

        setPrice(val);

        setTimeout(() => {
            setOk(!ok);
        }, 300);
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
            </Menu>
        </StyledSider>
    )
}

export default ShopFiltersMenu;