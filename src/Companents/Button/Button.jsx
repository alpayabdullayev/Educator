import React from 'react'
import '../Button/Button.css'

const Button = ({butonunIcindekiYazi,classAdi,ButtonunLinki}) => {
  return (
    <>
    
    <button className={classAdi}>{butonunIcindekiYazi} <a href={ButtonunLinki}>BACK TO HOMEPAGE</a> </button>

    </>
  )
}

export default Button