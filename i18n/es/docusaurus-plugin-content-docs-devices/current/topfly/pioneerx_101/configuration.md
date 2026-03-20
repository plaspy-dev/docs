---
slug: /topfly/pioneerx_101/configuration
id: pioneerx_101-configuration
sidebar_label: Configuration
title: TopFly - PioneerX 101 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar TopFly PioneerX 101 con Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración TopFly PioneerX 101
  - Instalación TopFly PioneerX 101
  - Configuración PioneerX 101 Plaspy
  - Configuración rastreador GPS TopFly
  - Configuración rastreador Plaspy
  - Configuración seguimiento vehicular TopFly
  - Configuración servidor PioneerX 101
  - Configuración SMS rastreador GPS TopFly
  - Configuración rastreador gestión de flotas
  - Configuración APN PioneerX 101
---

# TopFly - Configuración del PioneerX 101

Esta página documenta el contexto público de configuración para usar el rastreador GPS TopFly PioneerX 101 con Plaspy. Resume los ajustes de servidor prácticos y ejemplos de comandos que integradores e instaladores suelen usar para apuntar el dispositivo a Plaspy, y señala qué debe verificar en el dispositivo y en la red antes de intentar la integración.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; esta página utiliza la secuencia de comandos SMS pública cuando está disponible y explica cómo se mapean esos comandos al endpoint y puerto del servidor de Plaspy.

## Resumen de la configuración

Configurar el PioneerX 101 para Plaspy prepara el dispositivo para transmitir ubicación, telemetría y eventos a un único endpoint de Plaspy, de modo que el dispositivo sea visible y manejable desde la plataforma. El flujo público de configuración suele emplear la interfaz de comandos SMS del equipo o las herramientas del fabricante para definir APN, dirección del servidor, transporte e intervalo de reporte.

- Apuntar el dispositivo al endpoint de Plaspy para que reporte al backend correcto.
- Configurar el APN y las opciones de red para que el dispositivo se conecte a la red celular.
- Establecer el transporte y el puerto (UDP o TCP en el puerto 8888) para coincidir con los ajustes compartidos de Plaspy.
- Ajustar el intervalo de reporte y el almacenamiento en búfer para que las actualizaciones de posición cumplan sus necesidades operativas.
- Validar la conectividad y confirmar que el dispositivo aparece en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: supported using UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de empezar

- Un equipo PioneerX 101 con alimentación y accesible, con una tarjeta SIM funcional y plan de datos activo si va a usar reporte por GPRS/LTE. La configuración por SMS también requiere poder enviar mensajes SMS al dispositivo.
- La contraseña por defecto del dispositivo para configuración vía SMS es 0000 en los ejemplos públicos; confirme o modifique esto según su política de instalación.
- Datos del APN del operador (APN, usuario APN, contraseña APN) para configurar la conectividad de datos.
- Acceso al método de configuración del fabricante (comandos SMS, herramienta USB/Type‑C o utilidad web/escritorio) para el PioneerX 101.
- Una forma de monitorear la conectividad del equipo y confirmar que el rastreador está reportando a Plaspy (logs de consola, LEDs del equipo o verificación en Plaspy).

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el PioneerX 101 transmite actualizaciones de ubicación y eventos del dispositivo al endpoint y puerto compartidos de Plaspy. Plaspy recibe los reportes independientemente del protocolo soportado por el rastreador porque la plataforma detecta automáticamente el protocolo y acepta conexiones en el mismo puerto para todos los equipos.

- El dispositivo se configura para reportar a d.plaspy.com (o la IP equivalente 54.85.159.138) en el puerto 8888.
- El transporte puede seleccionarse como UDP o TCP; el equipo envía telemetría usando el transporte elegido al puerto 8888.
- Las actualizaciones de ubicación, reportes de estado y eventos de alarma se reenvían a Plaspy para monitoreo en tiempo real y registro histórico.
- La detección automática de protocolo de Plaspy identifica el protocolo del rastreador, por lo que no se requiere seleccionar un protocolo diferente en el servidor.
- Tras la configuración, el dispositivo debería aparecer en la plataforma Plaspy cuando se registre correctamente y envíe sus primeros paquetes.

## Flujo típico de configuración

1. Acceda al método oficial de configuración TopFly para el PioneerX 101 (comandos SMS, herramienta USB Type‑C o software del fabricante).
2. Configure el APN con los valores del operador para que el equipo pueda usar datos celulares.
3. Ingrese el servidor de Plaspy poniendo d.plaspy.com o la IP 54.85.159.138 como dirección del servidor del dispositivo.
4. Configure el puerto del servidor en 8888; recuerde que Plaspy usa el mismo puerto para todos los dispositivos soportados.
5. Elija el protocolo de transporte (UDP o TCP) en el equipo si requiere selección explícita.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo solicita.
7. Valide que el dispositivo reporte a Plaspy confirmando una conexión exitosa y la primera ubicación/latido en su despliegue Plaspy.

## Comandos de configuración de ejemplo

El PioneerX 101 puede configurarse mediante comandos SMS. La siguiente secuencia pública de ejemplo usa la interfaz SMS del dispositivo y la contraseña por defecto 0000. Conserve los marcadores cuando sustituya sus datos de APN operadora.

1. Ajustar la zona horaria a UTC+0
```text
GMT,0000,0#
```

2. Configurar el APN del operador (reemplazar los marcadores con los valores del operador)
```text
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
- {{apn}}   = Nombre del APN suministrado por su operador móvil  
- {{apnu}}  = Usuario del APN si se requiere (dejar vacío si no se usa)  
- {{apnp}}  = Contraseña del APN si se requiere (dejar vacío si no se usa)

3. Establecer el servidor GPRS a Plaspy (IP y puerto)
```text
IP,0000,54.85.159.138 8888#
```
Alternativamente puede usar el nombre de host del servidor:
```text
IP,0000,d.plaspy.com 8888#
```

4. Ajustar el intervalo de actualización periódica a 60 segundos
```text
TIMER,0000,60:60:0:0#
```

Notas sobre estos comandos:
- Los comandos SMS de ejemplo usan la contraseña del equipo 0000 tal como aparece en el contenido público. Si la contraseña del dispositivo fue cambiada, reemplace 0000 por la contraseña actual.
- Envíe cada comando como un mensaje SMS separado al número del equipo. Mantenga el orden de comandos si el fabricante lo especifica.
- Si su instalación utiliza una herramienta de configuración en lugar de SMS, aplique los campos equivalentes: APN, dirección del servidor (d.plaspy.com o 54.85.159.138), puerto 8888, transporte (UDP/TCP) e intervalo de actualización.

## Notas sobre la configuración

- Diferencias de firmware y herramientas: los formatos de comando y las opciones disponibles pueden variar según la versión de firmware y las herramientas del proveedor; verifique la sintaxis exacta para su firmware.
- SMS frente a configuración por software: el PioneerX 101 admite configuración por SMS en el ejemplo público; si usa la herramienta USB o de escritorio del fabricante, debe aplicar los mismos valores de servidor, puerto, transporte y APN.
- TCP frente a UDP: elija UDP o TCP según sus requisitos de integración; ambos transportes son compatibles con Plaspy en el puerto 8888 y Plaspy detectará el protocolo automáticamente.
- Marcadores de APN: reemplace {{apn}}, {{apnu}} y {{apnp}} con los valores de su operador; si usuario o contraseña no son necesarios, deje esos campos vacíos según las instrucciones del operador.
- Contraseña por defecto: el ejemplo público usa la contraseña SMS por defecto 0000; cambie esta contraseña tras la configuración inicial si su política de seguridad lo exige.

## Por qué usar Plaspy con esta configuración

Usar el PioneerX 101 con Plaspy ofrece un camino directo para recopilar actualizaciones frecuentes de posición y eventos de dispositivo en una sola plataforma de gestión de flotas o activos. Al configurar el equipo para reportar a d.plaspy.com (o 54.85.159.138) en el puerto 8888 y elegir UDP o TCP según corresponda, habilita visibilidad en tiempo real, reporte de eventos y la posibilidad de actuar sobre alertas desde Plaspy sin variaciones por equipo en el servidor.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para métodos de configuración específicos por dispositivo, comportamiento de firmware y orientación del fabricante consulte la información actual en el sitio de TopFly https://www.topflytech.com/.
