export const getAllProjects = () => {
    return[
        {
            id: 1,
            name: "graphiXshop",
            sites: {
                live: "https://graphix-shop.web.app/",
                client: "https://github.com/mdibuhossain/graphiXshop-client-site",
                server: "https://github.com/mdibuhossain/graphiXshop-server-site"
            },
            categories: [
                "NodeJS",
                "ReactJS",
                "JavaScript"
            ],
            images: [
                "./images/project/graphixshop/1.png",
                "./images/project/graphixshop/2.png",
                "./images/project/graphixshop/3.png"
            ]
        },
        {
            id: 2,
            name: "WorldTrip",
            sites: {
                live: "https://world-trip.web.app/",
                client: "https://github.com/mdibuhossain/WorldTrip-Client-site",
                server: "https://github.com/mdibuhossain/WorldTrip-Server-site"
            },
            categories: [
                "NodeJS",
                "ReactJS",
                "JavaScript"
            ],
            images: [
                "./images/project/worldtrip/1.png",
                "./images/project/worldtrip/2.png",
                "./images/project/worldtrip/3.png"
            ]
        },
        {
            id: 3,
            name: "Life Dental Care",
            sites: {
                live: "https://life-dental-care.web.app/",
                client: "https://github.com/mdibuhossain/Life-Dental-Care-Client-site",
                server: ""
            },
            server: "",
            categories: [
                "ReactJS",
                "JavaScript"
            ],
            images: [
                "./images/project/lifeDentalCare/1.png",
                "./images/project/lifeDentalCare/2.png",
                "./images/project/lifeDentalCare/3.png",
                "./images/project/lifeDentalCare/4.png"
            ]
        },
        {
            id: 4,
            name: "DevCourse",
            sites: {
                live: "https://devcourse.netlify.app/",
                client: "https://github.com/mdibuhossain/DevCourse-react-route",
                server: ""
            },
            server: "",
            categories: [
                "HTML",
                "CSS",
                "Bootstrap",
                "JavaScript"
            ],
            images: [
                "./images/project/devCourse/1.png",
                "./images/project/devCourse/2.png",
                "./images/project/devCourse/3.png",
                "./images/project/devCourse/4.png"
            ]
        }
    ]
}