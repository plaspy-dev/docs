---
slug: /lk_gps/tk905/configuration
id: tk905-configuration
sidebar_label: Configuration
title: LK-GPS - TK905 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para LK GPS TK905 con ajustes de servidor Plaspy y pasos prácticos para la integración
keywords:
  - configuración LK GPS TK905
  - configuración TK905 Plaspy
  - configuración rastreador LK GPS
  - configuración servidor TK905
  - configuración rastreador GPS TK905
  - configuración rastreador Plaspy
  - rastreo de vehículos TK905
  - seguimiento de flotas TK905
  - guía de integración TK905
  - configuración rastreador GPS Plaspy
---

# LK-GPS - Configuración del TK905

Esta página reúne la información pública necesaria para usar el rastreador LK-GPS TK905 con Plaspy. Incluye los ajustes prácticos del lado de la plataforma y el flujo de trabajo general que usted necesita para configurar el dispositivo de forma que envíe ubicación y eventos al servidor de Plaspy. Use esta guía para preparar el rastreador y saber qué revisar en el dispositivo antes de la integración.

Plaspy emplea ajustes de servidor compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo cuando el dispositivo se conecta. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; considere estas instrucciones como el contexto de configuración desde la perspectiva de Plaspy, no como un manual exhaustivo del dispositivo.

## Resumen de la configuración

Preparar un TK905 para trabajar con Plaspy se centra en configurar el dispositivo para que envíe sus datos al endpoint de Plaspy, validar la conectividad y confirmar que el equipo sea visible en los mapas y reportes de la plataforma. Los puntos a continuación resumen los propósitos prácticos del proceso de configuración.

- Configurar el dispositivo para que informe al endpoint de servidor de Plaspy y así las posiciones y alarmas lleguen a la plataforma.
- Seleccionar el protocolo de transporte que soporte el equipo (UDP o TCP) y establecer el puerto designado por Plaspy.
- Validar la conectividad celular y cualquier ajuste de la SIM necesario para la transmisión de datos.
- Guardar y aplicar la configuración en el TK905, luego verificar que el rastreador aparezca y envíe actualizaciones en Plaspy.
- Ajustar el intervalo de reporte y las alarmas en el dispositivo según sea necesario para equilibrar la duración de batería y la granularidad del seguimiento.

## Ajustes del servidor de Plaspy

Al configurar el TK905 para que reporte a Plaspy, utilice los siguientes ajustes públicos de la plataforma exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Todos los dispositivos en Plaspy usan el mismo puerto, por lo que configure el puerto 8888 en el rastreador cuando la interfaz de configuración del fabricante lo requiera.

## Requisitos típicos antes de comenzar

- Confirme que el TK905 tenga una tarjeta SIM activa y correctamente provisionada y que exista conectividad celular si el reporte de datos requiere red móvil.
- Asegúrese de que el dispositivo tenga suficiente carga de batería o esté conectado a una fuente de alimentación estable antes de cambiar ajustes.
- Obtenga acceso al método oficial de configuración del fabricante para el TK905 (comandos SMS, herramienta web o app del proveedor según el equipo).
- Sepa los valores del endpoint y puerto a ingresar: d.plaspy.com o 54.85.159.138 y el puerto 8888.
- Planifique cómo va a validar los reportes del dispositivo tras la configuración, por ejemplo acceso a los paneles o vistas de mapa en su cuenta Plaspy.
- Si el rastreador permite seleccionar el transporte, prepárese para elegir entre UDP o TCP según las necesidades de la instalación.

## Cómo se conecta este rastreador a Plaspy

El TK905 se configura para enviar actualizaciones de ubicación y eventos de alarma al endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos mensajes y los asocia con el registro del dispositivo, permitiendo la visualización en tiempo real, alertas y reproducción del historial.

- El rastreador envía datos de posición GPS y eventos de alarma a d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- Plaspy acepta transporte UDP o TCP y detectará automáticamente el protocolo que use el TK905.
- Las actualizaciones de posición y notificaciones de alarma recibidas por Plaspy se muestran en mapas, reportes y flujos de alertas.
- La detección automática de protocolo del lado de la plataforma elimina la necesidad de conocer el protocolo del dispositivo de antemano; solo configure el endpoint y el puerto.
- Usar el puerto compartido de Plaspy simplifica despliegues con múltiples dispositivos porque se aplica el mismo puerto a los rastreadores compatibles.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante para el TK905 (conjunto de comandos SMS, app del proveedor o herramienta de configuración provista por LK GPS o su distribuidor).
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según lo que soporte el equipo.
3. Configure el puerto 8888 en el dispositivo; Plaspy utiliza el mismo puerto para todos los equipos compatibles.
4. Elija el protocolo de transporte UDP o TCP si el dispositivo requiere una selección explícita.
5. Aplique o guarde la configuración mediante el método del dispositivo (envíe el comando SMS, guarde en la app o cargue los ajustes).
6. Reinicie o haga un ciclo de energía del dispositivo si el firmware lo requiere para aplicar cambios de red.
7. Verifique que el dispositivo reporte a Plaspy comprobando las actualizaciones de posición y eventos en su cuenta o tablero de Plaspy.

## Ejemplos de comandos de configuración

El TK905 admite configuración mediante métodos provistos por el fabricante como comandos SMS o software del proveedor; los comandos exactos varían según firmware y variante regional. Debido a que las cadenas de comandos pueden diferir por modelo, consulte la documentación de LK GPS o a su distribuidor para conocer el formato SMS preciso o el flujo de la herramienta de configuración requerido por su unidad.

Si su TK905 soporta configuración por SMS, el flujo general consiste en enviar el comando SMS apropiado para establecer el dominio o IP del servidor y el puerto, y luego confirmar con un comando de verificación. Use la referencia de comandos oficial de LK GPS para obtener las cadenas correctas según la versión de firmware.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y las funciones disponibles; verifique siempre la versión de firmware antes de aplicar comandos.
- La selección entre TCP y UDP puede afectar el comportamiento de entrega y el consumo de batería; elija el transporte que se ajuste a sus expectativas de confiabilidad y consumo.
- Dado que Plaspy detecta automáticamente el protocolo del rastreador, en muchos casos solo es necesario proporcionar el endpoint y el puerto en lugar de un identificador de protocolo específico.
- Si la configuración por SMS está disponible para su unidad, tenga en cuenta prefijos de comandos SMS, números de administrador y requisitos de contraseña definidos por el fabricante.
- En despliegues donde la duración de batería es crítica, ajuste los intervalos de reporte y los umbrales de alarma en el TK905 para reducir despertares innecesarios sin perder la visibilidad requerida.

## Por qué usar Plaspy con esta configuración

Usar el TK905 con Plaspy ofrece un reporte de posición en tiempo real y reenvío de alarmas a una plataforma centralizada, útil para visibilidad de flota, telemetría básica y monitoreo anti-robo. Los ajustes compartidos del servidor Plaspy y la detección automática de protocolo simplifican la integración para que pueda poner equipos en línea rápidamente y monitorear ubicaciones y eventos en un solo lugar.

Para saber más sobre Plaspy y cómo la plataforma gestiona la conectividad y el reporte de dispositivos, visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, detalles de firmware y orientación del fabricante para el TK905, verifique la información de configuración vigente en el sitio oficial de LK GPS https://www.lk-gps.com.
