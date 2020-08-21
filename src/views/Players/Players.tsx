import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";

import styles from "../../assets/jss/chick/views/operatorsStyle";
import { prefetch } from "react-suspense-fetch";
import {
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Label,
  Tooltip,
} from "recharts";
import CardFooter from "../../components/Card/CardFooter";
import AccessTime from "@material-ui/icons/AccessTime";
import PlayerList from "../../components/List/PlayerList";

const useStyles = makeStyles(styles);

const Chart = ({
  result,
  player,
}: {
  result: { [key: string]: any }[];
  player: string;
}) => {
  const data: any[] = [];
  result.forEach((score, index) => {
    let sum = 0;
    let num = 0;
    Object.entries(score).forEach(([key, value]) => {
      if (key !== "name") {
        sum += value;
        num++;
      }
    });
    data.push({
      average: sum / num,
      [player]: score[player],
      name: score["name"],
    });
  });
  return (
    <ResponsiveContainer>
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis angle={30} domain={[0, 1.5]} />
        <Radar
          name={player}
          dataKey={player}
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="Average"
          dataKey="average"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

const PlayerScore = (classes: any) => {
  const last = window.location.pathname.split("/")[3];
  const player: string = last ? last : "Da-reyorimotakak";
  const url = `https://r6s.nuzihr.dev/api/members/operators`;
  const fetchFunc = async () => (await fetch(url)).json();
  const initResult = prefetch(fetchFunc, null);
  const [result] = useState(initResult);
  return (
    <Card chart>
      <CardHeader color="warning">
        <h2 className={classes.cardTitleWhite}>{player}</h2>
      </CardHeader>
      <CardBody>
        <div style={{ width: "100%", height: "400px" }}>
          <Chart result={result} player={player} />
        </div>
      </CardBody>
      <CardFooter chart>
        <div className={classes.stats}>
          <AccessTime /> updated X minutes ago
        </div>
      </CardFooter>
    </Card>
  );
};

export default function Players() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <React.Suspense fallback={<p>Loading...</p>}>
            <PlayerScore classes={classes} />
          </React.Suspense>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="success">
              <h3 className={classes.cardTitleWhite}>Players</h3>
            </CardHeader>
            <CardBody>
              <PlayerList />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
