---
slug: /concox/gt710/configuration
id: gt710-configuration
sidebar_label: Configuration
title: Concox - GT710 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Concox GT710 en Plaspy con ajustes de servidor y comandos SMS de ejemplo
keywords:
  - Configuración Concox GT710
  - Configuración GT710
  - Configuración servidor GT710
  - Comandos SMS GT710
  - Configuración rastreador Plaspy
  - Configuración servidor Plaspy
  - Configuración rastreador GPS GT710
  - Configuración rastreador de activos
  - Configuración plataforma de rastreo
  - Integración Concox GT710
---

# Concox - Configuración GT710

Esta página describe el contexto público de configuración para usar el rastreador GPS de activos Concox GT710 con la plataforma Plaspy. Reúne los pasos prácticos y los comandos SMS de uso común para apuntar un GT710 a Plaspy y validar la conectividad, de modo que los dispositivos sean visibles en la plataforma.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía sirve como referencia práctica y es recomendable confirmar detalles específicos del dispositivo con la documentación del fabricante.

## Resumen de la configuración

Este proceso prepara un GT710 para comunicarse con Plaspy configurando el APN del operador, el endpoint del servidor y el intervalo de reporte. El GT710 admite configuración mediante comandos SMS y existen varios comandos públicos comúnmente empleados para poner el dispositivo en modo de reporte GPRS y verificar los ajustes.

- Configure el APN del operador para que el dispositivo pueda iniciar sesiones de datos GPRS.
- Apunte el servidor GPRS al endpoint de Plaspy usando d.plaspy.com o la IP de Plaspy en el puerto 8888.
- Seleccione el modo de transporte UDP o TCP si el dispositivo lo solicita, y habilite el reporte por GPRS.
- Defina el intervalo de reporte periódico con el comando TIMER para controlar la frecuencia de actualizaciones.
- Verifique los ajustes con el comando de verificación del dispositivo para confirmar que reporte a Plaspy.
- Use el reinicio de fábrica opcional solo si es necesario durante la configuración inicial.

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar un GT710 para Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará el protocolo automáticamente, por lo que puede apuntar el dispositivo al dominio o a la IP de Plaspy en el puerto 8888.

## Requisitos habituales antes de la configuración

- Un Concox GT710 con alimentación y batería activa o fuente de alimentación externa.
- Una tarjeta SIM activa con servicio de datos y el APN correcto del operador móvil.
- Capacidad para enviar mensajes SMS al rastreador para la configuración basada en SMS.
- El dispositivo debe estar en condiciones de establecer una sesión GPRS.
- Conocimiento del APN del operador y de cualquier usuario o contraseña del APN si fueran necesarios.
- Acceso a las instrucciones de configuración del fabricante o a herramientas del vendedor como referencia.

## Cómo se conecta este rastreador a Plaspy

El GT710 se configura para reportar al endpoint y puerto compartidos de Plaspy. Una vez aplicados el APN y los ajustes del servidor, el rastreador establece una conexión GPRS y envía actualizaciones periódicas a Plaspy para su visualización y monitoreo.

- El dispositivo utiliza el APN configurado para iniciar la sesión de datos GPRS.
- El reporte del rastreador se dirige a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Puede configurar el dispositivo para usar transporte UDP o TCP si el equipo exige elegir.
- La frecuencia de reporte se controla con el ajuste TIMER para que Plaspy reciba actualizaciones regulares de ubicación.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto funciona para los dispositivos compatibles.
- Verifique e inspeccione los parámetros reportados usando el comando de verificación del dispositivo.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante, como los comandos SMS documentados por Concox o la herramienta del proveedor para el GT710.
2. Configure el APN del operador con el comando APN usando los valores de su operador.
3. Ingrese el servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 y establezca el puerto 8888.
4. Elija UDP o TCP si el dispositivo solicita seleccionar el transporte.
5. Configure el intervalo de reporte con el comando TIMER y habilite el modo GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador lo requiere.
7. Valide que el rastreador reporte a Plaspy y compruebe la visibilidad del dispositivo en la plataforma.

## Comandos de configuración de ejemplo

El GT710 soporta configuración vía SMS. Los siguientes comandos públicos se presentan en el orden recomendado. Envíe cada comando como SMS al número del dispositivo. Mantenga los marcadores de posición tal como están y reemplácelos por los valores de su operador.

- Reinicio de fábrica inicial opcional (usar solo si necesita restaurar los valores por defecto):
```
FACTORY#
```

- Ajustar la zona horaria a UTC 0:
```
GMT,E,0#
```

- Configurar el APN del operador. Reemplace [apn] por su APN. Si su APN requiere usuario o contraseña, incluya [apnu] y [apnp] según lo proporcione su operador:
```
APN,[apn]{{,[apnu],[apnp]}}#
```
Nota: Use la forma del comando APN que corresponda a su dispositivo. Si no se requiere usuario ni contraseña, envíe solo APN,[apn]#.

- Establecer el servidor GPRS a Plaspy por dominio en el puerto 8888:
```
SERVER,1,d.plaspy.com,8888,0#
```

- O establecer el servidor GPRS a la IP de Plaspy en el puerto 8888:
```
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización cada 60 segundos. El GT710 acepta un intervalo simple o un par según el firmware:
```
TIMER,60#
```
o
```
TIMER,60,60#
```

- Habilitar modo GPRS:
```
GPRSON,1#
```

- Consultar parámetros GPRS actuales y verificar ajustes:
```
GPRSSET#
```

Estos comandos reflejan la secuencia pública de configuración por SMS. Reemplace los valores de marcador donde corresponda y envíe los comandos en el orden mostrado para la configuración inicial.

## Notas de configuración

- La configuración basada en SMS es compatible y es un método público habitual para configurar el GT710. Use el formato de comandos oficial del proveedor cuando esté disponible.
- El comando APN utiliza los marcadores de posición [apn], [apnu] y [apnp]. [apn] es la cadena del APN del operador, [apnu] es el usuario del APN y [apnp] la contraseña del APN. Solo incluya usuario y contraseña cuando su operador lo requiera.
- Algunas versiones de firmware aceptan formatos alternativos de TIMER. Utilice el formato que coincida con el firmware de su dispositivo.
- Puede establecer el servidor por dominio o por IP. Tanto d.plaspy.com como 54.85.159.138 en el puerto 8888 son opciones aceptadas para Plaspy.
- Elija UDP o TCP si el rastreador requiere una selección explícita de transporte. Plaspy detectará automáticamente el protocolo del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el Concox GT710 con Plaspy ofrece una forma sencilla de incorporar seguimiento de activos confiable dentro de una sola plataforma de monitoreo. Configurar el GT710 para que reporte a Plaspy con los ajustes de servidor compartidos y un intervalo de reporte controlado ayuda a las organizaciones a mantener visibilidad sobre activos distribuidos con una configuración mínima por dispositivo.

Learn more about Plaspy and how the platform can be used for fleet and asset tracking at https://www.plaspy.com. For device specific instructions, firmware notes, and the latest configuration details for the Concox GT710, verify current information with the manufacturer at https://www.iconcox.com/. Manufacturer specifications and setup methods can change over time so always confirm device behavior with official Concox documentation.
