import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Modular', // 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      /* <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </> */
      <>
        Features easy task and novelty design for
        developing and evaluating open-world agents,
        in single- and multi-agent scenarios.
      </>
    ),
  },
  {
    title: 'Seamless', // 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      /* <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </> */
      <>
        Works with agents of different architectures,
        including symbolic planning agents, reinforcement learners,
        and hybrid neurosymbolic architectures.
      </>
    ),
  },
  {
    title: 'Exemplative', // 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      /* <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </> */
      <>
        Offers benchmarks of state-of-the-art learning and hybrid methods
        for novelty handling.
      </>
    ),
  },
  {
    title: 'Evaluative', // 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      /* <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </> */
      <>
        Employs agent-agnostic evaluation metrics for novelty adaptation.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
