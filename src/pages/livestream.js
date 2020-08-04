import React, { useState, useEffect } from 'react';

class AppStreamCam extends React.Component {
  constructor(props) {
    super(props);
    this.streamCamVideo = this.streamCamVideo.bind(this);
  }
  streamCamVideo() {
    var constraints = { audio: true, video: { width: 1280, height: 720 } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function(mediaStream) {
        var video = document.querySelector('video');

        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
          video.play();
        };
      })
      .catch(function(err) {
        console.log(err.name + ': ' + err.message);
      }); // always check for errors at the end.
  }
  render() {
    return (
      // <div style={{display:'flex',flexDirection:'column',
      // justifyContent:'center',alignItems:'center',margin:'100px'}}>
      //   <div id="container">
      //     <video autoPlay={true} id="videoElement" controls></video>
      //   </div>
      //   <br/>
      //   <button onClick={this.streamCamVideo}>Start streaming</button>
      //   <div style={{padding:'56.25% 0 0 0',position:'relative'}}>
      //      <iframe src="https://player.vimeo.com/video/444600506"
      //           frameBorder="0"
      //           allow="autoplay; fullscreen"
      //           allowFullScreen
      //           style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}}
      //         >
      //         </iframe>
      //    </div>
      //    <div style={{padding:'56.25% 0 0 0',position:'relative'}}>
      //    <iframe src="https://player.vimeo.com/video/444600506"
      //            frameBorder="0" allow="autoplay; fullscreen"
      //            allowFullScreen
      //           //  style="position:absolute;top:0;left:0;width:100%;height:100%;"
      //           style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}}

      //            >

      //            </iframe></div>
      // </div>
      <div
        style={{
          display: 'flex',
          margin: '100px',
          padding: '56.25% 0 0 0',
          position: 'relative',
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/444600506"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          //  style="position:absolute;top:0;left:0;width:100%;height:100%;"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
        ></iframe>
      </div>
    );
  }
}

export default AppStreamCam;
