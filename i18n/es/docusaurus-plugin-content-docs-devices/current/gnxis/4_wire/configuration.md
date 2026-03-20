---
slug: /gnxis/4_wire/configuration
id: 4_wire-configuration
sidebar_label: Configuration
title: Gnxis - 4-wire Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Gnxis 4-wire para integrarlo con Plaspy con ajustes de servidor y comandos SMS
keywords:
  - configuración Gnxis 4-wire
  - instalación Gnxis 4-wire
  - configuración Gnxis Plaspy
  - configuración rastreador Gnxis GPS
  - configuración servidor Plaspy
  - comandos SMS rastreador GPS
  - configuración seguimiento de vehículos
  - configuración rastreador GPRS
  - configuración rastreador LTE GPS
  - guía conectividad del rastreador
---

# Gnxis - Configuración 4-wire

Esta página recopila la información pública de configuración para usar el rastreador Gnxis 4-wire con la plataforma Plaspy. Incluye los pasos prácticos y comandos SMS disponibles públicamente para preparar el dispositivo y que se comunique correctamente con Plaspy. El Gnxis 4-wire es compatible con redes LTE, GSM y GPRS y permite configuración vía SMS, lo que se refleja en los ejemplos de comandos a continuación.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que los comandos que siguen deben considerarse orientación pública y debe verificar cualquier comportamiento específico con la documentación del fabricante.

## Resumen de la configuración

Este proceso prepara el Gnxis 4-wire para que reporte ubicación y estado a Plaspy ajustando parámetros de red, el endpoint del servidor, intervalos de reporte y alarmas básicas. La secuencia de comandos SMS pública que se muestra abajo ilustra las acciones comunes usadas en la configuración inicial y la verificación.

- Configure el APN del dispositivo y, si aplica, las credenciales APN para que los datos GPRS lleguen a Internet.
- Apunte el dispositivo al endpoint y puerto del servidor Plaspy para que el rastreador envíe mensajes de ubicación.
- Seleccione transporte UDP o TCP y configure un intervalo de actualización acorde con sus necesidades de visibilidad de la flota.
- Active el reporte de eventos críticos como SOS y pérdida de alimentación para que la plataforma los reciba.
- Verifique los ajustes y confirme que el dispositivo sea visible en Plaspy una vez que el rastreador se conecte.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Nota: todos los dispositivos en Plaspy usan el mismo puerto para conectividad

## Requisitos típicos antes de la configuración

- Un dispositivo Gnxis 4-wire alimentado y accesible, instalado o en banco de pruebas con fuente estable.
- Una tarjeta SIM válida con plan de datos y capacidad de enviar SMS para mensajería de configuración.
- Valores de APN, usuario APN y contraseña APN del operador móvil para habilitar GPRS.
- Acceso al método oficial de configuración del fabricante para el dispositivo, típicamente comandos por SMS en este modelo.
- Conocimiento de la contraseña por defecto del dispositivo si se requiere para ejecutar comandos de configuración.

## Cómo se conecta este rastreador a Plaspy

El Gnxis 4-wire se configura para enviar mensajes por GPRS o TCP/UDP al endpoint y puerto del servidor Plaspy para que la plataforma reciba ubicación y eventos de alarma. Plaspy recibe el tráfico entrante en un puerto compartido y determina automáticamente el protocolo correcto.

- El rastreador utiliza datos GPRS para establecer la conexión hacia Plaspy usando la IP o dominio configurado.
- Los mensajes del dispositivo se envían al puerto 8888 para que Plaspy pueda ingerir la telemetría de todos los rastreadores soportados.
- Puede elegir UDP o TCP según el firmware del dispositivo y su preferencia operativa.
- Plaspy detecta automáticamente el protocolo del rastreador y mapea los mensajes dentro de la plataforma.
- Tras una configuración exitosa, el dispositivo será visible en Plaspy para monitoreo en tiempo real y alertas.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software para el Gnxis 4-wire, comúnmente basado en comandos SMS.
2. Ingrese el servidor Plaspy como el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes del dispositivo.
3. Establezca el puerto 8888 para el endpoint del servidor, ya que Plaspy usa un único puerto para todos los dispositivos.
4. Seleccione UDP o TCP si el rastreador requiere una selección explícita del transporte.
5. Aplique o guarde la configuración usando el método del dispositivo, por ejemplo enviando los comandos SMS necesarios.
6. Reinicie el rastreador si el equipo requiere reboot para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy verificando el estado del rastreador en la plataforma o empleando el comando de verificación del dispositivo.

## Comandos de configuración de ejemplo

El Gnxis 4-wire acepta comandos SMS para configuración. La contraseña por defecto usada en estos ejemplos es 123456. Mantenga el orden cuando realice la configuración inicial si desea reproducir un flujo típico de aprovisionamiento.

- Restauración de fábrica (opcional o en configuración inicial)
```sms
begin123456
```

- Ajustar la zona horaria a UTC 0
```sms
time zone123456 0
```

- Configurar el APN del operador
```sms
apn123456 [apn]
```
Explicación: reemplace [apn] por la cadena APN de su operador móvil.

- Configurar usuario y contraseña del APN
```sms
up123456 [apnu] [apnp]
```
Explicación: reemplace [apnu] por el usuario del APN y [apnp] por la contraseña del APN si el operador los requiere.

- Configurar el servidor GPRS usando la IP pública de Plaspy y el puerto
```sms
adminip123456 54.85.159.138 8888
```
Esto hace que el dispositivo envíe datos a Plaspy en la IP y puerto conocidos.

- Ejemplo de comando para intervalo de actualización
```sms
fix060s060s***n123456
```
Este comando es un ejemplo público para la temporización de reportes según lo documentado por el fabricante. Ajústelo según sus requerimientos y la sintaxis del firmware.

- Activar transmisión del botón SOS
```sms
SOSALM,ON,1#
```

- Cambiar a modo GPRS y establecer transporte a UDP o TCP según la sintaxis soportada
```sms
gprs123456,1,1
```
Comando alternativo más corto a veces aceptado:
```sms
gprs123456
```

- Consultar la configuración actual
```sms
check123456
```

Nota sobre los marcadores de posición: [apn], [apnu] y [apnp] son marcadores para el APN de su operador, el usuario APN y la contraseña APN. Mantenga la contraseña por defecto 123456 a menos que ya haya sido cambiada.

## Observaciones de configuración

- La configuración vía SMS se documenta aquí porque el Gnxis 4-wire soporta comandos SMS en estos ejemplos públicos.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos y las opciones disponibles; consulte la documentación del fabricante si un comando es rechazado.
- Elija UDP para menor overhead o TCP para entrega más fiable si el firmware del dispositivo ofrece ambas opciones.
- Mantenga las credenciales APN correctas y pruebe la conectividad GPRS antes de finalizar los ajustes de servidor e intervalo.
- Los valores del servidor Plaspy d.plaspy.com y 54.85.159.138 con puerto 8888 son los endpoints públicos a utilizar para esta integración.

## Por qué usar Plaspy con esta configuración

Usar el Gnxis 4-wire con Plaspy brinda a las organizaciones visibilidad centralizada de la ubicación de vehículos y el reporte de eventos al canalizar los datos del dispositivo hacia una plataforma única. Con el endpoint compartido de Plaspy y la detección automática de protocolo, los administradores de flota pueden estandarizar el aprovisionamiento de dispositivos y centrarse en el monitoreo operativo en lugar de gestionar servidores por dispositivo.

Para más información sobre Plaspy visite https://www.plaspy.com. Las especificaciones del fabricante, los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que debe verificar los detalles específicos más recientes con el fabricante en su sitio oficial.
