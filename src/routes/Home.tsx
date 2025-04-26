import Search from "../components/Search";
import { useState } from "react";
import { UserProps } from "../types/user";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  return (
    <div>
      <Search />
    </div>
  );
};

export default Home;