const projects = [

    {
        name: "Artsy",
        id: 2,
        info: "This is an e-ecommerce web app for art sales and purchases.",
        dev_tool: "Developed using ReactTS (Typescript) and SCSS.",
        about: "This is an e-commerce web app platform for the sales and purchase of art. Artists and artwork lovers can advertise and trade their arts as NFTs on the platform.",
        features: [
            {
                name: "Home Page",
                image: [
                    require("./images/artsy/1.png"),
                ],
            },

            {
                name: "Marketplace",
                image: [
                    require("./images/artsy/2.png"),
                    require("./images/artsy/3.png"),
                ],
            },
            {
                name: "Auction",
                image: [
                    require("./images/artsy/4.png"),
                    require("./images/artsy/5.png"),
                ],
            },
            {
                name: "Drop",
                image: [
                    require("./images/artsy/6.png"),
                ],
            },
            {
                name: "Cart",
                image: [
                    require("./images/artsy/7.png"),
                    require("./images/artsy/8.png"),
                    require("./images/artsy/9.png"),
                ],
            },
        ],
        link: "https://artsy-by-iyin.netlify.app/"
    },

    {
        name: "Musica",
        id: 3,
        info: "This is a music webapp that allows users to create and enjoy their personalised playlist anytime.",
        dev_tool: "Developed using ReactJS and SCSS.",
        about: "This webapp allows users to create and enjoy their personalised playlist anytime. Users can customize their playlist by including their preferred playlist name and description, as well as a playlist cover.",
        features: [
            {
                name: "Loading screen, Homepage",
                image: [
                    require("./images/musica/2.png"),
                    require("./images/musica/1.png")
                ],
            },

            {
                name: "My collections, playlist details, add palylist",
                image: [
                    require("./images/musica/3.png"),
                    require("./images/musica/4.png"),
                    require("./images/musica/5.png")
                ]
            },

            {
                name: "Search Page",
                image: [
                    require("./images/musica/6.png")
                ]
            }
        ],
        link: "https://musica-by-iyin.netlify.app/"
    },

    {
        name: "My Debtor",
        id: 1,
        info: "This is a fully developed website to assist schools with recovering student debts as well as prevent the admission of a debtor.",
        dev_tool: "Developed using ReactJS and CSS.",
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
        link: "https://mydebtor-by-iyin.netlify.app/"
    },

    {
        name: "Spotify",
        id: 4,
        info: "This is a Spotify web app.",
        dev_tool: "Developed using ReactJS and CSS.",
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