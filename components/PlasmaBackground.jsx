import Plasma from './Plasma';

const PlasmaBackground = () => {
  return (
    <div style={{ width: '100%', height: '800px', position: 'relative' }}>
        <Plasma 
            color="#ff6b35"
            speed={0.6}
            direction="forward"
            scale={1.1}
            opacity={0.8}
            mouseInteractive={true}
        />
    </div>
  )
}

export default PlasmaBackground
