export default function Link(props) {
    const { name, href, className, active , interactiveLink, children } = props;
    const LinkClass = {
      footer: "hover:text-pink-500 hover:underline me-4 md:me-6 transition-colors",
      navbar: "px-3 py-2 rounded-md text-sm font-medium transition-colors",
    }



    return(
        <a
                key={name}
                href={href}
                className={`${LinkClass[className] || className } ${interactiveLink}`}
              >
                {children || name}
              </a>
    )
}