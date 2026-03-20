---
slug: /teltonika/fmm80a/protocol
id: fmm80a-protocol
sidebar_label: Protocol
title: Teltonika - FMM80A Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para usar el Teltonika FMM80A con Plaspy, contexto de conexión y notas prácticas de compatibilidad
keywords:
  - Protocolo Teltonika FMM80A
  - Protocolo GPS Teltonika FMM80A
  - Compatibilidad FMM80A Plaspy
  - Protocolo rastreador OBDII Teltonika
  - Protocolo de comunicación FMM80A
  - Protocolo de seguimiento Teltonika FMM80A
  - Protocolo de dispositivo Plaspy
  - Seguimiento de vehículos FMM80A
  - Gestión de flotas Teltonika FMM80A
  - Integración de sensores BLE FMM80A
---

# Teltonika - Protocolo FMM80A

Esta página describe el contexto público del protocolo para usar el Teltonika FMM80A con la plataforma Plaspy. Se centra en cómo el dispositivo reporta telemetría y datos de posición a Plaspy y en el papel que juega el protocolo de comunicación para garantizar un seguimiento confiable en las operaciones diarias de la flota. El FMM80A es un rastreador OBD II plug and play con conectividad LTE Cat M1 y NB-IoT, soporte BLE y un acelerómetro configurable; todos estos componentes generan datos telemáticos que Plaspy ingiere.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar al endpoint de Plaspy. El comportamiento exacto de los paquetes y las características del dispositivo pueden variar según la versión de firmware, la revisión de hardware o la configuración del fabricante, por lo que esta página ofrece contexto de alto nivel y orientación práctica en lugar de detalles internos específicos de firmware.

## Descripción general del protocolo

El protocolo de comunicación del rastreador es el mecanismo por el cual el FMM80A envía información de posición, telemetría y eventos a Plaspy. A grandes rasgos, el protocolo permite que el dispositivo se identifique, envíe datos con marcas de tiempo sobre ubicación y sensores, y genere mensajes de evento (por ejemplo incidentes basados en el acelerómetro o alertas de sensores BLE) que Plaspy puede mostrar o procesar.

- Permite el envío autenticado de la ubicación GPS y telemetría básica del vehículo desde la interfaz OBD II hacia Plaspy.
- Transporta datos de sensores y eventos como trazas del acelerómetro y lecturas de sensores BLE para monitoreo de condiciones y revisión de incidentes.
- Incluye identificación del dispositivo y contexto de sesión para que Plaspy pueda asociar los reportes entrantes con el registro de activo correcto.
- Soporta reportes periódicos y basados en eventos, lo que permite tanto el seguimiento en vivo como la reproducción histórica.
- Funciona en conjunto con la configuración del dispositivo y los ajustes de firmware para controlar la frecuencia de reportes, umbrales de eventos e integración de sensores.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes y telemetría en un endpoint compartido y detecta automáticamente el protocolo del rastreador según los datos que el dispositivo envía. En la mayoría de las implementaciones no es necesario indicar manualmente a Plaspy qué protocolo usa el dispositivo, siempre que el rastreador esté configurado para reportar al endpoint de Plaspy.

- Plaspy escucha conexiones de dispositivos en el dominio compartido d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy procesa reportes de distintos modelos en ese puerto.
- El puerto estándar de Plaspy para reportes de dispositivos es 8888 y los dispositivos pueden configurarse para usar ese puerto.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado comienza a reportar al endpoint de Plaspy.
- Por lo general, los usuarios solo necesitan configurar el dispositivo para que apunte al endpoint de Plaspy y seleccionar TCP o UDP según lo admita el dispositivo.

## Transporte y contexto de conexión

El transporte de conexión describe cómo el FMM80A envía su carga útil del protocolo a Plaspy. El FMM80A soporta transportes celulares y se puede configurar para usar UDP o TCP según la versión de firmware y las elecciones de aprovisionamiento. La configuración correcta del transporte y del endpoint es clave para asegurar la entrega fiable de telemetría y eventos.

- Los dispositivos pueden configurarse para enviar datos a d.plaspy.com o a la dirección numérica 54.85.159.138 según las preferencias de implementación.
- El puerto usado para todos los dispositivos en Plaspy es 8888 y el FMM80A puede ajustarse para usar TCP o UDP en ese puerto.
- TCP puede elegirse cuando se requiere entrega garantizada y estado de sesión, mientras que UDP puede usarse cuando se prefiere menor sobrecarga y el dispositivo lo soporta.
- Asegúrese de que el APN y los ajustes de transporte del dispositivo estén aprovisionados para que el rastreador pueda alcanzar el endpoint de Plaspy a través de la red del operador.
- Las reglas de red a nivel de infraestructura, como firewalls, deben permitir tráfico saliente hacia el endpoint de Plaspy y el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los campos de telemetría disponibles, el comportamiento de eventos y el soporte de transportes. Confirme la versión de firmware al validar la compatibilidad.
- Las variantes de hardware o los modelos regionales pueden habilitar o deshabilitar radios o funciones BLE específicas que afectan los datos reportados a Plaspy.
- Las herramientas del fabricante y la gestión remota pueden usarse para actualizar la configuración y adaptarla a los requisitos de reporte de Plaspy.
- La elección entre TCP y UDP puede afectar las características de entrega; verifique que el dispositivo esté configurado para el transporte esperado.
- Valide siempre escenarios clave de reporte, como estado de encendido, eventos de choque y mensajes de sensores BLE durante las pruebas iniciales.
- En caso de dudas, compare los reportes en vivo del dispositivo con la ingesta en Plaspy para confirmar que los campos y eventos esperados llegan correctamente.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el FMM80A ayuda a agilizar el despliegue, resolver problemas más rápido y mantener la fiabilidad a largo plazo de las operaciones de flota en Plaspy. Tener claridad sobre el transporte, la cadencia de reportes y el manejo de eventos reduce errores de configuración y facilita el monitoreo operativo.

- Acorta el tiempo de configuración al asegurar que los dispositivos apunten al endpoint y puerto correctos de Plaspy.
- Ayuda a identificar si un problema es de conectividad o de configuración del dispositivo durante el diagnóstico.
- Garantiza que eventos esperados, como detección de choques y alertas BLE, sean capturados y procesados.
- Orienta las decisiones sobre frecuencia de reportes y selección de transporte para optimizar batería y consumo de datos.
- Facilita despliegues de firmware y cambios de configuración mediante las herramientas de gestión de Teltonika.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMM80A con Plaspy ofrece a las organizaciones un tiempo rápido de valor para rastreo vehicular, monitoreo de flotas y detección de condiciones. El factor de forma OBD II plug and play simplifica la instalación, mientras que las capacidades celulares y BLE amplían la telemetría que puede recopilar. Plaspy ingiere ubicación, eventos y datos de sensores para ofrecer mapas en vivo, alertas e informes históricos que apoyan las operaciones, la seguridad y el análisis de flotas.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para detalles más recientes sobre el protocolo específico del dispositivo, notas de firmware y documentación del fabricante, verifique la información en el sitio oficial de Teltonika https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
