import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero/Hero";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer.jsx";
import styles from "../styles/Home.module.css";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import Modal from "../components/modal/Modal";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://manual-case-study.herokuapp.com/questionnaires/972423.json"
  );
  const data = await res.json();

  return {
    props: { questionList: data },
  };
};

export default function Home({ questionList }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openQuiz = () => {
    setModalIsOpen(true);
  };

  const closeQuiz = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Modal
        show={modalIsOpen}
        title={"Is Manual for me?"}
        modalClosed={closeQuiz}
        content={questionList}
      />
      <Head>
        <title>Manual</title>
        <meta name="description" content="Be good to yourself" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero setModalIsOpen={setModalIsOpen} />
      <Main />

      <Footer />
    </div>
  );
}
