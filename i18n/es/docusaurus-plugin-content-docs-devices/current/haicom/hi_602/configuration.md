---
slug: /haicom/hi_602/configuration
id: hi_602-configuration
sidebar_label: Configuration
title: Haicom - HI-602 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Haicom HI-602 para integrarlo con Plaspy, con ajustes de servidor, comandos SMS y flujo de instalación
keywords:
  - Configuración Haicom HI-602
  - Instalación Haicom HI-602
  - Haicom HI-602 en Plaspy
  - Configuración de servidor Haicom HI-602
  - Configuración de rastreo HI-602
  - Configuración de rastreador GPS Plaspy
  - Configuración de rastreador GPRS
  - Configuración por SMS HI-602
  - Rastreo de vehículos Haicom HI-602
  - Compatibilidad de rastreadores con Plaspy
---

# Haicom - Configuración del HI-602

Esta página documenta el contexto público de configuración para usar el rastreador Haicom HI-602 con Plaspy. Resume los pasos prácticos y los comandos SMS públicos que suelen emplearse para apuntar un HI-602 a los servidores de Plaspy y explica qué debe verificar antes de añadir el dispositivo a la plataforma. El contenido se basa en la descripción pública del HI-602 y en los comandos de configuración disponibles para mostrar cómo preparar el equipo para su uso con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; no obstante, los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El HI-602 admite configuración por SMS y GPRS; esta página incluye los comandos tipo SMS que normalmente se usan para establecer el APN, el servidor (IP o dominio) y los intervalos de reporte cuando esos comandos públicos están disponibles.

## Resumen de la configuración

El objetivo de esta configuración es permitir que el HI-602 se comunique de forma fiable con Plaspy para que la ubicación y los eventos básicos del dispositivo sean visibles en la plataforma. La secuencia pública de configuración generalmente incluye indicar el APN y el servidor que debe usar el dispositivo, seleccionar el transporte si es necesario y fijar el intervalo de reporte.

- Configurar el APN y los parámetros GPRS del rastreador para que pueda conectarse a la red móvil.
- Apuntar el rastreador a los ajustes de servidor de Plaspy para que los datos se envíen al destino correcto.
- Seleccionar TCP o UDP en el dispositivo si el rastreador exige especificar el transporte.
- Definir un intervalo de reporte que se adapte a sus necesidades de monitoreo equilibrando consumo de batería y datos.
- Validar la conectividad y confirmar que el dispositivo aparece en Plaspy con actualizaciones en tiempo real.

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo del rastreador una vez que el dispositivo apunte al servidor y puerto correctos.

## Requisitos habituales antes de la configuración

- Una unidad HI-602 con batería y una tarjeta SIM funcional con datos y/o capacidad SMS según lo requiera
- Conocer los ajustes APN del operador móvil para la SIM que vaya a usar
- Acceso al método de configuración del fabricante, como comandos SMS o el software de configuración Haicom
- Contraseña por defecto del dispositivo o la contraseña de administrador configurada para enviar comandos de configuración (en el ejemplo público se usa 0000 como valor por defecto)
- Habilidad básica para enviar mensajes SMS desde un teléfono al rastreador si usa configuración vía SMS
- Acceso a la cuenta de Plaspy donde registrará o verificará el dispositivo después de la configuración

## Cómo se conecta este rastreador a Plaspy

El HI-602 puede configurarse para enviar datos de ubicación mediante GPRS al endpoint y puerto del servidor Plaspy. Una vez que el GPRS esté activo y el dispositivo apunte a Plaspy, la plataforma recibirá los reportes de posición y mostrará el dispositivo en la interfaz de seguimiento.

- El rastreador usa GPRS para abrir una conexión de datos y enviar actualizaciones de ubicación al servidor Plaspy
- Los reportes del dispositivo se dirigen a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la selección del dispositivo y las condiciones de la red
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el tráfico llega a la plataforma
- Los intervalos de reporte y los disparadores de eventos controlan la frecuencia de envío de actualizaciones a Plaspy

## Flujo de configuración típico

1. Acceda al método oficial de configuración Haicom para el HI-602, ya sea comandos SMS o la herramienta de configuración para PC.
2. Introduzca el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto usado por Plaspy para todos los dispositivos soportados.
4. Seleccione UDP o TCP en el dispositivo si es necesario especificar el protocolo de transporte.
5. Aplique o guarde la configuración en el dispositivo y envíe los comandos SMS de confirmación si se requieren.
6. Reinicie el rastreador si el fabricante lo recomienda o si el dispositivo necesita reinicio para aplicar los ajustes de red.
7. Verifique que el dispositivo reporte a Plaspy y aparezca en la plataforma con actualizaciones en vivo.

Si usa configuración por SMS, realice los pasos 2 a 4 enviando los comandos SMS del fabricante como se muestra en la sección de comandos de ejemplo a continuación.

## Comandos de configuración de ejemplo

El HI-602 puede configurarse enviando mensajes SMS al dispositivo. El ejemplo público usa la contraseña por defecto 0000. Preserve los marcadores de posición al reemplazar valores.

1. Establecer el APN del operador
   - Propósito: configurar el APN de la red móvil y el usuario/contraseña opcional para GPRS
   - Formato del comando (reemplace los marcadores con los valores de su operador):
```text
#0000,200,{{apn}},{{apnu}},{{apnp}}
```
   - Explicación de los marcadores:
     - {{apn}} es el nombre del punto de acceso (APN) del operador de la SIM
     - {{apnu}} es el usuario del APN si el operador lo exige; dejar vacío si no se usa
     - {{apnp}} es la contraseña del APN si el operador la exige; dejar vacío si no se usa

2. Establecer el servidor GPRS hacia Plaspy
   - Propósito: apuntar el dispositivo a la IP y puerto del servidor Plaspy para que los datos lleguen a la plataforma
```text
#0000,210,54.85.159.138,8888,8888,8888,0
```
   - Este comando configura la IP del servidor GPRS en 54.85.159.138 y el puerto 8888. Plaspy también acepta el dominio d.plaspy.com y detectará automáticamente el protocolo del rastreador.

3. Fijar el intervalo de reporte a 60 segundos
   - Propósito: configurar el intervalo periódico de actualizaciones de ubicación
```text
#0000,250,0,60,0,0,0,0,0,0
```
   - Este ejemplo establece el intervalo de actualización en 60 segundos. Ajuste el valor numérico según su caso de uso.

Notas sobre estos comandos:
- La contraseña de ejemplo del dispositivo en los comandos públicos es 0000, que corresponde al valor de fábrica en el ejemplo. Si la contraseña de su dispositivo ha sido cambiada, use la contraseña actual en lugar de 0000.
- Envíe estos comandos SMS desde un teléfono al HI-602 en el orden mostrado cuando prepare un equipo para uso inicial.

## Notas de configuración

- Revisiones de firmware y hardware pueden modificar el formato de los comandos o los parámetros disponibles; verifique los comandos con la documentación de firmware de su dispositivo.
- Elija UDP o TCP según la fiabilidad de la red y el soporte del dispositivo; Plaspy acepta ambos transportes en el puerto 8888.
- La configuración mediante SMS es una opción soportada y frecuentemente utilizada para la configuración inicial cuando no hay herramientas para PC.
- Tenga listos los marcadores {{apn}}, {{apnu}} y {{apnp}} y confirme los valores exactos del operador antes de enviar comandos.
- Recuerde que todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo del dispositivo una vez que el rastreador se comunique con el servidor.

## Por qué usar Plaspy con esta configuración

Configurar el Haicom HI-602 para enviar datos a Plaspy brinda a las organizaciones una vía sencilla hacia la visibilidad continua y el control operativo. Usar los ajustes de servidor compartidos de Plaspy simplifica la incorporación de dispositivos, ya que el mismo puerto y la detección automática de protocolo reducen la complejidad de configuración entre distintos rastreadores.

Para saber más sobre cómo Plaspy gestiona la conectividad e integraciones visite https://www.plaspy.com y revise las características actuales de la plataforma. Para comandos específicos del dispositivo, notas de firmware e instrucciones del fabricante, verifique los detalles en el sitio oficial de Haicom http://www.haicom.com.tw/ ya que las especificaciones y los métodos de configuración pueden cambiar con el tiempo.
