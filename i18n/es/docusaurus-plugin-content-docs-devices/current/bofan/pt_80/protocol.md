---
slug: /bofan/pt_80/protocol
id: pt_80-protocol
sidebar_label: Protocol
title: Bofan - PT-80 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo y compatibilidad con Plaspy para el rastreador personal Bofan PT 80
keywords:
  - protocolo Bofan PT 80
  - protocolo GPS Bofan PT 80
  - Bofan PT 80 Plaspy
  - protocolo de rastreo PT 80
  - protocolo de rastreador GPS Bofan
  - protocolo para rastreador GPS personal
  - rastreo GPS GPRS
  - compatibilidad de protocolo de rastreador
  - comunicación de dispositivo Plaspy
  - protocolo de geocercas y alertas
---

# Bofan - Protocolo PT-80

Esta página ofrece una visión pública del contexto de comunicación para usar el rastreador personal GPS Bofan PT-80 con Plaspy. Se concentra en el comportamiento del protocolo a alto nivel y en los ajustes de conexión relevantes al apuntar un PT-80 a Plaspy para el envío de posiciones, alertas y monitoreo remoto.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware del PT-80, la revisión de hardware o la implementación del fabricante, por lo que esta página se mantiene en un nivel de protocolo seguro y ampliamente aplicable, mencionando la funcionalidad típica del PT-80 como reporte GPS, alertas de pánico, notificaciones de geocerca, informe por SMS y GPRS y monitoreo de voz.

## Resumen del protocolo

El PT-80 transmite posiciones GPS, estado del dispositivo y notificaciones de eventos a un servidor mediante datos móviles o SMS según la configuración. El protocolo del rastreador define cómo el dispositivo se identifica, cómo reporta ubicación y eventos de movimiento, y cómo envía señales de alerta como pánico, exceso de velocidad, batería baja y entrada o salida de geocerca.

- Permite transmisiones periódicas o por eventos de coordenadas GPS y estado del dispositivo a un servidor remoto
- Transporta señales de emergencia y alertas, incluyendo activaciones del botón de pánico y alarmas por movimiento
- Soporta reporte remoto sobre GPRS con SMS como opción de configuración o ruta de respaldo
- Proporciona la identidad y el estado necesarios para que un backend como Plaspy vincule los datos a una cuenta
- Permite que la información de geocercas y alertas sea interpretada por el servidor para notificaciones

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos reportados en un endpoint de red compartido y determina automáticamente el protocolo del rastreador usado por las conexiones entrantes. En la mayoría de los casos, un PT-80 correctamente configurado que envíe datos al endpoint de Plaspy será reconocido sin necesidad de seleccionar manualmente el protocolo en la plataforma.

- Plaspy acepta conexiones y reportes en d.plaspy.com así como en la IP del servidor 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador para los reportes entrantes
- Los dispositivos pueden configurarse para usar TCP o UDP en el puerto compartido según soporte del equipo y la configuración del cliente
- Si el PT-80 está configurado para reportar al endpoint de Plaspy y usa correctamente GPRS, normalmente no se requiere elegir el protocolo manualmente dentro de Plaspy
- Para equipos que usan SMS como respaldo, asegúrese de que el reporte por GPRS esté configurado hacia el endpoint de Plaspy para permitir la detección automática

## Transporte y contexto de conexión

Las opciones de conexión del PT-80 dependen de cómo se configure el dispositivo y de los modos de comunicación que soporte. Plaspy expone un único endpoint y puerto compartido para simplificar la configuración entre múltiples modelos de rastreadores.

- El PT-80 puede configurarse para reportar vía UDP o TCP en el puerto 8888
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 para alcanzar Plaspy
- El puerto 8888 se usa uniformemente entre los dispositivos soportados por Plaspy, lo que facilita la configuración del servidor en el rastreador
- Los ajustes de GPRS, incluyendo APN e intervalo de reporte, afectan la frecuencia con que el PT-80 se conecta al endpoint de Plaspy
- Si cambia el protocolo de transporte en el dispositivo, verifique que servidor, puerto y transporte coincidan con la configuración del equipo

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar la temporización de mensajes, los eventos soportados o campos opcionales en los reportes del rastreador
- Revisiones de hardware o diferentes series de producción del PT-80 pueden presentar variaciones menores en el protocolo aun bajo el mismo nombre de modelo
- La elección de transporte entre TCP y UDP puede alterar comportamientos como garantías de entrega y el establecimiento de conexión
- Es posible que el fabricante requiera la configuración por SMS o una herramienta de configuración para apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Siempre valide el comportamiento del dispositivo después de apuntarlo a Plaspy observando los reportes iniciales y confirmando el enlace a la cuenta
- Para funciones como monitoreo de voz o almacenamiento de waypoints, verifique si esas funciones requieren soporte específico de firmware o del lado del servidor

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación del PT-80 y el contexto de conexión ayuda a asegurar una configuración fluida, un comportamiento predecible y una resolución de problemas más rápida cuando los dispositivos se integran con Plaspy.

- Garantiza que la dirección del servidor y los ajustes de transporte se apliquen correctamente en el dispositivo para un reporte confiable
- Facilita el diagnóstico de reportes faltantes revisando la conectividad GPRS, el APN y si el tráfico del dispositivo llega a d.plaspy.com o a 54.85.159.138
- Aclara cómo se entregan y muestran en Plaspy alertas como pánico o eventos de geocerca
- Orienta las pruebas de ahorro de batería y detección de movimiento para generar los reportes esperados
- Ayuda a planificar actualizaciones de firmware o reemplazos de dispositivos que podrían cambiar el comportamiento del protocolo

## Por qué usar Plaspy con este protocolo

El Bofan PT-80 ofrece un conjunto compacto de funciones para seguimiento personal, incluyendo reporte de posición en tiempo real, alertas por botón de pánico, notificaciones de geocerca y registro en el dispositivo. Usar Plaspy como backend permite a organizaciones y usuarios centralizar esos reportes, recibir alertas estandarizadas y revisar recorridos históricos de múltiples dispositivos en un solo lugar. La detección automática de protocolos de Plaspy y el endpoint de conexión compartido reducen la complejidad de configuración al apuntar dispositivos PT-80 al servicio.

Para saber más sobre Plaspy y cómo maneja el reporte de dispositivos, visite https://www.plaspy.com. Para detalles específicos más recientes del protocolo del dispositivo, notas de firmware e instrucciones de configuración proporcionadas por el fabricante, verifique la documentación oficial de Bofan en https://www.bofancloud.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
