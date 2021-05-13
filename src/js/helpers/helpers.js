export function sonRegionesIguales(region1Nombre, region2Nombre) {
  region1Nombre = region1Nombre.replace(/('|´)/g, "");
  region2Nombre = region2Nombre.replace(/('|´)/g, "");
  return region1Nombre === region2Nombre;
}

export function convertDateToDateWithoutTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function getCurrentDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();

  return mm + "/" + dd + "/" + yyyy;
}
export function getNextYearDate(today = new Date()) {
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear() + 1;
  if (dd === "29" || mm === "02") {
    dd = "28";
  }
  return mm + "/" + dd + "/" + yyyy;
}
export function getDateNextDays(days) {
  let today = new Date();
  today.setDate(today.getDate() + days);
  return today;
}

//Retorna una variable desde la url
export const getHelperVariableUrl = (nombreVariable = "var") => {
  let argUrl = window.location.search;
  let params = new URLSearchParams(argUrl);
  return params.get(nombreVariable);
};

//Retorna un objeto con sus atributos con trim
export const getTrimObject = (obj) =>
  Object.keys(obj).map((k) => (obj[k] = obj[k].trim()));

export const roundNumber = (num, scale = 0) => {
  return (
    Math.round((num + Number.EPSILON) * Math.pow(10, scale)) /
    Math.pow(10, scale)
  );
};
//Ajusta el scroll a la referencia enviada de forma vertical
export const scrollTopRef = (reference, px = 90) => {
  const { current: contenedor } = reference;
  window.scrollTo({
    behavior: contenedor ? "smooth" : "auto",
    top: contenedor ? contenedor.offsetTop - px : 0,
  });
};

export const toOptions = (list = [], value, label) => {
  return list.map((x) => ({ value: x[value], label: x[label] })) ?? [];
};

export const getFileExtension = (file) => {
  return /[.]/.exec(file.name) ? /[^.]+$/.exec(file.name) : undefined;
};

export const toFixInteger = (value) => {
  let newValue = value.replace(/[^0-9]/g, "");
  if (newValue === "") newValue = 0;
  return parseInt(newValue);
};
