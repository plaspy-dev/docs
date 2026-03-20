---
slug: /noran/nr200/configuration
id: nr200-configuration
sidebar_label: Configuration
title: Noran - NR200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía paso a paso para configurar el Noran NR200 con Plaspy, incluye ajustes de servidor, comandos SMS y verificación
keywords:
  - Configuración Noran NR200
  - Configuración NR200 Plaspy
  - Configuración rastreador GPS Noran
  - Configuración de servidor NR200
  - Integración con Plaspy
  - Comandos SMS rastreador GPS
  - Configuración de rastreo de vehículos
  - Ajustes de servidor GPRS
  - Configuración seguimiento de flotas
  - Configuración APN NR200
---

# Noran - Configuración NR200

Esta página explica el contexto y los pasos públicos necesarios para usar el rastreador GPS magnético inalámbrico Noran NR200 con la plataforma Plaspy. Aquí encontrará los ajustes de servidor prácticos, ejemplos de comandos SMS y las acciones habituales para apuntar un equipo NR200 a Plaspy y permitir que reporte ubicación y telemetría a su cuenta.

Plaspy utiliza valores de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El NR200 admite métodos de configuración por SMS y por GPRS según la documentación pública; más abajo se incluyen comandos SMS de ejemplo y la contraseña por defecto del dispositivo para su conveniencia.

## Resumen de la configuración

Configurar el NR200 para Plaspy prepara el dispositivo para enviar posición y telemetría de forma fiable al endpoint de ingestión de Plaspy y le permite validar que el rastreador aparece en su panel. El objetivo es definir el APN del operador, apuntar el dispositivo al servidor de Plaspy, habilitar el modo GPRS si es necesario y confirmar que el equipo reporta correctamente.

- Definir el APN del operador para que el dispositivo pueda establecer conexión de datos y usar GPRS.
- Configurar el dispositivo para que reporte al endpoint y puerto de Plaspy.
- Activar el modo de reporte por GPRS en el rastreador y guardar la configuración.
- Verificar la identidad del dispositivo y los ajustes actuales con el comando de verificación del fabricante.
- Confirmar que el dispositivo comienza a reportar a Plaspy y que es visible en la plataforma.

## Valores del servidor Plaspy

Use los siguientes valores públicos de servidor de Plaspy al configurar el NR200. Plaspy emplea el mismo puerto para todos los dispositivos soportados y detecta el protocolo del rastreador automáticamente.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP
- Detección automática de protocolo en Plaspy

## Requisitos típicos antes de comenzar

- Un NR200 con batería cargada y una tarjeta SIM activa que tenga datos habilitados y el APN correcto.
- Acceso al método de configuración del fabricante, ya sea por comandos SMS o por software del proveedor.
- Un teléfono o gateway SMS capaz de enviar mensajes de configuración al dispositivo si usa SMS.
- La contraseña del dispositivo si es requerida para comandos SMS (el ejemplo público usa 000000 como se muestra abajo).
- Conocimientos básicos del APN que utiliza el operador de la SIM instalada.

## Cómo se conecta este rastreador a Plaspy

El NR200 envía ubicación y telemetría a través de redes celulares y puede configurarse para reportar al endpoint y puerto compartidos de Plaspy. Una vez configurado, Plaspy ingiere los mensajes del dispositivo y los transforma en ubicación en tiempo real, alertas e historial para los operadores.

- Reporta posición y telemetría a d.plaspy.com (o la IP equivalente) en el puerto 8888.
- Puede usar UDP o TCP según la selección del dispositivo; Plaspy detectará el protocolo automáticamente.
- El estado y la configuración del equipo pueden verificarse enviando el comando de estado del fabricante al NR200 por SMS.
- Después de una conexión GPRS exitosa, el dispositivo comenzará a enviar actualizaciones regulares de ubicación a Plaspy para su visualización y alertas.

## Flujo habitual de configuración

1. Acceda al método oficial de configuración de Noran, ya sea por comandos SMS o por la herramienta de configuración del proveedor según la documentación del fabricante.
2. Introduzca la dirección del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 cuando el dispositivo pida el host del servidor.
3. Configure el puerto del servidor en 8888 según lo requiere Plaspy.
4. Elija UDP o TCP si el dispositivo solicita seleccionar el protocolo de transporte.
5. Aplique o guarde la configuración en el equipo (los comandos SMS se aplican al recibirse; las herramientas de software normalmente requieren un paso de guardar).
6. Reinicie el dispositivo si el firmware lo solicita o para asegurar que los ajustes nuevos entren en vigor.
7. Valide que el dispositivo está reportando a Plaspy comprobando el estado del equipo y confirmando su visibilidad en su cuenta Plaspy.

## Comandos de configuración de ejemplo

El NR200 admite configuración por SMS. El flujo de ejemplo siguiente usa la contraseña del dispositivo 000000 en las cadenas de comando. Mantenga los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} intactos y reemplácelos por el APN del operador y, si corresponde, el usuario y contraseña del APN.

1. Definir el APN del operador
   - Reemplace {{apn}} por el APN de su operador. Si su operador requiere usuario y contraseña, incluya {{apnu}} y {{apnp}} como valores adicionales separados por comas.
```
A000000,012,{{apn}}
```
   - Si el APN requiere usuario y contraseña:
```
A000000,012,{{apn}},{{apnu}},{{apnp}}
```

2. Configurar el servidor GPRS a Plaspy (se muestra IP y puerto)
```
A000000,010,54.85.159.138,8888
```
   - Alternativamente use el dominio (si el dispositivo lo soporta) reemplazando la IP por d.plaspy.com:
```
A000000,010,d.plaspy.com,8888
```

3. Cambiar el dispositivo a modo GPRS
```
A000000,011,1
```

4. Comprobar ajustes actuales y estado del dispositivo (devuelve Id y estado)
```
A000000,004
```
   - El Id del dispositivo aparece en la respuesta de estado como la primera palabra que comienza con NR. Úselo para confirmar que corresponde al equipo correcto.

Notas sobre los comandos
- Las cadenas que comienzan con A000000 usan la contraseña de ejemplo 000000. Si su contraseña es distinta, reemplace los seis dígitos por la suya.
- Conserve los marcadores {{apn}}, {{apnu}} y {{apnp}} al copiar comandos y sustituya con los valores reales de su operador antes de enviar.
- Envíe estos comandos como SMS al NR200 desde un número autorizado si el dispositivo tiene control de acceso configurado.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar el formato exacto de los comandos y las funciones compatibles; siempre verifique la respuesta del dispositivo tras enviar comandos.
- Elija UDP o TCP según el comportamiento del firmware del equipo; Plaspy detectará el protocolo automáticamente, pero el dispositivo debe estar configurado con el transporte correspondiente.
- La configuración por SMS es útil para ajustes en campo o cuando no hay conexión de datos; la configuración por GPRS es necesaria para el reporte en vivo a Plaspy.
- Mantenga la contraseña del dispositivo segura y cámbiela desde el valor por defecto si las instrucciones del fabricante lo recomiendan.
- Si los cambios no se aplican de inmediato, intente reiniciar el dispositivo o reenviar los comandos de configuración.

## Por qué usar Plaspy con esta configuración

Configurar el NR200 para que reporte a Plaspy ofrece a los equipos una vista unificada de ubicaciones, alertas e historial para activos con batería discreta y para instalaciones temporales en vehículos. Los ajustes de servidor compartidos y la detección automática de protocolo en Plaspy simplifican la integración, permitiendo que dispositivos de proveedores soportados se ingieran de forma consistente sin plataformas por dispositivo.

Para saber más sobre Plaspy y cómo soporta flotas mixtas y seguimiento de activos visite https://www.plaspy.com. Para comportamientos específicos de firmware, formatos exactos de comandos SMS y la guía más reciente del fabricante, verifique los detalles con Noran en http://www.norantracker.com/ ya que las especificaciones y pasos de instalación pueden cambiar con el tiempo.
