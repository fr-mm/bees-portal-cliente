import { useState } from "react";

function useUserProvider() {
  const [resultadoDeBusca, setResultadoDeBusca] = useState();

  return {
    resultadoDeBusca,
    setResultadoDeBusca,
  };
}

export default useUserProvider;
