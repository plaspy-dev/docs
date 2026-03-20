---
slug: /queclink/gv55/configuration
id: gv55-configuration
sidebar_label: Configuration
title: QuecLink - GV55 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GV55 con ajustes de servidor Plaspy y comandos SMS de ejemplo para GPRS
keywords:
  - Configuración QuecLink GV55
  - Configuración GV55
  - QuecLink GV55 Plaspy
  - Configuración servidor GV55
  - Comandos SMS GV55
  - Configuración GPRS GV55
  - Configuración rastreador GPS QuecLink
  - Configuración rastreador vehicular GV55
  - Configuración telemática GV55
  - Plataforma seguimiento QuecLink GV55
---

# QuecLink - Configuración GV55

Esta página describe la configuración pública para usar el QuecLink GV55 con Plaspy. Resumimos el endpoint del servidor Plaspy y los pasos prácticos que se suelen emplear para apuntar los dispositivos GV55 a Plaspy, permitiendo el seguimiento en tiempo real y la ingestión de telemetría. Cuando esté disponible, se muestran comandos SMS de ejemplo extraídos de la documentación de configuración para que el instalador pueda aplicarlos directamente o adaptar los valores al entorno.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador al conectarse. Los pasos exactos en el lado del fabricante para el GV55 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que utilice estos ajustes públicos y comandos de ejemplo como guía práctica y verifique cualquier detalle específico del dispositivo con la documentación oficial.

## Resumen de la configuración

Esta configuración prepara al GV55 para enviar datos de posición y eventos a la plataforma Plaspy, de modo que los dispositivos aparezcan en mapas en vivo, reportes y alertas. Los comandos de ejemplo a continuación muestran cómo un instalador puede configurar el GV55 mediante SMS usando la contraseña del equipo y los parámetros de servidor GPRS apuntando a Plaspy.

- Configure los parámetros de red para que el GV55 se registre en GPRS y alcance Plaspy
- Establezca el endpoint del servidor Plaspy y el puerto usado por todos los dispositivos en la plataforma
- Configure los intervalos de reporte para que las actualizaciones de posición lleguen con la frecuencia esperada
- Active las entradas relevantes o el reporte de alarmas para que los eventos estén disponibles en Plaspy
- Valide la conectividad y asegúrese de que el rastreador sea visible y esté reportando en Plaspy

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el GV55:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transportes soportados: UDP o TCP (el dispositivo puede configurarse para usar cualquiera de los dos)
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta

Nota: Todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe configurar el puerto 8888 al configurar cualquier rastreador compatible.

## Requisitos habituales antes de configurar

- Un dispositivo GV55 alimentado y accesible, instalado o disponible temporalmente para configuración
- Una tarjeta SIM activa con datos/GPRS habilitados y los datos APN correctos del operador móvil
- Capacidad para enviar comandos SMS desde un teléfono o un gateway SMS al dispositivo si se usa configuración por SMS
- Conocimiento de la contraseña del dispositivo (los comandos de ejemplo usan la contraseña por defecto queclink)
- Acceso a la documentación oficial del fabricante o a la herramienta de configuración para variaciones de firmware del equipo
- Acceso de red desde la red móvil del dispositivo hasta el endpoint del servidor Plaspy

## Cómo se conecta este rastreador a Plaspy

El GV55 envía posición GNSS y telemetría de eventos configurados al endpoint y puerto del servidor Plaspy. Cuando se indica d.plaspy.com (o la IP) en el puerto 8888, el dispositivo entregará mensajes de ubicación y eventos a Plaspy, donde se procesan y muestran.

- El rastreador utiliza GPRS para alcanzar el endpoint d.plaspy.com o la IP 54.85.159.138 en el puerto 8888
- Plaspy acepta transporte TCP o UDP y detecta automáticamente el protocolo del dispositivo
- Eventos del dispositivo como encendido, botón SOS, inmovilizador o alarmas por choque se transmiten a Plaspy para generar alertas
- Los intervalos programados de reporte determinan la cadencia de actualizaciones que verá en la plataforma Plaspy
- Una configuración exitosa resulta en seguimiento en vivo, reproducción histórica y notificaciones de eventos en Plaspy

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración del fabricante (para GV55 esto suele incluir la configuración por SMS o la herramienta del fabricante).  
2. Ingrese el endpoint del servidor Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138.  
3. Configure el puerto del servidor a 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos soportados).  
4. Elija el protocolo de transporte (UDP o TCP) si el dispositivo requiere selección explícita.  
5. Configure el APN del dispositivo y cualquier valor de autenticación requerido por el operador móvil.  
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si es necesario.  
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad del dispositivo y las actualizaciones en vivo en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El GV55 soporta configuración mediante comandos SMS. Los ejemplos a continuación son comandos SMS públicos extraídos del contenido de configuración del dispositivo. Los comandos de muestra usan la contraseña por defecto queclink. Reemplace los marcadores y valores del operador según corresponda.

- Notas sobre los marcadores:
  - [apn] es la cadena APN de la red móvil provista por el operador de la SIM
  - [apnu] es el nombre de usuario APN cuando lo requiere el operador
  - [apnp] es la contraseña APN cuando lo requiere el operador

1. Restauración de fábrica opcional inicial (usar solo cuando sea necesario como parte de una configuración desde cero)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Ajustar la zona horaria del dispositivo a UTC+0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Configurar el APN del operador (reemplace los marcadores con los valores del operador)
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```

4. Establecer el servidor GPRS en Plaspy. Este ejemplo incluye dominio e IP y usa el puerto 8888.
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Establecer el intervalo de actualización periódico a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Activar notificación del botón SOS mapeado a la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Envíe cada comando como SMS al GV55 desde un número autorizado o mediante una herramienta de aprovisionamiento que soporte el envío de comandos SMS. Después de aplicar los ajustes de servidor y APN, confirme que el dispositivo se registra en la red móvil y reporta al endpoint de Plaspy en el puerto 8888.

## Notas de configuración

- La configuración vía SMS es un método habitual para GV55; respete el requisito de la contraseña en los comandos SMS y cambie la contraseña por defecto después de la instalación inicial por seguridad.
- Las revisiones de firmware y hardware pueden cambiar la disponibilidad de comandos y el orden de parámetros; verifique los comandos con la documentación actual del QuecLink GV55.
- Al elegir el transporte, pruebe tanto UDP como TCP si surgen problemas de conectividad; Plaspy admite ambos y detecta el protocolo automáticamente.
- Reemplace los marcadores [apn], [apnu] y [apnp] por los valores correctos del operador; la falta o error en los detalles del APN impedirá la conexión GPRS.
- Use el dominio d.plaspy.com o la IP 54.85.159.138 con el puerto 8888; Plaspy usa el mismo puerto para todos los dispositivos, simplificando la gestión de puertos por dispositivo.

## Por qué usar Plaspy con esta configuración

Configurar el QuecLink GV55 para reportar a Plaspy ofrece un camino directo hacia ubicación en tiempo real, monitoreo de eventos y telemetría histórica para la gestión de flotas y activos. Las entradas de eventos y el reporte con buffer del GV55, junto con la ingestión de Plaspy, permiten alertas oportunas, seguimiento continuo y visibilidad operativa para operadores de flotas y proveedores de servicio.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific commands, firmware notes and detailed GV55 documentation verify details with the manufacturer at https://www.queclink.com/ as device configuration methods and firmware behavior can change over time.
