import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSlider from "./Component/HeroSlider/HeroSlider";
import CategorySlider from "./Component/CategorySlider/CategorySlider";
import BannerSection1 from "./Component/BannerSection1/BannerSection1";
import Adv from "./Component/Adv/Adv";
import Galleryadv from "./Component/Galleryadv/Galleryadv";
import BestsellersSection from "./Component/BestsellersSection/BestsellersSection";
import Television from "./Component/Television/Television";
import AdSlider from "./Component/AdSlider/AdSlider";


export default function Home() {
  return (
    <>
    <HeroSlider />
    <CategorySlider />
    <BannerSection1 />
    <Adv/>
    <Television />
    <Galleryadv />
    <BestsellersSection/>
    <AdSlider />
    </>
    
  );
}
