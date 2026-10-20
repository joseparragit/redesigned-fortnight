// Simulador: control de acceso con reintentos
const CLAVE = "coder";
let intentos = 0;
let acceso = false;

// BUCLE: repite hasta 3 intentos o hasta acertar
while (intentos < 3 && !acceso) {
  const ingreso = prompt("Ingresá la clave:");

  // CONDICIONAL dentro del bucle
  if (ingreso === CLAVE) {
    acceso = true;
    console.log("✅ Acceso concedido");
  } else {
    intentos++;
    console.log(`❌ Clave incorrecta. Intentos restantes: ${3 - intentos}`);
  }
}

// Resultado final coherente al terminar el bucle
if (!acceso) {
  console.log("🔒 Cuenta bloqueada por demasiados intentos");
}
