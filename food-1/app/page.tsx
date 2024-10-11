import Aboutme from "./component/about-me";
import CounterOneSectionSpace from "./component/counter-one-section-page";
import TeamOneSectionSpaceTwo from "./component/team-one-section-space-two";
import FaqOne from "./component/faq-one";
import Banner from "./component/banner";
import MeatList from "./component/meat-list";
import ClientCarousel from "./component/client-carousel";
import BlogOneSectionSpaceTwo from "./component/blog-one-section-space-two";
import Pricing from "./component/pricing"
import WhyChoose from "./component/Whychoose";
export default function Home() {
  return (
    <>
      {/* <Banner /> */}
      {/* <MeatList /> */}
      <Aboutme />
      <CounterOneSectionSpace />
      <Pricing />
      <FaqOne />
      <WhyChoose/>
      <TeamOneSectionSpaceTwo />
      <BlogOneSectionSpaceTwo />
      {/* <ClientCarousel /> */}


    </>
  );
}
