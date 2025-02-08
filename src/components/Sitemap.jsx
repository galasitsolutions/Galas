import React from "react";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About", sections: ["Team", "History", "Mission"] },
    {
      path: "/services",
      name: "Services",
      sections: ["Digital Marketing", "IT Services", "Staffing Services"],
    },
    {
      path: "/career",
      name: "Career",
      sections: ["Open Positions", "Internships", "Culture"],
    },
    {
      path: "/blog",
      name: "Blog",
      sections: ["Latest Posts", "Categories", "Tags"],
    },
    {
      path: "/event",
      name: "Event",
      sections: ["Upcoming Events", "Past Events", "Event Calendar"],
    },
  ];

  return (
    <div className="sitemap container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Sitemap</h1>
      <ul className="space-y-4">
        {routes.map((route, index) => (
          <li key={index} className="group">
            <Link to={route.path} className="text-blue-500 hover:underline">
              {route.name}
            </Link>
            {route.sections && (
              <ul className="ml-4 mt-2 space-y-2 border-l-2 border-gray-300 pl-4">
                {route.sections.map((section, subIndex) => (
                  <li
                    key={subIndex}
                    className="group-hover:ml-2 transition-all duration-300"
                  >
                    <Link
                      to={`${route.path}#${section
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      className="text-blue-500 hover:underline"
                    >
                      {section}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sitemap;
