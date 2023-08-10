/** @format */
import React, { useState } from "react";
import {
	AiOutlineSearch,
	AiFillBell,
	AiOutlineArrowRight,
	AiOutlineHome,
	AiOutlineShoppingCart,
	AiOutlineUser,
} from "react-icons/ai";
import TenisPallet from "./assets/components/TenisComponent.js";
import ItensComponents from "./assets/components/Home_Components.js";
import {
	Header,
	HeaderView,
	NameMarca,
	ContainerSearch,
	Main,
	ContainerMain,
	ContainerVertical,
	TextVertical,
	ContainerPaletOuter,
	HeaderOutLine,
	PaletLine,
	ContainerLine,
	Footer,
	ContentFooter,
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
					<h3>Mizuno</h3>
				</ContainerMain>
			</Main>
			<ContainerVertical>
				<TextVertical>
					<h3>New</h3>
					<h3>Featured</h3>
					<h3>Upcoming</h3>
				</TextVertical>
				<ContainerPaletOuter
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}>
					<TenisPallet />
				</ContainerPaletOuter>
			</ContainerVertical>
			<PaletLine>
				<HeaderOutLine>
					<h3>More</h3>
					<AiOutlineArrowRight size={30} />
				</HeaderOutLine>
				<ContainerLine
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}>
					<ItensComponents />
				</ContainerLine>
			</PaletLine>
			<Footer>
				<ContentFooter>
					<button className='btn-home'>
						<AiOutlineHome size={30} />
					</button>
					<button className='btn-home'>
						<AiOutlineShoppingCart size={30} />
					</button>
					<button className='btn-home'>
						<AiOutlineUser size={30} />
					</button>
				</ContentFooter>
			</Footer>
		</div>
	);
}

export default App;
