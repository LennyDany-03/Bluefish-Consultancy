import CardNav from "./CardNav"

const App = () => {
  const items = [
    {
      label: "About",
      bgColor: "#1a1428",
      textColor: "#e0e0e0",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#241e3b",
      textColor: "#e0e0e0",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#2d2647",
      textColor: "#e0e0e0",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ]

  return (
    <CardNav
      logo="/logo.png"
      logoAlt="Company Logo"
      items={items}
      baseColor="#0c0a0fff"
      menuColor="#a0a0ff"
      buttonBgColor="#ffffffff"
      buttonTextColor="#000000ff"
      ease="power3.out"
    />
  )
}

export default App
