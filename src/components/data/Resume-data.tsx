import ReactLogo from '../../../public/images/reactbiglogo.png'
import JavaScriptLogo from '../../../public//images/jsssssssssssssssssss.jpg';
import CsslLogo from '../../../public//images/htmlbiglogo.png';
import HtmllLogo from '../../../public//images/cssbiglogo.jpg';
import TypeScriptLogo from '../../../public//images/typescriptbiglogo.png';
import TailwindLogo from '../../../public//images/tailwindbiglogo.png';

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

interface Funny {
    Timer: number
    Description: string
}

export const funnies: Funny[] = [
    {
        Timer: 601,
        Description: 'Gaming hours',
    },
    {
        Timer: 2001,
        Description: 'Book pages read',
    },
    {
        Timer: 1361,
        Description: 'Hours learning to code',
    },
    {
        Timer: 721,
        Description: 'Coffees drunk',
    },
    {
        Timer: 121,
        Description: 'Km run',
    }
]