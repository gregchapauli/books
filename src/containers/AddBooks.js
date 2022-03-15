import React from "react";

const AddBooks = () => {
  return (
    <main role="main">
      <div className="container-fluid bg-dark text-light p-5">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajouter un livre à votre bibliothèque</p>

          <form className="row justify-content-center">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Titre"
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control ms-1"
                placeholder="Auteur"
                required
              />
            </div>
            <div className="col">
              <button className="btn btn-outline-light ms-1">
                Ajouter un livre
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container" style={{ minHeight: "200px" }}>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              <li className="list-group-item list-group-item-light d-flex justify-content-between mt-4">
                livres enregistrés ici
              </li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="btn btn-danger mt-4 mb-5">
                Effacer tous les livres
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddBooks;
