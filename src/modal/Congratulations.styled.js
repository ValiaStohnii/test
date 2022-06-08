import styled from '@emotion/styled'

export const CongratulationsContent = styled.div`
width: 280px;
height: 256px;
display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        width: 394px;
        height: 256px;
    }
`
export const Text = styled.p`
margin-top: 0;
margin-bottom: 24px;
padding-left: 27px;
padding-right: 27px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
text-align: center;
color: #242A37;

@media screen and (min-width: 768px) {
    padding-left: 83px;
padding-right: 83px;
margin-bottom: 24px;
}
`

export const Svg = styled.div`
padding-top: 44px;
margin-bottom: 20px;
display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  color:#FF6B08;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    margin-bottom: 14px;
}
`

export const Icon = styled.img`
width: 54px;
height: 54px;
fill:#FF6B08;
`
export const Done= styled.button`
margin: 0;
padding: 0;

box-sizing: border-box;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #FFFFFF;
text-align: center;
cursor: pointer;

width: 130px;
height: 40px;
background: #FF6B08;
border: 1px solid  #FF6B08;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

&:hover,
  &:focus {
    color: #242A37;
    border: 1px solid #242A37;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 250ms ease;
  }

`