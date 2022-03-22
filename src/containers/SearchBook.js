import React from "react";

const SearchBook = () => {
  return (
    <main role="main">
      <div className="container-fluid bg-dark text-light p-5">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Indiquer le sujet du livre à rechercher</p>

          <form className="row justify-content-center">
            <div className="form-group w-50">
              <input
                type="text"
                className="form-control"
                placeholder="Quoi rechercher ?"
                required
              />
            </div>

            <div className="form-group">
              <button className="btn btn-outline-light mt-3">Rechercher</button>
            </div>
          </form>
        </div>
      </div>

      <div className="container" style={{ minHeight: "200px" }}>
        <div className="accordion">
          <div className="card-mb-2">
            <div className="card-header"></div>
            <div className="collapse" data-parent="accordion">
              <div className="card-body">
                {/*
                        Image
                        Titre
                        Auteur
                        Descriptiojn
                        Btn plus d'infos
                        Btn Enregistrer
                        */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchBook;
