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

export function GetTracks() {
    const trackList = tracks.map(track => 
        <div key={track.id} className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </svg>
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {track.title} 
                <span className="track__title-span">
                {track.version ? track.version : ''}
                </span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
            {track.author}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
            {track.album}
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
            <span className="track__time-text">{track.time}</span>
          </div>
        </div>
      </div> 
        )
        return (
            trackList
        );
}