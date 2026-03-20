---
slug: /bofan/pt621/protocol
id: pt621-protocol
sidebar_label: Protocol
title: Bofan - PT621 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador Bofan PT621 con Plaspy, ajustes de conexión y notas de compatibilidad
keywords:
  - Protocolo Bofan PT621
  - Protocolo GPS Bofan PT621
  - Bofan PT621 Plaspy
  - Protocolo de comunicación PT621
  - Protocolo de rastreo PT621
  - Protocolo rastreador GPS Bofan
  - Rastreo vehicular PT621
  - Rastreo de flotas PT621
  - Rastreadores compatibles con Plaspy
  - Guía de protocolo de rastreador GPS
---

# Bofan - Protocolo PT621

Esta página describe el contexto público del protocolo para integrar el rastreador GPS vehicular Bofan PT621 con Plaspy. Se concentra en cómo el dispositivo reporta posición, eventos y telemetría a Plaspy sin exponer la lógica privada del parser ni detalles confidenciales del fabricante. El PT621 es un rastreador 4G robusto diseñado para seguimiento de flotas, telemetría de sensores, alarmas e integraciones de periféricos que Plaspy puede ingerir para supervisión operativa.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. Todos los dispositivos en Plaspy usan el mismo puerto, y el comportamiento exacto del protocolo en un PT621 puede variar según la revisión de firmware, la variante de hardware y la configuración del fabricante. Para detalles específicos de protocolo y firmware consulte la documentación del fabricante.

## Descripción general del protocolo

El protocolo de comunicación PT621 es el mecanismo público que el rastreador usa para enviar ubicación, alarmas, lecturas de sensores y datos de eventos a una plataforma telemática como Plaspy. A grandes rasgos, el protocolo define cómo el dispositivo se identifica, marca los tiempos y codifica la telemetría, y cómo señala alarmas o eventos de periféricos para que el servidor presente información útil a los operadores de flota.

- Permite actualizaciones de ubicación periódicas y basadas en eventos para que Plaspy pueda mapear la posición y el movimiento del vehículo.
- Transporta eventos de alarma y estado como SOS, geocerca, encendido/apagado de ignición y umbrales de sensores hacia Plaspy.
- Lleva telemetría de sensores (combustible, temperatura, estado de puertas) y eventos de periféricos (activación de cámara, ID de conductor por RFID) para integración en reportes.
- Permite al servidor correlacionar la identidad del dispositivo y las marcas de tiempo con la telemetría recibida para un historial y alertas precisos.
- Soporta canales de reporte alternativos como SMS cuando los datos celulares no están disponibles, según la configuración del dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de dispositivos en un endpoint público compartido y determina automáticamente el protocolo del rastreador, por lo que los usuarios normalmente no necesitan seleccionar un protocolo dentro de la plataforma. Cuando un PT621 está configurado para reportar a Plaspy, se conectará al mismo endpoint usado por otros rastreadores compatibles y Plaspy encaminará y decodificará los mensajes entrantes según el formato detectado.

- El dominio del servidor Plaspy es d.plaspy.com, que es el endpoint DNS recomendado para el reporte de dispositivos.
- La IP del servidor Plaspy es 54.85.159.138 y es una dirección pública a la que se pueden apuntar los dispositivos cuando no se usa DNS.
- Plaspy usa un único puerto para todos los dispositivos soportados, lo que simplifica la configuración y el despliegue.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint, por lo que la selección manual de protocolo generalmente no es necesaria.
- Si un dispositivo no aparece en Plaspy tras la configuración, confirme que está apuntando al endpoint correcto y que utiliza el transporte soportado.

## Transporte y contexto de conexión

El PT621 puede usar distintos métodos de transporte según el modo configurado y la región. Para la conectividad con Plaspy, el dispositivo puede estar configurado para usar UDP o TCP en el puerto común de Plaspy; los operadores deben elegir el transporte que coincida con el firmware del equipo y las condiciones de la red.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- El equipo puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que facilita la configuración en flotas mixtas.
- La conectividad celular (4G/GPRS) es la vía principal para telemetría en tiempo real, con SMS como respaldo para alertas críticas.
- Verifique el modo de transporte (UDP vs TCP) que el firmware del PT621 espera al apuntar el dispositivo a Plaspy para garantizar la entrega confiable.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento exacto de reporte y los campos de telemetría disponibles; siempre verifique la versión de firmware del dispositivo al validar compatibilidad.
- Revisiones de hardware o variantes regionales del PT621 pueden exponer interfaces distintas o mapeos de sensores que afectan los datos reportados.
- Las configuraciones del fabricante, como intervalo de reporte, umbrales de alarma y modo de transporte, pueden alterar la frecuencia y el formato en que los datos llegan a Plaspy.
- Algunas funciones de periféricos, como múltiples entradas de cámara o voz bidireccional, dependen de la plataforma y pueden requerir configuración específica en Plaspy para mostrar medios o registros de llamada.
- Cuando no esté disponible DNS, los dispositivos pueden apuntar a la IP del servidor 54.85.159.138 en lugar de d.plaspy.com, pero confirme primero el enrutamiento de red y las políticas del operador móvil.
- Pruebe un dispositivo representativo en su red antes de un despliegue masivo para confirmar la telemetría, las alarmas y el comportamiento de transporte esperados.

## Por qué es importante conocer el protocolo

Entender el protocolo de comunicación PT621 a un nivel práctico ayuda a agilizar el alta de dispositivos, reducir tiempos de diagnóstico y mejorar la confiabilidad operativa al integrar con Plaspy. Saber cómo el rastreador reporta identidad, eventos y telemetría hace más eficiente la configuración y el análisis de incidentes.

- Asegura que los dispositivos estén configurados para apuntar al endpoint correcto y al transporte adecuado para que los datos lleguen de forma confiable.
- Facilita el diagnóstico de brechas de visibilidad como actualizaciones de ubicación faltantes, alarmas ausentes o telemetría retrasada.
- Permite a los equipos cotejar las salidas esperadas de sensores y disparadores de eventos con lo que Plaspy muestra en mapas y reportes.
- Apoya la planificación de redundancias y comportamientos de respaldo como alertas por SMS cuando se pierde conectividad de datos.
- Ayuda a comunicarse con el fabricante o el distribuidor cuando un comportamiento no coincide con la documentación.

## Ventajas de usar Plaspy con este protocolo

Usar el Bofan PT621 con Plaspy ofrece visibilidad centralizada de la ubicación del vehículo, alarmas y telemetría de sensores que las flotas necesitan para seguridad y eficiencia operativa. La capacidad del PT621 para reportar posición GPS, entradas digitales, eventos de cámara y un conjunto amplio de alarmas se complementa con la ingestión y presentación de esos datos por parte de Plaspy para generar alertas relevantes, reportes históricos y monitoreo en tiempo real.

Si está evaluando el despliegue de dispositivos, el modelo de endpoint compartido de Plaspy y la detección automática de protocolo reducen los pasos de configuración necesarios para incorporar unidades PT621 a gran escala. Para saber más sobre Plaspy y cómo integrar la telemetría PT621 en sus flujos de trabajo de flota visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información específica más reciente del protocolo y las notas de firmware con el fabricante en https://www.bofancloud.com/.
