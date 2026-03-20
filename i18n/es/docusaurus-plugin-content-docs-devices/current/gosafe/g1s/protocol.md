---
slug: /gosafe/g1s/protocol
id: g1s-protocol
sidebar_label: Protocol
title: Gosafe - G1S Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Gosafe G1S y su comunicación con Plaspy para reportes GPS confiables
keywords:
  - Protocolo Gosafe G1S
  - Protocolo GPS Gosafe G1S
  - Protocolo de comunicación Gosafe G1S
  - Protocolo de rastreo Gosafe G1S
  - Rastreador Gosafe Plaspy
  - Protocolo G1S Plaspy
  - Rastreo GPS G1S
  - Protocolo rastreador GPS Gosafe
  - Rastreo de flotas Gosafe
  - Compatibilidad Gosafe G1S
---

# Gosafe - Protocolo G1S

Esta página presenta el contexto público del protocolo para usar el rastreador portátil Gosafe G1S con Plaspy. Describe cómo el dispositivo se comunica habitualmente con los servidores de Plaspy, qué papel desempeña el protocolo de reporte del rastreador en esa comunicación y qué ajustes de conexión utiliza Plaspy para recibir los informes del dispositivo. El objetivo es aclarar los detalles relevantes para la integración sin entrar en aspectos sensibles o propietarios del fabricante.

El Gosafe G1S es un rastreador portátil compacto que admite baterías CR123 reemplazables o baterías recargables y puede cargarse mediante un conector externo. El diseño del G1S y las opciones de batería influyen en los patrones de reporte y en la duración operativa. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Descripción general del protocolo

El protocolo del rastreador es el conjunto de comportamientos e intercambios de mensajes que utiliza el G1S para reportar ubicación, estado y eventos de configuración a un servidor remoto. Para la integración con Plaspy, los hechos públicos más importantes son cómo el dispositivo alcanza el punto de conexión de Plaspy y qué capacidades ofrece el protocolo, más que la disposición binaria privada de los mensajes.

- Permite que el G1S se identifique y envíe actualizaciones de ubicación periódicas o basadas en eventos a Plaspy
- Transporta campos de marca de tiempo, ubicación y estado básico que Plaspy utiliza para presentar datos de rastreo útiles
- Soporta distintos modos de transporte para que el dispositivo use la ruta de red más adecuada según la implementación
- Permite comandos de configuración desde el lado servidor como intervalos de reporte y preferencias de administración de energía
- Hace de puente entre el comportamiento del hardware del dispositivo y Plaspy, donde el análisis y el mapeo generan telemetría significativa

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un punto de conexión compartido e inspecciona el tráfico entrante para determinar la lógica de manejo adecuada. En la mayoría de las implementaciones estándar, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está configurado para reportar al punto de conexión de Plaspy.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com
- Plaspy también acepta conexiones dirigidas a su IP pública 54.85.159.138
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto de servidor para reportes
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta y envía sus reportes iniciales
- Cuando un dispositivo está correctamente apuntado al punto de conexión de Plaspy, rara vez se requiere una selección manual de protocolo

## Transporte y contexto de conexión

Conexión y transporte son conceptos distintos a los detalles del protocolo. El G1S puede configurarse para enviar datos sobre capas de transporte comunes según las capacidades del dispositivo y el entorno de red. Conocer las opciones de transporte disponibles ayuda en la configuración inicial del dispositivo y en la apertura de puertos o reglas de firewall.

- El G1S puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte del dispositivo y la configuración elegida
- Los dispositivos pueden apuntar al servidor de Plaspy usando d.plaspy.com o la dirección IP 54.85.159.138
- Plaspy utiliza el mismo valor de puerto 8888 para todos los dispositivos compatibles para simplificar la configuración de flotas
- La elección entre UDP y TCP puede afectar el comportamiento de entrega y debe coincidir con la configuración del dispositivo
- Asegúrese de permitir la conectividad saliente desde la red del dispositivo hacia d.plaspy.com en el transporte y puerto configurados

## Notas de compatibilidad del protocolo

- Las versiones de firmware del G1S pueden cambiar la disponibilidad de campos y el comportamiento de reporte; revise las notas de firmware del dispositivo
- Las revisiones de hardware o las configuraciones de accesorios pueden alterar el consumo de energía y los intervalos de reporte, lo que afecta la frecuencia de envío de mensajes
- Ajustes del fabricante o variantes regionales pueden introducir pequeñas variaciones de protocolo entre unidades
- La selección de transporte UDP frente a TCP debe coincidir con la configuración del dispositivo para garantizar una entrega fiable
- Plaspy detecta el protocolo automáticamente, pero validar con un dispositivo primero reduce sorpresas durante el despliegue
- Verifique siempre los procedimientos específicos de configuración del dispositivo en la documentación oficial del fabricante

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación entre el G1S y Plaspy ayuda a garantizar reportes fiables, facilita la resolución de problemas y permite prever la vida útil de la batería en campo. Un contexto claro del protocolo facilita alinear la configuración del dispositivo, la red y las expectativas de Plaspy para obtener telemetría consistente.

- Ayuda a solucionar problemas de conectividad confirmando transporte y ajustes de punto de conexión
- Orienta la elección de intervalos de reporte óptimos para equilibrar duración de batería y granularidad de ubicación
- Aclara qué comportamientos del dispositivo son esperados y cuáles pueden deberse a diferencias de firmware
- Permite configurar la red de forma informada, incluyendo reglas de firewall y manejo de NAT
- Reduce el tiempo para diagnosticar reportes intermitentes o desajustes de configuración

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el Gosafe G1S ofrece a las organizaciones una forma directa de recolectar y visualizar información de ubicación y estado desde rastreadores portátiles. El punto de conexión compartido de Plaspy y la detección automática de protocolo reducen la necesidad de seleccionar manualmente el protocolo, permitiendo que los equipos se concentren en el despliegue y la supervisión operativa en lugar del análisis de bajo nivel.

To learn more about how Plaspy can work with devices like the Gosafe G1S visit https://www.plaspy.com. For the most current firmware specific behavior and device implementation details confirm the latest manufacturer documentation at https://gosafesystem.com/ .
