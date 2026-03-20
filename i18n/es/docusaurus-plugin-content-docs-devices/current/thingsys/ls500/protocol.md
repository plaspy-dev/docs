---
slug: /thingsys/ls500/protocol
id: ls500-protocol
sidebar_label: Protocol
title: ThingSys - LS500 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto del protocolo público del ThingSys LS500 y cómo comunica con Plaspy usando ajustes de conexión compartidos
keywords:
  - protocolo ThingSys LS500
  - protocolo GPS ThingSys LS500
  - protocolo de rastreo LS500
  - comunicación ThingSys LS500
  - rastreador GPS LS500 Plaspy
  - compatibilidad protocolo GPS ThingSys
  - protocolo limitador de velocidad LS500
  - integración ThingSys LS500
  - protocolo de dispositivo Plaspy
  - protocolo GPS vehicular ThingSys
---

# ThingSys - Protocolo LS500

Esta página describe el contexto público del protocolo para usar el ThingSys LS500 con Plaspy. Se centra en cómo se comunica el LS500 en términos generales, qué ajustes de conexión deben configurarse para enviar datos a Plaspy y qué debe considerar al integrar el equipo. El contenido está pensado para ayudar a gerentes de flota, integradores y técnicos a preparar el dispositivo para reportar a Plaspy sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo comienza a reportar a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que estas notas ofrecen una guía general basada en la descripción del LS500 más que en detalles internos de firmware.

## Resumen del protocolo

El protocolo de comunicación del LS500 regula cómo el dispositivo envía información de posición, estado y eventos a un servidor remoto, y cómo recibe comandos o configuraciones remotas cuando está permitido. En el contexto de Plaspy, el protocolo actúa como transporte de telemetría y mensajes de control estructurados que la plataforma usa para mostrar ubicación, estado del limitador de velocidad y otros datos del vehículo.

- Permite que el LS500 envíe fijaciones GPS, velocidad y estados a un punto final remoto para monitoreo de flota.
- Incluye identificación y datos de sesión para que el servidor receptor asocie los reportes con un dispositivo específico.
- Transporta indicadores de estado del equipo que ayudan a Plaspy a presentar la información del limitador de velocidad y el estado operativo.
- Soporta tanto el reporte periódico como flujos opcionales de configuración remota cuando el dispositivo y el operador lo permiten.
- Permite la integración del LS500 con sensores externos y módulos de conectividad mientras reenvía la telemetría consolidada a Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy acepta reportes de dispositivos en un punto final compartido e identifica automáticamente el protocolo del rastreador en función de los mensajes entrantes y del comportamiento esperado del equipo. En la mayoría de instalaciones, una vez que el LS500 está configurado para enviar datos al punto final de Plaspy, no es necesario seleccionar manualmente el protocolo en la plataforma.

- Plaspy usa un único endpoint de servidor para reportes en d.plaspy.com y también acepta conexiones directas a 54.85.159.138.
- Todos los dispositivos reportan al mismo puerto en Plaspy, lo que simplifica la configuración e incorporación de equipos.
- El puerto estándar de reporte para Plaspy es 8888 y el LS500 puede configurarse para usar ese puerto.
- Plaspy puede aceptar datos por TCP o UDP según la configuración del dispositivo y las condiciones de la red.
- Si el LS500 apunta al endpoint de Plaspy y envía reportes válidos, Plaspy detectará y procesará el protocolo automáticamente.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el LS500 establece el transporte de red para entregar telemetría a Plaspy. El LS500 soporta conectividad GSM GPRS y puede configurarse para usar UDP o TCP como transporte. Una configuración correcta de transporte y dirección es esencial para un reporte confiable a Plaspy.

- El LS500 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las preferencias del sitio.
- Los equipos pueden apuntar al hostname d.plaspy.com o a la dirección numérica 54.85.159.138.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles para simplificar la puesta en marcha entre modelos.
- Elija UDP cuando busque menor sobrecarga y latencia; utilice TCP cuando el firmware del dispositivo y la red prefieran un transporte orientado a conexión.
- Verifique APN, servicio de la SIM y disponibilidad de señal GSM para que el LS500 pueda mantener la conexión con el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el timing de mensajes, campos opcionales o los transportes soportados; anote siempre la versión de firmware del LS500 al diagnosticar problemas.
- Revisiones de hardware y módulos opcionales como Bluetooth o entradas/salidas adicionales pueden modificar cómo el dispositivo reporta datos auxiliares al servidor.
- Los comandos de configuración del fabricante o ajustes en el dispositivo determinan si se usa UDP o TCP y qué dirección de servidor se emplea.
- Las condiciones de red y las restricciones del operador móvil pueden afectar la entrega de mensajes; valide los ajustes de SIM y APN para la región de despliegue.
- Confirme opciones de firmware o localización específicas de la región que ThingSys pueda publicar para el LS500.
- Utilice el manual oficial del dispositivo de ThingSys para verificar cadenas de configuración exactas y comportamientos específicos de firmware antes de un despliegue amplio.

## Por qué importa entender el protocolo

Comprender cómo el LS500 se comunica con Plaspy ayuda a garantizar una incorporación predecible, entrega de telemetría confiable y una resolución de problemas más rápida cuando ocurren incidencias. Aunque Plaspy detecte el protocolo automáticamente, conocer el transporte y el comportamiento de reporte reduce el riesgo de integración y el tiempo de inactividad operativo.

- Facilita validar que el dispositivo apunta a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que está usando el transporte previsto.
- Acelera la resolución cuando falta telemetría al focalizar las comprobaciones en APN, estado de la SIM, tipo de transporte y versión de firmware.
- Garantiza que los cambios de configuración como selección de transporte o actualización de la dirección del servidor se apliquen uniformemente en toda la flota.
- Apoya la planificación de actualizaciones de firmware y revisiones de hardware que puedan modificar el comportamiento de reporte.
- Mejora la coordinación entre técnicos de campo y soporte de Plaspy mediante el uso de ajustes de conexión comunes y verificables.

## Por qué usar Plaspy con este protocolo

Combinar el ThingSys LS500 con Plaspy ofrece a las organizaciones visibilidad consolidada de vehículos, telemetría del limitador de velocidad y la capacidad de monitorear parámetros operativos desde una sola plataforma. La detección automática de protocolos de Plaspy y el uso uniforme de puertos simplifican la incorporación en flotas grandes y despliegues con dispositivos mixtos.

Si desea saber más sobre cómo Plaspy trabaja con dispositivos como el ThingSys LS500 y revisar las capacidades de la plataforma, visite https://www.plaspy.com. Para obtener los detalles específicos de protocolo más actuales, notas de firmware e instrucciones de configuración consulte la documentación oficial de ThingSys en https://www.thingsys.com/; el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que es importante verificar la información vigente con el fabricante.
