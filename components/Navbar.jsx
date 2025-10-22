"use client"
import StaggeredMenu from "./StaggeredMenu"

const Navbar = () => {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Projects", ariaLabel: "View our projects", link: "/projects" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ]

  const socialItems = [
    { label: "GitHub", link: "https://github.com" },
    { label: "Twitter", link: "https://twitter.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ]

  return (
    <div className="sticky top-0 z-50">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        logoUrl="/BlueFish-Logo.png"
        accentColor="#5227FF"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />
    </div>
  )
}

export default Navbar
 