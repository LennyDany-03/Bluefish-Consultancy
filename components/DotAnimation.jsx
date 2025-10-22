import DotGrid from './DotGrid';

const DotAnimation = () => {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#151c24ff"
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

export default DotAnimation
