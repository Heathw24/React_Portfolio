import React from "react";

function Contact() {

    return(
    <div >
        <section className="mainSection">
         <h2 className="sectionTitle">Contact Me</h2>
            <ul>
                <li className="contactMe">Phone: 864-607-6772</li>
                 <a href="mailto: heathw2444@yahoo.com"> <li class="contactMe" > Email: Heathw2444@yahoo.com </li></a>
                <li><a className="contactMe" href="https://github.com/Heathw24">GitHub</a></li>
                <li><a className="contactMe" href="https://www.linkedin.com/in/heath-ward-029b9518b">LinkedIn</a></li>
       </ul>

        <br/>
        </section>
    </div>
    );
}

export default Contact;