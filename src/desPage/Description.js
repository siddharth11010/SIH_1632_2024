import RelatedWorks from "./RelatedWorks";

export default function Description() {
  return (
    <div class="container ">
      <br></br>

      <div class="container mt-5 mb-5">
        <div class="row">
          <div class="col">
            <img src="Google_Work.png" style={{ height: "7em" }}></img>

            {/* <h4>
              <i class="fa-brands fa-google"></i>&nbsp; Senior UX Designer
            </h4>
            <br></br>
            <p>at Google</p> */}
          </div>
          <div class="col apply mt-4">
            <button
              class="btn btn-dark"
              style={{
                height: "3rem",
                width: "10rem",
                borderRadius: "10px",
                backgroundColor: "#0A65CC",
              }}
            >
              Apply Now &nbsp;<i class="fa-solid fa-arrow-right"></i>
            </button>
            <button id="bookmark">
              <i
                class="fa-regular fa-bookmark"
                style={{ color: "#0f89e6" }}
              ></i>
            </button>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-7">
            <h5>
              <b>Work Description</b>
            </h5>

            <p>
              Velstar is a Shopify Plus agency, and we partner with brands to
              help them grow, we also do the same with our people!
            </p>

            <p>
              Here at Velstar, we don't just make websites, we create
              exceptional digital experiences that consumers love. Our team of
              designers, developers, strategists, and creators work together to
              push brands to the next level. From Platform Migration, User
              Experience & User Interface Design, to Digital Marketing, we have
              a proven track record in delivering outstanding eCommerce
              solutions and driving sales for our clients.
            </p>
            <p>
              The role will involve translating project specifications into
              clean, test-driven, easily maintainable code. You will work with
              the Project and Development teams as well as with the Technical
              Director, adhering closely to project plans and delivering work
              that meets functional & non-functional requirements. You will have
              the opportunity to create new, innovative, secure and scalable
              features for our clients on the Shopify platform
            </p>
            <br />
            <h5>
              <b>Requirements</b>
            </h5>

            <p>
              <i class="fa-solid fa-circle" style={{ fontSize: "50%" }}></i>{" "}
              Great troubleshooting and analytical skills combined with the
              desire to tackle challenges head-on
              <br />
              <i class="fa-solid fa-circle" style={{ fontSize: "50%" }}></i> 3+
              years of experience in back-end development working either with
              multiple smaller projects simultaneously or large-scale
              applications
              <br />
              <i
                class="fa-solid fa-circle"
                style={{ fontSize: "50%" }}
              ></i>{" "}
              Experience with HTML, JavaScript, CSS, PHP, Symphony and/or
              Laravel
              <br />
              <i
                class="fa-solid fa-circle"
                style={{ fontSize: "50%" }}
              ></i>{" "}
              Working regularly with APIs and Web Services (REST, GrapthQL,
              SOAP, etc)
              <br />
              <i
                class="fa-solid fa-circle"
                style={{ fontSize: "50%" }}
              ></i>{" "}
              Have experience/awareness in Agile application development,
              commercial off-the-shelf software, middleware, servers and
              storage, and database management.
              <br />
              <i
                class="fa-solid fa-circle"
                style={{ fontSize: "50%" }}
              ></i>{" "}
              Familiarity with version control and project management systems
              (e.g., Github, Jira)
              <br />
              <i
                class="fa-solid fa-circle"
                style={{ fontSize: "50%" }}
              ></i>{" "}
              Great troubleshooting and analytical skills combined with the
              desire to tackle challenges head-on
              <br />
              <i
                class="fa-solid fa-circle"
                style={{ fontSize: "50%" }}
              ></i>{" "}
              Ambitious and hungry to grow your career in a fast-growing agency
            </p>
            <br></br>
            <h5>
              <b>Desirable:</b>
            </h5>

            <p>
              <i class="fa-solid fa-circle" style={{ fontSize: "50%" }}></i>{" "}
              Working knowledge of eCommerce platforms, ideally Shopify but also
              others e.g. Magento, WooCommerce, Visualsoft to enable seamless
              migrations.
              <br />
              <i
                class="fa-solid fa-circle"
                style={{ fontSize: "50%" }}
              ></i>{" "}
              Working knowledge of payment gateways
              <br />
              <i class="fa-solid fa-circle" style={{ fontSize: "50%" }}></i> API
              platform experience / Building restful APIs
            </p>
            <br></br>
            <h5>
              <b>Benefits</b>
            </h5>

            <p>
              <i class="fa-solid fa-circle" style={{ fontSize: "50%" }}></i>{" "}
              Early finish on Fridays for our end of week catch up (4:30 finish,
              and drink of your choice from the bar) <br />
              <i
                class="fa-solid fa-circle"
                style={{ fontSize: "50%" }}
              ></i>{" "}
              $100 contribution for your own personal learning and development
              <br />
              <i
                class="fa-solid fa-circle"
                style={{ fontSize: "50%" }}
              ></i>{" "}
              Free Breakfast on Mondays and free snacks in the office <br />
              <i
                class="fa-solid fa-circle"
                style={{ fontSize: "50%" }}
              ></i>{" "}
              Access to Perkbox with numerous discounts plus free points from
              the company to spend as you wish.
              <br />
              Cycle 2 Work Scheme <br />
              Brand new MacBook Pro <br />
              <i
                class="fa-solid fa-circle"
                style={{ fontSize: "50%" }}
              ></i>{" "}
              Joining an agency on the cusp of exponential growth and being part
              of this exciting story.
            </p>
          </div>
          <div class="col-1"></div>
          <div class="col-4">
            <img
              style={{ width: "110%" }}
              src="Work.png"
              class="salary"
              alt="salary"
            ></img>
          </div>
        </div>
      </div>
      <hr />
      <br />
      <RelatedWorks />
    </div>
  );
}
