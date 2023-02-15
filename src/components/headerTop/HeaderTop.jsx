import { LanguageFlags } from "../language/LanguageFlags";
import { SocialNetworks } from "./SocialNetworks";

export const HeaderTop = () => {
  return (
    <>
      <div className="row bg-dark justify-content-between">
        <div className="col-auto m-3">
          <LanguageFlags />
        </div>
        <div className="col-auto m-3">
          <SocialNetworks />
        </div>
      </div>
    </>
  );
};
