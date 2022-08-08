import styled from "styled-components";

export const AuthorSlug = styled.div`
  font-size: 20px;
  color: white;
  font-family: 'Kanit', sans-serif;
  font-weight: 300;
`;

export const Div = styled.div`
  background-color: #413f42;
  width: 100%;
  height: 250px;
`;

export const ToogleOne = styled.div`
, height: 25 px;
  color: white;
  font-size: 20px;
  display: ${props => (props.toggle ? 'block' : 'none')};
`;

export const ToogleTwo = styled.div`
, height: 25 px;
  color: white;
  font-size: 20px;
  display: ${props => (props.toggle ? 'none' : 'block')};
`;

export const Avatar = styled.img`
  padding-top: 10px;
  width: 150px;
  height: 150px;
`;

export const ImgEdit = styled.img`
  padding-top: 4px;
  padding-left: 5px;
  width: 17px;
  height: 17px;
`;

export const ImgOk = styled.img`
  padding-top: 4px;
  padding-left: 5px;
  width: 17px;
  height: 17px;
`;