import Swal from 'sweetalert2';

const ModalEmployment = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire(
      'Congratulations!',
      'Your job has been posted!',
      'success'
    );
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <label>
            Job Title:
            <input type="text" name="jobTitle" required />
          </label>
          <label>
            Company:
            <input type="text" name="company" required />
          </label>
          <label>
            Salary:
            <input type="number" name="salary" required />
          </label>
          <label>
            Location:
            <input type="text" name="location" required />
          </label>
          <label>
            Description:
            <textarea name="description" required></textarea>
          </label>
          <label>
            About Company:
            <textarea name="aboutCompany" required></textarea>
          </label>
          <label>
            Number of Employees:
            <input type="number" name="numEmployees" required />
          </label>
          <button type="submit">
            Post Job
          </button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalEmployment;





