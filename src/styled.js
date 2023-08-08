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
	margin: 0 25px;
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
	gap: 20px;
`;

export const PaletBoot = styled.div`
	background: #909090;
	width: 240px;
	height: 335px;
	border-radius: 30px;
`;
