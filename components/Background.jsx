import DotGrid from "./DotGrid"

const Background = () => {
  return (
    <div style={{ width: "100%", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 0 }}>
      <DotGrid
        dotSize={3}
        gap={13}
        baseColor="#241e3bff"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  )
}

export default Background
