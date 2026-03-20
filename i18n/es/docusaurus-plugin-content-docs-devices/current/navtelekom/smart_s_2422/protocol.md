---
slug: /navtelekom/smart_s_2422/protocol
id: smart_s_2422-protocol
sidebar_label: Protocol
title: Navtelekom - СМАРТ S-2422 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar Navtelekom СМАРТ S-2422 con Plaspy, contexto de conexión y compatibilidad
keywords:
  - protocolo Navtelekom СМАРТ S-2422
  - protocolo GPS Navtelekom S-2422
  - compatibilidad S-2422 con Plaspy
  - protocolo de rastreo Navtelekom
  - protocolo de comunicación S-2422
  - protocolo de rastreador GPS Navtelekom
  - СМАРТ S-2422 Plaspy
  - protocolo rastreo de vehículos Navtelekom
  - protocolo S-2422 gestión de flotas
  - telemetría Navtelekom S-2422
---

# Navtelekom - Protocolo СМАРТ S-2422

Esta página presenta el contexto público del protocolo para usar el rastreador Navtelekom СМАРТ S-2422 con Plaspy. Describe cómo el dispositivo suele transmitir telemetría y eventos a la plataforma y qué papel cumple el protocolo de reporte para que la ubicación, los sensores y los datos de comando estén disponibles dentro de Plaspy. El contenido ofrece orientación de alto nivel para la integración y no sustituye la documentación del fabricante.

El SMART S-2422 es un rastreador compacto GLONASS/GPS diseñado para instalaciones con alimentación permanente, con múltiples opciones de entradas y salidas, soporte RS-485 y 1-Wire, y Bluetooth 4.0 para configuración local. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Cuando sea necesario, confirme el comportamiento específico del equipo con los recursos oficiales de Navtelekom.

## Resumen del protocolo

El protocolo de reporte del rastreador es el mecanismo por el cual el S-2422 codifica y envía coordenadas GNSS, lecturas de sensores, eventos de entradas digitales y retroalimentación de control a un servidor remoto. A nivel de visión general, el protocolo permite que el equipo se identifique, reporte telemetría en intervalos configurables o por eventos, y soporte rutas de control remoto o configuración que Plaspy pueda interpretar y presentar a los usuarios.

- Permite que la ubicación GNSS y la telemetría de sensores lleguen desde el vehículo a Plaspy para paneles en tiempo real e historiales.
- Transporta eventos de entradas digitales y datos de sensores externos como telemetría de combustible vía RS-485 para reglas y alertas en la plataforma.
- Proporciona un canal para que salidas de control y acciones remotas se reflejen en los flujos de trabajo de Plaspy.
- Empaqueta la identidad y el estado del dispositivo para que Plaspy asocie los mensajes entrantes con el vehículo o activo correcto.
- Permite configuración local opcional vía Bluetooth y actualizaciones remotas del fabricante sin interrumpir el flujo de telemetría hacia Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de la red Plaspy. En la mayoría de integraciones, el usuario configura el equipo para enviar datos a Plaspy y la plataforma determina la variante de protocolo sin requerir selección manual en la interfaz.

- El dominio del servidor Plaspy es d.plaspy.com, que es el nombre DNS recomendado para el reporte de dispositivos.
- La IP del servidor Plaspy es 54.85.159.138, que puede usarse cuando se requiere una dirección numérica.
- El puerto es 8888 y es el puerto receptor compartido que usa Plaspy para la telemetría de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que el tráfico de dispositivos se centraliza en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos correctamente configurados típicamente no necesitan un ajuste de protocolo manual dentro de Plaspy.

## Transporte y contexto de conexión

El transporte y direccionamiento son los detalles básicos que un rastreador necesita para entregar datos a Plaspy. El SMART S-2422 soporta enlace celular y se configura para apuntar al endpoint de Plaspy; según el firmware del equipo puede usar UDP o TCP para enviar telemetría a la plataforma.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y las decisiones de configuración.
- Los dispositivos pueden apuntar a d.plaspy.com o 54.85.159.138 como destino del servidor para la telemetría.
- Usar el puerto compartido 8888 de Plaspy simplifica la configuración porque todos los dispositivos compatibles reportan al mismo puerto de escucha.
- La selección de transporte puede afectar semánticas de entrega como retransmisiones y ordenamiento, pero no cambia que Plaspy detectará el protocolo.
- Verifique la configuración de la red celular, APN y la provisión de la SIM en el vehículo para asegurar conectividad estable al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de los mensajes, los campos o características opcionales que afectan cómo se reporta la telemetría a Plaspy.
- Las revisiones de hardware y los paquetes opcionales de E/S pueden exponer interfaces de sensores distintas como RS-485 o 1-Wire que requieren configuración específica.
- Puede ser necesario utilizar las herramientas de configuración del fabricante o la configuración local por Bluetooth para habilitar ciertos canales de telemetría o salidas de control.
- Elegir UDP frente a TCP es una decisión a nivel de transporte que puede influir en la entrega, pero ambos son compatibles cuando el dispositivo está configurado para reportar a Plaspy en el puerto 8888.
- Confirme si el equipo requiere alguna dirección o puerto de servidor específicos del fabricante antes de apuntarlo al endpoint de Plaspy.
- En caso de duda, valide la compatibilidad y el comportamiento frente a la documentación oficial de Navtelekom y las notas de la versión del firmware.

## Por qué es importante comprender el protocolo

Entender cómo se comunica el S-2422 ayuda a garantizar un flujo de datos confiable hacia Plaspy, agiliza la resolución de problemas y respalda la planificación operativa a largo plazo de la flota. Conocer los límites del comportamiento público del protocolo y qué puede variar según el firmware evita configuraciones erróneas y reduce el tiempo de inactividad.

- Le ayuda a confirmar que el equipo reporta correctamente a Plaspy y que la telemetría GNSS y de sensores aparece como se espera.
- Facilita diagnosticar problemas de conectividad revisando transporte, DNS o IP y la configuración del puerto.
- Orienta la selección de transporte para despliegues concretos donde importen las ventajas de UDP o TCP.
- Apoya la correcta configuración de sensores externos como sondas de combustible RS-485 y el mapeo de sus lecturas en Plaspy.
- Reduce sorpresas al aplicar actualizaciones de firmware al entender qué comportamientos dependen del dispositivo y cuáles son responsabilidad de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el Navtelekom СМАРТ S-2422 con Plaspy brinda a las organizaciones visibilidad continua del vehículo, telemetría de sensores y capacidades de control remoto útiles para la gestión de flotas, monitoreo de combustible y flujos de trabajo contra robo. El hardware del dispositivo complementa los paneles y las alertas de Plaspy al aportar posición GNSS, eventos de E/S digitales y datos de sensores externos para la toma de decisiones operativas.

Conozca más sobre Plaspy y obtenga orientación para desplegar rastreadores como el SMART S-2422 en https://www.plaspy.com. Para obtener los detalles más actuales del protocolo específico del dispositivo, el registro de cambios de firmware y las utilidades de configuración, consulte la documentación oficial de Navtelekom en https://www.navtelecom.ru/ ya que el comportamiento del fabricante y las características del firmware pueden cambiar con el tiempo.
