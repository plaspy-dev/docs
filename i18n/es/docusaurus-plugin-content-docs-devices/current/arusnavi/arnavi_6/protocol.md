---
slug: /arusnavi/arnavi_6/protocol
id: arnavi_6-protocol
sidebar_label: Protocol
title: Arusnavi - ARNAVI 6 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Arusnavi ARNAVI 6 y su comunicación con Plaspy para rastreo de flotas y telemetría
keywords:
  - Protocolo Arusnavi ARNAVI 6
  - Protocolo GPS Arusnavi
  - Compatibilidad ARNAVI 6 Plaspy
  - Protocolo de comunicación ARNAVI 6
  - Protocolo de rastreo ARNAVI 6
  - Rastreador Arusnavi Plaspy
  - Gestión de flotas ARNAVI 6
  - Integración de telemetría ARNAVI 6
  - Protocolo EGTS Arusnavi
  - Integración CAN MODBUS ARNAVI 6
---

# Arusnavi - Protocolo ARNAVI 6

Esta página ofrece una visión pública del protocolo para integrar el rastreador Arusnavi ARNAVI 6 con la plataforma Plaspy. Explica, en términos generales, cómo se comunica el ARNAVI 6 con Plaspy, qué puede esperar de los reportes del dispositivo y qué configuraciones de conexión admite Plaspy para conseguir un rastreo de flota y telemetría confiables.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página se enfoca en aspectos públicos y en buenas prácticas de integración no sensibles.

## Visión general del protocolo

El protocolo de comunicación ARNAVI 6 regula cómo se empaquetan y envían desde el dispositivo al servidor backend (como Plaspy) la posición GNSS, datos del bus CAN, telemetría de sensores y banderas de eventos. En Plaspy, los mensajes recibidos se parsean y se mapean al estado del vehículo, alertas y registros históricos para operaciones de flota.

- El protocolo transmite la posición y la información de tiempo necesaria para el rastreo en tiempo real y la reproducción histórica.
- Canales de telemetría incluyen datos CAN, sensores seriales (RS232, RS485), sensores BLE y entradas digitales para eventos como encendido y puertas.
- El dispositivo soporta protocolos comunes documentados por el fabricante, incluyendo INTERNAL, EXTERNAL, USER_AG y EGTS, además de integraciones a nivel de aplicación como MODBUS.
- El registro offline del ARNAVI 6 almacena eventos cuando hay pérdida de conectividad y carga los datos guardados cuando se restaura el canal celular o Wi‑Fi.
- El protocolo puede contener campos de identificación del equipo y elementos de sincronización horaria para que Plaspy asocie los datos entrantes con el activo correcto.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico entrante en un endpoint y puerto compartidos y utiliza detección automática para identificar el protocolo del rastreador. En despliegues habituales, usted no necesita seleccionar manualmente un protocolo en Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en un único puerto para todos los dispositivos soportados, lo que simplifica la configuración.
- Cuando el ARNAVI 6 envía datos al endpoint de Plaspy, la plataforma determina automáticamente las reglas de parseo y mapeo adecuadas.
- Normalmente, apuntar correctamente el dispositivo a Plaspy es suficiente para su detección e incorporación a la plataforma.
- Si el equipo soporta múltiples modos de protocolo o variantes de firmware, asegúrese de configurarlo en un modo compatible con la documentación del fabricante y las capacidades de Plaspy.
- Para flotas mixtas con distintos rastreadores, el enfoque de endpoint compartido reduce la necesidad de gestionar puertos por dispositivo.

## Transporte y contexto de conexión

ARNAVI 6 puede usar UDP o TCP para el envío de datos según la configuración del dispositivo y las condiciones de red. Plaspy acepta ambos tipos de transporte en su dirección y puerto estándar, por lo que los dispositivos se pueden ajustar al transporte más apropiado para su entorno.

- Los dispositivos pueden configurarse para reportar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy recibe tráfico de dispositivos en el puerto 8888 y el equipo puede utilizar UDP o TCP en ese mismo puerto.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que optimiza la configuración de la flota y reduce la complejidad operativa.
- Elija UDP cuando la baja sobrecarga y la mínima latencia sean prioritarias, o TCP cuando se necesite entrega fiable y estado de conexión, siempre que el dispositivo lo soporte.
- Asegúrese de que cualquier firewall intermedio o APN permita conexiones salientes hacia el endpoint de Plaspy y el protocolo de transporte seleccionado.

## Notas sobre compatibilidad del protocolo

- Diferencias de firmware pueden modificar los modos de protocolo soportados y los campos de telemetría disponibles; verifique la versión de firmware al confirmar el comportamiento.
- Revisiones de hardware u módulos opcionales como Wi‑Fi, BLE o expansiones CAN pueden cambiar qué canales de telemetría están disponibles para Plaspy.
- La elección de transporte entre UDP y TCP afecta la semántica de entrega y la forma en que el dispositivo se recupera tras interrupciones de red.
- Los protocolos soportados por el fabricante mencionados en la documentación incluyen INTERNAL, EXTERNAL, USER_AG y EGTS, además de integraciones MODBUS y CAN; confirme cuál modo está usando el equipo.
- El registro interno tipo black box y los parámetros (intervalos de reporte, reglas de eventos) influyen en la cantidad de datos históricos que Plaspy recibe después de la reconexión.
- Valide la configuración del equipo frente a la documentación oficial de Arusnavi para confirmar los ajustes recomendados para la integración con Plaspy.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el ARNAVI 6 con una plataforma backend ayuda a asegurar una correcta configuración, agilizar la resolución de problemas y mantener una operación fiable a largo plazo cuando se integra con Plaspy. Saber qué reporta el dispositivo y cómo se conecta reduce sorpresas durante el despliegue y el mantenimiento.

- Ajustes correctos de transporte y endpoint garantizan que el dispositivo alcance el servidor Plaspy sin bloqueos de red innecesarios.
- Conocer las versiones de firmware y los modos de protocolo ayuda a diagnosticar telemetría faltante o campos incompatibles en los datos recibidos.
- Entender el comportamiento del registro onboard aclara cómo se recuperan los datos tras una pérdida de conectividad y ayuda a dimensionar las necesidades de almacenamiento.
- Saber qué canales de telemetría están disponibles, como CAN, serial y BLE, le permite planear qué sensores e interfaces del vehículo serán visibles en Plaspy.
- Poder referenciar los nombres de protocolo y las opciones de configuración del fabricante facilita la comunicación con el soporte del proveedor y reduce tiempos de resolución.

## Por qué usar Plaspy con este protocolo

Usar ARNAVI 6 con Plaspy ofrece una vía práctica para integrar telemetría profesional e interfaces de vehículo en una sola plataforma de gestión de flotas. ARNAVI 6 aporta GNSS multiconstelación, resiliencia dual SIM, datos CAN y seriales, sensores BLE y registro offline, lo que le da a Plaspy las entradas necesarias para ubicación, diagnóstico y flujos de trabajo basados en eventos.

El enfoque de endpoint compartido y la detección automática de protocolos de Plaspy reducen la carga de configuración en flotas mixtas, a la vez que mantienen la flexibilidad para aceptar los flujos de telemetría que ofrece ARNAVI 6. Si desea saber más sobre cómo Plaspy funciona con dispositivos como ARNAVI 6 visite https://www.plaspy.com. Para detalles específicos de protocolo, notas de firmware y orientación de implementación, verifique la documentación del fabricante en https://www.arusnavi.ru, ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
