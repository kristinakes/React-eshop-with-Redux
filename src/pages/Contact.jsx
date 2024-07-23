import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import {GOOGLE_API_KEY} from "../utils/mapApiConfig.jsx";


import CardYellow from "../components/CardYellow.jsx";
import emailIcon from "../assets/icons/email.png";
import headphonesIcon from "../assets/icons/headphones.png";

function Contact() {
  const contacts = [
    {
      icon: headphonesIcon,
      title: "Phone number",
      text: "0475635352",
    },
    {
      icon: emailIcon,
      title: "E-mail",
      text: "gadget@store.com",
    },
  ];

  const address = "Station Nord 23456, Greenland";

  //Coordinates for map
  const position = { lat: 81.60216234789942, lng: -16.661858281016755 };

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 m-5 p-5 justify-center align-center">
      <div className="flex flex-col justify-evenly my-10">
        <h1 className="text-xl md:text-5xl font-bold">
          Contact us by Phone, Email, or Visit us in our Office!
        </h1>
        <div className="h-[330px] w-[100%]">
          <p className="my-5">Our address: {address}</p>
          <APIProvider apiKey={GOOGLE_API_KEY}>
            <Map defaultCenter={position} defaultZoom={10}>
              <Marker position={position}/>
            </Map>
          </APIProvider>
        </div>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center">
        {contacts.map((contact) => (
          <CardYellow
            key={contact.title}
            icon={contact.icon}
            title={contact.title}
            text={contact.text}
          />
        ))}
      </div>
    </div>
  );
}
export default Contact;
