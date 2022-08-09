import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Page from '../components/container';
import React, {useState} from 'react';
import { render } from 'react-dom';

export default function Home() {
  const [contactValue, setContactValue] = useState(0);

  return (
    <>
      <div>
        <Head>
          <title>East Meets West</title>
        </Head>

        
        <Page>
          <main className={styles.main}>
            <div className='intro'>
              <p>The first contact between the nations of Asia and Europe were normally to establish trade. Such relationships were mutually beneficial and normally ended with both nations prospering and becoming more powerful. As the Europeans began to grow in power and advance technologically, the encounters with the nations of Asia became less than friendly, with conquest as the aim as opposed to trade.</p>
              <p>One particular set of interactions were between the Dutch and the Indonesians. While they were not the first Europeans on the islands, they would become the most influential, and would eventually rule one of the most prized European colonies and have a near monopoly on the spice trade.</p>
              
              <div className='button-container'>
                <button onClick={() => setContactValue('Pre-contact')}>
                  Pre-contact
                </button>
                <button onClick={() => setContactValue('Initial-contact')}>
                  Initial contact
                </button>
                <button onClick={() => setContactValue('Post-contact')}>
                  Post-contact
                </button>
              </div>

              <div>
                {renderElements(contactValue)}
              </div>
            </div>
          </main>
        </Page>
      </div>

      <style jsx>{`
        .intro {
          text-align: center;
        }

        .button-container {
          width: 100%;
          height: 10vh;
        }

        button {
          width: 30%;
          height: 10vh;
          border-radius: 25%
          margin-right: 1%;
          margin-left: 1%;
          transition: 350ms linear all 350ms;
        }

        button:hover {
          background-color: grey;
        }
    `}</style>
    </>

    
  );
}

function Precontact() {
  return (
    <p>First contact</p>
  );
}

function Initialcontact() {
  return (
    <p>Initial contact</p>
  );
}

function Postcontact() {
  return (
    <p>Post contact</p>
  );
}

function renderElements(contactValue) {
  if (contactValue === 'Pre-contact') {
    return <Precontact></Precontact>;
  } else if (contactValue === 'Initial-contact') {
    return <Initialcontact></Initialcontact>
  } else if (contactValue === 'Post-contact') {
    return <Postcontact></Postcontact>;
  } else if (contactValue === 0) {
    return <h3>Click a button to get started!</h3>;
  } else {
    return <p>Error!</p>
  }
}
