import React from "react";
import "../styling/footer.css";
function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div>
                    <h2>Social</h2>
                    <div>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/bartwalkermusic/">
                            <i className="fa fa-instagram" />
                        </a>{" "}
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/bart.walker.167">
                            <i className="fa fa-facebook" />
                        </a>{" "}
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/tonefreak713">
                            <i className="fa fa-twitter" />
                        </a>{" "}
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/channel/UCwoRaqBCYoze8SmkIeYXx5w">
                            <i className="fa fa-youtube" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;