import React from 'react'
import '../Button/Button.css'

const Button2 = ({butonunIcindekiYazi,classAdi,ButtonunLinki}) => {
  return (
    <>
    
    <button className={classAdi}>{butonunIcindekiYazi} <a href={ButtonunLinki}>+ GOOGLE CALENDAR</a> </button>

    </>
  )
}

export default Button2