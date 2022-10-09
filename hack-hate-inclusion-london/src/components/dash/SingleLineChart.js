import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const SingleLineChart = ({
  getData, title, xAxisLabel, yAxisLabel, exportFilename,
}) => {
  const [chartData, setChartData] = React.useState([]);
  const [chartAxis, setChartAxis] = React.useState([]);

  const fetchData = async () => {
    const { xAxis, dataArray } = await getData();

    if (xAxis && dataArray) {
      setChartData(dataArray);
      setChartAxis(xAxis);
    }
  };

  React.useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const chartOptions = {
    title: {
      text: title,
    },
    series: chartData,
    chart: {
      type: 'line',
    },
    xAxis: {
      title: {
        text: xAxisLabel,
      },
      categories: chartAxis,
    },
    yAxis: {
      title: {
        text: yAxisLabel,
      },
    },
    exporting: {
      filename: exportFilename,
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={chartOptions}
    />
  );
};

SingleLineChart.propTypes = {
  getData: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  xAxisLabel: PropTypes.string.isRequired,
  yAxisLabel: PropTypes.string.isRequired,
  exportFilename: PropTypes.string.isRequired,
};

export default SingleLineChart;
