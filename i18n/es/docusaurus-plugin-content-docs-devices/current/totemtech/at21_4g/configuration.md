---
slug: /totemtech/at21_4g/configuration
id: at21_4g-configuration
sidebar_label: Configuration
title: Totemtech - AT21-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Totemtech AT21-4G con ajustes del servidor Plaspy y ejemplos de SMS para una puesta en marcha rápida
keywords:
  - Configuración Totemtech AT21-4G
  - Configuración AT21-4G
  - Configuración Plaspy AT21-4G
  - Configuración rastreador Totemtech
  - Configuración servidor Plaspy
  - Guía configuración rastreador GPS
  - Comandos SMS AT21-4G
  - Configuración seguimiento de activos
  - Configuración plataforma GPS
  - Configuración seguimiento de vehículos
---

# Totemtech - Configuración AT21-4G

Esta página documenta el contexto público de configuración para usar el rastreador Totemtech AT21-4G con la plataforma Plaspy. Se centra en los ajustes prácticos del servidor y en comandos de ejemplo para configurar el dispositivo de modo que reporte ubicación, telemetría y eventos a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AT21-4G admite provisión por SMS y GPRS; los comandos SMS de ejemplo a continuación muestran un método documentado para configurar el APN y el servidor de Plaspy usando la contraseña por defecto del dispositivo 000000.

## Resumen de la configuración

Este proceso prepara el AT21-4G para enviar su telemetría y datos de ubicación a Plaspy usando el endpoint y puerto compartidos de la plataforma. El objetivo es garantizar conectividad fiable, ajustes correctos de APN y servidor, y visibilidad de los reportes en Plaspy.

- Configurar el APN del dispositivo para que pueda establecer sesiones de datos GPRS.
- Apuntar el rastreador al endpoint del servidor Plaspy para que los paquetes lleguen a la plataforma.
- Elegir el método de transporte (UDP o TCP) y establecer el puerto compartido que usa Plaspy.
- Habilitar modos de confirmación o reporte necesarios para su caso de monitoreo.
- Validar los reportes del dispositivo en Plaspy y ajustar los intervalos de reporte para equilibrar consumo de energía y visibilidad.

## Ajustes del servidor Plaspy

Use estos ajustes públicos del servidor Plaspy al configurar el rastreador. Plaspy requiere el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos habituales antes de la configuración

- Una micro SIM funcional con un plan de datos activo y los detalles de APN correctos proporcionados por el operador.
- El rastreador alimentado y accesible para configuración vía SMS o con la herramienta de provisión del fabricante.
- Conocimiento de la contraseña del dispositivo si no coincide con el valor de fábrica 000000.
- Acceso a un teléfono capaz de enviar comandos SMS o acceso al software del proveedor para provisión remota.
- Confirmación de la revisión del firmware y de cualquier instrucción específica del proveedor que pueda afectar la sintaxis de comandos o las funciones disponibles.

## Cómo se conecta este rastreador a Plaspy

El AT21-4G envía datos de ubicación, sensores y eventos a Plaspy utilizando el transporte y el endpoint configurados. Una vez apuntado al servidor y puerto compartidos de Plaspy, la plataforma ingiere y analiza los paquetes entrantes y hace los datos disponibles para mapas, alertas e informes.

- El dispositivo inicia una sesión de datos GPRS y transmite paquetes a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según las preferencias de despliegue y las opciones del firmware.
- Plaspy reconoce automáticamente el protocolo del rastreador y procesa la telemetría entrante.
- La telemetría, alarmas y mensajes de estado reportados por el dispositivo se vuelven visibles en Plaspy para monitoreo operativo.
- Los intervalos de reporte y los ajustes de confirmación pueden ajustarse para optimizar el consumo de energía y los datos transmitidos.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Totemtech o al software de provisión del proveedor, o prepárese para enviar comandos de configuración por SMS.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto en 8888 para todos los dispositivos conectados a Plaspy.
4. Elija UDP o TCP como transporte si el dispositivo solicita selección de transporte.
5. Configure el APN y otras credenciales del operador para que el dispositivo pueda iniciar una sesión GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.
7. Valide que el dispositivo reporte a Plaspy revisando el estado del equipo y los mensajes entrantes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El AT21-4G admite provisión mediante SMS. A continuación se muestran comandos SMS de ejemplo publicados por el fabricante. Los comandos de muestra usan la contraseña por defecto 000000. Si la contraseña de su equipo es diferente, reemplace 000000 por la contraseña correcta.

- Reinicio opcional a valores de fábrica (usar solo cuando sea necesario o según indicaciones):
```
*000000,007#
```

- Establecer el APN del operador. Reemplace los marcadores con los valores reales del operador:
```
*000000,002,{{apn}},{{apnu}},{{apnp}}#
```
Explicación de los marcadores:
- {{apn}} es el nombre del APN proporcionado por su operador móvil.
- {{apnu}} es el nombre de usuario del APN si se requiere; si no, dejar en blanco.
- {{apnp}} es la contraseña del APN si se requiere; si no, dejar en blanco.

- Establecer el servidor GPRS a Plaspy usando la IP y el puerto de Plaspy y habilitar el modo de conexión (el ejemplo usa el modo 1):
```
*000000,003,54.85.159.138,8888,1
```
Nota: Alternativamente puede ingresar d.plaspy.com en herramientas del proveedor que acepten nombres de dominio en lugar de la IP.

- Activar ACK o reportes de acuse de recibo:
```
*000000,019,1#
```

- Establecer el intervalo de actualización de reporte a 60 segundos (formato de ejemplo usado por este dispositivo):
```
*000000,60,60,0,60#
```

Conserve el orden de los comandos al provisionar si la documentación del fabricante especifica un orden. Después de enviar los comandos por SMS, permita tiempo para que el dispositivo aplique los ajustes y se conecte.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos SMS o la disponibilidad de comandos. Confirme los comandos exactos para su versión de firmware.
- La configuración por SMS es útil para dispositivos remotos, pero asegure que el remitente del SMS pueda alcanzar el dispositivo y que este tenga cobertura de red.
- Elija UDP o TCP en función de la fiabilidad y el comportamiento de la red. UDP es común por su menor sobrecarga; TCP puede ofrecer mayor fiabilidad de sesión en algunas redes.
- Los marcadores del APN deben reemplazarse con las credenciales del operador para que las conexiones de datos funcionen.
- Consulte siempre la documentación de Totemtech o su soporte si un comando no devuelve la confirmación esperada o el dispositivo no logra conectarse.

## Por qué usar Plaspy con esta configuración

Usar el AT21-4G con Plaspy ofrece una solución de seguimiento de bajo mantenimiento, alimentada por energía solar, para activos remotos donde no hay alimentación por cable. Apuntar el dispositivo al endpoint y puerto compartidos de Plaspy permite una ingesta constante de datos de ubicación, sensores y eventos para que los equipos puedan supervisar de forma centralizada el estado, movimiento y alertas de los activos.

Para obtener más información sobre Plaspy y las funciones de la plataforma, visite https://www.plaspy.com. Los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo; verifique los detalles de la configuración actual en el sitio web de Totemtech http://www.totemtek.com/ antes del despliegue.
