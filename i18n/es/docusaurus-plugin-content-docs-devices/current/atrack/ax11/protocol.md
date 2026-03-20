---
slug: /atrack/ax11/protocol
id: ax11-protocol
sidebar_label: Protocol
title: ATrack - AX11 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador OBDII ATrack AX11 con Plaspy usando ajustes compartidos y detección automática
keywords:
  - ATrack AX11 protocolo
  - ATrack AX11 protocolo GPS
  - comunicación ATrack AX11
  - rastreo ATrack AX11
  - rastreador AX11 OBDII
  - protocolo OBDII ATrack
  - compatibilidad de dispositivos Plaspy
  - protocolo de rastreadores Plaspy
  - protocolo telemático vehicular
  - protocolo GPS para flotas
---

# ATrack - Protocolo AX11

Esta página describe el contexto público del protocolo para usar el rastreador vehicular OBDII ATrack AX11 con Plaspy. Se concentra en cómo el dispositivo se comunica con Plaspy a un nivel general, qué puntos de conexión y transportes se emplean, y qué aspectos del protocolo son relevantes para una integración exitosa sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página enfatiza contexto práctico y no sensible, y recomienda consultar al fabricante para detalles específicos del dispositivo.

## Resumen del protocolo

El AX11 usa su enlace celular integrado y el receptor GNSS para enviar posición, telemetría del bus del vehículo y eventos de sensor a un servidor remoto. El protocolo del dispositivo regula la identificación, el establecimiento de sesión y la entrega de telemetría utilizable a Plaspy, de modo que la ubicación, los datos OBD/CAN y las alertas de eventos se muestren correctamente en la plataforma.

- Permite que el AX11 se identifique y mantenga una sesión con el endpoint de Plaspy para que los reportes se asocien al dispositivo correcto.
- Transporta soluciones GNSS, telemetría del bus del vehículo (OBDII y CAN) y eventos de movimiento para mapas y análisis en Plaspy.
- Soporta envíos periódicos y mensajes desencadenados por eventos, de modo que la plataforma reciba tanto actualizaciones regulares de posición como alertas de alta prioridad.
- Permite almacenamiento local de registros y cargas por lotes para manejar conectividad intermitente y garantizar continuidad de datos.
- Funciona sobre transporte estándar TCP o UDP para que el rastreador se adapte a las necesidades del operador y del operador de red.

## Cómo detecta Plaspy el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo está configurado para reportar al endpoint de Plaspy, por lo que usted normalmente no necesita seleccionar manualmente el protocolo dentro de la plataforma. La configuración correcta del dispositivo y asegurarse de que reporte a la dirección y el puerto de Plaspy son los pasos principales de configuración.

- Plaspy escucha los reportes de dispositivo en el endpoint compartido d.plaspy.com y en la IP 54.85.159.138 usando el puerto 8888.
- El AX11 puede configurarse para usar UDP o TCP en el puerto 8888 según los ajustes del equipo y el comportamiento del operador móvil.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración para flotas con modelos mixtos de rastreadores.
- Cuando el AX11 reporta al endpoint de Plaspy, la plataforma detectará y asociará el flujo de datos entrante con el registro de dispositivo correspondiente.
- Si un dispositivo no parece detectarse, verificar la dirección de reporte, la selección del transporte y la configuración del fabricante es el primer paso de resolución de problemas.

## Contexto de transporte y conexión

El contexto de conexión aclara cómo el AX11 llega hasta Plaspy y qué ajustes de red suelen estar involucrados. El dispositivo puede usar UDP o TCP en el mismo puerto y puede dirigirse al dominio o a la dirección numérica del servidor según el aprovisionamiento y las condiciones de la red.

- El AX11 puede configurarse para usar UDP o TCP en el puerto 8888 como transporte principal de datos hacia Plaspy.
- Los dispositivos pueden apuntar al dominio del servidor d.plaspy.com o a la IP 54.85.159.138 como destino.
- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles, reduciendo la variación en la configuración por dispositivo en una flota.
- Algunas implementaciones usan DNS (d.plaspy.com) para permitir enrutamiento transparente en el backend, mientras que otras utilizan la IP numérica en entornos que prefieren direccionamiento directo.
- Elija TCP cuando requiera entrega fiable y UDP cuando prefiera menor latencia y menor sobrecarga, en función del soporte del dispositivo y del operador móvil.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo se reportan campos de telemetría particulares o qué transportes son compatibles; verifique la versión de firmware del AX11 al comprobar compatibilidad.
- Las variantes de hardware y las versiones específicas por mercado (por ejemplo, variantes de bandas LTE) pueden afectar qué transportes y funciones están disponibles.
- Las opciones de configuración del fabricante, como la selección de transporte, la dirección del servidor y los intervalos de reporte, determinarán cómo se comporta el dispositivo con Plaspy.
- La selección del transporte (UDP frente a TCP) puede verse afectada por las redes de los operadores; confirme que el modo elegido funciona de manera fiable con los operadores de su flota.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo reporta al endpoint compartido, pero la dirección y las credenciales correctas en el lado del dispositivo siguen siendo esenciales.
- Para obtener detalles de dispositivo más precisos y actualizados consulte la documentación oficial de ATrack y las notas de la versión.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo del rastreador ayuda a los operadores de flota e integradores a configurar correctamente los dispositivos, resolver problemas de reporte y planificar cambios de firmware o hardware que puedan afectar la operación a largo plazo.

- Asegura que los dispositivos apunten a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para que Plaspy pueda recibir los reportes.
- Ayuda a diagnosticar problemas relacionados con el transporte al saber si el dispositivo usa UDP o TCP para enviar datos.
- Orienta las decisiones de actualización de firmware cuando el comportamiento del protocolo evoluciona entre versiones o revisiones de hardware.
- Facilita el aprovisionamiento masivo de dispositivos estandarizando la configuración del servidor y del puerto en una flota mixta.
- Mejora los tiempos de respuesta del soporte y la investigación de incidentes al acotar el alcance a la conexión o a la configuración del dispositivo cuando faltan reportes.

## Por qué usar Plaspy con este protocolo

Usar el ATrack AX11 con Plaspy ofrece un camino directo para integrar telemetría vehicular basada en OBDII, posicionamiento GNSS y eventos de movimiento en una sola plataforma de gestión de flotas. El diseño plug and play del AX11 para OBDII, su conectividad LTE lista para usar, GNSS integrado y soporte del bus vehicular lo hacen adecuado para seguimiento de flotas, análisis basados en uso y monitoreo en alquileres o movilidad compartida cuando se combina con Plaspy.

Para obtener más información sobre el despliegue de dispositivos con Plaspy, visite https://www.plaspy.com. Para los detalles más recientes sobre el protocolo específico del dispositivo, notas de firmware y orientación del fabricante, verifique la información con ATrack en https://www.atrack.com.tw/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que consultar la documentación del fabricante asegura detalles de implementación actualizados.
