const dataExample = [
  {
    company: "Bayerische Motoren Werke AG",
    shef: "Angela Merkel",
    country: "Germany",
  },
  {
    company: "Grupo Bimbo S.A.B. de C.V.",
    shef: "Enrique Peña Nieto",
    country: "Mexico",
  },
  {
    company: "Red Bull GmbH",
    shef: "Sebastian Kurz",
    country: "Austria",
  },
  {
    company: "Vodafone Group plc",
    shef: "Boris Johnson",
    country: "United Kingdom",
  },
  {
    company: "Toyota Motor Corporation",
    shef: "Shinzo Abe",
    country: "Japan",
  },
];

let gridView = new GridView();
gridView.header = "Hello";
gridView.headerClass = ["header", "site-header"];
gridView.attribute = {
  company: {
    label: "Компания",
    src: "html",
  },
  shef: {
    label: "Директор",
  },
  country: {
    label: "Страна",
    value: (data) => {
      if (data["country"] === "Germany") {
        return data["country"] + " map";
      }
      return data["country"];
    },
  },
};
gridView.data = dataExample;
gridView.render();
