---
slug: /queclink/gl520mg/configuration
id: gl520mg-configuration
sidebar_label: Configuration
title: QuecLink - GL520MG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador QuecLink GL520MG con Plaspy usando servidor compartido y comandos SMS
keywords:
  - QuecLink GL520MG
  - QuecLink GL520MG configuración
  - QuecLink GL520MG instalación
  - GL520MG integración con Plaspy
  - configuración de rastreadores Plaspy
  - configuración del servidor GL520MG
  - configuración rastreador GPS QuecLink
  - configuración SMS GL520MG
  - configuración rastreo de activos
  - configuración plataforma GPS
---

# QuecLink - Configuración del GL520MG

Esta página describe el contexto público de configuración para utilizar el rastreador QuecLink GL520MG con la plataforma Plaspy. Reúne los ajustes prácticos y públicamente disponibles y ejemplos de comandos SMS usados para apuntar el GL520MG a Plaspy, de modo que el dispositivo pueda enviar ubicación y telemetría a la plataforma.

Plaspy utiliza configuraciones de servidor compartidas para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los mensajes. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas que provea el proveedor. Los comandos SMS de ejemplo a continuación provienen de guías públicas de configuración del dispositivo e ilustran un flujo de configuración común para este modelo.

## Resumen de la configuración

El objetivo de esta configuración es dejar el GL520MG listo para comunicarse de forma confiable con Plaspy, de modo que la ubicación, la telemetría de sensores y los eventos sean visibles en la plataforma. La configuración suele incluir establecer el APN celular, apuntar el dispositivo al endpoint de Plaspy, seleccionar el tipo de transporte y activar el intervalo de reporte y las entradas de eventos necesarias para su perfil de monitoreo.

- Configure el APN y sus credenciales para que el rastreador tenga conectividad GPRS/LPWAN y pueda reportar por TCP/UDP.  
- Apunte el rastreador al endpoint del servidor de Plaspy para que los mensajes lleguen a la plataforma y puedan ser parseados y mostrados.  
- Elija UDP o TCP según las necesidades de la red y el soporte del dispositivo; Plaspy admite ambos.  
- Configure un intervalo de reporte y habilite entradas como SOS o notificaciones por movimiento para que los eventos se reflejen en Plaspy.  
- Valide la conectividad confirmando que el dispositivo se registra y envía mensajes al servidor de Plaspy.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles)  
- Transport: UDP or TCP are both supported by the device and accepted by Plaspy  
- Plaspy automatically detects the tracker protocol when messages arrive

## Requisitos típicos antes de la configuración

- Un dispositivo GL520MG con batería o alimentación externa y LEDs de estado accesibles para confirmar su funcionamiento.  
- Una SIM celular activa para datos y SMS si va a usar configuración por SMS o reportes GPRS; conozca el APN, el usuario APN y la contraseña APN de su operador.  
- Acceso al método oficial de configuración QuecLink que prefiera (comandos SMS, herramienta del distribuidor o software de gestión) según lo provea el instalador o vendedor.  
- La contraseña del dispositivo para comandos remotos; la contraseña por defecto pública usada en los ejemplos es queclink.  
- Cobertura de red en la zona donde operará el dispositivo y confirmación de que el operador soporta las bandas usadas por el GL520MG.  
- Verificación de la versión de firmware y notas del proveedor, ya que la sintaxis exacta de los comandos y su comportamiento pueden variar entre versiones.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo, el GL520MG envía posiciones y telemetría al endpoint y puerto compartidos de Plaspy para que la plataforma ingiera, normalice y muestre los datos del dispositivo. El equipo puede usar TCP o UDP para transmitir reportes; Plaspy acepta mensajes en el mismo puerto para todos los dispositivos y selecciona automáticamente el parser de protocolo correcto.

- El rastreador se configura para reportar a d.plaspy.com (o 54.85.159.138) en el puerto 8888.  
- El transporte de datos puede ser TCP o UDP según la elección de configuración y las necesidades de fiabilidad de la red.  
- Ubicación, temperatura, movimiento y entradas de evento se envían a Plaspy y aparecen en los paneles de dispositivo y en las alertas.  
- La plataforma ofrece visibilidad del estado del dispositivo y la actividad de mensajes una vez que el equipo comienza a reportar.  
- Plaspy normaliza los mensajes con formato QuecLink para que la telemetría de este dispositivo se integre con otros datos de flota y activos.

## Flujo típico de configuración

1. Acceda al método oficial de configuración QuecLink que vaya a usar (comandos SMS, herramienta del proveedor o portal de gestión).  
2. Configure el APN del dispositivo y las credenciales para que el rastreador pueda usar datos celulares para el reporte.  
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 y establezca el puerto del servidor en 8888.  
4. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar uno.  
5. Aplique o guarde la configuración y, si se recomienda, envíe cualquier comando de activación o prueba.  
6. Reinicie o haga un ciclo de energía del dispositivo si el fabricante lo requiere para aplicar los ajustes.  
7. Valide que el dispositivo reporta a Plaspy verificando el estado del equipo en la plataforma o confirmando que los mensajes entrantes llegan al endpoint de Plaspy.

## Ejemplos de comandos de configuración

El ejemplo proporcionado por el fabricante usa comandos SMS para configurar el GL520MG. Los comandos de muestra a continuación asumen que la contraseña del dispositivo es la predeterminada queclink. El orden es importante para la configuración inicial; el primer comando restaura la configuración de fábrica y es opcional para dispositivos que ya estén en servicio.

1. Restauración opcional a configuración de fábrica (usar solo si necesita reiniciar ajustes)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```
- Restaura la configuración de fábrica. Se marca como opcional y normalmente solo se usa en la puesta en marcha inicial o para resolución de problemas.

2. Establecer la zona horaria a UTC+0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```
- Configura la zona horaria del dispositivo. Ajuste los valores si necesita otro desfase.

3. Configurar el APN del operador (reemplace los marcadores con los valores de su operador)
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} = nombre del punto de acceso del operador  
- {{apnu}} = nombre de usuario del APN si el operador lo exige (dejar vacío si no aplica)  
- {{apnp}} = contraseña del APN si el operador la exige (dejar vacío si no aplica)

4. Establecer el servidor GPRS y el puerto a Plaspy (el dispositivo permite especificar dominio e IP)
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Apunta el dispositivo a Plaspy usando el dominio y la IP en el puerto 8888. Plaspy acepta TCP o UDP en este puerto y detecta automáticamente el protocolo.

5. Establecer el intervalo periódico de actualización a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```
- Configura los valores de frecuencia de reporte; ajuste según sea necesario para balancear visibilidad y consumo de batería.

6. Habilitar notificación del botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```
- Habilita el reporte de eventos SOS para la entrada especificada.

Nota: Mantenga el orden de los comandos al realizar una configuración inicial. Reemplace los marcadores de APN con los valores proporcionados por su operador móvil. Los comandos de ejemplo son comandos AT estilo SMS usados con dispositivos QuecLink; algunos instaladores pueden preferir configurar mediante una herramienta del proveedor en lugar de SMS.

## Notas de configuración

- La configuración por SMS se muestra porque es un método público común para dispositivos QuecLink; las herramientas del proveedor o sistemas de gestión remota pueden ofrecer un flujo alternativo.  
- Diferentes versiones de firmware o revisiones de hardware pueden cambiar la sintaxis de los comandos o los parámetros soportados; verifique el formato exacto para el firmware de su dispositivo.  
- Elija TCP o UDP según los requisitos de red y fiabilidad; Plaspy admite ambos y aceptará mensajes en el puerto compartido 8888.  
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando lleguen los mensajes.  
- Preserve la contraseña del dispositivo y cámbiela desde la predeterminada si su política de seguridad lo requiere después de la provisión inicial.

## Por qué usar Plaspy con esta configuración

Usar el GL520MG con Plaspy ofrece a las organizaciones una forma eficiente de centralizar telemetría de activos de larga duración y datos GNSS en una sola plataforma para monitoreo, alertas e informes. Los reportes optimizados para ahorro de energía y los sensores ambientales del dispositivo encajan bien con los flujos de trabajo de Plaspy para cadena de frío, monitoreo de activos estáticos y despliegues a gran escala con poco mantenimiento.

Para obtener más información sobre Plaspy, visite https://www.plaspy.com. Para conocer los comandos específicos más recientes, el comportamiento de firmware y la documentación oficial de QuecLink, verifique los detalles en el sitio del fabricante https://www.queclink.com/ ya que los métodos y la sintaxis pueden cambiar con el tiempo.
