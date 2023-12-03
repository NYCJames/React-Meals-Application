import React from "react";
import { useGlobalContext } from "../Context";

function Modal() {
  const { selectedMeal, closeModal } = useGlobalContext();
  // console.log(selectedMeal);

  const {
    idMeal: id,
    strMeal: title,
    strMealThumb: imageUrl,
    strInstructions: instructions,
    strSource: source,
  } = selectedMeal;
  // console.log(id, title, imageUrl);

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img
          src={imageUrl}
          className="img modal-img"
          style={{ width: `200px` }}
        ></img>
        <div className="modal-content">
          <h4>{title}</h4>
          <p>Instructions:</p>
          <p>{instructions}</p>
          <a href={source} target="_blank">
            Source
          </a>
          <button className="btn btn-hipster close-btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Modal;
