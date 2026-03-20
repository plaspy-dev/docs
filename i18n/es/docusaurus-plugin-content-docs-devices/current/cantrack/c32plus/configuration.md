---
slug: /cantrack/c32plus/configuration
id: c32plus-configuration
sidebar_label: Configuration
title: CanTrack - C32Plus Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CanTrack C32Plus con los ajustes de servidor Plaspy y pasos prácticos para integrarlo
keywords:
  - Configuración CanTrack C32Plus
  - Instalación CanTrack C32Plus
  - CanTrack C32Plus Plaspy
  - Configuración servidor C32Plus
  - Instalación rastreador CanTrack
  - Configuración C32Plus GT06
  - Configuración rastreador GPS
  - Instalación rastreador vehicular
  - Configuración GPRS C32Plus
  - Configuración dispositivo Plaspy
---

# CanTrack - Configuración del C32Plus

Esta página documenta el contexto público de configuración para usar el CanTrack C32Plus con Plaspy. Resume los ajustes de servidor compartidos de Plaspy a los que debe apuntar el dispositivo y describe los pasos prácticos y las comprobaciones que suelen realizar instaladores y gestores de flota para conseguir que un C32Plus reporte correctamente a Plaspy. Utilice esto como referencia técnica para la integración y consúltelo junto con la documentación del fabricante para instrucciones específicas del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, lo que simplifica la integración con dispositivos compatibles con GT06 como el C32Plus. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe aplicar los valores de servidor listados aquí en la herramienta de configuración del fabricante o mediante SMS/console según el método que utilice.

## Resumen de la configuración

El objetivo de la configuración es apuntar el C32Plus a Plaspy y confirmar el reporte fiable de posición, alarmas y telemetría. Con el endpoint y puerto de Plaspy correctamente configurados en el rastreador, el dispositivo enviará actualizaciones de posición y mensajes de evento para su procesamiento, visualización y alerta dentro de Plaspy.

- Configure el equipo para enviar datos a los ajustes de servidor de Plaspy y al puerto compartido que utiliza la plataforma.
- Valide la conectividad desde el dispositivo hacia el endpoint de Plaspy y confirme la disponibilidad de la sesión de datos GPRS.
- Asegúrese de que el protocolo del dispositivo (por ejemplo GT06) sea compatible o seleccionable para que Plaspy interprete automáticamente los datos entrantes.
- Guarde y aplique la configuración, luego verifique que el rastreador aparezca en Plaspy y reporte las ubicaciones y alarmas esperadas.
- Si es necesario, realice comprobaciones de firmware y siga las indicaciones del fabricante para actualizaciones OTA antes del despliegue masivo.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el C32Plus:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport: support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device sends data to the shared port

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados por la plataforma, lo que agiliza la configuración entre distintos modelos.

## Requisitos previos antes de la configuración

- Un C32Plus instalado y alimentado, con acceso al método de configuración del fabricante (software, comandos SMS o herramienta de configuración).
- Tarjeta SIM activa con plan de datos y GPRS habilitado si el dispositivo va a usar GSM/GPRS como transporte.
- Una idea clara del lugar donde se montará el dispositivo para verificar la recepción GNSS y el correcto cableado a la fuente de alimentación del vehículo.
- Acceso al manual del dispositivo o a la herramienta del proveedor para ingresar dominio o IP del servidor y elegir el tipo de transporte.
- Acceso a una cuenta de Plaspy o a un administrador que pueda confirmar el registro del dispositivo y verificar los mensajes entrantes en el panel de Plaspy.

## Cómo se conecta este rastreador a Plaspy

Con la configuración apropiada, el C32Plus envía datos de posición, alarmas y telemetría por GPRS al endpoint y puerto compartido de Plaspy. Plaspy recibe la transmisión y mapea los mensajes GT06 o compatibles para integrarlos en la plataforma, permitiendo seguimiento en tiempo real, alertas e informes.

- El rastreador se configura para reportar al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.
- El transporte de datos puede usar UDP o TCP según la configuración del dispositivo; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo que usa el rastreador y procesa los paquetes formateados en GT06 en consecuencia.
- Las actualizaciones de ubicación, eventos de ignición y alarmas se reenvían a Plaspy y se muestran en el panel de seguimiento.
- Los registros en búfer que el C32Plus guarde durante cortes de cobertura se subirán a Plaspy una vez que la conexión GPRS se restablezca.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de CanTrack recomendado para el C32Plus (herramienta del fabricante, comandos SMS o interfaz de configuración).
2. En los ajustes de servidor, ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto del dispositivo en 8888 (todos los dispositivos Plaspy usan el mismo puerto).
4. Seleccione el transporte UDP o TCP si el dispositivo requiere selección explícita.
5. Verifique que el protocolo del dispositivo esté configurado o sea compatible con GT06 si el firmware lo requiere.
6. Aplique o guarde la configuración mediante la herramienta del fabricante o la secuencia de comandos correspondiente.
7. Reinicie el dispositivo si el fabricante lo recomienda o si los cambios requieren un reboot para hacerse efectivos.
8. Valide que el dispositivo reporte a Plaspy confirmando la recepción de actualizaciones de posición y eventos en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos o las pantallas de configuración del C32Plus dependen del firmware de CanTrack y del método que utilice (SMS, interfaz serial o software del proveedor). Dado que el fabricante ofrece múltiples opciones de configuración, aplique los valores del servidor Plaspy usando el método adecuado para su dispositivo y versión de firmware.

Si utiliza la configuración por SMS que provee el fabricante, el patrón típico es enviar primero un comando para establecer el servidor, luego el comando para el puerto, después la selección de protocolo/transporte y finalmente guardar o reiniciar. Consulte el manual del CanTrack C32Plus para la sintaxis específica de los comandos del dispositivo.

## Notas de configuración

- Diferencias por firmware y herramientas: los comandos y las interfaces pueden cambiar según la versión de firmware y las revisiones de las herramientas del proveedor; siempre adapte los pasos al firmware del equipo que tenga.
- TCP versus UDP: elija el transporte que prefiera para su instalación; Plaspy acepta ambos, pero la elección puede afectar la confiabilidad de los mensajes y la sobrecarga en algunas redes.
- La detección automática de protocolo de Plaspy reduce la necesidad de especificar manualmente GT06 para Plaspy, pero el dispositivo debe ser compatible y estar correctamente configurado para enviar paquetes en formato GT06.
- Use la documentación del fabricante para conocer los formatos exactos de comandos SMS o de software al realizar la configuración del dispositivo o el aprovisionamiento masivo.
- Validación tras reinicio: después de guardar los ajustes y reiniciar, confirme que los registros en búfer, si existen, se suben a Plaspy y que las actualizaciones en vivo son visibles.

## Por qué usar Plaspy con esta configuración

Configurar el CanTrack C32Plus para reportar a Plaspy ofrece a gestores de flota y equipos de seguridad una forma sencilla de centralizar ubicación, alarmas y telemetría en una única plataforma. La compatibilidad con GT06, el almacenamiento en búfer durante desconexiones y la buena precisión GNSS hacen del C32Plus una opción práctica cuando se requiere hardware compacto, bajo consumo y reporte continuo.

Para obtener más información sobre Plaspy y cómo gestiona las integraciones de dispositivos y la telemetría de flota, visite https://www.plaspy.com. Para los comandos de configuración específicos del dispositivo, comportamiento de firmware e instrucciones de instalación actualizadas del CanTrack C32Plus, verifique los detalles en el sitio del fabricante https://www.cantrackgps.com/ ya que los métodos y el firmware pueden cambiar con el tiempo.
