import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  infoButton: {
    width: '25px',
    height: '25px',
  },
  contentWrapper: {
    borderRadius: '20px 20px 0px 0px',
    boxShadow: '0 -15px 15px -15px #777777',
    backgroundColor: '#ffffff',
    position: 'relative',
    top: '30px',
    paddingLeft: 15,
  },
  thumbnailSubtitle1: {
    fontFamily: 'Montserrat',
    color: '#000000',
    fontSize: '1rem',
    textAlign: 'center',
    position: 'relative',
    bottom: '30px'
    
  },
  thumbnailSubtitle2: {
    fontFamily: 'Montserrat',
    color: '#000000',
    fontSize: '1rem',
    textAlign: 'center',
    position: 'relative',
    right:'30px',
    bottom: '30px',
    
  },
  textWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: '100%',
    height: 'auto',
    position: 'relative',
    left: '20px',
    top: '10px',
  },
  pageTitle: {
    fontFamily: 'Montserrat',
    color: '#1958BC',
    fontWeight: 'bold',
    width: '100%',
    fontSize: '1.8rem',
  },
  pageText: {
    fontFamily: 'Montserrat',
    color: '#000000',
    width: '100%',
    fontWeight: 'normal',
    fontSize: '1rem',
  },
  thumbnailWrapper: {
    width: '100%',
    height: 'auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    position: 'relative',
    top: '20px',
    gap: 20,
  },
  frontImage: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    justifyItems: 'center',
    backgroundColor: '#FFD733',
    position: 'relative',
    left: "15px",
    overflow: "hidden",
  },
  sideImage: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    justifyItems: 'center',
    backgroundColor: '#FFD733',
    position: 'relative',
    right: "15px",
    overflow: "hidden",
  },
  preview: {
    position: 'relative',
    bottom: '50px',
    zIndex: 3,
    overflow: 'hidden',
  },
  cameraIcon: {
    position: 'relative',

    zIndex: 3,
    overflow: 'hidden',
  },
})
