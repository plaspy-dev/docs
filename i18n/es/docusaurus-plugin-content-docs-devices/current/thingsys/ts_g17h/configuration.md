---
slug: /thingsys/ts_g17h/configuration
id: ts_g17h-configuration
sidebar_label: Configuration
title: ThingSys - TS-G17H Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para apuntar el rastreador ThingSys TS-G17H a Plaspy y verificar el envío de posiciones
keywords:
  - Configuración ThingSys TS-G17H
  - Instalación ThingSys TS-G17H
  - Configuración TS-G17H Plaspy
  - Configuración del servidor TS-G17H
  - Configuración rastreador GPS TS-G17H
  - Configuración rastreador Plaspy
  - Configuración rastreador GT06
  - Instalación rastreador GPS vehicular
  - Configuración seguimiento de flotas
  - Configuración APN servidor TS-G17H
---

# ThingSys - Configuración del TS-G17H

Esta página reúne la información pública y práctica necesaria para usar el rastreador ThingSys TS-G17H con Plaspy. Aquí encontrará los pasos habituales para apuntar un TS-G17H a Plaspy y validar que el dispositivo reporte ubicación y estado a la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TS-G17H admite configuración por SMS/comandos (los comandos públicos se muestran más adelante); las instrucciones que siguen se centran en los parámetros de servidor y conectividad necesarios para integrar el rastreador con Plaspy.

## Resumen de la configuración

Configurar el TS-G17H para Plaspy implica preparar el dispositivo para enviar reportes GPRS TCP/IP con el APN y el endpoint de servidor correctos, de modo que Plaspy pueda procesar sus mensajes en formato GT06. Normalmente se realiza mediante el método de configuración del fabricante (SMS o herramienta), y luego se valida confirmando que el dispositivo aparece y reporta en Plaspy.

- Apuntar el rastreador al endpoint y puerto del servidor de Plaspy para que los mensajes de posición y alarma lleguen a la plataforma.
- Configurar el APN del operador móvil y, si es necesario, las credenciales APN para que las sesiones GPRS funcionen.
- Seleccionar el transporte (UDP o TCP) si el equipo requiere una selección explícita y asegurarse de que el puerto esté configurado al puerto de Plaspy.
- Validar la conectividad y el envío de reportes hasta que el dispositivo aparezca en Plaspy con posición y eventos en tiempo real.
- Opcionalmente, usar un restablecimiento de fábrica o comandos de verificación al aprovisionar nuevos dispositivos o al solucionar problemas de conectividad.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Nota: Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de empezar

- Un TS-G17H cargado e instalado, con acceso a la ubicación de instalación y al cableado para alimentación y detección de ignición.
- Una tarjeta SIM funcional con datos móviles activados y el APN correcto del operador, además de crédito o un plan de datos si aplica.
- Acceso al método de configuración del fabricante para el TS-G17H (comandos SMS o software del proveedor) para ajustar APN y parámetros de servidor.
- La contraseña por defecto del dispositivo si es necesaria para comandos remotos (la contraseña pública se muestra en los ejemplos abajo).
- La posibilidad de leer respuestas del dispositivo por SMS o mediante una herramienta serial/configuración para confirmar valores cuando esté disponible.
- Una cuenta en Plaspy y permisos para añadir o verificar dispositivos, de modo que pueda confirmar que el rastreador aparece y reporta tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el TS-G17H utiliza su capacidad GPRS TCP/IP y el formato de mensajes GT06 para enviar reportes regulares de posición, estado y alarmas al endpoint y puerto compartidos de Plaspy. Plaspy procesa esos mensajes y los asocia al registro del dispositivo en la plataforma.

- El rastreador se configura para reportar al endpoint compartido d.plaspy.com (o la IP equivalente 54.85.159.138) en el puerto 8888.
- Los mensajes se envían vía GPRS usando TCP/IP o UDP según la configuración del dispositivo y las condiciones de red.
- Plaspy recibe actualizaciones regulares de posición y eventos de alarma que se muestran en mapas y flujos de alertas.
- Plaspy detecta automáticamente el protocolo del rastreador y relaciona los mensajes GT06 con el registro del dispositivo.
- Tras una configuración exitosa, el equipo queda visible en Plaspy para seguimiento en tiempo real, reproducción histórica y alertas.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software para el TS-G17H (comandos SMS o herramienta del proveedor).
2. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según lo acepte el rastreador.
3. Configure el puerto de destino a 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Seleccione UDP o TCP si el dispositivo requiere elección explícita del transporte.
5. Configure el APN del operador móvil y las credenciales APN (si son necesarias) para que el equipo pueda establecer una sesión GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo exige o después de un restablecimiento de fábrica.
7. Verifique que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo y las actualizaciones de posición en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El TS-G17H admite comandos vía SMS para configuración. A continuación se listan los comandos públicos más usados, en el orden que muestra la documentación del fabricante. La contraseña por defecto del dispositivo usada en estos ejemplos es 123456 — inclúyala cuando el comando requiera un prefijo de contraseña. Envíe estos comandos como mensajes SMS al número del dispositivo.

- Restablecimiento de fábrica inicial opcional (usar solo cuando sea necesario):
```text
FORMAT
```

- Configurar el APN del operador (reemplazar {{apn}} por el APN de su operador móvil):
```text
apn123456 {{apn}}
```

- Configurar el usuario APN (reemplazar {{apnu}} por el usuario APN si se requiere):
```text
apnuser123456 {{apnu}}
```

- Configurar la contraseña APN (reemplazar {{apnp}} por la contraseña APN si se requiere):
```text
apnpasswd123456 {{apnp}}
```

- Configurar el servidor GPRS a la IP y puerto de Plaspy (este comando usa la forma IP y el puerto 8888):
```text
ip54.85.159.138 8888
```

- Comando para comprobar los ajustes actuales (verificación):
```text
CXZT
```

Notas sobre los marcadores:
- {{apn}} — el APN de su operador móvil (por ejemplo: internet, web, etc.); requerido para sesiones de datos.
- {{apnu}} — nombre de usuario del APN si el operador lo solicita; deje vacío u omita si no se usa.
- {{apnp}} — contraseña del APN si el operador la solicita; deje vacío si no se usa.
- El prefijo numérico de contraseña 123456 en los comandos SMS anteriores es la contraseña por defecto del dispositivo usada en los ejemplos del fabricante.

## Observaciones de configuración

- La provisión por SMS está soportada para el TS-G17H; utilice el IMEI del dispositivo o el número de teléfono asignado para enviar los comandos SMS según se describe.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos SMS o el orden requerido; verifique la sintaxis en el manual del dispositivo para su versión de firmware.
- Cuando un equipo soporta TCP y UDP, pruebe ambos transportes si las condiciones de red o el comportamiento NAT del operador afectan la conectividad.
- El comando de servidor de ejemplo usa la forma IP de Plaspy; algunos rastreadores también aceptan el dominio d.plaspy.com — use la forma que acepte el dispositivo.
- Use el comando de verificación (CXZT) o las respuestas del dispositivo para confirmar los valores de APN y servidor después de la configuración.

## Por qué usar Plaspy con esta configuración

Usar el TS-G17H con Plaspy ofrece a las organizaciones visibilidad sencilla y confiable de la ubicación del vehículo, estado de ignición y eventos de alarma. Apuntar el dispositivo a los ajustes de servidor compartidos de Plaspy y confirmar la conectividad GPRS permite seguimiento en tiempo real, reproducción histórica y flujos de alertas que apoyan la supervisión de flotas y operaciones básicas de antirobo.

Más información sobre Plaspy en el sitio principal https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento de firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que conviene verificar las instrucciones de instalación más recientes en el sitio oficial de ThingSys en https://www.thingsys.com/.
