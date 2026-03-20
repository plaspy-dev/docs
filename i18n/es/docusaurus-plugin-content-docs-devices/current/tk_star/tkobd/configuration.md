---
slug: /tk_star/tkobd/configuration
id: tkobd-configuration
sidebar_label: Configuration
title: TK-Star - TKOBD Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TKOBD para conectar con Plaspy usando ajustes de servidor compartido y opciones por SMS
keywords:
  - Configuración TK-Star TKOBD
  - Configuración TKOBD Plaspy
  - Configuración de servidor TKOBD
  - Configuración rastreador GPS TKOBD
  - TKOBD rastreador OBD Plaspy
  - Ajustes APN TKOBD
  - Comandos SMS TKOBD
  - Seguimiento de vehículo TKOBD
  - Seguimiento de flotas TKOBD Plaspy
  - Configuración GPRS TKOBD
---

# TK-Star - Configuración del TKOBD

Esta página documenta el contexto público de configuración para utilizar el rastreador OBD TKOBD con Plaspy. Resume los ajustes de servidor prácticos que Plaspy requiere, el flujo de trabajo común de puesta en marcha y los comandos SMS publicados para dispositivos TKOBD, de modo que usted pueda preparar el equipo para reportar a los servicios backend de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración en el lado del fabricante para el TKOBD pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TKOBD admite comandos de configuración por SMS y reporte por GPRS; esta página muestra los comandos y la orientación públicamente disponibles necesarios para registrar el dispositivo en Plaspy.

## Resumen de la configuración

Configurar el TKOBD para Plaspy consiste en establecer una conectividad GPRS fiable, apuntar el dispositivo al endpoint del servidor de Plaspy y confirmar que el equipo envía actualizaciones periódicas de ubicación. Los comandos SMS de ejemplo que se muestran a continuación son el método documentado públicamente para muchas unidades TKOBD y demuestran los campos típicos que deberá ajustar.

- Prepare el dispositivo para usar el APN del operador y, si es necesario, las credenciales APN para que el rastreador pueda acceder a GPRS.
- Configure el endpoint y el puerto del servidor Plaspy para que el dispositivo sepa dónde enviar la telemetría.
- Ajuste el intervalo de subida para que el rastreador informe la ubicación con la cadencia apropiada para su flota.
- Cambie el dispositivo al modo de reporte por GPRS y verifique que el equipo sea visible en Plaspy.
- Use los comandos SMS que se muestran más abajo o la herramienta oficial de configuración TK‑Star provista por el proveedor para aplicar los ajustes.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

Estos valores son los detalles públicos del endpoint de Plaspy necesarios para que el TKOBD reporte ubicación y telemetría a su cuenta Plaspy. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará el protocolo del rastreador automáticamente.

## Requisitos típicos antes de la configuración

- Un dispositivo TKOBD funcional conectado al puerto OBD del vehículo y recibiendo alimentación del vehículo.
- Una tarjeta SIM activa con datos habilitados y el APN correcto del operador móvil.
- Acceso al método de configuración del dispositivo empleado por TK‑Star, como comandos SMS o herramientas de configuración del proveedor.
- Conocimiento de la contraseña del dispositivo si se requiere para la configuración (la contraseña pública por defecto documentada por TK‑Star es 123456).
- Un teléfono capaz de enviar mensajes SMS al número del dispositivo si va a usar la configuración por SMS.
- Acceso a las credenciales y a la cuenta de Plaspy para validar que el dispositivo aparece en la plataforma después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el TKOBD envía datos de ubicación y estado por GPRS al backend de Plaspy, donde se ingieren y se muestran en tiempo real. El dispositivo reporta periódicamente según el intervalo de subida configurado y genera alarmas para eventos configurados que Plaspy presenta en la plataforma.

- El rastreador se apunta al endpoint compartido de Plaspy y al puerto para la entrega de telemetría.
- Los mensajes de subida regulares informan posición y movimiento a Plaspy para el seguimiento en vivo.
- Mensajes de evento como vibración, movimiento, violaciones de geocerca y exceso de velocidad se envían a Plaspy como alertas.
- Plaspy almacena el historial de rutas y la telemetría para revisión operativa e informes.
- La detección del protocolo la maneja Plaspy, por lo que el rastreador puede usar UDP o TCP en el mismo puerto de Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración TK‑Star documentado por el fabricante, normalmente comandos SMS o la herramienta del proveedor.  
2. Configure el APN de datos móviles en el dispositivo usando el comando APN y cualquier usuario o contraseña APN que requiera su operador.  
3. Ingrese la dirección del servidor Plaspy especificando d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en los ajustes de servidor del dispositivo según lo permita su interfaz.  
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo requiere la selección del transporte.  
5. Aplique o guarde la configuración en el dispositivo y cambie al modo de reporte por GPRS si es necesario.  
6. Reinicie el dispositivo o corte y restablezca la alimentación del vehículo si el fabricante recomienda hacerlo para que los ajustes entren en vigor.  
7. Valide en Plaspy que el dispositivo aparece en línea y está reportando actualizaciones de posición con el intervalo de subida esperado.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS son los comandos TK‑Star TKOBD documentados públicamente para la configuración inicial. Los ejemplos usan la contraseña por defecto del dispositivo 123456 cuando se requiere. Envíe cada comando como un SMS desde un teléfono al número del dispositivo TKOBD. Conserve los marcadores de posición cuando adapte los comandos para el APN de su operador.

- Restaurar configuración de fábrica (paso inicial opcional)
```text
begin123456
```

- Configurar el APN del operador
```text
apn123456 {{apn}}
```
Explicación: reemplace {{apn}} con la cadena APN de su operador móvil.

- Establecer el usuario APN (opcional)
```text
apnuser123456 {{apnu}}
```
Explicación: reemplace {{apnu}} con el usuario APN si su operador lo requiere.

- Establecer la contraseña APN (opcional)
```text
apnpasswd123456 {{apnp}}
```
Explicación: reemplace {{apnp}} con la contraseña APN si es necesaria.

- Configurar la IP y el puerto del servidor GPRS hacia Plaspy
```text
adminip123456 54.85.159.138 8888
```
Explicación: esto establece la IP y el puerto del servidor Plaspy. Use este comando exactamente como se muestra si su dispositivo requiere entrada por IP.

- Establecer el intervalo de actualización a 60 segundos
```text
upload123456 60
```
Explicación: configura el intervalo periódico de subida en segundos. Ajústelo según sus necesidades de reporte.

- Cambiar a modo GPRS
```text
gprs123456
```
Explicación: instruye al dispositivo para usar reporte por GPRS después de la configuración.

Nota: La contraseña 123456 es la predeterminada publicada para estos comandos de ejemplo. Si la contraseña de su dispositivo ha sido cambiada, utilice la contraseña actual en lugar de 123456. Si no conoce la contraseña, siga las indicaciones del fabricante TK‑Star para recuperar o restablecer las credenciales.

## Notas sobre la configuración

- La configuración por SMS está soportada y se muestra en los comandos de ejemplo; algunos instaladores prefieren usar las herramientas o clientes de configuración del proveedor TK‑Star cuando están disponibles.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; verifique los comandos con la versión de firmware de su dispositivo cuando sea posible.
- El dispositivo puede reportar usando UDP o TCP; elija el transporte que soporte su despliegue y seleccione UDP o TCP en el puerto 8888 según sea necesario.
- Confirme los valores de APN, usuario APN y contraseña APN con su operador móvil antes de aplicarlos al rastreador.
- Mantenga segura la contraseña del dispositivo y registre los cambios que realice durante la instalación; la contraseña pública por defecto está documentada como 123456.

## Por qué usar Plaspy con esta configuración

Usar el TKOBD con Plaspy ofrece visibilidad centralizada de la ubicación del vehículo, alertas de eventos y rutas históricas para que los operadores de flota puedan supervisar activos, responder a incidentes y analizar el comportamiento del conductor desde una sola plataforma. El factor de forma plug‑in OBD simplifica la instalación, mientras que Plaspy agrega telemetría y alarmas para flujos operativos como despacho, seguridad y cumplimiento.

Learn more about Plaspy and how it manages device connections and fleet visibility at https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer procedures for the TKOBD consult the official TK‑Star documentation at https://www.tk-star.com/ as manufacturer specifications and setup methods may change over time.
