---
slug: /teltonika/fmc00a/protocol
id: fmc00a-protocol
sidebar_label: Protocol
title: Teltonika - FMC00A Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Teltonika FMC00A para Plaspy, con ajustes de conexión y notas prácticas de integración
keywords:
  - Protocolo Teltonika FMC00A
  - Protocolo GPS FMC00A
  - Rastreador Teltonika Plaspy
  - Protocolo de comunicación FMC00A
  - Protocolo rastreador OBD Teltonika
  - Rastreo de flotas FMC00A
  - Compatibilidad de dispositivos Plaspy
  - Integración Teltonika FMC00A
  - Guía de protocolo rastreador GPS
  - Protocolo de rastreo vehicular
---

# Teltonika - Protocolo FMC00A

Esta página describe el contexto público del protocolo para utilizar el rastreador Teltonika FMC00A con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy a alto nivel y qué esperar al configurar un FMC00A para seguimiento vehicular en tiempo real y reporte de datos OBD. El FMC00A es un rastreador OBD II plug and play con conectividad 4G LTE Cat 1, capacidad para leer parámetros OBD del fabricante como odómetro y nivel de combustible, soporte multi-GNSS y un conjunto de funciones telemáticas útiles para operaciones de flota.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El FMC00A puede configurarse para reportar por TCP o UDP al servidor de Plaspy y el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para el comportamiento específico del dispositivo consulte la documentación y las notas de versión de Teltonika cuando estén disponibles.

## Resumen del protocolo

El protocolo de comunicaciones del FMC00A define cómo el dispositivo se identifica, reporta posición y datos del vehículo, y notifica eventos a un servicio backend como Plaspy. A un nivel público, este protocolo permite la entrega segura y confiable de telemetría y parámetros derivados del OBD para que Plaspy presente información accionable sobre los vehículos.

- Identificación del equipo y establecimiento inicial de sesión para asociar los reportes a un IMEI u otro identificador del dispositivo
- Reportes periódicos y por eventos que incluyen posición GPS y datos del vehículo con marcas de tiempo
- Entrega de parámetros OBD OEM, como odómetro y nivel de combustible, cuando están disponibles desde el vehículo
- Reporte de eventos y alarmas para incidentes como encendido/apagado, remolque o detección de colisión
- Soporte tanto para reportes en vivo como para modos de reporte reducido o de reposo para conservar energía

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente qué protocolo usa un rastreador cuando comienza a reportar. Esta detección automática evita que la mayoría de usuarios tengan que seleccionar manualmente un protocolo dentro de Plaspy si el FMC00A está configurado para reportar al endpoint de Plaspy.

- Todos los dispositivos reportan al mismo puerto del servidor Plaspy, lo que simplifica la configuración
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138; se utiliza el puerto 8888 para conexiones de dispositivos
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según la compatibilidad del equipo y las condiciones de la red
- Cuando el rastreador se conecta al endpoint de Plaspy, la plataforma inspecciona los datos entrantes y asigna automáticamente el dispositivo al manejador de protocolo correcto
- La configuración típica requiere apuntar el FMC00A a d.plaspy.com o a la IP de respaldo y asegurarse de seleccionar el transporte correcto en el dispositivo

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el FMC00A entrega paquetes a Plaspy más que el contenido de los paquetes en sí. El FMC00A soporta conectividad celular y puede configurarse para usar transporte UDP o TCP hacia el endpoint de Plaspy en el puerto 8888.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 como IP de respaldo
- El rastreador puede usar UDP o TCP en el puerto 8888 según la configuración y el comportamiento de la red del operador
- Usar el nombre de dominio permite conmutación por DNS y facilita el aprovisionamiento del dispositivo, mientras que la dirección IP es útil cuando el DNS está restringido
- NAT celular, cortafuegos del operador y ajustes de APN pueden afectar la conectividad y deben validarse durante el despliegue
- Los modos de ahorro de energía del FMC00A influyen en la frecuencia con que el dispositivo abre conexiones y transmite datos

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar funciones soportadas, campos de datos o el comportamiento de eventos; confirme la compatibilidad para una versión de firmware específica
- Las revisiones de hardware pueden afectar sensores disponibles o el acceso a parámetros OBD para algunas marcas y modelos de vehículo
- Las herramientas de configuración del fabricante, como Teltonika Configurator y los mecanismos FOTA, controlan los ajustes del dispositivo y deben usarse para asegurar la configuración correcta de reporte
- La elección del transporte entre UDP y TCP puede influir en la semántica de entrega y debe corresponder a los requisitos de la red
- La disponibilidad de parámetros OBD OEM depende del vehículo y del soporte del ECU; no todos los vehículos exponen el mismo conjunto de campos OEM
- Valide cualquier requisito de funciones avanzadas, como detección de interferencias o sensores de choque, según la documentación del producto Teltonika

## Por qué es importante entender el protocolo

Comprender cómo se comunica el FMC00A ayuda a optimizar la configuración, solucionar problemas de conexión y garantizar una operación confiable a largo plazo con Plaspy. Tener expectativas claras sobre transporte, identificación y disponibilidad de funciones reduce problemas de integración y acelera los despliegues.

- Confirme que el rastreador esté apuntando a d.plaspy.com o a 54.85.159.138 y usando el puerto 8888
- Ajuste la configuración de transporte del dispositivo según las restricciones de su red y operador para obtener la mejor fiabilidad
- Verifique conjuntos de funciones de firmware y revisiones de hardware antes de asumir la disponibilidad de un parámetro OBD específico
- Use identificadores de dispositivo y los reportes del servidor para confirmar el registro exitoso y el flujo de datos hacia Plaspy
- Considere el comportamiento de ahorro de energía y reposo al planear intervalos de reporte y expectativas de monitoreo

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMC00A con Plaspy ofrece una vía práctica para combinar rastreo OBD plug and play con un backend en la nube que reconoce automáticamente los reportes del dispositivo y presenta datos del vehículo y OEM para monitoreo de flotas. El soporte del FMC00A para parámetros OBD OEM, multi GNSS y su amplio conjunto de funciones lo hacen adecuado para flotas mixtas que requieren visibilidad continua e información operativa.

Para conocer más sobre Plaspy y cómo funciona con dispositivos como el FMC00A visite https://www.plaspy.com. Para detalles más actuales del protocolo del dispositivo, notas de firmware y especificaciones de hardware verifique la documentación en el sitio del fabricante https://www.teltonika-gps.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden evolucionar con el tiempo.
