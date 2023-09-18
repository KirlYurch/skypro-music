import * as S from './AudioPlayerStyle.js'

export default function AudioPlayer({ isLoading }) {
  return (
      <S.Bar>
    <S.BarContent>
      <S.BarPlayerProgress />
      <S.BarPlayerBlock>
        <S.BarPlayer>
          <S.PlayerControls>
            <S.PlayerBtnPrev>
              <S.PlayerBtnPrevSVG alt="prev">
                <use xlinkHref="img/icon/sprite.svg#icon-prev" />
              </S.PlayerBtnPrevSVG>
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay>
              <S.PlayerBtnPlaySVG alt="play">
                <use xlinkHref="img/icon/sprite.svg#icon-play" />
              </S.PlayerBtnPlaySVG>
            </S.PlayerBtnPlay>
            <S.PlayerBtnNext>
              <S.PlayerBtnNextSVG alt="next">
                <use xlinkHref="img/icon/sprite.svg#icon-next" />
              </S.PlayerBtnNextSVG>
            </S.PlayerBtnNext>
            <S.PlayerBtnRepeat>
              <S.PlayerBtnRepeatSVG alt="repeat">
                <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
              </S.PlayerBtnRepeatSVG>
            </S.PlayerBtnRepeat>
            <S.PlayerBtnShuffle>
              <S.PlayerBtnShuffleSVG alt="shuffle">
                <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
              </S.PlayerBtnShuffleSVG>
            </S.PlayerBtnShuffle>
          </S.PlayerControls>
          <S.PlayerTrackPlay>
            <S.PlayerTrackPlayContain>
              <S.PlayerTrackPlayImage>
                <S.PlayerTrackPlaySVG alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.PlayerTrackPlaySVG>
              </S.PlayerTrackPlayImage>
              <S.PlayerTrackPlayAuthor>
                {isLoading
                ? <S.PlayerTrackPlayAuthorLoading />
                : <S.PlayerTrackPlayAuthorLink href="#">
                Ты та...
              </S.PlayerTrackPlayAuthorLink>}
              </S.PlayerTrackPlayAuthor>
              <S.PlayerTrackPlayAlbum>
                {isLoading
                ? <S.PlayerTrackPlayAuthorLoading />
                : <S.PlayerTrackPlayAlbumLink href="#">
                Баста
              </S.PlayerTrackPlayAlbumLink>}
              </S.PlayerTrackPlayAlbum>
            </S.PlayerTrackPlayContain>
            <S.TrackLikeDis>
              <S.TrackPlayLike>
                <S.TrackPlayLikeSVG alt="like">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackPlayLikeSVG>
              </S.TrackPlayLike>
              <S.TrackPlayDislike>
                <S.TrackPlayDislikeSVG alt="dislike">
                  <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                </S.TrackPlayDislikeSVG>
              </S.TrackPlayDislike>
            </S.TrackLikeDis>
          </S.PlayerTrackPlay>
        </S.BarPlayer>
        <S.BarVolumeBlock>
          <S.VolumeContent>
            <S.VolumeImage>
              <S.VolumeSVG alt="volume">
                <use xlinkHref="img/icon/sprite.svg#icon-volume" />
              </S.VolumeSVG>
            </S.VolumeImage>
            <S.VolumeProgress>
              <S.VolumeProgressLine
                type="range"
                name="range"
              />
            </S.VolumeProgress>
          </S.VolumeContent>
        </S.BarVolumeBlock>
      </S.BarPlayerBlock>
    </S.BarContent>
  </S.Bar>
  );
}