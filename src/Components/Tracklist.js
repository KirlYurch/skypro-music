import { useState } from "react";
import Filter from "./Filter";
import { GetTracks } from "./Track";
import * as S from './TracklistStyle.js'

const genres = ['Рок', 'Техно', 'Поп', 'Металл', 'Панк-рок'];
const years = [1992, 1993, 1994];
const author = ['Nero','Dynoro, Outwork, Mr.Gee', 'Ali Bakgor', 'Стоункат, Psychopath', 'Jaded, Will Clarke, AR/CO', 'Blue Foundation, Zeds Dead']

export default function Tracklist({ isLoading }) {
    
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <S.MainCenterBlock>
        <S.CenterBlockSearch>
          <S.SearchSVG>
            <use xlinkHref="img/icon/sprite.svg#icon-search" />
          </S.SearchSVG>
          <S.SearchText
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </S.CenterBlockSearch>
        <S.CenterblockH2>Треки</S.CenterblockH2>
        <S.CenterblockFilter >
        <S.FilterTitle>Искать по:</S.FilterTitle>
          <Filter type='исполнителю' filterName={author} isActive={activeIndex === 1} onShow={() => setActiveIndex(1)} onHide={() => setActiveIndex(0)} />
          <Filter type='году выпуска' filterName={years} isActive={activeIndex === 2} onShow={() => setActiveIndex(2)} onHide={() => setActiveIndex(0)} />
          <Filter type='жанру' filterName={genres} isActive={activeIndex === 3} onShow={() => setActiveIndex(3)} onHide={() => setActiveIndex(0)} />          
        </S.CenterblockFilter>
        <S.CenterblockContent>
          <S.ContentTitle>
            <S.PlaylistTitleCol01>Трек</S.PlaylistTitleCol01>
            <S.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
            <S.PlaylistTitleCol03>АЛЬБОМ</S.PlaylistTitleCol03>
            <S.PlaylistTitleCol04>
              <S.PlaylistTitleSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-watch" />
              </S.PlaylistTitleSvg>
            </S.PlaylistTitleCol04>
          </S.ContentTitle>
          <S.ContentPlaylist>
            <GetTracks isLoading={isLoading}/>
          </S.ContentPlaylist>
        </S.CenterblockContent>
      </S.MainCenterBlock>
    );
}