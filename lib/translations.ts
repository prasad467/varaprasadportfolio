export const translations = {
  en: {
    sections: {
      about: "about",
      projects: "projects",
      contact: "contact",
    },

    nav: {
      returnHomepage: "Return to Homepage",
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      modeToggle: "Toggle Theme",
      burger: {
        openMenu: "Open Menu",
        closeMenu: "Close Menu",
        open: "Open",
        close: "Close",
        menu: "Menu",
      },
    },

    about: {
      title: "About Me",

      tags: {
        location: "Visakhapatnam, Andhra Pradesh, India",
        webDev: "Full Stack Development",
        webDesign: "AI & Machine Learning",
        uxUi: "Entrepreneurship",
      },

      description:
        "I am Vara Prasad Palivela, a Diploma Computer Science student passionate about software development, artificial intelligence, entrepreneurship, and building innovative products. I have experience with HTML, CSS, JavaScript, PHP, React, Python, SQL, MongoDB, Oracle, PL/SQL, and AI tools. I enjoy creating web applications, AI-powered solutions, automation tools, and real-world products that solve meaningful problems. My goal is to become a successful entrepreneur and build impactful technology companies.",

      education: {
        title: "Education",

        iut: {
          location: "Government Polytechnic, Visakhapatnam",
          degree: "Diploma in Computer Science Engineering",
          date: "2023 - 2026",
        },

        epitech: {
          location: "ZP High School, Visakhapatnam",
          degree: "Secondary School Education (10th Standard)",
          date: "Completed",
        },

        highschool: {
          location: "Independent Learning",
          degree:
            "Web Development, Artificial Intelligence, Machine Learning, Entrepreneurship",
          date: "Ongoing",
        },
      },

      viewCV: "View Resume",
      cvLink: "/prasad_resume.pdf",
    },

    projects: {
      title: "Projects",
      seeProject: "View Project",

      cineroule: {
        description:
          "UPI Fraud Detection System using Machine Learning to identify suspicious financial transactions and improve payment security.",
        date: "2026",
      },

      mmiPlanning: {
        description:
          "Creator OS – AI-powered platform for content creators that generates scripts, researches trends, analyzes competitors, and improves content creation workflows.",
        date: "2026",
      },
    },

    contact: {
      title: "Contact",

      infos: {
        available: "Open to Opportunities",
        usefulLinks: "Connect with Me:",
      },

      form: {
        title: "Send Me a Message",
        lastName: "Last Name",
        firstName: "First Name",
        email: "Email Address",
        message: "Your Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Something went wrong. Please try again.",
      },
    },

    footer: {
      description:
        "Computer Science Diploma Student passionate about Software Development, AI, Entrepreneurship, and building innovative digital products.",

      navigation: "Navigation",

      contact: {
        title: "Contact & Social Links",
        follow: "Follow Me:",
      },

      rights: "All rights reserved.",

      legal: "Legal Notice",

      privacy: "Privacy Policy",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.en;