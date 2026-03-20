---
slug: /wanway/g19/configuration
id: g19-configuration
sidebar_label: Configuration
title: WanWay - G19 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el rastreador WanWay G19 y dirigirlo a Plaspy. Ajustes de servidor, comandos SMS y pasos prácticos
keywords:
  - Configuración WanWay G19
  - Configuración G19
  - Configuración servidor WanWay G19
  - WanWay G19 Plaspy
  - Configuración rastreador G19
  - Configuración servidor rastreador GPS
  - Configuración plataforma seguimiento vehicular
  - Comandos SMS configuración G19
  - Configuración GPRS para G19
  - Rastreadores compatibles Plaspy
---

# WanWay - G19 Configuración

Esta página describe el contexto público de configuración para utilizar el rastreador GPS WanWay G19 con Plaspy. Se centra en la información práctica de servidor y de instalación disponible públicamente para redirigir el dispositivo a Plaspy, de modo que el equipo pueda reportar ubicación y estado a la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos desde el lado del fabricante para el G19 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas proporcionadas por el vendedor. Cuando están disponibles, esta página incluye los comandos SMS publicados públicamente que utiliza el G19 para la configuración básica.

## Resumen de la configuración

El objetivo de este proceso es preparar el G19 para que se comunique de forma fiable con la plataforma Plaspy y aparezca en la lista de dispositivos. La configuración suele ajustar el APN del operador, asignar el endpoint de Plaspy, seleccionar el transporte cuando sea necesario y habilitar el reporte por GPRS para que el rastreador envíe datos a Plaspy.

- Configure el APN del operador para que el rastreador pueda abrir una conexión de datos usando los valores de APN como marcadores de posición.  
- Apunte el rastreador al dominio o IP del servidor de Plaspy para que los reportes lleguen a la plataforma.  
- Establezca el puerto compartido de Plaspy para que el dispositivo use el mismo puerto que Plaspy espera.  
- Habilite el modo GPRS o el envío de datos en el G19 para que se envíen actualizaciones periódicas.  
- Verifique la configuración y el estado usando los comandos de verificación del dispositivo.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos soportados)  
- Soporte de transporte UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita seleccionar un protocolo específico en la cuenta Plaspy

## Requisitos previos típicos antes de la instalación

- Un rastreador WanWay G19 con alimentación y accesible, instalado o conectado a una fuente de alimentación de banco.  
- Una tarjeta SIM funcional con un plan de datos activo y la información de APN correcta para el operador.  
- Capacidad para enviar mensajes SMS al dispositivo o acceso a la herramienta de configuración del fabricante adecuada para el G19.  
- Conocimiento del APN del operador y de cualquier usuario o contraseña necesarios como marcadores de posición en el dispositivo.  
- Familiaridad básica para verificar las respuestas del dispositivo mediante comandos SMS de verificación o comprobaciones de estado del equipo.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el G19 envía su ubicación y estado del dispositivo al endpoint y puerto compartidos de Plaspy, de modo que el dispositivo quede visible en Plaspy para monitoreo y gestión de eventos. Plaspy recibe los datos y determina automáticamente el protocolo correcto para ese rastreador.

- El rastreador debe estar configurado para enviar datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- El transporte puede ser UDP o TCP según la configuración del dispositivo y la preferencia del instalador.  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el servidor acepta la conexión entrante sin necesidad de seleccionar el protocolo manualmente en Plaspy.  
- Las actualizaciones de posición regulares y las notificaciones de eventos se reenvían a Plaspy cuando el rastreador tiene una conexión GPRS activa.  
- Los comandos de estado y verificación permiten a los instaladores confirmar que el rastreador está reportando a la plataforma.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración WanWay para el G19, normalmente mediante comandos SMS o la herramienta del proveedor recomendada para su versión de firmware.  
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo o comando de configuración de servidor.  
3. Establezca el puerto 8888 como puerto de destino para la telemetría.  
4. Seleccione UDP o TCP si el rastreador solicita elegir el transporte durante la configuración.  
5. Configure el APN del operador usando los marcadores de APN proporcionados y guarde la configuración.  
6. Aplique o guarde la configuración en el rastreador y reinicie el dispositivo si es necesario.  
7. Valide que el G19 está reportando a Plaspy usando comandos de verificación y comprobando que el dispositivo aparece en Plaspy.

## Ejemplo de comandos de configuración

El G19 admite configuración por SMS. A continuación figuran los comandos públicos que pueden enviarse por SMS en el orden mostrado. Mantenga los marcadores tal como aparecen y reemplace {{apn}}, {{apnu}} y {{apnp}} por los valores de su operador cuando corresponda.

- Configurar el APN del operador (reemplace los marcadores). Si se requieren usuario y contraseña inclúyalos después del APN, separados por comas:
```text
APN,{{apn}}#
```
Si necesita usuario y contraseña use la forma opcional:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Nota: {{apn}} es la cadena APN del operador. {{apnu}} y {{apnp}} son los campos opcionales de usuario y contraseña del APN.

- Establecer el servidor GPRS hacia Plaspy usando el dominio y puerto del servidor (se conserva la bandera de transporte tal como la acepte el dispositivo):
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Establecer el intervalo de actualización/reportes (ejemplo con dos temporizadores, ajuste según necesidad):
```text
TIMER,60,60#
```

- Habilitar el modo GPRS en el dispositivo:
```text
GPRSON,1#
```

- Consultar la configuración del dispositivo:
```text
PARAM#
```

- Consultar el estado del dispositivo:
```text
STATUS#
```

Envíe cada comando SMS al número de la SIM del rastreador usando el teléfono del instalador o la herramienta correspondiente. Preserve el orden anterior cuando el orden de configuración sea relevante: APN, servidor, temporizador, habilitar GPRS y luego verificar.

## Notas de configuración

- Las versiones de firmware del fabricante y la sintaxis de los comandos pueden variar; confirme la sintaxis exacta con la documentación de WanWay para la revisión de su dispositivo.  
- El comando SERVER mostrado utiliza el dominio d.plaspy.com y el puerto 8888; algunos instaladores prefieren usar la IP numérica 54.85.159.138 en lugar del dominio.  
- Elija UDP o TCP según los requisitos de la instalación; el G19 puede aceptar una bandera de transporte en su comando SERVER y Plaspy soporta ambos transportes.  
- La configuración por SMS es un método habitual para el G19; asegúrese de que la SIM pueda recibir SMS y tenga los permisos necesarios para modificar ajustes.  
- Siempre valide la configuración con PARAM# y STATUS# u otros comandos de verificación equivalentes después de aplicar cambios.

## Por qué usar Plaspy con esta configuración

Configurar el WanWay G19 para que reporte a Plaspy ofrece un camino sencillo y consistente para agregar el dispositivo a su flujo de trabajo de monitoreo y gestión de flotas. Usar los ajustes de servidor y puerto compartidos de Plaspy reduce la variabilidad entre dispositivos y permite que Plaspy detecte automáticamente el protocolo del rastreador, lo que simplifica despliegues masivos y la gestión continua de los equipos.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad de dispositivos, visite https://www.plaspy.com. Los métodos específicos de configuración, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que es recomendable verificar las instrucciones más recientes en el sitio oficial de WanWay https://www.wanwaytech.net/.
