import React from "react";
import styles from "./homePage.module.css";
import PhotoDisplay from "./PhotoDisplay";
import PhotoDisplay2 from "./PhotoDisplay2";
import PhotoDisplay3 from "./PhotoDisplay3";
import PhotoDisplay4 from "./PhotoDisplay4";

class HomePage extends React.Component {
  handleGuardage = () => {
    window.open("https://guardage.azurewebsites.net/");
  };

  handleFlashCards = () => {
    window.open("https://webapi20190208103728.azurewebsites.net/");
  };

  handleMapRoute = () => {
    window.open("https://rodger-misc-react.herokuapp.com/");
  };

  handleGrolo = () => {
    window.open("https://grolo.azurewebsites.net");
  };

  handleGitHub = () => {
    window.open("https://github.com/deuerleinr");
  };

  handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/rdeuerlein");
  };

  render() {
    return (
      <>
        <div className={styles.root}>
          <div>
            <div className={styles.nameContainer}>
              <div className={styles.name}> Rodger Deuerlein </div>
              <div className={styles.links}>
                <p className={styles.linkLine}>
                  <i
                    className="fab fa-github mr-3"
                    style={{ cursor: "pointer" }}
                    onClick={this.handleGitHub}
                  />
                  <i
                    className="fab fa-linkedin mr-3"
                    style={{ cursor: "pointer" }}
                    onClick={this.handleLinkedin}
                  />
                  <a href="mailto:rodger.deuerlein@gmail.com">
                    <i
                      className="fas fa-envelope mr-3"
                      style={{ cursor: "pointer", color: "gray" }}
                    />
                  </a>
                  <a href="sms:1-310-345-8954">
                    <i
                      className="fas fa-sms mr-3"
                      style={{ cursor: "pointer", color: "gray" }}
                    />
                  </a>
                  <a href="tel:1-310-345-8954">
                    <i
                      className="fas fa-phone mr-3"
                      style={{ cursor: "pointer", color: "gray" }}
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.projectContainer}>
            <div className={styles.projectCard}>
              <PhotoDisplay />
            </div>
            <div className={styles.projectLabel} onClick={this.handleGuardage}>
              <span className={styles.projectTitle}>Guardage:</span> (under
              construction) Digital rights and "merch" protection CMS, with
              detailed database filtering. (Uses: React.js, .Net, T-SQL,
              SendGrid)
            </div>

            <div className={styles.projectCard}>
              <PhotoDisplay4 />{" "}
            </div>
            <div className={styles.projectLabel} onClick={this.handleGrolo}>
              <span className={styles.projectTitle}>Grolo:</span> Contributor to
              this marketing app built to minimally vaiable product. Personal
              work includes survey builder and geo mapping (Uses: T-SQL, .Net,
              React.js. CSS Grid, Bootstrap, Quill)
            </div>
            <div className={styles.projectCard}>
              <PhotoDisplay2 />
            </div>
            <div className={styles.projectLabel} onClick={this.handleMapRoute}>
              <span className={styles.projectTitle}>Map Routes:</span>{" "}
              Responsive component for rendering any street address in Google
              Maps with choice of route info. (Uses React.js., CSS Grid, Google
              Maps API)
            </div>
            <div className={styles.projectCard}>
              <PhotoDisplay3 />
            </div>
            <div
              className={styles.projectLabel}
              onClick={this.handleFlashCards}
            >
              <span className={styles.projectTitle}>Flash Cards:</span> SQL and
              .Net-powered random flash card app. Users create and edit own card
              library. (Uses: T-SQL, .Net, React.js. CSS Grid, Quill)
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default HomePage;
