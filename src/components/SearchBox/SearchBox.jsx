import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import css from './SearchBox.module.css'

const SearchBox = () => {
  const nameFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (value) => {
    dispatch(changeFilter(value));
  };

    return (
        <div className={css.container}>
        <p className={css.title}>Find contacts by name</p>
        <input className={css.textInput}
        type="text"
        value={nameFilter}
        onChange={(e) => handleFilterChange(e.target.value)}
      />
      </div>
    )
}

export default SearchBox


  