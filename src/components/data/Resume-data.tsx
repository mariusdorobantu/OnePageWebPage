import ReactLogo from '../../images/reactbiglogo.png';
import JavaScriptLogo from '../../images/jsssssssssssssssssss.jpg';
import CsslLogo from '../../images/htmlbiglogo.png';
import HtmllLogo from '../../images/cssbiglogo.jpg';
import TypeScriptLogo from '../../images/typescriptbiglogo.png';
import TailwindLogo from '../../images/tailwindbiglogo.png';

interface Skill {
    ImageUrl: string
    SkillLevel: string
    Description: string
    TextString: string
}

export const skills: Skill[] = [
    {
        ImageUrl: JavaScriptLogo,
        SkillLevel: "Proficient",
        Description: "Begun to learn in 02/2023",
        TextString: "Let's address the monster in the room! Learn it and all the web is yours.",
    },
    {
        ImageUrl: ReactLogo,
        SkillLevel: "Proficient",
        Description: "Begun to learn in 01/2024",
        TextString: "The fancy way in web development, the most wanted skill to have nowadays.",
    },
    {
        ImageUrl: CsslLogo,
        SkillLevel: "Expert",
        Description: "Begun to learn in 08/2022",
        TextString: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
        ImageUrl: HtmllLogo,
        SkillLevel: "Expert",
        Description: "Begun to learn in 08/2022",
        TextString: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
        ImageUrl: TypeScriptLogo,
        SkillLevel: "Proficient",
        Description: "Begun to learn in 01/2024",
        TextString: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
        ImageUrl: TailwindLogo,
        SkillLevel: "Proficient",
        Description: "Begun to learn in 03/2024",
        TextString: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
];