---
slug: /jointech/gp_6000/configuration
id: gp_6000-configuration
sidebar_label: Configuration
title: Jointech - GP 6000 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el tracker Jointech GP 6000 en Plaspy con ajustes de servidor comandos SMS y flujo práctico
keywords:
  - configuración Jointech GP 6000
  - guía de instalación GP 6000
  - configuración GP 6000 en Plaspy
  - configuración rastreador GPS Jointech
  - configuración de servidor GP 6000
  - configuración rastreo vehicular
  - configuración SMS rastreador GPS
  - configuración GPRS del tracker
  - integración del tracker con Plaspy
  - configuración de plataforma GPS
---

# Jointech - Configuración del GP 6000

Esta página describe el contexto de configuración pública para usar el Jointech GP 6000 con la plataforma Plaspy. Se enfoca en los ajustes prácticos de servidor, los requisitos comunes y los comandos SMS públicos que apuntan el rastreador a Plaspy para que el dispositivo pueda enviar ubicaciones y eventos a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando aplica, esta página incluye ejemplos de comandos SMS del GP 6000 publicados para configurar el servidor GPRS y los valores de APN.

## Resumen de configuración

El objetivo al configurar un GP 6000 para Plaspy es preparar el equipo para enviar telemetría al endpoint de Plaspy, validar la conectividad y confirmar que el dispositivo aparece y reporta correctamente en la plataforma.

- Configurar los parámetros de servidor para que el tracker envíe datos a Plaspy.
- Establecer o verificar el APN y las credenciales de APN necesarias para datos móviles.
- Seleccionar el transporte (UDP o TCP) y configurar el puerto estándar de Plaspy.
- Usar SMS del tracker o la herramienta del fabricante para aplicar los ajustes de servidor y APN.
- Verificar que el dispositivo esté reportando a Plaspy y sea visible en la plataforma.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del tracker y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un dispositivo Jointech GP 6000 con alimentación y acceso, con SMS y GPRS habilitados.
- Una tarjeta SIM válida instalada con datos móviles y el APN correcto del operador.
- Acceso a un número autorizado para enviar comandos SMS de configuración o acceso a la herramienta de configuración del fabricante.
- El ID del dispositivo (Tracker ID) que exige la sintaxis de comandos SMS del GP 6000.
- Conocimiento básico de si el dispositivo debe usar UDP o TCP según las necesidades de la instalación.
- Capacidad para verificar conexiones salientes en la red o confirmar el reporte del dispositivo en Plaspy tras la configuración.

## Cómo se conecta este tracker a Plaspy

Una vez configurado, el GP 6000 envía datos de ubicación y eventos mediante GPRS usando TCP o UDP al endpoint y puerto compartidos de Plaspy. Plaspy reconoce automáticamente el protocolo del tracker para que los dispositivos aparezcan correctamente en la plataforma sin asignaciones de puerto únicas.

- El tracker se configura para apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- La telemetría se transmite por GPRS usando el protocolo de transporte seleccionado UDP o TCP.
- Plaspy detecta automáticamente el protocolo del tracker y procesa los mensajes entrantes.
- Es necesario configurar correctamente el APN y, si aplica, las credenciales de APN para que el dispositivo utilice datos móviles.
- Tras una configuración exitosa, el dispositivo se vuelve visible y reporta posiciones y eventos en tiempo real en Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Jointech para su GP 6000, ya sea por comandos SMS o mediante la herramienta de PC del fabricante, según el manual del dispositivo.
2. Ingrese el dominio o la IP del servidor de Plaspy especificando d.plaspy.com o 54.85.159.138 en el ajuste de servidor.
3. Configure el puerto del servidor en 8888, que es el que Plaspy utiliza para todos los dispositivos.
4. Seleccione UDP o TCP si el tracker requiere una selección explícita del transporte.
5. Configure el APN del dispositivo y el usuario y contraseña del APN si su operador móvil los exige.
6. Aplique o guarde la configuración en el dispositivo y reinicie el tracker si el procedimiento lo requiere.
7. Verifique que el GP 6000 reporte a Plaspy y que los mensajes de posición y eventos aparezcan en la plataforma.

## Comandos de ejemplo para la configuración

El GP 6000 admite configuración por SMS. A continuación están los comandos SMS públicos usados para establecer el servidor GPRS y los valores de APN. Reemplace los marcadores con su ID de dispositivo y los valores del operador.

Primero, introduzca el ID del dispositivo (Tracker ID) requerido por estos comandos como identificador principal.

1) Establecer servidor GPRS y APN
```
({{trackerID}},2,S02,129,1,54.85.159.138,8888,{{apn}})
```
- Este comando SMS configura la IP del servidor, el puerto y el APN.
- Reemplace {{trackerID}} por su ID de tracker y {{apn}} por el APN de su operador móvil.
- Si su herramienta de instalación acepta el dominio en lugar de la IP, puede usar d.plaspy.com cuando el firmware del tracker lo soporte.

2) Establecer usuario y contraseña del APN (opcional)
```
({{trackerID}},2,S24,129,1,{{apnu}},{{apnp}})
```
- Este comando SMS establece el usuario de APN ({{apnu}}) y la contraseña de APN ({{apnp}}) si su operador los requiere.
- Si no son necesarias credenciales de APN, puede omitir este comando.

Notas sobre los marcadores:
- {{trackerID}} es el ID único del dispositivo o identificador que requiere la sintaxis SMS del GP 6000.
- {{apn}} es el APN de datos móviles para su tarjeta SIM.
- {{apnu}} y {{apnp}} son valores opcionales de usuario y contraseña del APN.

## Observaciones sobre la configuración

- La configuración del GP 6000 puede realizarse por SMS como se muestra arriba o mediante la herramienta oficial de PC de Jointech; siga el método que coincida con su firmware y la práctica local de instalación.
- La elección del transporte (UDP vs TCP) puede afectar la confiabilidad y el paso por firewalls; seleccione según su red y necesidades operativas.
- Las revisiones de firmware y las variantes de hardware pueden cambiar la sintaxis SMS soportada o el comportamiento del campo de servidor; confirme los formatos de comando con la documentación actual de Jointech.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del tracker, por lo que es importante mantener una configuración de puerto coherente.
- Mantenga un registro de los comandos SMS enviados y verifique el reporte del dispositivo en Plaspy después de la configuración.

## Por qué usar Plaspy con esta configuración

Configurar el Jointech GP 6000 para que reporte a Plaspy ofrece visibilidad centralizada y monitoreo operativo de vehículos y activos. Con el servidor y el APN ajustados correctamente, el GP 6000 puede transmitir ubicación y eventos a Plaspy para que los administradores de flota y operadores sigan movimientos, reciban alertas y analicen recorridos dentro de la plataforma.

Para saber más sobre Plaspy y las capacidades completas de la plataforma visite https://www.plaspy.com. Para los formatos de comando específicos, notas de firmware y guías de instalación más recientes, consulte la documentación de Jointech en https://www.jointcontrols.com/ ya que las especificaciones y procedimientos del fabricante pueden cambiar con el tiempo.
