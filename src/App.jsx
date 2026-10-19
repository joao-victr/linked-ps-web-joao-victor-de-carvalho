import { useState } from "react";
import { Check } from "lucide-react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./sections/Hero/Hero";
import { Servicos } from "./sections/Servicos/Servicos";
import { Flower } from "./components/Flower/Flower";
import { Horarios } from "./sections/Horarios/Horarios";
import { Feedbacks } from "./sections/Feedbacks/Feedbacks";
import { Contato } from "./sections/Contato/Contato";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Horarios />
        <Feedbacks />
        <Contato />
      </main>
      <Footer />
    </>
  );
}