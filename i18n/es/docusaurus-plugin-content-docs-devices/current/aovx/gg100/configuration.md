---
slug: /aovx/gg100/configuration
id: gg100-configuration
sidebar_label: Configuration
title: AOVX - GG100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del AOVX GG100 para Plaspy y su integración práctica en rastreo
keywords:
  - configuración AOVX GG100
  - configuración AOVX GG100 para Plaspy
  - configuración de servidor GG100
  - configuración de rastreador GPS GG100
  - configuración de software de rastreo GG100
  - configuración de plataforma GPS GG100
  - rastreador GPS compatible con Plaspy
  - configuración de rastreador GPS de mercancías
  - configuración de rastreo de activos
  - configuración de rastreador para cadena de frío
---

# AOVX - GG100 Configuration

Esta página cubre el contexto público de configuración para usar el AOVX GG100 con Plaspy. El GG100 se describe como un rastreador GPS ultradelgado para mercancías, diseñado para desplegarse sin instalación en operaciones de logística y cadena de suministro, con posicionamiento multimodo y sensores ambientales integrados. La información pública de configuración que se muestra a continuación se centra en cómo apuntar el dispositivo a Plaspy y qué verificar antes de su implementación.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Esto significa que se usa el mismo puerto de Plaspy para todos los dispositivos compatibles, aunque los pasos exactos de configuración del fabricante pueden variar según el firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor utilizadas para aplicar la configuración.

## Panorama de la configuración

Configurar el GG100 para Plaspy consiste principalmente en preparar el dispositivo para comunicarse con el punto de conexión del servidor de Plaspy, confirmar los parámetros de transporte y validar que el rastreador reporte correctamente después de la configuración. El flujo público de configuración disponible para este modelo utiliza comandos SMS, lo cual es una forma práctica de aplicar los parámetros de servidor y reporte antes de que el rastreador comience a enviar datos.

- Configure el rastreador para que reporte al punto de conexión compartido del servidor de Plaspy.
- Use el mismo valor de puerto que Plaspy utiliza para los dispositivos compatibles.
- Aplique un intervalo de reporte que se ajuste a las necesidades de monitoreo de su operación.
- Cambie el dispositivo al modo de reporte GPRS para que pueda transmitir datos.
- Verifique los parámetros guardados después de la configuración.
- Confirme que el dispositivo aparezca en Plaspy una vez aplicada la configuración.

## Ajustes del servidor de Plaspy

- El dominio del servidor usado para la configuración es d.plaspy.com.
- La dirección IP del servidor usada para la configuración es 54.85.159.138.
- El puerto es 8888.
- El dispositivo puede configurarse mediante UDP o TCP en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta.
- Todos los dispositivos compatibles con Plaspy usan el mismo valor de puerto, lo que simplifica el despliegue en entornos con modelos de rastreadores mixtos.

## Requisitos habituales antes de la configuración

- Tenga el rastreador encendido y listo para configurarse.
- Confirme que puede acceder al método o software oficial de configuración del fabricante.
- Asegúrese de tener listos los datos públicos del servidor de Plaspy antes de enviar comandos o guardar la configuración.
- Verifique que el dispositivo esté destinado a comunicarse mediante el modo de transporte compatible con su implementación.
- Revise la documentación del fabricante para identificar cualquier diferencia de configuración específica por modelo o firmware.
- Mantenga el dispositivo cerca para poder confirmar que los cambios de configuración se aceptan y se conservan.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, se espera que el GG100 envíe sus datos de rastreo y del dispositivo al punto de conexión compartido del servidor de Plaspy en el puerto 8888. Luego, Plaspy identifica el protocolo de forma automática, lo que ayuda a simplificar la incorporación y reduce la necesidad de seleccionar el protocolo manualmente en la plataforma.

- El rastreador se apunta a d.plaspy.com o a la IP del servidor correspondiente 54.85.159.138.
- Los datos se envían por el puerto 8888, que es el puerto común de Plaspy para los dispositivos compatibles.
- El dispositivo puede usar UDP o TCP según la configuración del fabricante y el método de despliegue.
- Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo comienza a comunicarse.
- La visibilidad en Plaspy depende de que el rastreador aplique correctamente los ajustes y reporte a la plataforma.
- La configuración está pensada para respaldar el monitoreo operativo, los reportes y la visibilidad continua del dispositivo.

## Flujo típico de configuración

1. Abra el método oficial de configuración de AOVX o la herramienta del proveedor utilizada para el GG100.
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o use la dirección IP 54.85.159.138 si su flujo requiere ingreso directo.
3. Configure el puerto de comunicación en 8888.
4. Elija UDP o TCP solo si el dispositivo o la herramienta de configuración le solicita seleccionar un modo de transporte.
5. Aplique el intervalo de reporte y otros parámetros básicos necesarios para el despliegue.
6. Guarde la configuración y confirme que los ajustes se escribieron en el rastreador.
7. Reinicie el dispositivo si el flujo del fabricante requiere un reinicio para que los cambios surtan efecto.
8. Valide que el rastreador aparezca en Plaspy y comience a reportar datos.

## Ejemplos de comandos de configuración

El flujo público de configuración del GG100 se basa en comandos SMS. Los comandos a continuación siguen la secuencia de configuración publicada y usan marcadores de posición cuando se requieren valores específicos del operador.

- Configure el APN del operador

```text
APN,{{apn}}#
```

Si su operador requiere un usuario y una contraseña, el mismo comando APN puede incluirlos como marcadores de posición.

```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Configure el servidor GPRS hacia Plaspy

```text
SERVER,1,d.plaspy.com,8888,0#
```

- Establezca el intervalo de actualización

```text
TIMER,60,60#
```

- Cambie el dispositivo al modo GPRS

```text
GPRSON,1#
```

- Revise la configuración guardada

```text
PARAM#
```

- Revise el estado del rastreador

```text
STATUS#
```

En estos ejemplos, `{{apn}}` es el nombre del punto de acceso del operador, mientras que `{{apnu}}` y `{{apnp}}` son marcadores de posición opcionales para el usuario y la contraseña del APN cuando el operador los requiere.

## Notas de configuración

- El flujo público de comandos usa configuración por SMS, pero la herramienta exacta o el formato del mensaje pueden variar según el firmware y el paquete regional.
- Se usa el mismo puerto de Plaspy en los dispositivos compatibles, por lo que el GG100 debe apuntarse al puerto 8888 al aplicar los ajustes públicos del servidor.
- El soporte para UDP o TCP puede depender del firmware del dispositivo y del método de configuración disponible en su despliegue.
- Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo se conecta, lo que ayuda a reducir la configuración manual de la plataforma.
- Se recomienda revisar la documentación del fabricante para conocer el comportamiento más reciente del GG100, el formato de los mensajes y cualquier detalle específico del firmware.

## Por qué usar Plaspy con esta configuración

Usar el GG100 con Plaspy ofrece a las organizaciones una forma práctica de centralizar la visibilidad de los rastreadores sin complicar la configuración pública del servidor. El punto de conexión compartido de Plaspy, el puerto común y la detección automática de protocolo ayudan a agilizar el despliegue, especialmente cuando está configurando varios dispositivos o trabajando con distintos modelos de rastreadores.

Para los equipos que administran envíos, activos o mercancías monitoreadas, esta configuración respalda un flujo de trabajo ordenado desde la configuración inicial del dispositivo hasta la supervisión operativa continua. Para conocer más sobre Plaspy, visite https://www.plaspy.com. Para obtener los detalles más recientes sobre configuración específica del dispositivo, comportamiento del firmware y orientación del fabricante, verifique la información vigente en el sitio oficial de AOVX en https://www.aovx.com/.
