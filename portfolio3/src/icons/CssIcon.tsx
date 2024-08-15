import React from 'react'

/*export default function CssIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
	    <path fill="#264de4" d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"/>
	    <path fill="#2965f1" d="M405.388 431.408l35.148-393.73H256v435.146z"/>
	    <path fill="#ebebeb" d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"/>
	    <path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"/>
      <script xmlns="" id="bw-fido2-page-script"/>
    </svg>
  )
}*/

import type { SVGProps } from "react";
const CSS = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" width="5em" height="5em" {...props}><path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52" /><path fill="#30a9dc" d="M226 472l149-41 35-394H226" /><path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z" /><path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z" /></svg>;
export default CSS;
