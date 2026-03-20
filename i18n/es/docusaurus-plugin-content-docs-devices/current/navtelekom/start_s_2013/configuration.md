---
slug: /navtelekom/start_s_2013/configuration
id: start_s_2013-configuration
sidebar_label: Configuration
title: Navtelekom - START S-2013 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Navtelekom START S-2013 para Plaspy con ajustes de servidor y pasos prácticos
keywords:
  - Configuración Navtelekom START S-2013
  - Configuración START S-2013 Plaspy
  - Configuración servidor rastreador Navtelekom
  - Configuración rastreador GPS START S-2013
  - Configuración rastreador Plaspy
  - Guía integración plataforma GPS
  - Configuración rastreo de vehículos
  - Configuración rastreador gestión de flotas
  - Configuración GLONASS GPS
  - Ajustes conectividad del rastreador
---

# Navtelekom - START S-2013 Configuración

Este documento describe el contexto público de configuración para usar el Navtelekom START S-2013 con Plaspy. Se centra en los ajustes de servidor prácticos y los pasos de integración que normalmente aplicará para que el dispositivo reporte posiciones GNSS y telemetría a la plataforma Plaspy. La guía usa los datos de endpoint públicos de Plaspy y explica el flujo de trabajo típico para aplicarlos en el dispositivo mediante las herramientas de configuración del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador al recibir los mensajes. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que provea Navtelekom. Use esta página como referencia práctica y consulte la documentación de Navtelekom para diálogos específicos del dispositivo, actualizaciones de firmware y configuraciones de telemetría avanzadas.

## Resumen de la configuración

Esta configuración prepara el START S-2013 para enviar su posición y telemetría de sensores a Plaspy, apuntando el dispositivo a los endpoints de ingestión de Plaspy y validando la conectividad. El objetivo es habilitar visibilidad en tiempo real, reporte de eventos y seguimiento histórico en el panel de Plaspy utilizando los ajustes de servidor comunes que Plaspy suministra.

- Configure el endpoint de red del dispositivo con los valores del servidor de Plaspy para que las posiciones GNSS y la telemetría lleguen a Plaspy.
- Seleccione el tipo de transporte (UDP o TCP) si la configuración del equipo lo requiere.
- Verifique la conectividad de red móvil y de datos de la SIM para permitir que el rastreador alcance Plaspy mediante 2G GSM.
- Aplique y guarde la configuración en la herramienta de Navtelekom y luego confirme que el rastreador aparezca en Plaspy.
- Valide que la telemetría y el reporte de eventos provenientes de entradas, RS-485 y sensores Bluetooth sean reenviados a Plaspy.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el START S-2013 para que reporte a Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP puede seleccionarse según las opciones del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto para ingestión

## Requisitos típicos antes de configurar

- Una unidad START S-2013 con batería suficiente o alimentación del vehículo y opcionalmente conexión USB Tipo-C para la puesta en servicio.
- Una tarjeta SIM válida con datos habilitados y cobertura de red móvil en la zona donde el equipo soporte 2G GSM.
- Acceso al método o software oficial de configuración de Navtelekom para el START S-2013.
- Una cuenta de Plaspy o acceso al panel de su flota en Plaspy para verificar el reporte del dispositivo tras la configuración.
- Conocimiento del IMEI o identificador único del dispositivo para poder localizar el rastreador en Plaspy una vez que se conecte.
- Herramientas opcionales como un cable USB para configuración local y una utilidad serial o del proveedor si Navtelekom la requiere.

## Cómo se conecta este rastreador a Plaspy

El START S-2013 envía posiciones GNSS y la telemetría configurada a través de su enlace 2G GSM hacia Plaspy. Al dirigir el dispositivo al endpoint y puerto de ingestión compartidos de Plaspy, los mensajes del rastreador son recibidos, analizados y normalizados para ofrecer ubicación en vivo, eventos y reproducción histórica.

- El rastreador se configura para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy acepta conexiones por UDP o TCP y detectará automáticamente el protocolo del rastreador.
- La telemetría del dispositivo, como entradas discretas, lecturas analógicas, datos RS-485 y cargas útiles de sensores Bluetooth, se reenvía a Plaspy cuando está habilitada en la configuración del equipo.
- Eventos como pérdida de alimentación, cambios en entradas o movimiento pueden reportarse a Plaspy para alertas y visualización en el tablero.
- Una vez que el rastreador alcance correctamente el endpoint de Plaspy, aparecerá en la plataforma Plaspy para su monitoreo y reporte.

## Flujo de trabajo común de configuración

Siga esta secuencia práctica al integrar el START S-2013 con Plaspy:

1. Acceda al método o software oficial de configuración de Navtelekom para el START S-2013 (herramienta del fabricante, utilidad de puesta en servicio por USB o canal de configuración documentado).
2. Ingrese el endpoint del servidor de Plaspy como d.plaspy.com o 54.85.159.138 en el campo servidor/host del dispositivo.
3. Configure el puerto del dispositivo en 8888. Todos los dispositivos en Plaspy usan este mismo puerto.
4. Seleccione UDP o TCP como transporte si el equipo requiere elegir un transporte.
5. Configure los ajustes APN necesarios para la SIM si el dispositivo los requiere para datos móviles (use los valores APN proporcionados por su operador).
6. Aplique o guarde la configuración en la herramienta de Navtelekom y reinicie el dispositivo si la herramienta o el firmware requiere reboot para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy revisando el panel de Plaspy por el IMEI o identificador del dispositivo y confirmando posiciones y mensajes de telemetría recientes.

## Ejemplos de comandos de configuración

El método de configuración del START S-2013 depende de las herramientas y del firmware de Navtelekom. Dado que las utilidades del fabricante pueden ser gráficas, de puesta en servicio por USB o basadas en comandos SMS/CLI, aquí no se incluyen comandos exactos. Use la utilidad de configuración de Navtelekom o el procedimiento documentado para establecer el host del servidor en d.plaspy.com o 54.85.159.138, configurar el puerto 8888 y seleccionar UDP o TCP según sea necesario.

Si dispone de ejemplos de comandos suministrados por el fabricante o de una interfaz de comandos por SMS de Navtelekom, aplique esos comandos en el orden recomendado por Navtelekom y preserve cualquier marcador de posición como los valores APN proporcionados por su operador móvil. Para verificación, confirme que el rastreador aparece y reporta en Plaspy después de aplicar los comandos y reiniciar el dispositivo si es necesario.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los diálogos de configuración y las opciones disponibles; siempre revise las notas de la versión de Navtelekom para comportamientos específicos del dispositivo.
- Los transportes TCP y UDP pueden comportarse de forma distinta en redes móviles; si observa pérdida de mensajes en un transporte, pruebe el otro y verifique los resultados en Plaspy.
- El START S-2013 soporta telemetría RS-485 y Bluetooth, lo que puede requerir pasos de configuración adicionales en la herramienta de Navtelekom para reenviar datos de sensores a Plaspy.
- Use el IMEI o identificador único del dispositivo al buscar la unidad en Plaspy después de la configuración para agilizar la verificación.
- Consulte la documentación de Navtelekom para detalles sobre la puesta en servicio mediante el puerto USB Tipo-C o para utilidades de configuración proporcionadas por el fabricante.

## Por qué usar Plaspy con esta configuración

Usar el Navtelekom START S-2013 con Plaspy ofrece una forma sencilla de integrar seguimiento compacto GLONASS/GPS y telemetría en una plataforma centralizada de gestión de flotas. La forma discreta del dispositivo y su flexibilidad de sensores lo hacen apropiado para vehículos comerciales ligeros y monitoreo de activos, mientras que los ajustes de servidor compartidos de Plaspy simplifican despliegues a gran escala al usar el mismo puerto de ingestión para todos los dispositivos.

Para saber más sobre Plaspy y cómo puede presentar la telemetría del START S-2013 en su tablero de flota, visite https://www.plaspy.com. Para los pasos de configuración específicos más recientes, notas de firmware y herramientas de configuración, verifique la información actual en el sitio oficial de Navtelekom https://www.navtelecom.ru/. Los métodos de configuración, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que debe consultar la documentación del fabricante al aplicar configuraciones en producción.
