---
slug: /supermate/d12_g/protocol
id: d12_g-protocol
sidebar_label: Protocol
title: Supermate - D12-G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Supermate D12 G y cómo se comunica con Plaspy
keywords:
  - protocolo Supermate D12-G
  - protocolo GPS Supermate D12-G
  - protocolo de comunicación Supermate D12-G
  - protocolo de rastreo Supermate D12-G
  - compatibilidad tracker Supermate Plaspy
  - Supermate D12-G Plaspy
  - guía protocolo rastreador GPS
  - protocolo seguimiento vehicular Supermate
  - seguimiento de activos Supermate D12-G
  - compatibilidad protocolo Plaspy
---

# Supermate - Protocolo D12-G

Esta página describe el contexto público del protocolo para usar el rastreador GPS Supermate D12 con Plaspy. Se centra en cómo se comunica el dispositivo en términos generales, en las configuraciones de conexión que Plaspy provee y en qué revisar al integrar el D12 en una implementación de Plaspy. El objetivo es explicar el papel del protocolo y las consideraciones de despliegue sin exponer detalles propietarios o sensibles de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este informa al servidor de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión del hardware y la implementación del fabricante, por lo que el comportamiento que observe en su unidad D12 puede diferir del de otras unidades. Para la conexión con Plaspy, el dominio público del servidor es d.plaspy.com y la IP pública es 54.85.159.138. Plaspy escucha en el puerto 8888 y los dispositivos pueden estar configurados para usar UDP o TCP en ese puerto. Todos los dispositivos usan el mismo puerto y Plaspy realiza la detección automática del protocolo una vez que el dispositivo reporta al endpoint.

## Resumen del protocolo

El protocolo del D12 define cómo el dispositivo informa su identidad, posición y estado para que Plaspy pueda interpretar y almacenar datos útiles de ubicación y eventos. En el lado del equipo, el protocolo regula qué información se envía, con qué frecuencia se reporta y qué tipos de eventos (por ejemplo, movimiento, geocercas y SOS) se transmiten.

- Identifica el dispositivo ante el servidor para que Plaspy asocie los mensajes con el activo y la cuenta correctos.
- Transporta coordenadas de ubicación, marcas de tiempo y campos de estado básicos necesarios para el mapeo y el historial.
- Envía mensajes basados en eventos como alertas SOS, notificaciones de entrada y salida de geocercas, y eventos de manipulación o energía.
- Soporta reportes periódicos y mensajes heartbeat para que Plaspy pueda monitorear la presencia y conectividad del dispositivo.
- Permite comandos de configuración remota cuando están soportados por el fabricante y la variante de firmware.

## Cómo detecta Plaspy el protocolo

Plaspy usa un endpoint público y un puerto compartido para el tráfico entrante de dispositivos y determina automáticamente qué protocolo de rastreador se está usando según el patrón de datos recibido. En la mayoría de los casos el usuario no necesita seleccionar un protocolo dentro de Plaspy si el D12 está configurado para reportar al endpoint de Plaspy.

- El endpoint público de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy escucha en un único puerto para todos los dispositivos compatibles para simplificar la configuración; ese puerto es el 8888.
- Se aceptan y analizan automáticamente los dispositivos que reportan al endpoint usando UDP o TCP en el puerto 8888.
- Cuando el dispositivo está correctamente configurado para apuntar al endpoint de Plaspy, normalmente no es necesario seleccionar el protocolo en la plataforma.
- Si un dispositivo no aparece reportando correctamente, verifique la dirección del servidor y los ajustes de transporte del dispositivo, y consulte los registros del equipo o la guía del fabricante.

## Transporte y contexto de conexión

La capa de transporte y los detalles de destino definen cómo el D12 llega hasta Plaspy. El rastreador puede configurarse para usar UDP o TCP según el firmware y la configuración elegida en el despliegue. Asegurar que el dispositivo pueda alcanzar el servidor de Plaspy y que el operador permita el transporte elegido es clave para un reporte confiable.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El transporte soportado por Plaspy para todos los dispositivos es UDP o TCP en el puerto 8888.
- Usar el puerto compartido para todos los dispositivos simplifica la configuración de firewall y red en el lado del servidor.
- Confirme que el rastreador tenga permitido abrir sesiones salientes GPRS o LTE y que la configuración APN de la SIM sea correcta.
- Considere el comportamiento de NAT y firewalls en la ruta entre el dispositivo y Plaspy al solucionar problemas de conectividad.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la frecuencia de mensajes, los eventos disponibles y campos opcionales; siempre verifique la versión de firmware del equipo al realizar diagnósticos.
- Las revisiones de hardware o variantes del modelo por parte del fabricante pueden introducir pequeñas diferencias de protocolo entre unidades.
- Las herramientas de configuración suministradas por el fabricante o los comandos SMS pueden variar por región y firmware y afectar cómo el dispositivo reporta a los servidores.
- La selección de transporte entre UDP y TCP es configurable en muchos dispositivos y puede afectar la confiabilidad y las características de entrega de paquetes.
- Valide la compatibilidad del dispositivo y las configuraciones recomendadas contra la documentación oficial del fabricante antes de un despliegue masivo.
- Restricciones del operador de red o el aprovisionamiento de la SIM pueden afectar la capacidad del dispositivo para alcanzar el endpoint de Plaspy.

## Por qué es importante entender el protocolo

Conocer lo básico del protocolo de comunicación del D12 ayuda a garantizar una integración fluida con Plaspy, facilita la resolución de problemas y mejora la operación a largo plazo. Entender qué eventos y modos de reporte usa el rastreador ayuda a alinear el comportamiento del dispositivo con sus necesidades operativas.

- Asegura que el dispositivo esté configurado para enviar los tipos de eventos correctos al servidor para monitoreo y alertas.
- Ayuda a diagnosticar problemas de conectividad confirmando la dirección del servidor, el transporte y la configuración APN.
- Mejora la eficiencia de batería y reportes al elegir intervalos de reporte y disparadores de eventos adecuados.
- Permite un manejo correcto de geocercas y SOS al verificar cómo el dispositivo envía esos eventos.
- Reduce el tiempo de despliegue al alinear las configuraciones del dispositivo con las expectativas de Plaspy desde el inicio.

## Por qué usar Plaspy con este protocolo

Usar el Supermate D12 con Plaspy ofrece a las organizaciones una forma práctica de recopilar datos de ubicación y eventos en tiempo real para gestión de activos, supervisión de flotas y vigilancia de seguridad. La detección automática de protocolos y el enfoque de puerto compartido de Plaspy reducen los pasos de configuración inicial y simplifican despliegues a gran escala donde pueden coexistir distintos modelos de rastreadores.

Plaspy escucha los reportes de dispositivos en d.plaspy.com y 54.85.159.138 en el puerto 8888 y acepta UDP o TCP en ese puerto. Debido a que Plaspy usa un único puerto para todos los dispositivos y realiza detección automática de protocolo, integrar el D12 normalmente solo requiere configurar el dispositivo para que reporte al endpoint de Plaspy con el transporte y los ajustes APN correctos. Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Verifique siempre los detalles más recientes del protocolo específico del dispositivo, el comportamiento del firmware y las indicaciones del fabricante en el sitio oficial de Supermate http://www.gps-summit.com/ ya que el soporte de protocolo y la implementación del equipo pueden cambiar con el tiempo.
