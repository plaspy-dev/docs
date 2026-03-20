---
slug: /queclink/gv57ceu/configuration
id: gv57ceu-configuration
sidebar_label: Configuration
title: QuecLink - GV57CEU Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GV57CEU con ajustes de servidor Plaspy y comandos SMS de ejemplo
keywords:
  - Configuración QuecLink GV57CEU
  - Instalación QuecLink GV57CEU
  - Configuración GV57CEU Plaspy
  - Ajustes del servidor GV57CEU
  - Comandos SMS GV57CEU
  - Ajustes APN GV57CEU
  - Configuración de dispositivo Plaspy
  - Configuración de rastreador Plaspy
  - Configuración rastreador GPS
  - Rastreador GPS micromovilidad
---

# QuecLink - Configuración GV57CEU

Esta página documenta el contexto público de configuración para usar el rastreador QuecLink GV57CEU con la plataforma Plaspy. Reúne los ajustes compartidos del servidor Plaspy y la guía práctica que instaladores y encargados de flota utilizan para preparar el GV57CEU y garantizar reportes fiables hacia Plaspy. Más abajo se incluyen comandos SMS de ejemplo que se emplean públicamente para programar el dispositivo y permitir la conectividad con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que los comandos de ejemplo aquí deben tratarse como referencias públicas y no como un manual exhaustivo del fabricante.

## Resumen de configuración

El objetivo de esta configuración es preparar el GV57CEU para comunicarse de forma consistente con Plaspy, de modo que la ubicación, el estado y los eventos de alarma aparezcan en la plataforma. Para el GV57CEU esto suele implicar programar las credenciales APN, el endpoint del servidor Plaspy, los intervalos de reporte y cualquier ajuste de entradas de alarma necesario, empleando el método de configuración que soporte el dispositivo.

- Programe el APN y las credenciales del operador móvil para que el rastreador tenga conectividad de datos.
- Configure el servidor de reporte GPRS apuntando al endpoint compartido de Plaspy para que el dispositivo reenvíe la telemetría.
- Seleccione el tipo de transporte si el equipo requiere elegir UDP o TCP y establezca el puerto común de Plaspy.
- Defina los intervalos de reporte y las entradas de alarma para que Plaspy reciba actualizaciones oportunas de ubicación y eventos.
- Verifique que el dispositivo se registre en la red celular y envíe paquetes correctamente a Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com para que el dispositivo reporte.
- IP del servidor: 54.85.159.138 como dirección alternativa del endpoint.
- Puerto: 8888 que es el puerto común de Plaspy utilizado por todos los dispositivos soportados.
- Transporte: soporte para UDP o TCP según la preferencia de configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta.

## Requisitos típicos antes de la configuración

- Una unidad GV57CEU alimentada e instalada con acceso a los SMS del dispositivo o a la interfaz oficial de configuración.
- Una SIM celular válida con datos habilitados y credenciales APN conocidas.
- Acceso al método de configuración del fabricante que soporte su unidad, como comandos SMS o software oficial de configuración.
- Conocimiento de la contraseña del dispositivo si se requiere para comandos SMS o remotos; el ejemplo público abajo utiliza la contraseña por defecto queclink.
- Un dispositivo o vehículo de prueba y tiempo para validar que el rastreador sea visible en el servidor Plaspy tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GV57CEU envía posiciones GNSS, estado y alarmas al endpoint y puerto compartidos de Plaspy para que los administradores de flota puedan ver la telemetría en tiempo real y el historial. Plaspy recibe esos mensajes por el transporte elegido y los asigna automáticamente al protocolo de rastreador correspondiente.

- Las posiciones GNSS y las marcas de tiempo se transmiten a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Los reportes de eventos y alarmas como SOS, encendido o notificaciones de manipulación se incluyen en los mensajes del dispositivo.
- El equipo puede configurarse con intervalos de reporte periódicos para que Plaspy reciba actualizaciones regulares de posición.
- El almacenamiento en búfer de mensajes garantiza continuidad de datos cuando el dispositivo pierde temporalmente conectividad y luego se reconecta a Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo endpoint y puerto funcionan con los modelos soportados.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial del fabricante o al software para el GV57CEU, como la configuración por SMS o la herramienta de QuecLink.
2. Ingrese d.plaspy.com como dominio del servidor o 54.85.159.138 como IP según prefiera usar DNS o un endpoint numérico.
3. Establezca el puerto en 8888. Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Seleccione UDP o TCP si el equipo requiere una elección explícita de transporte.
5. Programe las credenciales APN con los valores proporcionados por su operador móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si este necesita un reinicio para que los cambios entren en vigor.
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad y que el rastreador aparezca en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El GV57CEU puede configurarse usando comandos SMS. Los comandos que siguen son cadenas de SMS de ejemplo públicas. La contraseña de dispositivo mostrada en estos ejemplos es la por defecto queclink. Cambie la contraseña tras la configuración inicial si su política de seguridad lo requiere.

- Restaurar valores de fábrica (paso inicial opcional)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Ajustar la zona horaria UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Configurar el APN del operador
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Explicación: reemplace [apn] por el APN de su operador móvil, [apnu] por el usuario del APN si es requerido y [apnp] por la contraseña del APN si aplica. Si no se necesita usuario o contraseña, deje los marcadores en blanco según corresponda.

- Establecer el servidor GPRS a Plaspy usando dominio e IP con el puerto 8888
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Este comando programa el servidor de reporte a d.plaspy.com y a 54.85.159.138 y establece el puerto 8888 para los reportes.

- Establecer el intervalo de actualización a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Habilitar notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Después de enviar estos comandos SMS, verifique que el dispositivo responda y luego confirme que el equipo aparece y reporta datos en Plaspy.

## Notas de configuración

- Las versiones de firmware y las variantes regionales pueden cambiar los comandos disponibles y el orden de los parámetros. Confirme que la sintaxis del comando coincide con el firmware de su dispositivo.
- El GV57CEU soporta configuración por SMS como se muestra aquí; en algunas implementaciones se prefiere el software del fabricante o herramientas de configuración por USB para aprovisionamientos masivos o cifrados.
- Plaspy admite TCP y UDP. Elija el transporte que se ajuste a su red y a las necesidades del firmware; Plaspy detectará el protocolo del rastreador automáticamente.
- Plaspy usa el mismo puerto para todos los dispositivos soportados. Configure el puerto 8888 tal como se muestra en el comando de servidor de ejemplo.
- Mantenga los marcadores [apn], [apnu] y [apnp] listos y sólo complételos con las credenciales proporcionadas por su operador móvil.

## Por qué usar Plaspy con esta configuración

Usar el GV57CEU con Plaspy ofrece una forma directa y consistente de recopilar datos de ubicación, estado y alarmas de activos de micromovilidad y transporte ligero. Los ajustes de servidor compartidos de Plaspy hacen que el aprovisionamiento del dispositivo sea predecible, y la detección automática de protocolos de la plataforma reduce la necesidad de gestionar mapeos de protocolos al trabajar con modelos de rastreador diversos.

Learn more about Plaspy and how it supports device integration at https://www.plaspy.com. For the latest device specific commands, firmware behavior and configuration details always verify current information on the manufacturer website https://www.queclink.com/
