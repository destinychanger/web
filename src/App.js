import React, { Component } from "react";
import "./App.css";
import Login from "./components/login/login";
import NewRegistration from "./components/login/newRegistration";
import * as UpChunk from "@mux/upchunk";
import ReactHlsPlayer from "react-hls-player";
const Mux = require("@mux/mux-node");

const { Video } = new Mux(
  "98f57154-041c-47e7-a1a5-77793eec2a90",
  "Sj6oMDLX8sqbHW7ghq+jKFS9ZzTAA9RC/ibG/pfwVwAUchbbDDlV79ZE9Tt7WybjZtrL3NRAvG0"
);

class App extends Component {
  constructor(props) {
    super(props);
    
    // Video.Uploads.create({
    //   cors_origin: "http://localhost:3000",
    //   new_asset_settings: {
    //     playback_policy: "signed",
    //     name: "English",
    //     passthrough: "Sanket",
    //   },
    // }).then((upload) => {
    //   // upload.url is what you'll want to return to your client.
    //   window.urlis = upload.url;
    //   window.upID = upload.id;
      
    // });
  }

  // componentDidMount() {
  //   const picker = document.getElementById("picker");

  //   picker.onchange = () => {
  //     // const getUploadUrl = () =>
  //     // fetch('/the-endpoint-above').then(res =>
  //     //   res.ok ? res.text() : throw new Error('Error getting an upload URL :(')
  //     // );

  //     const upload = UpChunk.createUpload({
  //       endpoint: window.urlis,
  //       file: picker.files[0],
  //       chunkSize: 512, // Uploads the file in ~5mb chunks
  //     });

  //     // subscribe to events
  //     upload.on("error", (err) => {
  //       console.error("💥 🙀", err.detail);
  //     });

  //     upload.on("progress", (progress) => {
  //       console.log(`So far we've uploaded ${progress.detail}% of this file.`);
  //     });

  //     upload.on("success", (success) => {
  //       console.log(success);
  //       Video.Uploads.get(window.upID).then((res) => {
  //         console.log(res);
  //         Video.Assets.get(res.asset_id).then((res) => {
  //           console.log("playbackres",res);
  //         });
  //       })
  //     });
  //   };
  // }

  render() {
    // var playbackId = "HGb9Wv00CRPVYxYxhMMpTWG2rmfCLoVVy6bs6dhXhtlA";
    // var url = "https://stream.mux.com/" + playbackId + ".m3u8";
    return (
      <div className="App">
        {/* <input id="picker" type="file" multiple /> */}
        <Login/>
        {/* <NewRegistration/> */}

        {/* <ReactHlsPlayer
          url={url}
          autoplay={false}
          controls={true}
          width={500}
          height={375}
        /> */}
      </div>
    );
  }
}

export default App;
