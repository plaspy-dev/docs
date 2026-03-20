---
slug: /itriangle/ts101_basic_ev/protocol
id: ts101_basic_ev-protocol
sidebar_label: Protocol
title: iTriangle - TS101 Basic EV Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el iTriangle TS101 Basic EV con la plataforma Plaspy
keywords:
  - protocolo iTriangle TS101 Basic EV
  - protocolo iTriangle TS101
  - protocolo GPS TS101 Basic EV
  - protocolo de rastreo iTriangle
  - rastreador compatible con Plaspy
  - protocolo de rastreo de vehículos
  - rastreo de flotas TS101
  - integración TS101 Basic EV
  - protocolo GPS iTriangle
  - compatibilidad TS101 con Plaspy
---

# iTriangle - Protocolo TS101 Basic EV

Esta página describe el contexto público del protocolo para utilizar el rastreador iTriangle TS101 Basic EV con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, las configuraciones de conexión empleadas y qué considerar al integrar el equipo para seguimiento en tiempo real, registro de eventos y telemetría básica de sensores.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando este reporta al punto de ingreso de Plaspy. El comportamiento exacto del protocolo puede variar según versiones de firmware, revisiones de hardware y decisiones del fabricante; por eso esta página ofrece un contexto práctico de integración y recomienda verificar con la documentación oficial del fabricante.

## Resumen del protocolo

El protocolo del rastreador define cómo el TS101 Basic EV informa posición, eventos y estado de entradas/salidas a un servidor remoto para que Plaspy pueda ingerir y mostrar la telemetría. Esta visión general pública explica el papel del protocolo sin exponer detalles internos del firmware ni reglas de parseo.

- Permite que los informes de posición GNSS y la telemetría de eventos se envíen desde el TS101 Basic EV al servidor de Plaspy para mapas en vivo y reproducción histórica.
- Transmite la identidad y el estado del equipo para que Plaspy pueda asociar los mensajes entrantes con el vehículo y el registro correctos.
- Transporta eventos del acelerómetro, alertas de manipulación y estados de E/S para que Plaspy active notificaciones y registre telemetría de sensores.
- Soporta la reconciliación de almacenamiento en búfer para que Plaspy pueda recuperar los datos que el dispositivo guardó localmente durante interrupciones temporales de conectividad.
- Proporciona el marco de conexión para canales de configuración como TCP, UDP, SMS o comisionado por Bluetooth cuando el equipo lo soporta.

## Cómo detecta Plaspy el protocolo

Plaspy acepta reportes de muchos modelos de rastreadores en un único punto de ingreso compartido y determina automáticamente el protocolo usado por una sesión entrante. En la mayoría de los casos usted no necesita seleccionar manualmente el protocolo dentro de Plaspy si el dispositivo está configurado para reportar al servidor de Plaspy.

- Plaspy escucha en un puerto común para todos los dispositivos soportados, de modo que el tráfico de los equipos apunte al mismo endpoint del servidor.
- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- El puerto de reporte compartido usado por todos los dispositivos en Plaspy es 8888 y Plaspy detectará el protocolo del rastreador cuando lleguen datos a ese puerto.
- Cuando un TS101 Basic EV está correctamente configurado para reportar a Plaspy, normalmente no es necesaria la selección manual del protocolo.
- Si la detección automática no funciona como se espera, el siguiente paso recomendado es revisar la configuración de reporte del dispositivo y la guía del fabricante.

## Transporte y contexto de conexión

El TS101 Basic EV puede usar modos de transporte comunes para llegar a Plaspy según el soporte del operador y la configuración del dispositivo. Esta sección cubre las opciones de conexión y la direccionalidad usada para entregar la telemetría a Plaspy.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- Los dispositivos pueden apuntar al servidor Plaspy por nombre de dominio d.plaspy.com o directamente a la IP 54.85.159.138 cuando no haya resolución DNS disponible.
- Plaspy emplea el mismo puerto 8888 para todos los dispositivos soportados para simplificar la configuración y reducir errores.
- Usar TCP puede ofrecer visibilidad de sesión, mientras que UDP a veces se prefiere para reportes livianos según las condiciones del operador y los ajustes del equipo.
- Asegúrese de que el transporte elegido esté permitido por la red móvil y que los parámetros APN sean correctos para una entrega confiable.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar qué campos de telemetría se reportan y cómo, por lo que cotejar las notas de firmware con las expectativas de Plaspy ayuda a evitar interpretaciones erróneas.
- Las revisiones de hardware y las SKUs regionales a veces varían en funciones disponibles como BLE, mapeo de E/S o constelaciones GNSS soportadas.
- La selección de transporte entre UDP y TCP afecta el comportamiento en zonas con cobertura deficiente y debe validarse según sus necesidades operativas.
- Bluetooth y los canales locales de configuración son útiles para el comisionado, pero no reemplazan la correcta configuración de reporte al servidor.
- Los comandos de configuración del fabricante o las interfaces SMS pueden variar según la versión de firmware y deben confirmarse en los manuales oficiales del dispositivo.
- Valide la compatibilidad comparando los requisitos de conexión de Plaspy con las opciones de configuración del dispositivo documentadas por el fabricante.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar que el TS101 Basic EV funcione de manera confiable con Plaspy y facilita la resolución de problemas cuando surjan incidencias. Tener claridad sobre el comportamiento de reporte reduce el tiempo de implementación y mejora la fiabilidad operativa a largo plazo.

- Ayuda a verificar que el dispositivo apunte al endpoint y puerto correctos de Plaspy para que la telemetría llegue como se espera.
- Facilita la resolución cuando los registros en búfer no se reconcilian, al aclarar cómo el dispositivo almacena y reenvía datos.
- Orienta la elección del transporte entre UDP y TCP según cobertura, latencia y comportamiento de la red.
- Permite configurar de forma predecible las alertas y los campos del panel en Plaspy al saber qué elementos de telemetría están disponibles desde el dispositivo.
- Ayuda a gerentes de flota e integradores a validar el soporte de funciones entre variantes de firmware y hardware.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el TS101 Basic EV ofrece visibilidad centralizada para operadores de flotas y OEMs que necesitan rastreo consistente, alertas de eventos y telemetría básica de sensores en distintos tipos de vehículos. Plaspy ingiere posición GNSS, eventos del acelerómetro y estado de E/S para que los equipos puedan monitorear rutas, reconciliar datos en búfer y actuar ante movimientos o alertas de manipulación.

Plaspy proporciona un único endpoint para el reporte de dispositivos, lo que simplifica el despliegue en flotas grandes. Si desea obtener más información sobre cómo Plaspy soporta integraciones de dispositivos y flujos de trabajo de flotas visite https://www.plaspy.com. Para los detalles más recientes por dispositivo, notas de firmware e instrucciones del fabricante, confirme la información en el sitio oficial de iTriangle https://www.itriangle.net/ ya que los detalles de implementación pueden variar con el tiempo.
