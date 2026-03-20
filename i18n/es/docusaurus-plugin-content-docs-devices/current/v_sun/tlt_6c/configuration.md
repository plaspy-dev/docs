---
slug: /v_sun/tlt_6c/configuration
id: tlt_6c-configuration
sidebar_label: Configuration
title: V-SUN - TLT-6C Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador V-SUN TLT-6C a Plaspy con comandos SMS y ajustes de servidor
keywords:
  - V-SUN TLT-6C
  - configuración V-SUN TLT-6C
  - configuración TLT-6C
  - configuración Plaspy
  - servidor GPS Plaspy
  - configuración de rastreador GPS
  - configuración de seguimiento de vehículos
  - comandos SMS TLT-6C
  - configuración rastreador V-SUN
  - configuración de plataforma de seguimiento
---

# V-SUN - TLT-6C Configuración

Esta página presenta el contexto público de configuración para usar el terminal vehicular V-SUN TLT-6C con Plaspy. Reúne los ajustes de servidor de Plaspy y la secuencia de configuración por SMS de uso común publicada para este modelo, de modo que pueda preparar el dispositivo para reportar datos a la plataforma Plaspy. El contenido aquí está pensado para ayudar a usuarios técnicos a aplicar los comandos y parámetros públicamente disponibles necesarios para enrutar la telemetría del dispositivo hacia Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El modelo TLT-6C admite configuración por SMS y reporte por GPRS según la guía pública que se muestra a continuación; cuando se indican comandos de ejemplo se utiliza la contraseña por defecto del dispositivo 0000, tal como aparece en las instrucciones públicas.

## Resumen de la configuración

El objetivo de este proceso es preparar el TLT-6C para comunicarse con Plaspy y validar que la telemetría del dispositivo aparezca en la plataforma. El flujo público típico usa comandos SMS para configurar el APN y el servidor, y luego activa GPRS y el reporte GPS para que el dispositivo envíe actualizaciones de posición a Plaspy.

- Apuntar el dispositivo al endpoint y puerto del servidor de Plaspy usados por todos los dispositivos en la plataforma.
- Configurar el APN del operador y las credenciales necesarias para que el dispositivo tenga conectividad de datos móviles.
- Establecer los intervalos de reporte para movimiento y reposo de modo que las actualizaciones de ubicación se ajusten a sus necesidades operativas.
- Activar el reporte por GPRS y el funcionamiento del GPS para que el dispositivo empiece a enviar telemetría a Plaspy.
- Verificar la conectividad del dispositivo en Plaspy una vez aplicada la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para conexiones entrantes

Nota: Todos los dispositivos en Plaspy usan el mismo puerto. Use el dominio del servidor o la IP cuando el dispositivo lo soporte y seleccione UDP o TCP según lo requiera su equipo.

## Requisitos típicos antes de la configuración

- Un TLT-6C alimentado y accesible con la contraseña por defecto o la contraseña conocida del dispositivo para la configuración (los comandos públicos usan 0000).
- Una tarjeta UIM o SIM válida con un plan de datos activo y los ajustes APN correctos del operador móvil.
- Capacidad para enviar SMS al dispositivo desde un número móvil de configuración si se requiere la configuración por SMS.
- Acceso a la documentación del fabricante o al software de instalación correspondiente a su revisión de firmware.
- Un plan de prueba para validar que el dispositivo reporte al servidor Plaspy después de configurar.

## Cómo se conecta este rastreador a Plaspy

El TLT-6C se configura para enviar datos de posición y estado al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir la telemetría y presentarla en la plataforma. Una vez que GPRS está habilitado y se ha establecido la información del servidor, el dispositivo envía actualizaciones periódicas al endpoint de Plaspy.

- El dispositivo se apunta al endpoint 54.85.159.138 o al dominio d.plaspy.com en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según las opciones del dispositivo.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.
- Los intervalos de reporte y los umbrales de movimiento/reposo determinan con qué frecuencia se envían las actualizaciones de ubicación.
- Tras una configuración exitosa, la visibilidad del dispositivo y los eventos deberían aparecer en Plaspy para monitoreo y alertas.

## Flujo común de configuración

1. Acceda al método oficial de configuración del fabricante o al software y confirme la contraseña del dispositivo (a menudo se usan comandos SMS para el TLT-6C).
2. Ingrese la dirección del servidor de Plaspy proporcionando d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del servidor del dispositivo.
3. Establezca el puerto 8888 como puerto de destino utilizado por Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP si el dispositivo solicita la selección de transporte y elija según sus requisitos de red.
5. Configure el APN del operador y cualquier usuario o contraseña del APN según lo requiera su proveedor de SIM.
6. Aplique o guarde la configuración y envíe los comandos SMS si está usando una configuración basada en SMS.
7. Reinicie el dispositivo si el fabricante lo requiere para que los nuevos ajustes entren en vigor.
8. Valide que el dispositivo reporte a Plaspy y que las actualizaciones de posición aparezcan en la plataforma.

## Comandos de configuración de ejemplo

La guía pública del TLT-6C muestra comandos SMS utilizados para preparar el dispositivo. La contraseña por defecto usada en estos ejemplos es 0000. Envíe estos comandos como mensajes SMS al número del dispositivo en el orden indicado durante la configuración inicial.

1. Reinicio de fábrica inicial opcional (usar solo si necesita devolver el dispositivo a valores de fábrica).
```
*RESET#0000##
```

2. Establecer el APN del operador. Reemplace los marcadores según corresponda:
```
#803#0000#[apn]#[apnu]#[apnp]##
```
- [apn] es el APN del operador móvil.
- [apnu] es el nombre de usuario del APN si lo exige el operador.
- [apnp] es la contraseña del APN si lo exige el operador.
- Omitir los campos de usuario y contraseña si su operador solo requiere el APN.

3. Configurar el servidor GPRS al endpoint y puerto de Plaspy:
```
#804#0000#54.85.159.138#8888##
```
- El ejemplo usa la IP del servidor Plaspy. Si su dispositivo soporta nombres de dominio, puede usar d.plaspy.com cuando corresponda.

4. Establecer el intervalo de actualización en movimiento (ejemplo mostrado en la guía pública):
```
#805#0000#120#1##
```
- Esto ajusta un parámetro de intervalo reportado según el ejemplo público. Confirme la semántica exacta de los tiempos en la documentación del proveedor.

5. Establecer el intervalo de actualización en reposo (ejemplo mostrado en la guía pública):
```
#809#0000#120#1##
```

6. Habilitar el modo GPRS para que el dispositivo use datos móviles para enviar reportes:
```
7100000
```

7. Habilitar el modo de reporte GPS si es necesario:
```
2220000
```

Siga el orden de comandos cuando el fabricante lo recomiende. Mantenga la contraseña por defecto 0000 o reemplace por la contraseña configurada del dispositivo si la ha cambiado.

## Notas de configuración

- La sintaxis exacta de los comandos y su comportamiento pueden variar según la versión de firmware y la revisión de hardware; confirme siempre con la documentación del equipo para su unidad.
- La configuración por SMS se muestra en la guía pública para el TLT-6C; algunas instalaciones pueden utilizar herramientas de configuración del fabricante o configuraciones cableadas en su lugar.
- Al establecer el APN, verifique las credenciales del operador con su proveedor móvil antes de enviar los comandos.
- Elija UDP o TCP según la capacidad del dispositivo y las condiciones de la red; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- Use el reinicio de fábrica solo cuando sea necesario; restablecer eliminará configuraciones personalizadas y debe considerarse una medida opcional.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el V-SUN TLT-6C permite a gerentes de flota y operadores centralizar la visibilidad de vehículos y la monitorización de eventos, aprovechando ajustes de servidor comunes y un proceso de detección automática de protocolos. Apuntar el TLT-6C al servidor y puerto compartidos de Plaspy simplifica el despliegue y reduce las diferencias de configuración por dispositivo en el lado de la plataforma.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific setup steps, firmware notes, and manufacturer details verify information at the V-SUN website http://www.v-sun.cc/ since device behavior and configuration methods can change over time.
