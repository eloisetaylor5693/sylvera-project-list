import Image from "next/image";
import image from "./Banner-test.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <Image
        data-testid="hero-image"
        src={image}
        alt=""
        placeholder="blur"
        fill
        priority
      />
    </section>
  );
};

export default HeroSection;
