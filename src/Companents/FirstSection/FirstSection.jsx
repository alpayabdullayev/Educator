import React from "react";
import "../FirstSection/FirstSection.css";
import Welcome from "../../img/FirstSection/Welcome.jpg";
import Right1 from "../../img/FirstSection/right1.jpg";
import Right2 from "../../img/FirstSection/right2.jpg";


const FirstSection = () => {
  const myImageStyle = { width: "136px", height: "136px" };
  return (
    <>
      <section className="full-height firstsecttion px-lg-5">
        <div className="container">
          <div className="row ">
            <div className="col-12  col-md-12  col-lg-6  ">
              <h1 className="fw-bold pt-1" data-aos="fade-down">Welcome </h1>
              <p className="pt-4 pb-5 paraqraf" data-aos="fade-down" >
                Etiam porttitor risus massa nec condiment gravida nibh vel velit
                auctor aliquet. Aenean sollicitudinlorem quis bibendum
              </p>

              <img className="Left1" data-aos="fade-right" data-aos-delay="300" src={Welcome} alt="" />
            </div>
            <div className="col-12 col-md-12 col-lg-6  ">
              <h1 className="fw-bold pt-1" data-aos="fade-down">Latest news</h1>
              <p className="pt-4 pb-5 paraqraf" data-aos="fade-down">
                Etiam porttitor risus massa nec condiment gravida nibh vel velit
                auctor aliquet. Aenean sollicitudinlorem quis bibendum
              </p>
              <div className="news-bottom" >
                <div className="news-bottom-1 d-flex" data-aos="fade-left">
                  <div className="news-bottom-left">
                    <img
                      className="right1" 
                      src={Right1}
                      style={myImageStyle}
                      alt=""
                    />
                  </div>
                  <div className="news-bottom-right">
                    <a href="">Helping Students Is the Key</a>
                    <p className="pt-3">
                      Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean
                      sollicitudin, lorem quis bibendum auci{" "}
                    </p>
                    <p>July 20, 2017</p>
                  </div>
                </div>
                <div className="news-bottom-2 d-flex pt-5" data-aos="fade-left"  data-aos-delay="300">
                  <div className="news-bottom-left">
                    <img
                      className="right1"
                      src={Right2}
                      style={myImageStyle}
                      alt=""
                    />
                  </div>
                  <div className="news-bottom-right">
                    <a href="">Bring the Tutoring Home</a>
                    <p className="pt-3"> 
                      Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean
                      sollicitudin, lorem quis bibendum auci{" "}
                    </p>
                    <p>July 20, 2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSection;
