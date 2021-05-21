import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  pageWrapper: {
    display: 'block',
    backgroundColor: '#FFD733',
    overflow: 'hidden',
  },
  pageHeader: {
    display: 'grid',
    gridTemplateColumns: '1fr 5fr',
    justifyItems: 'center',
    alignItems: 'center',
    width: '100%',
    height: '40px',
    position: 'relative',
    top: '20px',
    left: '20px',
  },
  BackArrow: {},
})
