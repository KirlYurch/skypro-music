import { Playlist } from "./PlayListFixed.js";
import * as S from './SidebarStyle.js'

export default function Sidebar({ isLoading }) {
    return (
        <S.MainSidebar>
        <S.SidebarPersonal>
          <S.SidebarPersonalName></S.SidebarPersonalName>
          <S.SidebarIcon>
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </S.SidebarIcon>
        </S.SidebarPersonal>
        <S.SidebarBlock>
          <S.SidebarList>
            <Playlist isLoading={isLoading}/>
          </S.SidebarList>
        </S.SidebarBlock>
      </S.MainSidebar>
    );
}