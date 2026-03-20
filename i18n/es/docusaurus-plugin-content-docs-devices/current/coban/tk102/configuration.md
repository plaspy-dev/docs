---
slug: /coban/tk102/configuration
id: tk102-configuration
sidebar_label: Configuration
title: Coban - TK102 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el Coban TK102 con los ajustes de servidor Plaspy y comandos SMS para conectar el rastreador al servicio
keywords:
  - Configuración Coban TK102
  - Configuración servidor Coban TK102
  - Configuración TK102 Plaspy
  - Configuración rastreador GPS Coban
  - Configuración GPRS TK102
  - Configuración SMS TK102
  - Configuración servidor rastreador GPS
  - Configuración plataforma rastreo vehicular
  - Rastreo de flotas TK102
  - Configuración TCP UDP rastreador
---

# Coban - Configuración del TK102

Esta página documenta el contexto público de configuración para usar el rastreador Coban TK102 con Plaspy. Se centra en los ajustes prácticos del servidor y en los comandos SMS que se usan habitualmente para preparar un TK102 para que reporte a Plaspy. El contenido se basa en comandos públicos de configuración del TK102 y muestra cómo apuntar el dispositivo al servidor Plaspy para que el rastreador quede visible en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. Cuando esté disponible, esta página incluye comandos SMS de uso público para dispositivos TK102; confirme siempre los cambios críticos con la documentación del fabricante.

## Resumen de la configuración

El objetivo al configurar un TK102 para Plaspy es preparar el dispositivo para que envíe mensajes de ubicación y estado por GPRS al endpoint de Plaspy, validar que el rastreador puede conectarse a través de la red móvil y asegurarse de que el dispositivo aparezca en la plataforma Plaspy para monitoreo e informes.

- Apuntar el TK102 al dominio o IP del servidor Plaspy para que los datos lleguen a Plaspy
- Configurar el APN y las credenciales del APN necesarias para que el dispositivo use GPRS
- Seleccionar el modo de transporte (UDP o TCP) y establecer el puerto compartido de Plaspy
- Verificar que el dispositivo está reportando usando el comando de verificación del TK102 o comprobando la presencia del dispositivo en Plaspy
- Opcionalmente ajustar el intervalo de reporte y opciones de protocolo para optimizar consumo de energía o datos

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos son los valores públicos del endpoint de Plaspy que deberá usar al configurar el TK102. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

## Requisitos típicos antes de la configuración

- Un dispositivo Coban TK102 con batería y encendido, instalado o accesible para la configuración
- Una SIM móvil con datos GPRS habilitados y la información del APN del operador
- Conocimiento de la contraseña por defecto del TK102 usada en comandos SMS (en ejemplos públicos suele ser 123456)
- Capacidad para enviar y recibir SMS hacia y desde el dispositivo para la configuración vía SMS
- Acceso a las instrucciones oficiales de Coban o al manual para su versión de firmware o revisión del modelo
- Un plan de pruebas para validar la conectividad después de la configuración, por ejemplo verificar el estado del dispositivo en Plaspy

## Cómo se conecta este rastreador a Plaspy

El TK102 se configura para enviar información de ubicación y estado al endpoint y puerto compartidos de Plaspy utilizando la conexión GPRS del dispositivo. Una vez dirigido al endpoint y transporte correctos, Plaspy recibe los datos del rastreador y los pone a disposición en la plataforma para monitoreo y alertas.

- El rastreador utiliza las credenciales APN para establecer una sesión de datos GPRS
- El dispositivo se configura para enviar datos a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte se establece en UDP o TCP según el comando TK102 utilizado y su preferencia
- Plaspy recibe la conexión entrante en el puerto compartido y detecta el protocolo automáticamente
- Una vez recibidos los datos, el dispositivo aparece en Plaspy para seguimiento en vivo e informes de eventos

## Flujo típico de configuración

1. Consulte el método oficial de configuración Coban para su unidad, normalmente mediante comandos SMS o la herramienta del fabricante según su firmware.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 según indique el método de configuración de su dispositivo.
3. Ajuste el puerto a 8888 en la configuración del equipo.
4. Elija UDP o TCP si el rastreador requiere selección de transporte y habilite el modo GPRS.
5. Configure el APN y el nombre de usuario y contraseña del APN si su operador lo requiere.
6. Aplique o guarde la configuración y reinicie el equipo si el dispositivo o las instrucciones lo solicitan.
7. Valide que el dispositivo reporta a Plaspy usando el comando de verificación del TK102 o comprobando que el dispositivo sea visible en Plaspy.

## Ejemplos de comandos de configuración

El TK102 suele soportar configuración vía SMS. A continuación se muestran comandos públicos de ejemplo en el orden en que suelen aplicarse. La contraseña por defecto del rastreador en estos ejemplos es 123456. Reemplace los marcadores y valores según su entorno.

- Reinicio de fábrica opcional (usar solo cuando sea necesario)
```
begin123456
```

- Ajustar la zona horaria a UTC 0
```
time zone123456 0
```

- Configurar el APN del operador
```
apn123456 {{apn}}
```
Nota: Reemplace {{apn}} por la cadena APN de su operador móvil.

- Configurar usuario y contraseña del APN
```
up123456 {{apnu}} {{apnp}}
```
Nota: Reemplace {{apnu}} y {{apnp}} por el usuario y la contraseña del APN si son requeridos. Dejar en blanco u omitir si el operador no los solicita.

- Establecer el servidor GPRS con la IP y puerto de Plaspy
```
adminip123456 54.85.159.138 8888
```
También puede usar el dominio de Plaspy cuando el dispositivo lo soporte en lugar de la IP numérica: d.plaspy.com (el soporte para nombres de dominio varía según el firmware).

- Ejemplo de comando para el intervalo de actualización de posición
```
fix060s060s***n123456
```
Este comando es un ejemplo público para configurar los intervalos de reporte; mantenga el formato original al aplicarlo.

- Cambiar al modo GPRS y seleccionar transporte
```
gprs123456,1,1
```
Este ejemplo puede establecer parámetros específicos de GPRS para UDP o TCP según el firmware. Alternativamente algunos dispositivos aceptan:
```
gprs123456
```

- Consultar la configuración actual del dispositivo
```
check123456
```

- Habilitar protocolo extendido o reporte de sensores (ejemplo para sensor digital o reporte de combustible)
```
protocol123456 18
```

Mantenga la contraseña por defecto 123456 en estos comandos de ejemplo a menos que ya haya cambiado la contraseña del dispositivo. Si cambia la contraseña, reemplace 123456 por la contraseña actual en cada comando.

## Notas sobre la configuración

- La configuración vía SMS es habitual en el TK102; confirme si su equipo acepta nombres de dominio o si requiere IP numérica para el comando adminip.
- Las versiones de firmware y las revisiones de hardware pueden modificar el formato de comandos y los parámetros disponibles. Verifique los comandos con el manual de su unidad.
- Cuando sea posible, use el dominio d.plaspy.com o la IP numérica 54.85.159.138 con el puerto 8888; Plaspy soporta UDP y TCP y detectará el protocolo del rastreador automáticamente.
- Si el dispositivo admite tanto SMS como una utilidad USB o software de configuración, elija el método recomendado por su instalador o según las notas de firmware.
- Considere cambiar la contraseña por defecto del rastreador después de la configuración inicial para asegurar el dispositivo y registre cualquier cambio para el mantenimiento futuro.

## Por qué usar Plaspy con esta configuración

Configurar un Coban TK102 para que reporte a Plaspy ofrece una vía sencilla para obtener visibilidad en tiempo real y monitoreo operativo de vehículos y activos. Usar el endpoint y puerto compartidos de Plaspy simplifica la configuración en múltiples dispositivos y permite que Plaspy gestione la detección de protocolos para integrar rápidamente los rastreadores en los flujos de trabajo de monitoreo.

Para obtener más información sobre Plaspy e integración de dispositivos compatibles, visite https://www.plaspy.com. Para los comandos específicos más actuales, notas de firmware y la documentación oficial del fabricante, verifique los detalles en https://www.coban.net/.
