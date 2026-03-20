---
slug: /xexun/xt_013/configuration
id: xt_013-configuration
sidebar_label: Configuration
title: Xexun - XT-013 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Xexun XT-013 con ajustes de servidor Plaspy y comandos SMS para integración
keywords:
  - Configuración Xexun XT-013
  - Configuración XT-013
  - Configuración rastreador GPS Xexun
  - Compatibilidad Plaspy
  - Ajustes servidor rastreador GPS
  - Comandos SMS XT-013
  - Configuración servidor GPRS
  - Configuración rastreo de vehículos
  - Configuración rastreo de activos
  - Integración plataforma de rastreo
---

# Xexun - Configuración XT-013

Esta página documenta el contexto público de configuración para usar el rastreador Xexun XT-013 con Plaspy. Se enfoca en los pasos prácticos y los valores de servidor necesarios para que el XT-013 reporte a Plaspy y los dispositivos sean visibles y gestionables en la plataforma. Utilice esta guía junto con la documentación del fabricante para detalles específicos del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El XT-013 admite configuración por SMS y ajustes de servidor GPRS; los comandos que se muestran a continuación reflejan el flujo público común por SMS para preparar el dispositivo y que pueda comunicarse con Plaspy.

## Resumen de la configuración

Este proceso prepara el XT-013 para enviar datos de ubicación y alertas a Plaspy usando el endpoint y puerto compartidos de Plaspy. Los comandos SMS públicos configuran el APN y los ajustes GPRS, definen el comportamiento de reporte y, opcionalmente, restauran valores de fábrica antes del despliegue.

- Configure el APN del equipo y las credenciales de APN opcionales para que el rastreador pueda establecer datos GPRS.
- Apunte el rastreador al dominio o IP del servidor Plaspy para que envíe la telemetría a Plaspy.
- Defina el intervalo de reporte para que Plaspy reciba actualizaciones con la frecuencia deseada.
- Valide la conectividad y que el dispositivo sea visible en Plaspy después de guardar los ajustes.
- Opcionalmente, restaure los ajustes de fábrica antes de una configuración desde cero cuando sea necesario.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP (the device may be configured to use UDP or TCP on port 8888)  
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos previos

- Un XT-013 con alimentación y batería en buen estado o alimentación externa según su instalación.  
- Una tarjeta SIM instalada con plan de datos activo y capacidad de SMS para enviar comandos de configuración.  
- El APN del operador móvil y, si aplica, nombre de usuario y contraseña del APN para la configuración GPRS.  
- Acceso al método de configuración que soporte su unidad, comúnmente SMS en el XT-013.  
- Los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) y la elección de transporte (UDP o TCP).  
- Capacidad para enviar y recibir SMS al dispositivo durante la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el XT-013 establece una conexión GPRS y envía actualizaciones periódicas de posición y eventos al endpoint de Plaspy. Plaspy recibe esos mensajes en el servidor y puerto compartidos, detecta automáticamente el protocolo del dispositivo y procesa la ubicación y los eventos de alerta para su visualización y monitoreo.

- El rastreador se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.  
- Plaspy escucha en el mismo puerto para todos los dispositivos compatibles y determina el protocolo de forma automática.  
- Los reportes de ubicación y las alertas de eventos (por ejemplo, alarma por movimiento, alertas de geocerca, exceso de velocidad y batería baja) se envían al endpoint de Plaspy.  
- Plaspy presenta la telemetría y los eventos recibidos en la plataforma para monitoreo operativo e historial.  
- Una configuración exitosa hace que el rastreador sea visible en Plaspy y habilita el seguimiento en tiempo real y las notificaciones.

## Flujo típico de configuración

1. Confirme que tiene el número telefónico del dispositivo, la SIM está activa y puede enviar comandos SMS usando el método oficial de Xexun.  
2. Si lo desea, restaure opcionalmente los ajustes de fábrica del dispositivo antes de configurar.  
3. Use SMS o la herramienta del proveedor para ingresar el servidor Plaspy como d.plaspy.com o la IP 54.85.159.138.  
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el rastreador requiere seleccionar el transporte.  
5. Configure el APN del operador y, opcionalmente, el usuario y la contraseña del APN para que los datos GPRS puedan conectarse.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.  
7. Valide que el XT-013 reporte a Plaspy y aparezca en la plataforma con los intervalos de actualización y las alertas esperadas.

## Comandos de ejemplo para configuración

El XT-013 puede configurarse enviando comandos por SMS. Los comandos de ejemplo a continuación usan la contraseña predeterminada del dispositivo 123456, tal como se muestra en ejemplos públicos del fabricante. Mantenga los marcadores de posición al reemplazarlos por sus valores reales.

- Restauración inicial opcional a valores de fábrica (usar solo si es necesario)
```sms
begin123456
```

- Establecer el APN del operador (reemplace [apn] con el APN de su operador)
```sms
apn123456 [apn]
```

- Establecer el nombre de usuario del APN si se requiere (reemplace [apnu] con el usuario APN)
```sms
apnuser123456 [apnu]
```

- Establecer la contraseña del APN si se requiere (reemplace [apnp] con la contraseña APN)
```sms
apnpasswd123456 [apnp]
```

- Configurar el servidor GPRS al endpoint y puerto de Plaspy (este ejemplo usa la IP y el puerto de Plaspy)
```sms
adminip123456 54.85.159.138 8888
```

- Establecer el modo GPRS (envíe tal como se muestra; la función depende del firmware del dispositivo)
```sms
gprsmode123456
```

- Establecer el intervalo de actualización a 60 segundos (formato de ejemplo mostrado por el fabricante)
```sms
t060s***n123456
```

Notas sobre los marcadores de posición: [apn] es la cadena APN de su operador móvil. [apnu] y [apnp] son campos opcionales para usuario y contraseña del APN si su operador los exige. Reemplácelo exactamente con los valores del operador al enviar los SMS.

## Notas de configuración

- El conjunto de comandos SMS anterior es un ejemplo público; la sintaxis exacta puede variar según el firmware y las variantes regionales del dispositivo.  
- Use la contraseña predeterminada 123456 solo si no se ha cambiado. Si su dispositivo tiene otra contraseña, sustitúyala en cada comando.  
- Elija UDP o TCP según las opciones de su dispositivo; Plaspy soporta ambos en el puerto 8888 y detectará el protocolo automáticamente.  
- Los comandos de usuario y contraseña del APN son opcionales y solo son necesarios si su operador móvil exige credenciales.  
- Si realiza una restauración de fábrica con begin123456, trate ese paso como opcional y solo cuando prepare el dispositivo para una implementación desde cero.

## Por qué usar Plaspy con esta configuración

Configurar el Xexun XT-013 para que reporte a Plaspy ofrece a las organizaciones una forma sencilla de centralizar datos de ubicación, eventos y alertas de activos y vehículos. Con ajustes de servidor compartidos y detección automática de protocolo en Plaspy, muchos modelos de dispositivos, incluido el XT-013, pueden ponerse en línea rápidamente para monitoreo, cumplimiento de geocercas e informes operativos.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific commands, firmware notes, and official setup documentation verify details with the manufacturer at https://www.xexun.com/ as vendor methods and firmware behavior can change over time.
