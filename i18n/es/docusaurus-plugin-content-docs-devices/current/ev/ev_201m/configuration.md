---
slug: /ev/ev_201m/configuration
id: ev_201m-configuration
sidebar_label: Configuration
title: EV - EV-201M Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EV-201M con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - configuración EV EV-201M
  - instalación EV EV-201M
  - EV EV-201M Plaspy
  - configuración servidor EV EV-201M
  - configuración rastreador EV
  - configuración rastreador para mascotas Plaspy
  - ajustes servidor GPS rastreador
  - instalación LTE-M NB IoT rastreador
  - comandos SMS EV-201M
  - integración plataforma rastreador
---

# EV - Configuración EV-201M

Esta página documenta el contexto público de configuración para usar el rastreador EV-201M con la plataforma Plaspy. Reúne los ajustes del servidor Plaspy que necesitará y proporciona instrucciones prácticas del flujo público de configuración del EV-201M, incluyendo ejemplos de comandos SMS comúnmente utilizados con este modelo.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el dispositivo apunta al endpoint de Plaspy. Los pasos exactos en el lado del fabricante para cambiar servidor, APN o opciones de transporte pueden variar según la versión de firmware, la revisión de hardware, las herramientas del instalador y las variantes regionales del dispositivo, por lo que siga la guía del fabricante EV cuando esté disponible.

## Resumen de configuración

El objetivo de la configuración del EV-201M para Plaspy es preparar el rastreador para enviar posiciones GNSS y telemetría al endpoint de Plaspy, de modo que el dispositivo aparezca y reporte correctamente en la plataforma. Esto implica ajustar la zona horaria o el reloj del dispositivo, configurar el APN del operador para datos móviles y SMS, y asegurarse de que la configuración del servidor y el transporte apunten a Plaspy.

- Ajustar la zona horaria o el reloj del dispositivo para que las marcas de tiempo coincidan con los paneles de Plaspy.
- Configurar el APN del operador (y opcionalmente usuario y contraseña APN) para habilitar datos móviles.
- Apuntar el rastreador al endpoint y puerto del servidor Plaspy para que los reportes lleguen a la plataforma.
- Seleccionar el transporte (UDP o TCP) si el dispositivo requiere una elección antes de enviar.
- Verificar que el dispositivo reporte a Plaspy y sea visible en el mapa y los paneles de telemetría.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos antes de la configuración

- Un dispositivo EV-201M cargado o alimentado y listo para configuración.
- Una tarjeta SIM provisionada para LTE‑M o NB‑IoT con datos y SMS según lo requiera el dispositivo y el operador local.
- Acceso al método de configuración del fabricante EV, como configuración por SMS o software oficial de configuración.
- La contraseña por defecto del dispositivo si va a usar configuración por SMS es 123456 (tal como se muestra en los comandos públicos).
- Conocer el APN del operador y, si aplica, el usuario y la contraseña APN.
- Datos de contacto del fabricante o vendedor en caso de que funciones como el cambio de servidor requieran activación por parte del fabricante.

## Cómo se conecta este rastreador a Plaspy

El EV-201M envía posiciones GNSS y telemetría del dispositivo a través de la red celular (LTE‑M o NB) al servicio en la nube de Plaspy. Una vez que el rastreador está configurado con el endpoint y puerto de Plaspy, Plaspy recibe reportes periódicos de posición y mensajes de eventos para permitir la monitorización en tiempo real.

- El dispositivo envía posiciones GNSS y telemetría por LTE‑M o NB al endpoint de Plaspy.
- Los reportes se envían a d.plaspy.com o a la IP del servidor Plaspy y llegan al puerto 8888.
- El transporte puede ser UDP o TCP según el firmware del dispositivo y la selección de configuración.
- Plaspy detecta automáticamente el protocolo del rastreador para que el dispositivo sea reconocido sin necesidad de seleccionar manualmente el protocolo en la plataforma.
- Una vez reportando, Plaspy muestra la ubicación en vivo, trayectos históricos y alertas del dispositivo.

## Flujo común de configuración

1. Acceda al método oficial de configuración del fabricante EV o al software correspondiente. Para muchas unidades EV-201M esto es mediante SMS o herramientas del proveedor; siga la documentación oficial de EV.
2. Configure la zona horaria o el reloj del dispositivo para que las marcas de tiempo coincidan con lo que espera ver en su cuenta Plaspy.
3. Ingrese la información del APN del operador usando el comando SMS del fabricante o el software, sustituyendo los valores de ejemplo por su APN, usuario y contraseña si aplica.
4. Ingrese d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en el campo de servidor en la configuración del dispositivo.
5. Establezca el puerto 8888 para la configuración del servidor del rastreador; Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles.
6. Si el dispositivo requiere elegir un transporte, seleccione UDP o TCP para la comunicación en el puerto 8888.
7. Aplique o guarde la configuración, reinicie el dispositivo si el fabricante lo requiere y confirme que el dispositivo está reportando a Plaspy.

## Ejemplos de comandos de configuración

El fabricante EV publica comandos SMS para una configuración básica. A continuación se muestran los ejemplos de comandos SMS tal como se publican para el EV-201M. La contraseña por defecto del dispositivo que aparece en estos ejemplos es 123456.

- Ajustar la zona horaria a UTC 0
```text
123456L+00
```

- Establecer el APN del operador. Reemplace {{apn}} por el APN de su operador. Si su APN requiere usuario y contraseña, incluya {{apnu}} y {{apnp}} según corresponda.
```text
123456S1,{{apn}}
```
O con usuario y contraseña del APN:
```text
123456S1,{{apn}},{{apnu}},{{apnp}}
```
(Placeholders: {{apn}} es obligatorio para datos. {{apnu}} y {{apnp}} son opcionales y solo se usan si su operador los requiere.)

- Establecer el servidor del dispositivo. El ejemplo publicado usa la IP del servidor Plaspy y el puerto. Tenga en cuenta que la documentación de EV indica que puede necesitar contactar al fabricante para habilitar la opción de cambiar el servidor antes de que este comando sea aceptado.
```text
123456I1,54.85.159.138,8888
```

Notas importantes sobre los comandos anteriores:
- La contraseña SMS 123456 es la que aparece por defecto en los ejemplos públicos de configuración. Si la contraseña de su dispositivo fue cambiada, use la contraseña actual.
- El comando de servidor contiene la IP de ejemplo de Plaspy. También puede usar el dominio d.plaspy.com en las herramientas del fabricante si es compatible, aunque el ejemplo publicado usa la IP.
- Contacte al fabricante o al vendedor si el dispositivo rechaza los comandos de cambio de servidor; algunas versiones de firmware o ajustes de fábrica requieren habilitación por parte del proveedor.

## Notas de configuración

- La configuración por SMS está documentada públicamente para EV-201M, pero pueden existir herramientas del fabricante o utilidades de escritorio; use la guía oficial de EV para su unidad.
- Las diferencias de firmware o revisiones de hardware pueden cambiar la sintaxis exacta de los comandos o las funciones disponibles; verifique los comandos con la documentación del firmware de su unidad EV.
- Elegir UDP frente a TCP es una opción del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente cuando los reportes llegan al servidor en el puerto 8888.
- Los marcadores {{apn}}, {{apnu}} y {{apnp}} deben reemplazarse por los valores de su operador al enviar comandos SMS; deje usuario o contraseña fuera si no son requeridos.
- Algunas unidades EV-201M requieren que el proveedor habilite la capacidad de cambiar la dirección del servidor; contacte al fabricante si no puede establecer el servidor vía SMS.

## Por qué usar Plaspy con esta configuración

Usar el EV-201M con Plaspy centraliza la ubicación, la telemetría y el reporte de eventos para que propietarios y operadores puedan ver posiciones en tiempo real, historial y alertas en un solo lugar. La detección automática de protocolos de Plaspy y el uso consistente del puerto 8888 simplifican la integración en flotas mixtas, mientras que el EV-201M ofrece las funciones de rastreo necesarias para reportes frecuentes y datos de actividad.

Para saber más sobre cómo Plaspy funciona con dispositivos como el EV-201M, visite https://www.plaspy.com. Las especificaciones del fabricante y los pasos de configuración pueden cambiar con el tiempo; verifique los detalles más recientes de instalación y el comportamiento del firmware del EV-201M en el sitio oficial de EV http://www.eviewltd.com/ antes del despliegue final.
