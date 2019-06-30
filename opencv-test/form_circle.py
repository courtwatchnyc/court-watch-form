from imutils.perspective import four_point_transform
from imutils import contours
import numpy as np
import imutils
import cv2.data

IMAGE_PATH = 'util/form_circle.png'

image = cv2.imread(IMAGE_PATH)
output = image.copy()
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)


# circles = cv2.HoughCircles(gray, cv2.HOUGH_GRADIENT, 1, 20,
#               param1=30,
#               param2=15,
#               minRadius=0,
#               maxRadius=0)
#
#
# circles = np.uint16(np.around(circles))ok
# for i in circles[0,:]:
#     cv2.circle(image,(i[0],i[1]),i[2],(0,255,0),2)
#     cv2.circle(image,(i[0],i[1]),2,(0,0,255),3)
#
# cv2.imshow('circles', image)
#
# k = cv2.waitKey(0)
# if k == 27:
#     cv2.destroyAllWindows()


# detect circles in the image
circles = cv2.HoughCircles(gray, cv2.HOUGH_GRADIENT, 1.5, 250, minRadius=5)

# ensure at least some circles were found
if circles is not None:
    # convert the (x, y) coordinates and radius of the circles to integers
    circles = np.round(circles[0, :]).astype("int")

    # loop over the (x, y) coordinates and radius of the circles
    for (x, y, r) in circles:
        # draw the circle in the output image, then draw a rectangle
        # corresponding to the center of the circle
        cv2.circle(output, (x, y), r, (0, 255, 0), 4)


    # show the output image
    cv2.imshow("output", np.hstack([image, output]))
    cv2.waitKey(0)
