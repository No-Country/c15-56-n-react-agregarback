import { useState } from 'react';
import './modal.css';
import Swal from 'sweetalert2';

export default function Modal({ isOpen, isClosed }) {
  const { nameSurname, setNameSurname } = useState('');
  const { email, setEmail } = useState('');
  const { phone, setPhone } = useState('');
  const { salary, setSalary } = useState('');

  if (!isOpen) return null;

  const alertFunc = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Congratulations!',
      text: 'Your apply have been send!',
      footer: 'Good Luck!',
      icon: 'success',
    }).then((result) => {
      if (result.isConfirmed) {
        isClosed();
      }
    });
  };

  return (
    <div>
      <div className="bg-modal" onClick={isClosed}></div>
      <div className="container-modal">
        <form className="form-modal">
          <label className="label-modal">
            Name and surname
            <input
              value={nameSurname}
              type="text"
              name="namesurname"
              placeholder="Bill Clinton"
              required
              className="input-modal"
              onChange={(e) => setNameSurname(e.target.value)}
            />
          </label>
          <label className="label-modal">
            E-mail
            <input
              value={email}
              type="email"
              name="email"
              placeholder="billclinton@gmail.com"
              required
              className="input-modal"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="label-modal">
            Phone number
            <input
              value={phone}
              type="number"
              name="phone"
              placeholder="+5434444444"
              required
              className="input-modal"
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label className="label-modal">
            Expected Salary (USD)
            <input
              value={salary}
              type="number"
              name="salary"
              placeholder="1000"
              required
              className="input-modal"
              onChange={(e) => setSalary(e.target.value)}
            />
          </label>
          <label className="label-modal">
            Why are you interesting for this jod? (Optional)
            <textarea
              name="interesting"
              cols="40"
              rows="5"
              className="input-modal"
            ></textarea>
          </label>
          <div className="btn-modal">
            <input
              type="button"
              value="Finish applycation!"
              onClick={alertFunc}
              style={{ cursor: 'pointer' }}
              className="btnfinish-modal"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
