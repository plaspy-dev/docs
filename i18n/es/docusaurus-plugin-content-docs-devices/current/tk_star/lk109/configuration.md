---
slug: /tk_star/lk109/configuration
id: lk109-configuration
sidebar_label: Configuration
title: TK-Star - LK109 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TK-Star LK109 con los ajustes de servidor de Plaspy y comandos SMS de ejemplo
keywords:
  - Configuración TK-Star LK109
  - Instalación TK-Star LK109
  - Configuración LK109 Plaspy
  - Configuración de servidor LK109
  - Configuración rastreador GPS TK-Star
  - Instalación rastreador GPS LK109
  - Configuración rastreador Plaspy
  - Rastreo de vehículos LK109
  - Configuración plataforma de rastreo GPS
  - Comandos SMS TK-Star LK109
---

# TK-Star - Configuración del LK109

Esta página describe el contexto público de configuración para usar el rastreador TK-Star LK109 con Plaspy. Se enfoca en los ajustes prácticos del servidor, el flujo de trabajo habitual y los comandos SMS de ejemplo disponibles públicamente para preparar el equipo y que informe ubicación y estado a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos desde el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el entorno de la instalación y las herramientas del proveedor; esta guía utiliza los comandos de configuración públicos del LK109 cuando están disponibles y se centra en el endpoint compartido de Plaspy necesario para integrar el dispositivo.

## Resumen de configuración

El objetivo de esta configuración es preparar el LK109 para que establezca una conexión GPRS y envíe datos de rastreo a Plaspy de forma confiable. Los comandos públicos para el LK109 usan principalmente SMS para definir el APN, el servidor, el intervalo de reporte y el modo de operación, de modo que el dispositivo pueda comunicarse con el servidor de Plaspy.

- Apuntar el rastreador al endpoint y puerto del servidor Plaspy para que entregue actualizaciones de ubicación.
- Configurar el APN del dispositivo y las credenciales necesarias para disponer de datos GPRS.
- Establecer un intervalo de reporte adecuado a sus necesidades de monitoreo y presupuesto de energía.
- Asegurarse de que el dispositivo esté en modo GPRS para que transmita a Plaspy en vez de a un endpoint local o heredado.
- Validar la conectividad y confirmar que el rastreador aparece en Plaspy una vez configurado.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos previos típicos

- Un LK109 cargado y operativo con acceso a SMS para configuración
- Una tarjeta SIM activa con datos y SMS habilitados, y las credenciales APN correctas proporcionadas por el operador móvil
- Un teléfono móvil o una herramienta capaz de enviar comandos SMS de configuración al rastreador
- La contraseña por defecto del dispositivo si se requiere para la configuración (los comandos públicos abajo usan la contraseña por defecto 123456)
- Acceso a la documentación del fabricante y a las herramientas del proveedor para instrucciones específicas de firmware
- Una cuenta en Plaspy o acceso a la plataforma Plaspy para validar que el dispositivo aparece después de la configuración

## Cómo se conecta este rastreador a Plaspy

El LK109 se configura para enviar su ubicación y estado a Plaspy estableciendo la información del servidor GPRS al endpoint de Plaspy y asegurando que el dispositivo use el modo GPRS. Una vez configurado, el rastreador transmite actualizaciones periódicas que Plaspy recibe en el puerto compartido y muestra en la plataforma.

- El rastreador envía datos GPRS al endpoint Plaspy 54.85.159.138 en el puerto 8888
- Plaspy acepta conexiones en el puerto 8888 y soporta tanto UDP como TCP
- Plaspy detecta automáticamente el protocolo del rastreador para interpretar los mensajes entrantes del LK109
- La configuración del intervalo de reporte controla con qué frecuencia el dispositivo sube la ubicación a Plaspy
- Tras una configuración exitosa y la conexión de datos, el rastreador queda visible en Plaspy para monitoreo en tiempo real y revisiones de historial

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante o al software, o prepárese para usar comandos SMS proporcionados por TK-Star.
2. Ingrese la dirección del servidor Plaspy ya sea por dominio d.plaspy.com o por la IP 54.85.159.138 según la opción de configuración del dispositivo.
3. Configure el puerto a 8888 ya que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Elija UDP o TCP si el dispositivo requiere una selección explícita del transporte.
5. Configure el APN y cualquier nombre de usuario o contraseña del APN requeridos por el operador móvil.
6. Aplique o guarde la configuración y cambie el rastreador a modo GPRS si es necesario.
7. Reinicie el dispositivo si la documentación del fabricante o el equipo lo recomiendan.
8. Valide que el rastreador reporte a Plaspy y que sea visible en la plataforma.

## Comandos de configuración de ejemplo

El LK109 puede configurarse mediante comandos SMS. Los siguientes comandos provienen de instrucciones públicas de configuración del LK109. La contraseña del dispositivo que se usa en estos ejemplos es 123456, que es la contraseña por defecto en los comandos públicos.

- Optional initial factory restore (use only if you need to reset the device):
```sms
begin123456
```

- Set the operator APN (replace [apn] with your operator APN):
```sms
apn123456 [apn]
```

- Set the APN username if required by your operator (replace [apnu] with the APN user):
```sms
apnuser123456 [apnu]
```

- Set the APN password if required by your operator (replace [apnp] with the APN password):
```sms
apnpasswd123456 [apnp]
```

- Set the GPRS server to the Plaspy server IP and port (this example uses the public Plaspy IP and port):
```sms
adminip123456 54.85.159.138 8888
```

- Set the upload interval to 60 seconds (adjust the number for a different reporting frequency):
```sms
upload123456 60
```

- Switch the tracker to GPRS mode so it uses data reporting:
```sms
gprs123456
```

Notas sobre los marcadores:
- [apn] es la cadena APN del operador móvil necesaria para el acceso a datos.
- [apnu] y [apnp] son los campos opcionales de nombre de usuario y contraseña del APN si su operador los requiere.
- Los ejemplos anteriores usan la contraseña por defecto del dispositivo 123456; si usted cambió la contraseña del dispositivo, reemplace 123456 por su contraseña en cada comando.

## Notas de configuración

- La configuración basada en SMS es el método público mostrado para el LK109; algunos instaladores pueden preferir una herramienta de configuración si TK-Star o un distribuidor la provee.
- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles y su comportamiento; consulte la documentación del fabricante si un comando no funciona como se espera.
- Elija UDP o TCP según las opciones del dispositivo y las condiciones de la red; Plaspy acepta ambos, pero algunas redes o equipos pueden funcionar mejor con un transporte específico.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detecta automáticamente los protocolos de los rastreadores, por lo que el enfoque debe estar en la dirección de servidor y el APN correctos al configurar el equipo.
- Si utiliza el dominio del servidor en lugar de la IP, verifique que el dispositivo acepte nombres de dominio para el comando adminip o equivalente; el ejemplo público del LK109 usa la IP de Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el LK109 con Plaspy permite a las organizaciones centralizar los datos de rastreo para mejorar la visibilidad, el monitoreo operativo y el análisis histórico. Al configurar el APN, el servidor y el intervalo de reporte como se muestra, el LK109 puede enviar actualizaciones de ubicación consistentes a Plaspy para que los administradores de flotas supervisen movimientos, reciban alertas y revisen historiales dentro de una sola plataforma.

To learn more about Plaspy and how it can manage trackers like the LK109 visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance please verify details with the official TK-Star documentation at https://www.tk-star.com/.
