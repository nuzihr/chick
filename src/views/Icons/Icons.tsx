/*eslint-disable*/
import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";

import styles from "../../assets/jss/chick/views/iconsStyle";
import DefenderList from "../../components/List/DefenderList";
import AttackerList from "../../components/List/AttackerList";
import {prefetch, refetch} from "react-suspense-fetch";
import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LineChart, Line, ScatterChart, ZAxis, Scatter
} from "recharts";
import CardFooter from "../../components/Card/CardFooter";
import AccessTime from "@material-ui/icons/AccessTime";

const useStyles = makeStyles(styles);

const Scatters = ({result}: {result:any}) => {
  return (
      <ResponsiveContainer>
        <ScatterChart width={1000} height={400} margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" type="number" domain={[0, 2]} name="キルレ" />
          <YAxis dataKey="y" type="number" domain={[0, 2]} name="勝利敗北比" />
          <ZAxis dataKey="z" range={[0, 1000]} name="プレイ時間(分）" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Da-reyorimotakak" data={[result["Da-reyorimotakak"]]} fill="#f44336" />
          <Scatter name="Im_yoncharu823" data={[result["Im_yoncharu823"]]} fill="#E91E63" />
          <Scatter name="Im_Denchan" data={[result["Im_Denchan"]]} fill="#673AB7" />
          <Scatter name="tiger-mam" data={[result["tiger-mam"]]} fill="#3F51B5" />
          <Scatter name="Awappu1226" data={[result["Awappu1226"]]} fill="#03A9F4" />
          <Scatter name="Imanimite_iro" data={[result["Imanimite_iro"]]} fill="#009688" />
          <Scatter name="Im_Kopanosuke" data={[result["Im_Kopanosuke"]]} fill="#8BC34A" />
          <Scatter name="Im_akiiiiisutani" data={[result["Im_akiiiiisutani"]]} fill="#FDD835" />
          <Scatter name="Im_Mechimpo" data={[result["Im_Mechimpo"]]} fill="#FF9800" />
          <Scatter name="awajima620" data={[result["awajima620"]]} fill="#9E9E9E" />
        </ScatterChart>
      </ResponsiveContainer>
  )
}

const OperatorScore = (classes: any) => {
  console.log(location.pathname)
  const last = location.pathname.split("/")[3];
  const operator:string = last ? last : 'Smoke';
  const url = `https://r6s.nuzihr.dev/api/operators/${operator}`
  const fetchFunc = async () => (await fetch(url)).json();
  const initResult = prefetch(fetchFunc, null);
  const [result] = useState(initResult);
  return (
    <Card chart>
      <CardHeader color="warning">
        <h2 className={classes.cardTitleWhite}>{(operator).toUpperCase()}</h2>
      </CardHeader>
      <CardBody>
        <div style={{ width: '100%', height: '400px' }}>
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

export default function Icons() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <React.Suspense fallback={<p>Loading...</p>}>
            <OperatorScore classes={classes}/>
          </React.Suspense>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="success">
              <h3 className={classes.cardTitleWhite}>Attacker Operators</h3>
            </CardHeader>
            <CardBody>
              <AttackerList/>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="danger">
              <h3 className={classes.cardTitleWhite}>Defender Operators</h3>
            </CardHeader>
            <CardBody>
              <DefenderList/>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
