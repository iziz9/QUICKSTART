import Reac0, { useState } from "react";


type Props = { title: string };

const About = (props: Props) => {

  return (
    <div>
      <h2>About { props.title}</h2>
    </div>
  )
};

export default About;
