let sueldo: number = Number(prompt("Ingrese su sueldo"));
let nuevoSueldo: number = 0;

if (sueldo >= 0 && sueldo <= 15000) {
  nuevoSueldo = sueldo * 1.2;
  console.log(
    "Usted tiene un 20% de aumento, su nuevo sueldo es: " + nuevoSueldo
  );
} else {
  if (sueldo > 15000 && sueldo <= 20000) {
    nuevoSueldo = sueldo * 1.1;
    console.log(
      "Usted tiene un 10% de aumento, su nuevo sueldo es: " + nuevoSueldo
    );
  } else {
    if (sueldo > 20000 && sueldo <= 25000) {
      nuevoSueldo = sueldo * 1.05;
      console.log(
        "Usted tiene un 5% de aumento, su nuevo sueldo es: " + nuevoSueldo
      );
    } else {
      if (sueldo > 25000) {
        nuevoSueldo = sueldo;
        console.log("Usted no tiene aumento, su sueldo es:", sueldo);
      }
    }
  }
}
