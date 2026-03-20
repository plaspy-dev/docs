---
slug: /condor/tg_512/protocol
id: tg_512-protocol
sidebar_label: Protocol
title: Condor - TG-512 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar Condor TG-512 con Plaspy, con ajustes de conexión y guía de compatibilidad
keywords:
  - Protocolo Condor TG-512
  - GPS Condor TG-512
  - Protocolo TG-512 Plaspy
  - Protocolo de rastreador GPS Condor
  - Protocolo de comunicación TG-512
  - Protocolo de rastreo Condor
  - Compatibilidad de dispositivos Plaspy
  - Rastreador GPS Plaspy
  - Rastreo de vehículos Condor TG-512
  - Integración Condor TG-512
---

# Condor - Protocolo TG-512

Esta página documenta el contexto público del protocolo para usar el rastreador Condor TG-512 con Plaspy. Explica cómo se comunica el equipo con Plaspy a un nivel general, qué ajustes de conexión se emplean y qué consideraciones prácticas importan al integrar el dispositivo en una flota o en un despliegue de monitoreo de activos. La información está dirigida a instaladores, gestores de flota y operadores técnicos que evalúan o configuran dispositivos TG-512 para su compatibilidad con Plaspy.

El TG-512 es un rastreador compacto para vehículos y maquinaria con antenas GPS y GPRS integradas, además de interfaces como RS-232, 1-wire y múltiples entradas y salidas de propósito general. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para detalles específicos de firmware consulte la documentación y notas de versiones de Condor.

## Visión general del protocolo

El protocolo de reporte es el conjunto de reglas que el TG-512 utiliza para enviar posiciones GNSS, telemetría y datos de eventos a través de la red celular hacia un servidor telemático. En términos prácticos, el protocolo garantiza que el dispositivo se identifique, reporte ubicación y estado, y entregue eventos de sensores y E/S para que Plaspy pueda procesar y mostrar información útil a los operadores.

- Transmite ubicación GNSS y telemetría con marcas de tiempo por GPRS a un endpoint remoto para la ingestión por Plaspy.
- Envía datos de eventos y E/S procedentes de entradas, salidas, RS-232 y 1-wire para que los eventos del vehículo y los sensores aparezcan en Plaspy.
- Incluye identificación y estado del dispositivo para que Plaspy asocie los datos entrantes con el registro de activo correcto.
- Permite control remoto y flujos de trabajo basados en eventos cuando el firmware del dispositivo admite y habilita salidas o comandos.
- Funciona junto con la configuración celular, como APN y parámetros del operador, para establecer la conexión de datos necesaria para el reporte.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los rastreadores en un endpoint público común y usa esa conexión compartida para identificar y procesar los reportes de los dispositivos. La mayoría de los usuarios no necesita seleccionar manualmente un protocolo dentro de la plataforma Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy con los ajustes de red correctos.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138 como endpoint alternativo accesible.
- El puerto es 8888 para reportes y gestión de dispositivos.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según lo admita el equipo y las condiciones de la red.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el TG-512 alcanza a Plaspy a través de la red celular y qué opciones de transporte son las más habituales. Comprender el comportamiento de transporte ayuda con la configuración del APN, las reglas de firewall y la puesta en marcha inicial.

- Los dispositivos suelen usar GPRS para establecer una sesión IP y luego abrir una conexión TCP o UDP al servidor.
- El TG-512 puede apuntarse al dominio d.plaspy.com o directamente a la IP 54.85.159.138 al configurar el endpoint de reporte.
- El puerto 8888 es el puerto compartido para todos los dispositivos Plaspy y debe permitirse a través de cualquier firewall de red o restricciones del operador relevantes.
- Según el firmware y la configuración, el rastreador puede preferir UDP por menor sobrecarga o TCP por una conexión persistente.
- Verifique la configuración del APN y los datos del operador para asegurarse de que el dispositivo pueda alcanzar el endpoint de Plaspy desde la red móvil local.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware entre unidades TG-512 pueden afectar qué funciones y comportamientos de reporte están disponibles.
- Las revisiones de hardware y el soporte de accesorios opcionales (por ejemplo sensores externos o módulos telemáticos) pueden cambiar cómo se presenta la información a Plaspy.
- Las configuraciones del fabricante, como intervalos de reporte por defecto o preferencias de transporte, pueden variar y deben verificarse con la documentación de Condor.
- La selección de transporte (UDP frente a TCP) puede influir en la confiabilidad y la latencia según la red móvil y la configuración del dispositivo.
- La detección automática de Plaspy cubre los modos de reporte más comunes, pero sigue siendo necesaria la configuración correcta de endpoint, APN y transporte en el dispositivo.
- Valide la compatibilidad comprobando el número de serie del dispositivo, la versión de firmware y la documentación más reciente de Condor para notas específicas del modelo.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico de cómo se comunica el TG-512 ayuda a agilizar la incorporación de dispositivos, reducir el tiempo de resolución de problemas y mejorar la confiabilidad a largo plazo en Plaspy.

- Acelera la configuración inicial asegurando que endpoint, APN y transporte se configuren correctamente antes del despliegue.
- Mejora la resolución de problemas cuando un dispositivo no aparece en Plaspy al centrar las comprobaciones en variables de red, transporte y firmware.
- Ayuda a planificar actualizaciones de firmware y revisiones de hardware al identificar qué funciones dependen de comportamientos específicos del protocolo.
- Permite un cableado correcto y la selección adecuada de sensores para que los datos reportados desde RS-232, 1-wire y los puertos de E/S sean significativos en Plaspy.
- Apoya decisiones operacionales como intervalos de reporte y gestión del consumo de datos para planes celulares.

## Por qué usar Plaspy con este protocolo

Usar el Condor TG-512 con Plaspy ofrece una vía práctica para obtener ubicación en tiempo real, monitoreo de eventos y agregación de telemetría para gestores de flota y activos. Las interfaces y el soporte de sensores del TG-512 permiten capturar eventos de vehículo, telemetría e identificaciones sencillas de conductor o sensor, mientras que Plaspy agrega esos datos en mapas, alertas e informes útiles para operaciones y seguridad.

Para obtener más información sobre cómo Plaspy funciona con dispositivos como el TG-512 visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información específica del protocolo y del firmware con el fabricante en https://condorskyseeker.com/ para obtener la guía más actualizada.
