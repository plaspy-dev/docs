---
slug: /megastek/mt100/configuration
id: mt100-configuration
sidebar_label: Configuration
title: Megastek - MT100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Megastek MT100 con los ajustes de servidor de Plaspy y ejemplos de comandos SMS
keywords:
  - Configuración Megastek MT100
  - Instalación Megastek MT100
  - Configuración servidor MT100
  - Configuración MT100 Plaspy
  - Configuración rastreador Plaspy
  - Configuración GPS MT100
  - Comandos SMS Megastek
  - Configuración software MT100
  - Integración telemetría MT100
  - Configuración dispositivo Plaspy
---

# Megastek - Configuración MT100

Esta página detalla el contexto público de configuración para usar el Megastek MT100 con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere y muestra comandos de configuración públicos y prácticos para el MT100 cuando están disponibles. Use esta guía para preparar el dispositivo para comunicarse con Plaspy y para validar la conectividad antes de añadir dispositivos a su cuenta de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los métodos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que considere los comandos y pasos a continuación como ejemplos públicos y no como guía exhaustiva del fabricante. El MT100 soporta configuración por SMS según la documentación pública, y los comandos SMS de ejemplo en esta página usan la contraseña de dispositivo por defecto 000000.

## Resumen de la configuración

El objetivo de la configuración es preparar el MT100 para enviar datos de ubicación y eventos a Plaspy de forma fiable y verificar que el dispositivo sea visible en la plataforma. La configuración suele implicar definir parámetros de red móvil, el identificador del dispositivo, los intervalos de reporte y el endpoint de servidor usado por Plaspy.

- Establecer el identificador del dispositivo usando el IMEI para que Plaspy pueda mapear los datos entrantes al dispositivo correcto.
- Configurar el APN del operador y las credenciales para que el dispositivo pueda establecer una conexión GPRS.
- Indicar al MT100 el servidor y puerto de GPRS de Plaspy para que la telemetría llegue a la plataforma.
- Habilitar el modo GPRS y configurar los intervalos de reporte para controlar la frecuencia de envíos a Plaspy.
- Validar la conectividad y la visibilidad en Plaspy una vez que el dispositivo esté configurado y en línea.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de configurar

- Un dispositivo MT100 cargado con acceso a su interfaz de configuración por SMS o a la herramienta de configuración del fabricante
- Una SIM con datos y SMS habilitados y las credenciales APN correctas para el operador móvil
- El número IMEI del dispositivo disponible para configurar el ID del equipo
- Acceso a la documentación oficial de Megastek sobre métodos de configuración o a las herramientas de soporte
- Una cuenta de Plaspy o acceso de administrador para verificar que el dispositivo aparezca en la plataforma tras la configuración

## Cómo se conecta este rastreador a Plaspy

El MT100 envía fixes GNSS y eventos del dispositivo al endpoint del servidor de Plaspy para que la plataforma pueda mostrar ubicación en tiempo real, alertas e historial de eventos. El dispositivo puede usar datos celulares (GPRS) y el APN configurado para establecer una conexión saliente con Plaspy en el puerto compartido.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy: d.plaspy.com o 54.85.159.138 en el puerto 8888
- Los datos pueden enviarse por TCP o UDP según la selección del dispositivo y el soporte de firmware
- Plaspy recibe paquetes de telemetría y eventos y detecta automáticamente el protocolo del rastreador para su correcto parseo
- Los intervalos de reporte y las alarmas controlan la frecuencia con que el MT100 sube posiciones y eventos a Plaspy
- Tras una configuración exitosa, el dispositivo queda visible en Plaspy para monitoreo en vivo y reproducción histórica

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración de Megastek o al software correspondiente, o utilice la configuración por SMS si su equipo y operador la soportan.
2. Ingrese el servidor de Plaspy como d.plaspy.com o como la IP 54.85.159.138 según lo que acepte su dispositivo.
3. Establezca el puerto del servidor en 8888. Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte y su despliegue prefiere uno u otro.
5. Configure el APN del dispositivo y cualquier usuario o contraseña de APN necesarios para la conectividad GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware requieren un reinicio para que los cambios surtan efecto.
7. Verifique que el dispositivo reporte a Plaspy y aparezca en la plataforma como se espera.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del MT100 incluyen comandos por SMS. La contraseña por defecto del dispositivo usada en estos comandos es 000000. Reemplace los marcadores con sus valores específicos antes de enviar. Cada comando SMS comienza con M000000 donde 000000 es la contraseña por defecto.

- Nota sobre marcadores
  - {{imei}} significa los 15 dígitos del IMEI del dispositivo. Use los últimos 15 dígitos del IMEI si su dispositivo lo requiere.
  - {{apn}} es la cadena APN del operador móvil.
  - {{apnu}} es el usuario del APN cuando sea necesario; si no aplica omítalo.
  - {{apnp}} es la contraseña del APN cuando sea necesaria; si no aplica omítala.

1) Establecer el ID del dispositivo usando el IMEI
```text
M000000,22,{{imei}}
```
Explicación: reemplace {{imei}} con el IMEI del dispositivo (15 dígitos). Esto asocia el ID del dispositivo según lo espera el protocolo del rastreador.

2) Configurar el APN del operador (usuario y contraseña opcionales)
```text
M000000,23,{{apn}}
```
Si su APN requiere usuario y contraseña inclúyalos así:
```text
M000000,23,{{apn}},{{apnu}},{{apnp}}
```
Explicación: reemplace {{apn}}, {{apnu}} y {{apnp}} con los valores de su operador. Si no se requiere usuario o contraseña, omita esos campos.

3) Establecer el intervalo de actualización a 60 segundos
```text
M000000,25,60
```
Explicación: este comando configura el intervalo de reporte en 60 segundos. Ajuste el valor numérico según sus necesidades de monitoreo y consideraciones de batería.

4) Configurar el servidor GPRS al endpoint de Plaspy (ejemplo con IP)
```text
M000000,24,56 54.85.159.138,8888
```
Explicación: este comando apunta el dispositivo a la IP y puerto del servidor de Plaspy. El ejemplo incluye un parámetro inicial que aparece en la secuencia de comandos pública. Donde el firmware lo soporte, puede usar el dominio d.plaspy.com en lugar de la IP si el dispositivo acepta nombres de host.

5) Activar modo GPRS
```text
M000000,21,2
```
Explicación: este comando habilita el modo GPRS del dispositivo para que use el APN y los ajustes de servidor configurados para conectarse a Plaspy.

## Notas de configuración

- La contraseña SMS por defecto en los ejemplos públicos es 000000. Cambie o asegure la contraseña del dispositivo cuando sea posible tras la configuración inicial.
- Las variantes de firmware y regionales pueden modificar la sintaxis exacta de los comandos SMS o los parámetros requeridos. Confirme la sintaxis con la documentación oficial de Megastek para su revisión de firmware.
- Algunos dispositivos aceptan nombres de dominio y otros requieren direcciones IP numéricas en el campo de servidor. Si tiene dudas use la IP 54.85.159.138 o pruebe con d.plaspy.com si su firmware soporta DNS.
- Elija UDP o TCP acorde con sus necesidades de red y operativas. Plaspy soporta ambos y detecta automáticamente el protocolo que use el dispositivo.
- La configuración por SMS es útil para la puesta a punto inicial o cambios remotos, pero requiere que exista servicio SMS y puede generar cargos por parte del operador.

## Por qué usar Plaspy con esta configuración

Usar el MT100 con Plaspy ofrece un camino sencillo para integrar la telemetría de rastreadores personales en una plataforma centralizada de monitoreo y alertas. Con el MT100 configurado para reportar al endpoint y puerto compartidos de Plaspy, las organizaciones obtienen visibilidad en tiempo real, recepción de eventos SOS y alarmas, y la posibilidad de combinar los datos del dispositivo con las herramientas de mapas e informes de Plaspy.

Para saber más sobre Plaspy y cómo se integra con dispositivos como el Megastek MT100 visite https://www.plaspy.com. Los métodos específicos de configuración del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información de configuración más reciente en el sitio de Megastek https://www.megastek.com/.
