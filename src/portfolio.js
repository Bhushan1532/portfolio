import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bhushan Bachate",
  title: "Hi all, I'm Bhushan",
  subTitle: emoji(
    "A passionate .NET Full Stack Developer 🚀 with over 2+ years of experience building secure and efficient web applications in healthcare, eCommerce, and educational domains using ASP.NET, C#, MS SQL Server, and modern front-end technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1iI605kZS0SgvwQohrXKEBD0e6IiRT7RE/view?usp=drive_link", // Replace with your actual resume link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Bhushan1532", // Replace with your GitHub username
  linkedin:
    "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile", // Replace with your LinkedIn profile
  gmail: "bachatebhushan7@gmail.com",
  // Add other social media links if applicable (e.g., Twitter, Medium)
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER SPECIALIZING IN .NET AND WEB TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop secure and dynamic web applications using ASP.NET MVC and .NET Core"
    ),
    emoji(
      "⚡ Build and integrate high-performance APIs with robust security and encryption"
    ),
    emoji(
      "⚡ Create responsive front-end interfaces with HTML5, CSS, Bootstrap, and JavaScript"
    ),
    emoji(
      "⚡ Design and optimize database systems using MS SQL Server and Entity Framework"
    )
  ],
  softwareSkills: [
    {skillName: "C#", fontAwesomeClassname: "fas fa-code"},
    {skillName: "ASP.NET", fontAwesomeClassname: "fas fa-server"},
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "jQuery", fontAwesomeClassname: "fab fa-js-square"},
    {skillName: "Bootstrap", fontAwesomeClassname: "fab fa-bootstrap"},
    {skillName: "MS SQL Server", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "DYP University Talsande Kolhapur",
      logo: require("./assets/images/dypLogo.png"), // Replace with actual logo in src/assets/images
      subHeader: "Master of Computer Applications (MCA)",
      duration: "2022 - 2024",
      desc: "Completed MCA with a CGPA of 8.1, focusing on software development and system design.",
      descBullets: [
        "Developed projects in .NET and web technologies",
        "Participated in workshops on cloud computing and API integration"
      ]
    },
    {
      schoolName: "Your College Name", // Replace with your B.Sc. college name
      logo: require("./assets/images/collegeLogo.png"), // Replace with actual logo in src/assets/images
      subHeader: "Bachelor of Science in Computer Science (B.Sc. CS)",
      duration: "2019 - 2022",
      desc: "Graduated with a CGPA of 9.24, specializing in programming and database management.",
      descBullets: [
        "Built foundational skills in C# and web development",
        "Completed coursework in data structures and algorithms"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {Stack: "Full Stack Development (.NET)", progressPercentage: "85%"},
    {Stack: "Frontend Development", progressPercentage: "80%"},
    {Stack: "Database Management", progressPercentage: "75%"}
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};

// Work experience section
const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: ".NET Full Stack Developer",
      company: "Praveetch Private Limited",
      companylogo: require("./assets/images/praveetchLogo.png"), // Replace with actual logo in src/assets/images
      date: "Nov 2023 – Present",
      desc: "Contributed to healthcare and laboratory management systems, focusing on secure API integrations and efficient data processing.",
      descBullets: [
        "Integrated Ayushman Bharat Digital Mission (ABDM) API with .NET Core, implementing encryption for data privacy",
        "Developed ElabAssist, a lab management system with client registration and reporting features",
        "Built Corpmain Corp, a LIMS with patient management and ICICI PayU payment gateway integration",
        "Created Elabapi, a high-performance API system with caching for large datasets"
      ]
    },
    {
      role: ".NET Full Stack Developer (Internship)",
      company: "YSSAS Private Limited",
      companylogo: require("./assets/images/yssasLogo.png"), // Replace with actual logo in src/assets/images
      date: "Dec 2022 – Nov 2023",
      desc: "Developed features for educational platforms, enhancing user engagement and system administration.",
      descBullets: [
        "Enhanced a social media educational platform with features like likes, comments, and job postings",
        "Built a Batch Management System for course administration, including scheduling and communication features"
      ]
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: true, // Set true to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Big Projects
const bigProjects = {
  title: "Big Projects",
  subtitle: "KEY PROJECTS THAT SHOWCASE MY TECHNICAL EXPERTISE",
  projects: [
    {
      image: require("./assets/images/abdmLogo.png"), // Replace with actual image in src/assets/images
      projectName: "ABDM Project Integration",
      projectDesc:
        "Integrated Ayushman Bharat Digital Mission (ABDM) API to create a secure healthcare infrastructure, focusing on data privacy and encryption.",
      footerLink: [
        {name: "Visit Website", url: "https://abdm.gov.in/"} // Replace with actual project link if available
      ]
    },
    {
      image: require("./assets/images/elabassistLogo.png"), // Replace with actual image in src/assets/images
      projectName: "ElabAssist",
      projectDesc:
        "Developed a lab management system with client registration, subscription-based limits, and data reporting features.",
      footerLink: [
        {name: "GitHub", url: "https://github.com/your-username/elabassist"} // Replace with actual repo link
      ]
    },
    {
      image: require("./assets/images/corpmainLogo.png"), // Replace with actual image in src/assets/images
      projectName: "Corpmain Corp",
      projectDesc:
        "Built a Laboratory Information Management System (LIMS) with patient management, billing, and secure payment integration using ICICI PayU.",
      footerLink: [
        {name: "GitHub", url: "https://github.com/your-username/corpmain"} // Replace with actual repo link
      ]
    },
    {
      image: require("./assets/images/elabapi.png"), // Replace with actual image in src/assets/images
      projectName: "Elabapi",
      projectDesc:
        "Created a high-performance API system using .NET Core with caching for efficient handling of large datasets.",
      footerLink: [
        {name: "GitHub", url: "https://github.com/your-username/elabapi"} // Replace with actual repo link
      ]
    },
    {
      image: require("./assets/images/social.png"), // Replace with actual image in src/assets/images
      projectName: "Social Media Educational Platform",
      projectDesc:
        "Enhanced user engagement with features like likes, comments, and job postings for an educational social platform.",
      footerLink: [
        {name: "GitHub", url: "https://github.com/your-username/social-edu"} // Replace with actual repo link
      ]
    },
    {
      image: require("./assets/images/batchma.png"), // Replace with actual image in src/assets/images
      projectName: "Batch Management System",
      projectDesc:
        "Developed a system for managing educational courses, including registration, scheduling, and communication features.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/your-username/batch-management"
        } // Replace with actual repo link
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Certifications and Achievements that Highlight My Expertise",
  achievementsCards: [
    // Add certifications here if you have any, e.g., Microsoft Azure, .NET certifications
    {
      title: "Placeholder Certification",
      subtitle: "To be updated with your certifications.",
      image: require("./assets/images/airbnbLogo.png"), // Replace with actual image
      imageAlt: "Certification Logo",
      footerLink: [
        {name: "Certification", url: "https://your-certification-link"} // Replace with actual link
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "Sharing my knowledge and experiences in software development.",
  displayMediumBlogs: true, // Set true if you have a Medium account
  blogs: [
    // Add manual blog entries if not using Medium
    {
      url: "https://your-blog-link", // Replace with your blog link
      title: "Your Blog Title",
      description: "Brief description of your blog post."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Section
const talkSection = {
  title: "TALKS",
  subtitle: emoji("I love to share my knowledge and experiences 😅"),
  talks: [], // No talks mentioned in resume, leave empty or add if applicable
  display: false // Set false as no talks are provided
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Discussing technology and development insights.",
  podcast: [], // No podcasts mentioned in resume, leave empty or add if applicable
  display: false // Set false as no podcasts are provided
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-946782920",
  email_address: "bhushanbachate7@gmail.com",
  profileImage: require("./assets/images/bhushan-profile.jpg") // Add your image path
};

// Twitter Section
const twitterDetails = {
  userName: "your-twitter-username", // Replace with your Twitter username without @
  display: false // Set true if you want to display Twitter timeline
};

const isHireable = true; // Set true if you are open to opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
