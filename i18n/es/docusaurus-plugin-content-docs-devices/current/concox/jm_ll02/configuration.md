---
slug: /concox/jm_ll02/configuration
id: jm_ll02-configuration
sidebar_label: Configuration
title: Concox - JM-LL02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Concox JM-LL02 con Plaspy, incluye ajustes de servidor y comandos SMS para conectar su rastreador
keywords:
  - Concox JM-LL02 configuración
  - Concox JM-LL02 instalación
  - JM-LL02 configuración Plaspy
  - configuración rastreador GPS Concox
  - configuración servidor JM-LL02
  - configuración rastreador Plaspy
  - seguimiento vehicular Concox JM-LL02
  - configuración SMS JM-LL02
  - ajustes APN JM-LL02
  - configuración rastreador de activos Concox
---

# Concox - Configuración del JM-LL02

Esta página explica el contexto público de configuración para usar el rastreador Concox JM-LL02 con Plaspy. Describe los ajustes de servidor que Plaspy requiere, muestra comandos SMS prácticos comúnmente usados para configurar el dispositivo para el reporte, y detalla el flujo de trabajo general para que el rastreador sea visible en la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Sin embargo, los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El JM-LL02 admite aprovisionamiento por SMS y Bluetooth y puede configurarse para reportar a Plaspy usando los ajustes públicos que se documentan a continuación.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el JM-LL02 para comunicarse de forma fiable con Plaspy, de modo que la telemetría de ubicación y eventos aparezca en su cuenta. Una configuración típica define el APN, apunta el dispositivo al servidor de Plaspy, confirma el intervalo de reporte y habilita GPRS o el modo de datos móviles.

- Apuntar el rastreador al endpoint del servidor de Plaspy para que pueda abrir una sesión de datos con la plataforma.
- Configurar el APN del dispositivo y las credenciales del operador si son necesarias para que se conecte a la red móvil.
- Establecer el temporizador de reporte para que las actualizaciones de posición lleguen con la frecuencia esperada en Plaspy.
- Habilitar GPRS o el modo de datos del dispositivo para permitir la transmisión de telemetría en vivo.
- Validar la configuración con un comando de verificación y confirmar que el dispositivo aparece en Plaspy.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un JM-LL02 con batería cargada y una tarjeta SIM activa provisionada para datos en la red móvil que vaya a utilizar.
- Acceso al método de configuración que prefiera, como comandos SMS o aprovisionamiento por Bluetooth.
- El APN del operador móvil y cualquier nombre de usuario o contraseña de APN necesarios para datos GPRS.
- Un medio para enviar SMS al número del rastreador si va a usar configuración por SMS.
- Acceso básico a su cuenta de Plaspy para verificar que el dispositivo aparece y está reportando después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El JM-LL02 envía telemetría de ubicación y eventos al endpoint del servidor de Plaspy para que los dispositivos sean visibles en los mapas y en los flujos de alertas. Una vez que se apunta al endpoint compartido de Plaspy y se dispone de una conexión de datos operativa, el rastreador abrirá una sesión de datos y transmitirá actualizaciones periódicas y notificaciones de eventos.

- El dispositivo reporta al endpoint compartido de Plaspy d.plaspy.com o a la dirección IP equivalente 54.85.159.138.
- Todos los datos se envían al puerto 8888 en el servidor de Plaspy, usando UDP o TCP según la selección de transporte del dispositivo.
- Plaspy detecta automáticamente el protocolo correcto del rastreador, por lo que el mismo puerto se usa en los modelos compatibles.
- Las actualizaciones de ubicación y las alertas de evento se transmiten según el intervalo configurado por TIMER, de modo que Plaspy recibe telemetría de forma regular.
- Se pueden usar comandos de verificación para confirmar los ajustes de GPRS y servidor antes de validar el reporte en Plaspy.

## Flujo de trabajo frecuente de configuración

1. Acceda al método oficial de configuración de Concox que vaya a utilizar, por ejemplo comandos SMS o aprovisionamiento por Bluetooth con una herramienta aprobada por Concox.
2. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la dirección IP 54.85.159.138 según corresponda.
3. Configure el puerto del servidor en 8888 para que el dispositivo lo use al reportar.
4. Seleccione el protocolo de transporte si la interfaz de configuración del dispositivo lo solicita, eligiendo UDP o TCP en el puerto 8888.
5. Configure el APN y las credenciales de APN que requiera su operador móvil para que el rastreador pueda establecer una sesión de datos GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el flujo de trabajo del equipo requieren un reinicio para aplicar los ajustes.
7. Valide que el rastreador reporta a Plaspy comprobando la visibilidad del dispositivo en su cuenta de Plaspy y, si está disponible, usando los comandos de verificación del equipo.

## Comandos de configuración ejemplo

El JM-LL02 puede configurarse mediante comandos SMS. A continuación se muestran los comandos SMS públicos extraídos de la documentación del dispositivo. Conserve los marcadores de posición al suministrar credenciales del operador.

- Reinicio de fábrica opcional (usar solo cuando sea necesario para resolución de problemas o en la configuración inicial)
```text
FACTORY#
```

- Ajustar la zona horaria del dispositivo a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
```text
APN,[apn]#
```
Si su operador requiere nombre de usuario y contraseña para el APN, incluya los campos opcionales
```text
APN,[apn],[apnu],[apnp]#
```
Explicación de los marcadores:
- [apn] es el nombre del APN de su operador móvil
- [apnu] es el nombre de usuario del APN si se requiere
- [apnp] es la contraseña del APN si se requiere

- Establecer el servidor GPRS para usar el dominio de Plaspy (la selección UDP o TCP se gestiona por separado)
```text
SERVER,1,d.plaspy.com,8888,0#
```
O establecer el servidor GPRS usando la IP del servidor de Plaspy
```text
SERVER,0,54.85.159.138,8888,0#
```
(Las dos formas muestran entradas de servidor basadas en dominio y en IP. Use la que sea apropiada para su instalación.)

- Establecer el intervalo de actualización de posición cada 60 segundos
```text
TIMER,60#
```
O una sintaxis alternativa de intervalo
```text
TIMER,60,60#
```

- Habilitar el modo GPRS
```text
GPRSON,1#
```

- Verificar la configuración actual de GPRS y servidor
```text
GPRSSET#
```

## Notas de configuración

- El flujo de comandos SMS anterior es el método público documentado para el JM-LL02; el aprovisionamiento por Bluetooth puede estar disponible para configuraciones in situ y suele ser más rápido en despliegues masivos.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que solo necesita apuntar el dispositivo a d.plaspy.com o a 54.85.159.138.
- Las revisiones de firmware o las herramientas del proveedor pueden cambiar el formato de los comandos y las opciones disponibles; revise siempre las notas de firmware del dispositivo si un comando funciona de forma distinta.
- Elija UDP o TCP según la preferencia del instalador y las condiciones de la red; ambos transportes son compatibles en el puerto 8888 para Plaspy.
- Si se utiliza el comando de reinicio de fábrica, considérelo opcional y ejecútelo únicamente cuando sea necesario para limpieza o resolución de problemas.

## Por qué usar Plaspy con esta configuración

Configurar el JM-LL02 para que reporte a Plaspy ofrece a las organizaciones visibilidad centralizada de ubicación, telemetría y alertas de eventos desde rastreadores de activos resistentes y de larga duración. La combinación de larga autonomía en espera, detección de manipulación y aprovisionamiento sencillo por SMS o Bluetooth hace al JM-LL02 una opción práctica para remolques, contenedores, flotas de alquiler y otros activos móviles que alimentan datos en los paneles y flujos de trabajo de Plaspy.

Learn more about Plaspy and how devices integrate on the main website https://www.plaspy.com. For the most current device specific configuration steps, firmware details, and official documentation for the JM-LL02, please verify information with Concox at https://www.iconcox.com/ as manufacturer specifications and setup methods can change over time.
