---
slug: /yulongda/tk103/protocol
id: tk103-protocol
sidebar_label: Protocol
title: YulongDa - TK103 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador YulongDa TK103 y su comunicación con los servidores de Plaspy
keywords:
  - protocolo YulongDa TK103
  - protocolo GPS YulongDa TK103
  - YulongDa TK103 Plaspy
  - protocolo de comunicación TK103
  - protocolo rastreador GPS TK103
  - compatibilidad rastreador YulongDa
  - protocolo seguimiento de vehículos
  - seguimiento de flotas YulongDa
  - compatibilidad rastreador GPS Plaspy
  - guía de protocolos de rastreadores
---

# YulongDa - Protocolo TK103

Esta página explica el contexto público del protocolo necesario para usar el rastreador YulongDa TK103 con Plaspy. Resume cómo el dispositivo se comunica con un endpoint de Plaspy y qué papel desempeña el protocolo de reporte del rastreador en la identificación del equipo, el envío de posiciones y la entrega de alertas. El contenido se centra en información pública y no sensible; no reproduce detalles propietarios del fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos que soporta y detecta automáticamente el protocolo cuando los equipos informan al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el comportamiento en campo puede diferir entre unidades TK103 y distintas versiones de firmware.

## Visión general del protocolo

El protocolo de comunicación del rastreador es el conjunto de mensajes y convenciones que el TK103 usa para reportar ubicación, estado y alarmas a un servidor remoto. Para la integración con Plaspy, el protocolo permite que el dispositivo se identifique, transmita datos GPS y de estado, y envíe alertas que Plaspy pueda interpretar y presentar a los usuarios.

- Permite la identificación del dispositivo para que Plaspy asocie los datos entrantes con una unidad TK103 específica.
- Transporta actualizaciones de posición y campos de estado utilizados en funciones de rastreo y geolocalización.
- Transmite mensajes de alarma y eventos como alertas por vibración, pulsos de SOS y cambios en ACC.
- Soporta transporte sobre conexiones de red hacia un endpoint remoto para que Plaspy reciba reportes en tiempo real.
- Permite el envío opcional de comandos y mensajes de configuración por parte del servidor o mediante herramientas del fabricante cuando están soportados.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un único endpoint compartido y usa detección automática para reconocer el protocolo que emplea un dispositivo. Este enfoque simplificado significa que, por lo general, usted no necesita seleccionar un protocolo dentro de Plaspy si el rastreador está configurado para reportar correctamente.

- El endpoint del servidor de Plaspy es accesible en d.plaspy.com y en la IP pública 54.85.159.138.
- Plaspy escucha en el puerto 8888 y usa ese mismo puerto para todos los dispositivos soportados.
- Los dispositivos pueden configurarse para enviar datos a través de UDP o TCP al endpoint de Plaspy.
- Cuando un rastreador configurado correctamente reporta al endpoint, Plaspy detecta automáticamente el protocolo y comienza a procesar los mensajes entrantes.
- En la mayoría de los casos, ajustes de red y de reporte del dispositivo correctos son suficientes para que Plaspy identifique y vincule el dispositivo a una cuenta.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el TK103 establece el vínculo con Plaspy y qué opciones de red se usan comúnmente. El TK103 puede operar en redes móviles y puede configurarse para usar UDP o TCP según los ajustes del dispositivo y las condiciones de la red.

- El TK103 puede configurarse para reportar a d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy acepta conexiones por el puerto 8888 y todos los dispositivos soportados utilizan ese mismo puerto.
- Dependiendo del dispositivo y del firmware, el TK103 puede usar transporte UDP o TCP para enviar reportes al servidor.
- La elección del transporte puede afectar características de entrega como retransmisiones y latencia, pero no las semánticas de alto nivel que Plaspy emplea para interpretar los datos.
- Asegúrese de que el rastreador tenga un APN de datos móviles funcional y acceso a la red para que pueda alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el formato o la frecuencia de los mensajes de reporte del TK103, por lo que el comportamiento puede variar entre unidades.
- Revisión de hardware y accesorios opcionales como relés externos o micrófonos pueden afectar qué eventos se reportan y cómo aparecen en los mensajes.
- Algunas unidades pueden venir por defecto en UDP mientras otras usan TCP; confirme que la configuración de transporte del dispositivo coincide con lo que usted espera.
- Comandos de configuración del fabricante o restricciones de la red de la tarjeta SIM pueden influir en la conectividad y la frecuencia de reporte.
- Valide el comportamiento del dispositivo con la documentación oficial del fabricante para el firmware específico instalado en su unidad.
- Al integrar muchos dispositivos, pruebe una muestra pequeña para confirmar el comportamiento esperado antes de un despliegue masivo.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del TK103 ayuda a garantizar una configuración fluida con Plaspy, reduce el tiempo dedicado a resolver problemas de conectividad y mejora la confiabilidad a largo plazo en operaciones de flota y seguimiento personal.

- Le ayuda a verificar que el dispositivo reporte a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Orienta en la correcta selección de UDP o TCP según sus necesidades de red y confiabilidad.
- Facilita la interpretación de eventos de estado y alarmas que provienen del rastreador durante las pruebas.
- Permite una resolución más rápida cuando variaciones de firmware producen patrones de reporte inesperados.
- Ayuda en la planificación de señales de accesorios opcionales y cómo deberían aparecer en los datos de monitoreo.

## Por qué usar Plaspy con este protocolo

Usar el YulongDa TK103 con Plaspy ofrece una forma práctica de recopilar información de posición, estado y alarmas de vehículos y activos. Plaspy centraliza los datos entrantes de rastreadores soportados, detecta protocolos automáticamente y presenta la información de ubicación y eventos a través de su plataforma para obtener información operativa.

Si usted administra vehículos o necesita monitoreo remoto confiable, combinar unidades TK103 con Plaspy puede simplificar el despliegue y reducir la configuración manual. Conozca más sobre Plaspy en https://www.plaspy.com. Para detalles más precisos sobre el protocolo según el dispositivo y el comportamiento del firmware, verifique la información con el fabricante en http://www.yulongdatechnology.com.
