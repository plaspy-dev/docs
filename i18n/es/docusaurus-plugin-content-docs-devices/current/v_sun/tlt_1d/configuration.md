---
slug: /v_sun/tlt_1d/configuration
id: tlt_1d-configuration
sidebar_label: Configuration
title: V-SUN - TLT-1D Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el V-SUN TLT-1D con ajustes de servidor Plaspy y ejemplos de SMS
keywords:
  - configuración V-SUN TLT 1D
  - instalación V-SUN TLT 1D
  - V-SUN TLT 1D Plaspy
  - configuración de rastreadores Plaspy
  - configuración de servidor de rastreadores GPS
  - instalación de seguimiento de vehículos
  - configuración de rastreador GPRS
  - comandos SMS de configuración
  - software de rastreo TLT 1D
  - integración con plataforma GPS
---

# V-SUN — Configuración del TLT-1D

Esta página recopila la información pública necesaria para configurar el rastreador V-SUN TLT-1D con Plaspy. Incluye los ajustes públicos del servidor de Plaspy y ejemplos de comandos SMS que se usan habitualmente con este modelo. Utilice esta guía junto con la documentación del fabricante para detalles específicos del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TLT-1D soporta opciones de conexión por SMS y GPRS (TCP/UDP) y los ejemplos siguientes muestran un flujo de configuración frecuente basado en SMS utilizando la contraseña por defecto cuando se indica.

## Resumen de la configuración

El proceso de configuración prepara el TLT-1D para comunicarse de forma fiable con la plataforma Plaspy mediante GPRS o SMS y para que el dispositivo sea visible en la interfaz de Plaspy. Los pasos se centran en establecer el APN del operador, configurar el servidor y puerto GPRS, y habilitar los modos de reporte para que el dispositivo envíe datos de ubicación y eventos a Plaspy.

- Configure el APN de datos móviles para que el rastreador pueda establecer conectividad GPRS.
- Configure el rastreador para reportar al endpoint y puerto compartido de Plaspy.
- Ajuste los intervalos de actualización para reporte en movimiento y en reposo según corresponda.
- Habilite los modos de reporte por GPRS y GPS para que el dispositivo envíe datos de posición.
- Verifique que el equipo informe y sea visible en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

Al configurar el TLT-1D para uso con Plaspy, utilice exactamente los siguientes ajustes de servidor:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device requirement
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

Estos valores son los ajustes públicos del endpoint de Plaspy que deberá aplicar en el rastreador o mediante comandos SMS.

## Requisitos típicos antes de comenzar

- Un TLT-1D encendido y accesible con una SIM operativa y cobertura de red móvil
- Capacidad para enviar mensajes SMS de configuración desde un número autorizado o mediante la herramienta del fabricante
- El APN del operador y, si aplica, el usuario y la contraseña del APN proporcionados por el operador de la SIM
- Conocimiento de la contraseña del dispositivo si fue modificada; los comandos públicos usan 0000 por defecto
- Acceso a la documentación oficial de V-SUN o a las herramientas del proveedor para firmware o ajustes avanzados
- Tiempo para verificar que el dispositivo reporte en Plaspy después de aplicar la configuración

## Cómo se conecta este rastreador a Plaspy

El TLT-1D envía datos de ubicación y eventos a Plaspy por GPRS usando TCP o UDP y también puede proporcionar posición vía SMS cuando está soportado. En la práctica, el dispositivo se configura para reportar al endpoint y puerto comunes de Plaspy, de modo que Plaspy pueda identificar automáticamente el protocolo y analizar los datos entrantes del dispositivo.

- El equipo envía coordenadas GPS y mensajes de evento a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Plaspy recibe conexiones GPRS por TCP o UDP y detecta automáticamente el protocolo del rastreador
- Los intervalos de reporte en movimiento y en reposo determinan la frecuencia de envío de actualizaciones de ubicación
- Las alarmas y eventos SOS se entregan como mensajes predefinidos y quedan visibles en Plaspy
- SMS puede usarse para establecer la configuración y solicitar mensajes de posición cuando sea necesario

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de V-SUN, como la interfaz de comandos SMS o la herramienta de configuración del proveedor indicada por el fabricante.
2. Si usa comandos SMS, confirme la contraseña del dispositivo y la autorización del número remitente para mensajes de configuración.
3. Introduzca el servidor de Plaspy usando d.plaspy.com o 54.85.159.138 y establezca el puerto en 8888.
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
5. Configure el APN del operador y las credenciales del APN si son necesarias para la conectividad GPRS.
6. Aplique o guarde la configuración y realice un reinicio del dispositivo si el rastreador lo solicita.
7. Valide que el equipo reporte a Plaspy y aparezca en la plataforma con los intervalos de actualización y eventos esperados.

## Comandos de configuración de ejemplo

El TLT-1D puede configurarse enviando comandos SMS. Los siguientes comandos públicos aparecen en el material del fabricante. Envíe cada comando como un SMS simple desde un número autorizado al SIM del dispositivo. Los comandos abajo usan la contraseña por defecto 0000 cuando se requiere.

1. Reinicio opcional a valores de fábrica
   - Use solo si necesita restaurar los valores por defecto antes de la configuración
```text
*RESET#0000##
```

2. Establecer el APN del operador
   - Reemplace los marcadores con los valores del APN de su operador. [apn] es el nombre del APN. [apnu] es el usuario del APN si se requiere. [apnp] es la contraseña del APN si se requiere. Si su operador no exige usuario o contraseña deje esos campos vacíos según las reglas del comando del dispositivo.
```text
#803#0000#[apn]#[apnu]#[apnp]#
```

3. Establecer el servidor de reporte GPRS y el puerto
   - El ejemplo público del fabricante utiliza la IP y el puerto de Plaspy mostrados aquí. Si su dispositivo acepta un nombre de dominio, podría usar d.plaspy.com en lugar de la IP.
```text
#804#0000#54.85.159.138#8888##
```

4. Establecer el intervalo de actualización en movimiento
   - Este ejemplo fija el intervalo para cuando el vehículo está en movimiento. Verifique la unidad del intervalo con el fabricante si no está seguro.
```text
#805#0000#120#1##
```

5. Establecer el intervalo estático o de estacionamiento
   - Este ejemplo fija el valor para el intervalo en reposo. Confirme el significado de los campos numéricos en el manual del dispositivo.
```text
#809#0000#120#1##
```

6. Habilitar modo GPRS
   - Este comando habilita el reporte por GPRS
```text
7100000
```

7. Habilitar modo GPS
   - Este comando activa la funcionalidad GPS en el rastreador
```text
2220000
```

Nota sobre marcadores y verificación
- Mantenga los marcadores [apn], [apnu] y [apnp] tal como aparecen y sustitúyalos por los datos de su operador. La contraseña por defecto del dispositivo en los comandos públicos es 0000. Confirme cualquier diferencia en su equipo antes de enviar los comandos.

## Observaciones de configuración

- El firmware y la sintaxis de comandos pueden variar entre revisiones de hardware y versiones de firmware, por lo que confirme los comandos en el manual oficial de V-SUN.
- El TLT-1D soporta configuración vía SMS según los comandos públicos mostrados y reporte GPRS al endpoint y puerto de Plaspy.
- Seleccione UDP o TCP según la capacidad del dispositivo y las condiciones de la red; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Confirme con el operador de la SIM si el APN requiere usuario y contraseña antes de enviar comandos de APN.
- Si utiliza el dominio del servidor en lugar de la dirección IP, asegúrese de que el firmware del rastreador soporte nombres de dominio en la configuración del servidor.

## Por qué usar Plaspy con esta configuración

Usar el V-SUN TLT-1D con Plaspy ofrece una forma sencilla de centralizar la ubicación de vehículos, el reporte de eventos y el historial de recorridos de dispositivos que soportan SMS y GPRS. Apuntar el rastreador al servidor compartido de Plaspy y al puerto común de la plataforma permite a Plaspy detectar el protocolo automáticamente e comenzar a recibir datos de ubicación para monitoreo y supervisión operativa.

Para conocer más sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar los últimos detalles y la sintaxis de comandos específicos del dispositivo en el sitio web de V-SUN http://www.v-sun.cc/ antes de aplicar cambios.
