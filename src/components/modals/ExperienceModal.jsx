import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { simpleTranslation } from "../language/LanguageContent";

export const ExperienceModal = ({ isOpen, onClose, images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || !images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal fade show d-block"
          style={{ backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1050 }}
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="modal-dialog modal-dialog-centered modal-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="modal-content bg-dark text-white border-0">
              <div className="modal-header border-0">
                <h5 className="modal-title">
                  {simpleTranslation(title)}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={onClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* Carrusel de imágenes */}
                <div className="position-relative">
                  <div className="carousel-container">
                    <div className="carousel-image-container">
                      <img
                        src={images[currentIndex]}
                        alt={`${simpleTranslation(title)} - Image ${currentIndex + 1}`}
                        className="img-fluid rounded"
                        style={{ 
                          maxHeight: '380px', 
                          width: 'auto',
                          maxWidth: '100%',
                          height: 'auto',
                          objectFit: 'contain',
                          display: 'block',
                          borderRadius: '4px'
                        }}
                      />
                    </div>

                    {/* Controles de navegación */}
                    {images.length > 1 && (
                      <>
                        <button
                          className="carousel-control-prev"
                          onClick={prevImage}
                          style={{ 
                            position: 'absolute', 
                            top: '50%', 
                            left: '10px',
                            transform: 'translateY(-50%)',
                            zIndex: 2
                          }}
                        >
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          onClick={nextImage}
                          style={{ 
                            position: 'absolute', 
                            top: '50%', 
                            right: '10px',
                            transform: 'translateY(-50%)',
                            zIndex: 2
                          }}
                        >
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </>
                    )}
                  </div>

                  {/* Indicadores */}
                  {images.length > 1 && (
                    <div className="carousel-indicators mt-3">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`btn btn-sm mx-1 ${index === currentIndex ? 'btn-primary' : 'btn-secondary'}`}
                          onClick={() => goToImage(index)}
                          style={{ width: '10px', height: '10px', borderRadius: '50%' }}
                          aria-label={`Go to image ${index + 1}`}
                        ></button>
                      ))}
                    </div>
                  )}

                  {/* Contador de imágenes */}
                  {images.length > 1 && (
                    <div className="text-center mt-2">
                      <small className="text-muted">
                        {currentIndex + 1} / {images.length}
                      </small>
                    </div>
                  )}
                </div>
              </div>
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  {simpleTranslation("lbl-close")}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};