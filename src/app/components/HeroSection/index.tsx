import Image from "next/image";
import image from "./Banner-test.png";

const HeroSection = () => {
  return (
    <section className="w-full max-h-3">
      <Image
        data-testid="hero-image"
        src={image}
        alt=""
        placeholder="blur"
    
        // height="500"
        // width="1440"
        priority
      />
    </section>
  );
};

export default HeroSection;
