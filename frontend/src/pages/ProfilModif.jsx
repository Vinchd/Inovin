import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import clients from "../components/Data/data-client";

function ProfilModif() {
  return (
    <Layout>
      <div className="flex flex-col items-center p-10">
        <h2 className="text-xl">Modifier mon profil</h2>
        <span className="w-56 bg-secondary h-[1px] self-center m-6" />

        <form className=" flex flex-col gap-6">
          <div className="flex flex-row justify-between gap-5">
            <label htmlFor="name">Prénom:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder={clients[0].name}
              className="text-primary w-44 p-1 rounded text-center"
            />
          </div>
          <div className="flex justify-between flex-row gap-5">
            <label htmlFor="lastname">Nom:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder={clients[0].lastname}
              className="text-primary w-44 p-1 rounded text-center"
            />
          </div>
          <div className="flex justify-between flex-row gap-5">
            <label htmlFor="email">Adresse mail:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={clients[0].email}
              className="text-primary w-44 p-1 rounded text-center"
            />
          </div>
          <div className="flex justify-between flex-row gap-5">
            <label htmlFor="birthday">Date de naissance:</label>
            <input
              type="text"
              name="birthday"
              id="birthday"
              placeholder={clients[0].birthday}
              className="text-primary w-44 p-1 rounded text-center"
            />
          </div>
          <div className="flex justify-between flex-row gap-5">
            <label htmlFor="password">Mot de passe:</label>
            <input
              type="text"
              name="password"
              id="password"
              className="text-primary w-44 p-1 rounded text-center"
            />
          </div>
          <div className="flex justify-between flex-row gap-5">
            <label htmlFor="password">Confirmer mot de passe:</label>
            <input
              type="text"
              name="password"
              id="password"
              className="text-primary w-44 p-1 rounded text-center"
            />
          </div>
        </form>
        <div className="p-8 flex flex-row justify-center flex-wrap">
          <Link to="/profil">
            <button className="m-2" type="button">
              Valider
            </button>

            <button className="m-2" type="button">
              Annuler
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default ProfilModif;