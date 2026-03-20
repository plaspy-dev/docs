---
slug: /xexun/xt008/configuration
id: xt008-configuration
sidebar_label: Configuration
title: Xexun - XT008 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Xexun XT008 con Plaspy usando servidor compartido y ejemplos de comandos SMS
keywords:
  - configuración Xexun XT008
  - instalación Xexun XT008
  - configuración XT008 Plaspy
  - ajustes de servidor XT008
  - configuración rastreador GPS Xexun
  - comandos SMS XT008
  - rastreo de vehículos XT008
  - configuración APN XT008
  - servidor GPRS XT008
  - configuración rastreador Plaspy
---

# Xexun - Configuración del XT008

Esta página reúne la información pública y práctica necesaria para configurar el rastreador GPS Xexun XT008 y que funcione con Plaspy. Aquí encontrará los pasos y comandos públicos típicos utilizados para apuntar el dispositivo a Plaspy, de modo que envíe posiciones y estados a la plataforma. Cuando existen comandos del fabricante disponibles, se muestran como ejemplos en la sección Comandos de configuración de ejemplo.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El XT008 admite comandos de configuración por SMS y ajustes de servidor GPRS documentados públicamente, por lo que esta guía muestra cómo se usan esos comandos con los ajustes del servidor de Plaspy.

## Resumen de la configuración

Este proceso prepara el XT008 para comunicarse con Plaspy configurando el APN del operador, el endpoint del servidor GPRS de Plaspy, el transporte y el intervalo de reportes. El objetivo es garantizar la entrega fiable de datos para que el dispositivo aparezca en Plaspy y reporte la telemetría esperada.

- Configure el APN del operador y las credenciales APN opcionales para que el rastreador use datos móviles.
- Apunte el servidor GPRS del dispositivo a Plaspy usando la dirección y el puerto publicados.
- Seleccione UDP o TCP si el equipo requiere una elección explícita del transporte.
- Establezca el intervalo de reporte del dispositivo según sus necesidades de monitoreo en Plaspy.
- Valide que el rastreador esté reportando a Plaspy y sea visible en la plataforma.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el XT008:

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles e intentará detectar automáticamente el protocolo correcto cuando el rastreador se conecte.

## Requisitos previos comunes antes de la configuración

- Un XT008 alimentado y accesible con posibilidad de enviarle SMS a su número de configuración o acceso a la herramienta de configuración del fabricante.
- Una tarjeta SIM activa con datos y capaz de enviar y recibir SMS si va a configurar el dispositivo por SMS.
- La contraseña por defecto del dispositivo o la contraseña de administrador configurada para la autenticación de comandos; el ejemplo público usa 123456 como contraseña por defecto.
- Datos del APN del operador, incluyendo el nombre del APN y el usuario y contraseña APN si son requeridos.
- Cobertura básica de red móvil para GPRS para que el dispositivo pueda alcanzar Plaspy.
- Acceso a la documentación oficial del fabricante o a la herramienta del instalador como referencia durante la configuración.

## Cómo se conecta este rastreador a Plaspy

El XT008 se configura para enviar datos de ubicación y estado al endpoint y puerto compartidos de Plaspy. Una vez que el rastreador tiene los ajustes APN correctos y el servidor Plaspy configurado, enviará actualizaciones periódicas que Plaspy procesa y muestra.

- El rastreador envía tráfico GPRS al endpoint de Plaspy configurado usando la IP o el dominio del servidor y el puerto compartido.
- El transporte puede ser UDP o TCP según las opciones del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Las actualizaciones periódicas de ubicación se entregan según el intervalo de reporte configurado.
- Plaspy recibe y procesa los datos entrantes para que el dispositivo sea visible en la plataforma y pueda monitorearse y recibir alertas.
- La configuración y las pruebas del servidor son los pasos principales para asegurar que el dispositivo reporte correctamente a Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o a la lista de comandos SMS de Xexun o de su instalador.
2. Confirme el APN del operador y prepare el usuario y la contraseña APN si la SIM los requiere.
3. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes del dispositivo.
4. Configure el puerto del dispositivo en 8888, que es el puerto que Plaspy utiliza para todos los equipos.
5. Elija UDP o TCP si el XT008 requiere una selección explícita del transporte.
6. Aplique o guarde la configuración y reinicie el rastreador si el dispositivo necesita un reboot para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy y aparezca como un rastreador activo en la plataforma.

## Comandos de configuración de ejemplo

La configuración pública del XT008 puede realizarse mediante comandos SMS. Los comandos de ejemplo a continuación usan la contraseña por defecto del dispositivo 123456. Los marcadores de posición como [apn], [apnu] y [apnp] deben reemplazarse por su APN de operador, usuario APN y contraseña APN respectivamente.

- Comando opcional de restauración de fábrica inicial (usar solo si necesita restablecer ajustes):
```text
begin123456
```

- Configurar el APN del operador:
```text
apn123456 [apn]
```

- Configurar el usuario APN (si su operador lo requiere):
```text
apnuser123456 [apnu]
```

- Configurar la contraseña APN (si su operador lo requiere):
```text
apnpasswd123456 [apnp]
```

- Establecer el servidor GPRS y el puerto a Plaspy (el ejemplo público usa la IP y el puerto):
```text
adminip123456 54.85.159.138 8888
```

- Configurar el modo GPRS (comando de modo específico según lo publicado por el dispositivo):
```text
gprsmode123456
```

- Establecer el intervalo de actualización del dispositivo a 60 segundos (formato de ejemplo mostrado en comandos públicos):
```text
t060s***n123456
```

Notas sobre estos comandos:
- La contraseña por defecto 123456 se incluye en los ejemplos y debe modificarse según sus prácticas de seguridad si el dispositivo lo permite.
- Si el firmware de su dispositivo acepta un nombre de dominio en el comando de servidor, puede sustituir d.plaspy.com por la IP; consulte la documentación de Xexun o pruebe con un único comando antes de implementarlo a gran escala.
- Reemplace [apn], [apnu] y [apnp] por los valores de su operador móvil. Estos marcadores se conservan deliberadamente en los comandos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos o la disponibilidad de funciones de configuración por SMS; siempre verifique los comandos con la documentación actual de Xexun.
- La configuración por SMS es común para el XT008, pero también pueden existir herramientas del fabricante o instaladores USB para configuración masiva u offline.
- Elija UDP o TCP según las necesidades de su instalación y las opciones del firmware; Plaspy acepta ambos y detectará el protocolo desde las conexiones entrantes.
- Asegúrese de que la configuración APN coincida con el operador móvil de la SIM para que el GPRS funcione correctamente.
- Mantenga las contraseñas del dispositivo seguras y documente cualquier cambio para evitar perder el acceso de configuración.

## Por qué usar Plaspy con esta configuración

Configurar el Xexun XT008 para que reporte a Plaspy proporciona a las organizaciones visibilidad confiable sobre el movimiento de activos y vehículos usando una plataforma probada. Con el endpoint y el puerto de Plaspy establecidos en el dispositivo, el rastreador puede entregar actualizaciones por intervalo y alertas que respaldan el monitoreo operativo, las geovallas y la revisión de eventos.

Para saber más sobre Plaspy y cómo la plataforma puede gestionar rastreadores como el Xexun XT008 visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y orientación del fabricante, verifique la información en el sitio oficial de Xexun https://www.xexun.com/ ya que las especificaciones del proveedor y los métodos de configuración pueden cambiar con el tiempo.
