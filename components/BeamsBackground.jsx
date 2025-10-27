import Beams from './Beams';

const BeamsBackground = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
    <Beams
        beamWidth={2}
        beamHeight={15}
        beamNumber={12}
        lightColor="#ffffff"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={0}
    />
    </div>
  )
}

export default BeamsBackground
