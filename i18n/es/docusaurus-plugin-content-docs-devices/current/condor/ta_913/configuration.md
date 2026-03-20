---
slug: /condor/ta_913/configuration
id: ta_913-configuration
sidebar_label: Configuration
title: Condor - TA-913 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Condor TA-913 con ajustes de servidor Plaspy y comandos SMS para integrar el dispositivo
keywords:
  - Configuración Condor TA-913
  - Configuración TA-913
  - Configuración Plaspy TA-913
  - Configuración servidor TA-913
  - Configuración rastreador aviación Condor
  - Comandos SMS TA-913
  - Configuración rastreador Plaspy
  - Integración rastreador Condor
  - Configuración plataforma GPS TA-913
  - Configuración rastreador aviación
---

# Condor - Configuración TA-913

Esta página documenta el contexto público de configuración para usar el Condor TA-913 con Plaspy. Se concentra en los ajustes de servidor compartidos que requiere Plaspy, los comandos SMS públicos habitualmente publicados para el TA-913 y los pasos prácticos para lograr que el rastreador informe a Plaspy y así disponer de visibilidad y alertas. El TA-913 es un dispositivo de comunicaciones y rastreo para aviación que, conectado a Plaspy, entrega mensajes de estado, eventos de pánico, marcadores POI y comunicaciones de texto por satélite al control en tierra.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los equipos se conectan. Los pasos exactos del fabricante para el TA-913 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. La configuración pública del modelo TA-913 incluye comandos SMS y una contraseña de fábrica por defecto 0000 que los instaladores suelen usar durante la puesta en marcha.

## Resumen de configuración

Configurar el TA-913 para Plaspy prepara el equipo para enviar mensajes de ubicación y eventos a un endpoint centralizado de servidor Plaspy, de modo que los operadores puedan monitorear el estado de la aeronave y las comunicaciones en tiempo real. El flujo público de configuración para este modelo incluye el envío de mensajes SMS de configuración o el uso del software del fabricante cuando esté disponible para establecer APN, servidor, intervalos de reporte y modo GPRS.

- Prepare el equipo para conectarse a Plaspy configurando el APN de la red y el modo GPRS.
- Apunte el rastreador al endpoint del servidor Plaspy y al puerto compartido que usan todos los dispositivos Plaspy.
- Configure un identificador del dispositivo, como un alias basado en el IMEI, para facilitar la identificación en Plaspy.
- Ajuste los intervalos de reporte para controlar la frecuencia con la que el TA-913 envía actualizaciones a Plaspy.
- Valide la conectividad usando el comando de verificación del dispositivo para que aparezca en la plataforma.

## Ajustes del servidor Plaspy

- El dominio d.plaspy.com es el dominio canónico a usar cuando la interfaz del dispositivo lo soporte.
- La IP de servidor 54.85.159.138 puede usarse cuando la configuración del rastreador requiera una dirección IP.
- El puerto 8888 es el puerto compartido que Plaspy utiliza para todos los dispositivos soportados.
- Se admite transporte UDP o TCP; el TA-913 puede configurarse para usar UDP o TCP en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta, por lo que la selección manual del protocolo no es necesaria en la plataforma, aunque el propio dispositivo puede solicitar que usted elija UDP o TCP.

## Requisitos típicos antes de comenzar

- Alimentación del avión o una fuente de alimentación estable en banco y una unidad TA-913 encendida y lista para configuración.
- Una SIM activa con datos y SMS habilitados si va a usar métodos de configuración por GPRS y SMS.
- Acceso al método de configuración del fabricante del TA-913, como comandos SMS o las herramientas oficiales de Condor.
- El IMEI del dispositivo y la posibilidad de leer sus últimos dígitos para asignar un alias.
- Conocimiento de los valores APN del operador móvil de la SIM instalada en el equipo.
- Una forma de recibir mensajes SMS de confirmación o ver los registros del dispositivo para validar la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TA-913 envía sus mensajes y eventos al endpoint y puerto compartidos del servidor Plaspy para que la plataforma ingiera la telemetría, alertas y registros de mensajes de texto. Plaspy correlaciona los mensajes entrantes y los presenta en paneles para monitoreo, alertas y revisión histórica.

- El rastreador informa al dominio o IP del servidor Plaspy y al puerto 8888 para todo el tráfico del dispositivo.
- Los mensajes y eventos se transmiten por el transporte seleccionado, UDP o TCP, según esté configurado en el equipo.
- Plaspy determina automáticamente el protocolo del rastreador al conectarse e ingiere los datos.
- Actualizaciones de estado, eventos de pánico, marcadores POI y mensajes de texto por satélite se reenvían a Plaspy para la atención del operador.
- Una configuración exitosa asegura que el rastreador sea visible en los paneles y herramientas de registro de Plaspy.

## Flujo de configuración común

1. Acceda al método oficial de configuración del Condor TA-913, típicamente comandos basados en SMS o la herramienta de configuración del fabricante.
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor o servidor GPRS.
3. Configure el puerto en 8888, que es el puerto compartido usado por Plaspy para todos los dispositivos.
4. Elija UDP o TCP para el transporte si el TA-913 solicita una selección explícita.
5. Establezca el APN del equipo, alias o identificador, zona horaria, intervalo de reporte y habilite el modo GPRS según se requiera.
6. Aplique o guarde la configuración en el dispositivo y reinicie la unidad si el dispositivo o el firmware requieren un reboot.
7. Valide que el equipo informa a Plaspy usando el comando de verificación provisto o comprobando la visibilidad del dispositivo y la telemetría entrante en Plaspy.

## Comandos de ejemplo para la configuración

La configuración pública del TA-913 utiliza comandos SMS. Los comandos que aparecen a continuación preservan los marcadores de posición y el orden del modelo público de configuración. Use la contraseña de fábrica 0000 donde se indica a menos que la haya cambiado.

- Configure el APN del operador
```
APN,0000,[apn]{{,[apnu],[apnp]}}
```
Nota: Reemplace [apn] por el APN de su operador. Si su operador requiere usuario o contraseña, incluya [apnu] y [apnp] respectivamente. Si no son necesarios, omítalos.

- Configure un identificador de 5 dígitos (use los últimos 5 dígitos del IMEI)
```
ALIAS,0000,<last5imei>#
```
Nota: Reemplace \<last5imei> con los últimos cinco dígitos del IMEI del equipo. El rastreador usa este alias para identificación.

- Configure la zona horaria a UTC 0
```
GMT,0000,-0#
```

- Configure el servidor GPRS para apuntar a Plaspy por IP, puerto y transporte
```
SERVIDOR,0000,54.85.159.138,8888,U,A#
```
Nota: Este ejemplo usa la IP del servidor Plaspy y el puerto 8888 y selecciona UDP como transporte. Puede sustituir d.plaspy.com por la IP cuando el dispositivo acepte un nombre de dominio, y elegir UDP o TCP según sea necesario.

- Configure el intervalo de actualización (ejemplo establece actualizaciones cada 1 minuto)
```
INTERVALO,0000,M,6#
```

- Ponga el modo GPRS en activo
```
GPRS,0000,A#
```

- Verifique la configuración de conexión del dispositivo
```
CONEXION,0000#
```

Envíe cada comando como SMS al TA-913 usando la contraseña por defecto 0000 salvo que usted la haya cambiado. Mantenga el orden de los comandos cuando el fabricante indique que el orden importa para la inicialización correcta.

## Notas de configuración

- Las instrucciones públicas del TA-913 muestran configuración por SMS; en algunas implementaciones se puede usar software de Condor o herramientas de servicio en lugar de SMS.
- Las versiones de firmware o las revisiones de hardware pueden cambiar la sintaxis de los comandos o los parámetros requeridos; verifique los comandos contra las notas de firmware del dispositivo cuando sea posible.
- La elección entre TCP y UDP afecta el comportamiento de transporte en el rastreador; Plaspy soporta ambos y detectará automáticamente el protocolo entrante.
- Usar el dominio d.plaspy.com es preferible cuando el dispositivo admite nombres de dominio; de lo contrario la IP del servidor 54.85.159.138 es una alternativa aceptable.
- Asegúrese de que el APN de la SIM y el modo GPRS estén correctos antes de configurar el servidor para que el rastreador pueda establecer la conexión de datos.

## Por qué usar Plaspy con esta configuración

Configurar el TA-913 para reportar a Plaspy proporciona una vista unificada de eventos de la aeronave, mensajes de estado y comunicaciones de texto por satélite, ayudando a los operadores a mantener conciencia situacional y responder a eventos críticos. Con Plaspy ingiriendo eventos de botón, marcadores POI y mensajes del TA-913, los equipos de despacho y operaciones obtienen registros trazables y alertas en tiempo real que respaldan la seguridad y los flujos de trabajo de misión.

Aprenda más sobre Plaspy y cómo se integra con rastreadores compatibles en https://www.plaspy.com. Para los detalles más recientes sobre la configuración específica del dispositivo, la sintaxis de comandos y las notas de firmware del TA-913, consulte el sitio del fabricante https://condorskyseeker.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
