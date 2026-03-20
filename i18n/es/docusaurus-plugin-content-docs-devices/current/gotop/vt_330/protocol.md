---
slug: /gotop/vt_330/protocol
id: vt_330-protocol
sidebar_label: Protocol
title: GOTOP - VT-330 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el rastreador GOTOP VT-330 con Plaspy para seguimiento y telemetría en tiempo real
keywords:
  - protocolo GOTOP VT-330
  - protocolo GPS GOTOP VT-330
  - GOTOP VT-330 Plaspy
  - protocolo rastreador GOTOP
  - comunicación VT-330
  - protocolo de rastreo VT-330
  - compatibilidad GOTOP rastreador Plaspy
  - protocolo de seguimiento vehicular
  - protocolo GPS gestión de flotas
  - integración GOTOP VT-330
---

# GOTOP - VT-330 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador GPS GOTOP VT-330 Dual SIM con Plaspy. Explica, a alto nivel, cómo el dispositivo comunica posición, eventos y telemetría básica a la plataforma Plaspy y qué aspectos considerar al configurar el equipo para reportes confiables. El VT-330 combina posicionamiento GNSS SiRF Star III, conectividad GSM GPRS con doble SIM y E/S del vehículo —como una entrada SOS y salida de relé— todo lo cual influye en su comportamiento cuando se integra con Plaspy.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los equipos envían datos a la plataforma, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta página se centra en contexto público no sensible y en consideraciones prácticas de configuración, en lugar de detalles internos de firmware o paquetes propietarios.

## Descripción general del protocolo

El protocolo de reporte define cómo el VT-330 empaqueta la ubicación, el estado y los datos de eventos para enviarlos por GSM GPRS a un servidor backend como Plaspy. Para propósitos de integración, el rol del protocolo se comprende mejor en términos de identificación fiable, reporte de eventos y mantenimiento de una conexión activa para que Plaspy pueda ofrecer mapas en tiempo real, alertas e historial.

- Permite que el VT-330 informe posición GNSS, hora y telemetría básica para su visualización y almacenamiento en Plaspy.
- Transporta señales de eventos como pulsos de SOS, cambios en entradas digitales y estado de encendido para alertar a los operadores.
- Proporciona información de identificación del dispositivo para que Plaspy asocie los mensajes entrantes con el vehículo o activo correcto.
- Soporta cambio de operador mediante doble SIM para reducir huecos en los datos y mantener la continuidad de los reportes hacia el endpoint de Plaspy.
- Funciona en conjunto con la configuración de transporte para que el rastreador alcance Plaspy a través de datos móviles para seguimiento en vivo y actualizaciones periódicas.

## Cómo detecta Plaspy el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando un equipo envía datos al endpoint de la plataforma, por lo que normalmente no es necesario seleccionar un protocolo manualmente dentro de Plaspy si el VT-330 está configurado para enviar al servidor y puerto correctos. La detección automática facilita la incorporación de flotas mixtas mientras que las variaciones de protocolo se gestionan en el lado del servidor.

- Plaspy recibe reportes del VT-330 en el dominio público d.plaspy.com y en la IP conocida 54.85.159.138.
- El endpoint de Plaspy escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto para el reporte.
- Plaspy soporta identificación automática del protocolo, por lo que los dispositivos correctamente configurados se detectan sin necesidad de elegir un protocolo manualmente.
- La configuración típica requiere apuntar el dispositivo a la dirección y puerto del servidor Plaspy para que los mensajes entrantes puedan asociarse a una cuenta.
- Dado que el firmware y la implementación pueden variar, los dispositivos que no estén reportando deben validarse por dirección de servidor, puerto y ajustes de transporte antes de proceder con más diagnóstico.

## Contexto de transporte y conexión

Los ajustes de transporte y conexión determinan cómo el VT-330 establece una sesión con Plaspy y envía sus datos. El VT-330 usa GSM GPRS para alcanzar Internet público y puede configurarse para usar UDP o TCP para entregar sus mensajes de reporte, según el soporte del equipo y la configuración elegida.

- El VT-330 puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Los dispositivos pueden apuntar al servidor Plaspy por dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que una configuración uniforme del puerto simplifica la provisión de flotas y las reglas de firewall.
- La elección entre UDP y TCP puede afectar características de entrega como reintentos y overhead; seleccione el transporte que coincida con las capacidades del firmware y las condiciones de red.
- Verifique que la red del vehículo o del sitio permita conexiones salientes al servidor Plaspy y al puerto 8888 para un reporte confiable.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden alterar el timing de mensajes, funciones soportadas y campos opcionales, por lo que es importante confirmar la versión de firmware al validar el comportamiento con Plaspy.
- Las revisiones de hardware o variantes del modelo pueden afectar las bandas disponibles, el cableado de E/S o el comportamiento de alimentación y, por ende, cuándo y cómo se reportan los datos.
- Los valores por defecto de configuración del fabricante podrían no apuntar a Plaspy; comúnmente se requiere ingresar explícitamente servidor y puerto.
- La operación con doble SIM mejora la resiliencia de la red, pero puede cambiar la IP del dispositivo o el comportamiento de la sesión cuando los operadores se alternan.
- La selección de transporte entre UDP y TCP debe coincidir con la configuración del equipo y con cualquier recomendación del fabricante.
- Siempre valide la compatibilidad contra la documentación oficial del fabricante y las notas de la versión de firmware cuando sea posible.
- Pruebe una muestra pequeña de dispositivos antes de un despliegue masivo para confirmar frecuencia de reportes, entrega de eventos y comportamiento de alimentación.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de reporte del VT-330 y del contexto de conexión ayuda a lograr una integración fluida con Plaspy y reduce el tiempo dedicado a resolver problemas de conectividad o entrega de eventos. Saber qué ajustes revisar y cómo se espera que se comporte el equipo permite una configuración más rápida y un monitoreo más confiable.

- Ayuda a identificar malas configuraciones comunes como dirección o puerto incorrectos, selección de transporte equivocada o GPRS deshabilitado.
- Mejora la eficiencia en la resolución de problemas cuando eventos como SOS o cambios en entradas digitales no llegan a Plaspy.
- Orienta decisiones sobre gestión de energía, intervalos de reporte y comportamiento de doble SIM para cumplir requisitos operativos.
- Apoya un cableado correcto de entradas, salidas y del relé inmovilizador para que los eventos se reflejen en las alertas y controles de la plataforma.
- Facilita la planificación para sitios remotos y la ampliación de la flota al clarificar requisitos de red y firewall para el puerto 8888.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP VT-330 con Plaspy ofrece a las organizaciones una forma práctica de recolectar ubicación en tiempo real, eventos de estado y telemetría básica desde vehículos y activos pequeños. Las características del hardware del VT-330, como la resiliencia de doble SIM, batería de respaldo y salida de relé, se alinean con flujos de trabajo comunes de gestión de flotas y antirobo que Plaspy soporta para mapeo en vivo, alertas e informes históricos.

Si desea saber más sobre Plaspy y cómo maneja la conectividad de dispositivos y el monitoreo de flotas, por favor visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y guía de configuración del GOTOP VT-330 consulte al fabricante en https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento de firmware pueden cambiar con el tiempo y la documentación del fabricante es la fuente autorizada.
