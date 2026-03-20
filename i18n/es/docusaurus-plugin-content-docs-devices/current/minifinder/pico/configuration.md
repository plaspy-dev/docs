---
slug: /minifinder/pico/configuration
id: pico-configuration
sidebar_label: Configuration
title: MiniFinder - Pico Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar MiniFinder Pico y su compatibilidad con Plaspy, ajustes de servidor y comandos SMS
keywords:
  - Configuración MiniFinder Pico
  - Instalación MiniFinder Pico
  - MiniFinder Pico Plaspy
  - Configuración rastreador GPS Pico
  - Ajustes servidor Pico
  - Configuración Plaspy rastreador
  - Configuración SMS rastreador GPS
  - Pico APN y servidor
  - Integración dispositivo Plaspy
  - Configuración telemetría Pico
---

# MiniFinder - Configuración del Pico

Esta página describe el contexto público de configuración para usar el rastreador MiniFinder Pico con Plaspy. Explica los valores de servidor compartidos por Plaspy, el flujo típico para registrar un dispositivo Pico y los comandos SMS públicos que apuntan un Pico hacia Plaspy. La orientación es práctica y se centra en los valores y pasos necesarios para integrar Pico con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. Use los comandos y la secuencia que se muestran como referencia pública y confirme el comportamiento específico del dispositivo con la documentación oficial de MiniFinder cuando sea necesario.

## Visión general de la configuración

El objetivo al configurar un MiniFinder Pico para Plaspy es preparar el equipo para comunicarse de forma fiable con el endpoint compartido de Plaspy, validar la conectividad y asegurarse de que el dispositivo aparezca y reporte correctamente en Plaspy. El proceso suele emplear herramientas del fabricante o comandos SMS para ajustar el APN y los valores del servidor, y después verificar el reporte en Plaspy.

- Configure el APN del dispositivo para que los datos GPRS estén disponibles para las subidas de posición.
- Configure el dispositivo para que apunte a Plaspy usando el endpoint y puerto compartidos.
- Seleccione el protocolo de transporte si el dispositivo requiere elegir entre UDP o TCP.
- Guarde o aplique los cambios y reinicie el rastreador si así lo requiere el procedimiento.
- Valide que el dispositivo aparece en Plaspy y envía ubicaciones y eventos.
- Consulte la documentación del fabricante para opciones específicas del dispositivo o diferencias de firmware.

## Valores del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son el endpoint público de Plaspy que se utiliza al configurar MiniFinder Pico. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y realiza una detección automática del protocolo para identificar el formato del rastreador.

## Requisitos típicos antes de empezar

- Un MiniFinder Pico cargado y funcional con una tarjeta SIM operativa.
- Una SIM con datos móviles o GPRS activos y capacidad de recibir/enviar SMS para los comandos de configuración.
- Acceso al método de configuración oficial de MiniFinder o a las herramientas de soporte para el Pico.
- El número telefónico del dispositivo o una forma de enviarle mensajes SMS de configuración.
- Conocimiento del APN correcto del proveedor de la SIM para establecerlo mediante S1 u otro comando equivalente.
- Acceso a su cuenta de Plaspy y los detalles de registro del dispositivo según sus flujos de monitoreo.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el Pico envía datos de ubicación y eventos al endpoint y puerto del servidor de Plaspy, de modo que el dispositivo se vuelve visible en el panel y en el motor de alertas de Plaspy. Plaspy recibe el flujo de datos del rastreador y mapea el protocolo automáticamente para una ingestión consistente.

- El dispositivo se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Los datos se transmiten por el transporte elegido, UDP o TCP, según los ajustes del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa la telemetría entrante para su mapeo y alertas.
- Actualizaciones de ubicación, eventos SOS y alarmas se integran en Plaspy para monitoreo y notificaciones.
- Una configuración correcta permite seguimiento en vivo, reproducción histórica y manejo de eventos dentro de Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de MiniFinder o al software para el Pico, o prepárese para enviar comandos SMS según lo soporte el dispositivo.
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138 en la configuración del dispositivo.
3. Establezca el puerto del servidor en 8888, que es el puerto que usa Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP como transporte si el equipo requiere elegir uno.
5. Configure el APN correspondiente a la SIM instalada para que los datos GPRS estén disponibles para las subidas.
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento del equipo lo requiere.
7. Valide que el dispositivo reporta a Plaspy revisando las posiciones o eventos entrantes en el panel de Plaspy.

Si su flujo utiliza comandos SMS, siga el orden requerido por MiniFinder y confirme que el dispositivo acepta mensajes SMS de configuración antes de proceder.

## Comandos de configuración de ejemplo

Envíe los siguientes comandos por SMS en el orden indicado. Estos son los comandos SMS públicos extraídos del contenido de configuración del MiniFinder Pico. Envíe cada línea como un SMS separado al número del dispositivo.

- Establecer la zona horaria a UTC 0
```
tz+00
```

- Configurar el APN del operador. Reemplace los valores con los datos de su operador
```
S1,{{apn}},{{apnu}},{{apnp}}
```
Explicación: {{apn}} es el nombre del APN. {{apnu}} y {{apnp}} son usuario y contraseña opcionales para autenticación del APN del operador. Si no se requiere usuario ni contraseña, puede omitir esos campos o dejarlos vacíos según la sintaxis de comandos del dispositivo.

- Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto
```
IP1,54.85.159.138,8888
```
Nota: El comando anterior usa la IP del servidor de Plaspy y el puerto 8888. También puede ser posible usar el dominio d.plaspy.com en herramientas del fabricante que acepten nombres DNS en lugar de IP.

Conserve siempre el orden de comandos cuando el dispositivo lo requiera. Consulte las instrucciones de MiniFinder para cualquier comando adicional de confirmación o verificación.

## Notas de configuración

- MiniFinder Pico admite configuración por SMS como se muestra, pero las herramientas del fabricante o un portal administrativo también pueden soportar estos ajustes según la versión de firmware.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o los parámetros admitidos; verifique la sintaxis contra la documentación actual de MiniFinder.
- Elija UDP o TCP de acuerdo con la capacidad del dispositivo y la fiabilidad de la red en su área de despliegue; Plaspy soporta ambos transportes y detectará el protocolo automáticamente.
- Todos los dispositivos soportados por Plaspy usan el puerto 8888 para conexiones entrantes, por lo que no necesita puertos diferentes por dispositivo.
- Conserve los marcadores de posición como {{apn}} exactamente y reemplácelos con los datos del operador apropiados para su SIM.

## Por qué usar Plaspy con esta configuración

Configurar MiniFinder Pico para reportar a Plaspy ofrece visibilidad centralizada de datos de ubicación y eventos, de modo que los equipos puedan monitorear la seguridad personal, el movimiento de activos y alertas en tiempo real. Los ajustes de servidor compartidos y la detección automática de protocolos de Plaspy simplifican la integración de múltiples unidades Pico en un único flujo de monitoreo.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para notas de firmware, configuración específica del dispositivo y detalles del fabricante, consulte la documentación oficial de MiniFinder en https://minifinder.se/ para verificar métodos de configuración y posibles actualizaciones.
