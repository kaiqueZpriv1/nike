/** @format */

import styled from "styled-components";

export const Header = styled.header`
	background: rgba(255, 255, 255, 1);
`;

export const HeaderView = styled.div`
	margin: 10px;
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
	margin-top: 30px;
`;

export const ContainerMain = styled.div`
	display: flex;
	align-items: center;
	white-space: nowrap;
	overflow-x: auto;
	margin: 25px 20px;
	gap: 20px;
	h3 {
		border: none;
		background: transparent;
		font-size: 7vw;
		font-weight: 800;
		font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
			"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
		color: rgba(170, 170, 170, 1);
		cursor: pointer;
	}
`;

export const ContainerVertical = styled.div`
	display: flex;
	margin: 30px 0;
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
