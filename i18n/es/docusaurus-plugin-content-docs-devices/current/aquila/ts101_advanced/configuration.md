---
slug: /aquila/ts101_advanced/configuration
id: ts101_advanced-configuration
sidebar_label: Configuration
title: Aquila - TS101 Advanced Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el Aquila TS101 Advanced con Plaspy, ajustes de servidor compartido y pasos prácticos de puesta en marcha
keywords:
  - Configuración Aquila TS101 Advanced
  - Instalación Aquila TS101 Advanced
  - Configuración servidor Aquila TS101 Advanced
  - Configuración rastreador Plaspy
  - Guía configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Configuración gestión de flotas
  - Integración TS101 Advanced
  - Ajustes servidor Plaspy
  - Detección protocolo rastreador
---

# Aquila - Configuración del TS101 Advanced

Esta página describe el contexto de configuración necesario para utilizar el tracker Aquila TS101 Advanced con Plaspy. Incluye los ajustes prácticos del servidor y el flujo de trabajo para apuntar el dispositivo a Plaspy, así como la preparación del rastreador para que sea visible y reporte eventos en la plataforma. Use esta guía junto con la documentación del fabricante para obtener detalles específicos del dispositivo.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del TS101 Advanced. Los pasos exactos del lado del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que proporcione Aquila, por lo que siempre confirme los comandos y procedimientos con la documentación oficial.

## Resumen de la configuración

Preparar el TS101 Advanced para Plaspy significa, sobre todo, configurar el dispositivo para que envíe su ubicación y estado al endpoint de servidor compartido de Plaspy y verificar que el dispositivo aparezca en la plataforma. El proceso se centra en definir el endpoint y el puerto del servidor, seleccionar el transporte correcto y validar la conectividad y el reporte.

- Configure el tracker para utilizar Plaspy como servidor de destino para que los datos de ubicación y eventos se envíen a la plataforma.
- Seleccione el protocolo de transporte si el dispositivo lo requiere y establezca el puerto compartido de Plaspy.
- Guarde y aplique la configuración del dispositivo; reinícielo si el fabricante lo recomienda.
- Verifique que el rastreador sea visible y esté reportando activamente en Plaspy tras la configuración.
- Anote la versión de firmware y los pasos realizados para futuras tareas de resolución de problemas.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP según las opciones de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador para interpretar los datos entrantes

## Requisitos habituales antes de la configuración

- Acceso físico al TS101 Advanced para configurar y verificar
- Dispositivo alimentado y batería cargada o conectado a la alimentación del vehículo
- Acceso al método de configuración oficial del fabricante o al software para TS101 Advanced
- Una cuenta en Plaspy o la integración preparada para recibir y mostrar los datos del tracker
- Conectividad de red estable para que el dispositivo alcance el endpoint de Plaspy
- Conocimiento de cualquier credencial o contraseña de configuración que requiera la herramienta del fabricante

## Cómo se conecta este tracker a Plaspy

El TS101 Advanced se configura para enviar actualizaciones de ubicación y datos de eventos al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo esté apuntando al endpoint de Plaspy y la configuración se haya aplicado, la plataforma identifica automáticamente el protocolo y comienza a decodificar los mensajes del dispositivo para su visualización y reporte.

- El tracker envía actualizaciones periódicas de ubicación a d.plaspy.com en el puerto 8888
- El transporte puede configurarse como UDP o TCP en el dispositivo, según las opciones de firmware
- Plaspy utiliza detección automática de protocolo para interpretar los mensajes entrantes del TS101 Advanced
- Eventos como movimiento, impacto o cambios en entradas/salidas aparecen en Plaspy cuando el dispositivo reporta activamente
- Los reportes correctos permiten que el dispositivo sea visible para monitoreo, historial y alertas en Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante para el TS101 Advanced (herramienta del fabricante, portal web o aplicación de instalador).
2. En los ajustes de servidor del dispositivo ingrese el dominio de Plaspy d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido usado por Plaspy para los trackers compatibles.
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo requiere una elección explícita.
5. Aplique o guarde la configuración en la herramienta del dispositivo y confirme que los ajustes se hayan escrito correctamente.
6. Reinicie o haga un ciclo de alimentación del equipo si el fabricante recomienda un reinicio tras la configuración.
7. Verifique que el TS101 Advanced reporte a Plaspy y aparezca como activo en la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos y los métodos de configuración varían según la herramienta del fabricante, el firmware y la variante regional del producto. Para el TS101 Advanced normalmente se utiliza el software proporcionado por Aquila, una interfaz serial/USB o las instrucciones del proveedor para establecer el endpoint y el puerto del servidor. Introduzca:

- Dominio del servidor o IP: d.plaspy.com o 54.85.159.138
- Puerto del servidor: 8888
- Transporte: UDP o TCP

Si su proveedor ofrece comandos por SMS o consola, utilice la sintaxis oficial que Aquila incluye en el manual del dispositivo. Dado que el TS101 Advanced cuenta con múltiples revisiones de firmware y rutas de configuración, confíe en la herramienta del fabricante para la sintaxis exacta de los comandos.

## Notas de configuración

- Las diferencias de firmware pueden modificar los menús de configuración, la sintaxis de comandos y la disponibilidad de funciones. Registre la versión de firmware antes y después de la configuración.
- La elección entre UDP y TCP puede afectar el comportamiento de entrega; pruebe cuál transporte ofrece mayor fiabilidad en su instalación.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles y realiza detección automática de protocolo, por lo que generalmente solo necesita establecer el endpoint y el puerto.
- Como buena práctica, pruebe un dispositivo de forma completa antes de desplegar una flota masiva.
- Consulte siempre la documentación de Aquila para los pasos precisos y cualquier secuencia por SMS o consola que pueda emplearse como alternativa de configuración.

## Por qué usar Plaspy con esta configuración

Usar el Aquila TS101 Advanced con Plaspy permite centralizar la visibilidad de vehículos y activos, monitorear posiciones en tiempo real y recibir alertas basadas en eventos desde una sola plataforma. Funciones del TS101 Advanced como la carcasa resistente IP67, almacenamiento a bordo para historial y las interfaces de I/O para inmovilizadores o sensores lo hacen apto para aplicaciones de flota y activos donde se requiere reporte confiable.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los pasos más recientes específicos del dispositivo, lanzamientos de firmware y comandos de configuración detallados consulte la documentación del fabricante en https://www.itriangle.in/ para garantizar que su configuración coincida con el comportamiento actual del dispositivo.
