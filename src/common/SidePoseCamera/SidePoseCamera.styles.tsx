import { makeStyles } from '@material-ui/core/styles'

const useCameraStyles = makeStyles({
  canvas: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: '60px',
    left: 0,
    right: 0,
    zIndex: 9,
  },
  camera: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    zIndex: 9,
    top: '60px',
  },
})

export default useCameraStyles
