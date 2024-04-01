import React from "react";
import style from './Home.module.scss'

const Home = () =>{
    return(
        <>
        <div className={style.homeContainer}>
            <div className={style.titleContainer}>
                <p>Synthesis Healthcare Edu Robotics</p>
            </div>
        </div>
        <div className={style.visionWrapper}>
            <div className={style.vision}>
            <div className={style.visionText}>
                <h4>OUR VISION</h4>
                <p>
                    Revolutionizing the landscape of healthcare education, research and development, interventions, rehabilitation through the innovative integration of robotics
                </p>
            </div>
            </div>
            <div className={style.imgWrap}>
                <img src="https://sherrobotics.s3.ap-south-1.amazonaws.com/vision.webp" alt="vision" />
            </div>
            <div className={style.value}>
            <div className={style.valueText}>
                <h4>OUR VALUES</h4>
                <p>
                    At Synthesis Healthcare Edu Robotics, we value pioneering healthcare solutions through the synergy of advanced robotics and educational and research innovation.
                </p>
            </div>
            </div>
        </div>
        <span className={style.headerBorder}></span>
        <div className={style.visionWrapper1}>
            <div className={style.vision1}>
            <div className={style.visionText1}>
            </div>
            </div>
            <h2 className={style.aboutTitle}>About Synthesis Healthcare Edu Robotics</h2>
            <div className={style.value1}>
            <div className={style.valueText1}>
            </div>
            </div>
        </div>
        <span className={style.headerBorder1}></span>
        <div className={style.aboutContainer}>
            <div className={style.aboutWrapper}>
                <p>Synthesis Healthcare Edu Robotics aims to revolutionize healthcare education, research and development, interventions, rehabilitation by developing cutting-edge robotic solutions that enhance the training and skills development of healthcare professionals and biomedical engineers. Our mission is to bridge the gap between theoretical knowledge and practical experience in the medical field by integrating advanced and latest medical robotics, thereby improving patient care, safety, and outcomes. Through innovative robotic technology and immersive educational tools, we aspire to empower the healthcare workforce and biomedical engineers with the expertise and competence necessary for the ever-evolving healthcare landscape.</p>
            </div>
            <div className={style.imgWrap1}>
                <img src="https://sherrobotics.s3.ap-south-1.amazonaws.com/aboutR5.webp" alt="about" />
            </div>
        </div>
        </>
    )
}

export default Home;