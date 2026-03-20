---
slug: /xexun/tk_201_2/configuration
id: tk_201_2-configuration
sidebar_label: Configuration
title: Xexun - TK-201-2 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Xexun TK-201-2 con valores de servidor Plaspy y comandos SMS
keywords:
  - Configuración Xexun TK-201-2
  - configuración rastreador Xexun
  - configuración TK-201-2 Plaspy
  - configuración rastreador Plaspy
  - configuración servidor rastreador GPS
  - configuración rastreador para mascotas
  - ajustes APN Xexun
  - configuración rastreador GPRS
  - comandos SMS rastreador
  - integración plataforma de rastreo
---

# Xexun - TK-201-2 Configuración

Esta página recoge la información pública necesaria para configurar el rastreador Xexun TK-201-2 con Plaspy. Reúne los valores de servidor que utiliza Plaspy y los comandos SMS de uso público para que usted prepare el dispositivo y pueda enviar ubicaciones y alertas a la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que la información a continuación se centra en pasos prácticos y en los comandos SMS que suelen aplicarse a este modelo.

## Resumen de configuración

El objetivo de la configuración es asegurar que el TK-201-2 pueda conectarse a Plaspy, enviar actualizaciones periódicas de posición y reportar eventos para que el dispositivo aparezca y permanezca visible en la plataforma. En muchos casos deberá configurar los parámetros APN, apuntar el equipo al servidor de Plaspy, seleccionar el modo de transporte y confirmar los intervalos de reporte.

- Prepare el dispositivo para usar datos GPRS y/o para recibir comandos SMS de configuración.
- Proporcione el APN del operador y, si corresponde, las credenciales de usuario y contraseña del APN para que el rastreador acceda a datos móviles.
- Configure el dispositivo para enviar datos al endpoint y al puerto del servidor Plaspy.
- Ajuste los intervalos de reporte y los parámetros de movimiento o alertas para controlar la visibilidad en Plaspy.
- Valide la conectividad para confirmar que el rastreador aparece y reporta correctamente en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que puede aplicar el puerto 8888 en los modelos compatibles

## Requisitos habituales antes de la configuración

- Una unidad TK-201-2 con batería suficiente y acceso seguro al dispositivo para configurarlo.
- Una tarjeta SIM operativa con datos habilitados y capacidad SMS si se va a usar la configuración por SMS.
- El APN del operador y, si corresponde, el nombre de usuario y la contraseña del APN de la red móvil.
- Acceso a un teléfono o a un gateway SMS para enviar los comandos de configuración al rastreador.
- Documentación del fabricante o herramientas del proveedor como referencia en caso de que diferencias de firmware afecten los comandos.
- Una cuenta en Plaspy lista para recibir el dispositivo cuando comience a reportar.

## Cómo se conecta este rastreador a Plaspy

El TK-201-2 se configura para reportar posiciones y eventos al endpoint y puerto compartidos de Plaspy, de modo que el dispositivo pueda ser monitorizado desde la plataforma. Una vez que el equipo apunte a d.plaspy.com o a 54.85.159.138 y use el puerto 8888, Plaspy se encargará de detectar el protocolo y procesar los reportes.

- El rastreador envía actualizaciones periódicas de ubicación al endpoint de Plaspy en el puerto 8888.
- Las alertas por movimiento, exceso de velocidad y batería baja que reporte el equipo se vuelven visibles en Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar un protocolo en la plataforma.
- Usar el APN correcto y el modo GPRS permite que el rastreador abra una conexión de datos a d.plaspy.com o 54.85.159.138.
- La elección entre UDP o TCP en el dispositivo determina el transporte, pero Plaspy acepta ambos en el puerto compartido.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Xexun para el TK-201-2, normalmente mediante comandos SMS o las herramientas del proveedor.
2. Introduzca la dirección del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor GPRS.
3. Establezca el puerto en 8888 en la pantalla de configuración del rastreador o mediante el comando SMS.
4. Seleccione UDP o TCP en el dispositivo si es necesario elegir el tipo de transporte.
5. Configure el APN del operador y, si aplica, el usuario y la contraseña del APN mediante el método de configuración del fabricante.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los cambios surtan efecto.
7. Verifique que el dispositivo informe a Plaspy y aparezca en la plataforma con el intervalo de actualización y las alertas esperadas.

## Ejemplos de comandos de configuración

El TK-201-2 puede configurarse mediante comandos SMS. Los ejemplos siguientes usan la contraseña del dispositivo 123456, que es la contraseña por defecto que aparece en documentación pública. Mantenga el orden de los comandos durante la configuración inicial. Las marcas {{apn}}, {{apnu}} y {{apnp}} deben reemplazarse por su APN, usuario APN y contraseña APN del operador respectivamente.

- Reinicio inicial opcional o restauración de fábrica (usar solo si es necesario):
```text
begin123456
```

- Establecer el APN del operador (reemplazar {{apn}} por el APN de su operador móvil):
```text
apn123456 {{apn}}
```

- Establecer el nombre de usuario del APN si es necesario (reemplazar {{apnu}} por el usuario APN):
```text
apnuser123456 {{apnu}}
```

- Establecer la contraseña del APN si es necesaria (reemplazar {{apnp}} por la contraseña APN):
```text
apnpasswd123456 {{apnp}}
```

- Establecer el servidor GPRS con la IP y el puerto de Plaspy:
```text
adminip123456 54.85.159.138 8888
```

- Establecer el modo GPRS (usar el modo por defecto del equipo o el recomendado por el fabricante):
```text
gprsmode123456
```

- Establecer el intervalo de actualización a 60 segundos:
```text
t060s***n123456
```

Notas sobre los espacios reservados y la contraseña
- {{apn}} es el APN del operador de la red. Reemplácelo por la cadena exacta proporcionada por su operador de SIM.
- {{apnu}} y {{apnp}} son opcionales y solo necesarios si su operador exige autenticación del APN.
- 123456 en estos ejemplos es la contraseña del dispositivo usada en estos comandos públicos. Use la contraseña real de su equipo si la ha cambiado.

## Notas de configuración

- La configuración por SMS se muestra aquí porque esos comandos forman parte del contenido público de configuración para este modelo.
- Las versiones de firmware y las revisiones de hardware pueden cambiar el comportamiento de los comandos; consulte la documentación oficial de Xexun ante cualquier duda.
- Elegir TCP frente a UDP afecta la fiabilidad del transporte y la sobrecarga; configure el que su red y dispositivo soporten.
- Todos los dispositivos compatibles con Plaspy usan el puerto 8888, por lo que se aplica el mismo puerto al apuntar a Plaspy.
- Si realiza un reinicio de fábrica con begin123456, considérelo opcional y úselo solo para restaurar los valores por defecto.

## Por qué usar Plaspy con esta configuración

Usar el TK-201-2 con Plaspy ofrece una vía sencilla para lograr visibilidad continua de la ubicación y el reporte de eventos, útil para seguimiento de mascotas y casos más amplios de seguridad personal o de personal. Al apuntar el rastreador a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y configurar el APN y los intervalos de reporte, podrá integrar el dispositivo en Plaspy de forma rápida y confiar en que la plataforma detectará el protocolo del rastreador automáticamente.

Learn more about Plaspy at https://www.plaspy.com. Please verify the latest device specific configuration methods, firmware behavior, and manufacturer details with the official Xexun website https://www.xexun.com/ as vendor documentation and firmware can change over time.
