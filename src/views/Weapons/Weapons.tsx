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
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ScatterChart,
  ZAxis,
  Scatter,
  Label,
} from "recharts";
import CardFooter from "../../components/Card/CardFooter";
import AccessTime from "@material-ui/icons/AccessTime";
import AssaultList from "../../components/List/AssaultList";

const useStyles = makeStyles(styles);

const Scatters = ({ result }: { result: any }) => {
  return (
    <ResponsiveContainer>
      <ScatterChart>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" type="number" domain={[0, 2]} name="キルレ">
          <Label value="キルレ" position="center" />
        </XAxis>
        <YAxis
          dataKey="y"
          type="number"
          domain={[0, 2]}
          name="ヘッドショットキル率"
        >
          <Label
            angle={-90}
            value="ヘッドショットキル率"
            position="insideLeft"
            style={{ textAnchor: "end" }}
          />
        </YAxis>
        <ZAxis dataKey="z" range={[0, 1000]} name="使用回数" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter
          name="Da-reyorimotakak"
          data={[result["Da-reyorimotakak"]]}
          fill="#DD1212"
        />
        <Scatter
          name="Im_yoncharu823"
          data={[result["Im_yoncharu823"]]}
          fill="#C91EA3"
        />
        <Scatter
          name="Im_Denchan"
          data={[result["Im_Denchan"]]}
          fill="#673AB7"
        />
        <Scatter name="tiger-mam" data={[result["tiger-mam"]]} fill="#3F51B5" />
        <Scatter
          name="Awappu1226"
          data={[result["Awappu1226"]]}
          fill="#03A9F4"
        />
        <Scatter
          name="Imanimite_iro"
          data={[result["Imanimite_iro"]]}
          fill="#009688"
        />
        <Scatter
          name="Im_Kopanosuke"
          data={[result["Im_Kopanosuke"]]}
          fill="#8BC34A"
        />
        <Scatter
          name="Im_akiiiiisutani"
          data={[result["Im_akiiiiisutani"]]}
          fill="#FDD835"
        />
        <Scatter
          name="Im_Mechimpo"
          data={[result["Im_Mechimpo"]]}
          fill="#FF9800"
        />
        <Scatter
          name="awajima620"
          data={[result["awajima620"]]}
          fill="#9E9E9E"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

const WeaponScore = (classes: any) => {
  const last = window.location.pathname.split("/")[3];
  const weapon: string = last ? last : "L85A2";
  const url = `https://r6s.nuzihr.dev/api/weapons/${weapon.replace(
    /( )/g,
    "_"
  )}`;
  const fetchFunc = async () => (await fetch(url)).json();
  const initResult = prefetch(fetchFunc, null);
  const [result] = useState(initResult);
  return (
    <Card chart>
      <CardHeader color="warning">
        <h2 className={classes.cardTitleWhite}>{weapon}</h2>
      </CardHeader>
      <CardBody>
        <div style={{ width: "100%", height: "400px" }}>
          <Scatters result={result} />
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

export default function Weapons() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <React.Suspense fallback={<p>Loading...</p>}>
            <WeaponScore classes={classes} />
          </React.Suspense>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="success">
              <h3 className={classes.cardTitleWhite}>Assault Rifles</h3>
            </CardHeader>
            <CardBody>
              <AssaultList />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="danger">
              <h3 className={classes.cardTitleWhite}>Submachine Guns</h3>
            </CardHeader>
            <CardBody></CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
