import React, { useState, useContext } from 'react'
import { useStyles } from '../../styles/pose_selection.styles'
import Link from 'next/link'
//Custom Modal component
import CustomModal from '../common/CustomModal/CustomModal'
// Camera Component
import Camera from '../common/Camera/Camera'
// window size hook
import { Size, useWindowSize } from '../../hooks/useWindowSize'
// import Page Layout
import PageLayout from '../common/PageLayout/PageLayout'
// Mobx Store context
import { StoreContext } from '../common/StoreProvider/StoreProvider'

export default function PoseSelection(): JSX.Element {
  // initialize store context
  const store = useContext(StoreContext)
  // front Image and side Image Hooks
  var frontPoseImage = store.frontImage
  var sidePoseImage = store.sideImage
  // Modal Hooks
  const [modal1Open, setModal1Open] = useState<boolean>(false)
  const [modal2Open, setModal2Open] = useState<boolean>(false)
  // Alert Hooks
  const [alertOpen, setAlertOpen] = useState<boolean>(false)
  const [alertTitle, setAlertTitle] = useState<string>()
  const [alertMessage, setAlertMessage] = useState<string>()
  // retrieve window size
  const size: Size = useWindowSize()
  // retrieve styles
  const classes = useStyles()
  // camera selection Hooks
  const [frontPose, setFrontPose] = useState<boolean>(false)
  const [sidePose, setSidePose] = useState<boolean>(false)

  // image preview deletion functions

  function deleteFrontImg  ()  {
    store.removeFrontImage()
    console.log(frontPoseImage)
  }

  function deleteSideImg  ()  {
    store.removeSideImage()
    console.log(sidePoseImage)
  }

  if (sidePose === true) {
    return (
      <Camera
        setFrontPose={setFrontPose}
        setSidePose={setSidePose}
        pose="side"
      />
    )
  } else if (frontPose === true) {
    return (
      <Camera
        setFrontPose={setFrontPose}
        setSidePose={setSidePose}
        pose="front"
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
                  width={20}
                  height={20}
                />
              </Link>
              <p className={classes.pageText}>
                This works better wearing <br /> tighter fit clothing or even{' '}
                <br /> athletic or swimwear
              </p>
              <p className={classes.pageText}>Need a second person to help</p>
            </div>
            <div className={classes.thumbnailWrapper}>
              {frontPoseImage !== null ? (
                <div
                  className={classes.frontImage}
                  style={{
                    width: size.width * 0.4,
                    height: size.height * 0.35,
                    background: `url(${frontPoseImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <img
                    src="/images/cam-icon-white.png"
                    width={65}
                    height={65}
                    style={{ cursor: 'pointer' }}
                  />
                  <img
                    src="/images/close-x.png"
                    width={25}
                    height={25}
                    style={{
                      position: 'absolute',
                      right: 5,
                      top: 5,
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setModal1Open(true)
                    }}
                  />
                </div>
              ) : (
                <div
                  className={classes.frontImage}
                  style={{
                    width: size.width * 0.4,
                    height: size.height * 0.35,
                  }}
                >
                  <img
                    onClick={() => {
                      setFrontPose(true)
                    }}
                    src="/images/cam-icon-blue.png"
                    width={65}
                    height={65}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              )}

              {sidePoseImage !== null ? (
                <div
                  className={classes.sideImage}
                  style={{
                    width: size.width * 0.4,
                    height: size.height * 0.35,
                    background: `url(${sidePoseImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <img
                    src="/images/cam-icon-white.png"
                    width={65}
                    height={65}
                    style={{ cursor: 'pointer' }}
                  />
                  <img
                    src="/images/close-x.png"
                    width={25}
                    height={25}
                    style={{
                      position: 'absolute',
                      right: 5,
                      top: 5,
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setModal2Open(true)
                    }}
                  />
                </div>
              ) : (
                <div
                  className={classes.sideImage}
                  style={{
                    width: size.width * 0.4,
                    height: size.height * 0.35,
                  }}
                >
                  <img
                    onClick={() => {
                      setSidePose(true)
                    }}
                    src="/images/cam-icon-blue.png"
                    width={65}
                    height={65}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              )}
              <p className={classes.thumbnailSubtitle1}>Front</p>
              <p className={classes.thumbnailSubtitle2}>Side</p>
            </div>
          </div>
          <CustomModal
            modalOpen={modal1Open}
            setModalOpen={setModal1Open}
            modalTitle="Delete Front Image"
            modalMessage="The current image will be deleted. Are you sure you want to try again?"
            modalFunction={deleteFrontImg}
          />
          <CustomModal
            modalOpen={modal2Open}
            setModalOpen={setModal2Open}
            modalTitle="Delete Side Image"
            modalMessage="The current image will be deleted. Are you sure you want to try again?"
            modalFunction={deleteSideImg}
          />
        </PageLayout>
      </>
    )
  }
}
