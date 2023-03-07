import React from "react";
import "../Studying/StudyingContainer";
import "../Studying/Studying.css";

const Studying = ({Studyingbasligi,Studyinglink,StudyingImgsi,Studyinginfo}) => {
  return (
    <div className="col-12 col-md-4 " data-aos="fade-up">
      <div className="kart pt-3">
        <div className="kart-image">
          <a href="">
            <img src={StudyingImgsi} alt="" />
          </a>
        </div>
      </div>

      <h2 className="pt-3 h2studying">{Studyingbasligi}</h2>
      <p className='pt-2 pstudying'>
      {Studyinginfo}
      </p>

      <h3 className="h3studying">
        <a href="">{Studyinglink}</a>
      </h3>
    </div>
  );
};

export default Studying;
