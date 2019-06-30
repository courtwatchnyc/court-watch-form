from imutils.perspective import four_point_transform
from imutils import contours
import numpy as np
import imutils
import cv2.data


IMAGE_PATH = 'util/form_other_with_checked.png'

original_image = cv2.imread(IMAGE_PATH)
image = original_image.copy()
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
blurred = cv2.GaussianBlur(gray, (5, 5), 0)
edged = cv2.Canny(blurred, 120, 255, 1)

cv2.imshow("edged", edged)

cnts = cv2.findContours(edged.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
cnts = imutils.grab_contours(cnts)

checkbox_contours = []

threshold_max_area = 5000
threshold_min_area = 120
contour_image = edged.copy()

for c in cnts:
    peri = cv2.arcLength(c, True)
    approx = cv2.approxPolyDP(c, 0.035 * peri, True)
    (x, y, w, h) = cv2.boundingRect(approx)
    aspect_ratio = w / float(h)
    area = cv2.contourArea(c)

    if threshold_max_area > area > threshold_min_area and (0.9 <= aspect_ratio <= 1.1):
        cv2.drawContours(original_image,[c], 0, (0,255,0), 3)
        checkbox_contours.append(c)


print('checkbox_contours', len(checkbox_contours))
cv2.imshow("checkboxes", original_image)
cv2.waitKey(0)

