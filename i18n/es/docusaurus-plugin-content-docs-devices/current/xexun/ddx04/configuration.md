---
slug: /xexun/ddx04/configuration
id: ddx04-configuration
sidebar_label: Configuration
title: Xexun - DDX04 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Xexun DDX04 con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - configuración Xexun DDX04
  - configuración DDX04 Plaspy
  - configuración rastreador Xexun
  - configuración servidor DDX04
  - configuración dispositivo Plaspy
  - configuración rastreador GPS
  - configuración GPS vestible
  - comandos SMS DDX04
  - configuración GPRS del rastreador
  - configuración plataforma GPS
---

# Xexun - DDX04 Configuración

Esta página documenta la información pública disponible para usar el rastreador Xexun DDX04 con Plaspy. Resume los ajustes de servidor compartidos de Plaspy a los que debe apuntar el equipo, explica los pasos prácticos que se utilizan con frecuencia para configurar el rastreador y conserva los comandos SMS publicados públicamente para este modelo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente los protocolos de los rastreadores, pero los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El DDX04 admite configuración por SMS en materiales públicos, y esta guía incluye esos comandos SMS con marcadores de posición cuando corresponde. Cuando tenga dudas, verifique siempre contra la documentación más reciente del fabricante.

## Resumen de la configuración

Este proceso prepara el DDX04 para enviar su ubicación, alertas y telemetría al backend de Plaspy usando el endpoint y puerto compartidos. El objetivo es asegurar que el rastreador tenga configurados datos móviles válidos, apunte al servidor de Plaspy y reporte en el intervalo deseado para que aparezca correctamente en la plataforma.

- Configure el APN y los ajustes GPRS del equipo para que establezca conexión de datos móviles.
- Apunte el dispositivo al endpoint y puerto del servidor de Plaspy para que la ubicación y la telemetría lleguen a Plaspy.
- Elija el transporte (UDP o TCP) si el dispositivo lo requiere y guarde la configuración.
- Confirme la frecuencia de reporte y la telemetría básica para que Plaspy reciba actualizaciones en vivo e historial.
- Valide que el dispositivo sea visible en Plaspy y que se reciban alertas como manipulación u otros eventos.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (the device may be configured for either)
- Plaspy automatically detects the tracker protocol and all devices use the same port in Plaspy

## Requisitos típicos antes de la configuración

- Un dispositivo DDX04 cargado y funcional con acceso a su método de configuración por SMS o al método del fabricante.
- Una tarjeta SIM activa con un plan de datos móviles y los detalles APN correctos del operador.
- Conocimiento de la contraseña del dispositivo; la contraseña por defecto documentada públicamente para estos comandos SMS es 123456.
- Un teléfono o un gateway SMS capaz de enviar mensajes de texto al dispositivo si se usa la configuración por SMS.
- Acceso a la documentación oficial de Xexun o a las herramientas del proveedor para instrucciones específicas de firmware y actualizaciones.
- Visibilidad básica en Plaspy para verificar que el rastreador aparezca después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El DDX04 se configura para enviar posiciones, alertas y telemetría al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y mostrar los datos en tiempo real. La detección automática de protocolos de Plaspy elimina la necesidad de seleccionar un manejador específico de protocolo después de apuntar el dispositivo a la plataforma.

- El rastreador se dirige al endpoint del backend de Plaspy en d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- La telemetría y los mensajes de eventos se transmiten por datos móviles usando el transporte configurado (UDP o TCP).
- Las actualizaciones de estado, alarmas por manipulación y la telemetría de salud se reportan a Plaspy para monitoreo y notificaciones.
- Plaspy muestra ubicación en vivo, reproducción de historial y notificaciones de eventos una vez que el dispositivo informa correctamente.
- Plaspy utiliza un puerto compartido para todos los dispositivos y realiza detección automática del protocolo para las conexiones entrantes.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software autorizado del proveedor, o prepárese para enviar comandos SMS de configuración según lo publicado para el DDX04.
2. Ingrese el servidor de Plaspy ya sea como dominio d.plaspy.com o la IP de servidor 54.85.159.138 en los ajustes GPRS/server del dispositivo.
3. Establezca el puerto del dispositivo a 8888 en la configuración server o adminip.
4. Si el equipo requiere seleccionar un transporte, elija UDP o TCP según su despliegue o necesidades de red.
5. Aplique o guarde la configuración en el dispositivo y, si procede, envíe cualquier comando final de guardado o modo que requiera el fabricante.
6. Reinicie el dispositivo si el firmware lo requiere o después de aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy comprobando la presencia del dispositivo y las actualizaciones recientes en su panel de Plaspy.

## Comandos de configuración de ejemplo

Los comandos públicos de configuración del DDX04 se envían comúnmente por SMS. Los comandos abajo se proporcionan en el orden mostrado en los materiales públicos del fabricante. Los ejemplos usan la contraseña por defecto 123456 cuando se requiere. Preserve los marcadores de posición al reemplazarlos por los valores de su operador.

1. Optional initial factory restore (label this as initial or only when needed)
```
begin123456
```

2. Set the operator APN (replace {{apn}} with your operator APN)
```
apn123456 {{apn}}
```

3. Set the APN username if required (replace {{apnu}} with the APN username)
```
apnuser123456 {{apnu}}
```

4. Set the APN password if required (replace {{apnp}} with the APN password)
```
apnpasswd123456 {{apnp}}
```

5. Set the GPRS server to the Plaspy endpoint using the Plaspy public server IP and port
```
adminip123456 54.85.159.138 8888
```

6. Set the GPRS mode (follow manufacturer documentation for mode options if required)
```
gprsmode123456
```

7. Set the update/reporting interval to 60 seconds (example interval command)
```
t060s***n123456
```

Notas sobre los marcadores de posición
- {{apn}} es la cadena APN del operador móvil.
- {{apnu}} es el usuario APN si su operador lo requiere.
- {{apnp}} es la contraseña APN si su operador lo requiere.
- Reemplace los marcadores de posición con la cadena exacta proporcionada por su operador móvil.

Estos comandos SMS son la secuencia publicada públicamente para el DDX04. Úselos desde un número autorizado y confirme la contraseña del dispositivo antes de enviar.

## Observaciones de configuración

- La configuración por SMS es un método público común para dispositivos Xexun, pero el firmware y las herramientas del proveedor también pueden ofrecer métodos alternativos de configuración.
- La elección entre TCP y UDP puede afectar las características de entrega; seleccione el transporte que mejor se ajuste a su red y necesidades de monitoreo. Plaspy detectará automáticamente el protocolo del dispositivo después de que este se conecte.
- La versión de firmware y la revisión de hardware pueden cambiar el comportamiento de los comandos o las opciones disponibles. Confirme el conjunto de comandos para su nivel de firmware.
- Las credenciales APN deben coincidir exactamente con la configuración del operador SIM; un APN incorrecto impedirá la conexión GPRS a d.plaspy.com o 54.85.159.138.
- Todos los dispositivos de Plaspy usan el mismo puerto 8888, por lo que una configuración de puerto consistente simplifica despliegues con múltiples equipos.

## Por qué usar Plaspy con esta configuración

Usar el DDX04 con Plaspy permite a las organizaciones combinar la detección de manipulación del equipo, posicionamiento por múltiples fuentes y la telemetría de estado con un backend único que ingiere y muestra ubicaciones en vivo, reproducción de historial y alertas de eventos. Esta configuración favorece la visibilidad operativa y ayuda a optimizar los flujos de trabajo de monitoreo en programas que requieren seguimiento confiable y alertas oportunas.

Para obtener más información sobre Plaspy y cómo se integran los dispositivos, visite https://www.plaspy.com. Para métodos de configuración específicos de dispositivo, comportamiento de firmware y detalles del fabricante más recientes, verifique la información en el sitio oficial de Xexun https://www.xexun.com/ ya que las especificaciones y procedimientos de instalación pueden cambiar con el tiempo.
