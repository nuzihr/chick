// ##############################
// // // javascript library for creating charts
// #############################

// ##############################
// // // Daily Sales
// #############################

export const data = [
    {"name":"Y2S2","Im_yoncharu823":3186,"Da-reyorimotakak":2738,"Im_Denchan":2642,"tiger-mam":2522},
  {"name":"Y2S3","Im_yoncharu823":3129,"Da-reyorimotakak":2738,"Im_Denchan":2763,"Awappu1226":2621,"tiger-mam":2704},
  {"name":"Y2S4","Im_yoncharu823":3276,"Da-reyorimotakak":2627,"Im_Denchan":2824,"Imanimite_iro":2549,"Awappu1226":2898,"tiger-mam":2620},
  {"name":"Y3S1","Im_yoncharu823":3029,"Da-reyorimotakak":2747,"Im_Denchan":2762,"Imanimite_iro":2701,"Awappu1226":2726,"Im_Kopanosuke":2379,"tiger-mam":2624},
  {"name":"Y3S2","Im_yoncharu823":3438,"Da-reyorimotakak":2824,"Im_Denchan":3050,"Imanimite_iro":2621,"Awappu1226":2621,"Im_Kopanosuke":2621,"tiger-mam":2602},
  {"name":"Y3S3","Im_yoncharu823":3214,"Im_akiiiiisutani":2500,"Da-reyorimotakak":3020,"Im_Denchan":2736,"Imanimite_iro":2694,"Awappu1226":2619,"Im_Kopanosuke":2500,"tiger-mam":2652},
  {"name":"Y3S4","Im_yoncharu823":3052,"Im_akiiiiisutani":2500,"Da-reyorimotakak":3391,"Im_Denchan":2934,"Imanimite_iro":2556,"Awappu1226":2789,"Im_Kopanosuke":2500,"tiger-mam":2500},
  {"name":"Y3S4","Im_yoncharu823":3004,"Im_akiiiiisutani":2500,"Da-reyorimotakak":2758,"Im_Denchan":2684,"Imanimite_iro":2729,"Awappu1226":2500,"Im_Kopanosuke":2500,"tiger-mam":2699},
  {"name":"Y4S1","Im_yoncharu823":3196,"Im_akiiiiisutani":2278,"Da-reyorimotakak":2954,"Im_Denchan":3235,"Imanimite_iro":2761,"Awappu1226":2792,"Im_Kopanosuke":2306,"Im_Mechimpo":2554},
  {"name":"Y4S2","Im_yoncharu823":3219,"Im_akiiiiisutani":2488,"Da-reyorimotakak":3019,"Im_Denchan":3217,"Imanimite_iro":2927,"Awappu1226":2779,"Im_Kopanosuke":2228,"tiger-mam":3040,"Im_Mechimpo":2204},
  {"name":"Y4S3","Im_yoncharu823":3394,"Im_akiiiiisutani":2472,"Da-reyorimotakak":3107,"Im_Denchan":3050,"Imanimite_iro":2853,"Awappu1226":2493,"Im_Kopanosuke":2753,"awajima620":2574,"tiger-mam":2923,"Im_Mechimpo":2222},
  {"name":"Y4S4","Im_yoncharu823":2788,"Im_akiiiiisutani":2236,"Da-reyorimotakak":2875,"Im_Denchan":2431,"Imanimite_iro":2688,"Awappu1226":2701,"Im_Kopanosuke":2366,"awajima620":1908,"tiger-mam":2738},
  {"name":"Y5S1"},{"name":"Y5S2","Im_yoncharu823":2674,"Im_akiiiiisutani":2239,"Da-reyorimotakak":2061,"Im_Denchan":2240,"Imanimite_iro":2280,"Im_Kopanosuke":2060,"awajima620":1914,"tiger-mam":2297}
];

// ##############################
// // // Email Subscriptions
// #############################

export const emailsSubscriptionChart = {
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
  },
  options: {
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 1000,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value: any[]) {
            return value[0];
          }
        }
      }
    ]
  ]
};

// ##############################
// // // Completed Tasks
// #############################

export const completedTasksChart = {
  data: {
    labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
    series: [[230, 750, 450, 300, 280, 240, 200, 190]]
  },
  options: {
    low: 0,
    high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
};
