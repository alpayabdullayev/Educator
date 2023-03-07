import React from "react";
import "../Courses/Courses";
import Courses from "../Courses/Courses";
import "../Courses/Courses.css";
import CoursesInfo from "../../Courses.json";

const CoursesContainer = () => {
  return (
    <>
      <section className="full-height px-lg-5">
        <div className="container">
          <div
            className="row justify-content-center text-center"
            data-aos="fade-up"
          >
            <div className="col-lg-8 pb-4">
              <h1 className="fw-bold">Popular Courses</h1>
              <p className="paraqraf">
                Etiam porttitor risus massa nec condiment gravida nibh vel velit
                auctor aliquet. Aenean sollicitudinlorem quis bibendum auci elit
                consequat ipsutis sem nibh id elitduis sed
              </p>
            </div>
          </div>

          <div className="row gy-4 row-cols-1 row-cols-md-3 g-4">
            {CoursesInfo.map((birMelumat) => (
              <Courses
                Coursesbasligi={birMelumat.kurs_adi}
                Coursessahib={birMelumat.kurs_sahibi}
                CoursesImgsi={birMelumat.ImgUrl}
                Coursesinfo={birMelumat.kurs_info}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesContainer;
