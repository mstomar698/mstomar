// import { motion } from 'framer-motion';
// import { staggerContainer } from './motion';

const SectionWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  idName: string
) =>
  function HOC(props: P) {
    return (
      <section
        // variants={staggerContainer(0.5, 0.5)}
        // initial="hidden"
        // whileInView="show"
        // viewport={{ once: true, amount: 0.25 }}
        className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component {...props} />
      </section>
    );
  };

export default SectionWrapper;
