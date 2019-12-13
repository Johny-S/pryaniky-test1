const degrSet = {
  year: {
    Январь: -6.9,
    Февраль: -6.1,
    Март: -0.9,
    Апрель: 7.2,
    Май: 13.7,
    Июнь: 17.2,
    Июль: 20.2,
    Август: 18.0,
    Сентябрь: 12.1,
    Октябрь: 5.8,
    Ноябрь: 0.0,
    Декабрь: -3.9
  },
  month: {
    1: -14.5,
    2: -6.0,
    3: -5.0,
    4: -3.57,
    5: -1.43,
    6: -1.86,
    7: -5.25,
    8: -5.4,
    9: -4.43,
    10: 0.0,
    11: 0.14,
    12: -0.57,
    13: -2.14,
    14: -3.67,
    15: -4.86,
    16: -13.14,
    17: -14.0,
    18: -12.71,
    19: -9.57,
    20: -11.0,
    23: -5.17,
    24: -7.43,
    25: -10.43,
    26: -9.29,
    27: -8.57,
    28: -8.0,
    29: -9.57,
    30: -4.29,
    31: -4.43
  },
  day: {
    1: -14.5,
    2: -6.0,
    3: -5.0,
    4: -3.57,
    5: -1.43,
    6: -1.86,
    7: -5.25,
    8: -5.4,
    9: -4.43,
    10: 0.0,
    11: 0.14,
    12: -0.57,
    13: -2.14,
    14: -3.67,
    15: -4.86,
    16: -13.14,
    17: -14.0,
    18: -12.71,
    19: -9.57,
    20: -11.0,
    23: -5.17
  }
};

function getData(key, degrSet) {
  const red = ~~(Math.random() * 255);

  return {
    labels: Object.keys(degrSet[key]),
    datasets: [
      {
        label: 'Temerature chart',
        data: Object.values(degrSet[key]),
        backgroundColor: `rgba(${red}, 99, 132, 0.2)`,
        borderColor: `rgba(${red}, 99, 132, 1)`,
        borderWidth: 1
      }
    ]
  };
}

const range = 'year';

const data = Object.keys(degrSet).reduce((acc, el) => {
  return { ...acc, [el]: getData(el, degrSet) };
}, {});

const chartData = {
  type: 'line',
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

export const storage = { range, data, chartData };
