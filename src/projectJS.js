export const getAllProjects = () => {
    return [
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
            ],
            features: [
                "This is a simple niche graphic card selling website where users can purchase any product from this site.",
                "User can register and log in with email and password, user authenticated by Firebase.",
                "Only the admin of this website is able to add a new product, delete any product, and manage orders.",
                "Technology: HTML, CSS, Material UI, React.js, Firebase, Heroku, NodeJS, MongoDB"
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
            ],
            features: [
                "It is a simple tourism website where users can add tour package to the cart.",
                "User can register and log in with Google, Facebook, and email which was authenticated by Firebase.",
                "Users is able to add a new service, and manage orders.",
                "Technology: HTML, Tailwind CSS, React.js, Firebase, Heroku, NodeJS, MongoDB"
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
            ],
            features: [
                "A simple dental clinic website where users can buy medical accessories and take various dental treatments.",
                "Users can register and log in with Google, Facebook, and email which was authenticated by Firebase.",
                "Users can take appointments from the appointment section.",
                "Technology: HTML, Tailwind CSS, Tilt.js, ReactJS, SwiperJS, Firebase auth"
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
            ],
            features: [
                "A simple educational website where users can enroll in different types of courses.",
                "Technology: HTML, Bootstrap, ReactJS"
            ]
        }
    ]
}