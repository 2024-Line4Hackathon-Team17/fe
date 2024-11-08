import React from 'react';
import { PiPencilLine } from "react-icons/pi";

const EmpathyWriteBtn = () => {
  return (
    <div className='empathy_write_btn_container'>
        <div className="empathy_write_btn_inner_container btn">
            <div className="empathy_write_btn_area">
                <PiPencilLine className="empathy_write_btn" />
            </div>
        </div>
    </div>
  )
}

export default EmpathyWriteBtn