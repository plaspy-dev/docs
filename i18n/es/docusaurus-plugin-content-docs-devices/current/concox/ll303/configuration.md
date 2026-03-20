---
slug: /concox/ll303/configuration
id: ll303-configuration
sidebar_label: Configuration
title: Concox - LL303 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el Concox LL303 y que reporte a Plaspy, con comandos SMS, APN y ajustes de servidor
keywords:
  - Concox LL303
  - Configuración Concox LL303
  - Configurar LL303
  - LL303 Plaspy
  - Configuración rastreador Concox
  - Configuración servidor LL303
  - Comandos SMS LL303
  - Configurar APN LL303
  - Configuración rastreador de vehículos
  - Seguimiento de flotas Plaspy
---

# Concox - LL303 Configuración

Esta página documenta el contexto público de configuración para utilizar el rastreador Concox LL303 con Plaspy. Reúne los ajustes compartidos del servidor Plaspy y los comandos SMS de configuración más comunes publicados para el LL303, para que pueda preparar el dispositivo y reportar posición y estado a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o la herramienta del proveedor; el modelo LL303 admite comandos de configuración por SMS y GPRS que se usan habitualmente para apuntar el dispositivo a los servidores de Plaspy.

## Resumen de la configuración

Esta guía se concentra en los pasos prácticos necesarios para apuntar un LL303 al endpoint del servidor Plaspy, habilitar GPRS y verificar que el dispositivo reporte correctamente y quede visible en Plaspy.

- Configurar el APN del dispositivo y el servidor GPRS para que pueda abrir una sesión de datos hacia Plaspy
- Elegir el protocolo de transporte (UDP o TCP) si el equipo lo requiere y establecer la dirección del servidor Plaspy
- Ajustar los intervalos de reporte y el modo GPRS para asegurar actualizaciones regulares de posición
- Validar la configuración usando el comando de verificación del LL303 y comprobar los reportes en Plaspy
- Usar comandos basados en SMS publicados por Concox para configuración remota cuando no esté disponible una herramienta de configuración

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Una unidad LL303 con alimentación y accesible, con batería cargada o suministro de energía estable
- Una tarjeta SIM móvil válida insertada en el rastreador, con datos habilitados y capacidad de SMS
- El APN correcto del operador de la SIM (usará un marcador de posición APN al enviar comandos)
- Capacidad para enviar mensajes SMS al dispositivo desde su teléfono o una herramienta de configuración
- Acceso a la documentación oficial de Concox o a las herramientas del proveedor para detalles específicos del modelo
- Confirmación de que el firmware del dispositivo soporta los comandos SMS mostrados en esta guía

## Cómo se conecta este rastreador a Plaspy

El LL303 se configura para enviar datos de ubicación y del dispositivo al endpoint y puerto compartidos de Plaspy. Una vez aplicados los ajustes de APN y servidor y habilitado el modo GPRS, el rastreador abre una conexión hacia Plaspy y reporta según su temporizador configurado.

- El dispositivo utiliza datos móviles (GPRS/LTE) para iniciar un socket hacia d.plaspy.com o la IP 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la selección del dispositivo; Plaspy acepta ambos y detecta automáticamente el protocolo real
- Las actualizaciones regulares de posición se envían usando el intervalo TIMER configurado para que el dispositivo sea visible en Plaspy
- Los reportes de eventos y alertas se transmiten al mismo endpoint y puerto compartidos de Plaspy para monitoreo centralizado
- La detección automática de protocolo de Plaspy reduce la necesidad de conocer nombres internos de protocolo durante la configuración

## Flujo común de configuración

1. Acceda al método oficial de configuración Concox para el LL303 (comandos SMS o software del proveedor) según lo proporcione el fabricante o su proveedor.
2. Prepare la SIM del dispositivo con los datos del APN correctos del operador móvil.
3. Ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor GPRS y establezca el puerto 8888.
4. Seleccione UDP o TCP en el equipo si el rastreador requiere elegir el transporte.
5. Aplique o guarde la configuración en el dispositivo; en configuraciones por SMS esto implica enviar los comandos SMS requeridos en el orden indicado.
6. Reinicie el dispositivo si el manual lo exige o después de aplicar los ajustes de servidor y GPRS.
7. Valide la conectividad confirmando que el dispositivo reporta a Plaspy y utilizando el comando de verificación del equipo.

## Comandos de configuración de ejemplo

El LL303 admite configuración mediante SMS. A continuación están los comandos SMS publicados con más frecuencia, presentados en el orden recomendado para una configuración inicial. Envíe estos mensajes al número del dispositivo mediante SMS.

- Reinicio a valores de fábrica opcional (use solo si necesita restaurar valores por defecto)
```text
FACTORY#
```

- Establecer la zona horaria del dispositivo a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
Nota: [apn], [apnu] y [apnp] son marcadores de posición. Reemplace [apn] por el APN de su operador. Si su operador exige usuario y contraseña incluya [apnu] y [apnp] separados por comas.
```text
APN,[apn]#
```
o si se requiere usuario y contraseña:
```text
APN,[apn],[apnu],[apnp]#
```

- Configurar el servidor GPRS para usar el dominio de Plaspy (la selección UDP/TCP se maneja por separado cuando sea necesario)
```text
SERVER,1,d.plaspy.com,8888,0#
```
o configurar el servidor GPRS usando la IP de Plaspy
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de reporte cada 60 segundos (se muestran dos variantes comunes)
```text
TIMER,60#
```
o
```text
TIMER,60,60#
```

- Habilitar modo GPRS
```text
GPRSON,1#
```

- Verificar los parámetros actuales de GPRS y servidor
```text
GPRSSET#
```

Estos comandos son la secuencia publicada para el LL303. Envíelos como mensajes SMS al número del rastreador. Ajuste el orden únicamente cuando el manual del dispositivo indique un flujo diferente recomendado.

## Notas de configuración

- La configuración por SMS es comúnmente compatible con el LL303; confirme que su equipo acepta comandos SMS y que la configuración remota por SMS esté habilitada.
- Las versiones de firmware y las revisiones de hardware pueden cambiar el comportamiento de los comandos o los parámetros soportados; consulte la documentación de Concox si un comando no es aceptado.
- Elija TCP o UDP según la preferencia del instalador; Plaspy acepta ambos y detectará automáticamente el protocolo usado por el dispositivo.
- Use los marcadores de APN proporcionados y verifique APN, usuario y contraseña con su operador móvil antes de enviar los comandos.
- Los ajustes del servidor Plaspy usan el mismo puerto para todos los dispositivos compatibles, lo que simplifica los despliegues con múltiples unidades

## Por qué usar Plaspy con esta configuración

Configurar el Concox LL303 para que reporte a Plaspy brinda a las organizaciones visibilidad centralizada del movimiento de vehículos y activos, con ajustes de servidor consistentes que simplifican despliegues a gran escala. Usar el endpoint compartido de Plaspy y la detección automática de protocolo reduce la complejidad por dispositivo y ayuda a poner los rastreadores en funcionamiento rápidamente.

Para saber más sobre Plaspy y cómo soporta flotas de rastreadores visite https://www.plaspy.com. Para obtener los detalles más recientes de configuración por modelo, notas de firmware y la documentación oficial de Concox, verifique la información en el sitio del fabricante https://www.iconcox.com/ ya que los métodos de configuración y el comportamiento del dispositivo pueden cambiar con el tiempo.
