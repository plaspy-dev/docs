---
slug: /goome/gmobd/protocol
id: gmobd-protocol
sidebar_label: Protocol
title: Goome - GMOBD Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo Goome GMOBD y cómo el rastreador comunica posición y alertas a Plaspy
keywords:
  - Protocolo Goome GMOBD
  - Protocolo GPS Goome GMOBD
  - Protocolo Goome GMOBD para Plaspy
  - Protocolo rastreador OBD2 Goome
  - Protocolo de seguimiento GMOBD
  - Rastreo de vehículos Goome
  - Protocolo de comunicación GMOBD
  - Compatibilidad de dispositivos Plaspy
  - Guía de protocolo para rastreadores GPS
  - Rastreador OBD2 GPS Plaspy
---

# Goome - Protocolo GMOBD

Esta página describe el contexto público del protocolo para usar el rastreador Goome GMOBD con Plaspy. Se centra en información de alto nivel sobre la comunicación y la conexión para que usted comprenda cómo el GMOBD informa posición, alertas y estado a la plataforma Plaspy, sin exponer detalles sensibles de implementación.

Plaspy opera con ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre debe validar la configuración del dispositivo con la documentación del fabricante y el firmware desplegado.

## Resumen del protocolo

El Goome GMOBD es un rastreador vehicular conectado al puerto OBD2 con capacidades GSM y posicionamiento por satélite. Su protocolo de comunicación define cómo el dispositivo se identifica, reporta posiciones, envía alarmas y acepta configuraciones remotas o consultas hacia un servidor de rastreo.

- Provee el canal para reportes periódicos y por eventos desde el GMOBD hacia la plataforma.
- Transporta la identidad y el estado del dispositivo para que Plaspy asocie los mensajes entrantes con la ficha vehicular correcta.
- Entrega eventos de alarma y sensores como alertas de corte de energía, alarmas por vibración y activaciones de geocerca a Plaspy.
- Permite comandos remotos y configuración cuando el dispositivo y la implementación del fabricante lo soportan.
- Traduce sensores a bordo, como acelerómetro y estados OBD, en mensajes estructurados que Plaspy puede procesar.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos entrantes en un endpoint y puerto compartidos y utiliza el contenido y el contexto de conexión para determinar automáticamente el protocolo del rastreador. En la mayoría de los casos, un dispositivo GMOBD configurado para reportar a Plaspy será identificado sin necesidad de seleccionar manualmente el protocolo en la plataforma.

- Plaspy escucha en un único puerto para todos los dispositivos compatibles, lo que simplifica la configuración.
- Cuando un dispositivo se conecta y envía su mensaje inicial, Plaspy compara los datos recibidos con patrones de protocolo conocidos y los asocia con la cuenta y el dispositivo.
- Normalmente no es necesario elegir el protocolo a mano si el GMOBD está apuntando al endpoint de Plaspy.
- La detección automática reduce errores de configuración y acelera la incorporación de flotas mixtas con distintos modelos de rastreadores.
- El comportamiento de detección está diseñado para funcionar a través de variaciones de firmware y modelos, aunque firmwares muy personalizados pueden requerir verificación.

## Transporte y contexto de conexión

Los dispositivos GMOBD pueden usar UDP o TCP según capacidades y configuración del equipo. Plaspy expone un endpoint público estable y un único puerto para recibir reportes de todos los rastreadores soportados, lo que facilita la configuración de red para despliegues de flota.

- El dominio del servidor Plaspy es d.plaspy.com para configuración basada en DNS.
- La IP del servidor Plaspy es 54.85.159.138 y puede utilizarse si no hay disponibilidad de DNS.
- El puerto usado por Plaspy es 8888 y el dispositivo puede configurarse para UDP o TCP en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica reglas de firewall y de red.
- Asegúrese de que el rastreador esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y que el transporte elegido coincida con la configuración del equipo.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, los campos disponibles o las funciones opcionales; confirme el firmware del dispositivo al validar el comportamiento.
- Revisiones de hardware o variantes del GMOBD pueden alterar los sensores soportados u opciones de reporte empleadas por el protocolo.
- Los ajustes de servicio del fabricante y las funciones en la nube pueden influir en qué comandos remotos o confirmaciones están disponibles.
- La elección entre UDP y TCP afecta las características de entrega y debe coincidir con la configuración del dispositivo y las expectativas de confiabilidad de la red.
- Al integrar a gran escala, valide una muestra pequeña de dispositivos y niveles de firmware antes de desplegar en toda la flota.
- Compare siempre los mensajes observados con la documentación más reciente del fabricante para confirmar los campos requeridos y las funciones soportadas.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación ayuda a garantizar una incorporación confiable de dispositivos, reportes de ubicación precisos y una resolución de problemas más eficaz al integrar rastreadores GMOBD con Plaspy. Incluso una familiaridad a nivel alto reduce errores de configuración y mejora la disponibilidad operativa.

- Ayuda a verificar que el dispositivo esté apuntando correctamente al endpoint de Plaspy y usando el transporte adecuado.
- Acelera la resolución de problemas por brechas de datos, posiciones incorrectas o eventos de alarma faltantes.
- Orienta decisiones sobre reglas de firewall y configuraciones APN del operador para despliegues de flota.
- Aclara cómo las actualizaciones de firmware o el reemplazo de dispositivos pueden afectar el reporte y la disponibilidad de funciones.
- Apoya un escalado de flota seguro y predecible documentando los ajustes necesarios y los comportamientos soportados.

## Por qué usar Plaspy con este protocolo

Usar el Goome GMOBD con Plaspy ofrece una forma práctica de centralizar telemetría OBD2, ubicaciones en tiempo real y eventos de alarma en una sola plataforma de gestión de flotas. Para casos como alquiler de autos, gestión de pequeñas flotas y despacho, combinar funciones de hardware del GMOBD—como alarma por corte de energía, acelerómetro incorporado y seguimiento en tiempo real—con el manejo centralizado de datos de Plaspy aporta un claro valor operativo.

Plaspy simplifica la configuración de dispositivos al aceptar reportes en un endpoint y puerto compartidos y detectar automáticamente el protocolo del equipo, reduciendo la carga administrativa en flotas mixtas y despliegues con múltiples modelos. Para obtener más información sobre Plaspy y cómo puede funcionar con dispositivos GMOBD visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que debe verificar la información específica del protocolo con el fabricante en http://www.goomegpstracker.com.
