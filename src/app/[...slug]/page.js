   "use client"
   
   import { useSession } from "next-auth/react"
   // const data = {
    //     "public_identifier": "stu-cut-04372521a",
    //     "profile_pic_url": "https://static.licdn.com/aero-v1/sc/h/1c5u578iilxfi4m4dvc4q810q",
    //     "background_cover_image_url": "https://static.licdn.com/aero-v1/sc/h/5q92mjc5c51bjlwaj3rs9aa82",
    //     "first_name": "Stu",
    //     "last_name": "Cut",
    //     "full_name": "Stu Cut",
    //     "follower_count": 1,
    //     "occupation": null,
    //     "headline": null,
    //     "summary": null,
    //     "country": "AU",
    //     "country_full_name": "Australia",
    //     "city": "Perth",
    //     "state": "Western Australia",
    //     "experiences": [],
    //     "education": [],
    //     "languages": [],
    //     "accomplishment_organisations": [],
    //     "accomplishment_publications": [],
    //     "accomplishment_honors_awards": [],
    //     "accomplishment_patents": [],
    //     "accomplishment_courses": [],
    //     "accomplishment_projects": [],
    //     "accomplishment_test_scores": [],
    //     "volunteer_work": [],
    //     "certifications": [],
    //     "connections": 1,
    //     "people_also_viewed": [],
    //     "recommendations": [],
    //     "activities": [],
    //     "similarly_named_profiles": [],
    //     "articles": [],
    //     "groups": [],
    //     "skills": [],
    //     "inferred_salary": null,
    //     "gender": null,
    //     "birth_date": null,
    //     "industry": null,
    //     "extra": null,
    //     "interests": [],
    //     "personal_emails": [],
    //     "personal_numbers": []
    // }

    import { Context } from "@/src/lib/context";
import { semanticColors } from "@nextui-org/theme";
import { Content } from "next/font/google";
import { useContext } from "react";
import { useScrollShadow } from "@nextui-org/react";
import Footer from "@/src/components/footer";

    // const data = {
    //     "public_identifier": "williamhgates",
    //     "profile_pic_url": "https://media-exp1.licdn.com/dms/image/C4D03AQHqRRhVsnaziA/profile-displayphoto-shrink_200_200/0/1626063510328?e=1640217600&v=beta&t=6sSKthJwkNGWUV2-V-8BQzirJFe7wBUCEuq7ZiE447A",
    //     "background_cover_image_url": "https://media-exp1.licdn.com/dms/image/C4D16AQHCmaRo1aaK2w/profile-displaybackgroundimage-shrink_200_800/0/1626063499170?e=1640217600&v=beta&t=TAwSSpIkYPG2ybh1caSxUYOHG92j5xPoxSyoWhvEsEQ",
    //     "first_name": "Bill",
    //     "last_name": "Gates",
    //     "full_name": "Bill Gates",
    //     "occupation": "Co-chair at Bill & Melinda Gates Foundation",
    //     "headline": "Co-chair, Bill & Melinda Gates Foundation",
    //     "summary": "Co-chair of the Bill & Melinda Gates Foundation. Founder of Breakthrough Energy. Co-founder of Microsoft. Voracious reader. Avid traveler. Active blogger.",
    //     "country": "US",
    //     "country_full_name": "United States of America",
    //     "city": "Seattle",
    //     "state": "Washington",
    //     "experiences": [
    //         {
    //             "starts_at": {
    //                 "day": 1,
    //                 "month": 1,
    //                 "year": 2000
    //             },
    //             "ends_at": null,
    //             "company": "Bill & Melinda Gates Foundation",
    //             "company_linkedin_profile_url": "https://www.linkedin.com/company/bill-&-melinda-gates-foundation",
    //             "title": "Co-chair",
    //             "description": null,
    //             "location": null,
    //             "logo_url": "https://media-exp1.licdn.com/dms/image/C4E0BAQE7Na_mKQhIJg/company-logo_100_100/0/1633731810932?e=1642636800&v=beta&t=hItj5lRZS_QmopnwbW-g_ihhjEHgQCgYA7KLrz-cRNw"
    //         },
    //         {
    //             "starts_at": {
    //                 "day": 1,
    //                 "month": 1,
    //                 "year": 2015
    //             },
    //             "ends_at": null,
    //             "company": "Breakthrough Energy",
    //             "company_linkedin_profile_url": "https://www.linkedin.com/company/breakthrough-energy",
    //             "title": "Founder",
    //             "description": null,
    //             "location": null,
    //             "logo_url": "https://media-exp1.licdn.com/dms/image/C4D0BAQGwD9vNu044FA/company-logo_100_100/0/1601560874941?e=1642636800&v=beta&t=WjzyQOPWUjX6ZCjKo6BUNErMtBWcLVpE4rvTSYc7fBI"
    //         },
    //         {
    //             "starts_at": {
    //                 "day": 1,
    //                 "month": 1,
    //                 "year": 1975
    //             },
    //             "ends_at": null,
    //             "company": "Microsoft",
    //             "company_linkedin_profile_url": "https://www.linkedin.com/company/microsoft",
    //             "title": "Co-founder",
    //             "description": null,
    //             "location": null,
    //             "logo_url": "https://media-exp1.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_100_100/0/1618231291419?e=1642636800&v=beta&t=MAq_qy-nRaL6rKgjUK2guITFDoNZKUA68gibX9vF2S8"
    //         }
    //     ],
    //     "education": [
    //         {
    //             "starts_at": {
    //                 "day": 1,
    //                 "month": 1,
    //                 "year": 1973
    //             },
    //             "ends_at": {
    //                 "day": 31,
    //                 "month": 12,
    //                 "year": 1975
    //             },
    //             "field_of_study": null,
    //             "degree_name": null,
    //             "school": "Harvard University",
    //             "description": null,
    //             "logo_url": "https://media-exp1.licdn.com/dms/image/C4E0BAQF5t62bcL0e9g/company-logo_100_100/0/1519855919126?e=1642636800&v=beta&t=Y6xmp31gvJUu_n6fuinB56w9xduD6RlmUj7vXVCZeQ4"
    //         },
    //         {
    //             "starts_at": null,
    //             "ends_at": null,
    //             "field_of_study": null,
    //             "degree_name": null,
    //             "school": "Lakeside School",
    //             "description": null,
    //             "logo_url": "https://media-exp1.licdn.com/dms/image/C4D0BAQENlfOPKBEk3Q/company-logo_100_100/0/1519856497259?e=1642636800&v=beta&t=r9w6E_bExlNGB7feracny_Lm8qeOFN_blwnYDilef6g"
    //         }
    //     ],
    //     "languages": [],
    //     "accomplishment_organisations": [],
    //     "accomplishment_publications": [],
    //     "accomplishment_honors_awards": [],
    //     "accomplishment_patents": [],
    //     "accomplishment_courses": [],
    //     "accomplishment_projects": [],
    //     "accomplishment_test_scores": [],
    //     "volunteer_work": [],
    //     "certifications": [],
    //     "connections": 8,
    //     "people_also_viewed": [],
    //     "recommendations": [],
    //     "activities": [
    //         {
    //             "title": "Reaching net zero will take bold action and creativity to accelerate the development of climate-smart technologies. The first cohort of Breakthrough…",
    //             "link": "https://www.linkedin.com/signup/cold-join",
    //             "activity_status": "Shared by Bill Gates"
    //         },
    //         {
    //             "title": "There are many reasons why students don’t go to college or pursue a postsecondary degree. College Advising Corps is providing guidance and support to…",
    //             "link": "https://www.linkedin.com/signup/cold-join",
    //             "activity_status": "Shared by Bill Gates"
    //         },
    //         {
    //             "title": "Microsoft supports strong climate and clean energy provisions in US budget reconciliation and infrastructure bills and encourages Congress to take…",
    //             "link": "https://www.linkedin.com/signup/cold-join",
    //             "activity_status": "Liked by Bill Gates"
    //         }
    //     ],
    //     "similarly_named_profiles": [
    //         {
    //             "name": "Bill Gates",
    //             "link": "https://www.linkedin.com/in/bill-gates-610",
    //             "summary": "Currently looking for Opportunity and Advancements.",
    //             "location": "Whitehall, PA"
    //         },
    //         {
    //             "name": "Bill Gates",
    //             "link": "https://www.linkedin.com/in/bill-gates-50939b1a1",
    //             "summary": "Janitor at Bill Gates Associates",
    //             "location": "Tompkins County, NY"
    //         },
    //         {
    //             "name": "Bill Gates",
    //             "link": "https://www.linkedin.com/in/bill-gates-b3320919",
    //             "summary": "GATES Solid Gold Investments ,Inc  LLC",
    //             "location": "Santa Rosa, CA"
    //         },
    //         {
    //             "name": "Bill Gates",
    //             "link": "https://www.linkedin.com/in/bill-gates-b1a606b0",
    //             "summary": "Maricopa County/PING Golf",
    //             "location": "Phoenix, AZ"
    //         }
    //     ],
    //     "articles": [
    //         {
    //             "title": "How to use vaccines more fairly and effectively",
    //             "link": "https://www.linkedin.com/pulse/how-use-vaccines-more-fairly-effectively-bill-gates",
    //             "published_date": {
    //                 "day": 13,
    //                 "month": 1,
    //                 "year": 2021
    //             },
    //             "author": "By Bill Gates",
    //             "image_url": "https://media-exp1.licdn.com/dms/image/C4D12AQE3UotyMzc87Q/article-cover_image-shrink_180_320/0/1634143523512?e=1640217600&v=beta&t=EFDRPoc3O9vDIfnwGkD4EaaoCXJpatIO0kxjGMxuzGA"
    //         },
    //         {
    //             "title": "Innovation and Inequity | 2021 Goalkeepers Report",
    //             "link": "https://www.linkedin.com/pulse/innovation-inequity-2021-goalkeepers-report-bill-gates",
    //             "published_date": {
    //                 "day": 14,
    //                 "month": 1,
    //                 "year": 2021
    //             },
    //             "author": "By Bill Gates",
    //             "image_url": "https://media-exp1.licdn.com/dms/image/C4D12AQF4STKts6wKuw/article-cover_image-shrink_180_320/0/1631638325036?e=1640217600&v=beta&t=e8HIAtzYVSi6Bas0BjlSK0NQ7oXSmPTZIicTAkDGBLk"
    //         },
    //         {
    //             "title": "How to fight malaria during a pandemic",
    //             "link": "https://www.linkedin.com/pulse/how-fight-malaria-during-pandemic-bill-gates",
    //             "published_date": {
    //                 "day": 25,
    //                 "month": 1,
    //                 "year": 2021
    //             },
    //             "author": "By Bill Gates",
    //             "image_url": "https://media-exp1.licdn.com/dms/image/C4D12AQHIypYcSh9X5A/article-cover_image-shrink_180_320/0/1629916418149?e=1640217600&v=beta&t=fYySRiVx78oYH0T2gxrqOj11ujNX4ye0VRJx0jMhhQo"
    //         }
    //     ]
    // }

    const data = {
        public_identifier: " v",
        profile_pic_url:
            "https://s3.us-west-000.backblazeb2.com/proxycurl/person/williamhgates/profile?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0004d7f56a0400b0000000001%2F20240202%2Fus-west-000%2Fs3%2Faws4_request&X-Amz-Date=20240202T223933Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=fbefe1621b2c936df9ebbee69c02b5d11ece9a99ebc010aa293a1af6da69240f",
        background_cover_image_url: null,
        first_name: "Bill",
        last_name: "Gates",
        full_name: "Bill Gates",
        follower_count: 35017520,
        occupation: "Co-chair at Bill & Melinda Gates Foundation",
        headline: "Co-chair, Bill & Melinda Gates Foundation",
        summary:
            "Co-chair of the Bill & Melinda Gates Foundation. Founder of Breakthrough Energy. Co-founder of Microsoft. Voracious reader. Avid traveler. Active blogger.",
        country: "US",
        country_full_name: "United States of America",
        city: null,
        state: null,
        experiences: [
            {
                starts_at: {
                    day: 1,
                    month: 1,
                    year: 2000,
                },
                ends_at: null,
                company: "Bill & Melinda Gates Foundation",
                company_linkedin_profile_url:
                    "https://www.linkedin.com/company/bill-&-melinda-gates-foundation",
                title: "Co-chair",
                description: null,
                location: null,
                logo_url:
                    "https://media.licdn.com/dms/image/C4E0BAQE7Na_mKQhIJg/company-logo_400_400/0/1633731811337/bill__melinda_gates_foundation_logo?e=1713398400&v=beta&t=TIfwfhnwSKEBfVBabRcKAxx1si31IL-RL2VyQZwSF40",
            },
            {
                starts_at: {
                    day: 1,
                    month: 1,
                    year: 2015,
                },
                ends_at: null,
                company: "Breakthrough Energy ",
                company_linkedin_profile_url:
                    "https://www.linkedin.com/company/breakthrough-energy",
                title: "Founder",
                description: null,
                location: null,
                logo_url:
                    "https://media.licdn.com/dms/image/C4D0BAQGwD9vNu044FA/company-logo_400_400/0/1630531940051/breakthrough_energy_ventures_logo?e=1713398400&v=beta&t=DuHR8fEorMAf9L5Jh-8nrL_AuNdp8w3k3CdnKAycXIo",
            },
            {
                starts_at: {
                    day: 1,
                    month: 1,
                    year: 1975,
                },
                ends_at: null,
                company: "Microsoft",
                company_linkedin_profile_url:
                    "https://www.linkedin.com/company/microsoft",
                title: "Co-founder",
                description: null,
                location: null,
                logo_url:
                    "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_400_400/0/1630652622688/microsoft_logo?e=1713398400&v=beta&t=18Ii3c8i1PvAsIxZ7n66dq04q0xONLctUifQVNxGwIY",
            },
        ],
        education: [
            {
                starts_at: {
                    day: 1,
                    month: 1,
                    year: 1973,
                },
                ends_at: {
                    day: 31,
                    month: 12,
                    year: 1975,
                },
                field_of_study: null,
                degree_name: null,
                school: "Harvard University",
                school_linkedin_profile_url:
                    "https://www.linkedin.com/company/1646/",
                description: null,
                logo_url:
                    "https://media.licdn.com/dms/image/C4E0BAQF5t62bcL0e9g/company-logo_400_400/0/1631318058235?e=1713398400&v=beta&t=UhxxEys9Sgv-Wa4BUXxkL2PSwLg0TiFYPtDzeDybkBU",
                grade: null,
                activities_and_societies: null,
            },
            {
                starts_at: null,
                ends_at: null,
                field_of_study: null,
                degree_name: null,
                school: "Lakeside School",
                school_linkedin_profile_url:
                    "https://www.linkedin.com/company/30288/",
                description: null,
                logo_url:
                    "https://media.licdn.com/dms/image/D560BAQGFmOQmzpxg9A/company-logo_400_400/0/1683732883164/lakeside_school_logo?e=1713398400&v=beta&t=NnPJcnk3KbJI_XCdSknhWEQ-JkqN8bQq-a4KFi50tHg",
                grade: null,
                activities_and_societies: null,
            },
        ],
        languages: [],
        accomplishment_organisations: [],
        accomplishment_publications: [],
        accomplishment_honors_awards: [],
        accomplishment_patents: [],
        accomplishment_courses: [],
        accomplishment_projects: [],
        accomplishment_test_scores: [],
        volunteer_work: [],
        certifications: [],
        connections: 9,
        people_also_viewed: [],
        recommendations: [],
        activities: [],
        similarly_named_profiles: [
            {
                name: "Bill Gates",
                link: "https://www.linkedin.com/in/bill-gates-610",
                summary: "Looking for connections within the IT field.",
                location: "Whitehall, PA",
            },
            {
                name: "Bill Gates",
                link: "https://www.linkedin.com/in/bill-gates-50939b1a1",
                summary: "Janitor at Bill Gates Associates",
                location: "Tompkins County, NY",
            },
            {
                name: "Bill Gates",
                link: "https://www.linkedin.com/in/bill-gates-b3320919",
                summary: "GATES Solid Gold Investments ,Inc  LLC",
                location: "Santa Rosa, CA",
            },
            {
                name: "Bill Gates",
                link: "https://www.linkedin.com/in/bill-gates-03935451",
                summary:
                    "President & CEO at Bedford Materials, AIM Global Logistics",
                location: "Boca Raton, FL",
            },
        ],
        articles: [],
        groups: [],
        skills: [],
        inferred_salary: null,
        gender: null,
        birth_date: null,
        industry: null,
        extra: null,
        interests: [
            "Bridge",
            "Developing New Vaccines",
            "Energy Policy",
            "Eradicating Polio",
            "Philanthropy and Volunteerism",
            "Reading",
            "Research and Development",
            "Taking Interesting Courses Online",
            "Technology and Innovation",
            "Tennis",
            "Traveling With Family",
        ],
        personal_emails: [],
        personal_numbers: [],
    };

    // import scrapedin from "scrapedin";
    export default function ProfilePage() {

       
       const {object} = useContext(Context)
       const session = useSession()
       const sessioText = JSON.stringify(session)
        return <div>
            <Footer></Footer>
        </div>
    }
