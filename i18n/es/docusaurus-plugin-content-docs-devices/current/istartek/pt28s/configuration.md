---
slug: /istartek/pt28s/configuration
id: pt28s-configuration
sidebar_label: Configuration
title: iStartek - PT28S Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GPS iStartek PT28S y conectarlo a Plaspy para seguimiento en tiempo real
keywords:
  - iStartek PT28S configuración
  - iStartek PT28S instalación
  - PT28S Plaspy
  - Configuración rastreador GPS PT28S
  - Configuración servidor iStartek PT28S
  - Configuración software seguimiento PT28S
  - Configuración plataforma GPS PT28S
  - Configuración rastreador portátil iStartek
  - Configuración SMS PT28S
  - Configuración dispositivo Plaspy
---

# iStartek - Configuración del PT28S

Esta página describe el contexto público de configuración para usar el reloj rastreador GPS 4G iStartek PT28S con Plaspy. Incluye los ajustes de servidor prácticos y el flujo de trabajo habitual para apuntar el dispositivo a Plaspy para seguimiento en tiempo real e ingestión de telemetría. Utilice esta guía como punto de partida para preparar el PT28S para la integración con la plataforma; siga los materiales del fabricante para herramientas y recomendaciones específicas de firmware.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos concretos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, las preferencias del instalador y las herramientas del proveedor. El PT28S permite configurar parámetros de forma remota y aceptar comandos vía SMS; a continuación incluimos los comandos públicos por SMS proporcionados por el fabricante y mostramos cómo dirigir el dispositivo a Plaspy usando el endpoint y puerto compartidos de Plaspy.

## Resumen de la configuración

Preparar el PT28S para integrarlo con Plaspy se centra en habilitar la conectividad de datos, apuntar el rastreador al endpoint y puerto del servidor Plaspy, y verificar que el dispositivo informe correctamente a la plataforma. Los comandos públicos del fabricante incluyen ajustes por SMS que permiten configurar APN, servidor, intervalo de reporte y consultar parámetros para verificación.

- Configure el dispositivo para usar el endpoint y el puerto compartido de Plaspy para que la ubicación y la telemetría lleguen a la plataforma.
- Proporcione un APN de datos móviles válido y asegúrese de que el dispositivo pueda establecer conexión GPRS o equivalente.
- Defina el intervalo de reporte y el tipo de transporte (UDP o TCP) según sus necesidades de monitoreo.
- Valide la configuración con la consulta de parámetros del dispositivo y confirme la visibilidad dentro de Plaspy.
- Use los comandos SMS del fabricante o las herramientas de software provistas para aplicar parámetros y, si es necesario, reinicie el dispositivo para activar los ajustes.

## Ajustes de servidor de Plaspy

Utilice los siguientes ajustes públicos del servidor Plaspy al configurar el PT28S:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y realiza la detección de protocolo de forma automática para simplificar el registro de dispositivos.

## Requisitos típicos antes de la configuración

- Un PT28S con batería cargada y encendido, con una tarjeta SIM activa que soporte datos y SMS según sea necesario.
- Datos de APN proporcionados por su operador móvil (APN, usuario APN, contraseña APN) para habilitar la conectividad por paquetes.
- Un método para enviar comandos SMS al dispositivo o acceso al software de configuración del proveedor.
- Conocimientos básicos para decidir entre UDP o TCP como transporte según su despliegue.
- Acceso al manual del usuario del PT28S o al soporte del proveedor para instrucciones específicas de firmware y pasos concretos del dispositivo.
- Capacidad para monitorear el dispositivo desde Plaspy después de la configuración para confirmar la conectividad exitosa.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el PT28S envía actualizaciones periódicas de ubicación y telemetría al endpoint y puerto compartidos de Plaspy. El dispositivo puede usar transporte UDP o TCP para transmitir datos de GPS, posicionamiento y eventos; Plaspy recibe los paquetes en el puerto 8888 y determina automáticamente el protocolo correcto.

- El rastreador se apunta al dominio o IP del servidor Plaspy y al puerto para que los paquetes lleguen al endpoint de ingestión de Plaspy.
- Se transmiten a Plaspy las posiciones y la telemetría (GNSS, Wi‑Fi y posicionamiento asistido por LBS cuando esté disponible).
- Los eventos SOS y otras alertas prioritarias se reportan a Plaspy para manejo y notificaciones inmediatas.
- Los intervalos de reporte regulares envían actualizaciones de ubicación para permitir el seguimiento en vivo y la reproducción histórica en Plaspy.
- Plaspy usa el puerto compartido 8888 para todos los dispositivos y detecta automáticamente el protocolo del equipo para decodificar correctamente los datos.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del PT28S (comandos SMS, app del proveedor o herramienta de parámetros remota) según lo provea el fabricante.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según prefiera o según soporte el dispositivo.
3. Establezca el puerto del servidor en 8888, ya que Plaspy utiliza ese puerto para todos los dispositivos.
4. Seleccione el transporte UDP o TCP en el dispositivo si se requiere elegir.
5. Proporcione el APN del operador y, opcionalmente, el usuario y la contraseña del APN para que el dispositivo establezca conectividad de datos.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para activar los cambios.
7. Valide el dispositivo consultando sus parámetros y confirmando que el rastreador reporta a Plaspy y aparece en la plataforma.

## Ejemplos de comandos de configuración

El PT28S soporta comandos de configuración por SMS. Los siguientes comandos públicos son provistos por el fabricante y pueden enviarse por SMS al número de la SIM del dispositivo. Conserve los marcadores de posición y reemplace los valores por los de su operador donde sea necesario.

- Reinicio de fábrica opcional (use solo si desea borrar configuraciones existentes):
```text
FACTORY#
```

- Ajustar la zona horaria a UTC+0 (ejemplo del fabricante):
```text
GMT,E,0#
```

- Configurar el APN del operador. Reemplace {{apn}} con el APN de su operador. Si su APN requiere usuario o contraseña, incluya {{apnu}} y {{apnp}} donde se soporte:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Si no se requieren usuario ni contraseña, el comando APN puede enviarse solo como APN,{{apn}}#)

- Configurar el servidor GPRS para usar el dominio de Plaspy con puerto TCP/UDP 8888:
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente, configurar el servidor GPRS usando la IP del servidor Plaspy:
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de reporte a 60 segundos:
```text
TIMER,60#
```

- Verificar los parámetros actuales (consulta):
```text
PARAM#
```

Notas sobre los comandos
- Los ejemplos del comando SERVER muestran opciones con dominio e IP; puede usar cualquiera de las dos para dirigir el PT28S a Plaspy.
- El comando APN contiene los marcadores de posición {{apn}}, {{apnu}} y {{apnp}}. Reemplace estos valores con el APN del operador, el usuario APN y la contraseña APN respectivamente cuando sea necesario.
- Use FACTORY# únicamente cuando necesite un reinicio inicial y comprenda que borrará los parámetros existentes.
- Después de aplicar estos comandos, confirme que el dispositivo aparece y reporta en Plaspy.

## Observaciones sobre la configuración

- Las revisiones de firmware del fabricante y las variantes de hardware pueden modificar la sintaxis de comandos o los nombres de parámetros; siempre confirme los formatos de comando con el manual del PT28S o las actualizaciones del proveedor.
- El PT28S soporta la configuración de parámetros por SMS como se muestra arriba; algunas instalaciones pueden preferir el software del fabricante o herramientas de aprovisionamiento si están disponibles.
- Elija UDP o TCP según la fiabilidad de la red y sus requisitos de monitoreo; Plaspy acepta ambos transportes y detecta el protocolo automáticamente.
- Asegúrese de que el APN configurado permita conexiones salientes al endpoint del servidor Plaspy y que el plan de la SIM incluya datos según lo requerido.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados. Esto simplifica la configuración y el registro entre distintos modelos de rastreadores.

## Por qué usar Plaspy con esta configuración

Usar el PT28S con Plaspy brinda a las organizaciones visibilidad en tiempo real sobre ubicaciones, eventos SOS y telemetría del wearable, lo que facilita el monitoreo de seguridad, la respuesta a emergencias y la revisión de rutas históricas. Apuntar el PT28S al endpoint y puerto de Plaspy permite reportes continuos a una plataforma centralizada donde las alertas, las reproducciones y los paneles consolidados muestran señales de ubicación y estado.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la información de configuración más reciente en el sitio oficial del fabricante https://istartek.com/.
