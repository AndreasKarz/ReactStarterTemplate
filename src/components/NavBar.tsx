/**
 * https://floatui.com/components/navbars
 * https://icon-sets.iconify.design/
 */
import NavBarLink from "./NavBarLink";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const { t } = useTranslation();
  const [state, setState] = useState(false);

  const navigation = [
    { label: t("nav.home"), path: "/", icon: "fluent:home-12-regular" },
    {
      label: t("nav.prices"),
      path: "/pricing",
      icon: "fluent:money-24-regular",
    },
    {
      label: t("nav.contact"),
      path: "/contact",
      icon: "fluent:contact-card-ribbon-16-regular",
    },
    {
      label: t("nav.about"),
      path: "/about",
      icon: "fluent:people-team-20-regular",
    },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white/90 shadow-lg backdrop-blur-md">
      <div className="page container">
        <div className="items-center md:flex">
          <div className="flex items-center justify-between py-1 md:block md:py-3 ">
            <a href="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWa-gW4n2m_1rLpvlkE_1SzBSEHFj8LoP9Qw&usqp=CAU"
                width={100}
                height={40}
                alt="Float UI logo"
              />
            </a>
            <div className="md:hidden">
              <button
                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`mt-0 flex-1 justify-self-center pb-3 md:block md:pb-0  ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="flex flex-col justify-end space-y-0 pr-0 md:flex md:flex-row">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="ml-0 md:ml-4"
                    onClick={() => setState(false)}
                  >
                    <NavBarLink
                      to={item.path}
                      icon={item.icon}
                      label={item.label}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
