import React from 'react'
import '../Studying/Studying'
import Studying from '../Studying/Studying'
import '../Studying/Studying.css'
import StudyingInfo from '../../Studying.json'

const StudyingContainer = () => {
  return (
    <section  className="full-height px-lg-5">
        <div className="container">

            <div className="row justify-content-center text-center" data-aos="fade-up">
                <div className="col-lg-8 pb-4" >
                    <h1 className="fw-bold">Studying at Educator</h1>
                    <p className='paraqraf'>Etiam porttitor risus massa nec condiment gravida nibh vel velit auctor aliquet. Aenean sollicitudinlorem quis bibendum auci elit consequat ipsutis sem nibh id elitduis sed
                    </p>
                </div>
            </div>

            <div class="row gy-4 row-cols-1 row-cols-md-3 g-4">
            {StudyingInfo.map((birMelumat) => (
              <Studying
                Studyingbasligi={birMelumat.studying_adi}
                Studyinglink={birMelumat.studying_linki}
                StudyingImgsi={birMelumat.ImgUrl}
                Studyinginfo={birMelumat.studying_info}
              />
            ))}
            </div>
        </div>
    </section>        
  )
}

export default StudyingContainer