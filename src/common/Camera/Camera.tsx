
import React, { useRef, useContext } from 'react'
// web camera library
import Webcam from 'react-webcam'
//Styled components ref
import useCameraStyles from './Camera.styles'
// window size hook
import { Size, useWindowSize } from '../../../hooks/useWindowSize'
// Mobx Store context
import { StoreContext } from '../StoreProvider/StoreProvider'


const Camera = ({
  setFrontPose,
  setSidePose,
  pose,
}: {
  setFrontPose: any
  setSidePose:any
  pose: string
}): JSX.Element => {
  // call store context
  const store = useContext(StoreContext)
  // retrieve window size
  const size: Size = useWindowSize()
  //Material Ui style classes
  const classes = useCameraStyles()
  // ref the webcam
  const camRef = useRef(null)
 

  return (
    <>
      <div
        style={{
          width: size.width,
          height: size.height,
        }}
        className={classes.cameraWrapper}
        onClick={() => {
          const imgBase64 = camRef.current.getScreenshot({width: 500, height: 300})
          if(pose === "front"){
            store.addFrontImage(imgBase64)
            setFrontPose(false)
          }
          if(pose === "side"){
            store.addSideImage(imgBase64)
            setSidePose(false)
          }

        }}
      >
        {typeof window !== 'undefined' &&
        typeof window.navigator !== 'undefined' ? (
          <Webcam mirrored audio={false} ref={camRef} height={size.height} />
        ) : null}
      </div>
    </>
  )
}

export default Camera
