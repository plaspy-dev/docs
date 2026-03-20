---
slug: /bofan/b5/configuration
id: b5-configuration
sidebar_label: Configuration
title: Bofan - B5 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Bofan B5 en Plaspy con ajustes de servidor, comandos SMS y pasos de instalación
keywords:
  - Configuración Bofan B5
  - Instalación Bofan B5
  - Configuración servidor Bofan B5
  - Comandos SMS Bofan B5
  - Configuración Bofan B5 Plaspy
  - Configuración rastreador GPS B5
  - Configuración plataforma Bofan
  - Configuración rastreador compatible Plaspy
  - Instalación rastreador vehículo B5
  - Configuración gestión de flotas B5
---

# Bofan - Configuración del B5

Esta página explica el contexto público de configuración para utilizar el rastreador vehicular Bofan B5 con la plataforma Plaspy. Se centra en los ajustes de servidor prácticos, los pasos previos necesarios y los comandos SMS que se usan habitualmente para apuntar un dispositivo B5 a Plaspy, de modo que el equipo pueda enviar ubicación y eventos a su cuenta Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas que provea el proveedor. El B5 admite configuración por SMS y reporte por GPRS; esta guía muestra los comandos públicos y el flujo de trabajo comúnmente usados para integrarlo con Plaspy, recomendando siempre verificar con la documentación oficial del fabricante.

## Resumen de configuración

Preparar un Bofan B5 para Plaspy implica definir el identificador del dispositivo, configurar el APN celular y dirigir el equipo al endpoint del servidor de Plaspy para que la telemetría llegue a su cuenta. Cuando está disponible, la configuración por SMS es el método más habitual; alternativamente, puede usar cualquier herramienta oficial de Bofan que su proveedor suministre.

- Defina el identificador del dispositivo que Plaspy usará para asociarlo a su cuenta, normalmente los últimos 14 dígitos del IMEI.  
- Configure el APN del operador móvil y las credenciales opcionales para que el B5 establezca sesiones de datos GPRS.  
- Señale el endpoint y puerto del servidor compartido de Plaspy para que la telemetría se entregue a la plataforma.  
- Ajuste los intervalos de actualización y latido según sus necesidades de rastreo y costos de datos.  
- Verifique que el dispositivo aparezca en línea en Plaspy y reporte posición y eventos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP en el puerto 8888 según la elección del dispositivo  
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al puerto compartido

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe configurar el B5 para que emplee el puerto 8888 para reportes GPRS y asegurar la entrega correcta.

## Requisitos típicos antes de la configuración

- Alimentación del vehículo conectada o batería del dispositivo cargada y una instalación estable para que el rastreador pueda arrancar y registrarse en la red.  
- Una Micro SIM válida con datos habilitados y los datos del APN del operador listos para configurar.  
- Acceso al IMEI del dispositivo para derivar el identificador de 14 dígitos que usa el B5 para el mapeo en Plaspy.  
- Conocimiento de la contraseña del equipo si es distinta del valor de fábrica; los comandos de ejemplo usan la contraseña por defecto 000000.  
- Capacidad para enviar SMS o acceso a la herramienta oficial del fabricante necesaria para enviar comandos de configuración.  
- Confirme que su firmware admite configuración vía SMS y que su SIM tiene permiso para enviar SMS si usará este método.

## Cómo se conecta este rastreador a Plaspy

El B5 envía datos de ubicación y eventos a Plaspy mediante la red celular usando GPRS. Al configurar el B5 para que reporte al endpoint y puerto del servidor Plaspy, la plataforma ingiere la telemetría y la muestra en paneles, alertas e informes.

- El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy.  
- Telemetría, alertas y mensajes de estado se entregan por GPRS a Plaspy para rastreo en tiempo real.  
- Plaspy asocia el identificador del dispositivo a su cuenta y muestra posición, eventos y diagnóstico.  
- La plataforma recibe actualizaciones periódicas según el intervalo de envío que usted configure en el dispositivo.  
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe datos en el puerto compartido, por lo que no es necesario seleccionar el protocolo en la plataforma.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Bofan para su unidad, como comandos SMS o el software del fabricante provisto por su vendedor.  
2. Identifique el IMEI del dispositivo y determine el identificador de 14 dígitos que usará con Plaspy, habitualmente los últimos 14 dígitos del IMEI.  
3. Ingrese la información del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 y configure el puerto 8888.  
4. Elija UDP o TCP en el B5 si el dispositivo requiere seleccionar el transporte durante la configuración.  
5. Configure el APN del operador y las credenciales opcionales para que el equipo use GPRS para datos.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere para aplicar los cambios.  
7. Valide que el dispositivo reporte correctamente revisando el estado y la última posición en Plaspy.

## Comandos de configuración de ejemplo

El Bofan B5 admite configuración por SMS. Los comandos siguientes son ejemplos públicos extraídos de la guía del fabricante. La configuración de ejemplo usa la contraseña 000000 que es el valor de fábrica en este caso. Reemplace los marcadores por los valores correctos para su equipo y operador.

- Comando de reset de fábrica (opcional en inicio):
```text
000000DFT
```

- Establecer el identificador de 14 dígitos usado con Plaspy (use los últimos 14 dígitos del IMEI):
```text
000000GID<last14digits_of_IMEI>
```
Reemplace \<last14digits_of_IMEI> por el identificador específico de 14 dígitos del equipo.

- Configurar el APN de su operador. Si se requieren usuario o contraseña inclúyalos así:
```text
000000APN[apn]
```
o con usuario y contraseña opcionales:
```text
000000APN[apn],[apnu],[apnp]
```
Marcadores:
- [apn] es el nombre del APN del operador.
- [apnu] es el usuario del APN si se requiere.
- [apnp] es la contraseña del APN si se requiere.

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto indicados en esta guía:
```text
000000SVR54.85.159.138,8888
```
Si su dispositivo acepta un nombre de dominio en lugar de una IP, puede usar d.plaspy.com y el puerto 8888 cuando el firmware del equipo lo soporte.

- Establecer el intervalo de actualización a 60 segundos (un minuto):
```text
000000GTI60
```

Siga la secuencia de comandos en el orden que corresponda a su proceso de aprovisionamiento. Cambie la contraseña del dispositivo desde el valor por defecto si necesita proteger el acceso de configuración remota.

## Notas sobre la configuración

- Las diferencias de firmware y herramientas pueden cambiar la sintaxis exacta de los SMS o las funciones soportadas; siempre confirme los comandos con las notas de la versión del firmware.  
- La configuración por SMS está incluida en la guía pública mostrada aquí; si planea implementaciones a gran escala, considere usar la herramienta oficial del fabricante o un servicio de aprovisionamiento.  
- Elija TCP o UDP según el soporte de su red y dispositivo; Plaspy acepta ambos en el puerto compartido y detectará el protocolo automáticamente al recibir datos.  
- Confirme el APN y las credenciales con su operador móvil antes de fijar los valores de los marcadores.  
- Tras cambiar los ajustes del servidor permita tiempo para que el dispositivo establezca GPRS y reporte a Plaspy, y luego valide la conectividad desde la plataforma.

## Por qué usar Plaspy con esta configuración

Utilizar el Bofan B5 con Plaspy ofrece a las flotas visibilidad centralizada de la ubicación de vehículos, horas de operación y alertas por eventos. Configurar el equipo para que reporte al endpoint y puerto compartidos de Plaspy permite una ingesta consistente de telemetría, de modo que pueda monitorear activos, recibir alertas por eventos como exceso de velocidad o manipulación, y usar reportes históricos para planificación de mantenimiento y operaciones.

Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el B5 visite https://www.plaspy.com. Para comandos específicos de dispositivo, comportamiento de firmware y métodos de configuración del fabricante verifique la información actual en el sitio oficial de Bofan https://www.bofancloud.com/ ya que las especificaciones y procedimientos pueden cambiar con el tiempo.
