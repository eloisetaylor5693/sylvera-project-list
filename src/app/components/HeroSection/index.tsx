import Image from "next/image";
import image from "./Banner-test.png";

const HeroSection = (): JSX.Element  => {
  return (
    <section className="w-full h-44 max-h-44 relative z-1">
      <Image
        data-testid="hero-image"
        src={image}
        alt=""
        placeholder="blur"
        layout="fill"
        fill
    
        // height="500"
        // width="1440"
        priority
      />
    </section>
  );
};

export default HeroSection;
