---
slug: /lk_gps/lk960_4g/configuration
id: lk960_4g-configuration
sidebar_label: Configuration
title: LK-GPS - LK960-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del LK960-4G para integrarlo con Plaspy, con ajustes de servidor y pasos prácticos para rastreo de vehículos
keywords:
  - configuración LK GPS LK960 4G
  - instalación LK960 4G Plaspy
  - configuración servidor LK GPS
  - instalación software seguimiento LK960
  - configuración rastreador vehicular Plaspy
  - configuración plataforma LK960 GPS
  - integración rastreador Plaspy
  - guía despliegue LK GPS
  - configuración seguimiento flotas
  - configuración telemetría LK960
---

# LK-GPS - Configuración del LK960-4G

Esta página describe el contexto público de configuración para usar el rastreador LK-GPS LK960-4G con Plaspy. Resume los ajustes de servidor compartidos y los pasos prácticos necesarios para apuntar el dispositivo a Plaspy y habilitar el rastreo en tiempo real y el envío de eventos, usando la descripción del producto LK960-4G como referencia funcional.

Plaspy comparte ajustes de servidor entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por eso esta guía se centra en los ajustes públicos de Plaspy y el flujo práctico para aplicarlos al LK960-4G.

## Resumen de la configuración

Configurar el LK960-4G para Plaspy prepara el rastreador para enviar datos de ubicación y eventos a un único punto final de Plaspy, de modo que los vehículos sean visibles y gestionables desde la plataforma. El proceso se limita, en general, a proporcionar los datos del servidor Plaspy, seleccionar el método de transporte que soporte el equipo y validar que los reportes lleguen correctamente.

- Apunte el rastreador al endpoint de Plaspy para que los mensajes de posición y alarmas se envíen a la plataforma.
- Seleccione TCP o UDP en el dispositivo cuando sea necesario elegir el transporte.
- Ingrese el puerto compartido de Plaspy para que el rastreador y la plataforma se comuniquen por el mismo canal.
- Valide la conectividad y que el IMEI o identificador del dispositivo sea correcto para que la unidad aparezca en Plaspy.
- Confirme que los eventos como geocerca, manipulación, pérdida de alimentación e inmovilizador se reenvíen a la plataforma.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el LK960-4G. Estos valores se comparten entre los dispositivos soportados por Plaspy.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device selection
- Plaspy automáticamente detecta el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos previos típicos

- Una unidad LK960-4G instalada y con alimentación, con el cableado del vehículo completado para operación continua.
- Servicio celular activo y una tarjeta SIM compatible configurada para datos y SMS si se requieren alternativas de configuración por SMS.
- Acceso al método o software oficial de configuración de LK-GPS provisto por el fabricante o el proveedor.
- Tener anotado el IMEI o identificador del rastreador para registrarlo o confirmar su actividad en Plaspy.
- Un plan de pruebas para validar reportes y notificaciones de eventos dentro de Plaspy tras la configuración.
- Conocimiento básico sobre si su despliegue preferirá UDP o TCP como transporte.

## Cómo se conecta este rastreador a Plaspy

El LK960-4G envía actualizaciones periódicas de posición y alertas basadas en eventos al endpoint y puerto del servidor Plaspy para que los vehículos y las alarmas sean visibles en la plataforma. Una vez apuntado al endpoint compartido de Plaspy, el dispositivo abrirá una conexión usando el transporte elegido y Plaspy identificará automáticamente el protocolo del rastreador.

- El dispositivo se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Use UDP o TCP como opción de transporte en el rastreador si el equipo requiere elegir un transporte.
- Plaspy recibe actualizaciones de ubicación para visualización en el mapa en vivo y registro histórico de viajes.
- Mensajes de eventos como geocercas, manipulación, pérdida de alimentación, actividad del inmovilizador y exceso de velocidad se reenvían a Plaspy para generar alertas.
- Plaspy detecta automáticamente el protocolo y asocia los datos entrantes con el IMEI o identificador del dispositivo.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de LK-GPS o al software proporcionado por el fabricante o el instalador.
2. Ingrese el dominio de servidor de Plaspy d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, que Plaspy utiliza para todos los dispositivos soportados.
4. Elija UDP o TCP si el LK960-4G le solicita seleccionar un protocolo de transporte.
5. Aplique o guarde la configuración dentro de la herramienta del fabricante o en la interfaz del dispositivo.
6. Reinicie el equipo si la herramienta del fabricante o el firmware requieren un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando que el IMEI aparezca y que las actualizaciones de posición y eventos sean visibles en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos y la sintaxis exacta para configurar un LK960-4G pueden variar según el firmware y la herramienta de configuración del fabricante. Los fabricantes ofrecen distintos métodos como software de escritorio, aplicaciones móviles o comandos por SMS; consulte la guía de configuración de LK-GPS para obtener los comandos específicos del dispositivo. En términos generales, usted ingresará los valores del servidor Plaspy mostrados anteriormente, por ejemplo apuntando servidor, puerto y transporte a Plaspy.

Si utiliza comandos basados en texto o configuración por SMS proporcionados por el fabricante, los campos principales que deberá establecer son los mismos que se detallaron arriba:
- Dominio o IP del servidor establecido como d.plaspy.com o 54.85.159.138
- Puerto del servidor establecido en 8888
- Transporte establecido en UDP o TCP si es requerido

Consulte el manual de configuración de LK-GPS para la sintaxis exacta de los comandos y el orden requerido por el firmware del LK960-4G.

## Notas de configuración

- Las diferencias de firmware entre revisiones de hardware del LK960-4G pueden modificar los nombres exactos de los menús, la sintaxis de comandos por SMS o los campos en la interfaz de software para configurar servidor y transporte.
- En instalaciones donde el SMS sigue disponible, el LK960-4G admite consultas por SMS y algunos comandos de configuración vía SMS como alternativa a la configuración directa por software, siempre que el fabricante lo documente.
- TCP y UDP difieren en comportamiento y fiabilidad según las condiciones de la red móvil; elija el transporte que mejor se ajuste a sus requisitos operativos y pruebe en condiciones reales de red.
- Registre siempre el IMEI o identificador del dispositivo tal como lo suministra el fabricante para acelerar la validación en Plaspy.
- Las mejores prácticas para instaladores incluyen probar al menos un dispositivo de forma completa con Plaspy antes de un despliegue masivo.

## Por qué usar Plaspy con esta configuración

Usar el LK960-4G con Plaspy brinda visibilidad centralizada de la posición del vehículo, alarmas y telemetría, de modo que los equipos operativos puedan monitorear flotas, responder a incidentes y generar reportes históricos para mantenimiento y cumplimiento. El diseño cableado del LK960-4G, su amplio rango de tensión de entrada, la recepción múltiple de GNSS y los comandos compatibles con plataformas lo hacen adecuado para despliegues continuos de flotas que requieren rastreo en tiempo real confiable y funciones antirrobo.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad de rastreadores y la administración de flotas visite https://www.plaspy.com. Para pasos de configuración específicos del dispositivo, notas de firmware y sintaxis de comandos consulte al fabricante en https://www.lk-gps.com ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
