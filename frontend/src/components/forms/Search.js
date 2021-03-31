import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SEARCH_QUERY } from '../../state/constants/product';

// * styles
import {
    Form,
    SearchInput,
} from './styles';

const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const querySearching = useSelector(state => state.searchQuery);
    const { text } = querySearching;

    const handleChange = e => {
        dispatch({
            type: SEARCH_QUERY,
            payload: {
                text: e.target.value,
            }
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        history.push(`/shop?${text}`);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <SearchInput
                type='search'
                inputMode='text'
                placeholder='Search for products'
                value={text}
                onChange={handleChange}
            />
        </Form>
    )
}

export default Search;