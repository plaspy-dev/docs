---
slug: /winrich/t18/configuration
id: t18-configuration
sidebar_label: Configuration
title: Winrich - T18 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Winrich T18 con servidores Plaspy para rastreo GPS y alertas
keywords:
  - configuración Winrich T18
  - instalación Winrich T18
  - configuración servidor T18
  - integración T18 Plaspy
  - configuración reloj GPS Winrich
  - configuración software rastreo T18
  - configuración rastreador Plaspy
  - configuración rastreador GPS
  - instalación rastreador seguridad personal
  - configuración GPS portátil
---

# Winrich - T18 Configuración

Esta página describe el contexto público de configuración para usar el reloj rastreador GPS Winrich T18 con la plataforma Plaspy. Reúne los detalles prácticos y los comandos públicos que puede usar para apuntar un dispositivo T18 a los servidores de Plaspy, de modo que el equipo envíe ubicación, alertas SOS y telemetría al entorno Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; cuando están disponibles, aquí se incluyen los comandos SMS del Winrich T18 comúnmente usados para aplicar los valores del servidor Plaspy.

## Visión general de la configuración

Configurar un T18 para Plaspy se centra en preparar el dispositivo para comunicarse con el endpoint del servidor Plaspy y verificar que informe correctamente. En el T18 esto suele implicar usar la configuración vía SMS para establecer parámetros de red y reporte, y luego confirmar la visibilidad en Plaspy.

- Configure el servidor GPRS del equipo con la dirección y el puerto de Plaspy para que el T18 envíe datos de ubicación y eventos.
- Ajuste el APN y cualquier parámetro de la SIM necesarios para que el T18 pueda establecer conexiones de datos.
- Seleccione el protocolo de transporte (UDP o TCP) en el dispositivo si es necesario y use el puerto 8888 de Plaspy, común para todos los dispositivos.
- Valide los ajustes con los comandos de verificación del T18 y confirme que el dispositivo aparece en el panel de Plaspy.
- Ajuste el intervalo de reporte y la zona horaria en el dispositivo según sus necesidades de monitoreo y el contexto horario local.

## Ajustes del servidor Plaspy

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- transporte compatible UDP o TCP
- detección automática de protocolo en Plaspy

Nota: Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador, por lo que solo necesita establecer la dirección del servidor y el puerto en el dispositivo y elegir un transporte si el equipo lo requiere.

## Requisitos habituales antes de la configuración

- Un dispositivo T18 con batería y accesible, con una tarjeta SIM funcional que pueda registrarse en la red GSM.
- APN y, si aplica, nombre de usuario y contraseña del APN provistos por el operador para datos GPRS.
- Capacidad para enviar SMS al dispositivo para la configuración basada en SMS o acceso a la herramienta de configuración del fabricante si está disponible.
- Acceso a la documentación del dispositivo o al sitio de soporte del fabricante para confirmar el formato de comandos según el modelo.
- Una cuenta en Plaspy y permisos para agregar o verificar dispositivos en la plataforma para la validación final.

## Cómo se conecta este tracker a Plaspy

El Winrich T18 transmite posición y datos de eventos por GSM al endpoint de Plaspy que usted configure en el dispositivo. Una vez que el equipo esté apuntando al servidor y puerto de Plaspy, la plataforma procesa la telemetría y la presenta para monitoreo en tiempo real, alertas y reproducción de historial.

- El T18 reporta actualizaciones de ubicación por GPS y LBS al endpoint de Plaspy.
- Las alertas SOS y otros eventos se envían desde el T18 a Plaspy y se muestran a los usuarios autorizados.
- La telemetría del dispositivo, como nivel de batería y actualizaciones periódicas de ubicación, se reenvía a Plaspy para el monitoreo operativo.
- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy para que sea visible en el panel.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar más protocolos en el servidor.

## Flujo común de configuración

1. Acceda al método oficial de configuración Winrich para el T18, normalmente comandos SMS enviados al reloj o una herramienta proporcionada por el fabricante.
2. Introduzca la dirección del servidor Plaspy configurando d.plaspy.com o la IP 54.85.159.138 en el dispositivo.
3. Establezca el puerto del dispositivo en 8888, recordando que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Seleccione UDP o TCP en el equipo si el T18 requiere especificar el transporte para reportes GPRS.
5. Aplique y guarde la configuración en el dispositivo; en métodos por SMS esto implica enviar la secuencia de comandos adecuada.
6. Reinicie el dispositivo si el fabricante lo requiere para aplicar los nuevos ajustes de red.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad y las actualizaciones de ubicación entrantes en la plataforma.

Si usa SMS para configurar el dispositivo, envíe los comandos en el orden que recomiende el fabricante y confirme cada paso con los comandos de verificación del equipo.

## Ejemplos de comandos de configuración

El Winrich T18 soporta configuración por SMS. A continuación se muestran los comandos SMS públicos más comunes en el orden recomendado para la configuración inicial. Conserve y reemplace los marcadores donde sea necesario.

- Restauración de fábrica (paso inicial opcional)
```text
940#
```

- Establecer la zona horaria a UTC 0
```text
801#W0#
```

- Configurar el APN del operador
Nota: Reemplace [apn] con el APN de su operador. Si el operador requiere usuario y contraseña para el APN, incluya [apnu] y [apnp] según lo proporcionado por su operador.
```text
802#[apn]#[apnu]#[apnp]#
```

- Establecer el servidor GPRS a la IP y puerto de Plaspy
```text
803#54.85.159.138#8888#
```

- Establecer el intervalo de actualización a 60 segundos
```text
730#60#
```

- Comprobar la configuración actual
```text
886#
```

- Comprobar el estado del dispositivo
```text
902#
```

Envíe cada comando SMS al T18 desde un número autorizado. Cuando el comando de APN admite campos vacíos para usuario o contraseña, omita esos marcadores si su operador no los requiere.

## Notas de configuración

- El T18 soporta configuración por SMS como se mostró arriba; confirme que su instalador o flujo de aprovisionamiento incluye derechos de provisionamiento por SMS y que el dispositivo tiene cobertura GSM.
- Las diferencias de firmware y las revisiones de hardware pueden cambiar el comportamiento o la sintaxis requerida de los comandos. Si un comando falla, verifique la revisión de firmware del dispositivo y consulte la documentación del fabricante.
- Elija UDP o TCP según la preferencia de su instalador; Plaspy acepta ambos, pero la selección de transporte se realiza en el dispositivo si es necesario.
- Recuerde que Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del equipo, por lo que la dirección del servidor y el puerto son los valores principales a configurar.
- Si utiliza un APN de operador que requiere autenticación, incluya el nombre de usuario y la contraseña en el comando de APN tal como se muestran en los ejemplos.

## Por qué usar Plaspy con esta configuración

Usar el Winrich T18 con Plaspy ofrece una vía sencilla para obtener visibilidad continua de ubicación, gestión de alertas SOS y monitoreo de eventos para cuidadores e instituciones. Configurar el reloj para que reporte a Plaspy centraliza las alertas, la reproducción del historial y la supervisión, de modo que los responsables puedan responder rápidamente a incidentes y mantener un registro confiable de la telemetría del dispositivo.

Para obtener más información sobre Plaspy y cómo soporta rastreadores portátiles como el Winrich T18, visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique la información de instalación más reciente en el sitio de Winrich http://www.winrichgroup.com/en/.
