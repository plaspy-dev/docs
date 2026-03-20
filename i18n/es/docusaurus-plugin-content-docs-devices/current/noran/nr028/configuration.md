---
slug: /noran/nr028/configuration
id: nr028-configuration
sidebar_label: Configuration
title: Noran - NR028 Configuration
sidebar_class_name: menu_item_tracker
description: Ajustes públicos y parámetros de servidor para conectar el rastreador Noran NR028 a la plataforma Plaspy
keywords:
  - Configuración Noran NR028
  - Configuración Noran NR028 para Plaspy
  - Configuración de servidor NR028
  - Configuración rastreador GPS NR028
  - Compatibilidad Noran Plaspy
  - Configuración APN GPRS NR028
  - Seguimiento de vehículos NR028
  - Comandos SMS NR028
  - Configuración seguimiento flota NR028
  - Configuración telemetría NR028
---

# Noran - NR028: Configuración

Esta página recopila la información pública y los ajustes de servidor habituales para utilizar el rastreador Noran NR028 Navigation GPS con Plaspy. Incluye los comandos SMS y parámetros prácticos que instaladores y operadores de flotas usan para apuntar unidades NR028 al endpoint de Plaspy, de modo que la plataforma pueda recibir ubicación y telemetría en tiempo real.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. El NR028 admite configuración por SMS y GPRS en las versiones de firmware más comunes; esta documentación toma como referencia los ejemplos públicos de comandos del fabricante para un montaje típico hacia Plaspy.

## Resumen de la configuración

El proceso prepara un equipo NR028 para comunicarse de forma confiable con Plaspy, de modo que la ubicación del dispositivo, las alarmas y la telemetría de sensores se visualicen en la plataforma. En los NR028 esto suele implicar configurar el APN del operador, apuntar el servidor GPRS a Plaspy, cambiar el equipo a modo GPRS y verificar que el dispositivo reporte correctamente.

- Configurar el APN del operador y, si aplica, usuario y contraseña del APN para que el dispositivo abra GPRS
- Apuntar el servidor GPRS al endpoint de Plaspy para que la telemetría llegue a la plataforma
- Elegir el transporte (UDP o TCP) si el firmware requiere una selección explícita
- Habilitar el modo GPRS y verificar conectividad mediante un comando de estado
- Validar que Plaspy reciba el equipo comprobando su visibilidad y el Id del dispositivo

## Ajustes del servidor Plaspy

Use estos ajustes de servidor Plaspy al configurar el NR028. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando llega la telemetría

## Requisitos previos habituales

- Una SIM activa con plan de datos y el APN correcto del operador para GPRS
- El dispositivo NR028 con alimentación y accesible por SMS o mediante la herramienta del fabricante
- Conocimiento de la contraseña por defecto del equipo si se requiere para configuración remota por SMS
- Acceso al Id del equipo para su registro y verificación en Plaspy
- Un método para recibir o revisar respuestas SMS y así verificar que los ajustes se aplicaron
- Familiaridad básica para elegir entre UDP o TCP cuando el firmware lo solicite

## Cómo se conecta este rastreador a Plaspy

El NR028 se configura para enviar sus paquetes de ubicación y telemetría al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir eventos, alarmas y datos de sensores. Plaspy recibe esos paquetes y los mapea automáticamente al manejo de protocolo correspondiente.

- El rastreador abre una conexión de datos GPRS y envía telemetría a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte puede configurarse en UDP o TCP según las preferencias del firmware del equipo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar manualmente el protocolo en la plataforma
- Eventos como SOS, exceso de velocidad, geocerca y lecturas de sensores se transmiten a Plaspy para su visualización y alertas
- El SMS sigue disponible como método alternativo para comandos y verificación cuando GPRS no esté disponible

## Flujo de configuración típico

1. Acceda al método oficial de configuración Noran, ya sea por comandos SMS o mediante el software del fabricante según el manual del dispositivo.
2. Configure el APN del operador usando la cadena APN correspondiente y, si se requiere, el usuario y la contraseña del APN.
3. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en el campo de servidor o IP.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el equipo solicita una selección de transporte.
5. Aplique o guarde la configuración y cambie el dispositivo a modo GPRS si es necesario.
6. Reinicie o corte y restablezca la alimentación del equipo si el firmware lo exige para aplicar cambios.
7. Verifique que el equipo reporte a Plaspy mediante un chequeo de estado y confirmando que el dispositivo aparece en los paneles de Plaspy.

## Ejemplos de comandos de configuración

El NR028 admite configuración por SMS. Los siguientes ejemplos públicos son cadenas SMS. Los ejemplos usan la contraseña por defecto 000000. Preserve marcadores como [apn], [apnu] y [apnp] y reemplácelos por los valores de su operador al enviar.

- Establecer el APN del operador. Reemplace [apn] por el APN de su operador. Si es necesario, incluya [apnu] y [apnp] para usuario y contraseña del APN.
```
A000000,012,[apn]
```
O con usuario y contraseña del APN:
```
A000000,012,[apn],[apnu],[apnp]
```

- Fijar el servidor GPRS al endpoint de Plaspy usando la IP y el puerto 8888. Este ejemplo utiliza la IP pública de Plaspy. Puede sustituir d.plaspy.com si su firmware acepta un dominio en lugar de una IP.
```
A000000,010,54.85.159.138,8888
```

- Cambiar el equipo a modo GPRS (1).
```
A000000,011,1
```

- Comprobar los ajustes actuales y el estado del equipo. La respuesta normalmente devuelve Id del dispositivo, APN, servidor, puerto, estado GPRS y otros diagnósticos. Use esto para obtener el Id del dispositivo que comienza con NR.
```
A000000,004
```

Notas sobre los comandos anteriores:
- La contraseña de ejemplo usada en estos comandos es 000000, que es el valor por defecto en ejemplos públicos del fabricante. Si su equipo tiene otra contraseña, reemplace el campo de contraseña en consecuencia.
- El Id del equipo puede recuperarse enviando el comando de estado A000000,004. El Id suele ser la primera palabra de la respuesta y comienza con NR.
- Al usar el nombre de dominio en lugar de la IP, algunas versiones de firmware aceptan:
```
A000000,010,d.plaspy.com,8888
```
pero si el dominio no es aceptado, utilice la IP del servidor Plaspy 54.85.159.138 como se muestra.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los SMS y los campos requeridos; confirme siempre con la documentación Noran vigente para la revisión de su dispositivo.
- El NR028 soporta métodos de configuración por SMS y por GPRS en ejemplos públicos; use SMS para ediciones remotas o en campo cuando no disponga de una herramienta de configuración.
- Elija UDP o TCP según la capacidad del dispositivo y los requisitos de la red; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración del servidor y facilita la detección automática del protocolo.
- Si el equipo no aparece en Plaspy después de la configuración, verifique el APN, el modo GPRS, la intensidad de señal y que se aplicaron y guardaron correctamente el servidor y el puerto.

## Por qué usar Plaspy con esta configuración

Usar el NR028 con Plaspy brinda a las organizaciones visibilidad centralizada de la ubicación de vehículos, alarmas y telemetría de sensores para la supervisión operativa y la respuesta a incidentes. El NR028 puede entregar actualizaciones de telemetría frecuentes y compactas a Plaspy, de modo que los equipos operativos reciban eventos oportunos para despacho de flota, monitoreo de combustible y flujos de trabajo anti robo.

Learn more about Plaspy on the main website https://www.plaspy.com. Please verify the latest device specific configuration methods, firmware behavior, and manufacturer setup details at the official Noran tracker site http://www.norantracker.com/ as manufacturer specifications and setup steps can change over time.
