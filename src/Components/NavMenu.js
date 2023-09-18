import { useState } from "react";
import * as S from './NavMenuStyles.js'

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

    return (
        <S.MainNav>
        <S.NavLogo>
          <S.LogoImage src="img/logo.png" alt="logo" />
        </S.NavLogo>
        <S.NavBurger onClick={toggleOpen}>
          <S.BurgerLine />
          <S.BurgerLine />
          <S.BurgerLine />
        </S.NavBurger>

        {open ? <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink href="#">
                Главное
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="#">
                Мой плейлист
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="#">
                Войти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu> : null}
      </S.MainNav>
    );
}