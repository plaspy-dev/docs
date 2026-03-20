---
slug: /thingsys/ts_v7/configuration
id: ts_v7-configuration
sidebar_label: Configuration
title: ThingSys - TS-V7 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar ThingSys TS-V7 para Plaspy con ajustes de servidor, comandos SMS y guía práctica para rastreo vehicular fiable
keywords:
  - Configuración ThingSys TS-V7
  - Instalación ThingSys TS-V7
  - Configuración de servidor ThingSys TS-V7
  - Configuración TS-V7 Plaspy
  - Configuración software rastreo TS-V7
  - Configuración rastreador GPS ThingSys
  - Configuración plataforma rastreo vehicular
  - Configuración GPRS TS-V7
  - Comandos SMS TS-V7
  - Integración rastreador Plaspy
---

# ThingSys - TS-V7 Configuración

Esta página describe el contexto público de configuración para usar el ThingSys TS-V7 con Plaspy. Recopila los pasos prácticos y los comandos públicos que puede utilizar para apuntar el equipo a Plaspy y validar el reporte, de modo que el dispositivo aparezca y se actualice correctamente en la plataforma Plaspy.

Plaspy utiliza una configuración de servidor compartida entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TS-V7 también soporta configuración por SMS y ajustes GPRS en builds de firmware comunes; los comandos incluidos abajo son los comandos públicos estilo SMS que ThingSys publica para la configuración inicial y reporte por GPRS.

## Visión general de la configuración

El objetivo del proceso de configuración es preparar un TS-V7 para que pueda comunicarse de forma confiable con Plaspy y aparecer en la plataforma para monitoreo y eventos. Los pasos públicos de configuración suelen incluir establecer el APN del dispositivo, asignar un identificador de reporte y apuntar el equipo al endpoint y puerto del servidor de Plaspy. Para el TS-V7, ThingSys publica comandos estilo SMS que muchos instaladores usan para la puesta en marcha.

- Configure el APN del rastreador y, si corresponde, las credenciales del APN para que use datos móviles en los reportes GPRS.
- Asigne el ID del dispositivo o el número de reporte derivado del IMEI para que Plaspy identifique la unidad.
- Apunte el rastreador al endpoint y puerto del servidor Plaspy para que los datos se enruten a la plataforma.
- Defina el intervalo de actualización deseado y cambie el equipo al modo de reporte GPRS.
- Valide la conectividad y confirme que el dispositivo aparece y reporta en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

Estos valores son la configuración pública de Plaspy que debe usar al configurar el TS-V7 para que la unidad reporte al endpoint correcto.

## Requisitos habituales antes de la configuración

- Un equipo TS-V7 con alimentación y acceso a su número IMEI para identificación.
- Una tarjeta SIM activa con datos móviles habilitados y los ajustes APN correctos del operador.
- Una forma de enviar comandos SMS al dispositivo o acceso a la herramienta oficial de configuración de ThingSys si está disponible.
- Familiaridad básica con la contraseña del dispositivo y la sintaxis de configuración; los comandos públicos que aparecen abajo usan la contraseña por defecto 123456 salvo que se haya cambiado.
- Cobertura celular fiable en el lugar de instalación para el registro inicial en GPRS y el reporte posterior.

## Cómo se conecta este rastreador a Plaspy

El TS-V7 se configura para enviar su ubicación y datos de eventos al endpoint y puerto compartido de Plaspy. Una vez apuntado a Plaspy y puesto en modo GPRS, el rastreador envía actualizaciones periódicas de ubicación y mensajes de evento que la plataforma procesa y muestra en la interfaz de usuario.

- El dispositivo envía paquetes GPRS al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy acepta transporte por UDP o TCP y detectará automáticamente el protocolo del rastreador.
- Las posiciones periódicas y las alertas configuradas se reenvían a Plaspy para visibilidad y monitoreo.
- Plaspy usa un puerto compartido para todos los dispositivos, por lo que se aplica el mismo valor de puerto a los modelos compatibles.
- La configuración se considera exitosa cuando el dispositivo aparece y reporta en la plataforma Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración ThingSys para el TS-V7, normalmente comandos SMS o la herramienta del fabricante documentada por ThingSys.
2. Prepare el dispositivo anotando el IMEI y confirmando la contraseña del equipo (por defecto pública 123456 salvo que la haya cambiado).
3. Ingrese el endpoint del servidor Plaspy como d.plaspy.com o 54.85.159.138 en el campo o comando correspondiente.
4. Establezca el puerto en 8888 en la configuración del dispositivo.
5. Elija UDP o TCP si el firmware del equipo requiere seleccionar el transporte para reportes GPRS.
6. Aplique o guarde la configuración y ponga el dispositivo en modo de reporte GPRS/web.
7. Reinicie el equipo si el firmware del rastreador exige un reinicio para aplicar cambios de red.
8. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con las actualizaciones esperadas.

## Comandos de configuración de ejemplo

ThingSys publica comandos estilo SMS para el TS-V7. Los comandos siguientes son comandos públicos usados en flujos de configuración de ejemplo. La contraseña por defecto usada en estos ejemplos es 123456. Si usted cambió la contraseña con anterioridad, reemplace 123456 por la contraseña actual del equipo.

- Restauración opcional de fábrica inicial (usar solo cuando necesite resetear la configuración):
```text
begin123456
```

- Establecer el APN del operador (reemplace {{apn}} con el string APN del operador):
```text
apn123456 {{apn}}
```
Explicación: {{apn}} es un marcador para el APN de su proveedor de SIM, por ejemplo internet o el APN proporcionado por su operador.

- Establecer usuario y contraseña del APN si el operador los requiere (reemplace los marcadores según corresponda):
```text
user {{apnu}} {{apnp}}
```
Explicación: {{apnu}} y {{apnp}} son marcadores para el nombre de usuario y la contraseña del APN. Si su SIM no requiere credenciales, puede omitir este comando.

- Establecer el ID de reporte del dispositivo usando los últimos 11 dígitos del IMEI
```text
number< last 11 digits of IMEI >
```
Patrón de ejemplo: si su IMEI termina en 12345678901 entonces envíe:
```text
number12345678901
```
Explicación: El TS-V7 comúnmente requiere un identificador de reporte de 11 dígitos derivado del IMEI. Reemplace el marcador con los últimos 11 dígitos del IMEI de su equipo.

- Configurar el servidor GPRS para reportar a la IP y puerto de Plaspy (ejemplo público usando la IP):
```text
ip54.85.159.138port8888
```
Explicación: Este comando configura el servidor GPRS del TS-V7 usando la IP y puerto de Plaspy. Si su equipo acepta un dominio, puede ingresar d.plaspy.com donde el firmware o las herramientas lo permitan.

- Establecer el intervalo de actualización a 120 segundos:
```text
at120sum0
```
Explicación: Ajuste el valor numérico si requiere un intervalo de reporte diferente.

- Cambiar el dispositivo al modo de reporte GPRS/web (paso final para habilitar el envío de datos):
```text
web123456
```
Explicación: Este comando habilita el modo GPRS para que el rastreador comience a enviar datos al servidor configurado.

Siga el orden de comandos en la práctica y confirme que cada comando se ejecutó correctamente cuando el firmware del equipo proporcione acuses de recibo.

## Notas sobre la configuración

- La sintaxis exacta de los SMS y los comandos disponibles pueden variar según la versión de firmware y la revisión de hardware. Confirme los comandos con la documentación actual de ThingSys si tiene dudas.
- La provisión por SMS es un método común para la configuración del TS-V7; mantenga un registro de cualquier cambio de contraseña y de los identificadores de dispositivo utilizados.
- Elija UDP o TCP según su despliegue y la capacidad del equipo. Plaspy soporta ambos y detectará el protocolo automáticamente.
- Plaspy utiliza el mismo puerto para los rastreadores compatibles, por lo que configure el puerto 8888 al preparar el dispositivo.
- Si su equipo o firmware permite ingresar un dominio en lugar de una IP, puede usar d.plaspy.com; de lo contrario utilice la IP 54.85.159.138 mostrada en los comandos públicos.

## Por qué usar Plaspy con esta configuración

Usar el ThingSys TS-V7 con Plaspy ofrece una vía práctica para centralizar la visibilidad de vehículos, alertas y control operativo. Apuntar el TS-V7 a Plaspy y configurar los intervalos de actualización y alertas permite a los operadores de flota y administradores monitorear movimientos, recibir eventos y gestionar dispositivos desde una única plataforma.

To learn more about Plaspy and the full platform capabilities visit https://www.plaspy.com. For the most current device specific commands firmware notes and installation guidance verify the latest information on the manufacturer site https://www.thingsys.com/ as setup methods and firmware behavior can change over time.
