---
slug: /skypatrol/tt8850/configuration
id: tt8850-configuration
sidebar_label: Configuration
title: SkyPatrol - TT8850 Configuration
sidebar_class_name: menu_item_tracker
description: Parámetros de servidor y configuración para conectar el SkyPatrol TT8850 a la plataforma Plaspy
keywords:
  - configuración SkyPatrol TT8850
  - configurar SkyPatrol TT8850
  - configuración de servidor SkyPatrol TT8850
  - configuración TT8850 Plaspy
  - configuración rastreador GPS TT8850
  - integración rastreador Plaspy
  - ajustes servidor rastreador GPS
  - configurar APN y servidor tracker
  - configuración rastreador GPS encubierto
  - configuración seguimiento de personal
---

# SkyPatrol - Configuración del TT8850

Esta página documenta el contexto público de configuración para usar el SkyPatrol TT8850 con la plataforma Plaspy. Se centra en los ajustes prácticos del servidor y en comandos de ejemplo que se usan habitualmente para que el TT8850 reporte a Plaspy. Utilice esta guía junto con la documentación del producto TT8850 y los métodos de configuración del fabricante.

Plaspy emplea un endpoint y puerto compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que confirme cualquier diferencia específica del modelo en la documentación de SkyPatrol cuando sea necesario.

## Resumen de la configuración

El objetivo de la configuración es preparar el TT8850 para que se comunique de forma fiable con Plaspy, reporte actualizaciones de posición y envíe alertas de eventos como SOS. Para el TT8850, esto suele implicar establecer el APN del operador móvil, apuntar el dispositivo al servidor de Plaspy, elegir el tipo de transporte y ajustar intervalos de reporte y modos de ahorro de energía.

- Configure el APN del operador para que el dispositivo pueda acceder a datos GPRS o aceptar configuraciones por SMS
- Establezca el servidor GPRS en Plaspy y el puerto requerido para que el rastreador abra sesión con la plataforma
- Elija el modo de transporte UDP o TCP según las opciones del dispositivo y la política de red
- Ajuste el intervalo de actualización y el modo de energía para equilibrar la duración de la batería y la frecuencia de reportes
- Habilite SOS y otros reportes de eventos para que las alertas se entreguen a Plaspy
- Valide que el dispositivo sea visible en Plaspy después de aplicar la configuración

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el TT8850 puede configurarse para usar cualquiera de los dos
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un TT8850 cargado con batería suficiente para pruebas y configuración
- Una tarjeta SIM funcional instalada con el APN del operador que soporte datos o SMS según lo necesite
- Acceso al método de configuración del fabricante del TT8850, como comandos SMS o software del proveedor
- La contraseña del dispositivo o la contraseña de configuración por SMS que SkyPatrol asigna a su unidad (se muestra un ejemplo por defecto más abajo)
- Un teléfono capaz de enviar SMS al dispositivo si se usa configuración por SMS
- Acceso a la plataforma Plaspy para verificar el dispositivo tras la configuración

## Cómo se conecta este rastreador a Plaspy

El TT8850 se configura para reportar al endpoint y puerto compartidos de Plaspy, de modo que la plataforma reciba los datos de ubicación y eventos. Normalmente esto implica programar el dispositivo con parámetros de APN y servidor, habilitar los intervalos de reporte y activar funciones de reporte de eventos como SOS.

- El rastreador usa la configuración GPRS para iniciar una sesión TCP o UDP hacia d.plaspy.com en el puerto 8888
- Plaspy acepta la conexión entrante e identifica automáticamente el protocolo del rastreador
- Las actualizaciones de ubicación se envían según el intervalo de reporte configurado para que el dispositivo sea visible en la plataforma
- Los mensajes de SOS y otros eventos se envían al mismo endpoint de Plaspy para su enrutamiento y notificación inmediata
- Dado que Plaspy utiliza un puerto común para los dispositivos, el TT8850 usa el puerto 8888 como otros rastreadores compatibles

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración de SkyPatrol para el TT8850, ya sea mediante SMS o la herramienta del proveedor indicada por SkyPatrol
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138
3. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo requiere seleccionar un transporte
4. Configure el APN del operador y cualquier nombre de usuario o contraseña del APN que exija su operador
5. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere
6. Verifique que el TT8850 se conecte y reporte a Plaspy y que eventos como SOS se reciban en la plataforma
7. Ajuste el intervalo de reporte o las opciones de potencia según sea necesario para cumplir con requisitos operativos y de batería

## Comandos de configuración de ejemplo

El TT8850 puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos de ejemplo muestran una secuencia común para configurar APN, servidor, intervalo de actualización, SOS y modo de energía. La muestra usa la contraseña SMS del dispositivo SM8570 según las instrucciones públicas de SkyPatrol. Preserve los marcadores de posición cuando los reemplace por los valores de su operador.

- Nota sobre los marcadores de posición
  - [apn] es el APN del operador móvil
  - [apnu] es el nombre de usuario del APN si es requerido
  - [apnp] es la contraseña del APN si es requerida

1. Establecer el APN del operador
```text
AT+GTBSI=SM8570,[apn],[apnu],[apnp],,,,,0002$
```

2. Configurar el servidor GPRS a Plaspy (en este ejemplo se incluyen dominio e IP)
```text
AT+GTSRI=SM8570,4,,,d.plaspy.com,8888,54.85.159.138,8888,,0,1,,,,,0003$
```

3. Configurar el intervalo de reporte de actualizaciones
```text
AT+GTFRI=SM8570,1,1,,,0000,2359,300,300,,,1F,,,,,,,,,0007$
```

4. Habilitar el reporte del botón SOS
```text
AT+GTFKS=SM8570,1,,1,1,1,,,ffff$
```

5. Desactivar o ajustar el modo de ahorro de energía
```text
AT+GTNMD=SM8570,8,3,2,3,1800,1800,,,,,,,,0005$
```

Estos comandos son ejemplos públicos y normalmente se envían como SMS al dispositivo. El orden mostrado es práctico para una secuencia básica de configuración. Reemplace los marcadores de posición por los valores de su operador y confirme la contraseña del dispositivo si su unidad emplea un valor por defecto distinto.

## Notas de configuración

- Los comandos SMS proporcionados son ejemplos públicos. La sintaxis exacta y los parámetros disponibles pueden cambiar con actualizaciones de firmware o variantes regionales de hardware
- En este ejemplo el TT8850 soporta configuración por SMS, así que asegúrese de que el dispositivo acepte SMS y que se use la contraseña correcta del equipo
- Elija UDP o TCP según su entorno de red y las restricciones del operador; Plaspy acepta cualquiera de los dos transportes en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo del rastreador, por lo que no necesita un puerto distinto por dispositivo
- Tras aplicar cambios, pruebe la conectividad y verifique que el dispositivo aparezca en Plaspy antes de desplegar en producción

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el SkyPatrol TT8850 ofrece una forma sencilla de centralizar datos de ubicación y eventos en tiempo real desde un rastreador compacto. Los ajustes compartidos del servidor Plaspy y la detección automática del protocolo simplifican la integración, permitiéndole concentrarse en el APN y en opciones a nivel de dispositivo como el intervalo de reporte y el comportamiento del SOS.

Para obtener más información sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Para las instrucciones de configuración específicas del dispositivo más recientes, notas de firmware y detalles del fabricante, verifique la información en el sitio web de SkyPatrol https://www.skypatrol.com/.
