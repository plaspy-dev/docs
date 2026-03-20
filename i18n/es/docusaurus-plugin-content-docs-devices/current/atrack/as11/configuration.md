---
slug: /atrack/as11/configuration
id: as11-configuration
sidebar_label: Configuration
title: ATrack - AS11 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para integrar ATrack AS11 con Plaspy, con ajustes de servidor, ejemplos de comandos AT y pasos prácticos
keywords:
  - Configuración ATrack AS11
  - Instalación ATrack AS11
  - Configuración AS11 Plaspy
  - Configuración rastreador GPS ATrack
  - Configuración servidor AS11
  - Guía configuración rastreador de activos
  - Configuración seguimiento de flotas AS11
  - Comandos AT AS11
  - Integración rastreadores Plaspy
  - Configuración conectividad AS11
---

# ATrack - AS11 Configuración

Esta página detalla el contexto público de configuración para usar el tracker ATrack AS11 con Plaspy. Se enfoca en los ajustes y el flujo de trabajo prácticos necesarios para que el AS11 reporte posiciones GNSS, eventos de E/S y telemetría a Plaspy mediante el punto de enlace compartido de la plataforma. Se incluyen ejemplos de comandos AT extraídos de la configuración del modelo como referencia para instaladores e integradores.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del tracker, por lo que el punto de enlace del servidor y el puerto siguen el mismo patrón para todos los tipos de equipo. Los pasos y herramientas del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación o las utilidades del proveedor; consulte la documentación oficial de ATrack para controles específicos del dispositivo y el conjunto de herramientas de configuración del fabricante.

## Resumen de la configuración

El objetivo de la configuración es preparar el AS11 para que envíe de forma fiable ubicación y telemetría a Plaspy, validar la conectividad y confirmar que el dispositivo aparece en la plataforma. En el AS11 ello normalmente implica establecer el modo de reporte, aplicar el servidor GPRS o la IP y puerto, elegir el transporte (UDP o TCP) y activar la notificación de eventos para entradas y alarmas.

- Configure el dispositivo para que use el punto de enlace de Plaspy y así la telemetría se dirija a la plataforma.
- Defina intervalos de reporte y reglas de eventos según sus necesidades de monitoreo.
- Verifique el APN y los parámetros GPRS para que se puedan establecer sesiones de datos móviles.
- Elija el modo de transporte UDP o TCP y confirme que el dispositivo comunica con el puerto 8888 de Plaspy.
- Valide que el tracker sea visible en Plaspy y que eventos como ACC o cambios en entradas se reporten correctamente.

## Ajustes del servidor de Plaspy

Configure el dispositivo para que reporte a los siguientes valores de Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del tracker.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be used depending on device preference
- Plaspy automatically detects the tracker protocol to interpret incoming messages

## Requisitos previos antes de la configuración

- Una unidad AS11 con batería cargada o alimentación externa conectada y accesible para su configuración.
- Tarjeta SIM activa con plan de datos y las credenciales APN correctas del operador celular.
- Acceso al método de configuración ATrack correspondiente a su variante de dispositivo, como ADM, RS232 serial o canal SMS/AT según lo que soporte el firmware del equipo.
- Identificador del dispositivo o número de serie disponible para emparejar la unidad física con las entradas en su cuenta de Plaspy si administra dispositivos en la plataforma.
- Un terminal o herramienta de configuración capaz de enviar comandos AT o importar scripts de configuración del dispositivo.
- Visibilidad de red que permita conexiones salientes a d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Cómo se conecta este tracker a Plaspy

Cuando se configura para Plaspy, el AS11 envía posiciones GNSS, eventos de entrada y telemetría al punto de enlace compartido de Plaspy en el puerto 8888. Plaspy procesa la corriente de datos entrante y mapea automáticamente los campos del protocolo para que el dispositivo sea visible en la plataforma sin cambios por dispositivo en el servidor.

- El tracker apunta a d.plaspy.com o a la IP del servidor de Plaspy y utiliza el puerto 8888 para subir los datos.
- El transporte puede ser UDP o TCP según la preferencia del instalador y las opciones del firmware del dispositivo.
- El reporte de eventos como ACC o cambios en entradas digitales se habilita mediante la configuración del dispositivo para generar informes inmediatos hacia Plaspy.
- Mensajes en cola y datos registrados se suben a Plaspy cuando hay conectividad disponible.
- Plaspy detecta automáticamente el protocolo empleado por el AS11 y parsea la telemetría entrante para su visualización y alertas.

## Flujo de configuración típico

1. Acceda al método oficial de configuración ATrack para su unidad AS11 (herramienta ADM, consola RS232, canal SMS AT o software de configuración del fabricante).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido que Plaspy usa para todos los equipos.
4. Seleccione UDP o TCP si el AS11 requiere elegir el transporte para reportes GPRS.
5. Configure el APN y otros parámetros GPRS para que el dispositivo pueda establecer una sesión de datos celulares.
6. Aplique o guarde la configuración y reinicie el equipo si el firmware requiere reboot para activar los ajustes.
7. Valide la conectividad y confirme que el dispositivo reporta a Plaspy revisando la plataforma en busca de telemetría entrante y, si es posible, usando comandos de verificación del dispositivo.

## Comandos de configuración de ejemplo

La configuración modelo incluye ejemplos públicos de comandos AT usados para ajustar reporte de eventos, intervalos, formato de mensaje y el servidor GPRS. Mantenga los marcadores de posición tal como se indican:

- Configuración de reporte de evento ACC y entradas
- Intervalo de rastreo establecido en 60 segundos
- Formato de reporte binario
- Configuración del servidor GPRS incluyendo marcadores APN y la IP y puerto de Plaspy
- Comando de verificación de estado

Comandos en el orden provisto por la configuración del modelo del dispositivo:

1. Configure el reporte de evento ACC y acciones de entrada
``` 
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

2. Ajuste el intervalo de tiempo a 60 segundos
``` 
AT$TRAC=1,60,,,,,2
```

3. Establezca el formato de mensaje binario
``` 
AT$FORM=1,@P,0,""
```

4. Configure el servidor GPRS y los parámetros APN para Plaspy
``` 
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
- [apn] es la cadena APN del operador necesaria para establecer GPRS.
- [apnu] es el nombre de usuario APN cuando el operador requiere autenticación.
- [apnp] es la contraseña APN cuando el operador requiere autenticación.

5. Verifique el estado del dispositivo
``` 
AT$INFO=?
```

Nota: Mantenga los comandos en el mismo orden si aplica todo como un único script de configuración. Si su despliegue usa d.plaspy.com en lugar de la IP numérica, puede reemplazar la IP por d.plaspy.com en el comando GPRS si el dispositivo resuelve DNS para nombres de servidor.

## Notas de configuración

- Diferentes revisiones de firmware o variantes de hardware del AS11 pueden usar una sintaxis AT ligeramente distinta o parámetros adicionales; consulte las notas de la versión del dispositivo antes de aplicar comandos.
- Si el equipo soporta UDP y TCP, elija el transporte que mejor se adapte a su entorno de red y al comportamiento del operador; UDP se usa comúnmente por su menor overhead, mientras que TCP aporta fiabilidad de sesión.
- Preserve los marcadores de posición [apn], [apnu] y [apnp] al documentar scripts; sustitúyalos por los valores del operador durante la configuración.
- Algunos instaladores prefieren el dominio d.plaspy.com por facilidad de mantenimiento, mientras que otros usan la IP numérica 54.85.159.138 para evitar dependencia de DNS; ambos son válidos para Plaspy.
- Si la configuración se puede realizar por SMS o gestión remota, verifique que los comandos sean aceptados por el firmware vigente antes de desplegar masivamente.

## Por qué usar Plaspy con esta configuración

Usar el AS11 con Plaspy ofrece una vía sencilla para aportar rastreo de activos robusto y telemetría a una única plataforma. El registro en cola del AS11, sus entradas configurables y la conectividad celular lo hacen ideal para activos remotos y montajes de larga duración, donde Plaspy puede agregar datos de ubicación, eventos y sensores para monitoreo, alertas e informes operativos.

Learn more about Plaspy and how it supports multi device deployments at https://www.plaspy.com. For the latest device specific commands, firmware behavior, and manufacturer details always verify current information on the ATrack website https://www.atrack.com.tw/.
