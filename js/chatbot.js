(function () {
  "use strict";

  const COMPANY_INFO = {
    name: "ArmandoPeru",
    phone: "+51 995 456 060",
    whatsapp: "+51 960 283 702",
    hours: "Lunes a Sábados, 8:00 AM - 8:00 PM",
    instagram: "https://instagram.com/armandoperu",
    facebook: "https://facebook.com/armandoperu",
    services: [
      {
        name: "Diseño de Planos",
        desc: "Elaboramos planos arquitectónicos y estructurales precisos, adaptados a las necesidades de cada proyecto.",
      },
      {
        name: "Licencia de Construcción",
        desc: "Gestionamos todo el proceso para obtener tu licencia de construcción de forma rápida y sin complicaciones.",
      },
      {
        name: "Declaratoria de Fábrica",
        desc: "Formalizamos la construcción ante la Municipalidad y SUNARP, asegurando la legalidad de tu inmueble.",
      },
      {
        name: "Acumulación y Subdivisión",
        desc: "Realizamos procesos de acumulación o subdivisión de lotes con la documentación y planos requeridos.",
      },
      {
        name: "Independizaciones",
        desc: "Te ayudamos a independizar tu propiedad en registros públicos, garantizando una correcta delimitación.",
      },
      {
        name: "Gestión de Trámites",
        desc: "Nos encargamos de todos los trámites municipales y registrales para simplificar tu proyecto inmobiliario.",
      },
    ],
  };

  const RESPONSES = {
    saludo: {
      patterns: ["hola", "buenos", "hi", "hey", "qué tal", "que tal"],
      response: `¡Hola! 👋 Soy Sonora, asistente virtual de ${COMPANY_INFO.name}. ¿Cómo puedo ayudarte? Puedo decirte sobre nuestros servicios, horarios, contacto, redes sociales o responder tus preguntas.`,
    },
    consulta_gratis: {
      patterns: [
        "consulta gratis",
        "es gratis",
        "cobran",
        "precio",
        "costo",
        "cuánto cuesta",
        "cuanto cuesta",
      ],
      response: `✅ ¡SÍ! La consulta inicial es completamente GRATIS. 🎉\n\nNuestros especialistas están listos para ayudarte sin costo. Puedes contactarnos:\n📞 ${COMPANY_INFO.phone}\n💬 WhatsApp: ${COMPANY_INFO.whatsapp}`,
    },
    servicios: {
      patterns: [
        "servicios",
        "qué ofrecen",
        "qué hacen",
        "que ofrecen",
        "ofertas",
      ],
      response: `Nuestros servicios incluyen:\n\n${COMPANY_INFO.services
        .map((s, i) => `${i + 1}. ${s.name}\n`)
        .join("")}\n¿Deseas detalles de alguno?`,
    },
    horarios: {
      patterns: [
        "horarios",
        "horas",
        "abierto",
        "cuándo",
        "cuando",
        "atienden",
      ],
      response: `📅 Nuestros horarios son:\n${COMPANY_INFO.hours}\n\n¿Hay algo más que quieras saber?`,
    },
    contacto: {
      patterns: [
        "contacto",
        "teléfono",
        "llamar",
        "whatsapp",
        "número",
        "cómo contactar",
        "como contactar",
      ],
      response: `📞 Contáctanos:\n\n📱 Teléfono: ${COMPANY_INFO.phone}\n💬 WhatsApp: ${COMPANY_INFO.whatsapp}\n\n¡Estamos disponibles durante horarios de atención!`,
    },
    redes_sociales: {
      patterns: [
        "instagram",
        "facebook",
        "redes",
        "redes sociales",
        "síguenos",
        "seguinos",
      ],
      response: `📱 Síguenos en nuestras redes:\n\n📸 Instagram: instagram.com/armandoperu\n👍 Facebook: facebook.com/armandoperu\n\n¡Comparte tus proyectos y mantente actualizado!`,
    },
    planos: {
      patterns: ["planos", "diseño de planos", "diseño", "arquitectónicos"],
      response: `🎨 Diseño de Planos:\n\nElaboramos planos arquitectónicos y estructurales precisos, adaptados a las necesidades de cada proyecto.\n\nNuestro equipo garantiza:\n✓ Precisión técnica\n✓ Cumplimiento de normativas\n✓ Entrega en tiempo\n\n¿Necesitas más detalles?`,
    },
    licencia: {
      patterns: [
        "licencia",
        "licencia de construcción",
        "construcción",
        "permisos",
      ],
      response: `📋 Licencia de Construcción:\n\nGestionamos todo el proceso para obtener tu licencia de construcción de forma rápida y sin complicaciones.\n\nIncluye:\n✓ Trámites municipales\n✓ Revisión de documentos\n✓ Asesoría legal\n✓ Seguimiento completo\n\n¿Quieres agendar una consulta?`,
    },
    declaratoria: {
      patterns: [
        "declaratoria",
        "fábrica",
        "fabrica",
        "legalidad",
        "municipalidad",
      ],
      response: `📜 Declaratoria de Fábrica:\n\nFormalizamos la construcción ante la Municipalidad y SUNARP, asegurando la legalidad de tu inmueble.\n\nNos encargamos de:\n✓ Gestión ante autoridades\n✓ Documentación completa\n✓ Registro legal\n✓ Asesoría especializada\n\n¿Necesitas información adicional?`,
    },
    independizacion: {
      patterns: [
        "independiza",
        "independización",
        "independizaciones",
        "propiedad",
        "registros",
      ],
      response: `🏠 Independizaciones:\n\nTe ayudamos a independizar tu propiedad en registros públicos, garantizando una correcta delimitación.\n\nProceso que incluye:\n✓ Levantamiento de información\n✓ Trámites registrales\n✓ Documentación legal\n✓ Asesoría completa\n\n¿Quieres más detalles?`,
    },
    acumulacion: {
      patterns: [
        "acumulación",
        "acumulacion",
        "subdivisión",
        "subdivision",
        "lotes",
      ],
      response: `📐 Acumulación y Subdivisión:\n\nRealizamos procesos de acumulación o subdivisión de lotes con la documentación y planos requeridos.\n\nNos especializamos en:\n✓ Análisis de viabilidad\n✓ Planos técnicos\n✓ Gestión municipal\n✓ Legalización completa\n\n¿Deseas agendar una consulta?`,
    },
    tramites: {
      patterns: [
        "trámites",
        "tramites",
        "gestión",
        "gestion",
        "municipal",
        "registral",
      ],
      response: `📑 Gestión de Trámites:\n\nNos encargamos de todos los trámites municipales y registrales para simplificar tu proyecto inmobiliario.\n\nCubrimos:\n✓ Trámites municipales\n✓ Gestión registral\n✓ Asesoría integral\n✓ Seguimiento de procesos\n\n¿Hay algo específico que necesites?`,
    },
    ubicacion: {
      patterns: ["dónde", "donde", "ubicación", "dirección", "localización"],
      response: `📍 Ubicación:\n\nEstamos en Perú. Para detalles específicos sobre nuestra ubicación exacta y atención presencial:\n\n📞 ${COMPANY_INFO.phone}\n💬 WhatsApp: ${COMPANY_INFO.whatsapp}\n\n¡Con gusto te brindamos la información!`,
    },
    default: {
      response: `🤔 No estoy completamente segura de tu pregunta. Puedo ayudarte con:\n\n✓ Servicios\n✓ Horarios y contacto\n✓ Detalles de cada servicio\n✓ Redes sociales\n✓ Consultas gratis\n\n¿Cuál de estos temas te interesa?`,
    },
  };

  function normalizeText(text) {
    return text
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function findResponse(userMessage) {
    const normalized = normalizeText(userMessage);
    for (const [key, data] of Object.entries(RESPONSES)) {
      if (key === "default") continue;
      if (data.patterns.some((p) => normalized.includes(p))) {
        return data.response;
      }
    }
    return RESPONSES.default.response;
  }

  function createChatBubble(message, isUser) {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${isUser ? "user" : "bot"}`;
    bubble.innerHTML = isUser ? message : message.replace(/\n/g, "<br>");
    return bubble;
  }

  function addMessageToChat(message, isUser) {
    const chatMessages = document.getElementById("chat-messages");
    const bubble = createChatBubble(message, isUser);
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function handleUserMessage(userMessage) {
    if (!userMessage.trim()) return;

    addMessageToChat(userMessage, true);
    document.getElementById("chat-input").value = "";

    setTimeout(() => {
      const response = findResponse(userMessage);
      addMessageToChat(response, false);
    }, 400);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const chatbot = document.getElementById("chatbot-widget");
    const chatToggle = document.getElementById("chatbot-toggle");
    const chatClose = document.getElementById("chat-close");
    const chatInput = document.getElementById("chat-input");
    const chatSend = document.getElementById("chat-send");

    if (!chatToggle || !chatbot) return;

    // Toggle chat visibility
    chatToggle.addEventListener("click", () => {
      chatbot.classList.toggle("open");
      if (chatbot.classList.contains("open")) {
        chatInput.focus();
      }
    });

    chatClose.addEventListener("click", () => {
      chatbot.classList.remove("open");
    });

    // Send message on button click
    chatSend.addEventListener("click", () => {
      const message = chatInput.value.trim();
      if (message) handleUserMessage(message);
    });

    // Send message on Enter key
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) handleUserMessage(message);
      }
    });

    // Initial greeting
    setTimeout(() => {
      addMessageToChat(
        "¡Hola! 👋 Soy Sonora, asistente de ArmandoPeru. ¿En qué puedo ayudarte hoy?",
        false
      );
    }, 300);
  });
})();
