import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <>
      <span style={{ fontSize: "1.4em" }}>
        Here are some of my <strong>pet projects</strong>. (
        <strong>Professional projects</strong> are mentioned in my resume)
      </span>
      <Container>
        <ProjectCard
          srcLink="https://github.com/nkg447/smartphone-simulator"
          title="Smartphone Orientation Simulator"
          description="Simulate your smartphone's orientation. Works with Android, might require extra permissions on iOS."
          website="https://smartphone-simulator.herokuapp.com/simulator/"
          img="https://raw.githubusercontent.com/nkg447/smartphone-simulator/master/screenshot/simulator.gif"
        />
        <ProjectCard
          srcLink="https://github.com/nkg447/chokdi"
          title="Chokdi"
          description="An Indian card game. Played between 4 players. Somewhat like Bridge card game."
          website="https://chokdi.herokuapp.com/"
          img="https://raw.githubusercontent.com/nkg447/chokdi/master/screenshot/chokdi-screenshot1.jpg"
        />
        <ProjectCard
          srcLink="https://github.com/nkg447/rc-file-manager"
          title="Ridiculously Cool File Manager"
          description="An electron based file manager. Using ReactJs."
          img="https://raw.githubusercontent.com/nkg447/rc-file-manager/develop/screenshots/s2.png"
        />
        <ProjectCard
          srcLink="https://github.com/nkg447/x-api"
          title="X-API"
          description="Allow client applications to use different vendors for different services."
          img="https://raw.githubusercontent.com/nkg447/x-api/master/Client-server-model.png"
        />
        <ProjectCard
          srcLink="https://github.com/nkg447/DFA-Minimizer"
          title="DFA-Minimizer"
          description="Java program to Minimize deterministic finite automata, Convert NFA to DFA and graphically represent the results."
          img="https://raw.githubusercontent.com/nkg447/DFA-Minimizer/master/screenshots/dfa-min.png"
        />
        <ProjectCard
          srcLink="https://github.com/nkg447"
          title="And Many more...."
          website="https://github.com/nkg447"
          description="Please visit my github page to see some more of my cool projects."
        />
        <img
          style={{ margin: "1em" }}
          src="https://github-readme-stats.vercel.app/api?username=nkg447&amp;show_icons=true"
          alt="nkg447"
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const DP = styled.img`
  width: 6em;
  height: 6em;
  border-radius: 100%;
  margin-right: 16px;
`;

const ProjectCard = (props) => {
  const { srcLink, title, description, website, img } = props;
  return (
    <Card>
      <CardTitle>
        <a target="_blank" href={srcLink}>
          {title}
        </a>
      </CardTitle>
      <div>
        {description}
        <br />
        <br />
        {img && <ProjectImage src={img} />}
        {website && (
          <Container>
            <svg
              mr="2"
              classes="flex-shrink-0"
              height="1em"
              class="octicon octicon-link flex-shrink-0 mr-2"
              viewBox="0 0 16 16"
              version="1.1"
              width="1em"
              style={{ minWidth: "1em" }}
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
              ></path>
            </svg>
            &nbsp;
            <a target="_blank" href={website}>
              {website}
            </a>
          </Container>
        )}
      </div>
    </Card>
  );
};

const Card = styled.div`
  padding: 1em;
  margin: 1em;
  display: flex !important;
  width: 30%;
  min-width: 495px;
  background-color: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  text-align: -webkit-match-parent;
  flex-direction: column;
`;

const CardTitle = styled.div`
  color: #2f80ed;
  font-weight: bold;
  cursor: pointer;
`;

const ProjectImage = styled.img`
  width: 100%;
`;
