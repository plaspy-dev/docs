---
slug: /cantrack/g01/configuration
id: g01-configuration
sidebar_label: Configuration
title: CanTrack - G01 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el CanTrack G01 y conectarlo a Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración CanTrack G01
  - Instalación CanTrack G01
  - Configuración servidor G01
  - Configuración rastreador Plaspy
  - Configuración servidor Plaspy
  - Configuración GPRS rastreador G01
  - Configuración SMS y GPRS G01
  - Rastreo de vehículo G01
  - Rastreador personal G01
  - Integración G01 con Plaspy
---

# CanTrack - Configuración del G01

Esta página documenta el contexto público de configuración para usar el rastreador GPS CanTrack G01 con Plaspy. Se centra en los ajustes de servidor compartidos por Plaspy y el flujo de configuración práctico necesario para enrutar paquetes GPRS o respuestas de ubicación por SMS hacia Plaspy, de modo que el dispositivo sea visible en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración específicos del fabricante para el G01 pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor; use esta guía para las piezas relacionadas con Plaspy y confirme los comandos específicos del dispositivo con la documentación oficial de CanTrack.

## Resumen de la configuración

El objetivo de este proceso es preparar el G01 para que envíe de forma fiable datos de ubicación y telemetría a Plaspy y aparezca en la plataforma para seguimiento en tiempo real, historial y alertas. Esto incluye configurar el dispositivo para que use el endpoint de servidor compartido de Plaspy y verificar que el equipo tenga la conectividad y los ajustes necesarios para comunicarse por GPRS o SMS.

- Configurar el G01 para que reporte al endpoint del servidor de Plaspy y así Plaspy pueda recibir telemetría y actualizaciones de ubicación.
- Asegurar que el dispositivo tenga una SIM activa con datos y/o capacidad de SMS para reporte por GPRS o respaldo por SMS.
- Validar la conectividad y que el rastreador esté enviando tramas periódicas o por eventos a Plaspy.
- Confirmar el IMEI del dispositivo y cualquier paso de provisión o registro necesario en Plaspy para que el rastreador aparezca en su cuenta.
- Probar los reportes y las alertas para que eventos como exceso de velocidad y otros sean visibles en Plaspy.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes del servidor de Plaspy al configurar el G01. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se reciben paquetes.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP según la capacidad del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los paquetes

## Requisitos previos típicos

- Batería del dispositivo cargada y alimentación externa estable cuando se instale de forma permanente
- Tarjeta SIM activa con plan de datos y capacidad de SMS si se requiere respaldo por SMS
- IMEI del dispositivo disponible para identificar el rastreador en Plaspy
- Acceso al método oficial de configuración de CanTrack, como comandos SMS o el software del fabricante
- Una cuenta en Plaspy o flujo de aprovisionamiento para agregar y verificar dispositivos en la plataforma
- Cobertura GSM/GPRS básica en la ubicación de instalación

## Cómo se conecta este rastreador a Plaspy

El G01 puede entregar ubicación y telemetría a Plaspy por GPRS (enviando paquetes a un servidor) o enviando mensajes SMS con enlaces para visualización rápida. Cuando está configurado por GPRS, el dispositivo envía paquetes UDP o TCP periódicos o por eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda mapear y registrar posiciones y eventos.

- El rastreador se configura para reportar al endpoint d.plaspy.com o a la IP equivalente del servidor.
- Todo el tráfico dirigido a Plaspy se envía al puerto 8888 para que la plataforma reciba los paquetes de ubicación de forma consistente.
- Los dispositivos pueden usar UDP o TCP; elija el transporte que soporte su G01 y Plaspy detectará el protocolo automáticamente.
- Plaspy procesa los paquetes de posición entrantes y los asocia con el IMEI del dispositivo para mostrar posición en vivo e historial.
- Las alertas y banderas de evento del dispositivo se reenvían a Plaspy como telemetría para que se apliquen reglas y notificaciones.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de CanTrack o al software recomendado para el G01 (conjunto de comandos SMS o herramienta del fabricante).
2. Ingrese la dirección del servidor de Plaspy configurando d.plaspy.com o la IP 54.85.159.138 en los parámetros del dispositivo.
3. Establezca el puerto del dispositivo en 8888 como puerto de destino para los reportes GPRS.
4. Seleccione UDP o TCP si el dispositivo requiere elección de transporte; elija el protocolo que soporte su firmware G01.
5. Aplique o guarde la configuración en el dispositivo usando el método del fabricante (enviar comandos SMS o guardar en la herramienta de configuración).
6. Reinicie o corte la alimentación del rastreador si el dispositivo lo requiere después de guardar los ajustes para asegurar que los cambios se apliquen.
7. Valide que el dispositivo reporte a Plaspy comprobando que el IMEI aparezca en su cuenta de Plaspy y que se reciba telemetría de posición reciente.

## Ejemplos de comandos de configuración

Los comandos exactos para configurar el G01 varían según el firmware y el conjunto de comandos SMS/utilidad de CanTrack. Debido a que la sintaxis de los comandos del fabricante puede cambiar, verifique y utilice las instrucciones oficiales de CanTrack o los comandos SMS que acompañan a su dispositivo. Plaspy requiere que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP según lo que se soporte.

Si su G01 se configura por comandos SMS con la sintaxis de CanTrack, esos SMS típicamente establecerán la dirección del servidor, el puerto y el transporte. Conserve los marcadores de posición proporcionados por CanTrack como [apn] u otros valores de APN si aparecen en los comandos oficiales y reemplácelos con los valores del operador de su SIM.

Nota: Consulte el manual del CanTrack G01 para el formato exacto de los comandos SMS o use la herramienta de configuración de CanTrack para orientación específica del firmware.

## Notas de configuración

- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica los ajustes de destino en distintos modelos de rastreadores.
- La elección TCP versus UDP depende del firmware del G01 y de su red; pruebe ambos si el comportamiento no está claro y confíe en la detección automática de protocolo de Plaspy.
- Las revisiones de firmware y las variantes de hardware pueden cambiar la sintaxis de comandos SMS y las herramientas de configuración; confirme siempre los comandos con la documentación de CanTrack.
- Si usa configuración por SMS, esté atento a las respuestas de confirmación por SMS del dispositivo para validar los cambios.
- Después de configurar, espere varios minutos para que el dispositivo se registre en la red GPRS y comience a enviar paquetes a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack G01 con Plaspy ofrece una vía eficiente para obtener ubicación en tiempo real, telemetría básica y alertas por eventos para seguridad personal y seguimiento de activos ligeros. El reporte por GPRS del G01 y el respaldo por SMS combinan bien con la capacidad de Plaspy para ingerir telemetría, mostrar posiciones en vivo y activar reglas y notificaciones para monitoreo operativo.

Para obtener más información sobre Plaspy y los flujos de seguimiento compatibles visite https://www.plaspy.com. Los métodos de configuración específicos por dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique las instrucciones y la sintaxis de comandos más recientes en el sitio oficial de CanTrack https://www.cantrackgps.com/ antes del despliegue final.
