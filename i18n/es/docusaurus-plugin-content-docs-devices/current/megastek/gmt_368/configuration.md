---
slug: /megastek/gmt_368/configuration
id: gmt_368-configuration
sidebar_label: Configuration
title: Megastek - GMT-368 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Megastek GMT-368 con Plaspy mediante SMS o ajustes de servidor GPRS
keywords:
  - Megastek GMT-368
  - configuración Megastek GMT-368
  - configuración GMT-368
  - GMT-368 Plaspy
  - configuración del rastreador Megastek
  - configuración rastreador GPS motocicleta
  - configuración de dispositivo Plaspy
  - configuración servidor rastreador GPS
  - comandos SMS GMT-368
  - configuración GPRS GMT-368
---

# Megastek - Configuración GMT-368

Esta página describe el contexto público de configuración para usar el Megastek GMT-368 con la plataforma Plaspy. Se enfoca en los pasos prácticos y en los parámetros del servidor necesarios para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda reportar ubicaciones y eventos. Cuando están disponibles, se incluyen comandos SMS de ejemplo del fabricante para que pueda aplicar las configuraciones directamente en dispositivos que admiten configuración por SMS.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GMT-368 admite comunicación por SMS y GPRS y puede configurarse mediante comandos SMS como se muestra en la sección de ejemplos a continuación.

## Resumen de la configuración

El proceso de configuración prepara el GMT-368 para comunicarse con Plaspy y garantiza que el dispositivo reporte de forma fiable. Normalmente incluye establecer la identidad del dispositivo, el APN del operador, el servidor y puerto GPRS, y el intervalo de reporte para que las actualizaciones de ubicación lleguen a Plaspy de forma periódica.

- Apuntar el rastreador al endpoint y puerto del servidor de Plaspy para enrutar los datos correctamente
- Configurar el APN del operador y, si es necesario, las credenciales APN para que el dispositivo use datos móviles
- Establecer el intervalo de reporte para controlar la frecuencia con la que el GMT-368 envía actualizaciones de posición
- Habilitar el modo GPRS (datos) para que el dispositivo transmita por TCP o UDP a Plaspy
- Verificar que el dispositivo sea visible en Plaspy después de la configuración y que se reciban actualizaciones

## Ajustes del servidor de Plaspy

Configure el GMT-368 para usar los siguientes datos del servidor de Plaspy al establecer el servidor GPRS o la dirección del servidor:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte admitido UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo empleado por el rastreador.

## Requisitos habituales antes de la configuración

- Acceso al IMEI o número de serie del dispositivo para identificar el rastreador durante la configuración
- Una SIM con datos provisionados y capacidad para enviar y recibir SMS si va a usar configuración por SMS
- Conocimiento de la contraseña del dispositivo para los comandos SMS de configuración (la contraseña por defecto de ejemplo mostrada abajo es 000000)
- Un teléfono capaz de enviar SMS o acceso a la herramienta o software de configuración del fabricante
- Información del APN, nombre de usuario APN y contraseña APN del operador móvil si la SIM lo requiere
- Batería suficiente o alimentación externa para completar la configuración y permitir que el dispositivo establezca una sesión GPRS

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para Plaspy, el GMT-368 envía información de posición y estado por datos móviles a la plataforma. Plaspy recibe el tráfico del dispositivo en un endpoint compartido y aplica detección automática de protocolo para procesar correctamente los mensajes entrantes.

- El rastreador se configura para reportar a Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138
- Todos los dispositivos envían al mismo puerto 8888 que Plaspy utiliza para conexiones entrantes
- El dispositivo puede transmitir usando UDP o TCP al servidor de Plaspy según la configuración
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar el protocolo en la plataforma
- Una vez conectado, el dispositivo se vuelve visible en Plaspy y envía actualizaciones periódicas de ubicación y alarmas

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Megastek o al software correspondiente, o prepare un teléfono con capacidad SMS para enviar los mensajes de configuración.
2. Ingrese el host del servidor de Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que Plaspy usa para todos los dispositivos compatibles.
4. Elija UDP o TCP si la configuración del GMT-368 le solicita seleccionar un protocolo de transporte.
5. Configure el APN y, si corresponde, las credenciales APN con los valores del operador si el dispositivo usará GPRS.
6. Aplique o guarde la configuración y reinicie o corte la alimentación del rastreador si el dispositivo lo requiere para que los cambios surtan efecto.
7. Valide que el GMT-368 reporte a Plaspy comprobando la visibilidad del dispositivo y los reportes de posición recientes en la plataforma.

Si utiliza el método de comandos SMS, siga el orden de comandos del fabricante y reemplace los marcadores con los valores de su dispositivo tal como se muestra en la sección de comandos de ejemplo.

## Ejemplos de comandos de configuración

El GMT-368 admite configuración mediante SMS. Los siguientes comandos de ejemplo son las cadenas SMS públicas usadas en la configuración de muestra. La contraseña de ejemplo del dispositivo mostrada a continuación es 000000, que es el valor de fábrica en el ejemplo proporcionado. Si su dispositivo usa otra contraseña, reemplace 000000 por la contraseña real.

1. Establecer la ID del dispositivo
Reemplace las X con los últimos 15 dígitos del IMEI del dispositivo al enviar este SMS.
```text
M000000,22,XXXXXXXXXXXXXXX
```

2. Configurar el APN del operador
Use el APN proporcionado por su operador móvil. Si se requieren nombre de usuario o contraseña del APN, inclúyalos como campos adicionales separados por comas.
```text
M000000,23,{{apn}}
```
O con nombre de usuario y contraseña del APN
```text
M000000,23,{{apn}},{{apnu}},{{apnp}}
```
Nota: {{apn}} es el nombre del punto de acceso del operador. {{apnu}} es el marcador de usuario del APN. {{apnp}} es el marcador de contraseña del APN.

3. Establecer el intervalo de actualización a 60 segundos
```text
M000000,25,60
```

4. Configurar el servidor GPRS para apuntar a Plaspy
Este comando establece el índice del servidor y la dirección del servidor Plaspy con puerto. Use la IP del servidor Plaspy o el dominio según el flujo de trabajo. El ejemplo usa la IP de Plaspy y el puerto requerido 8888.
```text
M000000,24,56 54.85.159.138,8888
```
Alternativamente, si su dispositivo acepta el dominio puede sustituir d.plaspy.com en lugar de la IP según la sintaxis del comando:
```text
M000000,24,56 d.plaspy.com,8888
```

5. Habilitar modo GPRS
```text
M000000,21,2
```

El orden importa al aplicar los comandos SMS en la configuración inicial. El orden típico es: establecer ID del dispositivo, configurar APN, establecer intervalo de actualización, configurar servidor GPRS y finalmente habilitar modo GPRS. Si la contraseña del dispositivo no es la predeterminada 000000, reemplácela al inicio de cada cadena de comando.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o los parámetros disponibles. Confirme los comandos exactos contra la documentación de Megastek para el firmware de su dispositivo.
- El GMT-368 admite configuración vía SMS como se muestra en los comandos de ejemplo. Las herramientas del fabricante o el software para PC pueden ofrecer ajustes equivalentes mediante interfaz USB o serial cuando estén disponibles.
- Elija UDP o TCP según las condiciones de la red y las recomendaciones del operador. Plaspy acepta ambos transportes en el puerto 8888 y detectará automáticamente el protocolo que use el rastreador.
- Todos los dispositivos en Plaspy informan usando el mismo puerto, así que utilice el puerto 8888 para un comportamiento consistente entre dispositivos.
- Si el dispositivo no reporta después de la configuración, verifique los ajustes de APN, el estado de datos de la SIM y que el modo GPRS esté habilitado. Un reinicio o ciclo de alimentación suele ser necesario tras cambiar parámetros de red o servidor.

## Por qué usar Plaspy con esta configuración

Configurar el Megastek GMT-368 para enviar datos a Plaspy le ofrece una forma centralizada de monitorear la ubicación y el estado de motocicletas, tanto de una flota como de vehículos individuales. El endpoint compartido de Plaspy y la detección automática de protocolo simplifican el alta de dispositivos y reducen las diferencias de configuración por dispositivo en el lado de la plataforma.

Para más información sobre Plaspy visite https://www.plaspy.com. Para la referencia más reciente de comandos específicos del fabricante, notas de firmware y detalles de hardware, verifique los métodos de configuración en el sitio de Megastek https://www.megastek.com/ ya que la configuración y el comportamiento del firmware pueden cambiar con el tiempo.
