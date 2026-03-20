---
slug: /atrack/ak7v/configuration
id: ak7v-configuration
sidebar_label: Configuration
title: ATrack - AK7V Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GPS ATrack AK7V con Plaspy incluyendo ajustes de servidor y comandos de ejemplo
keywords:
  - Configuración ATrack AK7V
  - Configuración AK7V
  - AK7V configuración Plaspy
  - configuración rastreador GPS
  - configuración rastreo vehicular
  - configuración servidor AK7V
  - configuración rastreador Plaspy
  - configuración plataforma GPS ATrack
  - guía instalación AK7V
  - configuración rastreador gestión de flotas
---

# ATrack - Configuración del AK7V

Esta página describe el contexto público de configuración para usar el rastreador GPS ATrack AK7V con Plaspy. Resume los ajustes de servidor prácticos y comandos de ejemplo que suelen emplearse para apuntar un equipo AK7V a Plaspy y que permitan el envío de localizaciones y eventos. Use esta guía para entender los valores requeridos por Plaspy y los pasos generales que siguen instaladores y administradores.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos precisos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. Cuando se incluyen, los comandos de ejemplo proceden del contenido público publicado por ATrack; siempre verifique los detalles específicos del dispositivo con la documentación del fabricante antes del despliegue final.

## Resumen de la configuración

Este proceso prepara el AK7V para comunicarse de forma fiable con la plataforma Plaspy, de modo que la ubicación del vehículo, los eventos y las entradas seleccionadas sean visibles en la cuenta. Los comandos de ejemplo en esta guía muestran ajustes habituales como el mapeo de entradas y eventos, el intervalo de rastreo, el formato de datos y la entrada del servidor GPRS que dirige el tráfico a Plaspy.

- Configure el reporte de entradas y eventos para que las señales críticas del vehículo se envíen a Plaspy para su monitoreo.
- Establezca un intervalo de rastreo y un modo de reporte para controlar con qué frecuencia el dispositivo sube la ubicación.
- Seleccione el formato de datos y el transporte para que Plaspy pueda interpretar automáticamente los mensajes entrantes.
- Ingrese el destino GPRS/servidor de Plaspy para que el AK7V envíe la telemetría al endpoint de Plaspy.
- Valide el estado del dispositivo después de la configuración para confirmar la conectividad y la visibilidad en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador en las conexiones entrantes
- Nota: Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración del servidor

## Requisitos típicos antes de la configuración

- Acceso al método de configuración del AK7V proporcionado por ATrack o su proveedor (herramienta oficial de configuración o interfaz de comandos).
- Un AK7V con alimentación y capacidad de red instalado o en banco de pruebas para realizar la configuración.
- Conectividad celular de datos válida y una SIM funcional configurada en el equipo si se usa GPRS.
- La información APN del operador de la SIM (APN, usuario APN, contraseña APN) para completar los marcadores en el comando GPRS.
- Acceso administrativo a Plaspy para confirmar que el dispositivo aparece tras la configuración.
- Un método para anotar el IMEI u otros identificadores del dispositivo que Plaspy usa para mapear equipos a cuentas.

## Cómo se conecta este rastreador a Plaspy

Cuando un AK7V se configura para Plaspy, envía datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy, donde la plataforma detecta y parsea automáticamente el protocolo del dispositivo. Los ajustes de servidor y transporte en el equipo le indican dónde abrir la sesión de datos para las subidas de telemetría.

- El AK7V se configura para reportar a d.plaspy.com (o la IP equivalente 54.85.159.138) en el puerto 8888.
- Los datos pueden enviarse por UDP o TCP según el transporte seleccionado en el dispositivo.
- Plaspy detecta automáticamente el protocolo entrante y asigna los mensajes del dispositivo al parser correspondiente.
- El reporte de eventos y los cambios en entradas se transmiten a Plaspy para que la plataforma muestre alertas y estados.
- Tras la configuración y una sesión de red exitosa, el equipo debería aparecer en Plaspy con la ubicación y los eventos disponibles para monitoreo.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de ATrack o al software del proveedor según documente el fabricante.
2. Identifique el dispositivo por IMEI o número de serie y prepárese para enviar comandos de configuración o aplicar ajustes.
3. Ingrese el destino del servidor Plaspy usando el dominio d.plaspy.com o la dirección IP 54.85.159.138.
4. Establezca el puerto 8888 en la configuración del dispositivo.
5. Elija el protocolo de transporte (UDP o TCP) si el equipo requiere una selección explícita.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el fabricante lo exige.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en su cuenta Plaspy; use comandos de estado o información del dispositivo para confirmar la conectividad.

## Comandos de configuración de ejemplo

Los siguientes comandos son un extracto de los comandos de configuración pública del ATrack AK7V. Se muestran en el orden que publica ATrack e incluyen marcadores donde se requieren las credenciales APN del operador. Use la herramienta de configuración AK7V o la interfaz de comandos recomendada por ATrack para enviar estos comandos. Preserve los marcadores al sustituir sus valores de operador.

- Configure el reporte de evento de la entrada ACC y acciones relacionadas
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Establezca el intervalo de rastreo a 60 segundos
```text
AT$TRAC=1,60,,,,,2
```

- Ponga el dispositivo en modo de reporte binario
```text
AT$FORM=1,@P,0,""
```

- Configure el servidor GPRS con marcadores APN y la IP y puerto de Plaspy
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
Explicación: [apn] es el APN del operador, [apnu] es el usuario APN y [apnp] es la contraseña APN. Reemplace estos marcadores con los valores de su operador de SIM.

- Comando de verificación del estado del dispositivo
```text
AT$INFO=?
```

## Notas de configuración

- El método exacto para entregar los comandos depende de cómo ATrack expone la configuración del dispositivo (herramienta oficial, USB, serie, o provisión por el proveedor). Use el método recomendado por el fabricante.
- Las versiones de firmware o las revisiones de hardware pueden modificar los comandos disponibles o el comportamiento de los parámetros; confirme con la documentación actual de ATrack.
- Elegir UDP frente a TCP afecta el comportamiento de la conexión y la confiabilidad en algunas redes; seleccione el transporte que mejor se ajuste a su instalación y a las características del operador.
- Mantenga una copia de seguridad de los ajustes originales antes de aplicar cambios masivos para poder revertirlos si es necesario.
- Use el comando AT$INFO=? después de la configuración para confirmar el estado y la conectividad antes de poner el equipo en servicio.

## Por qué usar Plaspy con esta configuración

Usar el ATrack AK7V con Plaspy ofrece una manera directa de integrar ubicación y eventos del AK7V en una sola plataforma de gestión de flotas. Con los ajustes de servidor compartidos y la detección automática de protocolo, los administradores pueden aplicar una configuración de servidor consistente en los dispositivos y confiar en Plaspy para el parseo de protocolo y la visibilidad de los equipos.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration and firmware details on the manufacturer site https://www.atrack.com.tw/. Manufacturer specifications, firmware behavior, and setup procedures can change over time, so always check the current official ATrack documentation before final deployment.
