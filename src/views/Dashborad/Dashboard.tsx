import React, {useState} from "react";
// react plugin for creating charts
import {
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart, Line, ResponsiveContainer, Tooltip, Legend,
} from 'recharts';
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";

import styles from "../../assets/jss/chick/views/dashboardStyle";
import {prefetch, refetch} from "react-suspense-fetch";

const useStyles = makeStyles(styles);

const Mmr = (classes: any) => {
  const fetchFunc = async () => (await fetch(`https://r6s.nuzihr.dev/api/seasons/mmr`)).json();
  const initialResult = prefetch(fetchFunc, null);
  const [result] = useState(initialResult);
  console.log(result);
  return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="warning">
              <h2 className={classes.cardTitleWhite}>MMR</h2>
            </CardHeader>
            <CardBody>
              <div style={{ width: '100%', height: '400px' }}>
                <ResponsiveContainer>
                  <LineChart width={1000} height={400} data={result}>
                    <XAxis dataKey="name"/>
                    <YAxis domain={['dataMin', 'dataMax']} ticks={[1500,2000,2500,3000,3500]}/>
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line type="monotone" dataKey="Da-reyorimotakak" stroke="#f44336" />
                    <Line type="monotone" dataKey="Im_yoncharu823" stroke="#E91E63" />
                    <Line type="monotone" dataKey="Im_Denchan" stroke="#673AB7" />
                    <Line type="monotone" dataKey="tiger-mam" stroke="#3F51B5" />
                    <Line type="monotone" dataKey="Awappu1226" stroke="#03A9F4" />
                    <Line type="monotone" dataKey="Imanimite_iro" stroke="#009688" />
                    <Line type="monotone" dataKey="Im_Kopanosuke" stroke="#8BC34A" />
                    <Line type="monotone" dataKey="Im_akiiiiisutani" stroke="#FDD835" />
                    <Line type="monotone" dataKey="Im_Mechimpo" stroke="#FF9800" />
                    <Line type="monotone" dataKey="awajima620" stroke="#9E9E9E" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago(嘘です)
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
  );
};

const KillRatio = (classes: any) => {
  const fetchFunc = async () => (await fetch(`https://r6s.nuzihr.dev/api/seasons/killRatio`)).json();
  const initialResult = prefetch(fetchFunc, null);
  const [result] = useState(initialResult);
  return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="warning">
              <h2 className={classes.cardTitleWhite}>キルレ</h2>
            </CardHeader>
            <CardBody>
              <div style={{ width: '100%', height: '400px' }}>
                <ResponsiveContainer>
                  <LineChart width={1000} height={400} data={result}>
                    <XAxis dataKey="name"/>
                    <YAxis domain={['dataMin', 'dataMax']} ticks={[0,0.5,1,1.5,2]}/>
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line type="monotone" dataKey="Da-reyorimotakak" stroke="#f44336" />
                    <Line type="monotone" dataKey="Im_yoncharu823" stroke="#E91E63" />
                    <Line type="monotone" dataKey="Im_Denchan" stroke="#673AB7" />
                    <Line type="monotone" dataKey="tiger-mam" stroke="#3F51B5" />
                    <Line type="monotone" dataKey="Awappu1226" stroke="#03A9F4" />
                    <Line type="monotone" dataKey="Imanimite_iro" stroke="#009688" />
                    <Line type="monotone" dataKey="Im_Kopanosuke" stroke="#8BC34A" />
                    <Line type="monotone" dataKey="Im_akiiiiisutani" stroke="#FDD835" />
                    <Line type="monotone" dataKey="Im_Mechimpo" stroke="#FF9800" />
                    <Line type="monotone" dataKey="awajima620" stroke="#9E9E9E" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago(嘘です)
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
  );
};

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Mmr classes={classes}/>
      </React.Suspense>
      <React.Suspense fallback={<p>Loading...</p>}>
        <KillRatio classes={classes}/>
      </React.Suspense>
    </div>
  );
}
