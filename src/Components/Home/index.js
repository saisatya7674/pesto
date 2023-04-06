import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

class Home extends Component {
  render() {
    return (
      <>

        <div className="maindiv">
          <h1 className="headingdiv">
            Switch to a remote high-paying <br /> tech career with pesto{" "}
          </h1>
          <p className="paragraph2">
            We help developers switch to global, remote, and high-paying
            careers.
            <br /> Find out how Pesto can help you{" "}
          </p>
          <Link to="/homepageprogram">
            <button className="learn-more">Learn More</button>
          </Link>
        </div>
        <div className="div2">
          <img
            className="img2"
            src="https://i.postimg.cc/85NWrG8K/63ef591334dcc08ea9134776-hero-img-1-p-800.png"
          />
        </div>
        <div className="developer-heading-container">
          <h2 className="head3">
            Pesto’s been working hard to<br></br>
            bring their best programs for you
          </h2>
        </div>

        <div className="container3">
          <span className="mr">Pareto Plus</span>
          <span className="mr">Pareto Labs</span>
          <span className="mr">Web3 Fellowship</span>
        </div>
        <hr />

        <div className="seconddiv">
            
        <div className="container col">
          <div className="col-sm-12 row">
            <div className="col-sm-6">
              <img
                class="imgsize"
                src="https://i.postimg.cc/Fz4cHkvp/63c7ed93162028aa865e671b-plus-without-pattern-png.png"
              />
            </div>
            <div className="col-sm-6 ">
              <div className="head43">
              <h3 className="head65">Pesto Plus</h3>
              </div>

              <p className="local52">
                {" "}
                An upskilling cohort-based program where senior developers
                directly
              </p>

              <div className="col-sm-12 row">
                <div className="col-sm-6">
                <div className="local52">
                Flexible curriculum that can be balanced with your existing full-time job
                </div>

                <div className="local52">
                First interview in 7 days (on average) from onboarding
                </div>
                <div className="local52">
                What you'll learn→ The basics of blockchain, how to build dApps, Smart Contracts, NFTS, and DAOS
                </div>
                </div>
                <div className="col-sm-6">
                  <div className="local52">
                  Job opportunities with a wide range of companies like India's top unicorns

                  </div>
                  <div className="local52">
                  Access to an exclusive community of 1,000+

                  </div>
                  <div className="local52">
                  A hiring platform where Silicon Valley's most influential companies hire senior developers.

                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-6 row">
              <h3 className="labelhead">Pesto Plus</h3>
              <p className="label">
                An upskilling cohort-based program where senior<br></br>
                developers directly
              </p>
              <div className="col-sm-6">
                <div>
                  <label className="label">A 32-week program</label>
                </div>

                <div>
                  <label className="label">
                    Live project building under the guidance of industry experts
                  </label>
                </div>

                <div>
                  <label className="label">
                    What you Learn - advanced full stack development product
                    engineering
                  </label>
                </div>

                <p> A 32-week program</p>
              </div>
              <div className="col-sm-6">
                <div>
                  <label className="label">
                    Flexible curriculum that can be balanced{" "}
                  </label>
                </div>

                <div>
                  <label className="label">
                    Job opportunities with a wide range of companies
                  </label>
                </div>
                <div>
                  <label className="label">
                    Flexible curriculum that can be balanced with your existing
                    full-time job
                  </label>
                </div>
              </div>
              <button className="btn btn-danger">Join Pesto Plus</button>
            </div> */}
          </div>
        </div>


        <div className="container col">
          <div className="col-sm-12 row">
            <div className="col-sm-6">
              <img
                class="imgsize"
                // src="https://i.postimg.cc/Fz4cHkvp/63c7ed93162028aa865e671b-plus-without-pattern-png.png"
                src="https://i.postimg.cc/dVP0PYq1/63c7edabca75745f4f562155-lab-with-pattern-p-500.webp"
            
            />
            </div>
            <div className="col-sm-6 ">
              <div className="head43">
              <h3 className="head65">Pesto Labs</h3>
              </div>

              <p className="local52">
                {" "}
                A hiring platform where Silicon Valley's most influential
                  companies hire senior developers.
              </p>

              <div className="col-sm-12 row">
                <div className="col-sm-6">
                <div className="local52">
                Live project building under the guidance of industry experts
                </div>

                <div className="local52">
                First interview in 7 days (on average) from onboarding
                </div>
                <div className="local52">
                Flexible curriculum that can be balanced with your existing
                    full-time job
                </div>
                </div>
                <div className="col-sm-6">
                  <div className="local52">
                  Job opportunities with a wide range of companies 

                  </div>
                  <div className="local52">
                  Access to an exclusive community of 1,000+

                  </div>
                  <div className="local52">
                  A hiring platform where Silicon Valley's most influential companies 

                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-6 row">
              <h3 className="labelhead">Pesto Plus</h3>
              <p className="label">
                An upskilling cohort-based program where senior<br></br>
                developers directly
              </p>
              <div className="col-sm-6">
                <div>
                  <label className="label">A 32-week program</label>
                </div>

                <div>
                  <label className="label">
                    Live project building under the guidance of industry experts
                  </label>
                </div>

                <div>
                  <label className="label">
                    What you Learn - advanced full stack development product
                    engineering
                  </label>
                </div>

                <p> A 32-week program</p>
              </div>
              <div className="col-sm-6">
                <div>
                  <label className="label">
                    Flexible curriculum that can be balanced{" "}
                  </label>
                </div>

                <div>
                  <label className="label">
                    Job opportunities with a wide range of companies
                  </label>
                </div>
                <div>
                  <label className="label">
                    Flexible curriculum that can be balanced with your existing
                    full-time job
                  </label>
                </div>
              </div>
              <button className="btn btn-danger">Join Pesto Plus</button>
            </div> */}
          </div>
        </div>

        <div className="container col">
          <div className="col-sm-12 row">
            <div className="col-sm-6">
              <img
                class="imgsize"
                // src="https://i.postimg.cc/Fz4cHkvp/63c7ed93162028aa865e671b-plus-without-pattern-png.png"
                src="https://i.postimg.cc/TwqwQH8w/63c7ed93ca75742ac1562065-web3-without-pattern.webp"
            
            />
            </div>
            <div className="col-sm-6 ">
              <div className="head43">
              <h3 className="head65">Pesto Plus</h3>
              </div>

              <p className="local52">
                {" "}
                An upskilling cohort-based program where senior developers
                directly
              </p>

              <div className="col-sm-12 row">
                <div className="col-sm-6">
                <div className="local52">
                Flexible curriculum that can be balanced with your existing full-time job
                </div>

                <div className="local52">
                First interview in 7 days (on average) from onboarding
                </div>
                <div className="local52">
                What you'll learn→ The basics of blockchain, how to build dApps, Smart Contracts, NFTS, and DAOS
                </div>
                </div>
                <div className="col-sm-6">
                  <div className="local52">
                  Job opportunities with a wide range of companies like India's top unicorns

                  </div>
                  <div className="local52">
                  Access to an exclusive community of 1,000+

                  </div>
                  <div className="local52">
                  A hiring platform where Silicon Valley's most influential companies hire senior developers.

                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-6 row">
              <h3 className="labelhead">Pesto Plus</h3>
              <p className="label">
                An upskilling cohort-based program where senior<br></br>
                developers directly
              </p>
              <div className="col-sm-6">
                <div>
                  <label className="label">A 32-week program</label>
                </div>

                <div>
                  <label className="label">
                    Live project building under the guidance of industry experts
                  </label>
                </div>

                <div>
                  <label className="label">
                    What you Learn - advanced full stack development product
                    engineering
                  </label>
                </div>

                <p> A 32-week program</p>
              </div>
              <div className="col-sm-6">
                <div>
                  <label className="label">
                    Flexible curriculum that can be balanced{" "}
                  </label>
                </div>

                <div>
                  <label className="label">
                    Job opportunities with a wide range of companies
                  </label>
                </div>
                <div>
                  <label className="label">
                    Flexible curriculum that can be balanced with your existing
                    full-time job
                  </label>
                </div>
              </div>
              <button className="btn btn-danger">Join Pesto Plus</button>
            </div> */}
          </div>
        </div>
        {/* second  div*/}

        {/* <div className="container row">
          <div className="samp">
            <div className="col-sm-6">
              <img
                class="imgsize"
                src="https://i.postimg.cc/dVP0PYq1/63c7edabca75745f4f562155-lab-with-pattern-p-500.webp"
              />
            </div>
            <div className="col-sm-6 row">
              <div className="text-container">
                <h3 className="labelhead">Pesto Labs</h3>
                <p className="label">
                  A hiring platform where Silicon Valley's most influential
                  companies hire senior developers.
                </p>
                <div className="col-sm-6">
                  <div>
                    <label className="label">
                      Remote, full-time job O salary negotiations opportunities
                    </label>
                  </div>

                  <div>
                    <label className="label">
                      First interview in 7 days (on average) from onboarding
                    </label>
                  </div>

                  <div>
                    <label className="label">
                      Access to an exclusive community of 1,000+ developers.
                    </label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div>
                    <label className="label">Location-independent, </label>
                  </div>

                  <div>
                    <label className="label">
                      Job opportunities with a wide range of companies
                    </label>
                  </div>
                  <div>
                    <label className="label">highly competitive salaries</label>
                  </div>
                </div>
                <button className="btn btn-dark">Join Pesto Plus</button>
              </div>
            </div>
          </div>
        </div> */}

        {/* third div*/}

        {/* <div className="container row">
          <div className="samp">
            <div className="col-sm-6">
              <img
                class="imgsize"
                src="https://i.postimg.cc/TwqwQH8w/63c7ed93ca75742ac1562065-web3-without-pattern.webp"
              />
            </div>
            <div className="col-sm-6 row">
              <h3 className="labelhead">Web3 Fellowship</h3>
              <p className="label">
                A hiring platform where Silicon Valley's most influential
                companies hire senior developers.
              </p>
              <div className="col-sm-6">
                <div>
                  <label className="label">
                    Remote, full-time job O salary negotiations opportunities
                  </label>
                </div>

                <div>
                  <label className="label">
                    First interview in 7 days (on average) from onboarding
                  </label>
                </div>

                <div>
                  <label className="label">
                    Access to an exclusive community of 1,000+ developers.
                  </label>
                </div>
              </div>
              <div className="col-sm-6">
                <div>
                  <label className="label">Location-independent, </label>
                </div>

                <div>
                  <label className="label">
                    Job opportunities with a wide range of companies
                  </label>
                </div>
                <div>
                  <label className="label">highly competitive salaries</label>
                </div>
              </div>
              <button className="btn btn-secondary">Join Pesto Plus</button>
            </div>
          </div>
        </div> */}
        </div>
      </>
    );
  }
}

export default Home;
