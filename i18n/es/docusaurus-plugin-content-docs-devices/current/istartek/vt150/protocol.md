---
slug: /istartek/vt150/protocol
id: vt150-protocol
sidebar_label: Protocol
title: iStartek - VT150 Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo del rastreador GPS iStartek VT150 y su comunicación con la plataforma Plaspy
keywords:
  - protocolo iStartek VT150
  - protocolo GPS iStartek VT150
  - compatibilidad VT150 Plaspy
  - protocolo rastreador GPS iStartek
  - protocolo de comunicación VT150
  - protocolo de rastreo VT150
  - integración de telemetría VT150
  - protocolo de dispositivo Plaspy
  - rastreo de flotas iStartek
  - rastreo vehicular VT150
---

# iStartek - Protocolo VT150

Esta página describe el contexto público del protocolo para usar el rastreador GPS iStartek VT150 con la plataforma Plaspy. Explica cómo se comunica el VT150 con Plaspy a grandes rasgos, qué papel tiene el protocolo de reporte del dispositivo en esa integración y qué verificar al configurar un VT150 para que envíe telemetría a Plaspy.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo comienza a reportar al endpoint de Plaspy. El comportamiento exacto del protocolo en el VT150 puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que esta página se centra en hechos generales y públicos sobre conectividad e integración en lugar de detalles internos de firmware.

## Resumen del protocolo

El protocolo de reporte del VT150 es el conjunto de reglas que el dispositivo usa para enviar posiciones GNSS, telemetría y eventos de alarma a un servidor de rastreo como Plaspy. A grandes rasgos, el protocolo conecta los sensores y el estado del equipo con Plaspy para que las ubicaciones y los eventos aparezcan correctamente en paneles, alertas y recorridos históricos.

- Permite que el VT150 se identifique y entregue posición y telemetría a Plaspy para la monitorización en tiempo real.
- Transporta eventos de alarma y estado, como activación de geocerca, cambios de ignición y alertas por vibración.
- Soporta reportes periódicos y por eventos, de modo que los intervalos y los disparadores determinan la frecuencia de las actualizaciones recibidas por Plaspy.
- Provee el canal para comandos remotos y configuración cuando el dispositivo y el fabricante lo soportan.
- Permite a Plaspy correlacionar la telemetría recibida con el estado del vehículo para reportes, alertas y automatizaciones.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones de dispositivos en un endpoint y puerto compartidos y reconoce automáticamente el protocolo cuando un dispositivo correctamente configurado comienza a reportar. En la mayoría de los casos, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el VT150 está configurado para reportar a la dirección del servidor Plaspy.

- Plaspy expone un único endpoint de escucha para el reporte de dispositivos, lo que simplifica la configuración.
- El dominio del servidor Plaspy es d.plaspy.com y la IP pública del servidor para conexiones de dispositivos es 54.85.159.138.
- Plaspy usa el puerto 8888 y todos los dispositivos soportados por Plaspy emplean ese mismo puerto para reportar.
- Cuando el VT150 reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo y comienza a ingerir los datos.
- La configuración correcta del APN, los intervalos de reporte y la dirección del servidor en el VT150 son los requisitos habituales para iniciar la detección automática.

## Transporte y contexto de conexión

El transporte de conexión es la capa que lleva los mensajes del protocolo desde el VT150 hasta Plaspy. El VT150 puede configurarse para usar UDP o TCP según la configuración del dispositivo y las condiciones de red. Use la opción de transporte que coincida con la configuración de su equipo y el comportamiento del operador móvil.

- El VT150 puede configurarse para reportar usando UDP o TCP en el puerto 8888, según el soporte y la configuración del dispositivo.
- Los equipos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP 54.85.159.138.
- El puerto 8888 es el puerto compartido de escucha de Plaspy y se utiliza para todos los dispositivos en el ecosistema Plaspy.
- Elija UDP para reportes ligeros y con menor sobrecarga, o TCP cuando el dispositivo prefiera una conexión persistente y confirmación de entrega a nivel de transporte.
- Consideraciones de red como NAT del operador, reglas de firewall y la configuración del APN en la SIM pueden afectar si UDP o TCP funcionan mejor.

## Notas sobre compatibilidad del protocolo

- Se ha demostrado la compatibilidad del VT150 con Plaspy, pero el tiempo exacto de los mensajes y el comportamiento pueden variar según la versión de firmware y la revisión del equipo.
- Las diferencias de firmware pueden modificar los campos de reporte disponibles, los nombres de alarmas y funciones opcionales como control remoto o soporte de sensores.
- Las revisiones de hardware y las opciones de accesorios pueden añadir o quitar canales de telemetría que el protocolo puede transmitir.
- La elección del transporte entre UDP y TCP puede afectar el comportamiento de conectividad detrás de ciertas redes móviles.
- Valide siempre la dirección del servidor del dispositivo, el APN y los intervalos de reporte al incorporar un VT150 a Plaspy.
- Consulte la documentación oficial de iStartek para notas específicas de firmware que afecten el comportamiento del protocolo.

## Por qué es importante entender el protocolo

Tener claridad sobre el protocolo de comunicación del VT150 ayuda a asegurar una configuración fiable del equipo, datos precisos en Plaspy y una resolución de problemas más rápida cuando surjan incidencias. Conocer cómo reporta el dispositivo y qué espera el servidor reduce errores de configuración y mejora el tiempo de actividad operacional.

- Asegura la dirección de servidor y los ajustes de transporte correctos para que el VT150 alcance Plaspy sin necesidad de seleccionar un protocolo de forma manual.
- Ayuda a interpretar el comportamiento de eventos y telemetría como intervalos de reporte, generación de alarmas y precisión de la telemetría.
- Facilita la resolución de problemas de conectividad relacionados con redes de operador, configuraciones de APN y elección de transporte.
- Soporta la planificación de actualizaciones de firmware y cambios de accesorios que puedan afectar las capacidades de reporte.
- Mejora la confianza al mapear los reportes del dispositivo a los paneles, alertas y reglas de automatización de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el VT150 con Plaspy ofrece a operadores de flotas y administradores una vía directa para el rastreo en tiempo real, la gestión de alarmas y flujos de trabajo basados en telemetría. El diseño compacto y robusto del VT150 y su amplio conjunto de alarmas complementan las capacidades de ingestión y visualización de Plaspy, de modo que los responsables puedan monitorear activos, responder a eventos de seguridad y analizar movimientos históricos.

Plaspy facilita la incorporación de dispositivos ofreciendo un único endpoint y puerto de reporte al que el VT150 puede apuntar. Para saber más sobre Plaspy y cómo funciona con dispositivos como el VT150 visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente sobre el protocolo y el firmware del VT150 en el sitio del fabricante en https://istartek.com/.
