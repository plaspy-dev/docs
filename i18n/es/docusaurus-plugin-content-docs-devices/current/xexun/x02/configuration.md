---
slug: /xexun/x02/configuration
id: x02-configuration
sidebar_label: Configuration
title: Xexun - X02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Xexun X02 con ajustes de servidor Plaspy, comandos SMS y pasos prácticos para la integración
keywords:
  - Configuración Xexun X02
  - Instalación Xexun X02
  - Configuración servidor Xexun X02
  - Xexun X02 Plaspy
  - Configuración dispositivo Plaspy
  - Configuración rastreador GPS
  - Configuración rastreador vehicular
  - Comandos SMS Xexun
  - Configuración GPRS
  - Configuración seguimiento de flotas
---

# Xexun - Configuración X02

Esta página documenta el contexto público de configuración para usar el rastreador Xexun X02 con la plataforma Plaspy. Explica los ajustes de servidor Plaspy a los que debe apuntar el dispositivo, describe pasos prácticos de configuración incluyendo ejemplos de comandos SMS cuando están disponibles y aclara qué verificar antes de integrar el rastreador en Plaspy.

Plaspy utiliza un endpoint y puerto de servidor comunes para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. La configuración del fabricante puede variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos y el flujo de trabajo de ejemplo en esta página provienen de la guía pública de configuración del X02 y están pensados para ayudarle a preparar el dispositivo para una comunicación fiable con Plaspy.

## Resumen de la configuración

Configurar el X02 para Plaspy prepara el dispositivo para enviar datos GNSS y telemetría a la nube de Plaspy, de modo que la unidad aparezca en su cuenta Plaspy para seguimiento en tiempo real e historial. La configuración pública suele incluir establecer el APN del operador móvil, configurar el servidor y puerto GPRS, y asegurar que el intervalo de reporte cumpla sus necesidades de monitoreo.

- Apuntar el X02 al endpoint del servidor Plaspy para que los datos se enruten a su cuenta.
- Configurar el APN del dispositivo, y el usuario y contraseña del APN si el operador móvil lo requiere.
- Establecer la dirección y el puerto del servidor GPRS con los valores de Plaspy y seleccionar el transporte apropiado (UDP o TCP).
- Definir intervalos de reporte y opciones de buffering o retransmisión según sus necesidades operativas.
- Validar la conectividad y confirmar que el dispositivo aparece y reporta en Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port for device data

## Requisitos típicos antes de empezar

- Un dispositivo X02 cargado con batería suficiente para la configuración inicial y las pruebas.
- Una SIM celular válida con datos habilitados y la información APN correcta según el operador.
- Acceso al método de configuración que use el X02, como comandos SMS o software del proveedor.
- Conocimiento de la contraseña del dispositivo si se requiere para la configuración (los comandos de ejemplo abajo usan la contraseña por defecto 123456).
- Un lugar para probar la conectividad donde haya cobertura celular para que el dispositivo alcance d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Cómo se conecta este rastreador a Plaspy

El X02 transmite posiciones GNSS, soluciones asistidas y telemetría por el enlace celular del dispositivo hasta el endpoint y puerto del servidor Plaspy. Una vez configurado para usar el servidor Plaspy, el dispositivo envía actualizaciones periódicas e informes de eventos para que la unidad sea visible en Plaspy para seguimiento en tiempo real, alertas y reproducción de historial.

- Los informes del dispositivo (posición y telemetría) se envían a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Elija UDP o TCP como transporte si el dispositivo requiere selección explícita; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo entrante del rastreador y asocia la fuente con el tipo de dispositivo correcto.
- Eventos como salidas de geocerca, alertas de manipulación y batería baja se reenvían a Plaspy para notificaciones y reportes.
- Una configuración correcta asegura que el X02 aparezca en Plaspy y transmita según el intervalo de reporte configurado.

## Flujo de configuración común

1. Acceda al método oficial de configuración de Xexun para el X02, por ejemplo la interfaz de comandos SMS documentada o la herramienta del fabricante.
2. Actualice los ajustes APN del dispositivo con los datos de su operador para que pueda establecer una sesión GPRS.
3. Ingrese el endpoint del servidor Plaspy proporcionando d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del servidor del dispositivo.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el X02 requiere selección de transporte.
5. Aplique o guarde la configuración y, si el dispositivo usa comandos SMS, envíe los SMS necesarios para confirmar los ajustes.
6. Reinicie el dispositivo si las instrucciones del fabricante recomiendan un reinicio para aplicar la configuración de red.
7. Verifique que el dispositivo reporte a Plaspy comprobando la unidad en su cuenta Plaspy y confirmando las actualizaciones periódicas de ubicación.

## Comandos de configuración de ejemplo

El X02 admite configuración vía SMS. Los comandos públicos de ejemplo a continuación usan la contraseña por defecto del dispositivo 123456. Mantenga el orden cuando sea necesario restaurar fábrica o establecer el APN antes del servidor.

- Paso inicial opcional para restaurar ajustes de fábrica (solo si necesita resetear el dispositivo):
```
begin123456
```

- Establecer el APN del operador. Reemplace [apn] por la cadena APN de su operador:
```
apn123456 [apn]
```

- Establecer el usuario del APN si su operador lo requiere. Reemplace [apnu] por el usuario APN:
```
apnuser123456 [apnu]
```

- Establecer la contraseña del APN si es necesaria. Reemplace [apnp] por la contraseña APN:
```
apnpasswd123456 [apnp]
```

- Configurar el servidor GPRS con la IP y el puerto de Plaspy. Esto apunta el dispositivo a Plaspy:
```
adminip123456 54.85.159.138 8888
```

- Habilitar el modo GPRS en el dispositivo (si el firmware lo requiere para iniciar modo de datos):
```
gprsmode123456
```

- Establecer el intervalo de actualización a 60 segundos en el ejemplo mostrado (use el intervalo apropiado para sus necesidades):
```
t060s***n123456
```

Notas sobre los comandos anteriores:
- La contraseña de ejemplo 123456 es el valor por defecto en la muestra pública. Si la contraseña de su dispositivo fue cambiada, sustituya la contraseña correcta.
- Los marcadores de posición [apn], [apnu] y [apnp] deben reemplazarse por el APN del operador, el usuario APN y la contraseña APN respectivamente.
- Envíe estos comandos por SMS desde un número autorizado o mediante el método requerido por el firmware del X02 y las instrucciones del fabricante.
- Solo ejecute el comando de restauración de fábrica cuando realmente desee restablecer el dispositivo a sus valores por defecto.

## Notas de configuración

- La configuración por SMS es de uso común en el X02; siga las instrucciones del fabricante para el formato correcto de los SMS y los números de remitente autorizados.
- Las revisiones de firmware y las variantes de hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; verifique los formatos de comando con la documentación más reciente de Xexun.
- Elija UDP o TCP según la fiabilidad de la red y sus requisitos operativos; Plaspy acepta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Confirme los valores de APN, usuario y contraseña con su operador móvil; ajustes APN incorrectos impedirán la conectividad GPRS.
- Recuerde que todos los dispositivos reportados a Plaspy usan el mismo puerto del servidor, lo que facilita la incorporación de dispositivos de distintos modelos.

## Por qué usar Plaspy con esta configuración

Usar el X02 con Plaspy ofrece a las organizaciones visibilidad en tiempo real de la ubicación de vehículos y activos, reproducción de historial para el análisis de rutas y alertas basadas en eventos para flujos de trabajo de seguridad y operaciones. Cuando el X02 está configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888, Plaspy ingiere la ubicación y la telemetría automáticamente y las pone a disposición mediante mapas, alertas y reportes para apoyar la gestión de flotas y la respuesta a incidentes.

Learn more about Plaspy and how to onboard devices at https://www.plaspy.com. For the most current device specific commands, firmware notes, and installation guidance verify setup details and documentation with the manufacturer at https://www.xexun.com/ since methods and firmware behavior can change over time.
