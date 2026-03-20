---
slug: /queclink/gv56/configuration
id: gv56-configuration
sidebar_label: Configuration
title: QuecLink - GV56 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GV56 para integrarlo con Plaspy. Incluye ajustes de servidor y ejemplos de comandos SMS
keywords:
  - configuración QuecLink GV56
  - instalación QuecLink GV56
  - configuración GV56 Plaspy
  - configuración rastreador GPS Plaspy
  - configuración servidor QuecLink
  - configuración SMS GV56
  - ajustes APN GV56
  - configuración GPRS GV56
  - seguimiento de flotas GV56
  - configuración rastreador vehicular
---

# QuecLink - Configuración del GV56

Esta página documenta el contexto público de configuración para usar el rastreador QuecLink GV56 con la plataforma Plaspy. Se centra en los ajustes de servidor de Plaspy que usted debe aplicar y ofrece orientación práctica basada en comandos públicos y pasos habituales para que el GV56 informe a Plaspy en tiempo real y envíe eventos.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos SMS de ejemplo que aparecen en esta página reflejan flujos de configuración públicos habituales y deben usarse como referencia práctica junto con la documentación oficial de QuecLink.

## Resumen de la configuración

Preparar un GV56 para funcionar con Plaspy consiste en configurar el dispositivo para que envíe datos GNSS y eventos al endpoint compartido de Plaspy, validar la conectividad y activar los intervalos de reporte e entradas necesarias para que la plataforma muestre y actúe sobre la telemetría del equipo.

- Configure el GV56 para que reporte al endpoint del servidor de Plaspy y así los mensajes de posición y eventos lleguen a la plataforma.
- Verifique la conectividad móvil y los ajustes APN para asegurar el transporte GPRS.
- Defina intervalos de reporte y entradas de eventos para que la plataforma reciba actualizaciones oportunas de posiciones y alarmas.
- Valide la visibilidad en Plaspy tras la configuración para confirmar la detección del protocolo y puerto.
- Use los comandos SMS públicos proporcionados como método de ejemplo para la configuración inicial o la recuperación.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará el protocolo del equipo automáticamente una vez que el dispositivo envíe datos al endpoint del servidor indicado arriba.

## Requisitos típicos antes de comenzar

- Un GV56 alimentado con acceso a su interfaz de SMS o a la herramienta de configuración del fabricante.
- Una tarjeta SIM activa con datos habilitados y credenciales APN correctas para el operador.
- Acceso al método o software de configuración del fabricante (comandos SMS, herramienta de PC u OEM) para establecer APN y parámetros de servidor.
- Es posible que necesite la contraseña del dispositivo para la configuración por SMS; el ejemplo público usa la contraseña queclink.
- Conocimientos básicos del intervalo de reporte deseado y de qué entradas (SOS, ignición, analógico) deben estar habilitadas para su despliegue.
- Un método para observar los intentos de conexión del dispositivo y verificar que Plaspy lo está recibiendo (lista de dispositivos Plaspy o registros del servidor).

## Cómo se conecta este rastreador a Plaspy

El GV56 envía posiciones GNSS y mensajes basados en eventos a través de la red celular al endpoint y puerto del servidor Plaspy. Una vez configurado para apuntar a d.plaspy.com (o a la IP del servidor), el dispositivo utiliza transporte GPRS para abrir una sesión TCP o UDP y transmitir datos para que Plaspy muestre la ubicación, alarmas y telemetría en tiempo real.

- Informes periódicos de posición se envían al endpoint y puerto de Plaspy para mantener la visibilidad de la ubicación.
- Mensajes de evento como SOS, cambios de ignición o disparos de alarma se reenvían a Plaspy para su procesamiento inmediato.
- Telemetría como entrada analógica o cambios de estado de entradas se incluye en los mensajes para que Plaspy los asigne a paneles y reglas.
- El GV56 se configura para reportar al endpoint compartido de Plaspy (d.plaspy.com / 54.85.159.138) en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo manualmente en la plataforma.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de QuecLink recomendado para su dispositivo y firmware (comandos SMS, herramienta OEM o software del proveedor).  
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Ajuste el puerto del dispositivo a 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.  
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según su necesidad.  
5. Configure el APN y las credenciales del operador que sean necesarias, luego aplique o guarde la configuración.  
6. Reinicie el dispositivo si el fabricante lo solicita para aplicar los ajustes por SMS o por software.  
7. Verifique que el dispositivo reporte a Plaspy confirmando que aparece en línea en Plaspy y que se reciben posiciones y eventos.

Si su método de instalación es por SMS, aplique los comandos en el orden que el dispositivo requiera y confirme que cada comando es aceptado antes de continuar.

## Comandos de configuración de ejemplo

El GV56 puede configurarse vía SMS usando la contraseña del dispositivo. Los siguientes comandos públicos de ejemplo se muestran en el mismo orden que en la documentación del dispositivo. La configuración de muestra usa la contraseña queclink como contraseña de comando. Use estos comandos únicamente a través de la interfaz SMS oficial del fabricante.

1. Paso inicial opcional — restaurar valores de fábrica (solo si es necesario un reinicio a fábrica)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```
- Restaura los valores predeterminados de fábrica. Considere este paso opcional y úselo solo cuando necesite restablecer la configuración del equipo.

2. Establecer la zona horaria en UTC+0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```
- Ajusta la zona horaria del dispositivo. Modifique los parámetros si su despliegue requiere un offset diferente.

3. Establecer el APN del operador
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- Reemplace los marcadores:
  - {{apn}} = nombre del APN del operador de la SIM
  - {{apnu}} = nombre de usuario del APN (si el operador lo requiere)
  - {{apnp}} = contraseña del APN (si es necesaria)
- Si el operador no solicita usuario o contraseña, deje esos marcadores vacíos según el formato del comando del dispositivo.

4. Configurar el servidor GPRS y los puertos para Plaspy
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando configura el dispositivo para usar d.plaspy.com y la IP 54.85.159.138 con el puerto 8888. Incluye tanto dominio como IP y establece la configuración de transporte según la sintaxis del comando del equipo. El dispositivo puede usar TCP o UDP en el puerto 8888 dependiendo de la configuración de transporte.

5. Establecer el intervalo de actualización a 60 segundos
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```
- Configura el intervalo regular de reporte en 60 segundos. Ajuste los valores si necesita una cadencia diferente.

6. Habilitar notificación del botón SOS en la entrada 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```
- Activa el reporte SOS asignado a la entrada especificada. Modifique según su cableado y asignación de entradas.

Nota: Mantenga la contraseña del dispositivo correcta para los comandos SMS. El ejemplo usa queclink como contraseña; su equipo puede tener una contraseña diferente provisionada por el proveedor.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y los parámetros soportados; siempre verifique los comandos con la versión de firmware del dispositivo que tenga.
- El GV56 soporta tanto configuración por SMS como herramientas del proveedor; elija el método que coincida con sus prácticas operativas y permisos del instalador.
- Al elegir TCP frente a UDP, considere los requisitos de red y servidor; Plaspy acepta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Todos los dispositivos Plaspy usan el mismo puerto 8888, por lo que una configuración de puerto consistente simplifica la provisión de flotas.
- Conserve los marcadores como {{apn}}, {{apnu}} y {{apnp}} al preparar comandos SMS y reemplace con las credenciales del operador según sea necesario.

## Por qué usar Plaspy con esta configuración

Usar el QuecLink GV56 con Plaspy proporciona a los operadores de flota telemetría compacta y fiable para visibilidad en tiempo real, monitoreo de eventos y flujos de trabajo automatizados. Las entradas y sensores del GV56 permiten que Plaspy identifique ignición, datos de sensores analógicos y alarmas, y los convierta en paneles y reportes accionables para supervisión operativa y respuesta ante incidentes.

Learn more about Plaspy and how it manages device connections and telematics workflows at https://www.plaspy.com. For the latest device specific configuration instructions, firmware notes, and command references consult the manufacturer documentation at https://www.queclink.com/ to verify details for your hardware and firmware version.
