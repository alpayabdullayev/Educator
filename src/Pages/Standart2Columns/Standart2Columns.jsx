import React from 'react'

const Standart2Columns = ({Standartbasligi,StandartImgsi,Standartinfo}) => {
  return (
    <>
    <div className="col-12 col-md-6">
        <div className="kart pt-3">
                <div className="kart-image opacity__img">
                    <a href="">
                     <img src={StandartImgsi} alt="" />
                    </a>
                </div>
                <h3 className='pt-3 '>  <a href="">{Standartbasligi}</a></h3>
                <p className='standart2columns__p'> {Standartinfo}</p>
        </div>
    </div>
    </>
    
  )
}

export default Standart2Columns