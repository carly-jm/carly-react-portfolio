import React from "react";
import List from "../components/List";

function About() {
    return (
        <>
            <div className="vertical-nav">
                <List />
            </div>
            <div className="row mt-5" id="about">
                <div className="jumbotron col-md-10 bg-dark">
                    <h2 >Hi, i'm Carly McVay</h2>
                    <p>
                        I'm a student at the UC Davis full-stack Coding Bootcamp. I am interesed in learing more about code
                         and expanding my knowledge and understanding of the subject.
                        I completed the bootcamp in March 2021 and am looking forward to putting my skills to use.
                        My strengths include teamwork, listening, critical thinking, communication, and creative problem solving.
                
             </p><p>
                        I am motivated to learn new things and create connections with new people.
            </p><p>
                        When i'm not in class I enjoy making art. Whether it be drawing, painting, or digital art I like to keep myself busy
                        by working on something creative.
            </p><p>
                        I'm lookung forward to developing more on the technical side of things and im exited to find how my creativity can fit into that.
            </p>
                </div>

            </div>


        </>
    );
}

export default About;


