---
slug: /castel/sat_802/protocol
id: sat_802-protocol
sidebar_label: Protocol
title: Castel - SAT-802 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Castel SAT-802 y su comunicación con Plaspy para rastreo global de activos
keywords:
  - Castel SAT-802
  - protocolo Castel SAT-802
  - rastreador GPS Castel
  - SAT-802 GPRS Iridium
  - rastreador Castel Plaspy
  - protocolo de rastreo SAT-802
  - rastreo de activos Castel
  - compatibilidad SAT-802
  - protocolo de comunicación Castel
  - rastreo de vehículos Castel
---

# Castel - Protocolo SAT-802

Esta página explica el contexto público del protocolo para usar el rastreador Castel SAT-802 con Plaspy. Se centra en cómo el dispositivo se comunica a alto nivel, qué puntos de conexión y opciones de transporte son relevantes, y qué debe considerar al integrar el SAT-802 en Plaspy para el rastreo global de activos. El SAT-802 combina conectividad Iridium SBD y GPRS en un diseño de doble módulo para ofrecer cobertura casi global en la monitorización de activos de alto valor.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. Para Plaspy, el endpoint de servidor es d.plaspy.com (también accesible en 54.85.159.138) y Plaspy escucha en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888. El comportamiento exacto del protocolo para el SAT-802 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que se recomienda validar el comportamiento a nivel de dispositivo con la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

A nivel de protocolo, el SAT-802 utiliza su pila de comunicaciones para elegir un canal disponible, identificarse ante un servidor remoto y transmitir posición e información de estado que plataformas de flotas como Plaspy pueden procesar. El diseño de doble canal del dispositivo (GPRS primero, Iridium como respaldo) busca maximizar el alcance y minimizar el uso de satélite cuando hay cobertura GSM.

- Permite que el rastreador informe posición, marcas de tiempo y estado a un servidor remoto para la supervisión de la flota.
- Transporta información de identificación del dispositivo que permite a Plaspy asociar los mensajes entrantes con el activo correcto.
- Soporta transmisión bidireccional para que la plataforma pueda enviar configuraciones o comandos cuando el dispositivo y la red lo permiten.
- Selecciona el canal de transporte más adecuado según la cobertura, priorizando GSM e usando Iridium para alcance global.
- Proporciona telemetría y latidos (heartbeat) que ayudan a Plaspy a mantener la disponibilidad y el estado de salud del dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los datos de los dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador en la mayoría de los casos. Si el SAT-802 está configurado para reportar al endpoint de Plaspy, por lo general no es necesario seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy acepta conexiones entrantes de rastreadores en d.plaspy.com y 54.85.159.138 en el puerto 8888.
- Todos los dispositivos soportados por Plaspy usan el mismo número de puerto, lo que simplifica la configuración.
- Plaspy realiza la detección de protocolo en las transmisiones entrantes, por lo que normalmente solo necesita apuntar el dispositivo al endpoint de Plaspy.
- Una identificación y configuración correctas en el SAT-802 aseguran que Plaspy pueda enlazar los reportes con el registro de activo correspondiente.
- Si el dispositivo admite múltiples transportes, configure el transporte principal para que apunte al endpoint de Plaspy y permita la detección automática.

## Contexto de transporte y conexión

La configuración de conexión del SAT-802 depende de las redes disponibles y de la configuración del dispositivo. El rastreador puede usar GPRS cuando esté disponible y cambiar a Iridium SBD para entrega por satélite; además puede utilizar UDP o TCP para alcanzar el endpoint de Plaspy.

- El dispositivo puede configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy escucha en el puerto 8888 para el tráfico entrante de dispositivos; este puerto se comparte entre todos los dispositivos soportados.
- El SAT-802 puede usar UDP o TCP en el puerto 8888 según la configuración del dispositivo y las condiciones de la red.
- Elija el transporte compatible tanto con el dispositivo como con la ruta de red hacia Plaspy para asegurar una entrega confiable.
- La latencia de red y las diferencias de MTU entre los canales GPRS e Iridium pueden afectar los tiempos de entrega, pero ambos canales entregan los mensajes al mismo endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de los mensajes, los campos de telemetría soportados o la lógica de selección de canal; confirme la versión de firmware al solucionar problemas.
- Las revisiones de hardware pueden introducir variaciones en el comportamiento radioeléctrico o en los perfiles de consumo que afectan las decisiones de conectividad entre GSM e Iridium.
- La configuración o provisión en el lado del fabricante puede habilitar o deshabilitar ciertas funciones de reporte; consulte la documentación actual de Castel para los valores predeterminados del dispositivo.
- La preferencia de transporte (UDP vs TCP) debe verificarse en los ajustes del dispositivo y alinearse con restricciones de la red como NAT o reglas de firewall.
- Debido a la doble conectividad del SAT-802, el comportamiento puede variar al cambiar entre GPRS y satélite, lo que puede afectar la cadencia de reporte.
- Valide los identificadores del dispositivo y el formato de los reportes al incorporar un dispositivo para asegurar que Plaspy asocie correctamente los mensajes entrantes.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el SAT-802 y cómo Plaspy recibe esos datos facilita una configuración correcta, agiliza la resolución de problemas y genera un comportamiento operativo más predecible en campo. Conocer los puntos de conexión y el papel de la variación de firmware y hardware reduce el tiempo de puesta en marcha y previene problemas comunes de integración.

- Asegura que el rastreador esté configurado para reportar a d.plaspy.com o a la IP de Plaspy para permitir la detección automática.
- Ayuda a diagnosticar fallas de conectividad distinguiendo entre problemas de transporte y comportamientos a nivel de dispositivo.
- Permite decisiones informadas sobre la selección del modo de transporte según cobertura y requisitos de latencia.
- Facilita la interpretación de la telemetría reportada cuando cambios de firmware modifican campos o tiempos.
- Mejora la confiabilidad a largo plazo al alinear perfiles de potencia y reporte del dispositivo con las capacidades esperadas de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el Castel SAT-802 con Plaspy ofrece a los operadores de flotas y activos una forma directa de combinar cobertura global con visibilidad a nivel de plataforma. El enfoque de endpoint compartido de Plaspy y la detección automática de protocolos reducen los pasos de configuración necesarios para poner en línea los dispositivos y simplifican la supervisión de activos que pueden cambiar de red entre GSM y satélite.

Si desea conocer más sobre cómo Plaspy trabaja con dispositivos como el Castel SAT-802 visite https://www.plaspy.com. Para los detalles más actuales sobre protocolo específico del dispositivo, notas de firmware e instrucciones de configuración, verifique la información con Castel en http://www.castelecom.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
