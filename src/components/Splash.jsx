    import React from 'react';
    import './Splash.css';
    import SplashImage from '../assets/emotiondiary.png';
    import HeartLoader from '../assets/heart-loader.png'; // 💗 하트 이미지 추가

    const Splash = ({ splashOpacity }) => {
    return (
        <div className="splash-container" style={{ opacity: splashOpacity }}>
        <img
            src={SplashImage}
            alt="감정일기장 시작화면"
            className="splash-image"
        />
        <img
            src={HeartLoader}
            alt="로딩 중 하트"
            className="heart-image-loader"
        />
        </div>
    );
    };

    export default Splash;  