import './DeletePopUp.css';

interface Props {
  onCancel: () => void;
  onDelete: () => void;
}

function DeletePopUp({ onCancel, onDelete }: Props) {
  return (
    <div className="delete-popup-overlay">
      <div className="delete-popup-container">
        <h2 className="delete-popup-title">Are you sure?</h2>
        <p className="delete-popup-message">
          Are you sure you want to delete this mail?
        </p>
        <div className="delete-popup-buttons">
          <button
            onClick={onCancel}
            className="delete-popup-button cancel-button"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="delete-popup-button delete-button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopUp;
