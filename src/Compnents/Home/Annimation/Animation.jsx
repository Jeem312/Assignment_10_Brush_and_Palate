import React from 'react';
import Lottie from "lottie-react";
import Welcomenimation from './Animation.json'
const Animation = () => {
    return (
        <div>
            <Lottie  animationData={Welcomenimation} />
        </div>
    );
};

export default Animation;