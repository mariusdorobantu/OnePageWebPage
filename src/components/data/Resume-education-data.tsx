import AzmimutVisionLogo from '../../../public/images/azimutvisionlogo.jpg';
import CodeacademyLogo from '../../../public/images/codeacademylogo.jpg'
import ScrimbaLogo from '../../../public/images/scrimbalogo.jpg';
import CodeavengersLogo from '../../../public/images/codeagencerslogo.png'
import OsfLogo from '../../../public/images/osflogo.png';
import HtmlLogoUrl from '../../../public/images/htmlbiglogo.png';
import CssLogoUrl from '../../../public/images/cssbiglogo.jpg';
import MySqlLogoUrl from '../../../public/images/mysqllogo.jpg';
import JavaScriptLogoUrl from '../../../public/images/jsssssssssssssssssss.jpg';
import ReactLogoUrl from '../../../public/images/reactbiglogo.png';
import TypeScriptLogoUrl from '../../../public/images/typescriptbiglogo.png';
import TailwindLogoUrl from '../../../public/images/tailwindbiglogo.png';

interface Education {
    CompanyLogoUrl?: string
    HtmlLogoUrl?: string
    CssLogoUrl?: string
    IntermediateHtmlLogoUrl?: string
    IntermediateCSSLogoUrl?: string
    IntermediateJavaScriptUrl?: string
    IntermediateReactUrl?: string
    MySqlLogoUrl?: string
    JavaScriptLogoUrl?: string
    ReactLogoUrl?: string
    TypeScriptLogoUrl?: string
    TailwindLogoUrl?: string
    HeaderText: string
    HeaderParagraph: string
    HeaderSubtext: string
    BodyBasicText?: string
    BodyIntermediateText?: string
    BodyMainText: string
    Skill1?: string
    Skill2?: string
    Skill3?: string
    Skill4?: string
    Skill5?: string
    Skill6?: string
    Skill7?: string
    Skill8?: string
    Skill9?: string
    Skill10?: string
    Skill11?: string
    Skill12?: string
    Skill13?: string
    Skill14?: string
    Skill15?: string
}

export const educations: Education[] = [
    {
        CompanyLogoUrl: AzmimutVisionLogo,
        HtmlLogoUrl: HtmlLogoUrl,
        CssLogoUrl: CssLogoUrl,
        MySqlLogoUrl: MySqlLogoUrl,
        ReactLogoUrl: ReactLogoUrl,
        TypeScriptLogoUrl: TypeScriptLogoUrl,
        TailwindLogoUrl: TailwindLogoUrl,
        HeaderText: 'Azimut Vision',
        HeaderParagraph: 'Introduction to IT Program',
        HeaderSubtext: 'May 2022 - Jun 2022',
        BodyBasicText: 'Basic introduction in: ',
        BodyMainText: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        Skill1: 'HTML5',
        Skill2: 'CSS',
        Skill3: 'mySQL',
        Skill4: 'Database',
    },
    {
        CompanyLogoUrl: AzmimutVisionLogo,
        IntermediateHtmlLogoUrl: CssLogoUrl,
        IntermediateCSSLogoUrl: HtmlLogoUrl,
        JavaScriptLogoUrl: JavaScriptLogoUrl,
        ReactLogoUrl: ReactLogoUrl,
        TypeScriptLogoUrl: TypeScriptLogoUrl,
        TailwindLogoUrl: TailwindLogoUrl,
        HeaderText: 'Azimut Vision',
        HeaderParagraph: 'Front-End Developer Program',
        HeaderSubtext: 'Oct 2022 - Mar 2023',
        BodyBasicText: 'Basic introduction in: ',
        BodyIntermediateText: 'Intermediate in: ',
        BodyMainText: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        Skill1: 'responsive web sites',
        Skill2: 'flex-box',
    },
    {
        CompanyLogoUrl: CodeacademyLogo,
        IntermediateHtmlLogoUrl: CssLogoUrl,
        IntermediateCSSLogoUrl: HtmlLogoUrl,
        HtmlLogoUrl: HtmlLogoUrl,
        CssLogoUrl: CssLogoUrl,
        JavaScriptLogoUrl: JavaScriptLogoUrl,
        ReactLogoUrl: ReactLogoUrl,
        TypeScriptLogoUrl: TypeScriptLogoUrl,
        TailwindLogoUrl: TailwindLogoUrl,
        HeaderText: 'Codeacademy',
        HeaderParagraph: 'Introduction in programming',
        HeaderSubtext: 'Oct 2022 - June 2023',
        BodyBasicText: 'Basic introduction in: ',
        BodyIntermediateText: 'Intermediate in: ',
        BodyMainText: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        Skill1: 'grid',
        Skill2: 'flex-box',
        Skill3: 'accesibility',
        Skill4: 'box-model & layout',
        Skill5: 'HTML structure',
        Skill6: 'js conditionals',
        Skill7: 'js functions',
        Skill8: 'js scoops',
        Skill9: 'js arrays',
        Skill10: 'js interator methods',
    },
    {
        CompanyLogoUrl: ScrimbaLogo,
        IntermediateCSSLogoUrl: HtmlLogoUrl,
        IntermediateJavaScriptUrl: JavaScriptLogoUrl,
        IntermediateReactUrl: ReactLogoUrl, 
        HtmlLogoUrl: HtmlLogoUrl,
        CssLogoUrl: CssLogoUrl,
        JavaScriptLogoUrl: JavaScriptLogoUrl,
        ReactLogoUrl: ReactLogoUrl,
        TypeScriptLogoUrl: TypeScriptLogoUrl,
        TailwindLogoUrl: TailwindLogoUrl,
        HeaderText: 'Scrimba',
        HeaderParagraph: 'The Fronted Developer career path ( 72 hours course )',
        HeaderSubtext: 'Mar 2023 - Dec 2024',
        BodyBasicText: 'Basic introduction in: ',
        BodyIntermediateText: 'Intermediate in: ',
        BodyMainText: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        Skill1: 'grid',
        Skill2: 'flex-box',
        Skill3: 'accessibility',
        Skill4: 'responsive design (mobile first)',
        Skill5: 'colors/ contrast/ scale/ Typo',
        Skill6: 'Visual Hierarchy',
        Skill7: 'root em/ rem',
        Skill8: 'functions',
        Skill9: 'scoops',
        Skill10: 'arrays',
        Skill11: 'conditionals',
        Skill12: 'operators',
        Skill13: 'methods',
        Skill14: 'objects',
        Skill15: '', 
    },
    {
        CompanyLogoUrl: OsfLogo,
        IntermediateJavaScriptUrl: JavaScriptLogoUrl,
        HeaderText: 'OSF Digital',
        HeaderParagraph: 'Salesforce Commerce Cloud Front-end internship',
        HeaderSubtext: 'Jun 2023 - August 2023',
        BodyIntermediateText: 'Intermediate in: ',
        BodyMainText: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        Skill1: 'salesforce Training',
        Skill2: 'model-View-Controller (MVC)',
        Skill3: 'endpoints in Controller',
        Skill4: 'isml',
        Skill5: 'business manager platform',
        Skill6: 'github',
        Skill7: 'team work',
        Skill8: 'slack',
        Skill9: 'daily tasks manager',
    },
    {
        CompanyLogoUrl: CodeavengersLogo,
        JavaScriptLogoUrl: JavaScriptLogoUrl,
        IntermediateJavaScriptUrl: JavaScriptLogoUrl,
        HeaderText: 'Codeavengers',
        HeaderParagraph: 'JavaScript',
        HeaderSubtext: 'Oct 2023 - June 2023',
        BodyBasicText: 'Basic introduction in: ',
        BodyIntermediateText: 'Intermediate in: ',
        BodyMainText: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        Skill1: 'variables',
        Skill2: 'statements',
        Skill3: 'loops',
        Skill4: 'strings',
        Skill5: 'functions',
        Skill6: 'arrays',
        Skill7: 'methods',
        Skill8: 'events',
        Skill9: 'animations',
        Skill10: 'GUI',
        Skill11: 'classes',
    },
    {
        CompanyLogoUrl: ScrimbaLogo,
        IntermediateJavaScriptUrl: JavaScriptLogoUrl,
        HeaderText: 'Scrimba',
        HeaderParagraph: 'JavaScript deep dive',
        HeaderSubtext: 'Jan 2024 - Feb 2024',
        BodyIntermediateText: 'Intermediate in: ',
        BodyMainText: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        Skill1: 'strict mode',
        Skill2: 'block scoping',
        Skill3: 'ternaries',
        Skill4: 'short-circuiting',
        Skill5: 'object destructuring',
        Skill6: 'closure',
        Skill7: 'callbacks',
        Skill8: 'api',
        Skill9: 'promises',
        Skill10: 'GUI',
        Skill11: 'classes',
        Skill12: 'modules',
        Skill13: 'state management',
        Skill14: 'declarative code',
    },
    {
        CompanyLogoUrl: ScrimbaLogo,
        IntermediateJavaScriptUrl: ReactLogoUrl,
        HeaderText: 'Scrimba',
        HeaderParagraph: 'Advanced React',
        HeaderSubtext: 'Feb 2024 - Mar 2024',
        BodyIntermediateText: 'Intermediate in: ',
        BodyMainText: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        Skill1: 'reusability',
        Skill2: 'custom hooks',
        Skill3: 'router 6',
        Skill4: 'performance',
        Skill5: 'code splitting',
        Skill6: 'lazy',
        Skill7: 'suspense',
        Skill8: 'reference types',
        Skill9: 'referential quality',
        Skill10: 'recursive rendering',
    },


]