import { GiSoccerBall, GiThrowingBall, GiBoxingGlove, GiAmericanFootballPlayer  } from "react-icons/gi";
import { IoTennisballOutline } from "react-icons/io5";
import { FaFootballBall } from "react-icons/fa";
import { FaCarBurst } from "react-icons/fa6";


export const categories = [
    {
        label : 'All',
        icon: GiAmericanFootballPlayer 
    },
    {
        label : 'Soccer',
        icon: GiSoccerBall
    },
    {
        label : 'Cricket',
        icon: GiThrowingBall
    },
    {
        label : 'Tenis',
        icon: IoTennisballOutline
    },
    {
        label : 'Rugby',
        icon: FaFootballBall
    },
    {
        label : 'Boxing',
        icon: GiBoxingGlove
    },
    {
        label : 'Racing',
        icon: FaCarBurst 
    },

]