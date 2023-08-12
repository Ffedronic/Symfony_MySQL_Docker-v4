import React, { useState } from "react";
import Layout from "./Layout/Layout";
import FirstForm from "./FirstForm/FirstForm";
import SecondForm from "./SecondForm/SecondForm";

export default function () {
  const [isAvailable, setIsAvailable] = useState(true);
  return (
    <Layout>
      <section className="">
        <FirstForm />
      </section>
      <section className="">
        <SecondForm />
      </section>
    </Layout>
  );
}
