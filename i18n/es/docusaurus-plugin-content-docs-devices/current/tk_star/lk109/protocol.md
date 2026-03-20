---
slug: /tk_star/lk109/protocol
id: lk109-protocol
sidebar_label: Protocol
title: TK-Star - LK109 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del GPS TK Star LK109 y cómo se comunica con Plaspy para reportes y alertas confiables
keywords:
  - protocolo TK Star LK109
  - protocolo GPS TK Star LK109
  - protocolo TK Star LK109 para Plaspy
  - protocolo de comunicación TK Star LK109
  - protocolo de rastreo TK Star LK109
  - protocolo del rastreador LK109
  - compatibilidad del rastreador TK Star con Plaspy
  - integración LK109 con Plaspy
  - rastreo vehicular LK109
  - rastreador GPS portátil LK109
---

# TK-Star - Protocolo LK109

Esta página describe el contexto público del protocolo para usar el rastreador GPS portátil TK-Star LK109 con Plaspy. Resume cómo el dispositivo típicamente informa la ubicación y las alertas a la plataforma Plaspy y qué papel juega el protocolo de comunicación del equipo en esa interacción. El contenido está pensado para no ser sensible y para ayudarle a comprender la compatibilidad y los conceptos básicos de configuración al emparejar un LK109 con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el equipo empieza a reportar a la plataforma. Para Plaspy, el endpoint estándar es d.plaspy.com y la plataforma acepta conexiones al IP 54.85.159.138 en el puerto 8888. El LK109 puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y los ajustes del dispositivo, y el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión del hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del LK109 regula cómo el rastreador envía la posición, el estado y los eventos de alarma a un servidor remoto como Plaspy. Define cómo el dispositivo se identifica, cómo presenta los datos de ubicación y sensores, y cómo el servidor reconoce o responde a los mensajes del equipo de una manera que la plataforma puede interpretar.

- Permite que el LK109 envíe ubicación GPS, detección de movimiento y alertas derivadas de sensores a Plaspy.
- Proporciona un método consistente para que el rastreador se identifique y Plaspy pueda asociar la información entrante con el registro de dispositivo correcto.
- Transporta notificaciones de eventos como SOS, batería baja, geocercas y alertas de movimiento, útiles para monitoreo y automatización.
- Soporta reportes periódicos y verificación de historial para que Plaspy muestre movimiento en tiempo real y recorridos históricos.
- Permite configuración remota y latido (heartbeat) dentro de los límites del firmware del dispositivo y las opciones del fabricante.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para recibir tráfico de rastreadores en un endpoint y puerto compartidos y para determinar automáticamente el protocolo del dispositivo a partir de las conexiones entrantes. Cuando un LK109 se configura para reportar al endpoint de Plaspy, la plataforma normalmente reconoce el dispositivo sin necesidad de seleccionar el protocolo manualmente.

- Plaspy acepta conexiones de dispositivos en d.plaspy.com y en el servidor IP 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto; la plataforma escucha en el puerto 8888 para tráfico de rastreadores.
- Los dispositivos pueden conectar usando UDP o TCP en el puerto 8888 según la configuración y capacidad del equipo.
- Si el LK109 está apuntando al endpoint de Plaspy y enviando datos, Plaspy normalmente detectará el protocolo automáticamente.
- Por lo general, los usuarios no necesitan elegir un protocolo dentro de Plaspy si el dispositivo está configurado correctamente para reportar al endpoint compartido de Plaspy.

## Transporte y contexto de conexión

El transporte y el contexto de conexión describen cómo el LK109 alcanza físicamente los servidores de Plaspy. El rastreador puede estar configurado para enviar sus reportes por UDP o TCP, y puede usar el nombre de dominio o la dirección IP del servidor Plaspy. Estas opciones de conexión afectan las características de entrega pero no cambian el significado de alto nivel de los datos reportados.

- Los dispositivos LK109 pueden configurarse para usar UDP o TCP en el puerto 8888 según las opciones del firmware.
- Los equipos pueden apuntar al dominio d.plaspy.com o directamente a 54.85.159.138.
- Plaspy usa el mismo puerto 8888 en todos los dispositivos compatibles para simplificar la configuración.
- TCP ofrece entrega orientada a conexión, mientras que UDP ofrece envío ligero mediante datagramas; la elección depende del soporte del dispositivo.
- Asegúrese de que el dispositivo reporte al endpoint de Plaspy y de resolver cualquier bloqueo a nivel de red del puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades LK109 pueden cambiar las funciones disponibles y el comportamiento exacto de los mensajes. Verifique la versión de firmware si necesita un comportamiento preciso.
- Revisiones de hardware o variantes regionales del fabricante pueden implementar el protocolo de forma distinta; consulte la documentación específica de la unidad.
- La selección del transporte (UDP vs TCP) puede ser configurable en algunas versiones de firmware del LK109; confirme qué transportes soportan su hardware y firmware.
- Las direcciones de servidor predeterminadas del fabricante pueden diferir de las de Plaspy; actualice la configuración del servidor del dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 según sea necesario.
- Probar un dispositivo antes de un despliegue a gran escala ayuda a confirmar que el equipo envía los campos y eventos esperados a Plaspy.
- Siempre compare los resultados prácticos con la documentación oficial de TK Star para el modelo y la versión de firmware del dispositivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del LK109 mejora el éxito en la configuración, reduce el tiempo de resolución de problemas y ayuda a garantizar un funcionamiento fiable a largo plazo cuando el dispositivo se usa con Plaspy. Saber cómo reporta el equipo y qué transporte utiliza facilita validar la conectividad y el comportamiento esperado.

- Ayuda a confirmar que el dispositivo está reportando a d.plaspy.com o 54.85.159.138 en el puerto 8888 y usando un transporte compatible.
- Facilita la interpretación de eventos del dispositivo como SOS, salida de geocerca, exceso de velocidad y batería baja en Plaspy.
- Reduce el tiempo destinado a diagnosticar problemas de conectividad al centrarse en transporte, dirección del servidor y diferencias de firmware.
- Apoya la planificación de despliegues confiables cuando varios rastreadores deben configurarse de forma consistente.
- Contribuye a mapear los campos reportados por el dispositivo a las funciones de la plataforma para alertas, historial y monitoreo.

## Por qué usar Plaspy con este protocolo

Usar el TK-Star LK109 con Plaspy ofrece a las organizaciones un camino sencillo para centralizar en una misma plataforma la recolección de datos de ubicación, alertas y estado de rastreadores portátiles. El endpoint compartido de Plaspy y la detección automática de protocolo simplifican la incorporación de dispositivos, y la plataforma presenta ubicación en tiempo real, historial y notificaciones para supervisión operativa.

Si desea obtener más información sobre Plaspy y su compatibilidad con dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente del protocolo y del firmware para su dispositivo en el sitio oficial de TK Star en https://www.tk-star.com/.
