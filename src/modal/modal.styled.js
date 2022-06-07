import styled from '@emotion/styled'

export const Overlay = styled.div`
position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(43, 43, 43, 0.1);
    z-index: 1200;
    opacity: 1;
  transition: opacity 250ms var(--cubic);
`

export const Modals= styled.div`
background: #FFFFFF;
box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
`

export const Content = styled.div`
padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  

background: #FFFFFF;
box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);

`

export const Title = styled.p`
padding:0px;
margin-top: 0;
margin-bottom: 20px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #242A37;

@media screen and (min-width: 768px) {
  margin-bottom: 12px;
}
`
export const Stars = styled.div`
margin-bottom:20px;
position: relative;
font-size: 18px;
color: #A6ABB9;
::before{
  content: '☆☆☆☆☆'
}
`
export const Resume = styled.p`
margin-top: 0;
margin-bottom: 8px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #242A37;

@media screen and (min-width: 768px) {
  margin-bottom: 12px;
}
`

export const Textarea = styled.textarea`
width: 240px;
height: 170px;
margin-bottom: 20px;
border: 1px solid #A6ABB9;
box-sizing: border-box;
resize: none;
padding:8px;

@media screen and (min-width: 768px) {
  margin-bottom: 28px;
  width: 568px;
height: 170px;
}
`
export const Buttons = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
`

export const Back= styled.button`
margin-top: 0;
padding: 0;
margin-right:16px;
box-sizing: border-box;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #242A37;
text-align: center;
cursor: pointer;

width: 98px;
height: 40px;
border: 1px solid #242A37;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

&:hover,
  &:focus {
    color: #FFFFFF;
    background: #FF6B08;
    border: 1px solid  #FF6B08;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 250ms ease;
  }

@media screen and (min-width: 768px) {
  width: 130px;
height: 40px;
margin-right:28px;
}
`
export const Save= styled.button`
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

width: 98px;
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

@media screen and (min-width: 768px) {
  width: 130px;
height: 40px;

}
`
  