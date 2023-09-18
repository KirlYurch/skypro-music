import * as S from './FilterStyle.js'

export default function Filter ({ type, filterName, isActive, onShow, onHide }) {
    
    const filterList = filterName.map((item, index) =>
        // eslint-disable-next-line react/no-array-index-key
        <S.FilterItem key={index}>{item}</S.FilterItem>)

    return (
        <S.FilterButton $isActive={isActive} className='_btn-text' onClick={isActive ? onHide : onShow} type='button'>
            {type}
            {isActive ? <S.FilterOption>
            {filterList}
            </S.FilterOption> : ''}
        </S.FilterButton>)  
}