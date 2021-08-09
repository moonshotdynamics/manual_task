import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer/Footer.jsx";
import styles from "../styles/Home.module.css";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import Modal from "../components/modal/Modal";
import heroImage from "../public/assets/img/hair-cat-header.jpg";

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
    <div className={styles.container}>
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

      <main className={styles.main}>
        <Image src={heroImage} alt="heroImage" />

        <div>
          <h1 className={styles.title}>
            BE GOOD <br />
            TO YOURSELF
          </h1>

          <p className={styles.description}>
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>
          <button className={styles.button} onClick={openQuiz}>
            TAKE THE QUIZ
          </button>
        </div>

        <div className={styles.grid}>
          <div className={styles.title}>What we can help with</div>
          <div>
            {/* {questionList.questions.map((question) => (
              <div>
                <p>{question.question}</p>
              </div>
            ))} */}
          </div>
          <div></div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
