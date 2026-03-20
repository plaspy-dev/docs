---
slug: /eelink/tk119/configuration
id: tk119-configuration
sidebar_label: Configuration
title: EElink - TK119 Configuration
sidebar_class_name: menu_item_tracker
description: Configure un rastreador EElink TK119 para usar con Plaspy, con comandos SMS de servidor e instrucciones de verificación
keywords:
  - Configuración EElink TK119
  - Instalación EElink TK119
  - Configuración servidor TK119 Plaspy
  - Configuración rastreador GPS TK119
  - Configuración seguimiento TK119
  - Instalación rastreador EElink
  - Configuración plataforma GPS TK119
  - seguimiento de vehículos TK119
  - ajustes servidor TK119
  - configuración SMS TK119
---

# EElink - Configuración del TK119

Esta página describe la información pública necesaria para usar el EElink TK119 con Plaspy. Se centra en los pasos prácticos y en los ajustes públicos requeridos para apuntar el rastreador a los servidores de Plaspy, verificar la conectividad y lograr que el dispositivo sea visible en la plataforma. Cuando procede, los comandos SMS mostrados son los ejemplos públicos oficiales usados para configurar el equipo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar un identificador de protocolo desde la plataforma. Los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El TK119 admite configuración remota por SMS y reportes a servidor, algo que se refleja en los comandos de ejemplo a continuación.

## Resumen de la configuración

El objetivo de este proceso es dejar el TK119 listo para comunicarse de forma fiable con Plaspy y enviar actualizaciones periódicas de posición y estado. Utilice el endpoint y el puerto compartidos de Plaspy y valide que el dispositivo reporte correctamente antes de ponerlo en producción.

- Configure el APN del rastreador para que use datos móviles en los reportes
- Apunte el rastreador al servidor de Plaspy usando el dominio público o la IP y el puerto 8888
- Seleccione el tipo de transporte en el rastreador si la herramienta o la interfaz SMS lo requiere
- Establezca un intervalo de reporte para que Plaspy reciba actualizaciones periódicas para seguimiento y monitoreo
- Verifique los ajustes y la conectividad con el comando de consulta de parámetros y confirme la visibilidad en Plaspy

## Ajustes del servidor Plaspy

Use estas configuraciones públicas de conexión a Plaspy al configurar el TK119.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP dependiendo de la opción de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere selección manual del protocolo en Plaspy

## Requisitos típicos antes de la configuración

- Un TK119 con alimentación, tarjeta SIM instalada y datos móviles habilitados
- Ajustes APN del operador móvil, incluyendo usuario y contraseña si son requeridos
- Acceso al método de configuración del TK119 que soporte su unidad, por ejemplo comandos SMS o la herramienta del fabricante
- Un medio para enviar y recibir SMS desde el equipo durante la configuración si usa el método por SMS
- Acceso a su cuenta de Plaspy para confirmar que el dispositivo aparece y reporta después de la configuración

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TK119 enviará su ubicación y actualizaciones de estado al endpoint y puerto compartidos de Plaspy, donde la plataforma analizará automáticamente el protocolo del rastreador. Los reportes pueden ser periódicos o activados por eventos según la configuración del equipo y los comandos aplicados.

- El rastreador se conecta a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888
- Envía reportes periódicos según el intervalo TIMER configurado para ser visible en Plaspy
- Plaspy acepta conexiones por UDP o TCP y detectará el protocolo que use el dispositivo
- Los parámetros del dispositivo pueden consultarse de forma remota con el comando PARAM para confirmar la configuración
- Una conexión y parseo de datos exitosos en Plaspy hacen que el dispositivo sea visible en el panel de Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración EElink para su unidad TK119, ya sea comandos SMS o la herramienta del fabricante.
2. Introduzca el endpoint del servidor Plaspy como el dominio d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto en 8888 en la configuración del rastreador.
4. Seleccione UDP o TCP si el dispositivo requiere elegir un transporte al configurar el servidor.
5. Configure el APN del operador y cualquier usuario o contraseña de APN que requiera la SIM.
6. Aplique o guarde la configuración y reinicie el rastreador si la herramienta o el dispositivo lo requiere.
7. Valide que el rastreador reporte a Plaspy y confirme la visibilidad en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

El TK119 admite configuración por SMS. Los siguientes comandos públicos se proporcionan en la guía del fabricante. Envíe estos comandos al dispositivo por SMS en el orden indicado cuando el orden importe. Indique un restablecimiento de fábrica como opcional o solo para la configuración inicial.

- Restablecimiento de fábrica opcional para restaurar ajustes por defecto
```
FACTORY#
```

- Ajustar la zona horaria a UTC 0
```
GMT,E,0#
```

- Configurar el APN del operador
```
APN,{{apn}}[,{{apnu}},{{apnp}}]#
```
Explicación: Reemplace {{apn}} por el APN del operador. Si su operador requiere usuario y contraseña de APN incluya {{apnu}} y {{apnp}} respectivamente. Los corchetes indican que el usuario y la contraseña son opcionales según el operador.

- Establecer el servidor GPRS al dominio de Plaspy y puerto usando el índice de servidor 1
```
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente establecer el servidor GPRS a la IP de Plaspy y puerto usando el índice de servidor 0
```
SERVER,0,54.85.159.138,8888#
```

- Configurar el intervalo de actualización cada 60 segundos
```
TIMER,60#
```

- Consultar los parámetros actuales
```
PARAM#
```

Use PARAM# para verificar que el APN, servidor, timer y otros parámetros se aplicaron correctamente. No elimine el carácter almohadilla final cuando envíe comandos SMS a menos que su herramienta de gestión requiera un delimitador distinto.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles. Confirme siempre el formato exacto de los comandos para el firmware de su dispositivo.
- El TK119 admite la configuración por SMS como se muestra, pero en muchas implementaciones se usa la herramienta del fabricante para gestión masiva o remota. Siga el método que mejor se adapte a su instalación.
- Cuando el dispositivo requiera seleccionar el transporte, elija UDP o TCP según la interfaz del equipo. Plaspy acepta ambos y detectará el protocolo automáticamente.
- Mantenga las credenciales del APN correctas y compatibles con la SIM para asegurar que se puedan abrir sesiones GPRS hacia el endpoint de Plaspy.
- Pruebe la configuración con el comando PARAM# y verifique que el dispositivo aparezca en Plaspy antes de la instalación definitiva.

## Por qué usar Plaspy con esta configuración

Configurar el EElink TK119 para reportar a Plaspy permite a las organizaciones tener visibilidad centralizada y monitoreo operativo de vehículos y activos. Usar los ajustes de servidor de Plaspy permite que el rastreador envíe posición y estado a un único endpoint compartido donde Plaspy detecta automáticamente el protocolo del rastreador y pone los datos del dispositivo a disposición en la plataforma.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific instructions firmware notes and official command references check the manufacturer website https://www.eelink.com.cn/ since device behavior and setup methods can change over time.
