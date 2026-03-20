---
slug: /coban/gps109/configuration
id: gps109-configuration
sidebar_label: Configuration
title: Coban - GPS109 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Coban GPS109 y su compatibilidad con Plaspy, incluyendo ajustes de servidor, comandos SMS y APN
keywords:
  - Configuración Coban GPS109
  - Instalación Coban GPS109
  - Configuración servidor Coban GPS109
  - Configuración rastreador Plaspy
  - Configuración GPRS GPS109
  - Configuración de rastreo de vehículos
  - Guía de configuración rastreador GPS
  - Ajustes APN Coban GPS109
  - Comandos SMS GPS109
  - Configuración rastreador gestión de flotas
---

# Coban - Configuración del GPS109

Esta página reúne la información pública necesaria para usar el rastreador Coban GPS109 con Plaspy. Incluye los ajustes de servidor prácticos y ejemplos de comandos SMS que se suelen emplear para dejar el GPS109 listo para enviar ubicación y datos del equipo a la plataforma Plaspy. Use estos datos para alinear la configuración del dispositivo con los endpoints del servidor Plaspy y validar la conectividad antes de agregar la unidad a la flota.

Plaspy aplica ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GPS109 admite configuración por SMS y por GPRS; cuando aquí se muestran ejemplos, son comandos SMS de acceso público. Confirme siempre los detalles específicos del equipo con la documentación del fabricante cuando sea necesario.

## Resumen de la configuración

El proceso de configuración prepara al GPS109 para comunicarse de forma fiable con Plaspy y para enviar datos de ubicación y eventos a través de la red móvil. Para este rastreador, el trabajo típico incluye definir el APN y sus credenciales, apuntar el equipo al servidor de Plaspy, elegir el modo de transporte y confirmar los intervalos de reporte.

- Configure el APN del operador móvil y, si es necesario, el usuario y la contraseña APN para que el dispositivo pueda usar GPRS.
- Indique al equipo el endpoint y el puerto del servidor Plaspy para que los datos lleguen a la plataforma.
- Seleccione UDP o TCP en el dispositivo si el firmware requiere escoger el transporte.
- Ajuste el intervalo de reporte y el modo de rastreo según sus necesidades de monitoreo.
- Valide que el dispositivo sea visible en Plaspy después de guardar los ajustes y reiniciar la unidad.

## Ajustes del servidor Plaspy

- El dominio de servidor d.plaspy.com debe usarse cuando la configuración con DNS sea posible.
- La IP del servidor 54.85.159.138 es el endpoint de Plaspy accesible desde la red móvil.
- El puerto 8888 es el puerto de escucha de Plaspy y lo usan todos los dispositivos registrados en Plaspy.
- El transporte admite UDP o TCP; configure el dispositivo en UDP o TCP según lo requiera el firmware.
- Plaspy detecta automáticamente el protocolo del rastreador, de modo que la plataforma puede aceptar datos de dispositivos compatibles sin seleccionar el protocolo por cada unidad.

## Requisitos habituales antes de la configuración

- Un equipo GPS109 con batería cargada o alimentación estable.
- Una tarjeta SIM con datos activos o servicio GPRS y los ajustes APN correctos del operador móvil.
- Capacidad para enviar y recibir SMS desde el teléfono del instalador si va a usar comandos de configuración por SMS.
- Acceso al método oficial de configuración de Coban, ya sea comandos SMS o software del proveedor.
- Información básica: APN, usuario APN, contraseña APN y los ajustes del servidor Plaspy que aparecen más arriba.
- Un plan de prueba: una zona con cobertura GSM y una manera de validar que el dispositivo aparece en Plaspy.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GPS109 emplea la conexión GPRS del operador móvil para enviar mensajes de posición y datos del equipo a Plaspy. El dispositivo se apunta al endpoint y puerto de Plaspy para que la plataforma ingiera los reportes y los muestre en la interfaz de flotas.

- El rastreador se configura apuntando al servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
- Los datos se envían al puerto 8888 en el servidor Plaspy; Plaspy usa el mismo puerto para todos los dispositivos compatibles.
- El equipo puede usar UDP o TCP como transporte, según las opciones del firmware.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que una vez que llegan datos al puerto compartido la plataforma los procesa correctamente.
- Los intervalos de reporte y los modos de rastreo determinan con qué frecuencia llegan las actualizaciones de ubicación a Plaspy.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Coban o prepárese para enviar comandos SMS desde un teléfono autorizado.
2. Configure el APN del equipo y sus credenciales para que se conecte a la red GPRS del operador.
3. Ingrese el servidor de Plaspy usando d.plaspy.com o 54.85.159.138 como dirección del servidor GPRS.
4. Configure el puerto del servidor en 8888 en la configuración del dispositivo.
5. Seleccione UDP o TCP si el equipo requiere elegir modo de transporte.
6. Aplique o guarde la configuración en el rastreador y reinicie el dispositivo si el firmware lo exige.
7. Verifique que el dispositivo reporte a Plaspy y aparezca como activo en la plataforma.

## Ejemplos de comandos de configuración

El GPS109 admite configuración vía SMS. Los comandos siguientes son los comandos SMS públicos que se usan comúnmente para configurar el equipo. La contraseña por defecto que aparece en estos comandos es 123456. Mantenga los marcadores de posición tal como se muestran y sustitúyalos por su APN y credenciales reales.

- Restauración de fábrica (opcional, usar solo si se requiere para la configuración inicial):
```
begin123456
```

- Establecer zona horaria a UTC+0:
```
time zone123456 0
```

- Configurar el APN del operador (reemplazar [apn] por el APN del operador):
```
apn123456 [apn]
```

- Establecer usuario y contraseña APN (reemplazar [apnu] y [apnp] por las credenciales del operador):
```
up123456 [apnu] [apnp]
```

- Configurar el servidor GPRS a la IP y puerto de Plaspy:
```
adminip123456 54.85.159.138 8888
```

- Establecer intervalo de actualización (patrón de ejemplo proporcionado por el equipo; adapte según el firmware):
```
fix060s060s***n123456
```

- Cambiar a modo GPRS y seleccionar transporte (variantes de ejemplo para habilitar GPRS y elegir UDP o TCP según el firmware):
```
gprs123456,1,1
```
o, si el dispositivo acepta la forma corta:
```
gprs123456
```

- Comprobar configuración actual:
```
check123456
```

- Habilitar estado de sensor de combustible o reporte mejorado de sensores digitales (cambio de protocolo de ejemplo):
```
protocol123456 18
```

Notas sobre marcadores de posición y la contraseña:
- La contraseña SMS por defecto usada arriba es 123456. Si la ha cambiado, sustituya su contraseña de dispositivo en cada comando.
- [apn] es la cadena APN del operador móvil. [apnu] y [apnp] son el usuario y la contraseña APN cuando el operador los exige. No incluya las llaves cuando envíe el SMS real.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y las opciones disponibles; consulte el manual del dispositivo si un comando no funciona como se espera.
- El GPS109 admite configuración por SMS tal como se muestra; también pueden existir herramientas del proveedor o configuración por USB/serie según la revisión del modelo y el software del vendedor.
- Elija UDP o TCP según sus necesidades operativas; Plaspy acepta ambos y detecta automáticamente el protocolo entrante en el puerto 8888.
- Use el dominio d.plaspy.com cuando prefiera DNS, o la IP 54.85.159.138 cuando se necesite una dirección numérica.
- Verifique siempre los ajustes APN y asegúrese de que la SIM tenga habilitados datos/GPRS antes de realizar diagnósticos de conectividad con el servidor.

## Por qué usar Plaspy con esta configuración

Configurar el Coban GPS109 para que reporte a Plaspy ofrece a las organizaciones una vía sencilla para integrar un rastreador GPRS fiable en una plataforma centralizada de gestión de flotas. Con los ajustes de servidor compartidos por Plaspy y la detección automática de protocolos, el GPS109 puede prepararse para enviar datos de ubicación y eventos a Plaspy mediante flujos de configuración por APN y SMS conocidos.

Para obtener más información sobre Plaspy y cómo maneja el onboarding de dispositivos y la visibilidad de flotas visite https://www.plaspy.com. Para los comandos más recientes, notas de firmware y soporte del fabricante, verifique siempre los detalles actuales en el sitio oficial de Coban https://www.coban.net/.
