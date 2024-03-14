"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const ModalVid = ({ id }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={id}
        onClose={() => setOpen(false)}
      />
      <button className="btn-primary" onClick={() => setOpen(true)}>
        VIEW VIDEO
      </button>
    </React.Fragment>
  );
};

export default ModalVid;
