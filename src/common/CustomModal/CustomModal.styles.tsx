import { makeStyles } from '@material-ui/core/styles'

export const useModalStyles = makeStyles({

  modalButtonWrapper:{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    justifyItems: 'center',
  },
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    justifyItems: 'center',
    borderRadius: '10px 10px 10px 10px',
    boxShadow: '0 -15px 15px -15px #777777',
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: '40%',
    width: "350px",
    height: "300px",
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "40px",
    paddingBottom: "40px",
  },
  modalWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    justifyItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  pageTitle: {
    fontFamily: 'Montserrat',
    color: '#1958BC',
    fontWeight: 'bold',
    width: '100%',
    fontSize: '1.5rem',
  },
  pageText: {
    fontFamily: 'Montserrat',
    color: '#000000',
    width: '100%',
    fontWeight: 'normal',
    fontSize: '1rem',
  },
})
