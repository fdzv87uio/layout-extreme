import { useCanvas } from '../Canvas/Canvas'

export class PoseDetectionProps {
  poseKeypoints?: any
  drawPose?: (poseKeypoints: any, ctx: CanvasRenderingContext2D) => number
  onPoseIsAligned?: (poseIsAlined: boolean) => void
}

export const PoseDetection = ({
  poseKeypoints,
  drawPose,
}: PoseDetectionProps): JSX.Element => {
  const context = useCanvas()

  if (context !== null && drawPose && poseKeypoints) {
    drawPose(poseKeypoints, context)
  }

  return null
}
