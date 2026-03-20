---
slug: /flextrack/lommy_capture_9b16/configuration
id: lommy_capture_9b16-configuration
sidebar_label: Configuration
title: Flextrack - Lommy Capture 9B16 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el tracker Flextrack Lommy Capture 9B16 a Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración Flextrack Lommy Capture 9B16
  - Configuración Lommy Capture Plaspy
  - Configuración servidor Lommy Capture
  - Configuración rastreador GPS para remolques
  - Guía de configuración de trackers Plaspy
  - Consejos de instalación Lommy Capture
  - Integración de flotas Plaspy
  - Configuración de seguimiento de activos
  - Conectividad Lommy Capture
  - Configuración de dispositivos Plaspy
---

# Flextrack - Lommy Capture 9B16 Configuración

Esta página describe el contexto público de configuración para usar el Flextrack Lommy Capture 9B16 con Plaspy. Explica los ajustes de servidor compartidos que utiliza Plaspy, los pasos prácticos que habitualmente siguen los integradores y técnicos, y qué verificar antes de poner el dispositivo en línea. La guía se centra en los valores públicos y el flujo de trabajo que permiten que el Lommy Capture 9B16 reporte posiciones y actividad a los sistemas impulsados por Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del tracker, aunque los pasos concretos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta página como checklist práctico de integración y confirme cualquier comando o ajuste específico del dispositivo con la documentación del fabricante antes del despliegue final.

## Resumen de la configuración

Esta configuración prepara al Lommy Capture 9B16 para transmitir posiciones GNSS y telemetría de movimiento a Plaspy, para que los activos sean visibles en su entorno de monitoreo. El proceso alinea el dispositivo con los endpoints del servidor Plaspy, selecciona el método de transporte y valida que el tracker pueda reportar en condiciones reales de operación.

- Apunte el dispositivo al endpoint de servidor de Plaspy para que la telemetría llegue a su cuenta Plaspy.
- Elija el protocolo de transporte compatible entre UDP o TCP según lo admita el equipo.
- Verifique la conectividad celular y que el dispositivo obtenga soluciones GNSS y las reporte.
- Confirme que el reporte en buffer funciona probando con conectividad intermitente o condiciones de energía simuladas.
- Valide la visibilidad en Plaspy después de que el dispositivo envíe sus primeros reportes para activar alertas y seguimiento.

## Ajustes de servidor Plaspy

- El dominio de servidor d.plaspy.com debe usarse como host principal para la configuración de uplink del tracker.
- La IP del servidor 54.85.159.138 es la dirección pública del endpoint de Plaspy.
- El puerto 8888 es el puerto compartido que utiliza Plaspy para todos los dispositivos compatibles.
- Se soporta transporte por UDP o TCP y el dispositivo puede configurarse en cualquiera de los dos transportes en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del tracker, por lo que los dispositivos que usan formatos estándar son reconocidos sin configuraciones por dispositivo.

## Requisitos típicos antes de la configuración

- Acceso físico al Lommy Capture 9B16 y a los puntos de cableado del vehículo necesarios para la instalación y las pruebas.
- Servicio celular activo para la SIM del dispositivo con datos o capacidad SMS según lo soporte la unidad.
- Acceso al método oficial de configuración de Flextrack o al software para el Lommy Capture 9B16.
- Conocimiento de la versión de firmware del dispositivo y de los comandos o opciones de configuración documentados por el proveedor.
- Visibilidad básica GNSS durante las pruebas o un procedimiento de test para validar soluciones de posición si está instalado dentro de una carcasa de faro.
- Plan de respaldo para validar el reporte en buffer cuando el dispositivo experimente pérdida temporal de conectividad.

## Cómo se conecta este tracker a Plaspy

El Lommy Capture 9B16 transmite soluciones GNSS, eventos de movimiento y telemetría en buffer al endpoint y puerto compartido de Plaspy. Plaspy recibe paquetes en el mismo puerto para todos los dispositivos y determina automáticamente el protocolo correcto, de modo que los reportes entrantes se parsean y asocian con la cuenta y el activo correspondiente.

- El tracker envía reportes periódicos y por eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP según la configuración.
- Los disparadores del sensor de movimiento pueden provocar ráfagas de reporte adaptativas que se reenvían a Plaspy para visibilidad inmediata.
- Cuando la conectividad es intermitente, el almacenamiento flash local almacena reportes y los reenvía cuando el tracker recupera acceso a la red hacia el endpoint de Plaspy.
- Las alarmas y actualizaciones de ubicación son consumidas por Plaspy para monitoreo en tiempo real, trazas históricas y flujos de alerta.
- La detección automática de protocolo de Plaspy reduce la necesidad de mapear manualmente tipos de protocolo de trackers en la plataforma.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Flextrack o al software para el Lommy Capture 9B16 según la documentación del fabricante.
2. Ingrese el host del servidor Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Seleccione UDP o TCP como transporte si el equipo requiere elegir un protocolo de transporte.
5. Aplique o guarde la configuración en la herramienta del dispositivo y confirme que no haya errores de sintaxis en las entradas.
6. Reinicie el dispositivo si el fabricante recomienda un reboot para aplicar los ajustes de red.
7. Valide que el Lommy Capture reporte a Plaspy confirmando que la primera solución GNSS o evento aparezca en su entorno de monitoreo Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración y el método para enviarlos dependen de la herramienta de configuración de Flextrack o del firmware del Lommy Capture 9B16. Los fabricantes pueden proporcionar comandos por SMS, herramientas USB o interfaces web. Dado que los métodos disponibles varían según el firmware y el conjunto de herramientas del proveedor, consulte la documentación oficial de Flextrack para la sintaxis y ejemplos de comandos.

Tenga en cuenta que al usar comandos o la interfaz del dispositivo para establecer la información del servidor debe usar el host Plaspy d.plaspy.com o la IP 54.85.159.138 y configurar el puerto 8888. Plaspy acepta UDP o TCP y detectará automáticamente el protocolo del tracker al recibir datos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los comandos de configuración disponibles y su sintaxis exacta. Siempre confirme el conjunto de comandos para la revisión de firmware del Lommy Capture 9B16 en uso.
- Elija UDP para menor overhead en transmisiones típicas de trackers o TCP cuando se requiera entrega ordenada o comportamiento basado en sesión, según lo soporte el dispositivo.
- SMS puede estar soportado como método de reserva para configurar algunos parámetros o para reportes de emergencia; verifique el formato de comandos SMS en la guía del fabricante.
- El buffering en memoria flash local reenviará los reportes almacenados a d.plaspy.com en el puerto 8888 cuando se restablezca la conectividad; valide el buffering probando con cortes simulados.
- Se recomienda un cableado seguro y un sellado correcto de las penetraciones en la carcasa del faro para mantener la protección IP65 y la fiabilidad a largo plazo.

## Por qué usar Plaspy con esta configuración

Usar el Lommy Capture 9B16 con Plaspy ofrece visibilidad discreta y de bajo mantenimiento para remolques y otros activos remolcados. Plaspy absorbe posiciones GNSS y eventos basados en movimiento desde el Lommy Capture para que los gestores de flota puedan monitorear ubicaciones, detectar movimientos no autorizados y analizar rutas históricas con mínima intervención en el dispositivo.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los comandos de configuración específicos más recientes, notas de firmware y guías de instalación consulte al fabricante en https://flextrack.dk ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.
