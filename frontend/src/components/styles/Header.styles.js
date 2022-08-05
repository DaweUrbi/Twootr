import styled from "styled-components";

export const AuthorSlug = styled.div`
	font-size: 15px;
	color: white;
	font-family: 'Kanit', sans-serif;
    font-weight: 300;
`;

export const Div = styled.div`
	background-color: #413f42;
	width: 100%; 
	height: 170px;
`;

export const ToogleOne = styled.div`
, 	height: 25px;
	color: white;
	display: ${props => (props.toggle ? 'block' : 'none')};
`;

export const ToogleTwo = styled.div`
, 	height: 25px;
	color: white;
	display: ${props => (props.toggle ? 'none' : 'block')};
`;

export const Avatar = styled.img`
	padding-top: 10px;
	width: 100px;
	height: 100px;
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