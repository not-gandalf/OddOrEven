import {App, View} from "framework7-react"
import React from "react"
import StartScreen from "./pages/StartScreen"
import CreateScreen from "./pages/CreateScreen"
import JoinScreen from "./pages/JoinScreen"

const f7params = {
    name: "Odd or Even",
    id: "dater-test-game",
    routes: [
        {
            path: "/",
            component: StartScreen,
        },
        {
            path: "/create/",
            component: CreateScreen,
        },
        {
            path: "/join/",
            component: JoinScreen,
        },
    ],
}

const AppComponent: React.FC = () => (
    <App params={f7params}>
        <View main url="/" />
    </App>
)

export default AppComponent
