import linkedIn from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        href="https://www.linkedin.com"
        className="hover:opacity-50 transition duration-500"
        target="_blank" //opens up in new tab
        rel="noreferrer" //if use _blank need to use this so we don't have hold browser issues
      >
        <img src={linkedIn} alt="linkedin-link" />
      </a>
      <a
        href="https://www.twitter.com"
        className="hover:opacity-50 transition duration-500"
        target="_blank" //opens up in new tab
        rel="noreferrer" //if use _blank need to use this so we don't have hold browser issues
      >
        <img src={twitter} alt="twitter-link" />
      </a>
      <a
        href="https://www.facebook.com"
        className="hover:opacity-50 transition duration-500"
        target="_blank" //opens up in new tab
        rel="noreferrer" //if use _blank need to use this so we don't have hold browser issues
      >
        <img src={facebook} alt="facebook-link" />
      </a>
      <a
        href="https://www.instagram.com"
        className="hover:opacity-50 transition duration-500"
        target="_blank" //opens up in new tab
        rel="noreferrer" //if use _blank need to use this so we don't have hold browser issues
      >
        <img src={instagram} alt="instagram-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
