import React from 'react';

const App: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="card text-center shadow">
        <div className="card-body">
          <h3 className="card-title">John Doe</h3>
          <p className="card-text">Frontend Developer</p>
          <button className="btn btn-primary">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default App;

