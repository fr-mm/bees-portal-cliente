import { useState } from "react";

function useUserProvider() {
  const [buscaContext, setBuscaContext] = useState();
  
  return {
    buscaContext,
    setBuscaContext,
  };
}

export default useUserProvider;
