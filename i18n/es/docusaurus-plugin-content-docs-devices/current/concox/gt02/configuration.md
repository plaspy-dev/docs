---
slug: /concox/gt02/configuration
id: gt02-configuration
sidebar_label: Configuration
title: Concox - GT02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Concox GT02 con ajustes de servidor Plaspy y comandos SMS de ejemplo para puesta en marcha rápida
keywords:
  - Configuración Concox GT02
  - Configuración GT02
  - Concox GT02 Plaspy
  - Configuración servidor GT02
  - Configuración GPS GT02
  - Configuración tracker Concox
  - Rastreo vehicular GT02
  - Configuración plataforma GPS
  - Configuración rastreador Plaspy
  - Comandos SMS GT02
---

# Concox - Configuración GT02

Esta página describe el contexto público de configuración para usar el rastreador Concox GT02 con Plaspy. Explica los ajustes de servidor compartidos que Plaspy necesita, los pasos habituales de preparación y comandos SMS prácticos que se utilizan comúnmente para apuntar un GT02 al servicio Plaspy y habilitar el rastreo en tiempo real.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el equipo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del fabricante. El GT02 soporta GPS, GSM y GPRS e incluye soporte de configuración por SMS, lo que se refleja en los comandos de ejemplo que aparecen más abajo.

## Resumen de la configuración

Configurar un GT02 para Plaspy implica preparar el equipo para comunicarse por GPRS con el endpoint del servidor Plaspy, asegurarse de que el dispositivo tenga el APN y los parámetros de transporte correctos, y validar que los informes periódicos lleguen a la plataforma.

- Configure el APN del operador y las credenciales si son necesarias para que los datos GPRS estén disponibles.
- Apunte el dispositivo a la dirección del servidor Plaspy usando los ajustes de servidor compartidos.
- Configure el intervalo de reporte para que las posiciones se transmitan con la frecuencia deseada.
- Active el modo GPRS y verifique los parámetros usando el comando de verificación del dispositivo.
- Valide la conectividad en Plaspy para confirmar que el dispositivo aparece en línea y envía actualizaciones de ubicación.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: UDP o TCP (el dispositivo puede configurarse con cualquiera de los dos)
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto en Plaspy

## Requisitos típicos antes de la configuración

- Un dispositivo GT02 alimentado, ya sea por su fuente interna o conectado a la alimentación del vehículo.
- Una tarjeta SIM activa con datos GPRS y capacidad de SMS instalada en el rastreador.
- Información del APN del operador, incluyendo usuario y contraseña del APN si aplica.
- Acceso a un método para enviar comandos SMS al dispositivo (teléfono, módem o herramienta del fabricante).
- Acceso a la guía de instalación o al manual de configuración del fabricante para la versión de firmware correspondiente.
- Posibilidad de reiniciar el rastreador después de la configuración si es necesario.

## Cómo se conecta este rastreador a Plaspy

El GT02 envía datos de ubicación y del dispositivo por GPRS al endpoint y puerto compartido de Plaspy. Una vez configurado con el APN y los parámetros del servidor correctos, el rastreador reportará según el intervalo de temporizador configurado para que Plaspy pueda mostrar la ubicación y el estado.

- El rastreador usa GPRS para abrir una conexión de datos hacia d.plaspy.com o la IP del servidor Plaspy en el puerto 8888.
- Puede configurar el dispositivo para usar UDP o TCP como protocolo de transporte.
- Plaspy detecta automáticamente el protocolo que usa el rastreador y acepta la conexión en el puerto compartido.
- Los reportes periódicos se disparan por la configuración del temporizador del equipo, de modo que las actualizaciones llegan a Plaspy en el intervalo seleccionado.
- Plaspy presenta posiciones e información básica de conectividad del dispositivo cuando el rastreador reporta correctamente.

## Flujo de trabajo común de configuración

1. Consulte el método oficial de configuración del Concox GT02 o la guía de instalador para su firmware y región.
2. Verifique que la SIM tenga datos activos y anote las credenciales APN para usarlas como marcadores en los comandos del equipo.
3. Ingrese la dirección del servidor Plaspy enviando d.plaspy.com o la IP 54.85.159.138 como servidor GPRS y configure el puerto 8888.
4. Elija UDP o TCP en el dispositivo si es necesario seleccionar el transporte.
5. Aplique o guarde la configuración, habilite el modo GPRS y reinicie el dispositivo si el rastreador lo requiere.
6. Valide que el rastreador reporte a Plaspy y que las actualizaciones de ubicación lleguen en el intervalo de temporizador configurado.

## Comandos de configuración de ejemplo

El Concox GT02 soporta comandos de configuración por SMS. A continuación aparecen los comandos públicos comunes en el orden que frecuentemente se usan durante la puesta en marcha. Mantenga los marcadores de posición tal como se muestran y reemplace [apn], [apnu] y [apnp] con los valores de APN de su operador cuando sea necesario.

- Reinicio opcional a valores de fábrica (usar solo si necesita devolver el equipo a configuración por defecto):
```
FACTORY#
```

- Ajustar zona horaria a UTC 0:
```
GMT,E,0#
```

- Establecer el APN del operador. Reemplace [apn] por su APN. Si su operador requiere usuario y contraseña incluya [apnu] y [apnp]:
```
APN,[apn]#
```
o con credenciales:
```
APN,[apn],[apnu],[apnp]#
```

- Configurar el servidor GPRS para usar Plaspy por dominio (la elección UDP/TCP es a nivel del dispositivo; el puerto es 8888):
```
SERVER,1,d.plaspy.com,8888,0#
```
Alternativa usando la IP del servidor Plaspy:
```
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización a cada 60 segundos. Algunos firmwares aceptan cualquiera de las dos formas:
```
TIMER,60#
```
o
```
TIMER,60,60#
```

- Activar modo GPRS:
```
GPRSON,1#
```

- Verificar parámetros actuales de GPRS y servidor:
```
GPRSSET#
```

Notas sobre los marcadores de posición:
- [apn] es la cadena APN proporcionada por el operador móvil.
- [apnu] es el usuario del APN cuando se requiere.
- [apnp] es la contraseña del APN cuando se requiere.

Envíe cada comando como un SMS individual al número del GT02 siguiendo la documentación del dispositivo sobre el formato de SMS y cualquier sintaxis requerida como terminadores de comando.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los comandos o los parámetros disponibles; siempre verifique los comandos según el firmware y las notas del instalador de su dispositivo.
- El GT02 admite configuración vía SMS, lo cual es útil cuando no hay una herramienta de configuración para PC disponible o para instalaciones remotas.
- Elija UDP o TCP según el comportamiento de la red local; Plaspy acepta ambos y detecta automáticamente el protocolo.
- Plaspy usa el mismo puerto (8888) para todos los dispositivos compatibles, por lo que debe configurar el puerto 8888 en el rastreador.
- Confirme las credenciales APN con el operador móvil antes de intentar el registro GPRS para evitar fallos de conexión.

## Por qué usar Plaspy con esta configuración

Usar el Concox GT02 con Plaspy ofrece una forma sencilla de centralizar la visibilidad de vehículos y activos. Con el GT02 reportando por GPRS al endpoint compartido de Plaspy, las organizaciones obtienen actualizaciones de posicionamiento continuas y una configuración de servidor consistente entre dispositivos.

Learn more about Plaspy and how it handles device connectivity and tracking on the Plaspy website https://www.plaspy.com. For the latest device specific details, firmware guidance, and manufacturer documentation confirm the current setup methods on the Concox website https://www.iconcox.com/ since manufacturer specifications and firmware behavior can change over time.
