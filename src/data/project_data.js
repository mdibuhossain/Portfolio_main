import campuslib from './images/campuslib_web.jpg'
import fitness from './images/fitness.jpeg'
import dental from './images/life_dental_care.jpeg'
import travel from './images/travel.jpeg'

export const project_data = {
    Web: [
        {
            type: "featured",
            name: "Campus Library",
            image: campuslib,
            description:
                "A collaborative web app centralizing educational resources for enhanced learning.",
            demo: "https://campuslib.web.app",
            tools: ["NodeJS", "MongoDB", "ReactJS", "GraphQL"],
        },
        {
            type: "featured",
            name: "FitnessCloud",
            image: fitness,
            description:
                "A responsive Gym service website.",
            demo: "https://fitness-ui.web.app/",
            source: "https://github.com/mdibuhossain/fitness_cloud-client_site",
            tools: ["NodeJS", "MongoDB", "ReactJS", "Redux"],
        },
        {
            type: "featured",
            name: "Life Dental Care",
            image: dental,
            description:
                "A website of Dental service center and pharmaceutical store.",
            demo: "https://life-dental-care.web.app/",
            source: "https://github.com/mdibuhossain/Life-Dental-Care-Client-site",
            tools: ["ReactJS", "Firebase"],
        },
        {
            type: "featured",
            name: "TravelWala",
            image: travel,
            description:
                "A CRUD Application of Travel blog site.",
            demo: "https://travelwala.web.app/",
            source: "https://github.com/mdibuhossain/travelWala-client-site",
            tools: ["ExpressJS", "MongoDB", "ReactJS"],
        },
        {
            type: "featured",
            name: "Simple Calculator",
            description:
                "A simple online calculator",
            demo: "https://02calculator-js.netlify.app/",
            source: "https://github.com/mdibuhossain/LiveCalculator-js",
            tools: ["JavaScript", "HTML", "CSS"],
        },
    ],
    Others: [
        {
            type: "featured",
            name: "E-ticket service",
            image: "",
            description:
                "A dektop application of E-ticket booking service",
            source: "https://github.com/mdibuhossain/train-ticket-booking-javaFX",
            tools: ["MySQL", "JavaFX", "Java"],
        },
        {
            type: "featured",
            name: "Chatting application",
            image: "",
            description:
                "A chat applicating over the same network and in different devices",
            source: "https://github.com/mdibuhossain/chatting-application-java-swing",
            tools: ["Java socket", "Java swing", "Java"],
        },
        {
            type: "featured",
            name: "Campus Library App",
            image: "",
            description:
                "A collaborative mobile app centralizing educational resources for enhanced learning.",
            source: "https://github.com/mdibuhossain/campuslib_flutter_app",
            tools: ["Flutter"],
        },
        {
            type: "featured",
            name: "EncryptStore",
            description:
                "A password management system.",
            source: "https://github.com/mdibuhossain/EncryptStore",
            tools: ["File system", "C"],
        },
        {
            type: "featured",
            name: "Weather Temperature",
            description: "A web app to get update of weather temperature of any city.",
            demo: "https://weather-tmp.netlify.app/",
            source: "https://github.com/mdibuhossain/weather-temperature-API-js",
            tools: ["JavaScript", "HTML", "CSS"],
        },
    ],
}
