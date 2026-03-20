---
slug: /trackerking/g109/protocol
id: g109-protocol
sidebar_label: Protocol
title: TrackerKing - G109 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo TrackerKing G109 para compatibilidad con Plaspy y seguimiento vehicular confiable
keywords:
  - Protocolo TrackerKing G109
  - Rastreador GPS G109
  - TrackerKing G109 Plaspy
  - Protocolo de comunicación G109
  - Protocolo de rastreo G109
  - Protocolo GPS TrackerKing
  - Compatibilidad G109 Plaspy
  - Protocolo rastreador GPS para vehículos
  - Protocolo seguimiento de flotas
  - Integración de rastreador GPS
---

# TrackerKing - Protocolo G109

Esta página ofrece una descripción pública y de alto nivel del contexto de comunicación para usar el TrackerKing G109 con Plaspy. Explica cómo el dispositivo informa posición y telemetría a Plaspy y qué papel desempeña el protocolo de reporte para entregar datos de seguimiento útiles para vehículos y motocicletas.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo activo cuando un equipo reporta a la plataforma. El comportamiento exacto del protocolo, las funciones disponibles y la cadencia de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público del protocolo más que en detalles internos del firmware.

## Resumen del protocolo

El protocolo de reporte del rastreador define el método del dispositivo para enviar posición, estado y eventos desde el G109 a un servidor remoto como Plaspy. En la práctica, este protocolo regula cómo el equipo se identifica, comunica telemetría y alertas, y soporta la retransmisión tras zonas sin cobertura para que los operadores reciban datos continuos e históricos en Plaspy.

- Permite que el G109 entregue posición GPS, estado de encendido, alarmas y kilometraje a Plaspy para mapeo en tiempo real y reproducción histórica.
- Transporta notificaciones de eventos como vibración, salida de geocerca, exceso de velocidad y falla de alimentación para que Plaspy pueda activar alertas y flujos de trabajo.
- Soporta retransmisión tras zonas sin cobertura o registro local de trayectos para que los registros almacenados puedan subirse cuando se recupere la cobertura.
- Incluye campos de identificación y estado del dispositivo que permiten a Plaspy asociar los datos entrantes con el vehículo y la configuración correctos.
- Opera sobre canales de transporte estándar, de modo que el mismo endpoint de Plaspy puede atender a distintos modelos de rastreadores sin selección manual.

## Cómo detecta Plaspy el protocolo

Plaspy acepta reportes entrantes de dispositivos en el endpoint compartido y determina automáticamente el protocolo del rastreador según los datos que envía el dispositivo. En la mayoría de los casos, el instalador o la configuración del equipo solo necesita apuntar el G109 al endpoint de Plaspy; Plaspy luego asocia la transmisión con el dispositivo correcto e interpreta los datos para mapeo, alertas e historial.

- Plaspy recibe datos en un único endpoint uniforme, por lo que normalmente no es necesario elegir un protocolo dentro de la plataforma.
- Cuando un G109 configurado correctamente reporta a Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y procesa los reportes de posición y eventos.
- La configuración adecuada del equipo para enviar reportes al endpoint de Plaspy es el requisito habitual para la detección e integración exitosa.
- Si un dispositivo envía campos estándar de telemetría e identificación, Plaspy puede adjuntar esos registros al vehículo registrado y generar alertas y registros de viaje.

## Contexto de transporte y conexión

Los detalles de conexión describen cómo el G109 llega a los servidores de Plaspy más que los formatos internos de los mensajes. El G109 puede configurarse para usar transporte UDP o TCP según las capacidades del equipo y la región. Plaspy proporciona un único endpoint de servidor para los reportes de dispositivos: domain d.plaspy.com and IP 54.85.159.138 on port 8888, y todos los dispositivos en Plaspy usan el mismo puerto para los reportes entrantes.

- Los dispositivos pueden configurarse para reportar por UDP o TCP al puerto 8888 según la preferencia del instalador y el soporte del equipo.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para la configuración directa del endpoint.
- El puerto usado para los reportes de dispositivos en Plaspy es 8888 y el mismo puerto se emplea entre los dispositivos compatibles.
- Asegurarse de que el dispositivo apunte a d.plaspy.com o a la IP indicada y emplee el protocolo de transporte correcto es el requisito principal de conectividad.
- Consideraciones de red como enrutamiento del operador, ajustes de APN y reglas de firewall pueden afectar la conectividad y deben validarse durante la instalación.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar qué campos de telemetría o eventos envía una unidad G109 específica, por lo que la versión de firmware influye en el comportamiento exacto.
- Revisiones de hardware o variantes regionales pueden alterar funciones disponibles como bandas 4G soportadas o cableado de E/S, lo que afecta la integración.
- Las opciones de configuración del fabricante pueden determinar si el G109 usa UDP o TCP y qué dirección de servidor reporta.
- El comportamiento de retransmisión tras zonas sin cobertura y del registro local puede ser útil pero variar según el firmware y la configuración del equipo.
- Confirme que el endpoint de reporte del equipo esté configurado al servidor y puerto de Plaspy para permitir la detección y el procesamiento automáticos.
- Siempre valide la compatibilidad y el soporte de funciones frente a las notas de la última versión del fabricante o la documentación oficial.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el G109 ayuda a garantizar reportes fiables a Plaspy, agiliza la resolución de problemas y permite un comportamiento predecible en alertas y flujos de inmovilización. Un conocimiento práctico del protocolo y del contexto de transporte reduce el tiempo de puesta en marcha y ayuda a los operadores a planificar mantenimiento y actualizaciones de firmware.

- Garantiza que el instalador configure el equipo al endpoint y transporte correctos de Plaspy para que los datos lleguen como se espera.
- Facilita la resolución de problemas de conectividad y datos faltantes al revisar el transporte, el APN y si el equipo está reportando a d.plaspy.com o a la IP de Plaspy.
- Ayuda a planificar actualizaciones de firmware o cambios de hardware que puedan afectar qué campos de telemetría están disponibles.
- Mejora la confianza en el manejo de alarmas y en los flujos de control remoto cuando se sabe que el equipo envía los eventos requeridos.
- Contribuye a validar que la retransmisión tras zonas sin cobertura y la reproducción histórica estén disponibles y funcionando.

## Ventajas de usar Plaspy con este protocolo

Usar el TrackerKing G109 junto con Plaspy ofrece a los operadores una configuración de rastreo resiliente que combina las características del hardware G109 con la ingestión centralizada, el mapeo y el sistema de alertas de Plaspy. La batería de respaldo de larga duración del G109, su amplio rango de voltaje y entradas de vehículo como detección de ACC e inmovilización remota complementan la monitorización en tiempo real y los informes históricos de Plaspy para apoyar la gestión de flotas y los flujos contra robo.

Para conocer más sobre cómo Plaspy puede gestionar rastreo, alertas e informes históricos para dispositivos como el G109 visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente sobre protocolo específico del dispositivo y las notas de firmware con el fabricante en https://trackerking.cn/.
