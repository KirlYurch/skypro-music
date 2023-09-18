import { styled } from "styled-components";


export const SidebarItem = styled.div`
width: 250px;
height: 150px;

&:not(:last-child) {
    margin-bottom: 30px;
}
`

export const SidebarLink = styled.a`
width: 100%;
height: 100%;
`

export const ImgLoading = styled.div`
width: 250px;
height: 150px;
background: #313131;
`

export const Img = styled.img`
width: 100%;
height: auto;

&:hover {
  border-radius: 2%;
  box-shadow: 0 0 0 3px #0080c1;
  transition: all 0.3s ease;
}
`
