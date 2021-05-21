import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useCameraStyles = makeStyles({
  cameraWrapper:{
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyItems: "center",
    alignItems: "center",
    overflow: 'hidden',
    backgroundColor: "#000000",
    '&:hover':{
      cursor: "pointer",
    }
  },
})

export default useCameraStyles
