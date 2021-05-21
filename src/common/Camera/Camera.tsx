
import React, { useRef } from 'react'
// web camera library
import Webcam from 'react-webcam'
//Styled components ref
import useCameraStyles from './Camera.styles'
import { Size, useWindowSize } from '../../../hooks/useWindowSize'


const Camera = ({
  setFrontPose,
  setSidePose,
  pose,
  setSidePoseImage,
  setFrontPoseImage,
}: {
  setFrontPose: any
  setSidePose:any
  pose: string
  setSidePoseImage: any,
  setFrontPoseImage: any,
}): JSX.Element => {
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
            setFrontPoseImage(imgBase64)
            setFrontPose(false)
          }
          if(pose === "side"){
            setSidePoseImage(imgBase64)
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
