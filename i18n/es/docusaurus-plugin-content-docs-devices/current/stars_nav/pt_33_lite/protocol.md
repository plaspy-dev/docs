---
slug: /stars_nav/pt_33_lite/protocol
id: pt_33_lite-protocol
sidebar_label: Protocol
title: Stars Nav - PT-33 Lite Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para Stars Nav PT 33 Lite y cómo se comunica con Plaspy para reportes de ubicación y alertas
keywords:
  - protocolo Stars Nav PT 33 Lite
  - protocolo GPS Stars Nav PT 33 Lite
  - integración PT 33 Lite Plaspy
  - rastreador PT 33 Lite por SMS
  - protocolo rastreador GPS Stars Nav
  - rastreadores compatibles con Plaspy
  - protocolo GPS para seguridad personal
  - protocolo GPS basado en SMS
  - protocolo de seguimiento PT 33 Lite
  - monitoreo de flotas PT 33 Lite
---

# Stars Nav - Protocolo PT-33 Lite

Esta página describe el contexto público del protocolo para usar el Stars Nav PT-33 Lite con Plaspy. Se centra en cómo el PT-33 Lite envía reportes de ubicación y eventos de manera que puedan integrarse en los flujos de trabajo de Plaspy, sin exponer la lógica privada de parsers ni detalles internos del firmware. El PT-33 Lite es un rastreador personal enfocado en SMS que proporciona reportes de ubicación a demanda, alertas de pánico, avisos de movimiento e inmovilidad, y notificaciones por geocerca y velocidad, adecuado para despliegues de bajo consumo de datos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos están configurados correctamente para reportar al intake de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware o la implementación del fabricante, por lo que esta página ofrece contexto público de alto nivel y orientación práctica en lugar de especificaciones de firmware.

## Resumen del protocolo

El protocolo del PT-33 Lite se basa fundamentalmente en un modelo de reporte de eventos y posiciones mediante SMS y llamadas que desencadenan reportes, con opciones para reenviar esos mensajes a un ingestion point para mapeo y alertas. Cuando se integra con Plaspy, el propósito del protocolo es entregar identidad, ubicación e información de eventos de forma que Plaspy pueda mostrarlos en mapas, líneas de tiempo y reglas de alerta.

- Permite que el rastreador envíe información de identidad y ubicación a un punto central de ingestión para que Plaspy la registre y la muestre.
- Transporta tipos de eventos como alertas por botón de pánico, avisos de movimiento o inmovilidad, disparos de geocerca y alarmas de velocidad para mapearlos a alertas en Plaspy.
- Soporta solicitudes de ubicación a demanda por llamada o SMS para que los reportes de posición lleguen cuando se necesitan sin uso continuo de datos.
- Permite configuración y reportes basados en SMS que pueden reenviarse a Plaspy mediante un gateway SMS u otros métodos de ingestión compatibles.
- Proporciona una ruta de reporte de bajo ancho de banda para despliegues donde los datos móviles son limitados o no deseables.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar el tráfico de dispositivos en un endpoint compartido e identificar automáticamente el protocolo entrante, de modo que los clientes rara vez tengan que seleccionar un protocolo manualmente. Si un dispositivo o un servicio intermediario reenvía los reportes del PT-33 Lite al endpoint de Plaspy, Plaspy asociará esos mensajes con el dispositivo y mostrará los datos de posición y eventos.

- Plaspy utiliza un endpoint común en d.plaspy.com y la IP pública 54.85.159.138 para la ingestión de dispositivos.
- El puerto configurado para el intake de dispositivos de Plaspy es 8888 y Plaspy usa este mismo puerto para todos los dispositivos compatibles.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el tráfico del dispositivo llega al intake de Plaspy en el endpoint y puerto compartidos.
- En muchos casos, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy si el rastreador o el gateway SMS está configurado para reenviar los reportes al endpoint de Plaspy.
- Asegúrese de que cualquier gateway SMS o regla de reenvío intermedia preserve la identidad del dispositivo origen o identificadores únicos para que Plaspy pueda asociar los reportes con el rastreador correcto.

## Transporte y contexto de conexión

Aunque el PT-33 Lite es principalmente orientado a SMS, algunos patrones de despliegue reenvían SMS o habilitan reportes estilo GPRS; Plaspy admite las opciones de transporte más comunes y un puerto único y consistente para el intake. Conocer las opciones de transporte ayuda a planificar la integración y la resolución de problemas.

- El dispositivo puede configurarse para enviar datos a Plaspy usando UDP o TCP en el puerto 8888 según las capacidades del dispositivo o del gateway.
- Dispositivos o gateways pueden apuntar al dominio del servidor de Plaspy d.plaspy.com o a la dirección IP 54.85.159.138 cuando envían reportes al intake de Plaspy.
- Plaspy usa el puerto 8888 para todos los dispositivos, por lo que la configuración de transporte entre dispositivos se simplifica y es consistente.
- Para rastreadores basados en SMS como el PT-33 Lite, normalmente se utiliza un gateway SMS o un mecanismo de reenvío para transformar los mensajes SMS en un formato que Plaspy pueda ingerir vía TCP o UDP.
- Confirme si su despliegue usa UDP o TCP y asegúrese de que cualquier gateway o regla de firewall permita tráfico saliente hacia el puerto 8888 para alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware y hardware pueden cambiar los formatos de los mensajes y las funciones disponibles; verifique el firmware del rastreador al evaluar compatibilidad.
- Las opciones de configuración del fabricante pueden variar por región o lote, por lo que las funciones expuestas por comandos SMS pueden diferir entre unidades.
- Los dispositivos orientados a SMS suelen requerir un gateway SMS intermedio o un método de reenvío para alimentar a Plaspy; confirme cómo llegarán los reportes SMS a Plaspy en su configuración.
- La selección de transporte entre UDP y TCP debe coincidir con la capacidad del gateway o rastreador al apuntar a d.plaspy.com en el puerto 8888.
- Los identificadores de dispositivo y los números telefónicos usados en los reportes SMS deben preservarse o mapearse durante el reenvío para que Plaspy pueda identificar de manera única los dispositivos.
- Valide la compatibilidad con la documentación del fabricante para los conjuntos de comandos y el comportamiento específico del modelo antes de desplegar.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el PT-33 Lite ayuda a garantizar una configuración fiable, el mapeo correcto de eventos en Plaspy y una resolución de problemas más rápida cuando los reportes no aparecen como se espera. Entender el comportamiento general del protocolo reduce el tiempo de integración y contribuye a mantener la fiabilidad del servicio en casos de uso de seguridad y monitoreo.

- Garantiza que alertas como pulsaciones del botón de pánico, violaciones de geocerca y notificaciones de inmovilidad se mapeen correctamente en Plaspy.
- Ayuda a elegir el enfoque de reenvío o gateway adecuado para dispositivos orientados a SMS, de modo que los datos de posición lleguen a Plaspy de forma consistente.
- Facilita el diagnóstico de problemas de conectividad al aclarar si los reportes deben reenviarse a d.plaspy.com o a un servicio intermediario.
- Apoya la planificación de compensaciones entre consumo de batería y frecuencia de reportes cuando se usan reportes a demanda frente a reportes programados.
- Reduce la confusión cuando las actualizaciones de firmware cambian la redacción de los mensajes o los tipos de eventos disponibles al enfocar la resolución en transporte e identificación.

## Por qué usar Plaspy con este protocolo

El PT-33 Lite combinado con Plaspy ofrece una solución práctica para organizaciones y familias que necesitan reportes de ubicación y alertas de seguridad fiables con bajo consumo de datos. Plaspy aporta visibilidad centralizada, alertas y registro de los reportes de posición y eventos basados en SMS generados por el PT-33 Lite, lo que facilita el monitoreo de personas o activos portátiles sin requerir telemetría continua de datos.

Para conocer más sobre cómo trabaja Plaspy con dispositivos como el PT-33 Lite, visite https://www.plaspy.com. Por favor verifique los detalles actuales del protocolo del dispositivo, el comportamiento del firmware y la información específica del fabricante en el sitio oficial de Stars Nav http://www.starsnav.com/ ya que el soporte de protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo.
