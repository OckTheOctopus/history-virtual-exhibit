import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Page from '../components/container';
import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import Nagarakertagama from '../public/images/Nagarakertagama.jpg';
import Coin from '../public/images/coin.webp';
import Fleet from '../public/images/fleet.png';
import Map from '../public/images/map.jpg';
import Precontact1 from '../public/images/precontact1.jpg';

export default function Home() {
  const [contactValue, setContactValue] = useState(0);
  const [opaque, setOpaque] = useState(false);

  useEffect(() => {
    setOpaque(true);
  })

  return (
    <>
      <div className={handleFadeIn(opaque)}>
        <Head>
          <title>East Meets West</title>
        </Head>
        <Page>
          <main className={styles.main}>
            <div className='intro'>
              <p>The first contact between the nations of Asia and Europe were normally to establish trade. Such relationships were mutually beneficial and normally ended with both nations prospering and becoming more powerful. As the Europeans began to grow in power and advance technologically, the encounters with the nations of Asia became less than friendly, with conquest as the aim as opposed to trade.</p>
              <p>One particular set of interactions were between the Dutch and the Indonesians. While they were not the first Europeans on the islands, they would become the most influential, and would eventually rule one of the most prized European colonies and have a near monopoly on the spice trade.</p>
              <br/>
              <br/>
              <div className='button-container'>
                <button onClick={() => setContactValue('Pre-contact')}>
                  <strong>Pre-contact</strong>
                </button>
                <button onClick={() => setContactValue('Initial-contact')}>
                  <strong>Initial contact</strong>
                </button>
                <button onClick={() => setContactValue('Post-contact')}>
                  <strong>Post-contact</strong>
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
        .outerapp {
          opacity: 0;
        }

        .opaque {
          opacity: 1;
          animation-duration: 2s;
          animation-name: animateOpacity;
        }

        @keyframes animateOpacity {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .intro {
          text-align: center;
        }

        .button-container {
          width: 100%;
          height: 10vh;
        }

        button {
          font-size: 20px;
          width: 30%;
          height: 10vh;
          border-radius: 5px;
          margin-right: 1%;
          margin-left: 1%;
          transition: 0.35s linear all 0.35s;
          color: #151515;
          background-color: #fafdec;
          border-color: #fafdec
        }

        button:hover {
          width: 33%;
          height: 11vh;
        }
    `}</style>
    </>

    
  );
}

function Precontact() {
  return (
    <>
        <p>Before the arrival of Europeans, the Indonesian archipelago was not united under one nation, rather it was mutliple kingdoms and states trying to assert control over a few key islands, the main ones being Boreno and Java. This did not mean there was a lack of great empires and rulers on the archipelago, though. Many kingdoms rose and fell on the islands, all of them a mix of cultures and people heavily influenced by India to the north and the Middle Eastern kingdoms to the west.</p>
        <br/>
        <br/>
        <h2>Penataran Temple</h2>
        <Image src={Precontact1} alt='' height='300px' width='600px'></Image>
        <p className='description'>This is the Pentaran Temple. It is one of the largest Hindu temples on the island of Java. It was built during the time of the Kediri Kingdom, and was an important government building during the time of the Majapahit Kingdom.<br/>Temples are built not only for worship. Temples are a way to display the strength of a ruler - especially if the temples are large. Hinduism was a huge part of Indonesia&#39;s history, with their proximity to India and their historically strong trading relations being the main factors for the spread of the religion to the islands. The fact that the temple was built and is still standing indicates that the Kediri Kingdom had sufficient power and resources to afford to build it, the inhabitants of the area valued it deeply, and that the area was stable enough to have it stay up. It also indicates that the rulers and inhabitants alike of the island cared very much about religion - even in times of crisis and war, the temple was left intact and was preserved to this day.<br/>This is, overall, a reliable source. The temple offers a glimpse into the island&#39;s past and it does not pick a side in conflicts. It is quite useful in terms of the information it provides to us, but the temple alone cannot tell us everything about a kingdom, and we must cross-reference it with other sources to ensure the accuracy of any analysis of the island&#39;s history.</p>

        <br/>
        <br/>
        <h2>The Nagarakretagama</h2>
        <Image src={Nagarakertagama} alt='' height='300px' width='600px'></Image>
        <p className='description'>This is the Nagarakretagama. It is an Indonesian epic poem describing the Majapahit Empire at its height. It describes the lands of the empire, its capital city, its customs, its religious festivals, and more. It is one of the most valuable primary sources on the history of Indonesia known, particularly due to its vivid descriptions of the culture and the Hindu celebrations.<br/>The poem was written during the height of the Majapahit Empire, when it stretched from Java to the Philippines, an epic poem about an empire written in its own language attests to its strength and prestige, and indicates that the people view the empire as a major power in the region. This fact is proved further by the descriptions of the army, expansions, and castle guards in the poem. It is quite a useful source for historians, mainly due to the amount of detail used to describe religious ceremonies and practices, while also providing insight into the function of the empire as a whole. It may not be the most reliable source, as we are unsure as to who wrote it, why it was written, and what ties the author had. It is quite likely that the author or authors made the empire seem more grand than it was. </p>
      <style jsx>{`
        .description {
          text-align: left;
        }
      `}</style>
    </>
  );
}

function Initialcontact() {
  return (
    <>
      <p >Before the Dutch had arrived, the Portuguese had established trading outposts on the Indonesian archipelago. The Portuguese had attempted to conquer Indonesia, but ultimately failed to do so when they were driven out by the natives.</p>
      <p>In 1602, the Dutch East India Company (VoC) was founded. It was given the authority to effectively operate like a country - they were allowed to declare wars, field their own armies, and mint their own currencies. They were granted a total monopoly on the spice trade in Indonesia. While the VoC had the same goals as the Portuguese, it was better equipped, better funded, and better trained overall, which would lead to their ultimate success in controlling the islands, and holding one of the most prized European colonies. Internal corruption within the company led to its bankrupcy and eventual dissolution, with the state controlling the islands outright.</p>
      
      <h2>The First Dutch Expedition to Indonesia</h2>
      <Image src={Fleet} alt='' height='300px' width='600px'></Image>
      <p className='description'>This is an image depicting the first Dutch expedition to Indonesia. This fleet ended up losing half its crew, killed a prince on the island of Java, but ended up returning with spices. This inspired the Dutch and led to the formation of the VoC. This source shows the ships entering or leaving either Indonesia or the Netherlands, the source does not say, but there is what looks like cannon fire coming out of some of the ships, while there are towers in the background (which could show either civilisation, as both were advanced in their regions).<br/>The advanced societies of Europe left behind a paper trail for all their activities so that they could be recorded for future reference. This led to the creation of journals, documents, and pictures such as this. The Dutch would have been quite advanced to be recording their activities. The image could have just as likely been a propaganda piece to try and sway public opinion on the potential colonisation of Indonesia - by making the Dutch appear mighty and powerful, the number of casualties would likely be low and the outcome beneficial supposedly beneficial to all Dutch citizens.</p>
      
      <style jsx>{`
        .description {
          text-align: left;
        }
      `}</style>
    </>
  );
}

function Postcontact() {
  return (
    <>
      <p>The Dutch first controlled modern-day Jakarta, but quickly managed to destroy the Islamic Mataram Kingdom and spread to the rest of Java. Their main goal was to secure the vital Malacca strait and the Maluku Islands (also called the Spice Islands during this time). By the time the VoC became bankrupt, it controlled all of modern-day Indonesia and had established trading posts with India, Sri Lanka, and Japan.</p>


      <h2>Picture of Batavia (now Jakarta)</h2>
      <Image src={Map} alt='' height='300px' width='600px'></Image>
      <p className='description'>This is a Dutch picture of Batavia (now Jakarta). Batavia was the colonial capital of the VoC, and was their main base of operations on the islands. In the picture, many ships can be seen entering the various ports and canals of the city. The powers of Europe left behind paper trails for them to follow and hold things to account, and this is one example of this. The picture was likely made for encyclopaedias, map pictures, books, messages, and the like. A map of a city is not one that many people would try to forge, as errors in the map could have consequences for the parties involved. The picture is likely an accurate depiction of the city of Batavia, and shows us an overview of the layout of the city and how it was organised, as well as how the landscape was transformed around the city. The large number of ships in the harbour indicates that Batavia was a city that focused on trade, if not outright relied on it completely. As you can see in the image, the city looks very European, meaning that the original city was likely destroyed and the natives displaced (the Dutch had to fight many kingdoms to gain control of Java). While this wouldn't have been a problem for the Dutch, it did mean that the Indonesians lost their independence and sometimes their lives.</p>
      
      <h2>The VoC Duit</h2>
      <Image src={Coin} alt='' height='300px' width='600px'></Image>
      <p className='description'>This is a VoC Duit. This was one of the coins minted by the VoC for its use in its trading posts (later restricted to just Indonesia). 20 Duits would make one Guilder. While the coin doesn&#39;t tell us much, it symbolises the strength of the VoC. It would be unimaginable to us today if a company went to war with a sovereign state, yet the VoC - being a company in which you could trade on the Dutch exchange - essentially acted like a country and had powers that would be unthinkable to give to a company today. The VoC not only had a total monopoly granted to them on the spice trade; but they could wage wars, field and pay for their own armies, put their own currency into circulation, and execute their prisoners condemned under their own judicial system. It was also this immense power that led to corruption and bankruptcy, which would lead to the eventual collapse of the company and Indonesia being ruled outright by the Dutch State. The source is quite simple, and while it doesn&#39;t offer much as to how the company was run or what was purchased, it stills tells us much about the sheer strength and power of a single company, and the powers entrusted to it by the state. What the coin does not show, however, is the degree of the exploitation of the Indonesians by the Dutch, although it can be assumed that the VoC had the power to do so - and by looking at what other colonial empires did to the surrounding lands, they likely did so. This would have benefitted the VoC with cheap labour, but come at the cost of wreaking havoc on Indonesian society.</p>

      <style jsx>{`
        .description {
          text-align: left;
        }
      `}</style> 
    </>
  );
}

function renderElements(contactValue) {
  if (contactValue === 'Pre-contact') {
    return <Precontact></Precontact>;
  } else if (contactValue === 'Initial-contact') {
    return <Initialcontact></Initialcontact>;
  } else if (contactValue === 'Post-contact') {
    return <Postcontact></Postcontact>;
  } else if (contactValue === 0) {
    return <h3>Click a button to get started!</h3>;
  } else {
    return <p>Error!</p>
  }
}

function handleFadeIn(isOpaque) {
  if (isOpaque) {
    return 'opaque';
  } else {
    return 'outerapp';
  }
}
