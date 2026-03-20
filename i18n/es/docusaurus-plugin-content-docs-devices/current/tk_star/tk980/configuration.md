---
slug: /tk_star/tk980/configuration
id: tk980-configuration
sidebar_label: Configuration
title: TK-Star - TK980 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TK-Star TK980 con Plaspy, con ajustes de servidor y comandos SMS para integrar el rastreador
keywords:
  - Configuración TK-Star TK980
  - Instalación TK980
  - Rastreador GPS TK-Star Plaspy
  - Configuración de servidor TK980
  - Comandos SMS TK980
  - Ajustes APN TK980
  - Configuración GPRS TK980
  - Configuración de dispositivo Plaspy
  - Rastreador vehicular TK980
  - Configuración rastreador OBD2
---

# TK-Star - TK980 Configuration

Esta página ofrece el contexto público de configuración para usar el TK-Star TK980 con Plaspy. Reúne los ajustes esenciales del servidor de Plaspy y los comandos y flujos habituales del fabricante que puede usar para conectar el TK980 a Plaspy y obtener seguimiento en tiempo real y telemetría OBD2. Utilice esta guía junto con el manual del dispositivo y los recursos del fabricante para una configuración completa.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos SMS de ejemplo en esta guía reflejan comandos públicos comunes para el TK980 y deben adaptarse según su dispositivo y operador SIM.

## Resumen de la configuración

Configurar el TK980 para Plaspy prepara el equipo para enviar ubicación y telemetría OBD2 al endpoint del servidor de Plaspy, de modo que la unidad sea visible y manejable desde la plataforma. El proceso normalmente implica establecer el APN y el destino de carga de datos, elegir el modo de transporte si es necesario y validar que el dispositivo reporte a Plaspy.

- Configure el APN del equipo, así como usuario y contraseña del APN para habilitar datos móviles y reportes GPRS.
- Direccione el rastreador hacia Plaspy ingresando el dominio o la IP del servidor y el puerto correcto.
- Seleccione el modo de transporte UDP o TCP en el puerto 8888 cuando el firmware requiera elegir transporte.
- Aplique la configuración y active el reporte GPRS para que el TK980 pueda transmitir ubicación y telemetría OBD2 a Plaspy.
- Verifique que el dispositivo aparezca y reporte en Plaspy para confirmar la integración exitosa.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo reporte al endpoint compartido

## Requisitos típicos antes de la configuración

- Acceso al puerto OBD2 del vehículo y un TK980 con alimentación listo para configurar.
- Una SIM celular activa con datos habilitados y, si la configuración es por SMS, capacidad para enviar y recibir SMS.
- Conocimiento del APN correcto y, opcionalmente, del usuario y contraseña del APN del operador móvil.
- Un teléfono con capacidad SMS o la herramienta de configuración del fabricante soportada por TK-Star para enviar comandos.
- Acceso al manual del TK-Star y a las notas de la versión de firmware más recientes del fabricante.

## Cómo se conecta este rastreador a Plaspy

El TK980 se configura para reportar su ubicación y telemetría OBD2 al endpoint y puerto del servidor Plaspy, de modo que los datos sean visibles y utilizables dentro de la plataforma. Una vez configurado, el dispositivo envía subidas periódicas e informes de eventos al endpoint compartido de Plaspy.

- El rastreador utiliza GPRS para enviar posiciones periódicas y telemetría OBD2 a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El dispositivo puede usar transporte UDP o TCP en el puerto 8888 cuando esa opción esté disponible en la configuración del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador e ingiere los informes para que el dispositivo aparezca en la plataforma sin necesidad de cambios por dispositivo en el puerto.
- Alarmas y mensajes de evento como movimiento o exceso de velocidad se reenvían a Plaspy y están disponibles para notificaciones y almacenamiento histórico de rutas.
- Una vez que el rastreador reporte correctamente, la unidad será visible en Plaspy para seguimiento en vivo, alertas y análisis.

## Flujo de configuración común

1. Acceda al método de configuración oficial de TK-Star para su unidad, normalmente comandos SMS o la herramienta de configuración del fabricante según la documentación de TK-Star.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración de dirección del servidor del dispositivo.
3. Configure el puerto de carga a 8888 en los ajustes del equipo.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere una selección explícita.
5. Configure el APN del operador y, si aplica, el usuario y la contraseña del APN para que el dispositivo pueda usar datos móviles.
6. Aplique o guarde la configuración y, si es necesario, reinicie o re-inicialice el equipo para activar el reporte GPRS.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma; confirme ubicación en vivo y actualizaciones de telemetría.

## Comandos de configuración de ejemplo

El TK980 soporta configuración vía SMS. Los siguientes comandos SMS públicos se usan comúnmente para preparar el dispositivo para Plaspy. La contraseña por defecto del dispositivo en estos ejemplos es 123456. Reemplace los marcadores y valores según corresponda y envíe cada SMS desde un teléfono al número SIM del dispositivo.

- Restaurar configuración de fábrica (paso inicial opcional)
```sms
begin123456
```

- Establecer el APN del operador
```sms
apn123456 {{apn}}
```
Reemplace {{apn}} con la cadena APN de su operador.

- Establecer el usuario del APN (opcional)
```sms
apnuser123456 {{apnu}}
```
Reemplace {{apnu}} con el usuario del APN si el operador lo requiere.

- Establecer la contraseña del APN (opcional)
```sms
apnpasswd123456 {{apnp}}
```
Reemplace {{apnp}} con la contraseña del APN si el operador lo requiere.

- Configurar el servidor GPRS a Plaspy usando la IP y el puerto
```sms
adminip123456 54.85.159.138 8888
```
Esto configura el dispositivo para reportar a Plaspy en el puerto 8888. También puede ingresar d.plaspy.com cuando el equipo lo soporte.

- Establecer el intervalo de subida a 60 segundos
```sms
upload123456 60
```
Ajuste el valor del intervalo según la frecuencia de reporte deseada.

- Cambiar el dispositivo a modo GPRS para comenzar el reporte de datos
```sms
gprs123456
```

Notas sobre los marcadores: {{apn}} es el APN de la red, {{apnu}} es el usuario del APN y {{apnp}} es la contraseña del APN. Mantenga la contraseña del dispositivo (123456 en estos ejemplos) según lo requiera su unidad; reemplácela si tiene una contraseña de administrador diferente.

## Notas de configuración

- La configuración por SMS es común en el TK980, pero las herramientas del fabricante o actualizaciones de firmware pueden introducir métodos alternativos de configuración.
- Las variaciones de firmware pueden cambiar la sintaxis exacta de los comandos o el orden de los parámetros; confirme siempre los comandos con el manual del dispositivo para su versión de firmware.
- Cuando el equipo requiera selección de transporte, elija UDP o TCP explícitamente; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente una vez que lleguen los reportes.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración por dispositivo al puerto compartido 8888 y al endpoint de Plaspy.
- Verifique las credenciales APN con el operador móvil antes de intentar la configuración GPRS para evitar retrasos de conectividad.

## Por qué usar Plaspy con esta configuración

Usar el TK980 con Plaspy proporciona una vía práctica para obtener visibilidad en tiempo real del vehículo y telemetría OBD2 sin instalaciones invasivas, gracias al factor de forma plug and play OBD2. Configurar el dispositivo para reportar a Plaspy habilita mapas en vivo, notificaciones de eventos, historial de rutas y supervisión a nivel de flota, útiles para operadores de flotas, servicios de renta y despliegues de seguridad vehicular.

Para saber más sobre cómo Plaspy soporta rastreadores como el TK980 visite https://www.plaspy.com. Para detalles de configuración específicos del dispositivo, notas de firmware y comandos del fabricante más actualizados, verifique la documentación oficial de TK-Star en https://www.tk-star.com/ ya que los métodos de configuración y el comportamiento del dispositivo pueden cambiar con el tiempo.
