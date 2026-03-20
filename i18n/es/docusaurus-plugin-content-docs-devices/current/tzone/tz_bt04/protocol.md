---
slug: /tzone/tz_bt04/protocol
id: tz_bt04-protocol
sidebar_label: Protocol
title: TZone - TZ-BT04 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar el registrador TZone TZ-BT04 con Plaspy para subidas confiables y monitoreo
keywords:
  - protocolo TZone TZ-BT04
  - comunicación TZone TZ-BT04
  - protocolo TZone TZ-BT04 para Plaspy
  - protocolo de rastreo TZone TZ-BT04
  - protocolo del registrador TZ-BT04
  - registrador de temperatura y humedad TZone
  - compatibilidad de dispositivos Plaspy
  - protocolo de rastreador Plaspy
  - protocolo de registrador BLE
  - protocolo de carga GPRS
---

# TZone - TZ-BT04 Protocolo

Esta página describe el contexto público del protocolo para usar el registrador de temperatura y humedad TZone TZ-BT04 con la plataforma Plaspy. Aquí se explica cómo el equipo puede comunicarse con Plaspy, qué papel juega el protocolo de reporte en la integración del dispositivo y qué aspectos considerar al configurar el TZ-BT04 para subidas al servidor o reenvío mediante un gateway.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en orientación general no sensible y en puntos prácticos de compatibilidad.

## Resumen del protocolo

El TZ-BT04 es principalmente un registrador de datos Bluetooth Low Energy que almacena historial de temperatura y humedad y puede transferir lecturas a un dispositivo móvil o subir datos a un servidor remoto vía GPRS cuando está configurado para ello. El protocolo del dispositivo regula cómo se presentan los datos de los sensores y la identidad del equipo a un receptor, cómo se aplican los intervalos de reporte y cómo el dispositivo comunica estado o información de batería a un backend.

- Permite que el TZ-BT04 entregue mediciones del sensor y metadatos básicos del equipo a un receptor o gateway
- Define cómo se agrupan las lecturas, cómo se asignan marcas de tiempo y cómo se dejan disponibles para su subida al servidor
- Facilita que dispositivos o gateways identifiquen la unidad para que Plaspy asocie los datos entrantes con el activo correcto
- Soporta comportamiento de reporte configurable, como intervalos de envío ajustables y potencia de transmisión en el firmware del fabricante
- Conecta transferencias BLE desde móviles y subidas GPRS cuando se usa el dispositivo o un gateway intermedio

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones entrantes de dispositivos en un único endpoint compartido e identificar automáticamente el protocolo del equipo. En la mayoría de los casos no necesita seleccionar un protocolo dentro de Plaspy cuando el TZ-BT04 o un gateway asociado está configurado para reportar al endpoint de Plaspy.

- Plaspy acepta reportes de dispositivos al dominio d.plaspy.com y a la dirección IP 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en equipos y gateways
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan al plataforma reportes con el formato correcto
- Usualmente usted solo debe asegurarse de que el dispositivo o gateway apunte a Plaspy y use los ajustes de transporte adecuados
- Cuando la detección tiene éxito, Plaspy mapea los datos entrantes al registro de dispositivo correspondiente sin selección manual de protocolo

## Contexto de transporte y conexión

La elección del transporte y la configuración de conexión determinan cómo el TZ-BT04 o su gateway de reenvío se conectan a Plaspy. El dispositivo se comunica principalmente por Bluetooth con aplicaciones móviles y puede subir a un servidor vía GPRS. Cuando las subidas van dirigidas a Plaspy, los siguientes datos de conexión son relevantes para la configuración.

- El dispositivo o gateway puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la red
- Dispositivos y gateways pueden apuntar a d.plaspy.com o a 54.85.159.138 como destino del servidor Plaspy
- Plaspy usa el puerto 8888 para todos los dispositivos soportados con el fin de mantener un comportamiento de endpoint consistente
- Elija UDP o TCP según las indicaciones del firmware del dispositivo, la fiabilidad de la red y los patrones de mensaje esperados
- Asegúrese de que cualquier gateway intermedio traduzca las lecturas BLE al mismo formato de reporte y las envíe al endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware en el TZ-BT04 pueden afectar los campos de reporte disponibles, los intervalos y el comportamiento de transporte
- Revisiones de hardware o lotes de producción distintos pueden introducir cambios menores en cómo el dispositivo anuncia o sube datos
- Opciones de configuración del fabricante, como intervalos de envío ajustables y potencia de salida, influyen en la frecuencia con que Plaspy recibe actualizaciones
- Si usa un gateway o puente móvil, valide que el gateway reenvíe datos en un formato que Plaspy pueda detectar y mapear
- La elección del transporte (UDP frente a TCP) puede verse limitada por condiciones de red, reglas de firewall o configuraciones del proveedor de SIM
- Siempre verifique la compatibilidad contra la documentación y los registros de cambios más recientes del fabricante antes de un despliegue amplio

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TZ-BT04 ayuda a garantizar un flujo de datos confiable, el mapeo preciso de los valores del sensor y una resolución eficiente de problemas cuando los datos no llegan como se espera. Un conocimiento claro del protocolo reduce el tiempo de puesta en marcha y favorece la fiabilidad a largo plazo del monitoreo y el reporte.

- Confirma que el dispositivo o gateway está configurado para reportar al endpoint y puerto correctos de Plaspy
- Permite a los operadores interpretar patrones de señal, intervalos de reporte y brechas de datos en Plaspy
- Ayuda a diagnosticar problemas de transporte como tráfico UDP o TCP bloqueado o resolución DNS incorrecta
- Orienta la selección de ajustes de potencia y intervalos de envío para balancear la vida de batería y la frecuencia de reporte
- Favorece el manejo adecuado de la identidad del dispositivo para que los registros en Plaspy coincidan con los activos físicos

## Por qué usar Plaspy con este protocolo

Usar el TZ-BT04 con Plaspy ofrece una vía para recopilar, visualizar y archivar datos ambientales junto con otras señales telemáticas y de sensores. Organizaciones que operan cadenas de frío, almacenes, laboratorios o unidades refrigeradas móviles pueden combinar los datos del TZ-BT04 con las herramientas de Plaspy para monitoreo centralizado, alertas e informes.

Si desea saber más sobre cómo Plaspy gestiona los datos de dispositivos y las funcionalidades de la plataforma, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento de firmware y los detalles específicos de implementación del dispositivo pueden cambiar con el tiempo, así que verifique la documentación específica del dispositivo y las notas de firmware más recientes en el sitio del fabricante http://www.tzonedigital.com/.
