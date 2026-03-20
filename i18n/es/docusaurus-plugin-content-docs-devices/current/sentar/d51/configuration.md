---
slug: /sentar/d51/configuration
id: d51-configuration
sidebar_label: Configuration
title: Sentar - D51 Configuration
sidebar_class_name: menu_item_tracker
description: Guía clara para configurar el rastreador Sentar D51 con servidores Plaspy y comandos SMS
keywords:
  - Configuración Sentar D51
  - Instalación Sentar D51
  - Configuración servidor Sentar D51
  - Configuración D51 Plaspy
  - Comandos SMS Sentar D51
  - Configuración rastreador GPS Sentar
  - Configuración seguimiento reloj inteligente infantil
  - Integración rastreador con Plaspy
  - Configuración rastreador GPS portátil
  - Configuración software seguimiento D51
---

# Sentar - Configuración D51

Esta página describe el contexto público de configuración para usar el Sentar D51 4G Kids Smart Watch con Plaspy. Se concentra en los ajustes prácticos de servidor y en los comandos de configuración de acceso público que preparan el dispositivo para comunicarse con Plaspy y hacerse visible en el panel de la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor. El D51 puede configurarse mediante comandos SMS como los que se muestran más abajo; esos comandos son suministrados por el fabricante y representan un flujo de configuración público y común.

## Resumen de la configuración

El objetivo de este proceso es preparar el D51 para que envíe de forma confiable la ubicación y los datos del dispositivo a Plaspy, de modo que el reloj aparezca como un objeto activo en la plataforma. La configuración normalmente abarca la información de servidor y APN, la verificación de la identidad de la red, los intervalos de actualización y, opcionalmente, un restablecimiento de fábrica o la zona horaria.

- Apuntar el D51 al endpoint de servidor de Plaspy para que la ubicación y la telemetría fluyan hacia la plataforma.
- Configurar el APN del operador y verificar MCC/MNC para que el reloj tenga datos móviles y conectividad GPRS.
- Establecer un intervalo de subida periódico para que Plaspy reciba actualizaciones de ubicación y estado del dispositivo en tiempo oportuno.
- Usar comandos SMS del fabricante o herramientas oficiales de configuración para aplicar y verificar los ajustes.
- Opcionalmente, realizar un restablecimiento de fábrica o ajustar la zona horaria como parte del aprovisionamiento inicial.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port for server connections

## Requisitos típicos antes de la configuración

- Un dispositivo D51 con batería cargada y una Nano SIM activa que tenga datos y SMS habilitados.
- Acceso al método de configuración del fabricante o a la lista de comandos SMS del D51.
- Datos del APN, nombre de usuario APN y contraseña APN del operador celular que vaya a usar.
- Conocimiento básico de la contraseña por defecto del dispositivo (los comandos públicos a continuación usan 123456).
- Un teléfono capaz de enviar SMS al D51 o la herramienta oficial de configuración del fabricante.
- Cobertura de red en la zona donde operará el dispositivo para que pueda registrarse en la red LTE.

## Cómo se conecta este rastreador a Plaspy

El D51 envía ubicación y telemetría del dispositivo a través de su conexión de datos móviles al endpoint y puerto compartido de Plaspy. Una vez configurado para apuntar a Plaspy, los mensajes del dispositivo se enrutan hacia Plaspy, donde la detección automática de protocolo reconoce el protocolo del rastreador y las actualizaciones se muestran en la plataforma.

- El reloj reporta posicionamientos y telemetría a d.plaspy.com / 54.85.159.138 en el puerto 8888.
- Plaspy acepta conexiones usando UDP o TCP según lo configure el dispositivo y detecta el protocolo automáticamente.
- Los avisos de SOS y otras notificaciones del D51 se reenvían a Plaspy para su alerta y escalado.
- Las subidas periódicas garantizan que los recorridos históricos y el estado del dispositivo estén disponibles en los paneles de Plaspy.
- Una configuración correcta hace que el dispositivo sea visible en Plaspy y se pueda usar con geocercas, alertas y monitorización.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Sentar para el D51 (comandos SMS o herramienta del fabricante).
2. Opcionalmente, realice un restablecimiento de fábrica si necesita un estado inicial limpio.
3. Introduzca el nombre de host del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
5. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte; Plaspy detectará el protocolo automáticamente.
6. Configure el APN y los datos del operador para que el D51 disponga de conectividad de datos móviles.
7. Aplique o guarde la configuración y reinicie el dispositivo si es necesario.
8. Verifique que el dispositivo reporte correctamente a Plaspy y aparezca en la plataforma.

## Ejemplos de comandos de configuración

Los siguientes comandos SMS públicos se incluyen en la documentación del fabricante como una secuencia común para el D51. La contraseña de ejemplo mostrada en estos comandos es 123456 y es la contraseña de fábrica en los ejemplos del fabricante. Mantenga los marcadores de posición tal como aparecen al reemplazarlos con sus valores de operador.

- Restablecimiento de fábrica (paso inicial opcional)
```text
pw,123456,factory#
```

- Ajustar la zona horaria a UTC+0
```text
pw,123456,lz,0,0#
```

- Verificar MCC y MNC de la SIM (devuelve los identificadores del operador)
```text
pw,123456,imsi#
```

- Configurar el APN del operador donde [apn] es el APN, [apnu] es el usuario APN, [apnp] es la contraseña APN y xxxyy es el MCC y MNC concatenados
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```
Explicación: Reemplace [apn], [apnu] y [apnp] con los valores de su operador móvil. Sustituya xxxyy por el MCC y MNC del operador combinados según indique la documentación del dispositivo.

- Establecer el servidor GPRS usando la IP y puerto de Plaspy
```text
pw,123456.ip,54.85.159.138,8888#
```
Nota: Este comando usa la IP del servidor Plaspy 54.85.159.138 y el puerto 8888. Alternativamente, el dispositivo puede permitir usar d.plaspy.com como nombre de host.

- Establecer el intervalo de subida periódico a 300 segundos
```text
pw123456,upload,300#
```
Nota: Algunos formatos de comandos del fabricante varían ligeramente en la puntuación. La contraseña por defecto en los ejemplos es 123456; asegúrese de que la sintaxis exacta coincida con el firmware de su dispositivo.

- Verificar la configuración actual (estado)
```text
pw,123456,ts#
```

## Notas de configuración

- La sintaxis y la puntuación de los comandos del fabricante pueden variar entre versiones de firmware; use el formato SMS exacto que requiera su firmware.
- El D51 admite configuración por SMS según la documentación pública; si lo prefiere, use la herramienta oficial del fabricante o el software de aprovisionamiento cuando esté disponible.
- Elija UDP o TCP según las opciones del dispositivo. Plaspy soporta ambos y detectará el protocolo automáticamente una vez que lleguen los mensajes al puerto 8888.
- Asegúrese de que la SIM tenga datos habilitados y las credenciales APN correctas; un APN o identificadores de operador incorrectos impedirán las subidas a Plaspy.
- Dado que todos los dispositivos de Plaspy usan el mismo puerto, utilice el puerto 8888 al configurar los ajustes de servidor para alinearse con las expectativas de Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el Sentar D51 para enviar actualizaciones a Plaspy ofrece un endpoint único y consistente para recopilar ubicación, SOS y telemetría de rastreadores wearables. Para familias y organizaciones que necesitan visibilidad y alertas fiables, apuntar el D51 a Plaspy permite que los datos del dispositivo estén disponibles como puntos en tiempo real, alertas y reportes históricos en una plataforma de monitorización centralizada.

Para obtener más información sobre Plaspy y las configuraciones compatibles visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la información de configuración más reciente y la sintaxis de comandos en el sitio del fabricante http://www.sentarsmart.com/ antes del despliegue.
