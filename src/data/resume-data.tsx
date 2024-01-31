import {
    AmbitLogo,
    BarepapersLogo,
    BimLogo,
    CDGOLogo,
    ClevertechLogo,
    ConsultlyLogo,
    EvercastLogo,
    Howdy,
    JarockiMeLogo,
    JojoMobileLogo,
    Minimal,
    MobileVikingsLogo,
    MonitoLogo,
    NSNLogo,
    ParabolLogo,
    TastyCloudLogo,
    YearProgressLogo,
  } from "@/images/logos";
  import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
  
  export const RESUME_DATA = {
    name: "Dr James McEntee",
    initials: "JM",
    location: "London, UK",
    locationLink: "https://www.google.com/maps/place/London",
    about:
      "Intensive Care doctor with design and digital skills ",
    summary:
      "As an ICU doctor with a flair for design and digital innovation, I've been at the forefront of transforming clinical care through exciting local and regional projects. My approach is a unique blend of creative design thinking and deep clinical expertise, with a special focus on digital systems and educational methodologies. I thrive on turning groundbreaking ideas into practical, everyday solutions in the healthcare setting. This combination of skills makes me an ideal fit for forward-thinking groups eager to merge top-notch healthcare with the latest in technological advancements, all in a way that's both practical and refreshingly innovative.",
    avatarUrl: "https://avatars.githubusercontent.com/u/3170041?v=4",
    personalWebsiteUrl: "https://drmcentee.com",
    contact: {
      email: "j.mcentee@nhs.net",
      tel: "n/a",
      social: [
        {
          name: "GitHub",
          url: "https://github.com/och29",
          icon: GitHubIcon,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/dr-james-mcentee/",
          icon: LinkedInIcon,
        },
        {
          name: "X",
          url: "https://x.com/gasdocmac",
          icon: XIcon,
        },
      ],
    },
    education: [
        {
            school: "Imperial College London",
            degree: "MBBS Medical Degree - Distinction Star / Merit",
            start: "2009",
            end: "2015",
          },
          {
            school: "Imperial College London",
            degree: "BSc Respiratory Medicine - 1st Class Honours",
            start: "2011",
            end: "2012",
          },
          {
            school: "Royal College of Art / Imperial College London",
            degree: "MSc Healthcare & Design - 1st Class Honours",
            start: "2020",
            end: "2022",
          }, 
    ],
    work: [
      {
        company: "Basic Training",
        link: "https://lonkssfoundation.hee.nhs.uk/nwlfs",
        badges: ["FY1&2"],
        title: "Hillingdon and Chelsea",
        logo: ParabolLogo,
        start: "2015",
        end: "2017",
        description:
          "Anaesthetics and ITU, Respiratory, Emergency Medicine, Emergency Medicine, Community Acute Psychiatry, Paediatric Surgery",
      },
      {
        company: "Core Training",
        link: "https://www.accs.ac.uk/",
        badges: ["ACCS"],
        title: "ACCS Anaesthetics",
        logo: ClevertechLogo,
        start: "2017",
        end: "2020",
        description:
          "Hillingdon: Emergency Medicine, Acute Medicine, Anaesthetics, ICU. Hammersmith: Anaesthetics. Chelsea: Anaesthetics, ICU",
      },
      {
        company: "Senior Training",
        link: "https://chelseaicu.com",
        badges: ["SCF"],
        title: "Senior Clinical Design Fellow",
        logo: JojoMobileLogo,
        start: "2020",
        end: "ongoing",
        description:
          "Adult ICU and Burns ICU at Chelsea and Westminster Hospital.",
      },
    ],
    skills: [
      "Intensive Care",
      "Systems Design",
      "Physical Prototyping",
      "Digital Design",
      "Education",
      "Media Creation",
      "Cerner Physician Architect",
    ],
    projects: [
      {
        title: "TasteICU",
        techStack: [
          "ICU",
          "MDT",
          "Prototype",
          "Research",
          "Novel",
        ],
        description: "Lead for spinout research group exploring a novel flavour device to allow patients who can't eat to still enjoy flavour",
        logo: ConsultlyLogo,
        link: {
          label: "tasteicu.com",
          href: "https://tasteicu.com/",
        },
      },
      {
        title: "CLWrota Staging",
        techStack: ["ICU", "HR", "Digital", "Systems Improvement"],
        description:
          "Lead the UK roll out of 'Staging', allowing rotas to be deployed automatically saving days of work",
        logo: MonitoLogo,
        link: {
          label: "CLWrota",
          href: "https://help.clwrota.com/",
        },
      },
      {
        title: "ChelseaICU.com",
        techStack: ["ICU", "Digital", "Web", "Systems Improvement"],
        description:
          "Creation of a departmental website using lean design to keep costs under £10/year while retaining full function",
        link: {
          label: "chelseaicu.com",
          href: "https://www.chelseaicu.com/",
        },
      },
      {
        title: "Doctors Onboarding Project",
        techStack: ["Team Management", "Digital", "HR", "Web"],
        description:
          "I created a web frontend and database to streamline onboarding of rotational doctors. Combined with a robust implementation strategy, this allowed NHS England targets to be met for the first time and now consistently exceeded.",
        logo: Minimal,
        link: {
          label: "New Joiners",
          href: "https://www.chelseaicu.com/junior-doctors/starting-at-chelsea",
        },
      },
      {
        title: "Bronchoscopy Workflow",
        techStack: ["Digital Design", "Regional", "EPR", "Systems Improvment"],
        description:
          "Lead the redesign for NW London's bronchoscopy workflow and the pilot for a new generation of LocSSIPs integrating automation and data collection",
        logo: Minimal,
        link: {
          label: "NWLCCN",
          href: "https://londonccn.nhs.uk/",
        },
       },   
      {
        title: "Cerner Training Lead",
        techStack: ["EPR", "Cerner", "Education", "System Design"],
        description:
          "Co-lead for NW London Critical Care Cerner Training. Developing a centralised solution for EPR training",
        logo: Minimal,
        link: {
          label: "NWLCCN",
          href: "https://londonccn.nhs.uk/",
       },
      },
      {
        title: "Magill Symposium Digital Lead",
        techStack: ["Conference", "Management", "Education", "System Design"],
        description:
          "A national, recurring conference with a focus on anaesthesia",
        logo: Minimal,
        link: {
          label: "Magill",
          href: "https://www.magillsymposium.co.uk/",
       },
      },        
    ],
  } as const;
