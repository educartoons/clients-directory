import React, { useContext } from "react";
import { ClientsContext } from "../providers/ClientsProvider";

function getAges(clients) {
  let ages = clients.map(client => parseInt(client.age, 10));
  return ages;
}

function computeAverage(clients) {
  let ages = getAges(clients);
  let totalClients = ages.length;
  let sumAges = ages.reduce((acc, age) => acc + age, 0);
  let average = sumAges / totalClients;
  return average;
}

function computeStandardDeviation(clients) {
  let ages = getAges(clients);
  let totalClients = ages.length;
  let average = computeAverage(clients);
  let sumSquares = ages.reduce(
    (acc, age) => acc + Math.pow(age - average, 2),
    0
  );
  let standarDeviation = Math.sqrt(sumSquares / totalClients);
  return standarDeviation;
}

function fixToTwoDecimals(number) {
  return Number.parseFloat(number).toFixed(2);
}

const Insights = () => {
  const clients = useContext(ClientsContext);
  if (!clients.length) return <div>No hay datos suficientes</div>;
  const average = fixToTwoDecimals(computeAverage(clients));
  const standarDeviation = fixToTwoDecimals(computeStandardDeviation(clients));
  return (
    <div>
      <div>Promedio de edad de clientes: {average}</div>
      <div>
        Desviación estándar de las edades de los clientes: {standarDeviation}
      </div>
    </div>
  );
};

export default Insights;
