---
slug: /castel/pt_720/protocol
id: pt_720-protocol
sidebar_label: Protocol
title: Castel - PT-720 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general del protocolo público del rastreador GPS Castel PT-720 y cómo se conecta a Plaspy con ajustes compartidos
keywords:
  - protocolo Castel PT 720
  - protocolo GPS Castel PT 720
  - compatibilidad rastreador PT 720 Plaspy
  - protocolo rastreador GPS infantil Castel
  - protocolo de comunicación PT 720
  - protocolo de rastreo PT 720
  - posicionamiento Castel PT 720 LBS WIFI GPS
  - protocolo SOS y geocerca PT 720
  - compatibilidad de protocolo de dispositivos Plaspy
  - integración de rastreadores Plaspy
---

# Castel - Protocolo PT-720

Esta página describe el contexto del protocolo público para usar el reloj rastreador GPS para niños Castel PT-720 con Plaspy. Resume cómo el PT-720 comunica posición, alertas y estado básico del dispositivo de forma útil para su integración en una plataforma de monitoreo o gestión de flotas. El PT-720 es un dispositivo portátil para niños con funciones como comunicación bidireccional, posicionamiento por GPS, LBS y WIFI, alertas SOS, geocercas, rutas históricas y podómetro. Esta página se centra en conceptos a nivel de protocolo que permiten que el dispositivo reporte datos útiles a Plaspy sin exponer detalles internos del fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa correctamente al endpoint de Plaspy. Los servidores de Plaspy son accesibles en d.plaspy.com y en la IP pública 54.85.159.138 usando el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos compatibles. El tiempo exacto de los mensajes, los campos disponibles y el comportamiento pueden variar según el firmware, la revisión de hardware y la implementación del fabricante, por lo que es importante confirmar detalles específicos del dispositivo cuando sea necesario.

## Visión general del protocolo

A alto nivel, el protocolo de reporte del PT-720 define cómo el dispositivo empaqueta las posiciones, alertas y el estado para que un servicio backend pueda interpretarlos. El protocolo se sitúa entre el hardware del dispositivo y Plaspy y permite enviar actualizaciones de posición, eventos SOS y telemetría básica desde el reloj hacia la plataforma.

- Permite que el PT-720 informe posiciones basadas en GPS, LBS y WIFI a Plaspy para que la ubicación sea visible en la plataforma.
- Transporta señales de alerta y eventos como pulsaciones de SOS, activaciones de geocerca y registros de llamadas entrantes para la gestión de notificaciones en el servidor.
- Proporciona información básica de identificación y estado para que Plaspy asocie los mensajes entrantes con el registro de dispositivo correcto.
- Lleva telemetría compacta que incluye estado de batería, conteo de pasos y simples indicadores de salud del dispositivo.
- Permite que Plaspy reciba actualizaciones periódicas y datos históricos usados para reconstrucción de rutas e informes.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones entrantes en un único endpoint compartido e identificar el formato de comunicación cuando un dispositivo correctamente configurado se conecta. Si el PT-720 está configurado para reportar al endpoint de Plaspy, la plataforma detectará automáticamente cómo interpretar los mensajes de ese dispositivo sin que el usuario deba seleccionar manualmente el protocolo.

- Los dispositivos deben configurarse para reportar a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Plaspy soporta reportes tanto por UDP como por TCP en el mismo puerto y aprovecha esa consistencia para simplificar la incorporación.
- Cuando el PT-720 envía sus primeros mensajes, Plaspy asocia el ID del dispositivo con una cuenta y aplica automáticamente el manejo del protocolo detectado.
- Normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy cuando el dispositivo está configurado para enviar al endpoint de Plaspy.
- Si un dispositivo no parece comunicarse correctamente, verificar la configuración de reporte y las versiones de firmware es el primer paso de solución de problemas.

## Transporte y contexto de conexión

El contexto de transporte se enfoca en cómo el PT-720 establece una ruta de red hacia Plaspy más que en el contenido específico de cada mensaje. Entender el transporte ayuda en la configuración de cortafuegos y en pruebas básicas de conectividad.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y las opciones de configuración.
- Plaspy acepta reportes dirigidos a d.plaspy.com así como a la IP directa 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto de reporte, lo que simplifica las reglas de red y el enrutamiento para flotas grandes.
- Elegir UDP o TCP influye en la fiabilidad y en el comportamiento de retransmisión a nivel de transporte, pero no cambia la forma en que Plaspy detecta el protocolo del dispositivo.
- Asegúrese de que el equipo de red y los cortafuegos permitan el tráfico saliente e entrante requerido para el transporte elegido hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la frecuencia de mensajes, los campos disponibles o el comportamiento de eventos, por lo que se debe confirmar la compatibilidad después de actualizaciones de firmware.
- Las revisiones de hardware o variantes regionales del PT-720 pueden tener ligeras diferencias en las fuentes de posicionamiento o en el conjunto de eventos soportados.
- Las configuraciones del fabricante pueden permitir elegir UDP o TCP; seleccione el transporte que su red soporte y confirme que Plaspy reciba los mensajes.
- La configuración del dispositivo (APN, provisión de la SIM y dirección del servidor) debe apuntar al endpoint de Plaspy para permitir la detección automática.
- Valide la compatibilidad contra la documentación más reciente de Castel cuando se observe un comportamiento inusual.
- Para cualquier pregunta de integración, verifique que los identificadores del dispositivo coincidan con las entradas en Plaspy para que los datos se asocien con la cuenta correcta.

## Por qué es importante entender el protocolo

Comprender cómo el PT-720 se comunica con un servicio backend ayuda a administradores e integradores a configurar reportes fiables, diagnosticar problemas y planear actualizaciones de flotas de dispositivos. Conocer el transporte y el rol general del protocolo reduce el tiempo de puesta en marcha y mejora la visibilidad operativa a largo plazo.

- Acelera la configuración inicial al aclarar qué dirección de servidor y transporte debe usar el dispositivo para comunicarse con Plaspy.
- Facilita la resolución de problemas por datos faltantes o reportes intermitentes al aislar factores de transporte, configuración y firmware del dispositivo.
- Apoya decisiones sobre políticas de red y reglas de cortafuegos al centrarse en un único puerto compartido usado por Plaspy.
- Hace más sencillo validar que las alertas SOS, eventos de geocerca y rutas históricas están llegando y siendo procesadas.
- Reduce la incertidumbre cuando los dispositivos se actualizan o reemplazan al describir dónde suelen ocurrir diferencias de comportamiento.

## Por qué usar Plaspy con este protocolo

Usar el Castel PT-720 con Plaspy ofrece una forma práctica de monitorear rastreadores portátiles para niños aprovechando una plataforma que acepta y reconoce automáticamente los mensajes de los dispositivos compatibles. El enfoque de endpoint único de Plaspy simplifica el despliegue para organizaciones que gestionan múltiples modelos de dispositivos y reduce la complejidad de configuración por equipo.

Si desea conocer más sobre cómo Plaspy soporta dispositivos rastreadores y revisar las funciones de la plataforma, visite https://www.plaspy.com. Para los detalles más actuales a nivel de protocolo del dispositivo, notas de firmware e instrucciones específicas del fabricante, verifique la información con Castel en http://www.castelecom.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
