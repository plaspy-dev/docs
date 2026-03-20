---
slug: /gotop/tv_690/protocol
id: tv_690-protocol
sidebar_label: Protocol
title: GOTOP - TV-690 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para la compatibilidad del GOTOP TV-690 con el servidor Plaspy y su contexto de conexión
keywords:
  - protocolo GOTOP TV-690
  - protocolo GPS GOTOP TV-690
  - compatibilidad GOTOP TV-690 Plaspy
  - protocolo de rastreo TV-690
  - rastreador GPS GOTOP TV-690
  - protocolo de comunicación TV-690
  - rastreador GOTOP Plaspy
  - protocolo rastreador personal
  - ubicación SMS TV-690
  - compatibilidad rastreador GPS Plaspy
---

# GOTOP - TV-690 Protocolo

Esta página resume el contexto público del protocolo para usar el dispositivo de posicionamiento personal GOTOP TV-690 con la plataforma Plaspy. Se enfoca en cómo se comunica el equipo en términos generales, cómo Plaspy recibe los reportes y qué considerar al configurar y validar la conectividad. Se omiten intencionalmente detalles técnicos específicos de revisiones de firmware o implementaciones privadas del fabricante.

Plaspy utiliza ajustes de conexión compartidos para todos los rastreadores compatibles y puede detectar automáticamente el protocolo cuando el dispositivo informa al endpoint de Plaspy. Para Plaspy el dominio del servidor es d.plaspy.com y la IP pública es 54.85.159.138 en el puerto 8888. El TV-690 puede configurarse para reportar a Plaspy usando UDP o TCP en el puerto 8888. El comportamiento exacto de los mensajes puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que es recomendable validar los detalles específicos del dispositivo con el fabricante cuando sea necesario.

## Resumen del protocolo

El TV-690 combina posicionamiento GPS y conectividad GSM GPRS para entregar información de ubicación y estado. Cuando se utiliza con Plaspy, el protocolo del dispositivo regula cómo el rastreador se identifica, transmite coordenadas y envía datos de estado adicionales para que el servidor Plaspy pueda procesar y mostrar la información de manera confiable.

- Establece las reglas para reportar posición y hora, de modo que Plaspy pueda mapear y almacenar los eventos de ubicación.
- Permite que el rastreador se identifique mediante un ID o identificador del equipo para que Plaspy asocie los reportes con el activo correcto.
- Transporta información de estado como movimiento o nivel de batería además de las coordenadas, lo que habilita funciones más completas en la plataforma.
- Permite al dispositivo usar informes por GPRS a un endpoint IP o respuestas por SMS para consultas directas, siendo el SMS una capacidad separada del TV-690.
- Soporta el intercambio de actualizaciones periódicas y mensajes de estado que permiten a Plaspy mantener una vista precisa del dispositivo.
- Garantiza que Plaspy pueda interpretar los datos entrantes y convertirlos en puntos de ubicación y telemetría para paneles y alertas.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes en un único endpoint compartido y determinar automáticamente el protocolo del rastreador cuando un equipo envía datos a ese endpoint. En la mayoría de los casos, un rastreador correctamente configurado solo necesita apuntar a Plaspy y no es necesario seleccionar manualmente el protocolo en la plataforma.

- Plaspy escucha en el dominio compartido d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de red para simplificar la configuración.
- El puerto requerido para reportes a Plaspy es 8888 y los dispositivos pueden usar UDP o TCP en ese puerto según su soporte.
- Cuando el TV-690 está configurado para reportar al endpoint de Plaspy, Plaspy detectará automáticamente el protocolo compatible.
- En la mayoría de los casos usted no necesitará elegir un protocolo dentro de Plaspy si el dispositivo está correctamente apuntado al servidor Plaspy y usando el transporte esperado.

## Transporte y contexto de conexión

Las opciones de transporte y el endpoint de red son los detalles clave para integrar un TV-690 con Plaspy. El TV-690 soporta el reporte por datos celulares y se puede configurar para enviar sus reportes por UDP o TCP al servidor Plaspy en el puerto compartido.

- El dispositivo puede configurarse para enviar reportes GPRS a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy acepta conexiones en el puerto 8888 para todos los dispositivos soportados.
- El TV-690 puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo del firmware y las opciones de configuración del equipo.
- Las respuestas de ubicación vía SMS y los enlaces de Google Maps son funciones independientes del dispositivo y no dependen del transporte IP utilizado para reportes.
- Asegúrese de que el APN y los ajustes de la red móvil en el rastreador estén correctos para que los reportes GPRS al endpoint de Plaspy sean posibles.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento exacto de los mensajes del TV-690, por lo que conviene verificar la versión de firmware al solucionar problemas.
- Revisiones de hardware o menús de configuración opcionales en el dispositivo pueden alterar los modos de transporte disponibles o los intervalos de reporte.
- Las funciones basadas en SMS, como los enlaces a Google Maps, son capacidades del dispositivo y operan independientemente del reporte IP a Plaspy.
- Elegir UDP o TCP en el equipo puede afectar las características de entrega según el comportamiento de la red móvil y el firmware del dispositivo.
- Confirme con su proveedor de SIM los permisos de APN y la disponibilidad de la red móvil para garantizar que el reporte por GPRS sea posible.
- Revise siempre la documentación del fabricante para pasos de configuración específicos del modelo y cualquier cambio introducido en lanzamientos recientes de firmware.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TV-690 ayuda a asegurar una configuración correcta y un funcionamiento confiable con Plaspy. Tener una noción práctica del comportamiento del protocolo reduce la fricción en la integración y agiliza la solución de problemas cuando surgen incidencias de conectividad o interpretación de datos.

- Facilita configurar el dispositivo para que reporte a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando el transporte correcto.
- Ayuda a diagnosticar por qué un equipo puede no aparecer en Plaspy al revisar firmware, APN y selección de transporte.
- Aclara la diferencia entre respuestas de ubicación por SMS y reportes por GPRS al servidor Plaspy.
- Apoya la planificación de compromisos entre batería e intervalo de reporte según la frecuencia con la que el dispositivo transmite datos.
- Facilita la coordinación con el fabricante del equipo cuando se sospechan diferencias de firmware o hardware.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP TV-690 con Plaspy ofrece una forma directa de centralizar datos de ubicación y estado de rastreadores personales en una sola plataforma para monitoreo y supervisión operativa. Para organizaciones y familias que necesitan visibilidad sobre activos o personas, integrar el TV-690 con Plaspy combina las capacidades GPS y GSM del dispositivo con el procesamiento en servidor y el mapeo de Plaspy.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el GOTOP TV-690 visite https://www.plaspy.com. Para detalles de firmware, notas de implementación e instrucciones de configuración específicas del dispositivo confirme la información más reciente en la web del fabricante https://www.gotop.cc/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
