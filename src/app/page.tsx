import Footer from "../components/Footer";
import ImagePane from "../components/ImagePane";
import { ProductsSection } from "../components/ProductsSection";
import StatusSection from "../components/StatusSection";
import TeamSection from "../components/TeamSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="body-font min-h-screen flex-grow flex flex-col justify-center items-stretch">
        <div className="container px-5 py-8 mx-auto flex flex-wrap">
          <ImagePane />
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center w-full flex-auto">
            <StatusSection />
            <ProductsSection />
            <TeamSection />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
