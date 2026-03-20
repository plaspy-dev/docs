---
slug: /lk_gps/lk106/configuration
id: lk106-configuration
sidebar_label: Configuration
title: LK-GPS - LK106 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador LK-GPS LK106 con Plaspy, ajustes de servidor y pasos para integración rápida
keywords:
  - Configuración LK GPS LK106
  - Configuración LK106 Plaspy
  - Configuración servidor LK106
  - Configuración rastreador GPS LK
  - Configuración software seguimiento LK106
  - Configuración rastreador Plaspy
  - Integración rastreador personal
  - Ajustes servidor rastreador GPS
  - Configuración SMS LK106
  - Configuración seguimiento en tiempo real
---

# LK-GPS - Configuración del LK106

Esta página documenta el contexto público de configuración para usar el LK-GPS LK106 con la plataforma Plaspy. Resume los ajustes de servidor de Plaspy que deberá aplicar, describe el flujo típico de integración y explica qué verificar antes de intentar registrar y operar el dispositivo con Plaspy. El enfoque es práctico y se basa en la información pública de compatibilidad y la descripción del dispositivo LK106.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador al conectarse. Los pasos de configuración por parte del fabricante para el LK106 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para preparar el LK106 para Plaspy y, cuando sea necesario, siga la documentación del fabricante o la herramienta de configuración del proveedor para comandos específicos o configuración vía SMS.

## Resumen de la configuración

El objetivo es apuntar el LK106 a Plaspy y confirmar que envía de manera fiable datos de posición y eventos. Esto deja el dispositivo listo para monitoreo en tiempo real y alertas dentro del entorno Plaspy.

- Configure el dispositivo para enviar sus datos al endpoint y puerto del servidor Plaspy.
- Asegúrese de que el LK106 tenga una SIM activa con datos móviles y SMS habilitado para configuración por fallback.
- Valide la selección de transporte (UDP o TCP) en el dispositivo si la herramienta de configuración lo requiere.
- Guarde y aplique los ajustes, reinicie el rastreador si la herramienta del fabricante lo solicita y confirme que Plaspy recibe datos.
- Verifique que SOS, geocercas y alertas por movimiento reenvíen eventos a Plaspy para monitoreo.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de conexión de Plaspy al configurar el LK106. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP en el dispositivo según se requiera
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Una unidad LK106 cargada y alimentada según las instrucciones del fabricante.
- Una tarjeta SIM insertada con datos móviles activos y SMS habilitado para configuración por fallback y notificaciones.
- Acceso al método oficial de configuración del LK-GPS, aplicación o formato de comandos SMS proporcionados por el fabricante.
- Una cuenta en Plaspy o la posibilidad de registrar el dispositivo en la plataforma Plaspy para visibilidad y alertas.
- Conectividad de red desde el dispositivo hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Cómo se conecta este rastreador a Plaspy

El LK106 envía datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma muestre posiciones en vivo, active reglas y reenvíe notificaciones. El rastreador utiliza habitualmente datos móviles para reportes continuos y SMS como fallback para configuración o alertas de emergencia en áreas con cobertura de datos limitada.

- Los datos se envían a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Seleccione UDP o TCP como transporte si la configuración del LK106 exige una selección explícita.
- Plaspy recibe las actualizaciones de posición y las muestra en los paneles de la plataforma.
- Las alarmas SOS, las notificaciones de entrada/salida de geocercas y las alertas por movimiento se reenvían a las reglas y notificaciones de Plaspy.
- Los informes de nivel de batería y estado se entregan a Plaspy para monitoreo y alertas.

## Flujo de configuración común

1. Acceda al método o software oficial de configuración de LK-GPS provisto por el fabricante o su vendedor (app, herramienta web o conjunto de comandos SMS).
2. Ubique el área de ajustes de servidor o plataforma en la interfaz de configuración del dispositivo.
3. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138.
4. Establezca el puerto en 8888 tal como lo requiere Plaspy; tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos.
5. Elija UDP o TCP si el dispositivo solicita selección de transporte; Plaspy detectará automáticamente el protocolo del rastreador al conectarse.
6. Aplique o guarde la configuración mediante la herramienta del fabricante o con el comando SMS si está soportado.
7. Reinicie o corte la alimentación del dispositivo si las instrucciones del fabricante lo recomiendan.
8. Valide que el dispositivo reporta a Plaspy comprobando las primeras actualizaciones de posición y mensajes de evento en su cuenta Plaspy.

## Ejemplos de comandos de configuración

Esta página no incluye comandos públicos específicos del LK106. Los comandos exactos y los métodos dependen de la herramienta del fabricante, la versión de firmware o el formato de comandos SMS proporcionado por LK-GPS. Siga la guía de configuración de LK-GPS o la herramienta del proveedor para establecer el servidor en d.plaspy.com o 54.85.159.138, el puerto en 8888 y seleccionar UDP o TCP si es necesario.

Si su proveedor facilita comandos SMS para la configuración, normalmente siguen un orden como: establecer servidor, establecer puerto, seleccionar transporte, guardar ajustes y reiniciar. Conserve los marcadores de posición que use la documentación del proveedor (por ejemplo los relacionados con APN) y reemplácelos por los valores de su red al aplicar la configuración.

## Notas de configuración

- Las versiones de firmware del LK106 y las aplicaciones de configuración del proveedor pueden variar. Confirme los pasos exactos en el manual de LK-GPS correspondiente a su revisión de firmware.
- Cuando tenga la opción, UDP suele emplearse para tráfico de seguimiento liviano, mientras que TCP puede ayudar con la entrega fiable en algunas redes; Plaspy acepta ambos y detecta el protocolo automáticamente.
- La configuración por SMS es útil como alternativa en zonas con conectividad de datos limitada; sin embargo, los formatos de comandos SMS varían según el fabricante.
- Siempre guarde o aplique los ajustes en la herramienta del proveedor y reinicie el dispositivo si el fabricante lo recomienda para que los cambios surtan efecto.
- Verifique el IMEI del dispositivo y los datos de registro que requiera Plaspy para que el dispositivo aparezca correctamente en su cuenta tras el primer contacto.

## Por qué usar Plaspy con esta configuración

Usar el LK-GPS LK106 con Plaspy ofrece una forma sencilla de integrar el seguimiento de personas y pequeños activos en una plataforma centralizada. Al ingerir la telemetría del LK106, Plaspy permite ver posiciones en vivo, recibir alertas SOS y de geocerca, y monitorear el estado de batería desde interfaces web y móviles para mejorar la conciencia operativa y la respuesta oportuna.

Para obtener más información sobre Plaspy y cómo gestiona las conexiones y la visibilidad de dispositivos, visite https://www.plaspy.com. Para detalles específicos de configuración del LK106, comportamiento de firmware e instrucciones del fabricante, verifique la información en el sitio oficial de LK-GPS https://www.lk-gps.com.
