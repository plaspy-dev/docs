---
slug: /lk_gps/lk980/configuration
id: lk980-configuration
sidebar_label: Configuration
title: LK-GPS - LK980 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del LK-GPS LK980 para conectarlo a Plaspy con ajustes de servidor y flujo de instalación
keywords:
  - configuración LK GPS LK980
  - configuración LK980 para Plaspy
  - configuración servidor LK GPS
  - configuración software LK980
  - configuración plataforma LK980 GPS
  - integración dispositivo LK GPS
  - rastreo vehicular LK980
  - configuración LK980 4G
  - configuración rastreador Plaspy
  - ajustes servidor rastreador
---

# LK-GPS - Configuración del LK980

Esta página describe la configuración pública necesaria para usar el rastreador LK-GPS LK980 con Plaspy. Resume los ajustes de servidor prácticos y los pasos habituales para apuntar el dispositivo a Plaspy, de modo que el rastreador envíe ubicación y eventos básicos a la plataforma. La guía se basa únicamente en información pública y ofrece un flujo de trabajo conciso para integrar el LK980 con Plaspy.

Plaspy utiliza configuraciones de servidor compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LK980 es un rastreador compacto para vehículo con antenas GPS y GSM integradas y conectividad 4G; la configuración final en el dispositivo debe realizarse con las herramientas oficiales del fabricante.

## Resumen de configuración

Esta configuración prepara el LK980 para comunicarse de forma confiable con Plaspy, de modo que el dispositivo aparezca en su cuenta de Plaspy y reporte ubicación y alarmas relevantes. El proceso se concentra en configurar los parámetros de red del dispositivo, confirmar la información de transporte y el endpoint del servidor, y validar el reporte correcto hacia Plaspy.

- Ingrese los ajustes de servidor de Plaspy en el dispositivo mediante la app del fabricante o la herramienta de configuración.
- Seleccione el protocolo de transporte que requiere el equipo (UDP o TCP) y establezca el puerto correcto.
- Verifique que el rastreador tenga conectividad celular y un APN correcto si usa una SIM para comunicación 4G.
- Confirme que el dispositivo sea visible en Plaspy después de guardar la configuración y reiniciar si es necesario.
- Valide que los informes de eventos, como batería baja o alarmas de movimiento, aparezcan correctamente en Plaspy.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; configure el transporte que requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos previos habituales

- Un equipo LK980 cargado con alimentación disponible para configuración y pruebas
- Tarjeta SIM 4G activa instalada si su instalación la requiere, y un plan de datos móvil en vigor
- Acceso al método de configuración oficial de LK-GPS, como la app móvil, la plataforma web o la herramienta del proveedor para el LK980
- Visibilidad a los satélites GPS durante las primeras pruebas de localización para que el dispositivo obtenga un fix
- Información básica del dispositivo para identificarlo en Plaspy cuando comience a reportar

## Cómo se conecta este rastreador a Plaspy

El LK980 se configura para enviar sus datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy. Una vez que el LK980 tiene la dirección de servidor correcta, el transporte seleccionado y conectividad celular, enviará actualizaciones periódicas y alarmas que Plaspy ingestará y asociará con su cuenta o registro de dispositivo.

- El dispositivo envía actualizaciones de ubicación a d.plaspy.com en el puerto 8888
- El transporte puede ser UDP o TCP según la elección de configuración del equipo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se usa el mismo puerto para todos los dispositivos
- Alarmas de eventos como batería baja, vibración o manipulación pueden reportarse a Plaspy si están habilitadas en el dispositivo
- Los reportes exitosos hacen que el rastreador sea visible en la plataforma Plaspy para monitoreo e historial

## Flujo típico de configuración

1. Acceda al método oficial de configuración de LK-GPS, como la app móvil del LK980 o la herramienta del proveedor.
2. En los ajustes de servidor o red del dispositivo ingrese d.plaspy.com o la IP del servidor 54.85.159.138 como endpoint.
3. Configure el puerto del dispositivo en 8888 para coincidir con la configuración de Plaspy.
4. Elija UDP o TCP si el dispositivo solicita seleccionar un protocolo de transporte.
5. Aplique o guarde la configuración en el dispositivo y en la herramienta del fabricante.
6. Reinicie el LK980 si la herramienta o las instrucciones indican que es necesario.
7. Valide que el dispositivo reporte a Plaspy verificando su aparición en su cuenta y confirmando ubicaciones o eventos recientes.

## Ejemplo de comandos de configuración

Los comandos exactos de configuración y el método para aplicarlos dependen de las herramientas del fabricante LK-GPS y del firmware del dispositivo. El LK980 suele configurarse mediante la app oficial o la plataforma web de LK-GPS, donde se introduce el dominio o IP de Plaspy y el puerto 8888, luego se guarda y, si procede, se reinicia el equipo. La documentación del fabricante o la app de configuración mostrarán los campos específicos y cualquier paso de confirmación requerido.

Si recibe una guía de configuración basada en comandos por SMS o una herramienta serial del fabricante, siga exactamente esos comandos públicos tal como los documenta LK-GPS. Debido a que los comandos y formatos varían entre versiones de firmware, utilice la referencia oficial de LK-GPS cuando esté disponible.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los campos de configuración disponibles y la sintaxis de los comandos; confirme siempre con la documentación de LK-GPS.
- Elija UDP o TCP según las condiciones de su red y las recomendaciones del fabricante; Plaspy acepta ambos en el puerto compartido 8888.
- Ingrese ya sea el dominio d.plaspy.com o la IP 54.85.159.138; ambos apuntan al mismo endpoint de Plaspy y alcanzarán la plataforma.
- Asegúrese de que el APN del dispositivo y el plan de datos de la SIM estén configurados correctamente para la conectividad 4G si se requiere datos móviles para reportar.
- Después de aplicar los ajustes, espere varios minutos y revise Plaspy para ver la primera ubicación y confirmar que el dispositivo está reportando.

## Por qué usar Plaspy con esta configuración

Usar el LK-GPS LK980 con Plaspy ofrece a las organizaciones una vía sencilla para unificar el reporte de ubicación y eventos en una sola plataforma. Al apuntar el rastreador al servidor y puerto compartidos de Plaspy, usted habilita el monitoreo centralizado de la ubicación del vehículo, visibilidad clara de eventos y acceso al historial de rutas a través de la interfaz de Plaspy.

Para obtener más información sobre Plaspy y cómo puede administrar rastreadores como el LK980 visite https://www.plaspy.com. Para detalles más recientes sobre la configuración específica del dispositivo, notas de firmware y herramientas de configuración, verifique la información en el sitio oficial del fabricante https://www.lk-gps.com. Las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo, por lo que es recomendable revisar la documentación oficial de LK-GPS al realizar la configuración final.
