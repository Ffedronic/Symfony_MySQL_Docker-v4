import React, { useState } from "react";
import Layout from "./Layout/Layout";
import FirstForm from "./FirstForm/FirstForm";
import SecondForm from "./SecondForm/SecondForm";
import Section from "./Section/Section";

export default function () {
  const [isAvailable, setIsAvailable] = useState(true);
  return (
    <Layout>
      <Section>
        <FirstForm />
      </Section>
      <Section>
        <SecondForm />
      </Section>
    </Layout>
  );
}
