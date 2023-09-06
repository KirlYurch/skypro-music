export default function Filter ({ type, filterName, isActive, onShow, onHide }) {
    
    const filterList = filterName.map((item, index) =>
        // eslint-disable-next-line react/no-array-index-key
        <option className="filter__item" key={index}>{item}</option>)

    return (
        <div onClick={isActive ? onHide : onShow} type='button' className={isActive ? "filter__button filter__button_active button-author" : "filter__button button-author _btn-text"}>
            {type}
            {isActive ? <div className="filter__option">
            {filterList}
            </div> : ''}
        </div>)  
}