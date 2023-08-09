/** @format */
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
	PaletBoot,
	HeaderBoot,
	ContainerPalet,
	SubHeader,
	ImageTenis,
	FooterBoot,
} from "../../styled";
import tenis1 from "../image/nike1.png";
import tenis2 from "../image/nike2.png";
import tenis3 from "../image/nike3.png";
import tenis4 from "../image/nike4.png";
import tenis5 from "../image/nike5.png";
import tenis6 from "../image/nike6.png";
import tenis7 from "../image/nike7.png";
import tenis8 from "../image/nike8.png";

const configTenis = [
	{
		id: 1,
		image: tenis1,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130.00",
		background: "#e32636",
	},
	{
		id: 2,
		image: tenis2,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130.00",
		background: "#48724f",
	},
	{
		id: 3,
		image: tenis3,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130.00",
		background: "#f400a1",
	},
	{
		id: 4,
		image: tenis4,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130.00",
		background: "#d3d3d3",
	},
	{
		id: 5,
		image: tenis5,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130.00",
		background: "#054f77",
	},
	{
		id: 6,
		image: tenis6,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130.00",
		background: "#dcdcdc",
	},
	{
		id: 7,
		image: tenis7,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130.00",
		background: "#deb887",
	},
	{
		id: 8,
		image: tenis8,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130.00",
		background: "#dcdcdc",
	},
];

function TenisComponent() {
	const listTenis = configTenis.map((tenis) => (
		<PaletBoot key={tenis.id} style={{ background: tenis.background }}>
			<HeaderBoot>
				<h3>{tenis.marca}</h3>
				<AiOutlineHeart size={25} />
			</HeaderBoot>
			<SubHeader>
				<h3>{tenis.name}</h3>
				<span>{tenis.value}</span>
			</SubHeader>
			<ImageTenis>
				<img src={tenis.image} alt='tenis' />
			</ImageTenis>
			<FooterBoot>
				<BsFillArrowRightCircleFill size={30} color='#fff' />
			</FooterBoot>
		</PaletBoot>
	));
	return <ContainerPalet>{listTenis}</ContainerPalet>;
}

export default TenisComponent;
