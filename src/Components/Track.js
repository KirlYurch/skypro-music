import * as S from './TrackStyle.js'

export const tracks = [{
    id: 0,
    title: "Guilt",
    version: "",
    author: "Nero",
    album: "Welcome Reality",
    time: "4:44"
}, {
    id: 1,
    title: "Elektro",
    version: "",
    author: "Dynoro, Outwork, Mr.Gee",
    album: "Elektro",
    time: "2:22"
}, {
    id: 2,
    title: "I'm Fire",
    version: "",
    author: "Ali Bakgor",
    album: "I'm Fire",
    time: "2:22"
}, {
    id: 3,
    title: "Non Stop",
    version: " (Remix)",
    author: "Стоункат, Psychopath",
    album: "Non Stop",
    time: "4:12"
}, {
    id: 4,
    title: "Run Run",
    version: " (feat.AR/CO)",
    author: "Jaded, Will Clarke, AR/CO",
    album: "Run Run",
    time: "2:54"
}, {
    id: 5,
    title: "Eyes on Fire",
    version: " (Zeds Dead Remix)",
    author: "Blue Foundation, Zeds Dead",
    album: "Eyes on Fire",
    time: "5:20"
}, {
    id: 6,
    title: "Mucho Bien",
    version: " (Hi Profile Remix)",
    author: "HYBIT, Mr.Black, Offer Nissim, Hi Profile",
    album: "Mucho Bien",
    time: "3:41"
}, {
    id: 7,
    title: "Knives n Cherries",
    version: "",
    author: "minrhaze",
    album: "Captivating",
    time: "1:48"
}, {
    id: 8,
    title: "How Deep Is Your Love",
    version: "",
    author: "Calvin Harris, Disciples",
    album: "How Deep Is You Love",
    time: "3:32"
}, {
    id: 9,
    title: "Morena",
    version: "",
    author: "Tom Boxer",
    album: "Soundz Made in Romania",
    time: "3:36"
}]




export function GetTracks({ isLoading }) {
  const trackList = tracks.map(track => 
      <S.PlayListItem key={track.id}>
      <S.PlayListTrack>
        <S.TrackTitle>
        <div>
          {isLoading ? <S.TrackTitleImageLoading /> : <S.TrackTitleImage>
           <S.TrackTitleSVG alt="music">
             <use xlinkHref="img/icon/sprite.svg#icon-note"/>
           </S.TrackTitleSVG>
         </S.TrackTitleImage>}
        </div>
        {isLoading ? <S.TrackTitleTextLoading /> : <S.TrackTitleText>
            <S.TitleLink  href="#">
              {track.title} 
              <S.TrackTitleSpan>
              {track.version ? track.version : ''}
              </S.TrackTitleSpan>
            </S.TitleLink>
          </S.TrackTitleText> }
        </S.TrackTitle>
        {isLoading 
        ? <S.TrackAuthorLoading /> 
        : <S.TrackAuthor>
          <S.TrackAuthorLink href="#">
          {track.author}
          </S.TrackAuthorLink>
        </S.TrackAuthor> }
       
        <S.TrackAlbum>
          {isLoading
          ? <S.TrackAlbumLinkLoading />
          : <S.TrackAlbumLink href="#">
            {track.album}
            </S.TrackAlbumLink>}     
        </S.TrackAlbum>
        {isLoading ? '' : <S.TrackTime>
          <S.TrackTimeSVG alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.TrackTimeSVG>
          <S.TrackTimeText>{track.time}</S.TrackTimeText>
        </S.TrackTime> }         
      </S.PlayListTrack>
    </S.PlayListItem> 
      )
      return (
          trackList
      );
}