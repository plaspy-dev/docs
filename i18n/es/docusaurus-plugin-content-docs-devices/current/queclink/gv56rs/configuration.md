---
slug: /queclink/gv56rs/configuration
id: gv56rs-configuration
sidebar_label: Configuration
title: QuecLink - GV56RS Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GV56RS para Plaspy, con ajustes de servidor, comandos SMS y flujo de configuración
keywords:
  - Configuración QuecLink GV56RS
  - Configuración GV56RS
  - Configuración servidor GV56RS
  - Configuración Plaspy GV56RS
  - Configuración rastreador GPS GV56RS
  - Rastreador QuecLink Plaspy
  - Rastreo vehicular GV56RS
  - Gestión de flotas GV56RS
  - Configuración SMS GV56RS
  - Configuración RS485 GV56RS
---

# QuecLink - Configuración del GV56RS

Esta página documenta el contexto público de configuración necesario para conectar el rastreador GPS QuecLink GV56RS a la plataforma Plaspy. Resume los ajustes de servidor compartidos que debe aplicar en el dispositivo, presenta los comandos SMS disponibles de QuecLink para tareas comunes de puesta a punto y describe un flujo de trabajo práctico para dejar el equipo listo para reportar en vivo a Plaspy.

Plaspy utiliza un único endpoint y puerto compartidos para los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo cuando su GV56RS comienza a reportar. Los pasos exactos en el lado del fabricante y los menús pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los ejemplos siguientes usan comandos SMS estilo AT documentados públicamente por QuecLink y deben verificarse con las guías oficiales de QuecLink para su firmware específico.

## Resumen de la configuración

Preparar el GV56RS para Plaspy se centra en asegurar conectividad GPRS fiable, apuntar el dispositivo a los endpoints de servidor de Plaspy y habilitar los reportes y entradas que necesite para la visibilidad de la flota. Los comandos SMS de ejemplo en esta guía muestran una secuencia habitual: reinicio opcional a fábrica, zona horaria y APN, ajustes de servidor, intervalos de reporte y entradas de evento como SOS.

- Configure el APN y los parámetros GPRS para que el dispositivo alcance Plaspy a través de la red móvil.
- Establezca el endpoint de servidor y el puerto de Plaspy para que el GV56RS envíe los datos a Plaspy.
- Seleccione UDP o TCP en el dispositivo según corresponda y guarde los ajustes.
- Active el reporte periódico y las entradas o sensores relevantes para que la información aparezca en los paneles de Plaspy.
- Valide que el dispositivo sea visible en Plaspy después de aplicar la configuración y reinicie si fuera necesario.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el GV56RS puede configurarse con UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que debe usar el puerto 8888 durante la configuración

## Requisitos habituales antes de la configuración

- Una unidad GV56RS alimentada y accesible con la contraseña de instalador o administrador conocida si se requiere
- Una SIM celular válida con acceso a datos y capacidad SMS si usa configuración por SMS y reporte por GPRS
- Detalles de APN del operador móvil, incluyendo el nombre del APN y opcionalmente usuario y contraseña del APN
- Acceso a los métodos de configuración QuecLink que soporte su dispositivo y firmware, como comandos SMS o herramientas del proveedor
- Los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) disponibles antes de comenzar
- Herramientas básicas para enviar comandos SMS desde un teléfono móvil o una herramienta de gestión que soporte comandos estilo AT de QuecLink

## Cómo se conecta este rastreador a Plaspy

El GV56RS reporta posiciones GNSS, estados de entradas y la telemetría de sensores configurada al endpoint y puerto del servidor Plaspy. Una vez apuntado a Plaspy, el dispositivo enviará sus reportes periódicos y mensajes disparados por eventos para que Plaspy muestre mapas en vivo, historiales y alertas.

- El dispositivo envía reportes periódicos y por eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Puede elegir transporte UDP o TCP en el GV56RS; Plaspy detectará el protocolo automáticamente cuando lleguen los datos
- Los reportes incluyen fijaciones de ubicación y la telemetría que el dispositivo esté configurado para enviar, como entradas, eventos de identificación de conductor y valores de sensores
- Plaspy procesa el protocolo entrante y hace visible el rastreador en la plataforma para monitoreo y alertas basadas en reglas
- Tras la configuración y un reinicio, valide que el dispositivo aparezca y se actualice en el servidor Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración QuecLink para el GV56RS, como la interfaz de comandos AT por SMS o el software del fabricante para su firmware.
2. Ingrese el endpoint de servidor de Plaspy especificando d.plaspy.com o 54.85.159.138 en los ajustes de servidor del equipo.
3. Configure el puerto del dispositivo en 8888; Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
4. Seleccione UDP o TCP en el GV56RS si el equipo requiere escoger el transporte.
5. Configure el APN y las credenciales del operador necesarias para que el dispositivo tenga conectividad GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si su firmware requiere reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy confirmando que la unidad aparece y envía actualizaciones a la plataforma.

## Comandos de configuración de ejemplo

Los siguientes comandos estilo AT por SMS se toman de ejemplos públicos de configuración del QuecLink GV56RS. La secuencia de ejemplo usa la contraseña del dispositivo queclink que aparece como valor por defecto en los comandos de ejemplo. Si ha cambiado la contraseña del dispositivo, sustitúyala donde los comandos muestran la contraseña. Los marcadores como [apn], [apnu] y [apnp] deben reemplazarse con los valores de su operador móvil.

- Reinicio opcional a valores de fábrica (usar sólo si necesita restaurar los valores de fábrica):
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Establecer la zona horaria a UTC 0:
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Configurar el APN del operador y credenciales opcionales:
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Explicación: reemplace [apn] por el nombre del APN de su operador. [apnu] y [apnp] son marcadores opcionales para usuario y contraseña del APN.

- Configurar el servidor GPRS para apuntar a Plaspy usando dominio e IP con puerto 8888:
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Explicación: este comando establece el host del servidor a d.plaspy.com e incluye la IP de respaldo 54.85.159.138; ambos usan el puerto 8888 que es el puerto requerido por Plaspy.

- Establecer el intervalo de seguimiento/reporte a 60 segundos:
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Activar notificación del botón SOS en la entrada 2:
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Preserve el orden de estos comandos cuando realice una configuración inicial. Reemplace el token de contraseña si no utiliza el valor por defecto. Use el reinicio opcional a fábrica sólo cuando sea necesario.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos AT o la disponibilidad de comandos; verifique siempre las notas de la versión de su firmware.
- Los dispositivos QuecLink suelen soportar configuración por SMS como se muestra aquí, pero también pueden estar disponibles herramientas del proveedor o un sistema de administración OTA para aprovisionamiento masivo o remoto.
- Elija UDP o TCP según sus restricciones de red y firewall; Plaspy detectará el protocolo automáticamente una vez que el dispositivo se conecte al puerto 8888.
- Mantenga las credenciales del APN seguras y verifique que la SIM tenga datos habilitados para comunicación GPRS y capacidad SMS para la entrega de comandos.
- Los comandos de ejemplo muestran la contraseña por defecto queclink; cambie las contraseñas del dispositivo según proceda por seguridad después de la configuración si su flujo de trabajo lo requiere.

## Por qué usar Plaspy con esta configuración

Configurar un GV56RS para que reporte a Plaspy ofrece una vía sencilla para centralizar la ubicación de vehículos, la telemetría de sensores y las alertas de evento para operaciones de flota, gestión de alquileres y recuperación de vehículos robados. Con Plaspy detectando automáticamente el protocolo del rastreador y un endpoint y puerto compartidos, los administradores pueden estandarizar la incorporación de equipos y enfocarse en reglas, alertas y análisis en lugar de diferencias por servidor entre dispositivos.

Para conocer más sobre Plaspy y cómo la plataforma se integra con dispositivos como el QuecLink GV56RS visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que se recomienda verificar la información de configuración más reciente en el sitio oficial de QuecLink https://www.queclink.com/.
