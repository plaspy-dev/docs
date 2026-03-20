---
slug: /coban/gps_405/configuration
id: gps_405-configuration
sidebar_label: Configuration
title: Coban - GPS-405 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Coban GPS-405 con ajustes de servidor Plaspy, comandos SMS y notas de instalación
keywords:
  - Configuración Coban GPS-405
  - Configuración GPS-405
  - Coban GPS-405 Plaspy
  - Configuración servidor GPS-405
  - Configuración rastreador GPS-405
  - Configuración rastreador vehicular Coban
  - Configuración rastreador GPS Plaspy
  - Configuración plataforma GPS Coban
  - Configuración SMS GPS-405
  - Rastreo vehicular GPS-405
---

# Coban - Configuración del GPS-405

Esta página documenta el contexto público de configuración para usar el Coban GPS-405 con Plaspy. Explica los ajustes compartidos del servidor Plaspy que debe aplicar, muestra los comandos SMS publicados para este modelo y ofrece recomendaciones prácticas para poner el GPS-405 a reportar a Plaspy en cuanto a ubicaciones y eventos.

Plaspy utiliza ajustes de servidor comunes para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que el mismo endpoint y puerto de Plaspy se usan para la conectividad del dispositivo. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GPS-405 admite configuración vía SMS según documentación pública y esta guía incorpora esos comandos y marcadores donde aplique.

## Resumen de configuración

El objetivo de la configuración es preparar el GPS-405 para que se comunique de forma fiable con el servidor de Plaspy y así el dispositivo aparezca y reporte correctamente en la plataforma. Los comandos SMS públicos de Coban para este modelo le permiten establecer credenciales APN, apuntar el dispositivo a Plaspy, elegir el modo de transporte y ajustar intervalos de latido o de fijación de posición.

- Apuntar el GPS-405 al dominio o IP del servidor Plaspy para que el reporte GPRS se envíe a Plaspy.
- Configurar el APN y las credenciales del APN para que el dispositivo tenga acceso a Internet para el reporte GPRS.
- Seleccionar transporte UDP o TCP y establecer el puerto compartido de Plaspy para que la plataforma acepte los datos.
- Validar la conectividad y confirmar que el dispositivo reporta a Plaspy usando el comando de verificación del dispositivo.
- Opcionalmente ajustar intervalos de latido y de seguimiento según la instalación y los requisitos de reporte.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y la plataforma realiza detección automática del protocolo, por lo que puede usar el mismo puerto 8888 para el GPS-405.

## Requisitos típicos antes de la instalación

- Un Coban GPS-405 instalado y con alimentación, accesible para enviar comandos SMS de configuración.
- Una tarjeta SIM activa en el rastreador con un plan de datos móviles y el APN correcto del operador.
- Un método para enviar mensajes SMS al dispositivo si elige la configuración por SMS.
- La contraseña por defecto del dispositivo si fuera requerida para los comandos; la documentación pública del GPS-405 indica como contraseña por defecto 123456.
- Acceso a las instrucciones oficiales de configuración de Coban o a la herramienta del proveedor para confirmar la sintaxis específica del firmware.
- Paciencia para probar y validar la conectividad después de cambiar ajustes, ya que las diferencias de firmware pueden afectar el comportamiento.

## Cómo se conecta este rastreador a Plaspy

El GPS-405 se configura para reportar su ubicación y estado al servidor de Plaspy enviando tráfico GPRS al endpoint y puerto de Plaspy. En el conjunto de comandos SMS públicos, usted establece la IP o el dominio del servidor y el puerto, luego configura el modo GPRS y los intervalos de latido para que el dispositivo envíe actualizaciones a Plaspy.

- El dispositivo se apunta a d.plaspy.com o a la IP 54.85.159.138 en el comando de configuración del servidor.
- El puerto 8888 se utiliza como puerto compartido de Plaspy para todos los dispositivos.
- Puede elegir transporte UDP o TCP en el dispositivo; Plaspy acepta ambos y detecta automáticamente el protocolo.
- El rastreador envía paquetes periódicos de posición y estado a Plaspy según el intervalo de fijación o latido configurado.
- Plaspy analiza los datos entrantes y los asocia al dispositivo GPS-405 para visibilidad, alertas y monitoreo operativo.

## Flujo común de configuración

1. Acceda al método de configuración oficial de Coban para su dispositivo, normalmente comandos SMS o herramientas del proveedor, y confirme la contraseña del dispositivo y el comportamiento del firmware.
2. Configure el APN y las credenciales APN del dispositivo usando los comandos SMS o la herramienta del proveedor para que el rastreador pueda establecer una sesión de datos GPRS.
3. Ingrese la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 y establezca el puerto 8888.
4. Elija el tipo de transporte UDP o TCP en el dispositivo si el rastreador requiere una selección explícita.
5. Aplique o guarde la configuración en el rastreador y, si es necesario, reinicie el dispositivo para asegurarse de que los ajustes entren en vigor.
6. Valide que el dispositivo reporte a Plaspy mediante el comando de verificación del dispositivo o confirmando la visibilidad en la plataforma Plaspy.
7. Ajuste los intervalos de latido y de fijación según corresponda y revalide la conectividad y el reporte.

## Ejemplos de comandos de configuración

La configuración pública del GPS-405 usa comandos SMS. Los siguientes comandos provienen de la documentación pública de Coban y muestran el orden y la sintaxis típicos. La contraseña por defecto del dispositivo en estos ejemplos es 123456.

- Restauración de fábrica (paso inicial opcional)
```text
begin123456
```

- Establecer la zona horaria a UTC 0
```text
time zone123456 0
```

- Configurar el APN del operador
```text
apn123456 {{apn}}
```
  - El marcador {{apn}} debe reemplazarse por la cadena APN del operador móvil de su SIM.

- Establecer usuario y contraseña del APN
```text
up123456 {{apnu}} {{apnp}}
```
  - Los marcadores {{apnu}} y {{apnp}} son el usuario y la contraseña del APN y pueden dejarse vacíos si el operador no los requiere.

- Establecer el servidor GPRS a la IP y puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```
  - También puede usar el dominio d.plaspy.com en lugar de la IP si su firmware lo admite.

- Ejemplo de comando para intervalo de actualización
```text
fix060s060s***n123456
```
  - Este ejemplo controla los intervalos de fijación; consulte la documentación del fabricante para el formato exacto y su significado.

- Cambiar a modo GPRS y seleccionar transporte
```text
gprs123456,1,1
```
  - O simplemente:
```text
gprs123456
```
  - Use la variante que coincida con su firmware. El primer ejemplo puede indicar la selección explícita de transporte en algunos firmwares.

- Verificar la configuración actual
```text
check123456
```

- Habilitar reporte de protocolo detallado o mejorar el estado de sensores
```text
protocol123456 18
```

Siga el formato SMS exacto requerido por su firmware y confirme que el dispositivo responde a cada comando antes de proceder al siguiente paso.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la disponibilidad y la sintaxis de los comandos; confirme siempre con las notas de firmware del dispositivo o la documentación de Coban.
- La configuración por SMS es un método común para el GPS-405 y se muestra arriba; las herramientas del proveedor pueden ofrecer métodos alternativos.
- Al establecer valores de APN, use el APN, usuario y contraseña correctos del operador; los marcadores {{apn}}, {{apnu}} y {{apnp}} se usan arriba y deben reemplazarse por los valores del operador.
- Elija UDP o TCP según las necesidades de la instalación; Plaspy acepta ambos y detectará automáticamente el protocolo entrante.
- La contraseña por defecto 123456 se utiliza en los ejemplos públicos; si la contraseña de su dispositivo ha sido cambiada, use la contraseña actual del dispositivo.

## Por qué usar Plaspy con esta configuración

Configurar el Coban GPS-405 para reportar a Plaspy ofrece a las organizaciones una forma directa de consolidar la ubicación y el estado de los vehículos en una única plataforma para monitoreo, alertas y supervisión operativa. Los comandos SMS públicos facilitan desplegar y apuntar dispositivos a Plaspy rápidamente, mientras que la detección automática de protocolo de la plataforma reduce la complejidad de configuración.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad de dispositivos, visite https://www.plaspy.com. Para métodos de configuración específicos por dispositivo, comportamiento de firmware y sintaxis de comandos más actualizadas, verifique los detalles en el sitio del fabricante https://www.coban.net/.
