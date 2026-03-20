---
slug: /eelink/k6/configuration
id: k6-configuration
sidebar_label: Configuration
title: EElink - K6 Configuration
sidebar_class_name: menu_item_tracker
description: Instrucciones públicas para configurar el rastreador GPS EElink K6 con Plaspy usando ajustes de servidor compartido y comandos SMS
keywords:
  - configuración EElink K6
  - instalación EElink K6
  - configuración servidor EElink K6
  - Plaspy EElink K6
  - configuración rastreador GPS
  - configuración rastreo de vehículos
  - comandos SMS K6
  - configuración GPRS
  - configuración gestión de flotas
  - ajustes protocolo K6
---

# EElink - K6 Configuración

Esta página describe el contexto público de configuración para usar el rastreador GPS EElink K6 con la plataforma Plaspy. Reúne los ajustes del servidor compartido de Plaspy y los comandos SMS para K6 que se usan comúnmente para apuntar el dispositivo a Plaspy y habilitar el seguimiento en tiempo real y el envío de eventos.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante para el K6 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los ejemplos a continuación usan el flujo de comandos SMS públicos documentados para la configuración inicial y la verificación.

## Resumen de la configuración

El objetivo de la configuración es preparar el K6 para que se comunique de forma fiable con Plaspy y así el dispositivo aparezca y reporte correctamente en la plataforma. Para el K6 esto normalmente implica usar comandos SMS o la herramienta del fabricante para establecer el APN de la red, el endpoint del servidor, el transporte y el intervalo de reporte.

- Configure el APN del dispositivo para que pueda usar GPRS para subir datos.
- Apunte el dispositivo al endpoint del servidor de Plaspy y al puerto compartido de Plaspy.
- Seleccione el modo de transporte si el equipo requiere elegir entre UDP o TCP.
- Establezca un intervalo periódico de envío de ubicación que cumpla sus necesidades de seguimiento.
- Verifique los ajustes y confirme que el dispositivo sea visible en Plaspy después de conectarse.

## Ajustes del servidor de Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- El transporte puede configurarse como UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos previos típicos

- Un rastreador K6 con batería cargada y encendido, con acceso a la configuración por SMS o a la herramienta oficial de configuración
- Una tarjeta SIM activa con datos GPRS habilitados y el APN correcto del operador
- Un teléfono o servicio capaz de enviar comandos SMS al dispositivo o acceso a la utilidad de configuración del fabricante
- Conocimientos básicos del IMEI del dispositivo y de cómo verificar las respuestas del equipo vía SMS
- Acceso a la documentación actualizada de EElink o soporte del proveedor para detalles específicos de firmware

## Cómo se conecta este rastreador a Plaspy

El EElink K6 sube posiciones y eventos del dispositivo a Plaspy usando GPRS. Durante la configuración usted establecerá que el K6 reporte al endpoint y puerto compartidos de Plaspy para que la plataforma reciba actualizaciones de ubicación, alarmas y mensajes de estado.

- El rastreador usa GPRS para abrir una conexión de datos y enviar reportes periódicos
- La dirección del servidor se configura como d.plaspy.com o la IP del servidor Plaspy para asegurar la entrega
- La comunicación ocurre en el puerto 8888, que es el puerto compartido que Plaspy usa para todos los dispositivos
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar manualmente el protocolo en la plataforma
- Una vez conectado, el dispositivo se vuelve visible en Plaspy para monitoreo en tiempo real y reproducción del historial

## Flujo típico de configuración

1. Acceda al método oficial de configuración de EElink para el K6, como comandos SMS o el software del fabricante.
2. Configure el APN del dispositivo para que coincida con su operador SIM usando el comando APN o la herramienta.
3. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138 como valor SERVER.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración en el equipo y, si es necesario, realice un reinicio opcional.
6. Valide que el dispositivo reporte a Plaspy comprobando el estado en la plataforma y utilizando los comandos de verificación del dispositivo.
7. Si corresponde, ajuste el intervalo de subida o las configuraciones de alarma para que coincidan con sus necesidades operativas.

## Comandos de ejemplo para la configuración

El K6 soporta configuración por SMS. Los siguientes comandos SMS públicos se usan comúnmente para aplicar la configuración mostrada arriba. Envíe estos comandos como mensajes SMS al rastreador en el orden indicado al realizar una configuración inicial.

- Reinicio de fábrica opcional cuando se parte de un estado desconocido
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0 como ejemplo
```text
GMT,E,0#
```

- Configurar el APN para su operador móvil
```text
APN,{{apn}}#
```
Si su operador requiere nombre de usuario o contraseña del APN, incluya los marcadores opcionales como se muestra
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Nota sobre los marcadores
- {{apn}} es el valor del APN del operador requerido para GPRS
- {{apnu}} es el nombre de usuario del APN si lo exige el operador
- {{apnp}} es la contraseña del APN si lo exige el operador

- Configurar el servidor GPRS a Plaspy por dominio usando UDP o TCP en el puerto 8888
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente, configurar el servidor GPRS a la IP del servidor Plaspy directamente
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización de ubicación a 60 segundos
```text
TIMER,60#
```

- Consultar parámetros actuales del dispositivo para verificar cambios
```text
PARAM#
```

## Notas de configuración

- La configuración basada en SMS es un método comúnmente soportado para el K6, pero también puede usarse la herramienta del fabricante o un portal de configuración según el firmware.
- El comportamiento y los comandos disponibles pueden variar según la versión de firmware y la revisión de hardware; siempre verifique los comandos con la documentación de EElink correspondiente a su dispositivo.
- Elija UDP o TCP según la preferencia del instalador cuando el dispositivo requiera una selección explícita del transporte. Plaspy acepta ambos en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del dispositivo cuando el rastreador se conecte.
- Mantenga un registro de los cambios y pruebe la conectividad después de cada paso para asegurarse de que el dispositivo esté reportando según lo esperado.

## Por qué usar Plaspy con esta configuración

Usar el EElink K6 con Plaspy ofrece una vía simple para integrar datos de ubicación de activos y vehículos en una única plataforma de gestión de flotas. Configurar el K6 para apuntar a d.plaspy.com o a la IP del servidor Plaspy en el puerto 8888 permite que el dispositivo reporte actualizaciones de ubicación y eventos, de modo que los equipos puedan monitorear movimientos, reaccionar a alarmas y revisar el historial en un solo lugar.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y para las instrucciones específicas por dispositivo y detalles de firmware consulte el sitio de EElink en https://www.eelink.com.cn/ . Las especificaciones del fabricante y los pasos de configuración pueden cambiar con el tiempo, por lo que siempre confirme las instrucciones vigentes con la documentación oficial de EElink.
