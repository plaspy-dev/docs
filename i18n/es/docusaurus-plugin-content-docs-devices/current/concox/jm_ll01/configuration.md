---
slug: /concox/jm_ll01/configuration
id: jm_ll01-configuration
sidebar_label: Configuration
title: Concox - JM-LL01 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar Concox JM-LL01 con Plaspy, ajustes de servidor, comandos SMS y verificación
keywords:
  - Configuración Concox JM-LL01
  - Configuración JM-LL01
  - Rastreador Concox Plaspy
  - Configuración servidor JM-LL01
  - Configuración rastreador GPS Concox
  - Configuración dispositivo Plaspy
  - Configuración SMS JM-LL01
  - Configuración rastreador de activos Concox
  - Configuración JM-LL01 LTE NB-IoT
  - Configuración rastreador gestión de flotas
---

# Concox - JM-LL01 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Concox JM-LL01 con Plaspy. Reúne los ajustes de servidor prácticos y los comandos SMS de uso común para apuntar este modelo a Plaspy, y explica qué debe verificar antes de intentar la integración. El contenido refleja información pública de configuración y los comandos SMS que los instaladores suelen emplear.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; trate los comandos y el flujo a continuación como una guía pública y práctica, no como el único método posible. Cuando corresponda, esta guía conserva marcadores como [apn], [apnu] y [apnp] para que pueda sustituir los valores del operador durante la configuración.

## Resumen de configuración

Este proceso prepara el JM-LL01 para comunicarse de forma confiable con Plaspy, de modo que el dispositivo pueda entregar datos de ubicación y telemetría a la plataforma. Los pasos se centran en configurar el endpoint del servidor, elegir el transporte, asegurar que los datos móviles estén activos y validar el reporte a Plaspy.

- Configure el dispositivo para que use el endpoint y puerto del servidor Plaspy y así enrutar la telemetría a la plataforma.
- Aplique los ajustes de APN y GPRS para que el rastreador pueda conectarse a la red móvil y enviar datos.
- Elija y confirme el transporte (UDP o TCP) según lo requiera el firmware del dispositivo y la red.
- Verifique que el dispositivo reporte a Plaspy y compruebe la conectividad con un comando de verificación.
- Guarde la configuración y reinicie el dispositivo si es necesario para comenzar a reportar.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — the device may be configured to use either transport on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la configuración

- Un JM-LL01 alimentado con una tarjeta SIM válida instalada y con datos móviles activos para GPRS o NB-IoT/LTE según corresponda.
- Acceso al método de configuración que soporte la unidad: SMS, aplicación móvil, configuración local por BLE o herramienta de PC según el firmware y las herramientas disponibles.
- La información correcta del APN para el operador elegido (use los marcadores [apn], [apnu], [apnp] si es necesario).
- Capacidad para enviar y recibir SMS si utiliza configuración por SMS y una batería cargada o una fuente de alimentación temporal.
- Un plan de pruebas básico para validar el reporte a Plaspy tras la configuración (vea el comando de verificación más abajo).

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el JM-LL01 envía posiciones GNSS y telemetría de sensores al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y mostrar datos en tiempo real e históricos. Plaspy procesa esos mensajes, aplica el parsing del protocolo y presenta la ubicación, alertas y telemetría en el panel.

- El rastreador se configura para reportar a d.plaspy.com o a la IP equivalente del servidor Plaspy en el puerto 8888.
- El transporte puede ser UDP o TCP; elija el que soporte el firmware del dispositivo y la red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo servidor y puerto funcionan para los dispositivos soportados.
- Los mensajes de ubicación y eventos se reenvían a Plaspy para seguimiento en vivo, alertas y registros históricos.
- El reporte exitoso permite activar flujos de trabajo como geocercas, alertas e informes dentro de Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante o al software para JM-LL01 (SMS, app BLE, Tracksolid Pro o herramienta de PC) según su dispositivo y firmware.
2. Ingrese la dirección del servidor Plaspy configurando el server a d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según las necesidades de su instalación.
5. Configure el APN y las credenciales del operador necesarias usando los marcadores proporcionados o los valores del operador.
6. Aplique o guarde la configuración y reinicie el rastreador si la herramienta o los comandos SMS lo requieren.
7. Valide que el dispositivo reporta a Plaspy usando un comando de verificación o comprobando el estado del dispositivo en Plaspy después de un breve intervalo de reporte.

## Ejemplos de comandos de configuración

El JM-LL01 soporta configuración por SMS. A continuación se muestran los comandos SMS públicos de uso común en orden. Envíe cada comando como SMS al número del dispositivo. Conserve los marcadores al sustituir por los valores del operador.

- Resetear a ajustes de fábrica (paso inicial opcional)
```text
FACTORY#
```

- Establecer zona horaria a UTC+0
```text
GMT,E,0#
```

- Configurar el APN del operador (reemplace [apn], [apnu], [apnp] según sea necesario)
```text
APN,[apn],[apnu],[apnp]#
```
Nota: [apn] es el APN del operador. [apnu] y [apnp] son marcadores opcionales para usuario y contraseña del APN; inclúyalos solo si su operador exige credenciales.

- Establecer el servidor GPRS usando el dominio de Plaspy (la selección UDP/TCP depende del dispositivo)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Alternativamente, establecer el servidor GPRS usando la IP del servidor Plaspy
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización/reporte cada 60 segundos (otra forma admite dos valores)
```text
TIMER,60#
```
o
```text
TIMER,60,60#
```

- Habilitar modo GPRS
```text
GPRSON,1#
```

- Verificar parámetros GPRS y del servidor
```text
GPRSSET#
```

Envíe los comandos en el orden mostrado cuando siga una secuencia de configuración inicial. Use el comando de restauración de fábrica únicamente cuando necesite borrar configuraciones previas.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; valide siempre los comandos en un único equipo antes de implementaciones masivas.
- El dispositivo soporta la configuración por SMS como se muestra; BLE, app móvil o herramientas de PC pueden ofrecer flujos alternativos con interfaz gráfica.
- Elija UDP o TCP en función de la fiabilidad de la red y las restricciones del ISP; ambos transportes son compatibles al apuntar a Plaspy en el puerto 8888.
- Conserve y sustituya los marcadores como [apn], [apnu] y [apnp] con los valores del operador al configurar la SIM/APN.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará automáticamente el protocolo del rastreador, por lo que puede usar el endpoint compartido de Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el JM-LL01 con Plaspy ofrece a las organizaciones visibilidad consolidada de ubicación, telemetría de sensores y alertas de eventos en activos remotos de larga duración. Las opciones de conectividad de bajo consumo y el registro local del JM-LL01 combinan bien con las funciones de Plaspy para garantizar reporte continuo, alertas y recuperación de trazas históricas cuando la conectividad es intermitente.

Para saber más sobre Plaspy y cómo gestiona datos de dispositivos y alertas, visite https://www.plaspy.com. Para los comandos de configuración específicos más recientes, notas de firmware y documentación oficial del JM-LL01, verifique los detalles con el fabricante en https://www.iconcox.com/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.
