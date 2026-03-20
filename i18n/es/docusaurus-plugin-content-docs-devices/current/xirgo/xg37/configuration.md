---
slug: /xirgo/xg37/configuration
id: xg37-configuration
sidebar_label: Configuration
title: Xirgo - XG37 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Xirgo XG37 para Plaspy con ajustes de servidor comandos SMS y pasos prácticos
keywords:
  - configuración Xirgo XG37
  - instalación Xirgo XG37
  - configuración XG37 Plaspy
  - configuración rastreador GPS Xirgo
  - configuración rastreador Plaspy
  - configuración servidor XG37
  - instalación rastreador de flota Xirgo
  - integración rastreador GPS Plaspy
  - configuración telemetría XG37
  - configuración SMS Xirgo XG37
---

# Xirgo - Configuración XG37

Esta página documenta el contexto público de configuración para usar el Xirgo XG37 con Plaspy. Se centra en los ajustes prácticos de servidor, el flujo común de instalación y los comandos SMS públicos utilizados para apuntar el rastreador hacia Plaspy. Use esta guía para preparar el dispositivo para la comunicación con Plaspy y para entender lo que necesitará antes de la integración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La documentación del XG37 y los comandos SMS de ejemplo que se muestran aquí reflejan opciones públicas comunes; siempre verifique los pasos específicos de su dispositivo contra la documentación del fabricante si el dispositivo se comporta de manera diferente.

## Resumen de la configuración

El objetivo de la configuración es permitir que el XG37 alcance Plaspy y reporte posición y telemetría de forma fiable. En la mayoría de los despliegues esto implica asegurar la conectividad de red, configurar el APN y el endpoint del servidor, y validar que el dispositivo aparezca en Plaspy.

- Configure el APN del operador móvil para que el dispositivo tenga conectividad de datos necesaria para telemetría y configuración por SMS.  
- Apunte el dispositivo al dominio o IP del servidor de Plaspy y establezca el puerto compartido de Plaspy.  
- Elija el transporte (UDP o TCP) si el dispositivo solicita un protocolo, o confíe en la detección automática de Plaspy.  
- Aplique los ajustes y reinicie el rastreador para establecer una sesión nueva con Plaspy.  
- Valide que el rastreador aparezca en Plaspy y que la posición y telemetría lleguen según lo esperado.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (Plaspy usa el mismo puerto para todos los dispositivos)  
- Transporte compatible UDP o TCP según lo requiera el dispositivo o el instalador  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Un dispositivo XG37 alimentado y accesible con una SIM activa capaz de datos y SMS si se usa configuración por SMS.  
- Detalles del APN del operador proporcionados por el proveedor de la SIM para la conectividad de datos móviles.  
- Acceso al método de configuración oficial de Xirgo soportado por su unidad, como comandos SMS o el software de configuración del fabricante.  
- Conocimiento de si su instalación prefiere UDP o TCP; Plaspy detectará el protocolo automáticamente pero el dispositivo puede requerir una selección explícita.  
- Un plan de pruebas para confirmar que el dispositivo reporta a Plaspy después de la configuración, incluyendo las actualizaciones de telemetría o posición esperadas.  
- Si está disponible, verifique la versión de firmware del dispositivo y las notas de la versión por si hay cambios en los comandos de configuración o comportamiento.

## Cómo se conecta este rastreador a Plaspy

El XG37 se configura para enviar su telemetría y posición al endpoint compartido de Plaspy para que la plataforma presente seguimiento en tiempo real, alertas de eventos y telemetría del vehículo. Plaspy escucha en el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo entrante.

- El rastreador debe configurarse para alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- Dependiendo de la configuración del rastreador, el transporte puede ser UDP o TCP; elija la opción requerida por su firmware o envíe la configuración vía SMS según lo permita el modelo.  
- Una vez conectado, el dispositivo transmitirá la telemetría y los eventos configurados para que Plaspy pueda mapear la posición y mostrar la telemetría.  
- La detección automática de protocolo de Plaspy maneja los protocolos de rastreadores comunes cuando el dispositivo se conecta al endpoint compartido del servidor.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Xirgo para su unidad, por ejemplo comandos SMS o la herramienta de configuración del fabricante.  
2. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Establezca el puerto del servidor en 8888, que es el puerto compartido que Plaspy utiliza para todos los dispositivos soportados.  
4. Elija UDP o TCP si el dispositivo requiere seleccionar un transporte; en caso contrario confíe en la detección automática del protocolo por parte de Plaspy.  
5. Aplique o guarde la configuración en el dispositivo y envíe los comandos SMS necesarios cuando corresponda.  
6. Reinicie el dispositivo si el método de configuración lo requiere para establecer una nueva conexión.  
7. Valide que el dispositivo reporte a Plaspy comprobando en la plataforma la llegada de datos de posición y telemetría.

## Ejemplos de comandos de configuración

El XG37 admite configuración vía SMS. A continuación figuran los comandos SMS públicos disponibles según la información del fabricante. Envíelos como mensajes SMS al número de la SIM del rastreador en el orden indicado.

- Configure el APN del operador. Reemplace los marcadores con los valores de su operador:
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
Explicación de los marcadores:
- {{apn}} — el nombre del APN proporcionado por el operador móvil.  
- {{apnu}} — el nombre de usuario del APN si el operador lo requiere; dejar vacío si no es necesario.  
- {{apnp}} — la contraseña del APN si el operador lo requiere; dejar vacío si no es necesario.

- Configure el servidor GPRS hacia Plaspy usando la IP del servidor y el puerto 8888. Este comando configura la entrada de servidor del dispositivo para apuntar a Plaspy:
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
Notas:
- Estos comandos se envían por SMS y se aplican en el orden indicado. El primer comando configura el APN para asegurar la conectividad de datos. El segundo comando registra la dirección del servidor Plaspy y el puerto.  
- Si su flujo utiliza el dominio de Plaspy en lugar de la IP, ingrese d.plaspy.com en su herramienta del fabricante o en la interfaz de configuración donde esté soportado. Los comandos SMS del fabricante mostrados arriba usan la IP en el ejemplo publicado.

## Notas de configuración

- Las diferencias de firmware pueden modificar los comandos SMS disponibles o el orden de parámetros; verifique los comandos con respecto al firmware de su dispositivo.  
- La configuración por SMS está soportada por los comandos públicos mostrados aquí, pero muchos instaladores usan la herramienta de configuración del fabricante cuando está disponible.  
- Cuando tenga opción, seleccione UDP o TCP conforme a la capacidad del firmware y las condiciones de red; Plaspy detectará el protocolo automáticamente al conectarse.  
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos, por lo que el valor del puerto de servidor es consistente entre modelos.  
- Confirme siempre los marcadores como {{apn}}, {{apnu}} y {{apnp}} con su operador móvil o instalador antes de enviar SMS de configuración.

## Por qué usar Plaspy con esta configuración

Configurar el XG37 para que reporte a Plaspy ofrece un camino directo hacia la localización en tiempo real, telemetría del vehículo y datos de cumplimiento en una sola plataforma. Con la telemetría enviada a Plaspy, los equipos de flota pueden supervisar el movimiento de los vehículos, recibir alertas de geocercas y consolidar datos CANBUS y otras corrientes de información para informes y visibilidad operativa.

Para saber más sobre Plaspy y cómo soporta integraciones de dispositivos, visite https://www.plaspy.com. Para los comandos de configuración más actuales por dispositivo, el comportamiento del firmware e instrucciones del fabricante, verifique los detalles con Xirgo en https://xirgo.com/.
