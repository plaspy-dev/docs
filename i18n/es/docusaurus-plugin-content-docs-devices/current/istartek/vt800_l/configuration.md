---
slug: /istartek/vt800_l/configuration
id: vt800_l-configuration
sidebar_label: Configuration
title: iStartek - VT800-L Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica para configurar el iStartek VT800-L y conectarlo a Plaspy usando ajustes de servidor compartidos y comandos SMS
keywords:
  - configuración iStartek VT800-L
  - instalación iStartek VT800-L
  - VT800-L configuración Plaspy
  - configuración rastreador iStartek
  - ajustes servidor VT800-L
  - comandos SMS VT800-L
  - configuración rastreador GPS VT800-L
  - configuración dispositivo Plaspy
  - seguimiento vehicular VT800-L
  - rastreador de flota VT800-L
---

# iStartek - VT800-L Configuración

Esta página describe el contexto público de configuración para usar el rastreador iStartek VT800-L con la plataforma Plaspy. Se centra en los ajustes prácticos del servidor y en ejemplos de comandos vía SMS que se emplean para apuntar el dispositivo a Plaspy y permitir que reporte ubicación y telemetría de forma confiable.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La configuración del VT800-L que se muestra a continuación usa comandos SMS, un método documentado por el fabricante, y debe adaptarse a su entorno y nivel de firmware.

## Resumen de la configuración

El objetivo del proceso es dejar al VT800-L listo para comunicarse con Plaspy de forma confiable y verificar que la posición y la telemetría sean visibles en la plataforma. Con los comandos SMS publicados puede ajustar la zona horaria, el APN, el endpoint del servidor Plaspy y los intervalos de reporte para que el dispositivo suba datos a Plaspy según lo esperado.

- Configure el APN y los ajustes GPRS del equipo para lograr conectividad de datos.
- Apunte el VT800-L al endpoint del servidor Plaspy (dominio o IP) y al puerto compartido.
- Establezca el intervalo de envío de posiciones para que las actualizaciones en tiempo real cumplan con las necesidades operativas.
- Verifique los parámetros y confirme que el dispositivo está enviando datos a Plaspy.
- Aproveche el almacenamiento intermedio y la reemisión del dispositivo para conservar el historial durante cortes de cobertura.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos

## Requisitos típicos antes de la configuración

- Una tarjeta SIM funcional con plan de datos activo y capacidad de SMS instalada en el VT800-L
- Acceso al dispositivo para configuración por SMS o mediante la herramienta del fabricante
- Fuente de alimentación estable y cableado vehicular adecuado para la configuración y pruebas iniciales
- Conocimiento del APN del operador y de cualquier usuario o contraseña APN requeridos por la SIM
- Un método para recibir o revisar las respuestas SMS del dispositivo y así confirmar los cambios de parámetros
- Acceso básico a Plaspy para verificar que el dispositivo aparece y reporta después de la configuración

## Cómo se conecta este rastreador a Plaspy

El VT800-L se configura para reportar posiciones GNSS y telemetría al endpoint y puerto del servidor Plaspy. Una vez que el dispositivo tiene el APN y los ajustes de servidor correctos, utilizará su enlace celular para enviar datos de ubicación y eventos a Plaspy, donde estarán disponibles para seguimiento en vivo y reproducción de historial.

- El rastreador se apunta para enviar datos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- El transporte puede elegirse como UDP o TCP; Plaspy acepta ambos y detecta el protocolo automáticamente
- Las ubicaciones, alarmas y eventos de telemetría se reenvían a Plaspy para paneles y alertas
- El historial almacenado en la memoria del dispositivo se sube a Plaspy tras la reconexión
- Reportes periódicos o basados en temporizador (por ejemplo cada 60 segundos) mantienen a Plaspy actualizado sobre el estado del vehículo

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del VT800-L (comandos SMS, herramienta web o software del proveedor) según lo provea el fabricante.
2. Ingrese el endpoint del servidor Plaspy ya sea por dominio d.plaspy.com o por la IP 54.85.159.138 según su preferencia o requisitos de red.
3. Establezca el puerto en 8888 para la subida hacia el servidor.
4. Elija UDP o TCP como transporte si el dispositivo requiere selección explícita.
5. Configure el APN del dispositivo con las credenciales del operador para que el rastreador pueda usar datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.
7. Valide que el dispositivo reporta a Plaspy comprobando el estado del equipo y los mensajes entrantes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El VT800-L soporta configuración vía SMS. Los siguientes comandos públicos se presentan en el orden documentado por el fabricante. Envíe estos comandos al número de la SIM del dispositivo por SMS. Nota: preserve los marcadores al introducir la información del APN.

- Reinicio opcional a valores de fábrica (usar solo si necesita restaurar valores por defecto)
```text
FACTORY#
```

- Establecer la zona horaria a UTC+0
```text
GMT,E,0#
```

- Configurar el APN del operador. Reemplace [apn] por el APN de su operador. Si se requiere, incluya usuario [apnu] y contraseña [apnp] separados por comas.
```text
APN,[apn]# 
```
O si se necesitan usuario y contraseña:
```text
APN,[apn],[apnu],[apnp]#
```

- Establecer el servidor GPRS para usar el dominio de Plaspy en el puerto 8888
```text
SERVER,1,d.plaspy.com,8888#
```
O establecer el servidor GPRS para usar la IP de Plaspy en el puerto 8888
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización para enviar reportes cada 60 segundos
```text
TIMER,60#
```

- Verificar los parámetros actuales
```text
PARAM#
```

Notas sobre los marcadores y su uso:
- [apn] es la cadena APN de su operador móvil. Mantenga los marcadores de usuario y contraseña solo si su operador los requiere.
- Use el comando SERVER con el dominio o con la IP según necesite. Ambos apuntan a Plaspy en el puerto 8888.
- El comando FACTORY# es opcional y solo debe emplearse cuando sea apropiado un reinicio completo.

## Notas de configuración

- Las revisiones de firmware o hardware del fabricante pueden cambiar la sintaxis o el comportamiento de los comandos; confirme siempre con la documentación de iStartek para su revisión de dispositivo.
- La configuración por SMS es práctica para instalaciones en campo, pero verifique las respuestas SMS y los valores de los parámetros después de enviar los mensajes para asegurar que se aplicaron correctamente.
- Elija UDP o TCP según su entorno de red; Plaspy acepta ambos y detectará automáticamente el protocolo del rastreador en el puerto 8888.
- Asegúrese de que las credenciales APN coincidan con los requisitos del operador de la SIM; ajustes incorrectos de APN son una causa común de fallas de conectividad.
- El almacenamiento local del dispositivo preservará el historial cuando se pierda el enlace celular y reenviará los puntos almacenados a Plaspy tras la reconexión.

## Por qué usar Plaspy con esta configuración

Usar el VT800-L con Plaspy brinda a los operadores de flota visibilidad sobre la ubicación del vehículo, su estado y el reporte de eventos con una configuración que puede aplicarse rápidamente mediante SMS o herramientas del proveedor. El enfoque de endpoint compartido de Plaspy simplifica el despliegue en muchos dispositivos, ya que el mismo puerto y la detección automática de protocolo reducen la complejidad de configuración por equipo.

To learn more about Plaspy and its platform capabilities visit https://www.plaspy.com. For the latest device specific setup details, firmware behavior, and manufacturer instructions verify information at the official iStartek site https://istartek.com/ as device methods and parameters can change over time.
