---
slug: /istartek/vt900_l/configuration
id: vt900_l-configuration
sidebar_label: Configuration
title: iStartek - VT900-L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el iStartek VT900-L con servidores Plaspy por SMS o GPRS
keywords:
  - configuración iStartek VT900-L
  - configuración VT900-L para Plaspy
  - configuración rastreador GPS iStartek
  - configuración de servidor VT900-L
  - configuración software de seguimiento iStartek
  - configuración plataforma GPS VT900-L
  - configuración rastreador Plaspy
  - configuración SMS VT900-L
  - guía instalación seguimiento vehicular
  - integración rastreador de flotas
---

# iStartek - Configuración del VT900-L

Esta página describe el contexto público de configuración para usar el iStartek VT900-L con Plaspy. Se centra en los ajustes y comandos públicamente disponibles que permiten al VT900-L reportar ubicación y telemetría a la plataforma Plaspy. Use esta guía para entender los parámetros de servidor que Plaspy espera y los pasos comunes que instaladores e integradores siguen para lograr visibilidad en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en su lado. Los pasos exactos en el equipo del fabricante pueden variar según versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El VT900-L soporta reportes por TCP/UDP y configuración vía SMS; los ejemplos de comandos SMS incluidos abajo son comandos públicos comúnmente usados para establecer APN, servidor, temporizador y verificar parámetros.

## Visión general de la configuración

Este proceso prepara al VT900-L para comunicarse de forma confiable con Plaspy especificando el endpoint de red, el transporte, el APN y el intervalo de reporte, y luego validando que el dispositivo alcance la plataforma. Puede usar la configuración por SMS o la herramienta de configuración del fabricante cuando esté disponible; ambos enfoques buscan garantizar que el equipo pueda registrarse en redes móviles y enviar telemetría a Plaspy.

- Configure el dispositivo para usar el endpoint y puerto del servidor de Plaspy para que los reportes lleguen a la plataforma.
- Establezca el APN del operador móvil para que el rastreador pueda abrir una sesión de datos GPRS para reportes por TCP o UDP.
- Seleccione UDP o TCP en el dispositivo si es necesario y ajuste el temporizador de actualización a un intervalo de reporte adecuado.
- Valide la conectividad comprobando los parámetros del equipo y confirmando que los mensajes llegan a Plaspy.
- Opcionalmente, realice un reinicio de fábrica y reconfigure durante la instalación inicial o al solucionar problemas.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP address: 54.85.159.138  
- Port: 8888  
- Transport: supports UDP or TCP on port 8888 (the device may be configured for either UDP or TCP)  
- Plaspy behavior: automatic protocol detection in Plaspy means the platform will detect the tracker protocol once the device reports to the shared endpoint

Todos los dispositivos en Plaspy usan el mismo puerto, por lo que solo necesita configurar el endpoint y el puerto correctos una vez por dispositivo al integrarlo con Plaspy.

## Requisitos típicos antes de la configuración

- Un VT900-L con alimentación, antenas conectadas y una fuente de energía del vehículo estable o batería de respaldo cargada.  
- Una tarjeta SIM activa con datos (GPRS/4G) y SMS habilitados, insertada y registrada en una red móvil compatible.  
- Datos del APN del operador móvil (nombre APN y, opcionalmente, usuario y contraseña del APN).  
- Acceso al método oficial de configuración de iStartek, como comandos SMS o el software de configuración del proveedor.  
- Una forma de recibir y revisar logs del lado servidor o el estado del dispositivo en la plataforma Plaspy para confirmar el registro exitoso.

## Cómo se conecta este rastreador a Plaspy

El VT900-L se configura para enviar datos de ubicación y telemetría al endpoint y puerto compartidos de Plaspy usando datos móviles, o para usar SMS para comandos de configuración y mensajes de respaldo. Una vez que el dispositivo apunte al servidor de Plaspy, la plataforma detectará automáticamente el protocolo correcto y comenzará a procesar los reportes entrantes para visibilidad y alertas.

- Envía actualizaciones periódicas de ubicación a d.plaspy.com (o a la IP de Plaspy) en el puerto 8888 vía TCP o UDP.  
- Utiliza el APN configurado para establecer una sesión de datos GPRS para reportes TCP/UDP.  
- Recurre al SMS para comandos de configuración y en algunos flujos de respaldo cuando la conectividad de datos no está disponible.  
- Plaspy recibe los mensajes del dispositivo y aplica detección automática de protocolo, por lo que el mismo puerto funciona para los dispositivos compatibles.  
- Los reportes de datos y eventos permiten a los operadores de flota rastrear ubicación, alarmas y estado en Plaspy.

## Flujo común de configuración

1. Acceda al método oficial de configuración de iStartek: comandos SMS o la herramienta de configuración del fabricante provista por iStartek.  
2. Ingrese el dominio o la IP del servidor Plaspy (d.plaspy.com o 54.85.159.138) en los ajustes de servidor del dispositivo.  
3. Establezca el puerto en 8888 como puerto de reporte.  
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según su preferencia de red. Plaspy soporta ambos y detectará el protocolo automáticamente.  
5. Configure el APN y las credenciales del APN que su operador móvil requiera.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo exige.  
7. Valide que el rastreador reporte a Plaspy comprobando las respuestas de parámetros y confirmando la actividad del dispositivo en la plataforma.

## Ejemplos de comandos de configuración

El VT900-L puede configurarse enviando mensajes SMS con los siguientes comandos públicos. Preserve los marcadores de posición como [apn], [apnu] y [apnp] al adaptar los comandos a su operador. Los comandos se muestran en el orden comúnmente usado para la configuración inicial.

- Optional factory reset (use when beginning fresh setup or troubleshooting):
```
FACTORY#
```

- Set the time zone to UTC+0:
```
GMT,E,0#
```

- Set the operator APN (replace placeholders with your operator values; keep the comma separated format; include APN username and password only if required):
```
APN,[apn]{{,[apnu],[apnp]}}#
```
Nota: Use APN,[apn]# si no se requieren usuario/contraseña. Si su proveedor exige credenciales, incluya ,[apnu],[apnp] después del APN como se muestra en los ejemplos del fabricante.

- Set the GPRS server using the Plaspy domain (recommended) and port 8888:
```
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server using the Plaspy IP and port 8888:
```
SERVER,0,54.85.159.138,8888#
```

- Set the periodic position update interval to 60 seconds:
```
TIMER,60#
```

- Check current device parameters:
```
PARAM#
```

Envíe estos SMS desde el número de teléfono administrador que el dispositivo reconoce (siga la documentación de iStartek para los remitentes permitidos). Los ejemplos de comando SERVER anteriores apuntan explícitamente el rastreador a Plaspy usando el dominio o la IP y emplean el puerto 8888, que es el puerto compartido de Plaspy.

## Notas de configuración

- Las diferencias de firmware y las variantes regionales de hardware pueden cambiar la sintaxis exacta de los SMS y los parámetros soportados; verifique los comandos en el dispositivo o con la documentación de iStartek.  
- Use la configuración por SMS para instalaciones remotas o dentro del vehículo cuando el acceso físico al software de configuración sea limitado; los comandos SMS mostrados son ejemplos públicos de la guía del fabricante.  
- Elija TCP o UDP según la fiabilidad de la red y sus necesidades operativas; Plaspy soporta ambos y detectará automáticamente el protocolo del dispositivo al llegar los mensajes.  
- Todos los dispositivos Plaspy usan el mismo puerto, por lo que la consistencia en el valor del puerto SERVER (8888) simplifica las implementaciones.  
- Etiquete claramente los marcadores de posición ([apn], [apnu], [apnp]) y confirme las credenciales del APN con el operador móvil antes de enviar los comandos de configuración.

## Por qué usar Plaspy con esta configuración

Configurar el VT900-L para reportar a Plaspy ofrece un camino directo hacia visibilidad en tiempo real de la flota, reenvío de alarmas e informes operativos. Las opciones de reporte multicanal del VT900-L (TCP/UDP y SMS) y su soporte para la telemetría habitual de flotas lo hacen una combinación práctica con Plaspy, permitiendo monitoreo centralizado de ubicación, eventos y estado de los dispositivos en los vehículos.

Para saber más sobre Plaspy y cómo soporta la integración de dispositivos y la supervisión de flotas, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, notas de firmware y orientación del fabricante más actualizada para el VT900-L, verifique los detalles en el sitio oficial de iStartek https://istartek.com/. Las especificaciones del fabricante y los pasos de configuración pueden cambiar con el tiempo, así que confirme siempre las instrucciones más recientes con iStartek antes del despliegue.
