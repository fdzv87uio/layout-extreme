import React, { useState } from 'react'
import { useStyles } from '../../styles/pose_selection.styles'
import Link from 'next/link'
import Image from 'next/image'
import Camera from '../common/Camera/Camera'
// window size hook
import { Size, useWindowSize } from '../../hooks/useWindowSize'
// import Page Layout
import PageLayout from '../common/PageLayout/PageLayout'
// store context
import { StoreContext } from '../common/StoreProvider/StoreProvider'
// Slide Animation
import { Slide } from '@material-ui/core';

export default function PoseSelection(): JSX.Element {
  // front Image and side Image Consts
  const [frontPoseImage, setFrontPoseImage ] = useState<any>(null) 
  const [sidePoseImage, setSidePoseImage ] = useState<any>(null) 
  // retrieve window size
  const size: Size = useWindowSize()
  // retrieve styles
  const classes = useStyles()
  // camera selection Hooks
  const [frontPose, setFrontPose] = useState<boolean>(false)
  const [sidePose, setSidePose] = useState<boolean>(false)

  if (sidePose === true) {
    return (
      <Camera
        setFrontPose={setFrontPose}
        setSidePose={setSidePose}
        pose="side"
        setFrontPoseImage={setFrontPoseImage}
        setSidePoseImage={setSidePoseImage}
      />
    )
  }

  else if (frontPose === true) {
    return (
      <Camera
        setFrontPose={setFrontPose}
        setSidePose={setSidePose}
        pose="front"
        setFrontPoseImage={setFrontPoseImage}
        setSidePoseImage={setSidePoseImage}
      />
    )
  } else {
    return (
      <>
      <PageLayout width={size.width} height={size.height} src={'/'}>
        <div
          className={classes.contentWrapper}
          style={{ width: size.width, height: size.height - 45 }}
        >
          <div className={classes.textWrapper}>
            <h1 className={classes.pageTitle}>
              Next we will take <br /> two photos
            </h1>
            <Link href="#">
              <img
                src="/images/Info_Button.png"
                className={classes.infoButton}
              />
            </Link>
            <p className={classes.pageText}>
              This works better wearing <br /> tighter fit clothing or even{' '}
              <br /> athletic or swimwear
            </p>
            <p className={classes.pageText}>Need a second person to help</p>
          </div>
          <div className={classes.thumbnailWrapper}>
            {frontPoseImage ? (
              <div
                className={classes.frontImage}
                style={{
                  width: size.width * 0.4,
                  height: size.height * 0.4,
                  background: `url(${frontPoseImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <img
                  src="/images/cam-icon-white.png"
                  width={65}
                  height={65}
                  style={{ cursor: 'pointer'}}
                />
                <img
                  src="/images/close-x.png"
                  width={25}
                  height={25}
                  style={{ position: 'absolute', right:5, top: 5, cursor: 'pointer'}}
                  onClick={()=>{ setFrontPoseImage(null)}}
                />
                
              </div>
            ) : (
              <div
                className={classes.frontImage}
                style={{ width: size.width * 0.4, height: size.height * 0.4 }}
              >
                <img
                  onClick={() => {
                    setFrontPose(true)
                  }}
                  src="/images/cam-icon-blue.png"
                  width={65}
                  height={65}
                  style={{cursor: 'pointer'}}
                />
              </div>
            )}

            {sidePoseImage ? (
              <div
                className={classes.sideImage}
                style={{
                  width: size.width * 0.4,
                  height: size.height * 0.4,
                  background: `url(${sidePoseImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <img
                  src="/images/cam-icon-white.png"
                  width={65}
                  height={65}
                  style={{ cursor: 'pointer'}}
                />
                <img
                  src="/images/close-x.png"
                  width={25}
                  height={25}
                  style={{ position: 'absolute', right:5, top: 5, cursor: 'pointer'}}
                  onClick={()=>{ setSidePoseImage(null)}}
                />
              </div>
            ) : (
              <div
                className={classes.sideImage}
                style={{ width: size.width * 0.4, height: size.height * 0.4 }}
              >
                <img
                  onClick={() => {
                    setSidePose(true)
                  }}
                  src="/images/cam-icon-blue.png"
                  width={65}
                  height={65}
                  style={{  cursor: 'pointer'}}
                />
              </div>
            )}
            <p className={classes.thumbnailSubtitle1}>Front</p>
            <p className={classes.thumbnailSubtitle2}>Side</p>
          </div>
        </div>
      </PageLayout>
      </>
    )
  }
}
