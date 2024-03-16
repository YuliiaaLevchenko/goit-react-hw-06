import css from './SearchBox.module.css'

const SearchBox = ({ value, onChange }) => {
    return (
        <div className={css.container}>
        <p className={css.title}>Find contacts by name</p>
        <input className={css.textInput}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      </div>
    )
}

export default SearchBox


     