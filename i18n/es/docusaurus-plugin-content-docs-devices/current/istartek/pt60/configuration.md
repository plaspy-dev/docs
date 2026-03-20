---
slug: /istartek/pt60/configuration
id: pt60-configuration
sidebar_label: Configuration
title: iStartek - PT60 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador iStartek PT60 para reportar a Plaspy usando ajustes de servidor compartidos y comandos SMS para APN y servidor
keywords:
  - configuración iStartek PT60
  - instalación iStartek PT60
  - configuración PT60 Plaspy
  - configuración de servidor PT60
  - configuración rastreador GPS PT60
  - configuración rastreador Plaspy
  - configuración SMS PT60
  - configuración servidor GPRS PT60
  - rastreo vehicular PT60
  - integración PT60 Plaspy
---

# iStartek - Configuración PT60

Esta página documenta el contexto público de configuración para usar el rastreador iStartek PT60 con Plaspy. Se enfoca en los ajustes y comandos públicamente disponibles que se usan para apuntar el PT60 al endpoint del servidor de Plaspy y validar la conectividad básica. Utilice estas indicaciones junto con la documentación del fabricante para la gestión completa del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El PT60 puede configurarse mediante comandos SMS tal como aparecen en las instrucciones públicas del fabricante; estos comandos se incluyen aquí como referencia.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el PT60 para que informe de manera confiable la ubicación y el estado a la plataforma Plaspy. Los comandos públicos para el PT60 normalmente abarcan el restablecimiento a valores de fábrica, la configuración de la zona horaria, los detalles del APN y la dirección del servidor y puerto de Plaspy.

- Configurar el APN y parámetros de red para que el dispositivo establezca conexión GPRS.  
- Definir la dirección del servidor Plaspy y el puerto compartido para que el rastreador envíe telemetría al endpoint correcto.  
- Establecer un intervalo de actualización o temporizador de reporte para que Plaspy reciba posiciones periódicas.  
- Validar la configuración usando el comando de consulta de parámetros del dispositivo y verificar visibilidad en Plaspy.  
- Opcionalmente, restablecer a ajustes de fábrica si necesita una base limpia antes de aplicar la nueva configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 — Plaspy usa el mismo puerto para todos los dispositivos compatibles  
- Soporte de transporte UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos

## Requisitos típicos antes de la configuración

- Un dispositivo PT60 cargado o con alimentación listo para configurarse y dentro de cobertura celular.  
- Una tarjeta SIM con plan de datos activo y los detalles APN correctos del operador.  
- Un teléfono o herramienta capaz de enviar comandos SMS si se usará configuración por SMS.  
- Acceso a la guía de configuración oficial de iStartek o a herramientas del proveedor como referencia.  
- Una cuenta de Plaspy o acceso a la plataforma para confirmar que el dispositivo aparece y envía datos.  
- Conocimientos básicos de identificadores del dispositivo como el IMEI para poder relacionar el rastreador con el registro en Plaspy.

## Cómo se conecta este rastreador a Plaspy

El PT60 puede configurarse para enviar datos de ubicación y del dispositivo mediante la red celular al endpoint y puerto del servidor de Plaspy. Una vez que el dispositivo tenga ajustes APN funcionales y la dirección del servidor correcta, establecerá la conexión y transmitirá telemetría según su intervalo de reporte.

- El rastreador utiliza conectividad de datos GPRS/4G para enviar paquetes al endpoint compartido de Plaspy.  
- Configure el servidor como d.plaspy.com o 54.85.159.138 con puerto 8888 para que los datos lleguen a Plaspy.  
- Puede seleccionar UDP o TCP si el dispositivo requiere elegir transporte; Plaspy acepta ambos.  
- Plaspy detecta automáticamente el protocolo entrante del rastreador, por lo que no se requiere una selección de protocolo especial en la plataforma.  
- Los intervalos de reporte se controlan en el dispositivo y determinan con qué frecuencia Plaspy recibe actualizaciones de ubicación.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de iStartek, como comandos SMS o la herramienta de configuración del proveedor.  
2. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138.  
3. Establezca el puerto del servidor en 8888, tenga en cuenta que Plaspy usa este puerto para todos los dispositivos.  
4. Elija el protocolo de transporte UDP o TCP si el PT60 solicita una selección de transporte.  
5. Configure el APN del dispositivo usando el comando APN del operador para que el rastreador pueda usar datos móviles.  
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para aplicar los ajustes de red.  
7. Valide que el dispositivo reporte a Plaspy revisando la plataforma en busca de datos entrantes y usando el comando PARAM para consultar parámetros si está disponible.

## Comandos de configuración de ejemplo

Las instrucciones públicas de configuración del PT60 proporcionan comandos SMS para tareas comunes de configuración. Envíe estos comandos como mensajes SMS al número del dispositivo. Conserve los marcadores de posición tal como aparecen.

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
APN,{{apn}}[,{{apnu}},{{apnp}}]#
```
Nota: {{apn}} es el nombre del APN de su operador móvil. {{apnu}} y {{apnp}} son marcadores de posición opcionales para usuario y contraseña del APN y deben incluirse solo si su operador los requiere.

- Establecer el servidor GPRS usando el dominio y puerto de Plaspy
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente establecer el servidor GPRS usando la IP y puerto de Plaspy
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización a una actualización cada 60 segundos
```text
TIMER,60#
```

- Verificar los parámetros actuales del dispositivo
```text
PARAM#
```

Siga el orden exacto cuando el fabricante indique que el orden es importante. Use el reinicio de fábrica solo cuando sea necesario durante el aprovisionamiento inicial o la resolución de problemas.

## Notas de configuración

- El firmware del fabricante y el comportamiento de los comandos pueden variar según la revisión del dispositivo y la región; verifique los comandos con la documentación actual de iStartek.  
- El PT60 admite configuración vía SMS como se muestra, pero algunos instaladores prefieren herramientas del proveedor o métodos OTA cuando están disponibles.  
- Elegir UDP o TCP afecta cómo se transportan los paquetes; Plaspy acepta ambos y detectará el protocolo automáticamente.  
- Asegúrese de que sus credenciales APN sean correctas; use el marcador {{apn}} para el APN e incluya {{apnu}} y {{apnp}} cuando el operador requiera usuario o contraseña.  
- Debido a que Plaspy utiliza el mismo puerto para todos los dispositivos, solo necesita establecer el puerto 8888 y el endpoint de servidor correspondiente.

## Por qué usar Plaspy con esta configuración

Configurar el iStartek PT60 para reportar a Plaspy ofrece a las organizaciones visibilidad centralizada sobre la ubicación y la conectividad de los dispositivos. Con los ajustes de servidor compartidos y la detección automática de protocolo en Plaspy, en general solo se requiere configurar el APN y el servidor para que el dispositivo quede en línea; a partir de ahí Plaspy recibe y decodifica la telemetría entrante para monitoreo y uso operativo.

To learn more about Plaspy and supported device integration, visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and hardware details always confirm current information on the manufacturer site https://istartek.com/
