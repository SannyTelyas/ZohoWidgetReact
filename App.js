import { Tooltip, Typography } from "@material-ui/core";
import React, { createRef } from "react";
import Tree from "react-d3-tree";
import "./styles.css"; 
import { useCenteredTree } from "./helpers";


const data = {
  name: "My Interest",
  children: [
    {
      name: "learning",
      children: [
        { name: "flipped classroom" },
        { name: "elearning" },
        { name: "cognitivism" }
      ]
    },
    {
      name: "peer assessment",
      children: [
        { name: "metacognition" },
        { name: "self-assessment" },
        { name: "online classroom" }
      ] 
    },
    {
      name: "social media",
      children: [{ name: "news" }, { name: "media" }, { name: "marketing" }]
    },
    {
      name: "recommender system",
      children: [
        { name: "collaborative filtering" },
        { name: "implicit data collection" }, 
        { name: "matrix factorization" }
      ]
    },
    {
      name: "explanation",
      children: [
        { name: "persuasiveness" },
        { name: "justification" },
        { name: "transparency" }
      ]
    },
    {
      name: "visualization",
      children: [
        { name: "statistics" },
        { name: "interaction design" },
        { name: "color coding" }
      ]
    },
    {
      name: "big data",
      children: [
        { name: "database" },
        { name: "predictive analytics" },
        { name: "data storage" }
      ]
    }
  ]
};

const containerStyles = {
  width: "70%",
  height: "90vh",
  border: "5px solid black",
  borderRadius: "10px" , 
  display: "inline-block" 
};

const renderNodeWithCustomEvents = ({ nodeDatum, toggleNode, wrapper }) => {
  let y = 37;
  let x = -10;



  return (
    <g ref={wrapper}>
      <Tooltip
        title={<Typography>{nodeDatum.name}</Typography>}
        arrow
        placement="right"
      >
        <circle 
          r="20"
          fill={nodeDatum.children ? "#2D3748" : ""}
          onClick={
            nodeDatum.children
              ? toggleNode
              : () => {
                  alert("End node Clicked");
                  console.log(nodeDatum);
                }
          }
        />
      </Tooltip>
      <text fill="black" strokeWidth="1" x={x.toString()} y={y.toString()}>
        {nodeDatum.name}
      </text>
    </g>
  );
};

export default function App() {
  const wrapper = createRef();  
  
  return (
    <div>

    <div style={containerStyles}>
      <Tree
        data={data}
        collapsible={true}
        enableLegacyTransitions={true}
        initialDepth={"1"}
        orientation="horizontal"
        depthFactor="170"
        translate={{ x: 100, y: 320 }}
        shouldCollapseNeighborNodes={false}
        nodeSize={{ y: 80 }}
        // translate={translate}
        renderCustomNodeElement={(props) =>
          renderNodeWithCustomEvents({ ...props, wrapper })
        }
      />
    </div>
    </div>
  );
}
