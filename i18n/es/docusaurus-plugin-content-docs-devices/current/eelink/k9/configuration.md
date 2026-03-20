---
slug: /eelink/k9/configuration
id: k9-configuration
sidebar_label: Configuration
title: EElink - K9 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador EElink K9 con ajustes de servidor Plaspy y comandos SMS para conectividad
keywords:
  - configuración EElink K9
  - instalación EElink K9
  - EElink K9 Plaspy
  - configuración del rastreador GPS K9
  - configuración de servidor K9
  - comandos SMS K9
  - configuración rastreador EElink
  - integración rastreador GPS Plaspy
  - rastreo de vehículos K9
  - configuración GPRS K9
---

# EElink - Configuración del K9

Esta página ofrece el contexto público de configuración para utilizar el rastreador GPS EElink K9 con la plataforma Plaspy. Está enfocada en los ajustes prácticos de servidor y comandos que preparan su dispositivo para comunicarse con Plaspy y quedar visible en la plataforma. Cuando es posible, incluimos ejemplos de comandos SMS y pasos de verificación publicados para este modelo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El K9 admite la configuración por SMS como una opción pública documentada, por lo que los ejemplos a continuación reflejan los comandos SMS y el flujo de trabajo común para apuntar el rastreador a Plaspy.

## Resumen de configuración

Configurar el EElink K9 para su uso con Plaspy prepara el dispositivo para enviar ubicación y estados a un punto final central compartido de Plaspy. El proceso generalmente asegura que el rastreador tenga acceso de red adecuado, la APN correcta para GPRS y que la dirección y puerto del servidor apunten a los valores de Plaspy para que la plataforma pueda recibir e interpretar los mensajes del dispositivo.

- Configure la APN del dispositivo para que los datos GPRS estén disponibles para las subidas a Plaspy.
- Ajuste la dirección del servidor del K9 para que apunte al endpoint de Plaspy y establezca el puerto 8888.
- Seleccione el modo de transporte (UDP o TCP) si el rastreador requiere una selección explícita.
- Defina un intervalo de reporte para controlar la frecuencia con la que el K9 sube la ubicación a Plaspy.
- Verifique la configuración con la comprobación de parámetros y confirme que el dispositivo aparece en Plaspy.
- Opcionalmente, restablezca a valores de fábrica durante la provisión inicial si es necesario.

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com para configuración basada en DNS
- IP del servidor 54.85.159.138 como alternativa al dominio
- Puerto 8888 que utiliza Plaspy para las conexiones de rastreadores
- Soporte de transporte UDP o TCP; el K9 puede configurarse para usar cualquiera de los dos
- Detección automática de protocolo en Plaspy, de modo que la plataforma detecta el protocolo del rastreador al conectarse

Plaspy usa el mismo puerto para todos los dispositivos compatibles e intentará detectar el protocolo del dispositivo automáticamente cuando un rastreador se conecte al servidor.

## Requisitos típicos antes de la configuración

- Un EElink K9 cargado y operativo con acceso a la configuración vía SMS o a la herramienta de configuración del fabricante
- Una tarjeta SIM aprovisionada con datos y capacidad SMS y la información APN correcta proporcionada por el operador de red
- Acceso a la APN del operador, y opcionalmente usuario y contraseña de APN si el operador los requiere
- Conocimientos básicos para enviar comandos SMS al dispositivo o acceso al software de provisión del fabricante
- Señal GSM y GPS adecuada en la ubicación del dispositivo para permitir las subidas por GPRS y la geolocalización por satélite
- Una cuenta en Plaspy y la capacidad de registrar o identificar el dispositivo en su espacio de trabajo Plaspy para que sea visible una vez que se conecte

## Cómo se conecta este rastreador a Plaspy

El EElink K9 se configura para enviar actualizaciones periódicas de ubicación y estado al endpoint y puerto del servidor Plaspy. Una vez que el dispositivo apunta a la dirección de Plaspy y tiene una conexión de datos activa, Plaspy recibe los mensajes y muestra el dispositivo en la plataforma para seguimiento en tiempo real y monitoreo de eventos.

- El rastreador sube datos de posición por GPRS al endpoint del servidor Plaspy.
- Los mensajes del dispositivo se envían a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy maneja tanto UDP como TCP y detecta automáticamente el protocolo del rastreador.
- El rastreador puede configurarse para reportar en un intervalo elegido para que las actualizaciones aparezcan en Plaspy según lo requerido.
- Eventos como SOS, geovalla y alarmas de velocidad (si están habilitadas en el dispositivo) se entregan a Plaspy para notificaciones y monitoreo.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante EElink para el K9, como comandos SMS o la herramienta de provisión del proveedor.
2. Configure la APN del dispositivo usando los valores de APN provistos por su operador móvil.
3. Introduzca el endpoint del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138.
4. Establezca el puerto en 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración en el dispositivo y realice cualquier reinicio recomendado.
6. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta Plaspy, usando el comando PARAM# o la lista de dispositivos en Plaspy para confirmar la conectividad.

## Ejemplos de comandos de configuración

El K9 admite configuración mediante SMS. Los siguientes comandos SMS públicos aparecen en la documentación del fabricante y se muestran en el orden comúnmente usado para la instalación. Envíe cada línea como un mensaje SMS individual al número del dispositivo.

- Restablecimiento inicial opcional a fábrica (use solo si necesita borrar ajustes existentes)
```
FACTORY#
```

- Ajuste de la zona horaria a UTC 0
```
GMT,E,0#
```

- Configure la APN del operador. Reemplace [apn] con la APN de su red. Los marcadores opcionales de usuario y contraseña son [apnu] y [apnp] respectivamente. Inclúyalos solo si su operador los solicita.
```
APN,[apn],[apnu],[apnp]#
```
Si no se requiere usuario ni contraseña, el comando puede ser:
```
APN,[apn]#
```

- Configure el servidor GPRS al dominio de Plaspy usando la forma de dominio
```
SERVER,1,d.plaspy.com,8888#
```

- O configure el servidor GPRS a la IP de Plaspy usando la forma IP
```
SERVER,0,54.85.159.138,8888#
```

- Establezca el intervalo de subida/reporte a 60 segundos
```
TIMER,60#
```

- Compruebe los parámetros actuales para verificar la configuración
```
PARAM#
```

Notas sobre estos comandos:
- Mantenga el orden al aplicar los comandos durante la provisión inicial cuando sea apropiado.
- Conserve los marcadores [apn], [apnu] y [apnp] tal como aparecen y sustituya por los valores de su operador al enviar el SMS.
- Use el comando SERVER con el dominio d.plaspy.com o la IP 54.85.159.138 y el puerto 8888. La elección entre dominio o IP es una preferencia local; Plaspy acepta ambas.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar el comportamiento exacto de los comandos o las opciones disponibles; siempre verifique la documentación del fabricante para el número de serie y la versión de firmware de su dispositivo.
- El K9 admite la configuración por SMS mostrada arriba; algunas instalaciones pueden preferir usar el software del proveedor o actualizaciones OTA cuando estén disponibles.
- Seleccione TCP o UDP según la opción del dispositivo; Plaspy acepta cualquiera y detectará automáticamente el protocolo que use el rastreador.
- Plaspy utiliza el puerto 8888 para todos los dispositivos, por lo que no necesita valores de puerto específicos por dispositivo al integrar un rastreador compatible.
- Después de la configuración, confirme la visibilidad del dispositivo en Plaspy y supervise los mensajes iniciales para asegurar que la APN y los ajustes del servidor se aplicaron correctamente.

## Por qué usar Plaspy con esta configuración

Configurar el EElink K9 para que reporte a Plaspy ofrece una forma coherente de centralizar la información de ubicación, eventos y estado en una flota o dispositivos personales. Con el K9 apuntando al endpoint y puerto de Plaspy, las organizaciones obtienen visibilidad continua y una sola plataforma para revisar historial, alarmas y salud de los dispositivos para supervisión operativa.

Learn more about Plaspy and how it integrates with supported trackers at https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer details verify current information on the official EElink website https://www.eelink.com.cn/ as configuration methods and firmware behavior can change over time.
