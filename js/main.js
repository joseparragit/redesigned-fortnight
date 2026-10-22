// ==========================================
// Simulador: Reserva de Entradas de Cine
// ==========================================

const BASE_PRICE = 15;
let continuar = true;

while (continuar) {
  // 1. Entrada de datos interactiva
  let entradaEdad = prompt("🎟️ Ingresá tu edad (o escribí 'ESC' para salir):");

  // Condición de parada (stop)
  if (entradaEdad === null || entradaEdad.toUpperCase() === "ESC") {
    continuar = false;
    alert("Gracias por visitar nuestro sistema de reservas.");
    break;
  }

  let age = Number(entradaEdad);

  // Validación de número válido
  if (isNaN(age) || age < 1) {
    alert("❌ Por favor, ingresá una edad válida.");
    continue;
  }

  // Comprobación de edad mínima
  if (age < 18) {
    alert("⛔ Lo sentimos, tenés que ser mayor de 18 años para reservar entradas.");
    continue;
  }

  // 2. Selección de función y tipo de asiento
  let showTime = prompt("Seleccioná el horario:\n1 - Tarde (Afternoon)\n2 - Noche (Evening)");
  let seatType = prompt("Seleccioná la categoría del asiento:\n1 - Standard\n2 - Gold\n3 - Premium");
  let isMember = confirm("¿Tenés membresía del cine? (Aceptar = Sí / Cancelar = No)");

  // 3. Cálculo de Descuento
  let discount = 0;
  if (isMember && age >= 21) {
    discount = 3;
    alert("✨ ¡Calificás para un descuento de socio de $3!");
  }

  // 4. Cargos adicionales por horario nocturno
  let extraCharges = 0;
  if (showTime === "2" || showTime?.toLowerCase() === "evening") {
    extraCharges = 2;
  }

  // 5. Cargo por tipo de asiento
  let serviceCharges = 1; // Standard por defecto
  if (seatType === "3" || seatType?.toLowerCase() === "premium") {
    serviceCharges = 5;
  } else if (seatType === "2" || seatType?.toLowerCase() === "gold") {
    serviceCharges = 3;
  }

  // 6. Cálculo y resultado final
  const totalPrice = BASE_PRICE - discount + extraCharges + serviceCharges;

  alert(
    `📋 Resumen de tu reserva:\n` +
    `• Precio Base: $${BASE_PRICE}\n` +
    `• Descuento: -$${discount}\n` +
    `• Cargo por horario: +$${extraCharges}\n` +
    `• Cargo por asiento: +$${serviceCharges}\n` +
    `---------------------------\n` +
    `💵 Total a pagar: $${totalPrice}`
  );
}
