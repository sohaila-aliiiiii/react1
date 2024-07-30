import { useState } from 'react';
import img1 from '../../assets/poert1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';
const Popup = ({ img, handleClose }) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>x</span>
        <img src={img} alt="Popup content" />
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const togglePopup = (img = null) => {
    setCurrentImg(img);
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className="portfolio pt-20">
        <div className="container mx-auto text-center">
          <div>
            <h1 className="c-blue text-4xl font-bold">PORTFOLIO COMPONENT</h1>
            <div className="b-blue w-28 h-1 rounded-sm inline-block"></div>
            <i className="fa-solid fa-star c-blue px-1"></i>
            <div className="b-blue w-28 h-1 rounded-sm inline-block"></div>
          </div>
          <div className="flex flex-wrap">
            {[img1, img2, img3, img1, img2, img3].map((img, index) =>(
              <div key={index} className="md:w-1/3 p-10">
                <div className="relative player">
                  <img src={img} className="w-full rounded-md" alt={`Portfolio ${index + 1}`} />
                  <div
                    onClick={() => togglePopup(img)}
                    className="layer absolute top-0 bottom-0 right-0 left-0 bg-blue-500 rounded-md opacity-60 flex justify-center items-center"
                  >
                    <i className="fa-solid fa-plus text-white text-7xl opacity-100"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isOpen && <Popup img={currentImg} handleClose={togglePopup} />}
    </div>
  );
};

export default Portfolio;