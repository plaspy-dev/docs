---
slug: /bofan/pt_600/protocol
id: pt_600-protocol
sidebar_label: Protocol
title: Bofan - PT-600 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Bofan PT-600 y cómo se comunica con Plaspy para GPS, cámara y telemetría
keywords:
  - protocolo Bofan PT 600
  - protocolo GPS Bofan PT 600
  - compatibilidad Bofan PT 600 Plaspy
  - protocolo de comunicación PT 600
  - integración rastreador PT 600
  - protocolo rastreador GPS con cámara
  - rastreo de vehículos Plaspy
  - rastreo de flotas PT 600
  - protocolo RFID identificación de conductor
  - protocolo de telemetría y alarmas
---

# Bofan - Protocolo PT-600

Esta página describe el contexto público del protocolo para integrar el rastreador con cámara GPS Bofan PT-600 con Plaspy. Se concentra en cómo se comunica el equipo en términos generales, qué tipos de datos suele reportar y qué ajustes de conexión utiliza Plaspy para recibir esos informes. El objetivo es ofrecer a gestores de flota y técnicos la claridad necesaria para la configuración y la resolución de problemas sin exponer detalles internos del fabricante.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo comienza a reportar a la plataforma. El comportamiento exacto del protocolo en el PT-600 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para comportamientos específicos de comandos o cambios de firmware, consulte la documentación del fabricante para obtener los detalles más actuales.

## Resumen del protocolo

El PT-600 envía la posición del vehículo, telemetría y datos multimedia a un servidor remoto usando el protocolo de reporte soportado por el dispositivo. Ese protocolo define cómo la unidad codifica la posición GPS/GLONASS, telemetría como combustible y temperatura, eventos de identificación de conductor por RFID, eventos de alarma y disparadores para fotos o subidas de video de la cámara.

- Transporta informes de posición GPS y GLONASS que Plaspy usa para ubicación en tiempo real e historial.
- Transmite telemetría y estados como nivel de combustible, temperatura y eventos de entradas/salidas para que Plaspy muestre salud del vehículo y alarmas.
- Envía disparadores y referencias multimedia para fotos y clips de video generados por el PT-600.
- Reporta eventos de identificación de conductor por RFID para que Plaspy pueda correlacionar conductores con viajes.
- Entrega notificaciones de alarma y eventos como SOS, exceso de velocidad, geocercas y cambios de entradas para alertas oportunas en la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartido para los reportes entrantes y determina automáticamente qué protocolo está usando un rastreador cuando se conecta y comienza a reportar. Este comportamiento reduce la necesidad de seleccionar manualmente el protocolo dentro de la plataforma cuando el dispositivo está configurado correctamente.

- Configure el PT-600 para que envíe reportes al endpoint de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy recibe reportes en el puerto 8888 y usa la conexión entrante para identificar el protocolo de reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del equipo y la accesibilidad al servidor.
- Debido a la detección automática de protocolo, por lo general no será necesario elegir manualmente un protocolo en la plataforma si el reporte está configurado correctamente.
- Si un dispositivo no aparece en línea, verifique que el rastreador esté enviando al endpoint correcto y usando el transporte adecuado (UDP o TCP) y que el firmware esté configurado para reportar.

## Transporte y contexto de conexión

El PT-600 puede configurarse para usar transporte UDP o TCP según el firmware del equipo y las opciones de configuración. Plaspy acepta ambos transportes en el mismo puerto, por lo que la selección en el dispositivo determina el tipo de conexión.

- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- El puerto usado por todos los dispositivos y por Plaspy es 8888, y Plaspy acepta tanto UDP como TCP en ese puerto.
- Elija UDP cuando el firmware del dispositivo recomiende reportes de menor overhead, o TCP cuando el dispositivo prefiera entrega confiable y comportamiento de sesión.
- Asegúrese de que los firewalls de la red permitan tráfico saliente del dispositivo hacia d.plaspy.com o la IP del servidor en el puerto 8888 para el transporte elegido.
- Confirme que las configuraciones APN y GPRS en el PT-600 coincidan con los requisitos de su operador para que el dispositivo pueda alcanzar el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué funcionalidades se reportan o cómo se formatean eventos específicos. Confirme la versión de firmware al diagnosticar datos faltantes.
- Las revisiones de hardware o módulos opcionales (cámara, RFID, sensor de temperatura) afectan qué telemetría y alarmas puede enviar el PT-600.
- Las opciones de configuración del fabricante determinan si multimedia y monitoreo de voz se envían por GPRS o requieren manejo separado.
- La selección de transporte entre UDP y TCP se configura en el dispositivo y puede impactar la confiabilidad y el comportamiento de sesión.
- Valide siempre que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para alcanzar Plaspy.
- Al integrar accesorios adicionales o cableado IO personalizado, confirme cómo se mapean esas entradas a eventos reportados en la documentación del fabricante.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el PT-600 ayuda a garantizar una configuración fiable, acelerar la resolución de problemas y obtener un comportamiento predecible de funciones como capturas de cámara, identificación de conductor y alarmas cuando se usan con Plaspy.

- Identificación más rápida de problemas de configuración al confirmar endpoint, transporte y ajustes de puerto.
- Mejor diagnóstico de telemetría faltante como combustible o temperatura al comparar los reportes esperados con los campos de la plataforma.
- Expectativas claras sobre el comportamiento multimedia y de eventos para que flujos de cámara y alarmas sean visibles en Plaspy.
- Toma de decisiones más informada al seleccionar actualizaciones de firmware o variantes de hardware para habilitar las funciones requeridas.
- Colaboración más efectiva con soporte del fabricante al referenciar el contexto de reporte del dispositivo y el comportamiento observado.

## Por qué usar Plaspy con este protocolo

Usar el PT-600 con Plaspy brinda a las organizaciones visibilidad centralizada de la ubicación del vehículo, identificación del conductor, evidencia multimedia y telemetría en una sola plataforma. Las capacidades de cámara, RFID y alarma del PT-600 complementan los reportes y alertas de Plaspy para que los operadores de flota puedan monitorear seguridad, cumplimiento de rutas y condiciones del activo.

Para saber más sobre el uso de Plaspy con el Bofan PT-600 visite el sitio de Plaspy en https://www.plaspy.com. Para la referencia más actualizada sobre el protocolo específico del dispositivo, notas de firmware y detalles de hardware, verifique la información en el sitio del fabricante https://www.bofancloud.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
