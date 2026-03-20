---
slug: /istartek/pt24/configuration
id: pt24-configuration
sidebar_label: Configuration
title: iStartek - PT24 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el iStartek PT24 y conectarlo a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - configuración iStartek PT24
  - instalación iStartek PT24
  - configuración servidor PT24
  - configuración PT24 Plaspy
  - configuración rastreador GPS PT24
  - integración rastreador Plaspy
  - configuración SMS PT24
  - ajustes APN PT24
  - guía conectividad PT24
  - comandos dispositivo PT24
---

# iStartek - Configuración PT24

Esta página describe el contexto público de configuración para usar el rastreador solar iStartek PT24 con Plaspy. Explica los ajustes de servidor compartido que utiliza Plaspy, muestra pasos prácticos basados en los comandos SMS disponibles públicamente y detalla lo que debe preparar antes de integrar el PT24 en Plaspy para reportes de ubicación y eventos en tiempo real.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que no necesita seleccionar un servidor específico para cada protocolo. Los pasos exactos en el dispositivo pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del vendedor. El PT24 soporta comandos de configuración por SMS en su documentación pública, que es un método común y probado para apuntar el equipo a los servidores de Plaspy.

## Resumen de la configuración

El objetivo de la configuración es preparar el PT24 para que cargue de manera fiable datos de posición y eventos a Plaspy usando el endpoint y puerto compartidos de la plataforma. Muchas instalaciones del PT24 usan SMS para establecer parámetros clave como APN, dirección del servidor, intervalo de reporte y zona horaria, lo cual alinea el rastreador con Plaspy para reportes en la nube y alertas.

- Apuntar el PT24 a los ajustes de servidor de Plaspy para que ubicaciones y alertas lleguen a los paneles de Plaspy.
- Configurar el APN celular y verificar la conectividad de red antes de ajustar el servidor.
- Establecer el intervalo de reporte y la zona horaria del equipo según sus necesidades de monitoreo.
- Validar los parámetros desde el dispositivo con el comando de verificación para que Plaspy pueda detectar y aceptar el protocolo del rastreador.
- Usar Plaspy para centralizar geocercas, alertas y reproducción histórica una vez que el rastreador esté reportando.

## Ajustes de servidor de Plaspy

Para todos los dispositivos PT24 registrados en Plaspy, utilice los siguientes ajustes públicos de servidor al configurar el rastreador:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según la opción del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere selección de protocolo en el lado de Plaspy

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y confía en la detección automática de protocolo para interpretar los mensajes del rastreador.

## Requisitos típicos antes de la configuración

- Una Nano SIM activa provisionada para datos y SMS si va a usar comandos SMS o reporte por GPRS
- Carga de batería suficiente o exposición solar en despliegues solares para completar los pasos de configuración
- Acceso físico al PT24 para recibir SMS y poder reiniciarlo si es necesario
- Los datos de APN correctos del operador de la SIM para habilitar GPRS cuando sea requerido
- Familiaridad con los comandos SMS del fabricante o acceso a la guía oficial de configuración de iStartek

## Cómo se conecta este rastreador a Plaspy

El PT24 se configura para enviar telemetría de ubicación y eventos a Plaspy enviando datos al endpoint y puerto compartidos de Plaspy. Una vez que el rastreador está apuntando a Plaspy, la plataforma recibe las actualizaciones y las traduce en posiciones de mapa, alertas y registros históricos.

- El dispositivo envía mensajes de posición y eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Puede elegir transporte UDP o TCP en el dispositivo si el PT24 requiere una selección de transporte
- Plaspy detecta automáticamente el protocolo usado por el rastreador y analiza los mensajes en consecuencia
- La telemetría como alertas de movimiento, manipulación, SOS y extracción de SIM se entrega a Plaspy para enrutar notificaciones
- Los intervalos regulares de reporte permiten que Plaspy ofrezca actualizaciones en vivo y reproducción de trayectos históricos

## Flujo típico de configuración

1. Obtenga el método oficial de configuración de iStartek para su PT24, normalmente comandos SMS o software del vendedor, y verifique la versión de firmware.
2. Asegúrese de que el PT24 tenga una Nano SIM funcional con la información APN correcta y energía o exposición solar adecuada.
3. Ingrese la dirección del servidor de Plaspy enviando d.plaspy.com o la IP 54.85.159.138 al dispositivo como se muestra en los comandos más abajo.
4. Configure el puerto del servidor a 8888 y elija UDP o TCP en el dispositivo si el firmware lo solicita.
5. Aplique o guarde la configuración en el rastreador y envíe cualquier comando de verificación requerido.
6. Reinicie o haga un ciclo de energía del dispositivo si el firmware del PT24 recomienda reiniciar para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy revisando los datos entrantes en la plataforma y confirmando que la telemetría aparece en los paneles de Plaspy.

## Comandos de configuración de ejemplo

La configuración pública del PT24 soporta comandos por SMS. A continuación aparecen los comandos más usados en el orden recomendado para la configuración inicial. Conserve los valores de marcador de posición cuando sea necesario.

- Reinicio opcional a valores de fábrica (usar solo si necesita restaurar los valores por defecto)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Establecer el APN del operador
```text
APN,{{apn}}{{apnu}},{{apnp}}#
```
Explicación: mantenga los marcadores de posición tal como aparecen en la documentación del dispositivo. Reemplace {{apn}} por el nombre del APN de su operador. Use {{apnu}} para el nombre de usuario del APN y {{apnp}} para la contraseña del APN si su operador lo exige. Si no se requieren usuario y contraseña, el comando APN puede enviarse solo con {{apn}}.

- Establecer el servidor GPRS por dominio usando el dominio de Plaspy y el puerto
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente establecer el servidor GPRS por IP usando la IP de Plaspy y el puerto
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de reporte a cada 60 segundos
```text
TIMER,60#
```

- Consultar los parámetros actuales en el dispositivo
```text
PARAM#
```

Envíe estos mensajes SMS desde el número autorizado para el dispositivo, siguiendo la guía del fabricante. Los ejemplos de comando SERVER anteriores muestran ambas opciones, dominio e IP; cualquiera es aceptable y ambas apuntan a Plaspy en el puerto 8888.

## Notas de configuración

- La configuración por SMS es un método público soportado para el PT24; confirme el número emisor autorizado y la sintaxis de comandos permitida en la guía oficial de iStartek.
- Las versiones de firmware pueden cambiar el análisis de comandos y las opciones disponibles; verifique la sintaxis si los comandos no son aceptados.
- La elección entre UDP y TCP depende de las opciones del dispositivo; Plaspy acepta ambos y detecta automáticamente el protocolo cuando llegan mensajes al puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración del servidor y permite que la detección automática de protocolo gestione distintos protocolos de rastreadores.
- Al usar marcadores de posición APN como {{apn}}, {{apnu}} y {{apnp}}, confirme el formato exacto requerido por su operador e incluya credenciales solo cuando sean necesarias.

## Por qué usar Plaspy con esta configuración

Usar el PT24 con Plaspy ofrece visibilidad continua y gestión centralizada de alertas para el monitoreo de larga duración de animales y activos remotos. La carga solar y el consumo de baja potencia del PT24, junto con el endpoint compartido de Plaspy, hacen práctico desplegar muchas unidades y administrarlas de forma centralizada para geocercas, detección de manipulación, manejo de SOS y seguimiento histórico.

Learn more about Plaspy and how it supports device integrations and fleet monitoring at https://www.plaspy.com. For the latest PT24 device-specific setup details, firmware behavior, and manufacturer documentation, verify current instructions at the iStartek official website https://istartek.com/.
