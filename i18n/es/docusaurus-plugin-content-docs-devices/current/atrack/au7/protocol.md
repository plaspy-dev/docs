---
slug: /atrack/au7/protocol
id: au7-protocol
sidebar_label: Protocol
title: ATrack - AU7 Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo del rastreador ATrack AU7 y cómo se comunica con Plaspy para informes y compatibilidad
keywords:
  - Protocolo ATrack AU7
  - Protocolo GPS ATrack AU7
  - Protocolo de rastreo AU7
  - Protocolo ATrack Plaspy
  - Compatibilidad AU7 Plaspy
  - Protocolo de rastreo de vehículos AU7
  - Protocolo de comunicación AU7
  - ATrack AU7 RS232 CAN Bus
  - Rastreador AU7 GPS GLONASS
  - Informes AU7 TCP UDP
---

# ATrack - Protocolo AU7

Esta página describe el contexto público del protocolo para usar el rastreador ATrack AU7 con Plaspy. Explica cómo el dispositivo suele reportar posición y eventos, y qué papel tiene el protocolo de comunicación para entregar datos utilizables a la plataforma Plaspy. El enfoque está en información práctica y no sensible que ayuda en la configuración y en establecer expectativas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para enviar datos al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware del AU7, la revisión de hardware y la implementación del fabricante, por lo que el comportamiento del dispositivo puede diferir entre despliegues.

## Visión general del protocolo

El mecanismo de reporte del AU7 permite que el rastreador se identifique, envíe actualizaciones de posición y transmita datos de eventos como alertas de geocerca, detección de conducción brusca y entradas de sensores a un servidor. El comportamiento a nivel de protocolo determina qué datos se transmiten, con qué frecuencia se envían informes y cómo se reconocen eventos entre el dispositivo y el servidor.

- El protocolo permite que el AU7 transmita posición GPS/GLONASS, marca de tiempo y datos de movimiento a Plaspy.
- Transporta telemetría suplementaria como entradas desde periféricos RS-232, lecturas del intérprete CAN Bus, sensores 1-Wire y el sensor G de 3 ejes integrado.
- Las reglas de configuración del dispositivo y el mecanismo de reporte personalizado del AU7 controlan cuándo y cómo se generan los informes.
- Funciones opcionales como cifrado AES 128 y FOTA pueden influir en cómo se intercambian los datos y si se requiere configuración adicional.
- La selección de transporte y el modo de red determinan si los mensajes se envían por UDP, TCP, SMS u otros canales compatibles.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los rastreadores en un endpoint unificado y determina automáticamente qué protocolo de dispositivo se está usando, por lo que usted normalmente no necesita elegir un protocolo manualmente dentro de la plataforma. La configuración correcta del dispositivo para apuntar a Plaspy es el requisito principal para que la detección automática funcione de forma fiable.

- Plaspy acepta conexiones de dispositivos en el hostname d.plaspy.com y en la dirección IP 54.85.159.138 en el puerto de la plataforma 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según su soporte de red y preferencias operativas.
- Todos los dispositivos soportados por Plaspy utilizan el mismo puerto, lo que simplifica la configuración y reduce errores.
- Cuando el AU7 está configurado para reportar al endpoint de Plaspy, Plaspy identificará automáticamente el protocolo de reporte y procesará los mensajes entrantes.
- Usted normalmente solo necesita asegurarse de que la configuración de red y de reporte del AU7 apunten al endpoint de Plaspy para que ocurra la detección.

## Transporte y contexto de conexión

Las opciones de transporte y conexión forman parte de las consideraciones prácticas al integrar el AU7 con Plaspy. El AU7 soporta múltiples modos de red y canales de reporte; elegir el transporte adecuado afecta la confiabilidad, la latencia y los pasos de configuración.

- El AU7 puede enviar datos por TCP o UDP en el puerto 8888 cuando está configurado para reportes IP a Plaspy.
- Los dispositivos pueden apuntar al hostname d.plaspy.com o directamente a la dirección IP 54.85.159.138.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos, por lo que la configuración del puerto no necesita variar entre modelos.
- La elección del transporte puede impactar el comportamiento de entrega de paquetes y puede seleccionarse según las condiciones de la red o el comportamiento del operador de la SIM.
- Canales alternativos de reporte soportados por el AU7, como SMS o USSD, son funciones del dispositivo pero están separados de la integración TCP/UDP con el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los formatos de reporte, los campos disponibles y las funciones habilitadas; siempre verifique la versión de firmware del dispositivo al evaluar compatibilidad.
- Las revisiones de hardware y accesorios opcionales como intérpretes CAN Bus o dispositivos 1-Wire pueden modificar el conjunto de elementos de telemetría transmitidos.
- Habilitar cifrado AES 128 u otras opciones de seguridad en el AU7 puede requerir configuración adicional en el servidor o en Plaspy para procesar cargas útiles cifradas.
- Elegir TCP versus UDP afecta la semántica de entrega y puede requerir ajustes de firewall de red o permisos del operador de la SIM.
- FOTA o el comportamiento de actualización de firmware pueden modificar el comportamiento del protocolo; verifique los procedimientos y tiempos de actualización antes de desplegar a gran escala.
- Valide la compatibilidad probando un dispositivo con Plaspy bajo las condiciones de red esperadas y revisando la documentación del fabricante para notas de protocolo específicas del firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del AU7 ayuda a asegurar una configuración exitosa, reportes confiables y un comportamiento predecible cuando los dispositivos son gestionados por Plaspy. Conocer las capacidades y límites del protocolo facilita la resolución de problemas y mejora los resultados operativos.

- Facilita mapear la telemetría del AU7 a los campos y paneles de Plaspy durante la configuración inicial.
- Ayuda a diagnosticar datos faltantes o inesperados aislando problemas de transporte frente a diferencias de protocolo o firmware.
- Aclara cómo se entregarán funciones como filtrado de eventos, alertas de geocercas y detección de conducción brusca a la plataforma.
- Apoya la planificación de ancho de banda y la gestión de energía al entender los intervalos de reporte y patrones de activación.
- Informa la decisión de habilitar funciones opcionales como cifrado, FOTA o integraciones con sensores externos.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el ATrack AU7 ofrece a las organizaciones una forma sencilla de recopilar datos de ubicación y eventos de un rastreador GNSS capaz que soporta telemetría amplia y entradas de accesorios. El enfoque de endpoint único de Plaspy y la detección automática de protocolos reducen la carga de configuración, lo que permite a los equipos enfocarse en la supervisión, las alertas y las operaciones en lugar de la selección de protocolos de bajo nivel.

To learn more about Plaspy and how it works with devices like the AU7 visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and accessory compatibility please verify information with the manufacturer at https://www.atrack.com.tw/ as protocol support and firmware behavior may change over time.
