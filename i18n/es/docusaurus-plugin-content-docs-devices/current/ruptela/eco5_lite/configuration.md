---
slug: /ruptela/eco5_lite/configuration
id: eco5_lite-configuration
sidebar_label: Configuration
title: Ruptela - Eco5 Lite+ Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Ruptela Eco5 Lite+ para su uso con la plataforma Plaspy
keywords:
  - configuración Ruptela Eco5 Lite+
  - instalación Ruptela Eco5 Lite+ Plaspy
  - guía configuración Eco5 Lite
  - configuración servidor Eco5 Lite
  - rastreador GPS compatible Plaspy
  - configuración rastreador Ruptela
  - configuración plataforma GPS Eco5 Lite
  - configuración rastreo vehicular Plaspy
  - configuración rastreador flotas Ruptela
  - integración Eco5 Lite Plaspy
---

# Ruptela - Configuración del Eco5 Lite+

Esta página ofrece la información pública de configuración para usar el Ruptela Eco5 Lite+ con Plaspy. Describe los ajustes de servidor prácticos y el flujo de trabajo típico necesario para que este rastreador informe sus posiciones y telemetría en la plataforma Plaspy. Siga las indicaciones para preparar el dispositivo a fin de comunicarse con Plaspy y validar que las posiciones y los datos de telemetría se muestren correctamente en su panel Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en las conexiones entrantes. Sin embargo, los pasos específicos en el lado del fabricante pueden variar según la versión de firmware del Eco5 Lite+, la revisión de hardware, el tipo de instalación y las herramientas de configuración de Ruptela que se empleen. El Eco5 Lite+ es un rastreador resistente y de bajo consumo diseñado para vehículos eléctricos, motocicletas y flotas de baja potencia; además soporta conectividad celular y accesorios BLE, por lo que debe validar la preparación del equipo y consultar la documentación de Ruptela cuando sea necesario.

## Resumen de configuración

Este proceso prepara el Eco5 Lite+ para reportar ubicación y telemetría a Plaspy usando el endpoint y puerto compartidos de Plaspy. El objetivo es configurar el rastreador para enviar datos de forma fiable y confirmar su visibilidad dentro de Plaspy.

- Configure el rastreador para que apunte al endpoint y puerto del servidor Plaspy y así pueda establecer la conexión para el reporte en tiempo real.
- Seleccione el transporte (UDP o TCP) si el dispositivo requiere una selección explícita y guarde los cambios.
- Verifique la conectividad celular, la fijación GNSS y la alimentación del dispositivo para asegurar la entrega periódica de reportes.
- Confirme que el dispositivo aparece en Plaspy y que las actualizaciones de ubicación y la telemetría básica son visibles.
- Conserve las herramientas de configuración del fabricante y las notas de firmware para resolución de problemas y actualizaciones.

## Ajustes del servidor de Plaspy

Utilice estos ajustes públicos de Plaspy al configurar el Eco5 Lite+.

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol on connection

Nota: Todos los dispositivos en Plaspy usan el mismo puerto (8888). Plaspy intentará detectar automáticamente el protocolo del dispositivo una vez que el rastreador se conecte al servidor.

## Requisitos previos típicos antes de la configuración

- Asegúrese de que el Eco5 Lite+ tenga una fuente de alimentación confiable y, si corresponde, que la batería interna de respaldo esté cargada.
- Instale y active una SIM celular compatible con servicio de datos apropiado para su mercado y la variante celular del dispositivo.
- Tenga acceso al método oficial de configuración de Ruptela o al software correspondiente, como Ruptela Device Center u otras herramientas aprobadas por el proveedor.
- Verifique que cuenta con la versión de firmware correcta y la documentación específica del fabricante.
- Confirme que GNSS y sensores BLE (si se usan) estén habilitados y funcionando para el reporte de telemetría.
- Prepare los identificadores requeridos, como el IMEI o el ID del dispositivo, que Plaspy o su administrador de flota puedan necesitar para registrar o identificar el equipo.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el Eco5 Lite+ envía datos de ubicación y telemetría a través del enlace celular al endpoint y puerto compartidos de Plaspy. Plaspy recibe la conexión entrante y determina automáticamente el protocolo del rastreador para poder parsear y presentar los datos en la plataforma.

- El rastreador envía actualizaciones periódicas de posición a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Puede elegir UDP o TCP como transporte en el dispositivo cuando sea necesario; ambos protocolos son compatibles en el puerto 8888.
- Plaspy detecta automáticamente el protocolo entrante y asigna los mensajes del dispositivo al parser correspondiente.
- Una vez recibidos los datos, Plaspy muestra ubicación en tiempo real, reportes de eventos y telemetría básica en el panel.
- Utilice las herramientas del fabricante y los registros del dispositivo para confirmar que el rastreador está intentando conectarse al endpoint de Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Ruptela o al software correspondiente (por ejemplo Ruptela Device Center o una herramienta aprobada por el proveedor).
2. Ingrese el endpoint del servidor Plaspy: d.plaspy.com o 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Seleccione el protocolo de transporte UDP o TCP si la interfaz del dispositivo requiere elegir transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante y envíe los cambios al dispositivo.
6. Reinicie el equipo si la herramienta del fabricante o el firmware requieren reboot para que los cambios se apliquen.
7. Valide que el dispositivo esté reportando a Plaspy verificando la llegada de mensajes y las actualizaciones de ubicación en el panel Plaspy.

## Ejemplos de comandos de configuración

El método de configuración del Eco5 Lite+ varía según las herramientas Ruptela y el firmware. Dado que los comandos y cadenas SMS específicos dependen del firmware y de la interfaz de configuración, siga las instrucciones de Ruptela Device Center o el manual del dispositivo para la sintaxis exacta. En muchas implementaciones usará el software de configuración de Ruptela para establecer:

- Server domain or IP to d.plaspy.com or 54.85.159.138
- Port to 8888
- Transport to UDP or TCP as required

Si utiliza un método por línea de comandos o basado en SMS provisto por Ruptela para su firmware, consulte la documentación oficial de Ruptela o la herramienta de gestión de dispositivos para las cadenas y el orden preciso de los comandos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las etiquetas de los menús de configuración y las opciones disponibles; siempre verifique la versión de firmware antes de aplicar ajustes.
- Algunos instaladores prefieren configurar el servidor como dominio (d.plaspy.com) y otros usan la IP del servidor (54.85.159.138); ambos son aceptados por Plaspy.
- Elija UDP o TCP según la preferencia del instalador y las consideraciones de red; Plaspy soporta ambos transportes en el puerto 8888.
- Mantenga un registro de los identificadores del dispositivo, como IMEI e ID del equipo, para facilitar la correlación en Plaspy después de la configuración.
- Para aprovisionamiento remoto o despliegues masivos, utilice las herramientas de gestión o provisión de Ruptela acordes con su firmware y las prácticas del proveedor.

## Por qué usar Plaspy con esta configuración

Usar el Eco5 Lite+ con Plaspy ofrece a los operadores de flota un hardware compacto y de bajo consumo combinado con un endpoint de servidor unificado para una integración sencilla. El diseño robusto del dispositivo, su amplia tolerancia de voltaje, la batería interna de respaldo y el soporte BLE lo hacen adecuado para vehículos eléctricos, motocicletas y flotas de baja potencia que requieren reportes de ubicación y telemetría fiables.

Para obtener más información sobre Plaspy y cómo admite integraciones de dispositivos como el Eco5 Lite+, visite https://www.plaspy.com. Para instrucciones de configuración específicas por dispositivo, detalles de firmware y orientación del fabricante, consulte la información disponible en el sitio de Ruptela https://ruptela.com/.
