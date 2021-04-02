import React from 'react'

export default function Resume() {
    return (
        <div className="row d-flex justify-content-center mt-5">
            <div>
                <a href="./resume.pdf" download>
                    <img src="./images/resumeimg.png" alt="resume" width="100%" height="100%"/>
                    <br />
                    click to download
                </a>
            </div>
        </div >
    )
}
