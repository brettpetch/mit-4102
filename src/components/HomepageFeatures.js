import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'For Next Class:',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
        <>
            Do the same thing but with Prof's business (skills, values/mission, ica). You can find her at
            <ul>
                <li><a href="https://sheepspot.com">Sheepspot Website</a></li>
                <li><a href="https://twitter.com/sheepspot?lang=en">Twitter</a></li>
                <li><a href="https://www.instagram.com/sheepspot/?hl=en">Instagram</a></li>
                <li><a href="https://www.facebook.com/sheepspotyarns/">Facebook</a></li>
            </ul>
      </>
    ),
  },
  {
    title: 'About',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        In this course we will be exploring how artists and makers can create sustainable businesses. We will address the foundational questions entrepreneurs need to ask themselves before starting. Topics will include identifying whom we want to serve, product development, branding, marketing, and mindset. Learn how to build a business aligned with your values, talents, and making practice. 
      </>
    ),
  },
  {
    title: 'Next Lecture Date',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Sept. 15, 2021
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
