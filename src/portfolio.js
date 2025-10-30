/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

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
  username: "Uthuman Ali",
  title: "Hi all, I'm Uthuman",
  subTitle: emoji(
    "DevOps Engineer 🚀 experienced in developing scalable, secure web applications and streamlining deployments with CI/CD automation across hybrid infrastructures"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ali2307",
  linkedin: "https://www.linkedin.com/in/uthumanali7/",
  gmail: "uthumanaliakbar@gmail.com",
  medium: "https://medium.com/@uthumanaliakbar",
  // Instagram, Twitter, and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "AUTOMATE • DEPLOY • SCALE • MONITOR",
  skills: [
    emoji("⚙️ Design and deploy secure, scalable, and automated cloud infrastructures on Azure and AWS"),
    emoji("🚀 Build CI/CD pipelines using GitHub Actions, Jenkins, and Docker for seamless app delivery"),
    emoji("☁️ Manage Infrastructure as Code (IaC) using Terraform and Ansible for consistent provisioning"),
    emoji("🔍 Monitor and optimize system performance using Prometheus, Grafana, and ELK stack"),
    emoji("🔒 Implement DevSecOps practices — secrets management, access control, and compliance automation"),
  ],

  softwareSkills: [
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Prometheus",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Grafana",
      fontAwesomeClassname: "fas fa-tachometer-alt"
    },
    {
      skillName: "Nginx",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
  ],
  display: true
};


// Education Section

const educationInfo = {
  display: true, // set false to hide section
  schools: [
    {
      schoolName: "Anna University",
      logo: require("./assets/images/annaUniversityLogo.png"), // optional
      subHeader: "Bachelor of Engineering",
      duration: "2017 - 2021", // adjust year if needed
      desc: "Graduated with strong foundation in engineering principles and DevOps-oriented technologies.",
      grade: "CGPA: 8.9 / 10"
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // show proficiency section
  experience: [
    {
      Stack: "Cloud & Infrastructure (Azure / AWS)",
      progressPercentage: "85%" // strong cloud background
    },
    {
      Stack: "CI/CD & Automation (Jenkins / GitHub Actions / Docker)",
      progressPercentage: "80%"
    },
    {
      Stack: "Containerization & Orchestration (Docker / Kubernetes)",
      progressPercentage: "75%"
    },
    {
      Stack: "Infrastructure as Code (Terraform / Ansible)",
      progressPercentage: "70%"
    },
    {
      Stack: "Monitoring & Security (Prometheus / Grafana / ELK / DevSecOps)",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, // show the work experience section
  experience: [
    {
      role: "DevOps Engineer",
      company: "Alpha Data",
      companylogo: require("./assets/images/Alphadata.png"),
      date: "Mar 2025 – Present",
      location: "Abu Dhabi, United Arab Emirates",
      desc: "Leading DevOps initiatives for cloud infrastructure modernization and automation projects.",
      descBullets: [
        "Implementing CI/CD pipelines using Jenkins, GitHub Actions, and GitLab CI/CD to streamline software delivery.",
        "Managing cloud resources across Azure and AWS with Terraform and Ansible for automated provisioning.",
        "Containerizing and orchestrating applications using Docker and Kubernetes for scalable deployments.",
        "Configuring NGINX and reverse proxies to optimize performance and ensure secure traffic routing.",
        "Integrating monitoring solutions (Prometheus, Grafana, Zabbix) for proactive performance tracking.",
        "Collaborating with development teams to enforce DevSecOps practices and secrets management.",
        "Improving release cycles and reducing manual intervention through infrastructure-as-code automation."
      ]
    },
    {
      role: "Cloud Architect",
      company: "Khalifa Economic Zones Abu Dhabi",
      companylogo: require("./assets/images/KezadLogo.png"),
      date: "Feb 2024 – Feb 2025",
      location: "Abu Dhabi, United Arab Emirates",
      desc: "Software Solution Company focused on enterprise cloud and e-commerce platforms.",
      descBullets: [
        "Architected and containerized e-commerce platforms using Docker and Kubernetes for high availability.",
        "Automated deployments using Helm charts, reducing deployment errors by 70%.",
        "Configured NGINX reverse proxy and optimized backend routing to improve page load times by 25%.",
        "Implemented SSL/TLS and AWS WAF for secure communication and DDoS mitigation.",
        "Automated infrastructure provisioning using Terraform and Ansible, cutting setup time by 40%.",
        "Developed CI/CD pipelines with Jenkins and GitLab for continuous delivery.",
        "Integrated Prometheus and Grafana for monitoring, enhancing system reliability and performance."
      ]
    },
    {
      role: "Cloud Solutions Architect",
      company: "Axis Bank",
      companylogo: require("./assets/images/axisBankLogo.png"),
      date: "Jul 2021 – Jul 2023",
      location: "Abu Dhabi, United Arab Emirates",
      desc: "Service-based digital transformation and enterprise cloud projects.",
      descBullets: [
        "Designed and deployed cloud-native solutions using Azure Kubernetes Service (AKS).",
        "Integrated Azure Key Vault and Azure AD for secure identity and credential management.",
        "Implemented Azure API Management for seamless third-party integrations.",
        "Migrated databases to Azure SQL Database with Geo-replication, reducing latency by 25%.",
        "Automated CI/CD pipelines via Azure DevOps, reducing deployment time by 40%.",
        "Architected microservices using Azure App Services and Azure Functions.",
        "Implemented Azure Site Recovery and Backup achieving an RPO of 15 minutes.",
        "Reduced infrastructure costs by 40% through optimized cloud resource utilization."
      ]
    },
    {
      role: "Linux System Administrator",
      company: "Perpetuuiti Technosoft PTE",
      companylogo: require("./assets/images/perpetuuitiLogo.png"),
      date: "Jul 2020 – Jul 2021",
      location: "Chennai, India",
      desc: "Product-based enterprise automation and continuity solutions company.",
      descBullets: [
        "Installed, configured, and maintained Linux servers ensuring optimal uptime and performance.",
        "Automated routine system administration tasks using Bash scripts, boosting efficiency by 30%.",
        "Monitored systems with Nagios and Zabbix for proactive issue detection and resolution.",
        "Configured Apache and NGINX web servers for internal and client applications.",
        "Implemented backup and recovery processes using rsync and cron for data integrity."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "REAL-WORLD CLOUD & DEVOPS IMPLEMENTATIONS",
  projects: [
    {
      projectName: "ERP Project Deployment",
      projectDesc:
        "\n\nDeployed an Enterprise Resource Planning (ERP) system on AWS ensuring scalability, security, and high availability. Configured EC2 instances for resizable compute capacity and integrated auto-scaling, RDS, and CloudWatch for performance monitoring.\n\n• Designed and implemented a scalable ERP infrastructure supporting 10,000+ users globally.\n• Achieved zero-downtime migrations using blue-green deployment strategies.\n• Optimized database reliability using Multi-AZ and DynamoDB caching.",
      footerLink: []
    },
    {
      projectName: "Healthcare IoT Integration",
      projectDesc:
        " s\n\nBuilt a Healthcare IoT integration solution on Microsoft Azure enabling real-time monitoring, analytics, and secure data flow between medical devices and cloud services.\n\n• Developed a prototype connecting IoT devices to Azure IoT Hub for patient vitals monitoring.\n• Stored patient data securely in Azure Cosmos DB ensuring HIPAA compliance.\n• Implemented Azure Stream Analytics and Power BI dashboards for real-time visualization.",
      footerLink: []
    },
    {
      projectName: "DRM for Banking Sector",
      projectDesc:
        "\n\nDesigned and implemented an automated Disaster Recovery Management (DRM) plan for a banking client using AWS services to ensure business continuity.\n\n• Automated backups and failover with AWS Backup, RDS Multi-AZ, and S3 Cross-Region Replication.\n• Developed recovery workflows using AWS CloudFormation templates.\n• Achieved an RTO of 15 minutes through proactive DR drills and automated recovery testing.",
      footerLink: []
    },
    {
      projectName: "E-Commerce Platform Optimization",
      projectDesc:
        "\n\nOptimized an e-commerce application using AWS infrastructure and containerization for enhanced scalability and performance.\n\n• Deployed Node.js-based e-commerce system on AWS EC2 using a three-tier architecture.\n• Configured Auto Scaling and Load Balancers for high availability.\n• Implemented RDS Multi-AZ, DynamoDB caching, and CloudFront CDN for faster content delivery.\n• Improved page load time by 2 seconds through optimized caching and CDN integration.\n• Implemented Kubernetes autoscaling for seamless handling of peak traffic spikes.",
      footerLink: []
    }
  ],
  display: true // Set to true to display this section
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Professional certifications and measurable DevOps achievements demonstrating expertise in cloud, automation, and system optimization.",

  achievementsCards: [
    {
      title: "Microsoft Certified: DevOps Engineer Expert",
      subtitle:
        "Validated expertise in CI/CD, automation, and cloud infrastructure management using Azure DevOps and GitHub Actions."
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      subtitle:
        "Proficient in managing Azure identities, networking, virtual machines, storage, and hybrid cloud environments."
    },
    {
      title: "AWS Certified Solutions Architect",
      subtitle:
        "Skilled in designing and deploying scalable, fault-tolerant AWS architectures ensuring performance and security."
    },
    {
      title: "Red Hat Certified Specialist in Linux Diagnostics and Troubleshooting",
      subtitle:
        "Strong ability to diagnose and resolve system performance, reliability, and configuration issues on RHEL systems."
    },
    {
      title: "Certified SAFe® 4 DevOps Practitioner",
      subtitle:
        "Demonstrated understanding of DevOps principles, automation pipelines, and Agile enterprise delivery practices."
    },
    {
      title: "Cisco Certified Network Professional – Cloud",
      subtitle:
        "Experienced in cloud network architecture, hybrid connectivity, and cloud security using Cisco technologies."
    },
    {
      title: "Certification of Jira – Coursera",
      subtitle:
        "Practical experience in Agile project management, issue tracking, and workflow automation using Jira."
    },
    {
      title: "Key DevOps Achievements",
      subtitle:
        "• Achieved 40% cost savings by migrating workloads to Azure.\n" +
        "• Reduced deployment errors by 70% using Helm automation.\n" +
        "• Improved database query performance by 30% through optimization.\n" +
        "• Enhanced website performance by 25% with NGINX configuration and caching strategies."
    }
  ],

  display: true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@uthumanaliakbar/devops-talks-a446d2537f7a",
      title: "Let's Talk DevOps",
      description:
        "Join me in exploring the world of DevOps, where we bridge the gap between development and operations."
    },
    {
      url: "https://medium.com/@uthumanaliakbar/setting-up-devops-for-node-js-application-on-premises-dba287d50898",
      title: "Setting Up DevOps for Node.js Application (On-Premises)",
      description:
        "A comprehensive guide to setting up a DevOps pipeline for Node.js applications in on-premises environments."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    //---commented because, we donot have ready recorded podcast
   // "https://anchor.fm/codevcast/embed/episodes/DevStory---Irfan-Khan-from-Kannur--kerala-india-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+971-554797652",
  email_address: "uthumanaliakbar@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
