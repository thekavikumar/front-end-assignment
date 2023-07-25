import React from "react";
import { Loader2 } from "lucide-react";

function loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader2
        size={24}
        className="
        animate-spin
      "
      />
    </div>
  );
}

export default loading;
