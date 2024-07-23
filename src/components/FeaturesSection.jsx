import CardYellow from "./CardYellow";
import wifi from "../assets/icons/wifi.png";
import devices from "../assets/icons/devices.png";
import bulb from "../assets/icons/bulb.png";

function FeaturesSection() {
  const features = [
    {
      icon: wifi,
      title: "Wireless Freedom",
      text: "wireless gadgets that provide freedom of movement while using them",
    },
    {
      icon: devices,
      title: "Stay Connected",
      text: "gadgets that help people stay connected with their loved ones and colleagues",
    },
    {
      icon: bulb,
      title: "Smart Home",
      text: "gadgets that make your home smarter and more efficient at the space of your own home",
    },
  ];

  return (
    <div className="flex flex-col mx-auto my-10 items-center justify-evenly ">
      <h5 className="font-semibold sm:text-2xl md:text-4xl leading-10 text-black">
        Why Choose us?
      </h5>
      <div className="flex flex-wrap md:flex-nowrap justify-center mt-10 gap-10">
        {features.map((feature) => {
          return (
            <CardYellow
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
            />
          );
        })}
      </div>
    </div>
  );
}
export default FeaturesSection;
