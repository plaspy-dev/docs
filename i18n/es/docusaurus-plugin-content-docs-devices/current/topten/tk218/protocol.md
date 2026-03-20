---
slug: /topten/tk218/protocol
id: tk218-protocol
sidebar_label: Protocol
title: TopTen - TK218 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para integrar el rastreador OBD TopTen TK218 con Plaspy incluyendo guía de conexión y compatibilidad
keywords:
  - protocolo TopTen TK218
  - protocolo GPS TopTen TK218
  - TopTen TK218 Plaspy
  - protocolo rastreador GPS TK218
  - protocolo de comunicación TK218
  - protocolo rastreador OBD TopTen
  - protocolo OBDII TK218
  - rastreo vehicular TK218
  - gestión de flotas TK218
  - compatibilidad TK218 Plaspy
---

# TopTen - Protocolo TK218

Esta página resume el contexto del protocolo público para usar el rastreador GPS TopTen TK218 con Plaspy. Se centra en cómo el equipo se comunica con Plaspy, qué ajustes de conexión se emplean en despliegues habituales y consideraciones prácticas para obtener datos posicionales y diagnósticos fiables de un rastreador OBD plug and play.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando éste informa al endpoint de Plaspy. El comportamiento exacto y el contenido de los mensajes de un TK218 pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general y no sensible, recomendando verificar siempre la documentación del fabricante.

## Resumen del protocolo

El TK218 transmite telemetría, ubicación y eventos de alarma a un servidor mediante el protocolo de reporte implementado por el fabricante. Ese protocolo define cómo el rastreador se identifica, cómo informa datos posicionales y diagnósticos, y cómo comunica alarmas o actualizaciones de estado a Plaspy.

- Funciona como transporte para coordenadas GPS, velocidad, rumbo y datos de odómetro o CAN bus tomados desde la interfaz OBD
- Incluye información de identidad del dispositivo que permite a Plaspy asociar los mensajes con el registro correcto del rastreador
- Permite reenviar eventos de alarma y estado como exceso de velocidad, movimiento, pérdida de alimentación y estado del motor a Plaspy
- Soporta reportes periódicos por intervalo o informes bajo demanda vía SMS o GPRS según implemente el dispositivo
- Habilita diagnóstico remoto y reporte básico de datos del vehículo cuando el rastreador está configurado para reenviar lecturas OBD o CAN bus

## Detección del protocolo por Plaspy

Plaspy recibe el tráfico de los rastreadores en un endpoint y puerto compartidos y detecta automáticamente el protocolo para los dispositivos compatibles. Cuando un TK218 está configurado para reportar a Plaspy, la plataforma aplicará su lógica de detección, por lo que usted normalmente no necesita seleccionar manualmente un protocolo dentro de Plaspy.

- Los dispositivos deben configurarse para reportar al dominio del servidor de Plaspy d.plaspy.com o a la IP de respaldo 54.85.159.138
- Plaspy escucha en un único puerto común para todo el tráfico de dispositivos, lo que simplifica la configuración
- Cuando el TK218 envía sus primeros mensajes a Plaspy, la plataforma identificará el formato de reporte y asociará el dispositivo con las reglas de parseo correspondientes
- Generalmente usted solo necesita asegurarse de que el rastreador apunte al endpoint de Plaspy y utilice el transporte soportado
- Si un rastreador usa firmware no estándar o tiene ajustes personalizados, revise la configuración del equipo y la guía del fabricante para asegurar que el reporte esté habilitado

## Transporte y contexto de conexión

El TK218 puede usar UDP o TCP para enviar datos al servidor, según el soporte del dispositivo y su configuración. Para integraciones con Plaspy se emplea el endpoint y puerto comunes para que los ajustes de red del rastreador se puedan estandarizar en una flota.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para enviar telemetría a Plaspy
- Los rastreadores deben apuntar a d.plaspy.com o a 54.85.159.138 como dirección de servidor alternativa
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles para reducir la complejidad de configuración
- Elija UDP o TCP en el rastreador según las capacidades del equipo y las consideraciones de fiabilidad de la red
- Verifique el enrutamiento de red y cualquier configuración del operador para que el rastreador pueda alcanzar el endpoint de Plaspy desde el vehículo

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del fabricante pueden cambiar la temporización de mensajes, los campos soportados o el comportamiento de las alarmas
- Las revisiones de hardware y las capacidades opcionales de CAN u OBD pueden modificar qué valores de diagnóstico reporta el rastreador
- Algunas unidades TK218 soportan conmutación a SMS o reportes bajo demanda que pueden coexistir con los modos de reporte por GPRS
- La selección de transporte UDP versus TCP es configurable en el dispositivo y afecta la fiabilidad de entrega y la retransmisión
- Confirme siempre que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para la integración con Plaspy
- Valide la compatibilidad contra la documentación oficial de TopTen y las notas de la versión del firmware para comportamientos específicos

## Por qué es importante comprender el protocolo

Entender el protocolo de reporte del rastreador ayuda a asegurar una configuración exitosa, recolección de datos fiable y una solución de problemas eficiente cuando se usa el TK218 con Plaspy. Saber qué envía el rastreador y cómo se conecta reduce el tiempo de configuración y facilita aislar problemas que puedan deberse a la red, al firmware o a la configuración del equipo.

- Ayuda a identificar por qué un rastreador no aparece en Plaspy o por qué ciertos campos de datos están incompletos
- Orienta sobre la correcta configuración de la red y el endpoint para que los dispositivos alcancen el servidor de Plaspy
- Permite tomar decisiones informadas entre usar UDP o TCP según cobertura y comportamiento del operador
- Facilita confirmar qué alarmas y valores OBD el firmware específico del TK218 retransmitirá
- Hace más sencilla la colaboración con el soporte del fabricante cuando surge una discrepancia de firmware o hardware

## Por qué usar Plaspy con este protocolo

Usar el TopTen TK218 con Plaspy ofrece una vía práctica para capturar ubicación, diagnósticos básicos del vehículo y eventos de alarma desde un rastreador OBD plug and play en autos y camiones. Plaspy centraliza los datos entrantes y los presenta para monitoreo, generación de informes y flujos operativos, eliminando la necesidad de gestionar múltiples puertos de conexión por dispositivo.

Plaspy simplifica el onboarding de dispositivos usando un solo puerto común y detección automática de protocolo, de modo que los administradores de flota pueden estandarizar los ajustes del rastreador en muchos vehículos. Para saber más sobre Plaspy y cómo funciona con rastreadores OBD como el TK218 visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, revisiones de firmware y notas de hardware verifique la información vigente en el sitio del fabricante http://www.t10.cn.
