import { Button, Modal } from 'components/Core';
import React, { useState } from 'react';
import FontAwesome from 'react-fontawesome';

interface VideoModalProps {
    url: string,
    text: string,
}

export const VideoModal: React.FC<VideoModalProps> = ({ url, text }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const width = window.screen.availWidth;
  const height = window.screen.availHeight;

  return (
    <>
      <Button size="lg" variant="secondary" onClick={handleShow} style={{ fontSize: '1rem' }}>
        <FontAwesome name="play" className="mr-2" />
        {text}
      </Button>

      <Modal isOpen={show} onClose={handleClose} isCloseButtonInverted>
        <div className="w-11/12 h-auto">
          <iframe
            width={width} height={height}
            src={url} title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mt-0 w-screen"
          />
        </div>
      </Modal>
    </>
  );
};

export default VideoModal;
