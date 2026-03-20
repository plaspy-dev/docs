---
slug: /reachfar/rf_v03/configuration
id: rf_v03-configuration
sidebar_label: Configuration
title: Reachfar - RF-V03 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Reachfar RF-V03 con Plaspy y ajustes de servidor para visibilidad en la plataforma
keywords:
  - Configuración Reachfar RF-V03
  - Configuración RF-V03
  - Reachfar RF-V03 Plaspy
  - Configuración servidor RF-V03
  - Configuración rastreador GPS RF V03
  - Configuración GPS Reachfar
  - Configuración rastreo de vehículos
  - Configuración plataforma de rastreo
  - Configuración rastreador Plaspy
  - Guía instalación RF-V03
---

# Reachfar - RF-V03: Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS Reachfar RF-V03 con la plataforma Plaspy. Explica los ajustes prácticos del servidor y el flujo de trabajo que normalmente aplicará en el dispositivo o con las herramientas del fabricante para que el RF-V03 informe ubicación y eventos a Plaspy. La guía se enfoca en los ajustes del lado de la plataforma y en los pasos comunes de instalación, no en procedimientos propietarios del fabricante.

Plaspy utiliza ajustes de servidor compartidos para todos los rastreadores compatibles y detecta automáticamente el protocolo cuando llegan los datos. Los pasos y la sintaxis exacta de los comandos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Verifique siempre los métodos específicos del dispositivo con la documentación oficial de Reachfar cuando sea necesario.

## Resumen de configuración

El objetivo de configurar un RF-V03 para Plaspy es apuntar el rastreador al endpoint de Plaspy, asegurarse de que el dispositivo tenga conectividad celular válida y confirmar que el rastreador esté reportando las ubicaciones y eventos de alarma esperados para que el dispositivo aparezca en la plataforma Plaspy.

- Apunte el RF-V03 al endpoint de Plaspy para que la telemetría y las alarmas lleguen a su cuenta.
- Asegúrese de que el rastreador tenga una SIM activa y la configuración del operador correcta para que pueda conectar con Plaspy a través de la red móvil.
- Seleccione el modo de transporte que soporte el dispositivo (UDP o TCP) y establezca el puerto compartido de Plaspy.
- Valide la conectividad y que en Plaspy se vean la ubicación, geocercas, exceso de velocidad y eventos de manipulación.
- Guarde y aplique los cambios en el rastreador y confirme el reporte mediante una prueba en vivo.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888 depending on device configuration
- Plaspy automatically detects the tracker protocol when the device sends data and uses the same port for all supported devices

## Requisitos habituales antes de la configuración

- Una unidad RF-V03 con alimentación y batería cargada o conectada a la alimentación del vehículo
- Una tarjeta SIM celular activa instalada y capaz de conectarse en las bandas GSM soportadas
- Acceso al método de configuración Reachfar para su unidad, como comandos SMS, una herramienta de configuración o software del proveedor
- Conocimiento del APN del operador y de cualquier detalle de autenticación de la SIM si se requiere
- Una cuenta en Plaspy y acceso a la plataforma para validar el dispositivo después de la configuración
- Visibilidad clara para obtener un fix GPS durante la validación, o un periodo de prueba lo suficientemente largo para asistencia AGPS

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el RF-V03 envía sus mensajes de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda mostrar y registrar la actividad del dispositivo.

- El dispositivo se configura para reportar posición y alarmas a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Plaspy recibe paquetes entrantes por UDP o TCP y determina automáticamente el protocolo correcto del rastreador.
- Las actualizaciones de posición, eventos de geocerca, alertas de exceso de velocidad, alarmas por corte de cable y eventos del sensor G se reenvían a Plaspy para su visualización.
- Una vez que los mensajes llegan a Plaspy, el rastreador se hace visible en su cuenta y puede supervisarse en tiempo real y revisarse su historial de rutas.
- Usar el puerto compartido de Plaspy simplifica la configuración porque el mismo puerto se usa para los dispositivos soportados.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Reachfar o al software del proveedor para el RF-V03 (SMS, herramienta USB o herramienta web/móvil provista por su suministrador).
2. Ingrese el servidor Plaspy como el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según las opciones de la herramienta del dispositivo.
3. Establezca el puerto del servidor en 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija el modo de transporte UDP o TCP si el dispositivo requiere selección.
5. Configure el APN del operador o ajustes específicos de la SIM si su SIM los necesita, luego aplique o guarde la configuración.
6. Reinicie el rastreador si las instrucciones del fabricante indican que es necesario para aplicar los cambios.
7. Valide que el dispositivo informe a Plaspy comprobando los datos entrantes en su cuenta Plaspy y verificando mensajes de ubicación y eventos.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para configurar un RF-V03 varían según el firmware y el método que le proporcione su proveedor. Como los comandos específicos del modelo los facilita Reachfar o los distribuidores, no se incluye aquí el conjunto exacto de comandos. En general:

- Si su dispositivo soporta configuración por SMS, enviará comandos SMS para establecer dominio o IP del servidor, puerto y transporte. Los comandos SMS difieren según el firmware.
- Si su dispositivo utiliza una herramienta USB o de escritorio, use esa herramienta para establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto 8888, luego guarde y empuje los ajustes al dispositivo.
- Si se usa un portal móvil o web, siga los campos del portal para ingresar el dominio o IP del servidor y el puerto 8888, seleccione UDP o TCP y guarde.

Si dispone de ejemplos de comandos proporcionados por Reachfar o un distribuidor, aplíquelos en el mismo orden: configurar servidor, establecer puerto, seleccionar transporte, aplicar y luego reiniciar. Preserve cualquier marcador de posición que proporcione el fabricante como [apn] y reemplácelo por el APN de su operador cuando sea necesario.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y las opciones disponibles; consulte la documentación Reachfar para obtener comandos que coincidan con su unidad.
- Elija UDP o TCP según lo que el dispositivo soporte; Plaspy acepta ambos, pero el comportamiento del dispositivo puede variar ligeramente según el transporte.
- Dado que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, concentre sus esfuerzos en apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Si configura mediante SMS, tenga en cuenta los mensajes de confirmación de comandos SMS y pruebe el reporte después de cada cambio importante.
- Al instalar el RF-V03 en una ubicación oculta recuerde que la carcasa y la colocación pueden afectar la calidad del fix GPS y el rendimiento del AGPS.

## Por qué usar Plaspy con esta configuración

Usar el Reachfar RF-V03 con Plaspy proporciona una integración de plataforma sencilla al dirigir el rastreador a un endpoint y puerto públicos y documentados de Plaspy. Esta configuración ofrece a las organizaciones visibilidad de la ubicación en tiempo real, el historial de rutas y eventos de alarma como geocercas, exceso de velocidad y alertas de manipulación, para que usted pueda monitorear activos y responder a incidentes.

Para obtener más información sobre Plaspy y las funciones de la plataforma disponibles para gestión de flotas y rastreo de activos visite https://www.plaspy.com. Para los comandos específicos más recientes del Reachfar RF-V03, notas de firmware e instrucciones del fabricante, verifique los detalles en el sitio oficial de Reachfar https://www.reachfargps.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
