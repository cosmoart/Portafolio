import techs from './techs.json'

const skills = []
for (const tech in techs) {
	if (techs[tech].skills) skills.push(techs[tech])
}

export default skills
