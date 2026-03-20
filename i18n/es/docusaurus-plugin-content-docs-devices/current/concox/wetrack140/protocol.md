---
slug: /concox/wetrack140/protocol
id: wetrack140-protocol
sidebar_label: Protocol
title: Concox - WeTrack140 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo Concox WeTrack140 y cómo transmite datos GPS y telemetría a Plaspy
keywords:
  - Protocolo Concox WeTrack140
  - Protocolo GPS Concox WeTrack140
  - Protocolo de seguimiento WeTrack140
  - Compatibilidad WeTrack140 Plaspy
  - Protocolo rastreador GPS Concox
  - Protocolo AIS140 WeTrack140
  - Seguimiento vehicular WeTrack140
  - Seguimiento de flotas Concox WeTrack140
  - Protocolo de dispositivo Plaspy
  - Protocolo telemático Concox
---

# Concox — Protocolo WeTrack140

Esta página describe el contexto público del protocolo para usar el Concox WeTrack140 con Plaspy. Se concentra en cómo el dispositivo comunica con Plaspy los casos básicos de rastreo y telemetría, y qué comportamientos de reporte puede esperar en despliegues habituales. Cuando aporta claridad, el documento sitúa esos comportamientos dentro del conjunto de funciones del WeTrack140, incluyendo posicionamiento GNSS, entradas telemáticas, corte remoto, botón de pánico y monitoreo de voz.

Plaspy acepta conexiones de todos los rastreadores soportados mediante un endpoint y puerto compartidos, y detecta automáticamente el protocolo del dispositivo cuando éste reporta a la plataforma. Para el WeTrack140 esto normalmente implica configurar el equipo para reportar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 en el puerto 8888 usando UDP o TCP según la configuración del dispositivo. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que confirme detalles específicos del dispositivo con el fabricante cuando sea necesario.

## Descripción general del protocolo

El protocolo de comunicación del WeTrack140 define cómo el rastreador envía datos GNSS, estado y telemetría a un servidor remoto y cómo responde el servidor cuando está soportado. En el contexto de Plaspy, el objetivo del protocolo es entregar a tiempo la ubicación, velocidad, estados de sensores, eventos como pánico o corte remoto y otros elementos de estado del vehículo para que Plaspy pueda indexar, presentar y actuar sobre esa información.

- Habilitar el envío de posiciones GNSS en tiempo real y subidas periódicas de posición para reproducción de rutas y seguimiento en vivo.
- Entregar estados de telemetría y entradas digitales como puerta abierta, encendido y sensores auxiliares para que Plaspy muestre el contexto de eventos.
- Transmitir eventos discretos como pulsaciones del botón de pánico, activaciones de corte remoto y alertas de conducta de conducción para manejo inmediato.
- Soportar la identificación del dispositivo y el establecimiento de sesión para que Plaspy asocie los datos entrantes con el vehículo y la cuenta correctos.
- Usar un transporte de red que permita al rastreador empujar datos a Plaspy sin necesidad de sondeo manual desde el servidor.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint de servidor compartido y determina automáticamente qué protocolo soportado está usando un dispositivo, por lo que en la mayoría de los despliegues no es necesario seleccionar un protocolo específico dentro de Plaspy. La configuración correcta del dispositivo para que reporte al endpoint de Plaspy es el requisito principal para la detección automática y la ingestión exitosa.

- Plaspy escucha en un único puerto para todos los dispositivos, lo que simplifica la configuración y el onboarding de rastreadores.
- Los dispositivos deben configurarse para reportar a d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888.
- El WeTrack140 puede comunicarse con el endpoint de Plaspy usando UDP o TCP según la preferencia de dispositivo y red.
- Cuando el dispositivo está correctamente apuntado a Plaspy, la plataforma detectará automáticamente el formato de reporte y asociará la telemetría con el registro de dispositivo correspondiente.
- Rara vez se requiere seleccionar manualmente el protocolo dentro de Plaspy si el rastreador está configurado correctamente para reportar al servidor de Plaspy.

## Transporte y contexto de conexión

La elección de transporte afecta la forma en que el WeTrack140 envía datos a Plaspy pero no cambia el propósito general del protocolo. El dispositivo soporta conectividad IP sobre GSM y puede configurarse para usar UDP o TCP en el puerto de Plaspy. Conocer el contexto de conexión ayuda con reglas de firewall, planificación de red y configuración del dispositivo.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para enrutamiento directo por IP.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, que es 8888, facilitando la configuración de firewall y NAT.
- El WeTrack140 puede configurarse para usar UDP o TCP en el puerto 8888 según los ajustes del equipo y la preferencia del operador.
- Elija UDP para menor sobrecarga cuando la fiabilidad se gestione a nivel de aplicación, o TCP cuando el firmware del dispositivo o la red requieran un transporte orientado a conexión.
- Asegúrese de que el tráfico saliente de datos móviles del dispositivo permita conectividad hacia d.plaspy.com o la IP 54.85.159.138 en el puerto 8888 para que la telemetría llegue a Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué funciones están disponibles y cómo el dispositivo codifica telemetría o eventos particulares; confirme el firmware con el que vienen sus unidades.
- Revisiones de hardware y periféricos opcionales pueden añadir o quitar entradas y salidas, como entradas digitales adicionales, monitoreo de voz o cableado para corte remoto.
- Diferencias en la implementación del fabricante pueden afectar el timing, umbrales de eventos o campos opcionales incluidos en los reportes; consulte las notas del fabricante para detalles.
- La elección de transporte entre UDP y TCP puede estar limitada por el firmware o por comportamientos de la red del operador en su región de despliegue.
- La validación de compatibilidad debería incluir alimentar un dispositivo de prueba, configurarlo para reportar al servidor de Plaspy y confirmar que Plaspy recibe e interpreta la telemetría y los eventos esperados.
- Al integrar sensores adicionales o cableados personalizados, verifique cómo se representan esas señales en la telemetría del dispositivo y cómo Plaspy las mapea a entradas.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del WeTrack140 ayuda a asegurar una configuración fiable del dispositivo, una resolución de problemas eficiente y una operación predecible a largo plazo con Plaspy. Saber cómo el rastreador reporta posición y eventos permite a gestores de flota e integradores alinear la configuración del dispositivo, la conectividad al servidor y los flujos operativos.

- Reduce el tiempo de incorporación aclarando qué ajustes deben modificarse en el dispositivo para reportar a Plaspy.
- Acelera la resolución de problemas cuando la telemetría no llega, al centrar las verificaciones en transporte, DNS y configuración de eventos del dispositivo.
- Ayuda a validar que eventos regulatorios u operativos como reportes AIS140, eventos de pánico y señales de corte remoto se transmiten y reciben según lo esperado.
- Informa la planificación de red, incluyendo expectativas de uso de datos móviles y reglas de firewall para permitir tráfico hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Apoya la fiabilidad a largo plazo al enfatizar la importancia de la gestión del firmware y la validación periódica contra la documentación del fabricante.

## Por qué usar Plaspy con este protocolo

Usar el WeTrack140 con Plaspy ofrece a las organizaciones una vía práctica para consolidar el rastreo GNSS en tiempo real, señales telemáticas y controles orientados a eventos en una sola plataforma de gestión de flotas. Plaspy ingiere la telemetría del WeTrack140 para ofrecer ubicación en vivo, historial de rutas, alertas y paneles que respaldan operaciones de flota, monitoreo de cumplimiento y programas de seguridad.

Plaspy simplifica la incorporación de dispositivos al ofrecer un endpoint y puerto compartidos para todos los rastreadores soportados y detección automática de protocolo, de modo que las flotas pueden centrarse en la configuración operativa en lugar de los detalles del protocolo. Para obtener más información sobre Plaspy y cómo apoya el rastreo de flotas y la telemetría, visite https://www.plaspy.com. Para los detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware y documentación oficial del WeTrack140, verifique la información con el fabricante en https://www.iconcox.com/ ya que los detalles de implementación pueden cambiar con el tiempo.
