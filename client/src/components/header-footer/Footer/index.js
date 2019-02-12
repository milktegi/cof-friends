import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';



const Footer = () => {
    return (

        <footer className="bck_b_dark">
            <div className="container">
                <div className="logo">
                    Waves
                </div>
                <div className="wrapper">
                    <div className="left">
                        <h2>고객 센터</h2>
                        <div className="business_nfo">
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faCompass}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>주소지</div>
                            
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>전화 문의</div>
                                  
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faClock}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>근무 시간</div>
                     
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>이메일</div>
                          
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="left">
                        <h2>1:1 문의</h2>
                        <div>
                            <div>
                            궁금한 점이 있으신가요? 
                            문의를 주시면 친절히 답변 드리겠습니다.
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
        </footer>
    
    );
};

export default Footer;