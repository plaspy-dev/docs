---
slug: /astra_telematics/at501/protocol
id: at501-protocol
sidebar_label: Protocol
title: Astra Telematics - AT501 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador Astra Telematics AT501 y cómo se comunica con Plaspy usando parámetros de conexión compartidos
keywords:
  - protocolo Astra Telematics AT501
  - protocolo GPS AT501
  - protocolo de rastreo AT501
  - protocolo Astra Telematics Plaspy
  - protocolo de comunicación AT501
  - rastreador AT501 para Plaspy
  - compatibilidad GPS AT501
  - telemetría AT501
  - seguimiento de activos AT501 Plaspy
  - aprovisionamiento BLE AT501
---

# Astra Telematics - Protocolo AT501

Esta página describe, en términos públicos y no sensibles, el protocolo del Astra Telematics AT501 Mini Asset Tracker cuando se integra con Plaspy. Explica cómo el dispositivo reporta posición y telemetría a la plataforma y resalta los ajustes de conexión que normalmente se usan al aprovisionar equipos para seguimiento de flotas y activos.

Plaspy emplea parámetros de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo está configurado para enviar datos al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante; por lo tanto, aunque el AT501 es compatible con Plaspy desde fábrica, el comportamiento final depende del firmware y la configuración del dispositivo.

## Visión general del protocolo

El protocolo de comunicación del AT501 define cómo el dispositivo se identifica, cómo reporta la posición GNSS y la telemetría, y cómo envía mensajes basados en eventos, por ejemplo informes activados por el acelerómetro. En términos públicos, este protocolo permite que el rastreador entregue de forma confiable datos de ubicación y estado útiles a Plaspy sin que usted deba gestionar formatos de paquete de bajo nivel.

- El protocolo transporta posición GNSS, hora y telemetría básica como estado de batería y señal hacia Plaspy.
- Los reportes basados en eventos del AT501, como mensajes de movimiento activados por el acelerómetro, ayudan a ahorrar batería sin dejar de notificar cambios de ubicación importantes.
- BLE se utiliza para el aprovisionamiento y diagnóstico local y no sustituye el enlace celular hacia Plaspy.
- Los mensajes del protocolo permiten que el dispositivo presente información identificadora para que Plaspy asocie los datos entrantes con el registro de activo correcto.
- El comportamiento de la carga útil y la frecuencia de reporte dependen de los intervalos configurados y de los ajustes de firmware en el dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un único endpoint y puerto compartido para las conexiones entrantes de rastreadores y determina automáticamente el protocolo a partir del tráfico reportado y los campos de identificación. En la mayoría de las implementaciones usted no necesita seleccionar manualmente el protocolo en Plaspy siempre que el dispositivo apunte correctamente al endpoint de Plaspy.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Plaspy acepta conexiones entrantes de dispositivos en el puerto 8888 y utiliza ese puerto para todos los dispositivos compatibles.
- Los dispositivos pueden configurarse para reportar por UDP o TCP en el puerto 8888 según la capacidad del dispositivo y la configuración de red.
- Cuando el AT501 envía uplinks al endpoint de Plaspy, la plataforma asocia automáticamente los datos entrantes con el perfil de dispositivo correspondiente.
- Un aprovisionamiento correcto y la dirección de reporte adecuada aseguran que Plaspy pueda detectar y procesar el protocolo del rastreador sin selección manual.

## Contexto de transporte y conexión

El AT501 usa enlaces celulares para enviar datos a Plaspy y puede configurarse para emplear distintos métodos de transporte según prioridades de la implementación, como fiabilidad o duración de la batería. Esta sección se centra en el contexto de conexión más que en los detalles internos del protocolo.

- El AT501 puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- Los equipos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 cuando DNS no esté disponible o para pruebas de red.
- Plaspy utiliza el mismo puerto 8888 en todos los dispositivos soportados, lo que simplifica el aprovisionamiento y las reglas de firewall.
- Elija UDP para escenarios de menor latencia o menor overhead y TCP cuando el firmware del dispositivo o la ruta de red requieran transporte orientado a conexión.
- Asegúrese de que el APN y la provisión de la SIM para el AT501 permitan conexiones salientes al endpoint de Plaspy y que los firewalls del operador permitan el transporte seleccionado.

## Notas de compatibilidad del protocolo

- El AT501 es compatible con Plaspy desde fábrica, pero las revisiones de firmware pueden cambiar campos disponibles, opciones de cadencia de reporte o disparadores de eventos.
- Las revisiones de hardware o lotes de producción distintos pueden introducir pequeñas variaciones en el comportamiento; verifique modelo y revisión al solucionar problemas.
- La elección de transporte (UDP vs TCP) se configura en el dispositivo y puede afectar las características de entrega y el consumo de batería.
- BLE está destinado a la configuración y puesta en servicio local y no reemplaza el reporte celular a Plaspy.
- El AT501 no incluye CANBus, RS232, ADC ni E/S digitales dedicadas para señales de motor o monitoreo directo de combustible; utilice otro modelo para telemetría de motor de vehículo.
- Siempre valide la compatibilidad y los detalles más recientes del protocolo con la documentación del fabricante para el firmware específico de su equipo.

## Por qué importa comprender el protocolo

Comprender cómo el AT501 se comunica con Plaspy facilita una configuración fiable, un uso eficiente de la batería y una resolución de problemas más rápida cuando los dispositivos no funcionan según lo esperado. Conocer el papel de los intervalos de reporte, los disparadores de evento y las opciones de transporte le permite adaptar las implementaciones a necesidades operativas.

- Una configuración adecuada de intervalos de reporte y detección de movimiento preserva la batería mientras entrega la visibilidad necesaria.
- Conocer las opciones de transporte ayuda a alinear el comportamiento de conectividad con el rendimiento del operador y las políticas de firewall.
- Reconocer las funciones dependientes del firmware reduce el tiempo invertido en diagnosticar telemetría faltante o cambios en nombres de campos.
- Entender los flujos de aprovisionamiento por BLE agiliza la puesta en servicio y evita errores de configuración durante el despliegue.
- Saber cómo Plaspy asocia los reportes entrantes con los dispositivos simplifica el registro y las tareas del ciclo de vida del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el AT501 con Plaspy proporciona visibilidad prolongada de activos con mantenimiento mínimo, lo que lo convierte en una buena opción para rastrear remolques, contenedores, herramientas y otros activos sin fuente de energía. Los modos de bajo consumo del equipo, los reportes activados por acelerómetro y la conectividad celular multimodal contribuyen a mantener telemetría continua reduciendo las intervenciones en campo.

Plaspy centraliza posición, alertas de eventos y telemetría en una vista única de gestión de flota para que las organizaciones puedan monitorear el historial de ubicación de activos, responder a alertas de movimiento y programar mantenimiento de forma eficiente. Para más información sobre Plaspy y su integración con dispositivos como el AT501, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información específica del dispositivo en el sitio de Astra Telematics en https://astratelematics.com/.
