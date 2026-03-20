---
slug: /topshine/2fd_100/configuration
id: 2fd_100-configuration
sidebar_label: Configuration
title: TopShine - 2FD-100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopShine 2FD-100 y ajustes de servidor Plaspy para rastreo confiable de flotas
keywords:
  - Configuración TopShine 2FD-100
  - Instalación TopShine 2FD-100
  - Configuración 2FD-100 Plaspy
  - Configuración de servidor 2FD-100
  - Configuración de rastreador Plaspy
  - Configuración rastreador GPS TopShine
  - Configuración plataforma GPS 2FD-100
  - Configuración de rastreo de vehículos
  - Configuración rastreador gestión de flotas
  - Configuración SMS rastreador GPS
---

# TopShine - 2FD-100: Configuración

Esta página documenta el contexto público de configuración para usar el rastreador TopShine 2FD-100 con Plaspy. Reúne los ajustes prácticos del servidor, comandos SMS y el flujo de trabajo general que necesitará para preparar el dispositivo y que reporte a Plaspy, manteniendo la orientación genérica y centrada en el fabricante. Use esta guía junto con el manual del dispositivo y las herramientas oficiales de TopShine para un despliegue completo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que utilicen los instaladores. El 2FD-100 admite configuración por SMS y reporte por GPRS; los comandos que se muestran a continuación reflejan ejemplos públicos proporcionados por TopShine.

## Resumen de configuración

El objetivo al configurar un 2FD-100 para Plaspy es dirigir el dispositivo al endpoint del servidor Plaspy y verificar que los reportes periódicos de posición y alarmas lleguen a la plataforma. La configuración normalmente define la identidad del equipo, el APN para datos móviles, el endpoint y puerto GPRS, y el comportamiento de reporte del dispositivo.

- Apuntar el rastreador a Plaspy configurando la dirección y puerto del servidor GPRS
- Configurar un APN móvil válido para que el rastreador use GPRS o 4G
- Establecer el identificador del dispositivo para que Plaspy lo relacione con su flota
- Verificar la conectividad y que las actualizaciones de posición lleguen a Plaspy
- Opcionalmente usar comandos SMS para el aprovisionamiento inicial cuando esté soportado

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP
- Detección automática del protocolo en Plaspy

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando este se conecta.

## Requisitos previos típicos antes de la configuración

- Un 2FD-100 instalado y con alimentación adecuada, con acceso al conector OBD2 o al arnés según la instalación
- Una SIM celular activa con datos habilitados y el APN correcto del operador
- Acceso al método de configuración del fabricante TopShine, como comandos SMS o la herramienta oficial de configuración
- El IMEI del dispositivo disponible para configurar la identidad y registrar el equipo en la plataforma
- Conocimiento de la contraseña SMS del dispositivo si se usa aprovisionamiento por SMS (el ejemplo público usa la contraseña por defecto 000000)
- Una cuenta Plaspy o un administrador que pueda verificar la visibilidad del dispositivo tras el aprovisionamiento

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el 2FD-100 utilizará su conexión de datos celulares para abrir una sesión con Plaspy y enviar posiciones GPS, alarmas y estados de entradas. El rastreador se dirige al endpoint y puerto compartidos de Plaspy para que la plataforma reciba telemetría e identifique automáticamente el protocolo del dispositivo.

- El dispositivo apunta al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) y al puerto 8888
- Las actualizaciones de ubicación y eventos de alarma se envían por el transporte seleccionado (UDP o TCP)
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los reportes entrantes
- El IMEI del dispositivo o el id configurado se usan para asociar los reportes con el registro de su flota
- Una vez conectado correctamente, la plataforma mostrará posiciones en vivo y reportes de alarma

## Flujo típico de configuración

1. Acceda al método oficial de configuración TopShine para el 2FD-100 (aprovicionamiento por SMS o la herramienta de configuración TopShine).
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Seleccione UDP o TCP si el firmware del dispositivo requiere elegir el transporte.
5. Aplique o guarde la configuración en el dispositivo y, si es necesario, reinícielo para iniciar una nueva sesión GPRS.
6. Valide que el 2FD-100 está reportando a Plaspy confirmando que el dispositivo aparece y envía actualizaciones de ubicación en su instancia de Plaspy.
7. Ajuste intervalos de reporte, alarmas y entradas según sea necesario después de confirmar la conectividad básica.

## Ejemplos de comandos de configuración

El TopShine 2FD-100 puede configurarse enviando comandos SMS al dispositivo. Los ejemplos a continuación se basan en contenidos públicos de configuración de TopShine. La contraseña SMS de ejemplo utilizada en estos comandos es 000000, que es la contraseña por defecto en los ejemplos publicados. Conserve los marcadores de posición al enviar comandos y reemplace IMEI y APN por sus valores reales.

Nota: El comando de reset es opcional y se usa normalmente cuando desea restaurar los valores de fábrica antes del aprovisionamiento.

1. Reset a valores de fábrica (reset inicial opcional)
```
W000000,990,099###
```

2. Configurar el Id del dispositivo
- Use los primeros 14 dígitos del IMEI para el Id cuando el dispositivo requiera un id de 14 dígitos. TopShine indica que Plaspy utiliza el IMEI completo de 15 dígitos como identificador en la plataforma.
- Reemplace <IMEI14> con los primeros 14 dígitos del IMEI de su dispositivo.
```
W000000,010,<IMEI14>
```

3. Configurar el APN del operador
- Reemplace {{apn}} con el APN de su operador.
- Los marcadores opcionales {{apnu}} y {{apnp}} representan el usuario y la contraseña del APN si su operador los requiere.
```
W000000,011,{{apn}},{{apnu}},{{apnp}}
```
(Si su operador no requiere usuario o contraseña, deje {{apnu}} y {{apnp}} vacíos u omítalos según la sintaxis del dispositivo.)

4. Configurar el servidor GPRS a Plaspy
- Este comando apunta el dispositivo a la IP y puerto del servidor Plaspy. Plaspy también acepta conexiones a d.plaspy.com; use la IP o el dominio según la capacidad del dispositivo.
```
W000000,012,54.85.159.138,8888
```

5. Cambiar a modo GPRS
```
W000000,013,2
```

6. Establecer el intervalo de actualización
- El ejemplo establece el código de intervalo de reporte periódico a 6 según la guía pública. Confirme la semántica del intervalo en el manual de su dispositivo.
```
W000000,014,6
```

7. Obtener IMEI del dispositivo (verificación)
```
W000000,601
```

Mantenga los comandos en este orden durante el aprovisionamiento inicial para asegurarse de que el Id del dispositivo, el APN y el servidor se establezcan antes de cambiar a modo GPRS.

## Notas de configuración

- El aprovisionamiento por SMS se muestra en la guía pública de TopShine y es un método común para la configuración inicial; también pueden existir herramientas de software del fabricante o utilitarios de campo.
- Las versiones de firmware y las revisiones de hardware pueden modificar la sintaxis de los comandos y las opciones disponibles; siempre verifique el formato de los comandos con el manual del dispositivo correspondiente a su firmware.
- Elija TCP o UDP según el soporte del dispositivo y las condiciones de red; Plaspy acepta ambos y detectará automáticamente el protocolo usado por el rastreador.
- Plaspy usa el puerto 8888 para simplificar el aprovisionamiento y el enrutamiento en la plataforma.
- Preserve marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} al preparar comandos SMS y reemplácelos por los valores proporcionados por el operador cuando sea necesario.

## Por qué usar Plaspy con esta configuración

Configurar el TopShine 2FD-100 para que reporte a Plaspy brinda a gerentes de flota y operadores de seguridad una vista centralizada de la ubicación de vehículos, alarmas y el estado operativo junto con otra telemetría de la flota. La combinación de las capacidades del hardware 2FD-100 y las funciones de la plataforma Plaspy permite seguimiento en tiempo real, alertas por eventos y acciones de gestión remota que ayudan a optimizar operaciones y mejorar la seguridad vehicular.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific setup methods and the latest firmware details on the manufacturer site https://www.gztopshine.com/. Manufacturer specifications and configuration methods can change over time so confirm the current procedures on the official TopShine documentation.
