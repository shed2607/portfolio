import CalcDark from "../assets/images/calcdark.png";
import CalcLight from "../assets/images/calclight.png";
import Loginui1 from "../assets/images/loginui1.png";
import Loginui2 from "../assets/images/loginui2.png";
import MenuImg1 from "../assets/images/menu1.png";
import MenuImg2 from "../assets/images/menu2.png";
import Ticklight from "../assets/images/ticlight.png";
import Tickdark from "../assets/images/ticdark.png";

const slidesData = [
  {
    id: 1,
    title: "Calculator App",
    description:
      "Discover a functional and beautifully designed calculator app. Switch between light and dark modes for your preference, enjoying a pixel-perfect interface for a pleasing calculation experience.",
    images: {
      light: CalcLight,
      dark: CalcDark,
    },
    link: "https://github.com/shed2607/Flutter-Calculator-UI",
  },
  {
    id: 2,
    title: "Login UI",
    description:
      "Start your secure login and registration journey with my user-friendly UI, seamlessly linked to Firebase for enhanced functionality. Enjoy a sleek, intuitive interface that adapts to your preferences for smooth access to your services.",
    images: {
      light: Loginui1,
      dark: Loginui2,
    },
    link: "https://github.com/shed2607/Login-Registration-UI",
  },
  {
    id: 3,
    title: "Menu App",
    description:
      "Enhance your dining with my menu app, linked to Firebase for real-time updates. Explore a variety of food and drinks, beautifully presented. Stay updated on the latest offerings in a sleek interface.",
    images: {
      light: MenuImg1,
      dark: MenuImg2,
    },
    link: "https://github.com/shed2607/Resturant-And-Bar-Menu-App",
  },
  {
    id: 4,
    title: "Tic Tac Toe Game",
    description:
      "Enjoy a beautifully designed Tic Tac Toe app with pixel-perfect precision. Switch between light and dark modes for your comfort. Challenge friends or AI in a visually captivating game.",
    images: {
      light: Ticklight,
      dark: Tickdark,
    },
    link: "https://github.com/shed2607/Tic-Tac-Toe-Game-Light---Dark",
  },
];

export default slidesData;
