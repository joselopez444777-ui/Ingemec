(() => {
  const WA_NUMBER = "50765107021"; // +507 6510-7021

  const el = (id) => document.getElementById(id);

  const buildMessage = () => {
    const nombre = (el("nombre").value || "").trim();
    const contacto = (el("contacto").value || "").trim();
    const marca = (el("marca").value || "").trim();
    const modelo = (el("modelo").value || "").trim();
    const ubicacion = (el("ubicacion").value || "").trim();
    const preferencia = (el("preferencia").value || "").trim();
    const detalle = (el("detalle").value || "").trim();

    const lines = [
      "Hola, quiero agendar una cita con Ingemec Solutions.",
      nombre ? `Nombre: ${nombre}` : null,
      contacto ? `Contacto alterno: ${contacto}` : null,
      marca ? `Marca: ${marca}` : null,
      modelo ? `Modelo/Año: ${modelo}` : null,
      ubicacion ? `Ubicación: ${ubicacion}` : null,
      preferencia ? `Preferencia: ${preferencia}` : null,
      detalle ? `Descripción: ${detalle}` : null,
      "",
      "¿Cuál sería la disponibilidad más cercana?"
    ].filter(Boolean);

    return lines.join("\n");
  };

  const openWhatsApp = (msg) => {
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const btnAgenda = el("btnAgenda");
  const btnWhats = el("btnWhats");
  const btnWhatsTop = el("btnWhatsTop");

  if (btnAgenda) {
    btnAgenda.addEventListener("click", (e) => {
      e.preventDefault();
      openWhatsApp(buildMessage());
    });
  }
  if (btnWhats) {
    btnWhats.addEventListener("click", (e) => {
      e.preventDefault();
      openWhatsApp("Hola, quiero información y agendar una cita con Ingemec Solutions.");
    });
  }
  if (btnWhatsTop) {
    btnWhatsTop.addEventListener("click", (e) => {
      e.preventDefault();
      openWhatsApp("Hola, quiero agendar una cita con Ingemec Solutions.");
    });
  }
})();
