import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";

export const navigation = [
    {
        label : "فیلم و سریال",
        href : 'tv',
        icon : <PiTelevisionFill/>
    },
    {
        label : "فیلم",
        href : "movie",
        icon : <BiSolidMoviePlay/>
    }
]

export const mobileNavigation = [
    {
        label : "خانه",
        href : "/",
        icon : <MdHomeFilled/>
    },
    ...navigation,
    {
        label : "جستجو",
        href : "/search",
        icon : <IoSearchOutline/>
    }
]