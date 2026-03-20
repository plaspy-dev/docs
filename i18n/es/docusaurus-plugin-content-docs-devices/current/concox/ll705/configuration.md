---
slug: /concox/ll705/configuration
id: ll705-configuration
sidebar_label: Configuration
title: Concox - LL705 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Concox LL705 con ajustes de servidor Plaspy, comandos SMS y pasos prácticos para integrarlo
keywords:
  - Configuración Concox LL705
  - Configuración Concox LL705 para Plaspy
  - Configuración de servidor LL705
  - Configuración rastreador GPS LL705
  - Configuración rastreador de activos Concox
  - Configuración de dispositivo Plaspy
  - Comandos SMS para rastreador GPS
  - Configuración APN LL705
  - Ajustes GPRS LL705
  - Integración Concox LL705
---

# Concox - Configuración LL705

Esta página explica el contexto público de configuración para utilizar el rastreador Concox LL705 con Plaspy. Reúne los ajustes de servidor de Plaspy y los comandos SMS y pasos de uso común que se publican para configurar el LL705 y que reporte al servicio de Plaspy. Use esta guía para preparar el equipo para la comunicación con la plataforma Plaspy y para comprender el flujo práctico para poner un LL705 en línea.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LL705 puede configurarse mediante comandos SMS que proporciona el fabricante o con herramientas de configuración; los ejemplos a continuación reflejan comandos públicos y valores específicos de Plaspy para servidor, IP y puerto.

## Resumen de la configuración

El proceso de configuración prepara el LL705 para enviar posiciones y mensajes de estado a Plaspy, de modo que el dispositivo sea visible y gestionable dentro de la plataforma. La configuración habitual se centra en la conectividad de red, el endpoint de servidor correcto, la programación de envíos y habilitar GPRS para que el rastreador pueda transmitir datos.

- Configure el dispositivo para usar Plaspy como su servidor GPRS, de modo que la telemetría apunte al endpoint de ingestión de Plaspy.
- Establezca el APN y el modo GPRS para que el LL705 pueda registrarse en la red de datos móviles.
- Defina los intervalos de reporte (por ejemplo un temporizador periódico) para que el dispositivo transmita con la frecuencia deseada.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy después de aplicar la configuración.
- Use comandos de verificación para comprobar los parámetros GPRS y del servidor del equipo cuando estén disponibles.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Plaspy usa el mismo puerto para todos los dispositivos compatibles y acepta conexiones por nombre de dominio o por IP. Configure el rastreador para usar d.plaspy.com o la IP 54.85.159.138 con puerto 8888; elija UDP o TCP según lo requiera su equipo o la preferencia del instalador.

## Requisitos típicos antes de empezar

- Un dispositivo LL705 alimentado y accesible, con acceso a la ranura SIM y a las interfaces de instalación.
- Una tarjeta SIM activa con plan de datos y el APN correcto para el operador móvil.
- Capacidad para enviar comandos SMS al equipo o acceso a la herramienta de configuración recomendada por Concox.
- Información básica del dispositivo como el IMEI para identificar el rastreador en Plaspy una vez que se conecte.
- Conocimiento de si su despliegue requiere seleccionar UDP o TCP como transporte.
- Acceso a la documentación oficial de Concox o al soporte del proveedor para detalles específicos de firmware.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el LL705 envía posiciones y mensajes de estado al endpoint de ingestión de Plaspy para que el dispositivo sea visible en los paneles y flujos de trabajo de Plaspy. El rastreador se ajusta para reportar al endpoint y puerto compartidos de Plaspy, y la plataforma detecta automáticamente el protocolo.

- El rastreador queda configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Los datos se transmiten mediante UDP o TCP según la selección de transporte del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere un registro de protocolo por separado en la plataforma.
- Las actualizaciones periódicas de posición (basadas en temporizador) y los reportes de eventos se enrutan al endpoint de Plaspy para su procesamiento.
- Una vez conectado, el dispositivo aparece en Plaspy y puede integrarse en geocercas, notificaciones y reportes históricos.

## Flujo de configuración común

1. Acceda al método de configuración oficial de Concox para el LL705, como comandos SMS o el software/documentación que proporcione Concox.
2. Establezca el APN del operador usando el comando APN para que el rastreador use datos móviles.
3. Introduzca d.plaspy.com o 54.85.159.138 como dirección del servidor GPRS en la configuración del dispositivo.
4. Configure el puerto del servidor en 8888 y seleccione UDP o TCP si el dispositivo exige una elección explícita.
5. Aplique o guarde la configuración en el equipo y habilite el modo GPRS si es necesario.
6. Reinicie el dispositivo si las instrucciones del fabricante lo recomiendan para asegurar que los nuevos ajustes entren en vigor.
7. Valide que el dispositivo reporte a Plaspy comprobando su visibilidad en la plataforma y usando comandos de verificación disponibles como GPRSSET.

## Comandos de ejemplo para la configuración

Para configurar el rastreador envíe los siguientes comandos SMS (respete el orden cuando se indique). Estos comandos aparecen en la guía pública de Concox para el LL705; adapte los marcadores a su operador y despliegue.

- Reinicio de fábrica opcional (usar solo cuando sea necesario en la provisión inicial)
```
FACTORY#
```

- Ajustar la zona horaria a UTC+0
```
GMT,E,0#
```

- Establecer el APN del operador
```
APN,[apn]#
```
Si su APN requiere usuario o contraseña mantenga los marcadores:
```
APN,[apn],[apnu],[apnp]#
```
Nota: [apn] es la cadena APN de su operador. [apnu] y [apnp] son los campos opcionales de usuario y contraseña del APN.

- Configurar el servidor GPRS por dominio (recomendado)
```
SERVER,1,d.plaspy.com,8888,0#
```

- O configurar el servidor GPRS por IP
```
SERVER,0,54.85.159.138,8888,0#
```

- Ajustar el intervalo de reporte a cada 60 segundos (dos variantes comunes)
```
TIMER,60#
```
o
```
TIMER,60,60#
```

- Habilitar modo GPRS
```
GPRSON,1#
```

- Verificar parámetros actuales de GPRS y servidor
```
GPRSSET#
```

Estos comandos se envían al dispositivo por SMS según la guía pública de Concox. Mantenga los marcadores como [apn] sin sustituirlos hasta que los reemplace por los valores del operador apropiados para su SIM.

## Observaciones sobre la configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar el soporte de comandos o la sintaxis exacta; siempre confirme los comandos según la versión de firmware del dispositivo o la documentación oficial de Concox.
- El LL705 soporta configuración por SMS como se muestra en los ejemplos; algunos despliegues pueden usar herramientas del proveedor o plataformas de gestión de dispositivos en su lugar.
- Elija transporte UDP o TCP según la preferencia del instalador y las condiciones de la red; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- El comando SERVER puede usar d.plaspy.com o la IP directa 54.85.159.138; ambos apuntan al mismo endpoint de ingestión de Plaspy en el puerto 8888.
- Verifique el APN, la provisión de la SIM y el modo GPRS (GPRSON) antes de esperar cargas de datos exitosas a Plaspy.

## Por qué usar Plaspy con esta configuración

Utilizar el Concox LL705 con Plaspy ofrece a las organizaciones un rastreador de activos robusto y de larga duración junto con una plataforma que centraliza la telemetría de dispositivos, alertas y reportes históricos. Configurar el LL705 para que reporte a Plaspy proporciona visibilidad casi en tiempo real de ubicaciones y eventos del dispositivo, soporta flujos de alerta como manipulación o batería baja, y simplifica la gestión a gran escala cuando se despliegan muchos activos.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the latest device-specific commands, firmware notes, and manufacturer details verify configuration methods on the Concox website https://www.iconcox.com/. Manufacturer specifications and setup methods can change over time so confirm current details with Concox before large scale provisioning.
