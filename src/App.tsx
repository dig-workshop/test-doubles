import React from 'react';
import './App.css';
import {RealMissile} from "./RealMissile";
import {LaunchMissileImpl} from "./LaunchMissile";

// どうしたら発射できるのかどんな準備がいるのか説明しておく
// 本物ミサイルを使ってLaunchMissileImplのテストをすると実際にミサイルが飛んじゃう
function App() {
    async function launchButtonClick () {
        // ミサイルの準備
        const realMissile = new RealMissile()
        realMissile.password = "black300"

        // ミサイルを発射装置にセット
        const launchMissile = new LaunchMissileImpl(realMissile)
        const launchResult = await launchMissile.launch()!

        // 発射ムービー
        if (launchResult.result === "発射しました") {
            const missileVideo = document.getElementById("missileR18") as HTMLIFrameElement
            // const missileVideo = document.getElementById("missileR6") as HTMLIFrameElement
            missileVideo.src += '?autoplay=1';
            missileVideo.hidden = false
            const buttonElement = document.getElementById("button") as HTMLAnchorElement
            buttonElement.style.display = "none"
            const textElement = document.getElementById("buttonText") as HTMLButtonElement
            textElement.style.display = "none"
        }
    }

    return (
        <div className="app">
            <iframe className="iframe" id="missileR18" width="560" height="315" src="https://www.youtube.com/embed/dBj3l7lXd7w"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen hidden={true}></iframe>
            {/*<iframe className="iframe"  id="missileR6" width="560" height="315" src="https://www.youtube.com/embed/KGCEHeyX5zo?start=1"*/}
            {/*        title="YouTube video player" frameBorder="0"*/}
            {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
            {/*        allowFullScreen></iframe>*/}
            <a id="button" onClick={launchButtonClick}　className="btn-emergency-real">
                <span className="btn-emergency-real-bottom"></span>
                <span className="btn-emergency-real-top"><span>発射</span></span>
            </a>
            <div id={"buttonText"} style={{fontSize: "100px;"}}>絶対に押すなよ！</div>
        </div>
    );
}

export default App;
