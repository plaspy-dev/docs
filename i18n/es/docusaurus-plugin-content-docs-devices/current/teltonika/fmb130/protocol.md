---
slug: /teltonika/fmb130/protocol
id: fmb130-protocol
sidebar_label: Protocol
title: Teltonika - FMB130 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar el Teltonika FMB130 con Plaspy y garantizar telemetría GPS y conectividad confiable
keywords:
  - Protocolo Teltonika FMB130
  - Protocolo GPS Teltonika FMB130
  - Protocolo de comunicación Teltonika FMB130
  - FMB130 Plaspy
  - Protocolo de rastreo FMB130
  - Protocolo GPS Teltonika
  - Protocolo para rastreadores de vehículos
  - Seguimiento de flotas Plaspy
  - Telemetría FMB130
  - Monitoreo de combustible CAN
---

# Teltonika - Protocolo FMB130

Esta página resume el contexto público del protocolo para usar el rastreador Teltonika FMB130 con la plataforma Plaspy. Se enfoca en cómo el equipo se comunica con Plaspy en términos públicos y neutrales respecto a la implementación, para que usted entienda la conectividad, el comportamiento de reporte y las consideraciones prácticas de integración.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página describe aspectos generales y públicos del reporte del FMB130 y cómo se conecta a Plaspy, en lugar de formatos internos de paquetes o lógica privada de parseo.

## Visión general del protocolo

El protocolo de comunicación del dispositivo define cómo el FMB130 envía posiciones, telemetría y datos de sensores a un servidor remoto. Con Plaspy, los resultados importantes son actualizaciones de ubicación confiables, parámetros del vehículo provenientes del CAN, lecturas de sensores BLE y señales de control remoto disponibles en la plataforma.

- Permite que el FMB130 envíe posiciones GPS, velocidad y eventos de movimiento a Plaspy para seguimiento en tiempo real e informes históricos.
- Transporta telemetría derivada del CAN, como nivel de combustible, odómetro, RPM y temperatura del motor, hacia los paneles y reportes de Plaspy.
- Entrega telemetría de dispositivos Bluetooth Low Energy y datos de balizas para que los dispositivos BLE emparejados con el rastreador aparezcan en Plaspy.
- Soporta funciones de control remoto, como señales de bloqueo de motor cuando están autorizadas y expuestas a través de la plataforma.
- Opera sobre transportes de red estándar para que el rastreador pueda alcanzar Plaspy en el endpoint compartido de la plataforma.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes y reportes de dispositivos en un endpoint y puerto comunes, y usa rutinas de detección automatizadas para identificar el protocolo del rastreador. En la práctica esto significa que un FMB130 correctamente configurado solo necesita apuntar al endpoint de Plaspy para comenzar a comunicarse sin seleccionar manualmente el protocolo dentro de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta y comienza a reportar.
- Todos los dispositivos en Plaspy usan el mismo puerto para comunicaciones, lo que simplifica la configuración de dispositivos y las reglas de firewall.
- Normalmente los usuarios no necesitan seleccionar manualmente un protocolo en Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.
- Una identificación de dispositivo correcta y una cadencia de reporte adecuada ayudan a Plaspy a asignar los datos entrantes al registro de dispositivo correcto.

## Transporte y contexto de conexión

El contexto de conexión se refiere a cómo el FMB130 alcanza el endpoint de Plaspy en la red. El FMB130 soporta transportes celulares comunes y puede configurarse para usar UDP o TCP según la configuración del dispositivo y los requisitos del despliegue.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138.
- El puerto 8888 es el puerto compartido que utiliza Plaspy para todos los dispositivos soportados, lo que reduce diferencias de configuración en una flota mixta.
- La elección del transporte entre UDP y TCP puede afectar características de entrega como retransmisión y estado de conexión, por lo que verifique el modo de red del equipo si tiene requisitos estrictos de conectividad.
- La preparación de la red, la configuración del APN y la cobertura del operador son factores prácticos comunes que influyen en la alcanzabilidad exitosa del dispositivo al endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de reporte o agregar campos opcionales; revise las notas de firmware del dispositivo al solucionar datos inesperados.
- Las revisiones de hardware y los módulos accesorios, como adaptadores CAN o sensores BLE, pueden introducir diferencias en la telemetría disponible y las opciones de configuración.
- Herramientas del fabricante como Teltonika Configurator o FOTA WEB son formas habituales de ajustar la configuración de conexión del dispositivo y actualizar el firmware.
- La selección de transporte (UDP versus TCP) es relevante para la configuración de red y firewall cuando los dispositivos se despliegan a escala.
- Confirme el cableado de interfaz del vehículo y la compatibilidad del adaptador CAN antes de un despliegue masivo para asegurar que los parámetros esperados se reporten.
- Valide la compatibilidad y las configuraciones recomendadas contra la documentación oficial del fabricante para la versión específica del FMB130 o el paquete que posee.

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo del dispositivo y el contexto de conexión ayuda a garantizar una integración fluida con Plaspy y reduce el tiempo invertido en problemas comunes de configuración y solución de fallas.

- Asegura configuraciones de red y APN correctas para que los dispositivos alcancen de forma confiable d.plaspy.com o la IP de Plaspy en el puerto 8888.
- Ayuda a diagnosticar telemetría faltante cuando variantes de firmware o hardware cambian el conjunto de parámetros reportados.
- Orienta la decisión sobre usar UDP o TCP según necesidades de entrega y fiabilidad.
- Informa los pasos de configuración al agregar adaptadores CAN, sensores BLE o funciones de control remoto.
- Facilita la planificación de actualizaciones de firmware y la gestión remota para mantener un comportamiento de reporte consistente.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMB130 con Plaspy ofrece a flotas y operadores de equipos una solución combinada para ubicación, monitoreo de combustible, telemetría CAN e integración de sensores BLE. El enfoque del FMB130 en vehículos y sus entradas flexibles lo hacen adecuado para construcción, agricultura, flotas de renta y escenarios de cadena de frío donde la visualización, las alertas y los informes de Plaspy aportan valor operativo.

Para conocer más sobre Plaspy y cómo la plataforma funciona con dispositivos como el FMB130, visite https://www.plaspy.com. Para los detalles más actuales y específicos del protocolo, notas de firmware y herramientas de configuración, consulte https://www.teltonika-gps.com/ ya que el soporte y el comportamiento del firmware pueden cambiar con el tiempo.
