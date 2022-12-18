import { useTranslation } from 'react-i18next';

const skills = [
	{
		name: "HTML",
		color: "#E34F26"
	},
	{
		name: "CSS",
		color: "#1572B6"
	},
	{
		name: "JavaScript",
		color: "#F7DF1E"
	},
	{
		name: "React",
		color: "#61DAFB"
	},
	{
		name: "Node",
		color: "#339933"
	},
	{
		name: "Express",
		color: "#000000"
	},
	{
		name: "Nextjs",
		color: "#000000"
	},
	{
		name: "Git",
		color: "#F05032"
	},
	{
		name: "Figma",
		color: "#F24E1E"
	}
];


export default function Skills() {
	const { t } = useTranslation();

	return (
		<section id='skills' className="section bg-slate-800 min-h-screen p-4">
			<h2 className="subtitle">{t("skills.title")}</h2>
			<div className='grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))]'>
				{skills.map((skill, index) => (
					<figure key={index + "skills"} className="text-lg text-gray-300 m-2 text-center rounded-md border backdrop-blur-md p-3">
						<div className="relative bg-[var(--bgColor)] aspect-square p-2 rounded-full" style={{ "--bgColor": skill.color.toLowerCase() }}>
							<img title={skill.name} src={`/skills/${skill.name}.svg`} className="w-10 h-10 invert z-10 absolute-center" />
						</div>
						{/* <div className="relative after:absolute after:w-4/5 after:aspect-square after:left-1/2 after:-translate-x-1/2 after:bg-[var(--bgColor)] after:rounded-full after:-top-2.5 -z-20" style={{ "--bgColor": skill.color.toLowerCase() }}>
							<img title={skill.name} src={`/skills/${skill.name}.svg`} className="w-10 h-10 mx-auto invert m-3 relative z-10" />
						</div> */}
						<figcaption>{skill.name}</figcaption>
					</figure>
				))}
			</div>
		</section>
	)
}