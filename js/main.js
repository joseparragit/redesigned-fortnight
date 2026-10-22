// ==========================================
// Simulador: Control de Acceso con Intentos
// Pre-Entrega 2: Control de Ciclos y Flujo
// ==========================================

// 1. Constantes y variables de estado
const CLAVE_CORRECTA = "coder";
const MAX_INTENTOS = 4;

let intentos = 0;
let accesoConcedido = false;

// 2. Ciclo principal: se repite mientras queden intentos y no se haya acertado
while (intentos < MAX_INTENTOS && !accesoConcedido) {
  const ingreso = prompt(
    `🔐 Ingresá tu clave de acceso (Intento ${intentos + 1} de ${MAX_INTENTOS}):`
  );

  // Validación de cancelación (si el usuario presiona Cancelar o Esc)
  if (ingreso === null) {
    alert("Operación cancelada por el usuario.");
    break; // Condición de parada manual
  }

  // Evaluación de la clave
  if (ingreso === CLAVE_CORRECTA) {
    accesoConcedido = true;
    alert("✅ ¡Acceso concedido! Bienvenido al sistema.");
    console.log("Estado: Autenticado exitosamente.");
  } else {
    intentos++;
    const restantes = MAX_INTENTOS - intentos;

    if (restantes > 0) {
      alert(`❌ Clave incorrecta. Te quedan ${restantes} intento(s).`);
      console.warn(`Intento fallido. Restantes: ${restantes}`);
    }
  }
}

// 3. Resultado final tras salir del bucle
if (!accesoConcedido && intentos === MAX_INTENTOS) {
  alert("🔒 Cuenta bloqueada: superaste el número máximo de intentos.");
  console.error("Estado: Bloqueado por seguridad.");
}
