/** @format */
import { AiOutlineHeart } from "react-icons/ai";
import {
	BoxLine,
	VerticalLine,
	ContainerLineOutput,
	ImageLine,
	TextLine,
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
		image: tenis7,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130.00",
		background: "#deb887",
	},
	{
		id: 2,
		image: tenis6,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130.00",
		background: "#dcdcdc",
	},
	{
		id: 3,
		image: tenis5,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130.00",
		background: "#054f77",
	},
	{
		id: 4,
		image: tenis1,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130.00",
		background: "#e32636",
	},
	{
		id: 5,
		image: tenis2,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130.00",
		background: "#48724f",
	},
	{
		id: 6,
		image: tenis8,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130.00",
		background: "#dcdcdc",
	},
	{
		id: 7,
		image: tenis3,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130.00",
		background: "#f400a1",
	},
	{
		id: 8,
		image: tenis4,
		marca: "NIKE",
		name: "AIR-MAX",
		value: "$130.00",
		background: "#d3d3d3",
	},
];

function Home_Components() {
	const lineBoot = configTenis.map((boot) => (
		<BoxLine key={boot.id}>
			<div className='containerLine'>
				<div className='headerLine'>
					<VerticalLine>
						<h3>NEW</h3>
					</VerticalLine>
					<div className='iconCoracao'>
						<AiOutlineHeart size={25} />
					</div>
				</div>

				<ImageLine>
					<img src={boot.image} alt='tenis' />
				</ImageLine>
				<TextLine>
					<h3>{boot.name}</h3>
					<span>{boot.value}</span>
				</TextLine>
			</div>
		</BoxLine>
	));
	return (
		<ContainerLineOutput className='containerBoot'>
			{lineBoot}
		</ContainerLineOutput>
	);
}

export default Home_Components;
