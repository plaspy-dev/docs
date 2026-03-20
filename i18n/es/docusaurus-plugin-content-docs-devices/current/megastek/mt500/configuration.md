---
slug: /megastek/mt500/configuration
id: mt500-configuration
sidebar_label: Configuration
title: Megastek - MT500 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Megastek MT500 con los servidores de Plaspy y ajustes por SMS
keywords:
  - Configuración Megastek MT500
  - Configuración MT500 Plaspy
  - Configuración servidor Megastek MT500
  - Configuración tobillo Megastek
  - Comandos SMS MT500
  - Configuración GPS para supervisión de reclusos
  - Integración rastreador GPS Plaspy
  - Configuración GNSS MT500
  - Configuración de dispositivo Plaspy
  - Configuración rastreador Megastek
---

# Megastek - Configuración del MT500

Esta página describe el contexto público de configuración para usar el rastreador de tobillo metálico Megastek MT500 para supervisión con la plataforma Plaspy. Se centra en los ajustes prácticos del servidor y los comandos SMS que se usan habitualmente para apuntar los dispositivos MT500 a Plaspy, de modo que el equipo pueda reportar ubicación, eventos de manipulación y geocercas a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración por parte del fabricante para el MT500 pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor, por lo que esta guía ofrece los pasos públicos y prácticos y ejemplos de comandos SMS, recomendando verificar siempre con la documentación oficial de Megastek.

## Resumen de configuración

Esta configuración prepara el MT500 para enviar datos GNSS y eventos de seguridad a Plaspy configurando la identidad del dispositivo, el APN, el intervalo de reporte y el endpoint del servidor GPRS. El objetivo es garantizar que el rastreador pueda establecer una sesión de datos celular y alcanzar el endpoint de ingestión de Plaspy para que el dispositivo sea visible y gestionable en la plataforma.

- Establecer la identidad del dispositivo (ID) para asociar el IMEI con su registro en Plaspy.
- Configurar el APN y, si aplica, usuario y contraseña del APN para que se pueda transmitir datos GPRS.
- Apuntar el equipo al endpoint y puerto del servidor de Plaspy para que la telemetría llegue a la plataforma.
- Definir intervalos de reporte y latidos (heartbeat) acorde a sus políticas de monitoreo y cumplimiento.
- Habilitar GPRS o el modo de datos para que el MT500 envíe eventos a Plaspy en vez de depender únicamente de SMS.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el MT500:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el lado del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto, por lo que el puerto 8888 es el puerto común para los dispositivos compatibles.

## Requisitos típicos antes de la configuración

- El dispositivo está encendido y con carga de batería suficiente para la configuración y el reporte inicial.
- Una SIM celular activa instalada en el MT500 que soporte datos y SMS según sea necesario.
- Disponer del IMEI del dispositivo para usarlo al establecer la ID y verificar el registro.
- Acceso al conjunto de comandos SMS de Megastek o a la herramienta de configuración oficial del fabricante.
- Cobertura en una zona donde el dispositivo pueda establecer una sesión de datos GPRS.
- Una cuenta o proyecto en Plaspy preparado para recibir e identificar el feed del dispositivo.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el MT500 utiliza su enlace celular para transmitir posiciones GNSS y eventos de seguridad al endpoint y puerto compartidos de Plaspy. Plaspy normaliza los datos entrantes y los pone a disposición en paneles y flujos de alertas para monitoreo y cumplimiento.

- El rastreador envía fijaciones de ubicación y marcas de tiempo al endpoint del servidor de Plaspy.
- Los eventos de manipulación y extracción se envían a Plaspy para alertas y registro inmediato.
- Latidos periódicos o intervalos de actualización configurados mantienen el dispositivo visible en la plataforma.
- Los eventos de geocerca y violaciones de límites se reenvían a Plaspy para flujos de trabajo de cumplimiento.
- El dispositivo se apunta al servidor de Plaspy (d.plaspy.com o la IP 54.85.159.138) en el puerto 8888 usando UDP o TCP según la selección.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Megastek o al software correspondiente, o prepárese para enviar comandos SMS de configuración según indique el fabricante.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor o servidor GPRS.
3. Configure el puerto en 8888, que Plaspy usa para todos los dispositivos compatibles.
4. Seleccione UDP o TCP si el MT500 requiere elegir el transporte en la configuración.
5. Configure el APN y cualquier usuario o contraseña del APN necesarios para que el dispositivo pueda usar datos GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
7. Valide que el dispositivo reporte a Plaspy comprobando la primera posición, latidos o mensajes de evento en su proyecto de Plaspy.

## Comandos de ejemplo para la configuración

El MT500 puede configurarse mediante comandos SMS enviados desde un número autorizado. Los comandos que siguen son ejemplos públicos. El dispositivo de muestra usa la contraseña por defecto 000000 en estos ejemplos. Reemplace los marcadores según corresponda.

- Establecer la ID del dispositivo usando el IMEI (reemplace \<IMEI15> por el IMEI de 15 dígitos). Esto asocia el IMEI con el campo de ID del dispositivo.

```
M000000,22,<IMEI15>
```

- Configurar el APN del operador. Reemplace [apn] con el APN de su operador. Si su APN requiere usuario o contraseña, incluya [apnu] y [apnp] donde se indica.

```
M000000,23,[apn],[apnu],[apnp]
```

Explicación: [apn] es el nombre del punto de acceso (APN) requerido por el operador celular. [apnu] es el usuario del APN y [apnp] es la contraseña del APN. Si el operador no requiere usuario ni contraseña, omita esos marcadores.

- Establecer el intervalo de actualización a 60 segundos. Ajuste el valor numérico según su política de monitoreo.

```
M000000,25,60
```

- Configurar el servidor GPRS para apuntar a Plaspy usando la IP pública y el puerto. Este ejemplo usa la IP del servidor Plaspy y el puerto común 8888.

```
M000000,24,56 54.85.159.138,8888
```

Nota: Algunos dispositivos aceptan el dominio en lugar de la IP. Puede usar d.plaspy.com en lugar de 54.85.159.138 cuando el dispositivo acepte un nombre de dominio.

- Habilitar GPRS o el modo de datos para que el dispositivo utilice los ajustes de servidor configurados.

```
M000000,21,2
```

Notas sobre estos comandos:
- El ejemplo muestra la contraseña del dispositivo como 000000. Esta es la contraseña por defecto en el ejemplo público; cambie la contraseña si su política de seguridad lo requiere.
- Envíe estos comandos SMS desde el número autorizado para administración del dispositivo según las instrucciones de Megastek.
- Mantenga el orden de los comandos cuando éste sea importante durante la configuración inicial (por ejemplo APN, luego servidor, luego habilitar datos).

## Notas de configuración

- El MT500 soporta configuración vía SMS como se muestra arriba; también pueden existir herramientas del fabricante o aprovisionamiento remoto según el firmware y las herramientas del proveedor.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles. Verifique los comandos si no recibe respuesta.
- Elija UDP o TCP según su preferencia operativa. Plaspy detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte al servidor en el puerto 8888.
- Los comandos de ejemplo incluyen una contraseña por defecto en muestras públicas. Cambie las contraseñas del dispositivo cuando sea apropiado y siga las recomendaciones de seguridad del fabricante.
- Use la documentación oficial de Megastek para la sintaxis de comandos más reciente e instrucciones específicas por región.

## Por qué usar Plaspy con esta configuración

Usar el MT500 con Plaspy proporciona una plataforma única para monitoreo continuo de ubicación, alertas por manipulación y cumplimiento de geocercas en programas de supervisión. Apuntar el dispositivo a Plaspy con los ajustes de servidor compartidos da a los administradores visibilidad centralizada y la capacidad de configurar alertas e informes adaptados a los flujos de trabajo de cumplimiento.

Learn more about Plaspy and how it ingests device telemetry at https://www.plaspy.com. For the most current device specific configuration, firmware behavior, and manufacturer instructions, verify details on the Megastek website https://www.megastek.com/.
