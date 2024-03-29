import Row from "./Row";
function HomeBenefits() {
  return (
    <div>
      <Row
        src="/images/homo.jpg"
      
        heading="How is Homeopathy Different from other systems of Medicine?"
        text="Homoeopathy is a holistic medicine and treats the person as a whole. It not only works on the superficial diseases but also believes in treating the root cause of disease. It also helps to boost up the immunity of the patient."
        btn={true}
      />
      <Row
        first={true}
        src="/images/homoeo.jpg"
        heading="Do Homeopathic medicines produce side effects?"
        text="Homoeopathic medicines are natural, gentle in action and hence completely safe. They do not cause any side effects and are non addictive. Thus are safe for all age groups from babies to children to young people to elderly."
        btn={true}
      />
      <Row
        src="/images/homoeopa.jpg"
        heading="Does Homeopathy give relief slowly?"
        text="The result of the medicine depends on whether the disease is acute or chronic. Acute diseases respond to treatment in a very short time. The time taken for treating a chronic disease depends upon various factors like severity, complexity, duration and suppression of the disease, etc."
        btn={true}
      />
     
    </div>
  );
}

export default HomeBenefits;
