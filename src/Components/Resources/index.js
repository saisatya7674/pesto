import React, { Component } from "react";
import "./index.css";
const listDatails = [
  {
    id: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    time: "2 Min",
    heading: "What does a backend developer do?",
    name: "sai satya",
    guide: "Guide",
  },
  {
    id: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    time: "5 Min",
    heading: "The Pros and Cons of Joining a Bootcamp for Backend Development",
    name: "Diyotima Ray",
    guide: "Guide",
  },
  {
    id: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    time: "4 Min",
    heading:
      "The Essential Back-End Developer Tools for Building Powerful Web Applications",
    name: "Diyotima Roy",
    guide: "Guide",
  },
  {
    id: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    time: "28 Min",
    heading:
      "The Essential Back-End Developer Tools for Building Powerful Web Applications",
    name: "shyam sing",
    guide: "Guide",
  },
  {
    id: 5,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    time: "6 Min",
    heading:
      "The Essential Back-End Developer Tools for Building Powerful Web Applications",
    name: "madhu kumar",
    guide: "Guide",
  },
  {
    id: 6,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    time: "9 Min",
    heading:
      "The Essential Back-End Developer Tools for Building Powerful Web Applications",
    name: "surya",
    guide: "Guide",
  },
  {
    id: 7,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    time: "9 Min",
    heading:
      "The Essential Back-End Developer Tools for Building Powerful Web Applications",
    name: "surya",
    guide: "Guide",
  },
];

listDatails.map((eachitem) => {
  console.log(eachitem.name);
});

class Resources extends Component {
  render() {
    return (
        <div className="maindiv9">
        {/*hjgjh*/}
        <div className="divun">
          <div className="div10 col-sm-6">
            <div>
              <p className="time">2 Min</p>
              <h2 className="heading33">
                How to Build an Impressive Front End Developer Portfolio in 5
                Easy Steps
              </h2>
              <div>
                <p className="time guide">Guide</p>
                <p className="time">vaani</p>
              </div>
            </div>
            <div>
              <img
                className="userimg"
                src="https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png"
              />
            </div>
          </div>
          <div className="div10 col-sm-6">
            <div>
              <p className="time">20 Min</p>
              <h2 className="heading33">
                Back End Developer Salaries in 2023: Updated Guide Guide
                Diyotima Ray
              </h2>
              <div>
                <p className="time guide">Guide</p>
                <p className="time">raju singh</p>
              </div>
            </div>
            <div>
              <img
                className="userimg"
                src="https://assets.ccbp.in/frontend/react-js/esther-howard-img.png"
              />
            </div>
          </div>
        </div>
        {/*hjgjh*/}
        <div className="divun">
          <div className="div10 col-sm-6">
            <div>
              <p className="time">2 Min</p>
              <h2 className="heading33">
                How to Build an Impressive Front End Developer Portfolio in 5
                Easy Steps
              </h2>
              <div>
                <p className="time guide">Guide</p>
                <p className="time">keerthna</p>
              </div>
            </div>
            <div>
              <img
                className="userimg"
                src="https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png"
              />
            </div>
          </div>
          <div className="div10 col-sm-6">
            <div>
              <p className="time">20 Min</p>
              <h2 className="heading33">
                Back End Developer Salaries in 2023: Updated Guide Guide
                Diyotima Ray
              </h2>
              <div>
                <p className="time guide">Guide</p>
                <p className="time">sai satya</p>
              </div>
            </div>
            <div>
              <img
                className="userimg"
                src="https://assets.ccbp.in/frontend/react-js/devon-lane-img.png"
              />
            </div>
          </div>
        </div>
       

        {/*hjgjh*/}

        <div className="divun">
          <div className="div10 col-sm-6">
            <div>
              <p className="time">2 Min</p>
              <h2 className="heading33">
                How to Build an Impressive Front End Developer Portfolio in 5
                Easy Steps
              </h2>
              <div>
                <p className="time guide">Guide</p>
                <p className="time">mounika</p>
              </div>
            </div>
            <div>
              <img
                className="userimg"
                src="https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png"
              />
            </div>
          </div>
          <div className="div10 col-sm-6">
            <div>
              <p className="time">20 Min</p>
              <h2 className="heading33">
                Back End Developer Salaries in 2023: Updated Guide Guide
                Diyotima Ray
              </h2>
              <div>
                <p className="time guide">Guide</p>
                <p className="time">shyam</p>
              </div>
            </div>
            <div>
              <img
                className="userimg"
                src="https://assets.ccbp.in/frontend/react-js/esther-howard-img.png"
              />
            </div>
          </div>
        </div>

        {/*hjgjh*/}

        
      </div>
    );
  }
}

export default Resources;
