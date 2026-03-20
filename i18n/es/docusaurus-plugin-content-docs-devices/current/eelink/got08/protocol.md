---
slug: /eelink/got08/protocol
id: got08-protocol
sidebar_label: Protocol
title: EElink - GOT08 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del EElink GOT08 y cómo envía datos a Plaspy para telemetría y seguimiento
keywords:
  - protocolo EElink GOT08
  - rastreador GPS GOT08
  - compatibilidad EElink GOT08 Plaspy
  - protocolo de comunicación GOT08
  - protocolo de rastreo GOT08
  - protocolo OBD GPS EElink
  - telemetría vehicular GOT08
  - protocolo de dispositivo Plaspy
  - compatibilidad de rastreadores Plaspy
  - rastreo de flotas GOT08
---

# EElink - Protocolo GOT08

Esta página describe el contexto público del protocolo para usar el rastreador OBD GPS EElink GOT08 con la plataforma Plaspy. Se centra en cómo se comunica el dispositivo en términos generales, de qué manera Plaspy consume esos datos y qué considerar al configurar y validar los reportes del dispositivo para el monitoreo de flotas y vehículos.

Plaspy se apoya en ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando una unidad reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y la telemetría disponible pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página mantiene un enfoque general y recomienda verificar la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El GOT08 utiliza el factor de forma OBD-II para recopilar posición GNSS y telemetría del vehículo, y para transmitir esa información a un servidor remoto. En el contexto de Plaspy, el protocolo del dispositivo regula cómo el rastreador se identifica ante el servidor, cómo informa la ubicación y los parámetros OBD, y cómo mantiene una conexión continua para actualizaciones en tiempo real y cargas de datos registrados.

- Permite la transmisión de posición GNSS y telemetría extraída del OBD del vehículo hacia Plaspy para seguimiento en vivo y registros históricos.
- Proporciona información identificadora para que Plaspy pueda asociar los mensajes entrantes con un dispositivo y perfil de vehículo específicos.
- Soporta reportes periódicos y basados en eventos, de modo que la ubicación, el encendido y condiciones de falla se manejen en tiempo real.
- Permite que los datos registrados a bordo se transmitan a Plaspy cuando la conectividad lo permite, garantizando cobertura durante condiciones celulares intermitentes.
- Actúa como puente entre el hardware GOT08 y los paneles, alertas y análisis de Plaspy sin requerir cambios de cableado en la mayoría de las instalaciones.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes entrantes desde dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador para los dispositivos soportados. Cuando el GOT08 está configurado para reportar a Plaspy, la plataforma usa su endpoint y el contexto de conexión para identificar el tipo de dispositivo y convertir los datos entrantes en campos de telemetría utilizables.

- Los dispositivos reportan a la dirección del servidor de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 cuando están configurados para Plaspy.
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto, lo que simplifica la provisión y reduce errores de configuración.
- El endpoint de Plaspy escucha en el puerto 8888 y puede aceptar datos de rastreadores que usan transporte UDP o TCP.
- En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo dentro de Plaspy siempre que el GOT08 esté configurado para reportar al endpoint y puerto de Plaspy.
- Una identidad y reporte correctos del dispositivo permiten a Plaspy mapear los campos entrantes a los atributos correctos del vehículo y la telemetría.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el GOT08 alcanza Plaspy más que los detalles de bajo nivel del paquete. El rastreador puede configurarse para usar transporte UDP o TCP y debe apuntar al endpoint y puerto compartidos de Plaspy para asegurar la entrega correcta de la telemetría.

- El GOT08 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y el modo de transporte elegido.
- El endpoint público de reporte de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para dispositivos que requieren una dirección IP.
- El puerto 8888 se usa para todos los dispositivos compatibles con Plaspy, permitiendo una única configuración de puerto de salida entre modelos.
- Elegir UDP puede reducir la latencia en actualizaciones frecuentes de ubicación, mientras que TCP ofrece una opción orientada a conexión cuando el dispositivo lo soporta.
- Asegúrese de que la red del vehículo o de la flota permita tráfico de salida hacia el endpoint de Plaspy y al puerto 8888 para una entrega confiable.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden agregar, eliminar o modificar qué parámetros OBD reporta el GOT08; verifique la versión de firmware del dispositivo al comprobar compatibilidad.
- Las revisiones de hardware y las variantes regionales a veces cambian el comportamiento o el nombre de los parámetros; consulte la documentación del lote de producto si está disponible.
- La selección del transporte (UDP vs TCP) debe coincidir con lo que el dispositivo soporta y con las restricciones del operador o la red en su zona de despliegue.
- Algunos parámetros OBD dependen del vehículo; no todos los vehículos exponen la misma telemetría aun cuando el rastreador y la plataforma los soporten.
- Valide el reporte del dispositivo en un vehículo de prueba antes del despliegue masivo para confirmar que Plaspy recibe la telemetría e identificadores esperados.
- Consulte la documentación del fabricante para ajustes específicos del dispositivo que habiliten o deshabiliten métricas OBD particulares o modos de reporte.

## Por qué es importante comprender el protocolo

Comprender cómo el GOT08 se comunica con Plaspy mejora el éxito de la configuración, reduce el tiempo de resolución de problemas y ayuda a garantizar la confiabilidad a largo plazo del monitoreo de flotas. Tener claridad sobre el contexto de comunicación le permite validar que la ubicación y la telemetría OBD lleguen completas y se mapeen correctamente dentro de Plaspy.

- Agiliza la resolución de problemas al aclarar si un inconveniente es de transporte, configuración o del dispositivo.
- Asegura que el mapeo de telemetría en Plaspy coincida con los campos expuestos por el GOT08 para paneles y alertas significativas.
- Ayuda a planificar reglas de red y firewall para permitir tráfico de salida hacia d.plaspy.com o la IP del servidor en el puerto 8888.
- Orienta las decisiones de actualización de firmware cuando se requieren nuevos campos de telemetría o cambios de comportamiento.
- Reduce el riesgo de despliegue al promover la validación previa de la configuración de reporte, identidad y transporte.

## Por qué usar Plaspy con este protocolo

Usar el EElink GOT08 con Plaspy ofrece un camino de bajo fricción hacia la visibilidad del vehículo y telemetría accionable. El conector OBD-II facilita la instalación en flotas grandes, y Plaspy ingiere datos de ubicación y diagnósticos para apoyar el rastreo, la planificación de mantenimiento y las alertas sin cableado complejo.

El modelo de endpoint compartido de Plaspy y la detección automática de protocolo permiten que muchas unidades GOT08 se configuren para reportar a los mismos ajustes de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888) y comiencen a transmitir datos útiles con rapidez. Para organizaciones que necesitan seguimiento centralizado, análisis de conductores y vehículos, y reportes históricos, el GOT08 junto con Plaspy ofrece una combinación práctica para una implementación rápida y supervisión continua de la flota.

Learn more about Plaspy and how it integrates with vehicle trackers on the Plaspy website https://www.plaspy.com. Note that protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific information on the manufacturer site https://www.eelink.com.cn/.
