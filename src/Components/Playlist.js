import * as S from './PlayListStyle.js'

export const playlists = [{
    id: 0,
    name: "day's playlist",
    img: "img/playlist01.png"
}, {
    id: 1,
    name: "top 100 hits",
    img: "img/playlist02.png"
}, {
    id: 2,
    name: "indi",
    img: "img/playlist03.png"
}]


export function Playlist({ isLoading }) {

    const playlistItems = playlists.map(playlistItem => 
        <S.SidebarItem key={playlistItem.id}>
            <S.SidebarLink href="http://">
                {isLoading ? <S.ImgLoading/> : <S.Img
                  src={playlistItem.img}
                  alt={playlistItem.name}
                />}
            </S.SidebarLink>
        </S.SidebarItem>
        )

    return (
        playlistItems
    );
}