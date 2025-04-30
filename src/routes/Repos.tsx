// src/routes/Repos.tsx

import { useParams } from "react-router-dom";

const Repos = () => {
  const { username } = useParams();

  return (
    <div>
      <h2>Repositórios de {username}</h2>
      {/* Aqui você pode buscar os repositórios usando a API */}
    </div>
  );
};

export default Repos;
