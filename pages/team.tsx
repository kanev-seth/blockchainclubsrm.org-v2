import Head from "next/head";
import React, { SetStateAction, useRef, useState } from "react";
import { Layout } from "../components/shared";
import TeamCard from "../components/team/team-card";
import TeamMembersCard from "../components/team/team-members-card";
const team = () => {
  const leads = [
   /* {
      name: "Vedant Utage",
      position: "President",
      socials: {
        github: "/", 
        linkedin: "https://www.linkedin.com/in/vedant-utage-043020223/",
        twitter: "https://twitter.com/vedantutage03",
      },
      profile: "./assets/teams/prez.png",
      cover: "/assets/teams/1.png",
    },
    {
      name: "Pratham Bhatnagar",
      position: "VicePresident",
      socials: {
        github: "https://github.com/pratham-bhatnagar", 
        linkedin: "https://www.linkedin.com/in/pratham-bhatnagar/",
        twitter: "https://twitter.com/prrthamm",
      },
      profile: "./images/pratham-pfp.png",
      cover: "/images/pratham-cover.png",
    },
    {
      name: "Harsh Srivastava",
      position: "TechLead",
      socials: {
        github: "https://github.com/Srivastava57Harsh", 
        linkedin: "https://www.linkedin.com/in/srivastava57harsh/",
        twitter: "https://twitter.com/_0xharsh",
      },
      profile: "./assets/teams/HarshSrivastava.jpeg",
      cover: "public/assets/teams/HarshSrivastava.jpeg",
    },
    {
      name: "Karan Pargal",
      position: "TechLead",
      socials: {
        github: "https://github.com/karanpargal", 
        linkedin: "https://www.linkedin.com/in/karan-pargal/",
        twitter: "https://twitter.com/karan_pargal",
      },
      profile:
        "./assets/teams/KaranPargal.png",
      cover: "/assets/teams/4.png",
    },
    {
      name: "Prajin Chopra",
      position: "CryptoLead",
      socials: {
        github: "https://github.com/chopraprajin", 
        linkedin: "https://www.linkedin.com/in/chopraprajin",
        twitter: "https://twitter.com/chopraprajin",
      },
      profile:
        "./assets/teams/Prajin.jpg",
      cover: "/assets/teams/5.png",
    },
    {
      name: "Pritesh Panda",
      position: "cryptolead",
      socials: {
        github: "/", 
        linkedin: "/",
        twitter: "/",
      },
      profile:
        "https://drive.google.com/uc?export=view&id=1jJQUN9J1VtODd8mFRKEHQlKARYg1NGwB",
      cover: "/assets/teams/6.png",
    },
    {
      name: "Aman Parida",
      position: "CorporateLead",
      socials: {
        github: "/", 
        linkedin: "https://www.linkedin.com/in/aman-parida-794b19251",
        twitter: "https://twitter.com/AmanParida2003?t=oSM3HyY5nW48JVGdDUrFYw&s=09",
      },
      profile:"./assets/teams/Aman.jpg",
      cover: "/assets/teams/7.png",
    }, */
    {
      name: "Aman Parida",
      position: "President",
      socials: {
        github: "/", 
        linkedin: "https://www.linkedin.com/in/aman-parida-794b19251/",
        twitter: "https://x.com/AmanParida2003",
      },
      profile:"./assets/teams/Aman.jpg",
      cover: "/assets/teams/7.png",
    },
    {
      name: "Abhinav Kumar",
      position: "TechLead",
      socials: {
        github: "https://github.com/MajorTimberWolf", 
        linkedin: "https://www.linkedin.com/in/abhinav-rajeev-kumar/",
        twitter: "hhttps://twitter.com/MajorTimbWlf21",
      },
      profile:
        "./assets/teams/feb2025/Abhinav.jpg",
      cover: "/images/pratham-cover.png",
    },
    {
      name: "Ahaan Sekhar Das",
      position: "TechLead",
      socials: {
        github: "https://github.com/ahaan1984/", 
        linkedin: "https://www.linkedin.com/in/asd1984/",
        twitter: "https://x.com/ahaan1984",
      },
      profile:"./assets/teams/feb2025/Ahaan.jpg",
      cover: "/assets/teams/7.png",
    },
    
    
    
    /*{
      name: "Raj Kakadia",
      position: "CorporateLead",
      socials: {
        github: "https://github.com/rajkadakia", 
        linkedin: "https://www.linkedin.com/in/raj-kadakia-787056256",
        twitter: "https://twitter.com/kadakia_raj?t=U4f-R-HB5GQlSXdazAIqXQ&s=08",
      },
      profile:"./assets/teams/Raj.jpg",
      cover: "/assets/teams/D1.png",
    }, */
    {
      name: "Aryaman Batra",
      position: "CreativesLead",
      socials: {
        github: "https://github.com/Aryaman2403", 
        linkedin: "https://www.linkedin.com/in/aryaman-batra-974263252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        twitter: "https://x.com/aryamanbatra24?s=21",
      },
      profile:"./assets/teams/feb2025/Aryaman.jpeg",
      cover: "/assets/teams/7.png",
    },
    {
      name: "Ayushman Anal",
      position: "OperationsLead",
      socials: {
        github: "https://github.com/ayushmananal", 
        linkedin: "https://www.linkedin.com/in/ayushman-anal-960737252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        twitter: "https://x.com/ayushmananal?s=21",
      },
      profile:"./assets/teams/feb2025/Ayushman.jpeg",
      cover: "/assets/teams/7.png",
    },
    /*{
      name: "Vansika Sonthalia",
      position: "OperationsLead",
      socials: {
        github: "https://github.com/vsonthalia", 
        linkedin: "https://www.linkedin.com/in/vansika-sonthalia-5a113324a/",
        twitter: "https://twitter.com/v4nsika",
      },
      profile:"./assets/teams/Vansika.jpg",
      cover: "/assets/teams/9.png",
    },
    {
      name: "Pouravi Pawar",
      position: "corporatelead",
      socials: {
        github: "/", 
        linkedin: "/",
        twitter: "/",
      },
      profile:
        "/",
      cover: "/assets/teams/10.png",
    }, 
    {
      name: "Suhani Khanna",
      position: "EditorialLead",
      socials: {
        github: "https://github.com/SuhaniKhanna", 
        linkedin: "https://www.linkedin.com/in/suhani-khanna-903a1122a",
        twitter: "https://twitter.com/Suhanikhanna30",
      },
      profile:
        "./assets/teams/Suhani.jpg",
      cover: "/assets/teams/11.png",
    },
    {
      name: "Heer Mehta",
      position: "EditorialLead",
      socials: {
        github: "https://github.com/Heermehta9", 
        linkedin: "https://www.linkedin.com/in/heer-mehta-7a354a256/",
        twitter: "https://x.com/Heermehta_9?s=08",
      },
      profile:
        "./assets/teams/Heer.jpg",
      cover: "/assets/teams/12.png",
    },
    {
      name: "Ayushi Gupta",
      position: "OperationsLead",
      socials: {
        github: "https://github.com/dreamcatcher1712", 
        linkedin: "https://www.linkedin.com/in/ayushi-gupta-445970237",
        twitter: "https://twitter.com/ayunshiegupta",
      },
      profile:
        "./assets/teams/Ayushi.jpg",
      cover: "/assets/teams/11.png",
    },
    {
      name: "Ishika Jagatramka",
      position: "CreativesLead",
      socials: {
        github: "/", 
        linkedin: "https://www.linkedin.com/in/ishika-jagatramka-932225189?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "https://x.com/0xIshika?t=Dw8X6IquF6X_kDhQgQI0dQ&s=09",
      },
      profile:
        "./assets/teams/Ishika.jpeg",
      cover: "/assets/teams/13.png",
    },
    {
      name: 'Labeeb Khan',
      position: 'creativeslead',
      socials: 'www.linkedin.com/in/shweta-sanadhya',
      profile: 'https://drive.google.com/uc?export=view&id=1YPKT1ZHjFf8BMOt6qewz2gLeBLinE4d7',
      cover: "/assets/teams/11.png",
    }, */
    {
      name: "Rhythm Gupta",
        position: "ContentLead",
      socials: {
        github: "https://github.com/RhythmGupta22", 
        linkedin: "https://www.linkedin.com/in/rhythm-gupta-9b1187267/",
        twitter: "https://x.com/rhythm_gupta22",
      },
      profile:"./assets/teams/feb2025/Rhythm.jpeg",
      cover: "/assets/teams/7.png",
    },
    {
      name: "Ruchit Shivani",
        position: "ContentLead",
      socials: {
        github: "/", 
        linkedin: "https://www.linkedin.com/in/ruchit-shivani-114947255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        twitter: "/",
      },
      profile:"./assets/teams/feb2025/Ruchit.jpeg",
      cover: "/assets/teams/7.png",
    },
    {
      name: "Shreya Samridhi",
        position: "CorporateLead",
      socials: {
        github: "https://github.com/ShreyaSamridhi", 
        linkedin: "https://www.linkedin.com/in/shreya-samridhi-1a526124b/",
        twitter: "/",
      },
      profile:"./assets/teams/feb2025/Shreya.jpeg",
      cover: "/assets/teams/7.png",
    },
    {
      name: "Soumya Darshan",
        position: "ContentLead",
      socials: {
        github: "http://github.com/soumyaDKamila", 
        linkedin: "http://www.linkedin.com/in/soumya-darshan-kamila-6279a1213",
        twitter: "https://x.com/soumya_kamila",
      },
      profile:"./assets/teams/feb2025/Soumya.jpeg",
      cover: "/assets/teams/7.png",
    },


  ];
  const associates = [
    {
      name: "Arunbalaji PR",
      position: "Tech",
      socials: {
        github: "https://github.com/Arunbalaji6768",
        linkedin: "https://www.linkedin.com/in/arunbalaji-pr-881242288",
        twitter: "https://x.com/Arunbalaji87245?t=aljK7zxr8w5FsARTgksomw&s=09",
      },
      profile: "./assets/teams/feb2025/Arunbalaji2.jpg",
      cover: "/images/pratham-cover.png",
    },
    {
      name: "Kartikey Seth",
      position: "Tech",
      socials: {
        github: "https://github.com/KartikeyCode", 
        linkedin: "https://www.linkedin.com/in/codekartikey",
        twitter: "https://twitter.com/CodeKartikey?t=WWi0Tz4wRTlg8QCblux6XA&s=09",
      },
      profile:
        "./assets/teams/Kartikey.jpg",
      cover: "/assets/teams/14.png",
    },
    /*{
      name: "Ishaan Khurana",
      position: "Tech",
      socials: {
        github:"https://github.com/ik04", 
        linkedin:"https://www.linkedin.com/in/ishaan-khurana-398114212/",
        },
      profile:
        "./assets/teams/Ishaan.jpeg",
    },
    {
      name: "Ahaan Sekhar Das",
      position: "Tech",
      socials: {
        github: "https://github.com/ahaan1984", 
        linkedin: "https://www.linkedin.com/in/ahaan-sekhar-das-5642a3251/",
        twitter: "https://twitter.com/1asd133667",
      },
      profile:
        "./assets/teams/Ahaan.jpg",
      cover: "/assets/teams/D2.png",
    },
    {
      name: "Souvik Basak",
      position: "Tech",
      socials: {
        github: "https://github.com/voidsouvik", 
        linkedin: "https://www.linkedin.com/in/souvik-basak-a55421220/",
        twitter: "https://twitter.com/listen_souvik",
      },
      profile:
        "./assets/teams/Souvik.jpg",
      cover: "/assets/teams/1.png",
    },
    {
      name: "Mohd Zaid",
      position: "Tech",
      socials: {
        github: "https://github.com/dev-zaid/", 
        linkedin: "https://www.linkedin.com/in/dev-zaid/",
        twitter: "https://twitter.com/Za1D04",
      },
      profile:
        "./assets/teams/MohdZaid.jpeg",
      cover: "/assets/teams/1.png",
    },
    {
      name: "Hem Popat",
      position: "Crypto",
      socials: {
        github: "/", 
        linkedin: "/",
        twitter: "/",
      },
      profile:
        "./assets/teams/Varun.jpg",
      cover: "/assets/teams/D2.png",
    },
    {
      name: "Haaniya Iram",
      position: "Crypto",
      socials: {
        github: "https://github.com/haaniyairam", 
        linkedin: "https://www.linkedin.com/in/haaniya-iram-687402252/",
        twitter: "https://twitter.com/HaaniyaIram",
      },
      profile: "./assets/teams/Haaniya.jpg",
      cover: "/assets/teams/20.png",
    },
    {
      name: "Soumya Darshan",
      position: "Creatives",
      socials: {
        github: "http://github.com/soumyaDKamila", 
        linkedin: "http://www.linkedin.com/in/soumya-darshan-kamila-6279a1213",
        twitter: "https://twitter.com/soumya_kamila",
      },
      profile:
        "./assets/teams/Soumya.jpeg",
      cover: "/assets/teams/D1.png",
    },
    {
      name: "Tanisha Sharma",
      position: "Creatives",
      socials: {
        github: "https://github.com/Tanisha9704", 
        linkedin: "https://www.linkedin.com/in/tanisha-sharma-ba8a911bb",
        twitter: "https://twitter.com/_Tish9704",
      },
      profile: "./assets/teams/Tanisha.jpg",
      cover: "/assets/teams/D1.png",
    },
    {
      name: "Harsh Vardhan",
      position: "Creatives",
      socials: {
        github: "https://github.com/Harsh-Vardhan-Upadhyay", 
        linkedin: "https://www.linkedin.com/in/hvu20/",
        twitter: "https://twitter.com/Harshva40316846",
      },
      profile: "./assets/teams/Harshvardhan.jpeg",
      cover: "/assets/teams/D1.png",
    }, */
  ];
  const tech: any[] = [
   /* {
      name: "Akash",
      position: "Member",
      socials: {
        github: "https://github.com/akashpanda122", 
        linkedin: "https://www.linkedin.com/in/akash-panda-dev/",
        twitter:"https://twitter.com/akashpanda_dev",},
      profile:
        "./assets/teams/Akash.jpg",
    }, */
    {
      name: "Anannya Gupta",
      position: "Member",
      socials: {
        github: "https://github.com/UNIk0411", 
        linkedin: "https://www.linkedin.com/in/anannya-gupta",
        twitter:"https://x.com/unik_0411?t=FKWXREhY99GNBTfTvpsRnQ&s=09",},
      profile:
        "./assets/teams/feb2025/Anannya.jpg",
    },
    {
      name: "Aniketh Deb",
      position: "Member",
      socials: {
        github: "https://github.com/devaniketh", 
        linkedin: "https://www.linkedin.com/in/aniketh-deb-660632235",
        twitter:"https://x.com/Aniketh_Deb",},
      profile:
        "./assets/teams/feb2025/Aniketh.jpg",
    },
    {
      name: "Arkadyuti Chaudhuri",
      position: "Member",
      socials: {
        github: "https://github.com/Arkachau05", 
        linkedin: "https://www.linkedin.com/in/arkadyuti-chaudhuri/",
        twitter:"https://x.com/CArkadyuti",},
      profile:
        "./assets/teams/feb2025/Arkadyuti.jpg",
    },
    {
      name: "Arunbalaji PR",
      position: "Member",
      socials: {
        github: "https://github.com/Arunbalaji6768", 
        linkedin: "https://www.linkedin.com/in/arunbalaji-pr-881242288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter:"https://x.com/Arunbalaji87245?s=09",},
      profile:
        "./assets/teams/feb2025/Arunbalaji.jpg",
    },
    {
      name: "K Ajay",
      position: "Member",
      socials: {
        github: "https://github.com/Ajay73588", 
        linkedin: "https://www.linkedin.com/in/k-ajay-b1319928b/",
        twitter:"https://x.com/KAjay73588?s=09",},
      profile:
        "./assets/teams/feb2025/Ajay.jpg",
    },
    {
      name: "K Ajay",
      position: "Member",
      socials: {
        github: "https://github.com/Ajay73588", 
        linkedin: "https://www.linkedin.com/in/k-ajay-b1319928b/",
        twitter:"https://x.com/KAjay73588?s=09",},
      profile:
        "./assets/teams/feb2025/Ajay.jpg",
    },
    {
      name: "Kanev",
      position: "Member",
      socials: {
        github: "https://github.com/kanev-seth",
        linkedin: "https://www.linkedin.com/in/kanevseth/",
        twitter: "https://x.com/kanevseth",
      },
      profile:
        "./assets/teams/feb2025/Kanev.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Ananya Kar",
      position: "Member",
      socials: {
        github: "https://github.com/Ananyacodes",
        linkedin: "https://www.linkedin.com/in/ananya-kar-6378291b4/",
        twitter: "https://x.com/Ananyacodes",
      },
      profile:
        "./assets/teams/feb2025/Ananya.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Kavyansh",
      position: "Member",
      socials: {
        github: "https://github.com/kavyansh18",
        linkedin: "https://www.linkedin.com/in/kavyansh-kumar/",
        twitter: "https://twitter.com/0xkavyansh",
      },
      profile:
        "./assets/teams/feb2025/Kavyansh.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Priya Saxena",
      position: "Member",
      socials: {
        github: "https://github.com/Priya00300",
        linkedin: "https://www.linkedin.com/in/priya-saxena-a39638297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "https://x.com/0xpriyaS?t=EWucL5VnYXtG613xfRxFdQ&s=09",
      },
      profile:
        "./assets/teams/feb2025/Priya.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Swapneel Mondal",
      position: "Member",
      socials: {
        github: "https://github.com/SwapneelMondal",
        linkedin: "https://www.linkedin.com/in/swapneel-mondal-911233247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "/",
      },
      profile:
        "./assets/teams/feb2025/Madhurima.png",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Jnyandeep Singh",
      position: "Member",
      socials: {
        github: "https://github.com/jny0444",
        linkedin: "https://www.linkedin.com/in/thokchom-jnyandeep-singh-54012a288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        twitter: "https://x.com/0xjd_l1",
      },
      profile:
        "./assets/teams/feb2025/Jnyandeep.jpeg",
      cover: "/assets/teams/3.png",
    },
    /*{
      name: "Milind Mishra",
      position: "Member",
      socials: {
        github: "https://github.com/imilindmishra",
        linkedin: "https://www.linkedin.com/in/milind-mishra-2a3b23257/",
        twitter: "https://twitter.com/milindm91612787",
      },
      profile:
        "./assets/teams/milind mishra.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Taseen Iqbal",
      position: "Member",
      socials: {
        github: "https://github.com/PaleDeath",
        linkedin: "https://www.linkedin.com/in/taseen-iqbal-2b428125b/",
        twitter: "https://twitter.com/iqbal_taseen",
      },
      profile:
        "./assets/teams/TaseenIqbal.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Atul",
      position: "Member",
      socials: {
        github: "https://github.com/AtulRaghuvanshi73",
        linkedin: "https://www.linkedin.com/feed/",
        twitter: "https://twitter.com/AtulRaghu73",
      },
      profile:
        "./assets/teams/Atul Raghuvanshi.jpeg",
    },
    {
      name: "Varun",
      position: "Member",
      socials: {
        github: "https://github.com/Varun-2538",
        linkedin: "https://www.linkedin.com/in/varun-singh-422a27206/",
        twitter: "https://twitter.com/Varunsingh2534",
      },
      profile:
        "./assets/teams/Varun.jpeg",
    },
    {
      name: "Aayush Gautam",
      position: "member",
      socials: {
        github: "https://github.com/NinjaNeku",
        linkedin: "www.linkedin.com/in/aayush-gautam-a712b5266",
      },
      profile:
        "./assets/teams/Aayush Gautam.jpg",
    },
    {
      name: "Dhruv Sovasaria",
      position: "Tech",
      socials: {
        github: "https://github.com/dhruvsovasaria",
        linkedin: "www.linkedin.com/dhruvsovasaria",
        twitter: "https://x.com/dhruvsvsria?t=BsyRZcKNngZBLJrlP_JbRA&s=09",
      },
      profile:
        "./assets/teams/Dhruv Sovasaria.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Akrish",
      position: "Tech",
      socials: {
        github: "https://github.com/avadacodavra",
        linkedin: "https://linkedin.com/in/akrishweb3/",
        twitter: "https://twitter.com/Akrish847495",
      },
      profile:
        "./assets/teams/Akrish.png",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Kanev Seth",
      position: "Tech",
      socials: {
        github: "https://github.com/kanev-seth",
        linkedin: "https://www.linkedin.com/in/kanevseth/",
        twitter: "https://twitter.com/kanevseth",
      },
      profile:
        "./assets/teams/Kanev.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Yogita Jha",
      position: "Tech",
      socials: {
        github: "https://github.com/yogita005",
        linkedin: "https://www.linkedin.com/feed/",
        twitter: "https://twitter.com/ra2311029012651",
      },
      profile:
        "./assets/teams/YOGITA JHA.jpeg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Sarthak Patwal",
      position: "Tech",
      socials: {
        github: "https://github.com/sarthakpatwal2",
        linkedin: "https://www.linkedin.com/in/sarthak-patwal-998b51247/",
        twitter: "https://twitter.com/Sarthak__Patwal?t=lT8ZDfMfevDgrTeZ50PTrA&s=09",
      },
      profile:
        "./assets/teams/Sarthak Patwal.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Tanishq Jaiswal",
      position: "Tech",
      socials: {
        github: "https://github.com/TJ-2004",
        linkedin: "https://www.linkedin.com/in/tanishq-j-913152288",
        twitter: "https://twitter.com/tanishqjais9756",
      },
      profile:
        "./assets/teams/Tanishq Jaiswal.jpg",
      cover: "/assets/teams/3.png",
    }, */
    
  ];
  const crypto: any[] = [
    {
      name: "Mario Jacob",
      position: "Crypto",
      socials: {
        github: "https://github.com/Bronzeg21",
        linkedin: "https://www.linkedin.com/in/mario-alfred-jacob-6b1b98308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "https://x.com/marioo0806?t=MBtk5uXQBsfbT2dqNV5_eg&s=09",
      },
      profile:
        "./assets/teams/feb2025/Mario.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Aayushi Thakur",
      position: "Crypto",
      socials: {
        github: "https://github.com/Aayushi0110",
        linkedin: "https://www.linkedin.com/in/aayushi-thakur-50264728a/",
        twitter: "/",
      },
      profile:
        "./assets/teams/feb2025/Aayushi.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Arnav Sharma",
      position: "Crypto",
      socials: {
        github: "/",
        linkedin: "https://www.linkedin.com/in/arnav-sharma-35b475301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "https://x.com/arnav4790",
      },
      profile:
        "./assets/teams/feb2025/Arnav.png",
      cover: "/assets/teams/3.png",
    },
   /* {
      name: "Nilavo Dhar",
      position: "Crypto",
      socials: {
        github: "/",
        linkedin: "https://www.linkedin.com/in/nilavo-dhar-189bb8184/",
        twitter: "https://twitter.com/nilavo4granted",
      },
      profile:
        "./assets/teams/Nilavo.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Navam Endlay",
      position: "Crypto",
      socials: {
        github: "https://github.com/endlaynavam15",
        linkedin: "https://www.linkedin.com/in/navam-endlay-022503278/",
        twitter: "https://twitter.com/GurmanKaur_05",
      },
      profile:
        "./assets/teams/navam endlay.png",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Shaik Aftab",
      position: "Crypto",
      socials: {
        github: "https://github.com/ZenX777",
        twitter: "https://x.com/Skaftab95730?t=xOCFMAG6vVF6MDdLRmBxEA&s=09",
      },
      profile:
        "./assets/teams/Aftab Sk.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Shyam Jaiswal",
      position: "Crypto",
      socials: {
        github: "https://github.com/jaiswalism",
        linkedin: "https://www.linkedin.com/in/jaiswalism/",
        twitter: "https://x.com/jaiswalism",
      },
      profile:
        "./assets/teams/Shyam.png",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Tanishka Mudgal",
      position: "Crypto",
      socials: {
        github: "https://github.com/Tanishka-2004",
        linkedin: "https://www.linkedin.com/in/tanishka-mudgal-b62865221/",
        twitter: "https://x.com/_tanixaa_?t=RGNcrf9WyQv-MADWfKKtmQ&s=09",
      },
      profile:
        "./assets/teams/Tanishka.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Jayanth",
      position: "member",
      socials: {
        github: "https://www.github.com/jayanthjayanth", 
        linkedin: "https://www.linkedin.com/in/jayanthvarmav/",
        twitter:"https://www.twitter.com/Cryptojayanth",},
      profile:"./assets/teams/Jayanth.jpg",
    },
    {
      name: "Vaibhav",
      position: "member",
      socials: {
        github: "https://github.com/VaibhavRathii", 
        linkedin: "https://www.linkedin.com/in/vaibhav-rathi-3bb887224",
        twitter:"https://twitter.com/Vaibhavrathi02?t=7P5DnuZuxt9461Z9SFB_Sw&s=09",},
      profile:
        "./assets/teams/Vaibhav.jpg",
    }, */
  ];
  const corporate: any[] = [
    {
      name: "Abhishek Udayan",
      position: "Corporate",
      socials: {
        github: "https://github.com/abhisheksu38",
        linkedin: "https://www.linkedin.com/in/abhishek-samanna-udayan-010900286/",
        twitter: "/",
      },
      profile:
        "./assets/teams/feb2025/Abhishek.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Manika Sachdeva",
      position: "Corporate",
      socials: {
        github: "/",
        linkedin: "https://www.linkedin.com/in/manika-sachdeva-4a77a8281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "/",
      },
      profile:
        "./assets/teams/feb2025/Manika.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Mudit Khater",
      position: "Corporate",
      socials: {
        github: "https://github.com/mudit108-code",
        linkedin: "https://www.linkedin.com/in/mudit-khater-6a3931266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "/",
      },
      profile:
        "./assets/teams/feb2025/Mudit.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Parth saxena",
      position: "Corporate",
      socials: {
        github: "/",
        linkedin: "https://www.linkedin.com/in/parth-saxena-ra23?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "/",
      },
      profile:
        "./assets/teams/feb2025/Parth.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Shresth Chakraborty",
      position: "Corporate",
      socials: {
        github: "https://github.com/shresth2676",
        linkedin: "https://www.linkedin.com/in/shresth2676",
        twitter: "https://x.com/shresth2676/",
      },
      profile:
        "./assets/teams/feb2025/Shresth.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Akshat Pratik",
      position: "Corporate",
      socials: {
        github: "https://github.com/AkshatPratik",
        linkedin: "https://www.linkedin.com/in/akshat-pratik-803833228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        twitter: "/",
      },
      profile:
        "./assets/teams/feb2025/Akshat.jpeg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Mohd. Shibran Sajid",
      position: "Corporate",
      socials: {
        github: "https://github.com/mohdshibran",
        linkedin: "www.linkedin.com/in/mohd-shibran-sajid-996980297",
        twitter: "https://x.com/ShibranO9611",
      },
      profile:
        "./assets/teams/feb2025/mohd.jpg",
      cover: "/assets/teams/3.png",
    },
   
   /* {
      name: "Jashika Patel",
      position: "Corporate",
      socials: {
        github: "/",
        linkedin: "https://www.linkedin.com/in/jashika-patel-4a04b5264/",
        twitter: "https://x.com/jashika_patel56?s=21",
      },
      profile:
        "./assets/teams/Jashika Patel.jpeg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Amit Tiwari",
      position: "Corporate",
      socials: {
        github: "https://github.com/AmiTiwarii",
        linkedin: "https://www.linkedin.com/in/amit-tiwari-25563226b",
        twitter: "https://twitter.com/Amittiwari2003/",
      },
      profile:
        "./assets/teams/Amit.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Tanmany Soni",
      position: "Corporate",
      socials: {
        github: "https://github.com/Tanmay0909",
        linkedin: "https://www.linkedin.com/in/tanmay-soni-56491b251/",
        twitter: "https://twitter.com/tanmaysoni09",
      },
      profile:
        "./assets/teams/TANMAY SONI.jpg",
      cover: "/assets/teams/3.png",
    },    {
      name: "Kumar Mehul",
      position: "Corporate",
      socials: {
        github: "https://github.com/kumar-mehul",
        linkedin: "https://www.linkedin.com/in/kumar-mehul-a70200251/",
        twitter: "https://x.com/kumarmehul2401?t=ImaA2ZZcpG1G0r837UK_-A&s=09",
      },
      profile:
        "./assets/teams/Kumar Mehul.jpg",
      cover: "/assets/teams/3.png",
    },    {
      name: "Zein Naushad",
      position: "Corporate",
      socials: {
        github: "https://github.com/AmiTiwarii",
        linkedin: "https://www.linkedin.com/in/amit-tiwari-25563226b",
        twitter: "https://twitter.com/Amittiwari2003/",
      },
      profile:"./assets/teams/Zein.jpg",
      cover: "/assets/teams/3.png",
    },    {
      name: "Sejal Sharma",
      position: "Corporate",
      socials: {
        github: "https://github.com/Sejal707",
        linkedin: "https://www.linkedin.com/in/sejal-sharma-695330296/",
        twitter: "https://x.com/Sejalshh07?t=fMWN-ZxHMUZq8sShWzj9wQ&s=09",
      },
      profile:
        "./assets/teams/Sejal Sharma.jpg",
      cover: "/assets/teams/3.png",
    },    {
      name: "Anushka",
      position: "Corporate",
      socials: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
      profile:
        "./assets/teams/Anushka Chatterjee.jpg",
      cover: "/assets/teams/3.png",
    },    {
      name: "Mudit Khater",
      position: "Corporate",
      socials: {
        github: "/",
        linkedin: "https://www.linkedin.com/in/mudit-khater-6a3931266/",
        twitter: "https://x.com/MuditKhater108?t=8kkgS9Ign3-3lJUa72PfPA&s=09",
      },
      profile:
        "./assets/teams/Payal Khater.jpg",
      cover: "/assets/teams/3.png",
    },    {
      name: "Manika Sachdeva",
      position: "Corporate",
      socials: {
        github: "/",
        linkedin: "https://www.linkedin.com/in/manika-sachdeva-4a77a8281/",
        twitter: "https://x.com/SachdevaManika?t=RDH9z03ouRCo2PerQW8x_w&s=09",
      },
      profile:
        "./assets/teams/Manika.jpg",
      cover: "/assets/teams/3.png",
    },    {
      name: "Manan Batra",
      position: "Corporate",
      socials: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
      profile:
        "./assets/teams/Manan Batra.jpeg",
      cover: "/assets/teams/3.png",
    },    {
      name: "Ayush Panwar ",
      position: "Corporate",
      socials: {
        github: "https://github.com/AyushPanwar0705",
        linkedin: "https://www.linkedin.com/in/ayush-panwar-697639251/",
        twitter: "https://twitter.com/AyushPanwar0705",
      },
      profile:
        "./assets/teams/Ayush Panwar.png",
      cover: "/assets/teams/3.png",
    },    {
      name: "Yash kumar",
      position: "Corporate",
      socials: {
        github: "/",
        linkedin: "https://www.linkedin.com/in/yash-singh-380067245?/",
        twitter: "https://x.com/yashkum07186253?s=21",
      },
      profile:
        "./assets/teams/Yash.jpeg",
      cover: "/assets/teams/3.png",
    },    {
      name: "Vaishak shetty",
      position: "Corporate",
      socials: {
        github: "/",
        linkedin: "https://www.linkedin.com/in/vaishak-shetty-61440723a/",
        twitter: "https://twitter.com/Vaishak28",
      },
      profile:
        "./assets/teams/VAISHAK SHETTY.jpeg",
      cover: "/assets/teams/3.png",
    },    {
      name: "Shreya Samridhi",
      position: "Corporate",
      socials: {
        github: "https://github.com/ShreyaSamridhi",
        linkedin: "https://www.linkedin.com/in/shreya-samridhi-1a526124b/",
        twitter: "https://twitter.com/ShreyaSamr41250",
      },
      profile:
        "./assets/teams/Shreya.jpg",
      cover: "/assets/teams/3.png",
    }, */
  ]; 
  const creatives: any[] = [
    {
      name: "Mona Agrawal",
      position: "Corporate",
      socials: {
        github: "https://github.com/Mona-Agrawall",
        linkedin: "www.linkedin.com/in/mona-agrawal-",
        twitter: "https://x.com/Mona_Agrawall?t=REjCoLQe9w7qhXdQ1sZNIw&s=09",
      },
      profile:
        "./assets/teams/feb2025/mona.jpg",
      cover: "/assets/teams/3.png",
    },
   /* {
      name: "Aryaman Batra ",
      position: "Creatives",
      socials: {
        github: "https://github.com/Aryaman2403",
        linkedin: "https://www.linkedin.com/in/aryaman-batra-974263252/",
        twitter: "https://x.com/AryamanBatra24?s=09",
      },
      profile:
        "./assets/teams/ARYAMAN BATRA.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Manmohan Yadav",
      position: "Creatives",
      socials: {
        github: "/",
        linkedin: "https://www.linkedin.com/in/manmohanyadav777?",
        twitter: "x.com/mann2104",
      },
      profile:
        "./assets/teams/MANMOHAN YADAV.PNG",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Pranav",
      position: "Creatives",
      socials: {
        github: "https://github.com/pranav2205",
        linkedin: "http://linkedin.com/in/pranav-mathilakath-77929a24a",
        twitter: "https://twitter.com/mpranavv",
      },
      profile:
        "./assets/teams/PranavM.jpeg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "M.Rakshavihasini",
      position: "Creatives",
      socials: {
        github: "https://github.com/Rakshavihasini",
        linkedin: "https://www.linkedin.com/in/rakshavihasini-m-6b7b1a259/",
        twitter: "/",
      },
      profile:
        "./assets/teams/Raksha.jpg",
      cover: "/assets/teams/3.png",
    },    {
      name: "Baibhav Kumar ",
      position: "Creatives",
      socials: {
        github: "/",
        linkedin: "https://www.linkedin.com/in/baibhav-op",
        twitter: "/",
      },
      profile:
        "./assets/teams/Baibhav.png",
      cover: "/assets/teams/3.png",
    },    {
      name: "Ayush Kaushik ",
      position: "Creatives",
      socials: {
        github: "https://github.com/AyushKaushik07",
        linkedin: "https://www.linkedin.com/in/ayush-kaushik-11a182267/",
        twitter: "https://x.com/AyushKaush8407?t=5lE3e9ionmxyx1arGo-KEQ&s=09",
      },
      profile: "./assets/teams/Ayush Kaushik.jpg",
      cover: "/assets/teams/3.png",
    }, */
  ]; 
  const editorial: any[] = [
    {
      name: "Vinibrian",
      position: "Editorial",
      socials: {
        github: "/",
        linkedin: "https://www.linkedin.com/in/vinibrian-fernando-95208b328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "https://x.com/vinibriann?t=aHZjfLpwCgbfoyp1VTS9DQ&s=09",
      },
      profile:
        "./assets/teams/feb2025/Vinibrian.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Priyanshu Swami",
      position: "Editorial",
      socials: {
        github: "https://github.com/Priyanshu6996",
        linkedin: "https://www.linkedin.com/in/priyanshu-swami-7aa254217/",
        twitter: "https://x.com/PriyanshuSwam_",
      },
      profile:
        "./assets/teams/feb2025/Priyanshu.jpg",
      cover: "/assets/teams/3.png",
    },
   /* {
      name: "Ruchit Shivani",
      position: "Editorial",
      socials: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
      profile:
        "./assets/teams/Varun.jpg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Shubham",
      position: "Creatives",
      socials: {
        github: "https://github.com/shubhamranjan4",
        linkedin: "https://www.linkedin.com/in/shubham-ranjan-361976288/",
        twitter: "https://x.com/Shubham42445559?t=YJPS_F5JbR6J1ihLbY0Xpw&s=08",
      },
      profile:
        "./assets/teams/Shubham.jpg",
      cover: "/assets/teams/3.png",
    }, */
  ];
  const ops: any[] = [
   /* {
      name: "Mudit",
      position: "member",
      socials: {
        github: "https://www.linkedin.com/in/mudit-khater-6a3931266", 
        linkedin: "https://www.linkedin.com/in/mudit-khater-6a3931266",
        twitter: "https://twitter.com/MuditKhater108?t=3D2VsKqqQwoQTa-_E5FQEA&s=09",},
      profile:"./assets/teams/Payal Khater.jpg",    },
    {
      name: "Ayushman",
      position: "member",
      socials: {
        github: "https://github.com/ayushmananal", 
        linkedin: "https://www.linkedin.com/in/ayushman-anal-960737252",
        twitter:"https://twitter.com/ayushmananal",},
      profile:
        "./assets/teams/Ayushman.jpg",
    },
    {
      name: "Soumya",
      position: "member",
      socials: {
        github: "https://github.com/thisissoumyaa/",
        linkedin: "https://www.linkedin.com/in/soumya-haswani-0031411b6",
        twitter:"/",},
      profile:
        "./assets/teams/Soumya Haswani.jpg",
    },
    {
      name: "Tanmay",
      position: "member",
      socials: {
        github: "https://github.com/Tanmay0909", 
        linkedin: "https://www.linkedin.com/in/tanmay-soni-56491b251",
        twitter:"https://twitter.com/tanmaysoni09?t=NVg8ZcS6k4OOc2r-bQcdQA&s=09",},
      profile:
        "./assets/teams/TANMAY SONI.jpg",
    },
    {
      name: "Shradha",
      position: "member",
      socials: {
        github: "https://github.com/Shradharai", 
        linkedin: "https://www.linkedin.com/in/shradha-rai-18460a213/",
        twitter:"https://twitter.com/shradharai4u?t=GitXnaemFiYi1fYrXjRinA&s=09",},
      profile: "./assets/teams/Shradha.jpg",
    },
    {
      name: "Aditi",
      position: "member",
      socials: {
        github: "https://github.com/AditiSahoo", 
        linkedin: "https://www.linkedin.com/in/aditi-sahoo-475919251/",
        twitter:"https://twitter.com/01AditiSahoo1",},
      profile:
        "./assets/teams/Aditi Sahoo.jpg",
    },
    {
      name: "Amit",
      position: "member",
      socials: {
        github: "https://github.com/AmiTiwarii", 
        linkedin: "https://www.linkedin.com/in/amit-tiwari-25563226b",
        twitter:"https://twitter.com/Amittiwari2003?t=oWzG8wfiH1gJGDzLp0Ybjg&s=09",},
      profile:
        "./assets/teams/Amit.jpg",
    },
    {
      name: "Mehul",
      position: "member",
      socials: {
        github: "https://github.com/kumar-mehul", 
        linkedin: "https://www.linkedin.com/in/kumar-mehul-a70200251",
        twitter:"https://twitter.com/kumarmehul2401?t=gShVp1rvkRhQGGvRuHoxRw&s=09",},
      profile:
        "./assets/teams/Kumar Mehul.jpg",
    },
    {
      name: "Aryan",
      position: "member",
      socials: {
        github: "https://github.com/AryanGupta9719", 
        linkedin: "https://www.linkedin.com/in/aryan-gupta-5b6613264/",
        twitter:"https://x.com/aryan9719?s=11",},
      profile:
        "./assets/teams/Aryan.jpg",
    }, */
  ];

  return (
    <>
      <Head>
        <title>Blockchain Club SRM | Team</title>
      </Head>
      <Layout className="flex flex-col gap-8 mt-8">
        <h1 className="font-bold text-white self-center">Our Team</h1>
        <h2 className="text-[#00D1FF] mt-4 font-semibold">Leads:</h2>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          {leads.map((ele, id) => (
            <TeamCard key={id} details={ele}></TeamCard>
          ))}
        </div>
        <h2 className="text-[#00D1FF] mt-8 font-semibold">Associates:</h2>
        <div className="flex flex-wrap gap-10 items-center justify-center mb-48">
          {associates.map((ele, id) => (
            <TeamCard key={id} details={ele}></TeamCard>
          ))}
        </div>
        <h2 className="text-[#00D1FF] mt-8 font-semibold">Tech team:</h2>
        <div className="flex flex-wrap gap-10 items-center justify-center mb-48">
          {tech.map((ele, id) => (
            <TeamMembersCard key={id} details={ele}></TeamMembersCard>
          ))}
        </div>
        <h2 className="text-[#00D1FF] mt-8 font-semibold">Crypto team:</h2>
        <div className="flex flex-wrap gap-10 items-center justify-center mb-48">
          {crypto.map((ele, id) => (
            <TeamMembersCard key={id} details={ele}></TeamMembersCard>
          ))}
        </div>
        <h2 className="text-[#00D1FF] mt-8 font-semibold">Corporate team:</h2>
        <div className="flex flex-wrap gap-10 items-center justify-center mb-48">
          {corporate.map((ele, id) => (
            <TeamMembersCard key={id} details={ele}></TeamMembersCard>
          ))}
        </div>
        <h2 className="text-[#00D1FF] mt-8 font-semibold">Creatives team:</h2>
        <div className="flex flex-wrap gap-10 items-center justify-center mb-48">
          {creatives.map((ele, id) => (
            <TeamMembersCard key={id} details={ele}></TeamMembersCard>
          ))}
        </div>
        <h2 className="text-[#00D1FF] mt-8 font-semibold">Editorial team:</h2>
        <div className="flex flex-wrap gap-10 items-center justify-center mb-48">
          {editorial.map((ele, id) => (
            <TeamMembersCard key={id} details={ele}></TeamMembersCard>
          ))}
        </div>
        <h2 className="text-[#00D1FF] mt-8 font-semibold">Operations team:</h2>
        <div className="flex flex-wrap gap-10 items-center justify-center mb-48">
          {ops.map((ele, id) => (
            <TeamMembersCard key={id} details={ele}></TeamMembersCard>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default team;