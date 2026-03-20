---
slug: /lk_gps/lk960/protocol
id: lk960-protocol
sidebar_label: Protocol
title: LK-GPS - LK960 Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público para el LK GPS LK960 y su comunicación con Plaspy para ubicación y alarmas
keywords:
  - Protocolo LK-GPS LK960
  - Protocolo GPS LK-GPS LK960
  - Protocolo LK-GPS LK960 para Plaspy
  - Protocolo de comunicación LK-GPS LK960
  - Protocolo de rastreo LK-GPS LK960
  - Protocolo de rastreador LK-GPS
  - Compatibilidad de dispositivo Plaspy
  - Rastreador GPS vehicular LK960
  - Corte remoto de combustible LK-GPS
  - Alarma SOS LK-GPS
---

# LK-GPS - Protocolo LK960

Esta página resume el contexto público del protocolo para usar el rastreador cableado para autos LK-GPS LK960 con Plaspy. Está pensada para usuarios técnicos, integradores y administradores de flotas que necesiten entender a alto nivel cómo el equipo se comunica con Plaspy para el envío de ubicación, alarmas como SOS y vibración, y operaciones remotas como el corte de combustible o de energía.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo comienza a reportar en la plataforma. El LK960 es compatible con redes 2G y 4G y ofrece funciones como alarma SOS, corte remoto de combustible y electricidad, alarma por vibración, indicadores LED y reporte a plataforma. El comportamiento exacto de los mensajes y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el comportamiento puede diferir entre unidades y a lo largo del tiempo.

## Visión general del protocolo

El protocolo de comunicación del LK960 provee el canal de reporte y control que permite a Plaspy recibir posición, estado y eventos de alarma, así como enviar solicitudes de control cuando el dispositivo lo soporta. Define cómo el rastreador empaqueta la ubicación, el estado del equipo y las alarmas para enviarlas a un endpoint de servidor y cómo acepta comandos remotos cuando corresponde.

- Permite el envío regular de posiciones GPS y actualizaciones periódicas de estado a Plaspy
- Transmite señales de alarma como SOS, vibración, exceso de velocidad y pérdida de alimentación
- Permite acciones de control remoto soportadas por el equipo, como armado, corte de combustible y recuperación mediante comandos de la plataforma
- Proporciona identificación y estado del dispositivo para que Plaspy asocie los reportes con el activo correcto
- Soporta reportes a través de redes celulares para que el LK960 alcance el endpoint de Plaspy para monitoreo de flota

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones y reportes entrantes en un único endpoint y puerto compartido y empareja el tráfico entrante con los protocolos de dispositivo compatibles de manera automática. Cuando un LK960 está configurado para reportar al endpoint de Plaspy, la plataforma identifica el protocolo del equipo y procesa sus mensajes sin que el usuario tenga que seleccionar manualmente un protocolo dentro de la plataforma.

- Plaspy usa un endpoint de servidor compartido para recibir datos de rastreadores y realiza detección automática de protocolo
- El dominio del servidor de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138
- Plaspy escucha en el puerto 8888 y todos los dispositivos en Plaspy usan ese mismo puerto para reportar
- Si el LK960 está configurado para enviar datos al endpoint de Plaspy, la plataforma normalmente detectará el protocolo correcto de forma automática
- La selección manual de protocolo dentro de Plaspy suele no ser necesaria si el dispositivo apunta correctamente al endpoint de Plaspy

## Transporte y contexto de conexión

Los detalles de transporte describen cómo los dispositivos LK960 se conectan al endpoint de Plaspy más que el formato exacto de los mensajes sobre la red. El LK960 puede usar transporte IP estándar sobre redes celulares, y Plaspy soporta los transportes más comunes para que los equipos se comuniquen de forma confiable con la plataforma.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la provisión
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles para simplificar la configuración y el enrutamiento
- La conectividad de red depende de la SIM del rastreador, la configuración APN y la generación celular disponible en la ubicación de la unidad, como 2G o 4G
- La elección entre UDP o TCP puede estar influida por la configuración del dispositivo y las condiciones de la red, pero el puerto de destino permanece constante

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden añadir, eliminar o cambiar opciones de mensajes y comportamientos de alarma que afecten lo que el rastreador envía y cómo Plaspy lo interpreta
- Las revisiones de hardware y accesorios opcionales pueden modificar funciones disponibles, como entradas de alarma, cableado para corte de combustible o indicadores LED
- Variaciones del fabricante o personalizaciones regionales de firmware a veces alteran el tiempo de mensajes o los transportes soportados
- Elegir UDP frente a TCP puede afectar las características de entrega en algunas redes y debe coincidir con la configuración del dispositivo
- Verifique siempre que el dispositivo reporte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para garantizar compatibilidad con Plaspy
- Pruebe un conjunto reducido de dispositivos en su entorno antes de un despliegue masivo para confirmar el comportamiento esperado

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación del LK960 es útil para la configuración, la resolución de problemas y la confiabilidad a largo plazo cuando el equipo se usa con Plaspy. Saber cómo el rastreador reporta posición, alarmas y estado ayuda a los equipos a confirmar la configuración correcta, acelerar el diagnóstico de problemas de conectividad y asegurar que las alarmas y controles remotos funcionen según lo esperado.

- Verifica que el LK960 esté apuntando al endpoint y puerto correctos de Plaspy para que los reportes lleguen de forma confiable
- Ayuda a solucionar eventos faltantes o retrasados revisando el transporte, la APN y el estado de registro
- Asegura que tipos de alarma como SOS y vibración sean reconocidos y enrutados correctamente en Plaspy
- Confirma que funciones remotas como el corte y la recuperación de combustible estén disponibles con el firmware instalado
- Permite planificar actualizaciones de firmware, cambios de hardware o de operadora que puedan afectar la comunicación

## Por qué usar Plaspy con este protocolo

Usar el LK-GPS LK960 con Plaspy ofrece a las organizaciones una manera centralizada de recoger datos de ubicación, alarmas y estado de dispositivo en una sola plataforma. Plaspy gestiona la configuración de endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador, de modo que los operadores pueden enfocarse en flujos de trabajo de flota, alertas y reportes operativos en lugar de la gestión por puerto de cada dispositivo.

Si desea saber más sobre Plaspy y cómo funciona con dispositivos como el LK960 visite https://www.plaspy.com. Para obtener los detalles más actuales y específicos de protocolo y firmware del dispositivo, por favor verifique la información con el fabricante en https://www.lk-gps.com ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
