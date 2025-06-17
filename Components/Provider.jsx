"use client";
import { Toaster } from "react-hot-toast";
import Provider from "../Components/Provider";

const ProviderComponent = ({ children }) => {
  return (
    <section>
      <Toaster position="bottom-right" reverseOrder={false} />
      {children}
    </section>
  );
};

export default ProviderComponent;
