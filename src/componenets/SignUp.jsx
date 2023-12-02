import React, {  useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const containerStyle = {
    backgroundImage: `url()`,
    backgroundSize: '150% 120%',
    backgroundPosition: 'center',
    minHeight: '90vh ',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    mail: '',
    age: '',
    numeroTel: '',
    accepteRegles: false,
  });

  const isFormEmpty = Object.values(formData).some((value) => value === '');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = () => {
};

  return (
    <div style={containerStyle} className="container mt-5">
      <h2>Signup</h2>
      <form>
<div className="form-group">
  <label>Nom</label>
  <input
    type="text"
    className="form-control"
    name="nom"
    value={formData.nom}
    onChange={handleChange}
    required
  />
</div>
<div className="form-group">
  <label>Prénom</label>
  <input
    type="text"
    className="form-control"
    name="prenom"
    value={formData.prenom}
    onChange={handleChange}
    required
  />
</div>
<div className="form-group">
  <label>Adresse E-Mail</label>
  <input
    type="text"
    className="form-control"
    name="mail"
    value={formData.mail}
    onChange={handleChange}
    required
  />
</div>
<div className="form-group">
  <label>Age</label>
  <input
    type="number"
    className="form-control"
    name="age"
    value={formData.age}
    onChange={handleChange}
    required
  />
</div>
<div className="form-group">
  <label>Numéro de téléphone</label>
  <input
    type="tel"
    className="form-control"
    name="numeroTel"
    value={formData.numeroTel}
    onChange={handleChange}
    required
  />
</div>
<div className="form-group form-check">
  <input
    type="checkbox"
    className="form-check-input"
    id="accepteRegles"
    name="accepteRegles"
    checked={formData.accepteRegles}
    onChange={handleChange}
    required
  />
  <label className="form-check-label" htmlFor="accepteRegles">
    J'accepte les règles du site
  </label>
</div>
<button type="button" disabled={isFormEmpty} onClick={handleSubmit}>
  <Link to="/Store" style={{ textDecoration: 'none', color: 'inherit' }}>
    S'INSCRIRE
  </Link>
</button>

</form>
      <div className="mt-3"></div>
    </div>
  );
};

export default Signup;

