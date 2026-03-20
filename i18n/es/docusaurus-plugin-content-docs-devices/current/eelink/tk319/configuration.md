---
slug: /eelink/tk319/configuration
id: tk319-configuration
sidebar_label: Configuration
title: EElink - TK319 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EElink TK319 con ajustes de servidor Plaspy, comandos SMS y pasos prácticos
keywords:
  - configuración EElink TK319
  - configuración servidor EElink TK319
  - configuración EElink TK319 para Plaspy
  - configuración rastreador GPS EElink
  - configuración SMS TK319
  - ajustes APN TK319
  - ajustes servidor rastreador GPS
  - configuración dispositivo Plaspy
  - rastreador de flotas TK319
  - rastreo vehicular TK319
---

# EElink - Configuración del TK319

Esta página documenta el contexto público de configuración para usar el EElink TK319 con Plaspy. Reúne los valores de servidor de Plaspy y los comandos SMS públicos más habituales que permiten apuntar el TK319 a la plataforma Plaspy para que el dispositivo informe ubicación y alarmas a su cuenta en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando el TK319 admite configuración por SMS, los comandos abajo son los ejemplos documentados públicamente que puede usar para preparar el rastreador para Plaspy.

## Resumen de la configuración

Preparar un TK319 para la integración con Plaspy implica, sobre todo, configurar el acceso de red (APN), apuntar el dispositivo al endpoint del servidor Plaspy y validar que el rastreador envíe actualizaciones regulares. El TK319 permite configuración por SMS, práctica en despliegues de campo para establecer estos valores sin herramientas especializadas.

- Configure el APN del operador para que el dispositivo acceda a los servicios de datos GPRS/WCDMA
- Apunte el servidor del rastreador al endpoint de Plaspy (dominio o IP) y configure el puerto de Plaspy
- Seleccione el transporte (UDP o TCP) si el dispositivo requiere una selección explícita
- Defina un intervalo de actualización de ubicación y habilite reportes regulares para verificar conectividad
- Use el comando PARAM o los registros de la plataforma para confirmar que el dispositivo sea visible en Plaspy

## Ajustes de servidor de Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Tenga en cuenta que Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles y que la plataforma detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta.

## Requisitos habituales antes de la configuración

- Una unidad TK319 con alimentación, batería interna cargada o conectada a la alimentación del vehículo
- Una tarjeta SIM válida con plan de datos activo y capacidad de SMS insertada en el dispositivo
- Credenciales APN del operador móvil (nombre APN y, opcionalmente, usuario y contraseña)
- Capacidad para enviar SMS al dispositivo o acceso a la herramienta oficial de configuración de EElink proporcionada por el proveedor
- Acceso a los detalles de su cuenta Plaspy para confirmar la visibilidad del dispositivo tras la configuración

## Cómo se conecta este rastreador a Plaspy

El TK319 sube datos de ubicación y eventos a través de la red celular al endpoint y puerto del servidor Plaspy. Una vez que el dispositivo está apuntando a d.plaspy.com o a la IP de Plaspy y usa el puerto 8888, Plaspy recibirá el tráfico entrante y determinará automáticamente el protocolo correcto.

- Las actualizaciones periódicas de ubicación se envían al servidor Plaspy en el puerto 8888
- Alarmas e informes de eventos como estado de ACC o geovallas pueden enviarse a Plaspy para su visibilidad en la plataforma
- El dispositivo usa el APN configurado y la conexión de datos móviles para alcanzar d.plaspy.com o 54.85.159.138
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo en el servidor; sin embargo, el dispositivo puede requerir elegir UDP o TCP localmente
- Cargas periódicas basadas en temporizador (por ejemplo cada 60 segundos) ayudan a verificar la conectividad continua en la plataforma Plaspy

## Flujo común de configuración

1. Confirme que el dispositivo esté encendido, que tenga una SIM con datos y SMS habilitados, y que pueda enviar SMS a la unidad.
2. Acceda al método oficial de configuración de EElink para el TK319 (comandos SMS o herramienta del proveedor) para realizar los cambios.
3. Introduzca la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 como objetivo SERVER.
4. Configure el puerto de Plaspy a 8888 en la configuración del dispositivo.
5. Elija UDP o TCP en el dispositivo si la versión de firmware del TK319 requiere la selección de transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si el equipo o el firmware lo requieren.
7. Valide la conectividad comprobando la respuesta a PARAM, observando datos del dispositivo en Plaspy o confirmando que las actualizaciones periódicas lleguen a la plataforma.

## Comandos de configuración de ejemplo

El TK319 admite configuración por SMS. Los siguientes comandos SMS públicos son los proporcionados por el fabricante; conservan marcadores de posición cuando corresponda. Envíe cada comando como un SMS separado al número del dispositivo. Conserve el signo numeral # al final donde se muestra.

1. Reinicio de fábrica opcional (use solo cuando sea necesario)
```
FACTORY#
```

2. Ajustar la zona horaria a UTC 0 (ejemplo)
```
GMT,E,0#
```

3. Configurar el APN del operador. Reemplace el marcador [apn] por el APN de su operador. Si su operador exige usuario y contraseña, incluya los campos opcionales [apnu] y [apnp] en ese orden.
```
APN,[apn]# 
```
O con usuario y contraseña opcionales:
```
APN,[apn],[apnu],[apnp]#
```
(Explicación: [apn] = nombre del APN. [apnu] = usuario del APN si se requiere. [apnp] = contraseña del APN si se requiere.)

4. Establecer el servidor GPRS al dominio de Plaspy en el puerto 8888 (usar esta forma para apuntar al dominio)
```
SERVER,1,d.plaspy.com,8888#
```

5. O establecer el servidor GPRS a la IP de Plaspy en el puerto 8888 (alternativa al dominio)
```
SERVER,0,54.85.159.138,8888#
```

6. Fijar el intervalo de subida periódica de ubicación a 60 segundos
```
TIMER,60#
```

7. Consultar parámetros actuales del dispositivo
```
PARAM#
```

Siga el orden de comandos que recomiende el fabricante al realizar la configuración inicial; en muchas implementaciones el APN y los ajustes del servidor son requeridos antes de confirmar la conectividad.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los SMS o los parámetros disponibles; siempre verifique los comandos con la documentación de su dispositivo.
- El TK319 admite configuración por SMS como se muestra; también pueden estar disponibles herramientas del proveedor o configuración remota vía servidor según el firmware y las opciones de compra.
- Elija UDP o TCP en el dispositivo si el firmware lo requiere; Plaspy acepta ambos transportes pero el equipo puede necesitar la selección explícita.
- Plaspy utiliza el puerto 8888 en los dispositivos compatibles; esto simplifica la configuración del servidor para flotas con varios modelos.
- Use PARAM# o la respuesta SMS del dispositivo para confirmar los valores de APN, servidor y temporizador antes de confiar en los datos de la plataforma.

## Por qué usar Plaspy con esta configuración

Usar el EElink TK319 con Plaspy ofrece una vía directa para integrar un rastreador GPS 3G compacto en una plataforma centralizada de gestión de flotas o activos. Configurar el TK319 para que reporte al endpoint del servidor Plaspy permite visibilidad en tiempo real, registro de eventos y monitoreo consolidado de una flota de dispositivos, mientras que la detección automática de protocolos de Plaspy reduce la necesidad de emparejar protocolos manualmente.

Learn more about Plaspy and how the platform can work with GPS devices at https://www.plaspy.com. For the most current model-specific commands, firmware notes, and hardware details refer to the official EElink documentation at https://www.eelink.com.cn/ to verify the latest setup methods and manufacturer guidance.
