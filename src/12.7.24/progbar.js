import ProgressBar from 'react-bootstrap/ProgressBar';

function Customprogresbar(prop) {
    const {scale="default"}=prop;
  return <ProgressBar now={scale} />;
}

export default Customprogresbar;