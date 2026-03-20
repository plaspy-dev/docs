---
slug: /tzone/avl_08/protocol
id: avl_08-protocol
sidebar_label: Protocol
title: TZone - AVL-08 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador TZone AVL-08 con el servidor Plaspy y contexto de conexión
keywords:
  - protocolo TZone AVL-08
  - protocolo GPS TZone AVL-08
  - compatibilidad TZone AVL-08 con Plaspy
  - protocolo de rastreo AVL-08
  - comunicación GPS TZone
  - rastreo de flotas AVL-08
  - guía de protocolo de rastreador GPS
  - rastreo vehicular AVL-08
  - integración de protocolo TZone
  - soporte de rastreadores Plaspy
---

# TZone - Protocolo AVL-08

Esta página describe el contexto público del protocolo para usar el rastreador GPS TZone AVL-08 con Plaspy. Se concentra en los detalles generales de comunicación y conexión relevantes para integrar el AVL-08 en soluciones de seguridad vehicular, seguimiento de activos y gestión de flotas, sin exponer mecanismos propietarios ni información privada del fabricante. El AVL-08 ofrece modos de ubicación puntual y seguimiento continuo, además de diversas opciones de alarma y entradas que hacen que sus datos sean útiles para la telemetría operativa.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente los protocolos cuando un equipo reporta a la plataforma. El AVL-08 puede configurarse para reportar a un nombre DNS o a una dirección IP, y el comportamiento exacto de los mensajes puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Comprender este contexto de comunicación facilita conseguir reportes confiables y un mapeo correcto de las funciones dentro de Plaspy.

## Resumen del protocolo

A grandes rasgos, el protocolo de comunicación define cómo el AVL-08 se identifica ante un servidor, envía ubicación y estado, y notifica eventos de alarma o entradas. Esta sección explica el papel general de esos mensajes para que Plaspy reciba y muestre telemetría útil, sin reproducir detalles privados de los paquetes.

- Proporciona identificación del dispositivo y reportes de latido para que Plaspy asocie los datos entrantes con un activo AVL-08.
- Transmite la ubicación GPS y datos de movimiento usados tanto para ubicaciones puntuales como para seguimiento continuo.
- Informa sobre alarmas y estados de entradas como exceso de velocidad, baja batería, geocerca, SOS y manipulación, de modo que Plaspy pueda generar alertas.
- Permite telemetría opcional como kilometraje, nivel de combustible y señales de sensores cuando estén disponibles y habilitadas en el dispositivo.
- Soporta cambios de configuración y comandos remotos según el transporte permitido por el dispositivo y la configuración del fabricante.

## Cómo Plaspy detecta el protocolo

Plaspy recibe telemetría en un endpoint compartido y utiliza los datos entrantes para identificar el tipo de rastreador y activar el manejador de dispositivo adecuado. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el AVL-08 está configurado para reportar al endpoint de Plaspy usando el transporte compatible.

- Plaspy escucha en un único puerto acordado para todos los dispositivos soportados, lo que consolida el tráfico entrante.
- Cuando un AVL-08 reporta al endpoint de Plaspy, la plataforma reconoce el patrón del mensaje y asigna el dispositivo al manejador correcto.
- Por lo general, los usuarios configuran el dispositivo para que apunte al servidor Plaspy y no seleccionan un protocolo desde la interfaz de Plaspy.
- La detección automática reduce los pasos de configuración y ayuda a que dispositivos de distintos fabricantes coexistan en el mismo puerto del servidor.
- Si un dispositivo usa una variante de firmware poco común, revisar la configuración y las notas del fabricante facilita asegurar un reporte correcto a Plaspy.

## Transporte y contexto de conexión

El AVL-08 puede enviar datos GPRS a un nombre DNS o a una dirección IP y puede configurarse para UDP o TCP según el firmware y las opciones del dispositivo. Para la integración con Plaspy, utilice el endpoint compartido y el puerto de Plaspy para que el dispositivo se conecte de forma confiable a la plataforma.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- Como alternativa se puede usar la IP pública del servidor Plaspy en 54.85.159.138.
- La plataforma acepta conexiones de dispositivos en el puerto 8888 y todos los dispositivos Plaspy usan el mismo puerto.
- El AVL-08 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y el transporte elegido.
- Apuntar el rastreador al DNS o a la IP de Plaspy y asegurarse de que el transporte coincida con la configuración del equipo son pasos comunes de configuración.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la frecuencia de mensajes, los campos disponibles o el formato exacto de los reportes; siempre verifique la versión de firmware del dispositivo al solucionar problemas.
- Revisiones de hardware o módulos externos opcionales (lectores RFID, cámaras, registro en SD, etc.) pueden modificar el conjunto de telemetría que envía el dispositivo.
- Los comandos de configuración del fabricante y los parámetros por defecto como APN o parámetros de reporte varían según la región y la distribución por resellers.
- La elección entre TCP y UDP afecta la semántica de entrega y debe coincidir con la configuración del dispositivo usada para reportar a Plaspy.
- En caso de duda, valide la configuración del equipo con ejemplos oficiales de TZone y confirme que el endpoint y el puerto del servidor estén correctamente establecidos.
- Plaspy detecta el protocolo automáticamente, pero asegurar que el dispositivo apunte al endpoint y transporte correctos reduce el tiempo de integración.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación a nivel conceptual ayuda a asegurar que el AVL-08 envíe los datos adecuados a Plaspy y que las funciones de la plataforma se correspondan con las capacidades del dispositivo. Este conocimiento es útil para la configuración, la operación continua y el diagnóstico cuando la telemetría reportada difiere de lo esperado.

- Acelera la configuración inicial al confirmar que el endpoint y el transporte están correctamente definidos en el equipo.
- Simplifica la resolución de problemas al acotar si la incidencia está en el dispositivo, la red o el servidor.
- Permite determinar qué funciones del equipo, como alarmas, entradas de sensores y periféricos externos, serán utilizables en Plaspy.
- Mejora la fiabilidad a largo plazo al indicar cuándo las actualizaciones de firmware o cambios de hardware pueden requerir ajustes de configuración.
- Ayuda en la planificación de integraciones donde se requiere telemetría adicional o funciones de control remoto.

## Por qué usar Plaspy con este protocolo

Usar el TZone AVL-08 con Plaspy ofrece a las organizaciones visibilidad centralizada de la ubicación de vehículos, eventos de alarma y telemetría relevante como kilometraje y estado de combustible cuando esté disponible. El enfoque de Plaspy de consolidar el tráfico de dispositivos en un endpoint compartido y detectar automáticamente el protocolo del rastreador facilita agregar unidades AVL-08 a una flota sin gestionar puertos por dispositivo.

Si desea conocer más sobre Plaspy y cómo puede gestionar rastreadores AVL-08 a escala, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la documentación específica del protocolo y las notas de firmware más recientes en el sitio del fabricante en http://www.tzonedigital.com/ antes de finalizar el despliegue.
