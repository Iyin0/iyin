const projects = [
    {
        name: "My Debtor",
        id: 1,
        info: "This is a fully developed website to assist schools with recovering student debts as well as prevent the admission od a debtor.",
        dev_tool: "Developed using React.js, Redux and CSS.",
        about: "My debtor is a school administrative webapp. It's primary function is to help schools recover debts from defaulting students, " +
            "who on many occasions leave for another school without balancing their debts. This app helps other schools track this type of students " +
            "so the will not be admitted to their school, which in turn helps them to prevent the defaulting student from owing in their school.",
        features: [
            {
                name: "Landing Page, Contact Page",
                image: [
                    require("./images/mydebtor/1.png"),
                    require("./images/mydebtor/2.png")
                ]

            },

            {
                name: "Signup, Authentication, KYC and Login",
                image: [
                    require("./images/mydebtor/3.png"),
                    require("./images/mydebtor/4.png"),
                    require("./images/mydebtor/5.png"),
                    require("./images/mydebtor/6.png"),
                    require("./images/mydebtor/7.png")
                ]
            },

            {
                name: "Contention Pages: Access this feature through 'Contend Debt' link on the footer",
                image: [
                    require("./images/mydebtor/8.png"),
                    require("./images/mydebtor/9.png"),
                    require("./images/mydebtor/10.png"),
                ]
            }
        ],
        link: "https://iyin0.github.io/mydebtor/"
    },

    {
        name: "Sneakers",
        id: 2,
        info: "This is a single page ecommerce web app.",
        dev_tool: "Developed using ReactJS, Redux and CSS.",
        about: "This is an ecommerce web app that provide users with an interactive webpage. Users can view the different images of the products, select the quantity of the item to buy and add it to their cart. The user gets notified of the added item and its quantity in the navigation bar. The user can also view the item in the cart and remove it if it is no longer needed.",
        features: [
            {
                name: "Purchase Page",
                image: [
                    require("./images/sneakers/1.png"),
                    require("./images/sneakers/2.png"),
                    require("./images/sneakers/3.png"),
                    require("./images/sneakers/4.png"),
                    require("./images/sneakers/5.png")
                ],
            },

            {
                name: "Item Image Viewer",
                image: [
                    require("./images/sneakers/6.png"),
                    require("./images/sneakers/7.png"),
                    require("./images/sneakers/8.png")
                ],
            },

            {
                name: "Mobile View",
                image: [
                    require("./images/sneakers/9.jpg"),
                    require("./images/sneakers/10.jpg"),
                    require("./images/sneakers/11.jpg"),
                    require("./images/sneakers/12.jpg"),
                    require("./images/sneakers/13.png")
                ],
            }
        ],
        link: "https://iyin0.github.io/sneakers/"
    },

    {
        name: "Huddle",
        id: 3,
        info: "This is the landing page for a web app which provides bloggers the avenue to interact with their readers.",
        dev_tool: "Developed using HTML and CSS.",
        about: "This is a single webpage which displays the features of the Huddle app. The webpage explains to the users how to use the app and the importance of the app. The aesthetically pleasing designs also attarcts users to the app.",
        features: [
            {
                name: "Landing Page",
                image: [
                    require("./images/huddle/1.png"),
                    require("./images/huddle/2.png"),
                    require("./images/huddle/3.png"),
                    require("./images/huddle/4.png"),
                    require("./images/huddle/5.png")
                ],
            },

            {
                name: "Mobile View",
                image: [require("./images/huddle/6.jpg")]
            }
        ],
        link: "https://iyin0.github.io/huddle/"
    },

    {
        name: "Spotify",
        id: 4,
        info: "This is a Spotify web app.",
        dev_tool: "Developed using ReactJS, Redux and CSS.",
        about: "This is a Sporify web app for listening and enjoying your favourite music. It features the use of Spotify API to manage the user's interest and interaction. The user's login is authenticated by Spotify so users' credentials are secure. The user, when logged in can view different playlists suggested on the homepage and through the search page. The user can also control playback of their favourite songs.",
        features: [
            {
                name: "Welcome Page",
                image: [
                    require("./images/spotify/1.png"),
                    require("./images/spotify/2.png"),
                    require("./images/spotify/3.png")
                ],
            },

            {
                name: "Login Page",
                image: [require("./images/spotify/4.png")]
            },

            {
                name: "Home Page",
                image: [
                    require("./images/spotify/5.png"),
                    require("./images/spotify/6.png"),
                    require("./images/spotify/7.png"),
                    require("./images/spotify/8.png"),
                ],
            },

            {
                name: "Search Page",
                image: [
                    require("./images/spotify/9.png"),
                    require("./images/spotify/10.png"),
                    require("./images/spotify/11.png"),
                ],
            },

            {
                name: "Liked Songs",
                image: [require("./images/spotify/12.png")]
            },
        ],
        link: "https://iyin0.github.io/spotify-web/"
    },

]

export { projects }