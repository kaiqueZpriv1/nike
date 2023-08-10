/** @format */

import styled from "styled-components";

export const Header = styled.header`
	background: #ebebeb;
`;

export const HeaderView = styled.div`
	margin: 10px 0 0 25px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NameMarca = styled.h3`
	color: #212121;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-size: 8vw;
`;

export const ContainerSearch = styled.div`
	display: flex;
	gap: 20px;
`;

export const Main = styled.main`
	margin-top: 20px;
`;

export const ContainerMain = styled.div`
	display: flex;
	align-items: center;
	white-space: nowrap;
	overflow-x: auto;
	margin: 0 0 0 25px;
	gap: 15px;
	h3 {
		border: none;
		background: transparent;
		font-size: 6vw;
		font-weight: 800;
		font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
			"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
		color: rgba(170, 170, 170, 1);
		cursor: pointer;
	}
`;
export const ContainerProdutos = styled.div``;

export const ContainerVertical = styled.div`
	display: flex;
	margin: 20px 0;
	display: flex;
	align-items: center;
`;

export const TextVertical = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
	transform: rotate(-180deg);
	margin: 0 20px 0 25px;
	h3 {
		writing-mode: vertical-lr;
		word-spacing: 5px;
		text-orientation: mixed;
		line-height: 25px;
		white-space: nowrap;
		font-size: 7vw;
		font-weight: 800;
		font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
			"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
		color: rgba(170, 170, 170, 1);
		cursor: pointer;
	}
`;
export const ContainerPaletOuter = styled.div`
	display: flex;
	align-items: center;
	overflow-x: auto;
`;

export const ContainerPalet = styled.div`
	display: flex;
	align-items: center;
	gap: 45px;
`;

export const PaletBoot = styled.div`
	width: 250px;
	height: 350px;
	border-radius: 30px;
`;

export const HeaderBoot = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 10px 10px 0 10px;
	color: #fff;
	font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
		"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
	h3 {
		font-size: 5%.5;
		font-weight: 400;
	}
`;

export const SubHeader = styled.div`
	display: flex;
	flex-direction: column;
	color: #fff;
	margin: 5px 10px 0 10px;
	h3 {
		font-size: 7vw;
		font-weight: 500;
		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
		letter-spacing: 2px;
	}
	span {
		margin-top: 5px;
		font-size: 4.5vw;
		font-weight: 300;
		font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
			"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
	}
`;
export const ImageTenis = styled.div`
	position: relative;
	right: 15px;
	img {
		transform: rotate(-35deg);
		z-index: 9;
		width: 300px;
	}
`;
export const FooterBoot = styled.div`
	margin: 5px;
	position: relative;
	top: 50px;
	left: 205px;
`;
export const PaletLine = styled.div`
	margin: 20px 0 0 10px;
`;
export const ContainerLine = styled.div`
	display: flex;
	align-items: center;
	overflow-x: auto;
`;
export const HeaderOutLine = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 20px 15px;
	h3 {
		font-size: 6vw;
		font-weight: 600;
		font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
			"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
	}
`;
export const ContainerLineOutput = styled.div`
	display: flex;
	gap: 20px;
`;
export const BoxLine = styled.div`
	border-radius: 10px;
	width: 210px;
	height: 220px;
	background: #fafafa;
	.containerLine {
		display: flex;
		flex-direction: column;
		.headerLine {
			display: flex;
			.iconCoracao {
				position: relative;
				left: 140px;
				top: 10px;
			}
		}
	}
`;
export const VerticalLine = styled.div`
	background: rgba(255, 0, 0, 1);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transform: rotate(-180deg);
	width: 30px;
	height: 80px;
	h3 {
		writing-mode: vertical-lr;
		word-spacing: 5px;
		text-orientation: mixed;
		white-space: nowrap;
		font-size: 5vw;
		font-weight: 500;
		font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
			"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
		color: #fff;
	}
`;

export const ImageLine = styled.div`
	position: relative;
	bottom: 25px;
	left: 15px;
	img {
		width: 180px;
		transform: rotate(-10deg);
	}
`;

export const TextLine = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
`;
