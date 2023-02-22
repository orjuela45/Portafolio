import { Image } from "../images/Image";

const socialNetworks = [
  {
    name: "Github",
    url: "https://github.com/orjuela45",
    image: "./github.png",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/miguel-angel-orjuela-riaño-1baa40177/",
    image: "./linkedin.png",
  },
];

export const SocialNetworks = () => {
  return (
    <>
      {socialNetworks.map((item) =>
        <a key={item.name} href={item.url} className="col-auto m-1" target="_blank">
          <Image url={item.image} alt={item.alt} width={"30px"} />
        </a>
      )}
    </>
  );
};
