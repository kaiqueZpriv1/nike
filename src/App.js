/** @format */
import React, { useState } from "react";
import { AiOutlineSearch, AiFillBell, AiOutlineHeart } from "react-icons/ai";
import {
	Header,
	HeaderView,
	NameMarca,
	ContainerSearch,
	Main,
	ContainerMain,
	ContainerVertical,
	TextVertical,
	ContainerPalet,
	PaletBoot,
} from "./styled.js";
import "./assets/style/reset.css";
import "./assets/style/style.css";
function App() {
	const [touchStartX, setTouchStartX] = useState(null);
	const [scrollLeft, setScrollLeft] = useState(0);

	const handleTouchStart = (e) => {
		setTouchStartX(e.touches[0].clientX);
	};

	const handleTouchMove = (e) => {
		if (touchStartX !== null) {
			const touchMoveX = e.touches[0].clientX;
			const scrollAmount = touchStartX - touchMoveX;
			setScrollLeft(scrollLeft + scrollAmount);
			setTouchStartX(touchMoveX);
		}
	};

	const handleTouchEnd = () => {
		setTouchStartX(null);
	};
	return (
		<div className='App'>
			<Header>
				<HeaderView>
					<NameMarca>Discover</NameMarca>
					<ContainerSearch>
						<AiOutlineSearch size={25} />
						<AiFillBell size={25} />
					</ContainerSearch>
				</HeaderView>
			</Header>
			<Main>
				<ContainerMain
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}>
					<h3>Nike</h3>
					<h3>Adidas</h3>
					<h3>Jordan</h3>
					<h3>Puma</h3>
					<h3>Gucci</h3>
				</ContainerMain>
			</Main>
			<ContainerVertical>
				<TextVertical>
					<h3>New</h3>
					<h3>Featured</h3>
					<h3>Upcoming</h3>
				</TextVertical>
				<ContainerPalet
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}>
					<PaletBoot>
						<div className='boot-header'>
							<h3>Nike</h3>
							<AiOutlineHeart size={15} />
						</div>
						<div className='main-boot'>
							<h3>AIR-MAX</h3>
							<span>$130.00</span>
						</div>
						<div className='image-boot'></div>
					</PaletBoot>
					<PaletBoot>
						<div className='boot-header'>
							<h3>Nike</h3>
							<AiOutlineHeart size={15} />
						</div>
						<div className='main-boot'>
							<h3>AIR-MAX</h3>
							<span>$130.00</span>
						</div>
						<div className='image-boot'></div>
					</PaletBoot>
					<PaletBoot>
						<div className='boot-header'>
							<h3>Nike</h3>
							<AiOutlineHeart size={15} />
						</div>
						<div className='main-boot'>
							<h3>AIR-MAX</h3>
							<span>$130.00</span>
						</div>
						<div className='image-boot'></div>
					</PaletBoot>
				</ContainerPalet>
			</ContainerVertical>
		</div>
	);
}

export default App;
