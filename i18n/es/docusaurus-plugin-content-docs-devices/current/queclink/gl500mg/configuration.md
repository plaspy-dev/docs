---
slug: /queclink/gl500mg/configuration
id: gl500mg-configuration
sidebar_label: Configuration
title: QuecLink - GL500MG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar QuecLink GL500MG y conectarlo a Plaspy con ajustes de servidor y ejemplos de comandos SMS
keywords:
  - configuración QuecLink GL500MG
  - instalación QuecLink GL500MG
  - QuecLink GL500MG Plaspy
  - configuración servidor GL500MG
  - configuración rastreador GPS GL500MG
  - configuración rastreador QuecLink
  - guía configuración rastreador de activos
  - configuración plataforma GPS Plaspy
  - configuración tracker LTE M
  - configuración dispositivo QuecLink
---

# QuecLink - Configuración del GL500MG

Esta página reúne la información pública necesaria para preparar el QuecLink GL500MG y conectarlo a Plaspy. Incluye los parámetros de servidor clave, pasos prácticos de flujo de trabajo y ejemplos de comandos SMS públicos para que el dispositivo reporte telemetría a la plataforma Plaspy. El contenido está pensado para usuarios técnicos que necesitan integrar unidades GL500MG en Plaspy para seguimiento y monitoreo de activos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto y punto de ingestión se usan para todos los dispositivos de la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor. Esta página incluye ejemplos de comandos SMS de QuecLink cuando están disponibles y explica valores requeridos como marcadores de APN y entradas de servidor.

## Resumen de la configuración

Preparar un GL500MG para Plaspy implica configurar el equipo para que establezca una conexión GPRS y envíe su telemetría al endpoint compartido de Plaspy. Los comandos SMS de ejemplo a continuación muestran los pasos públicos típicos: reset o preparación del dispositivo, ajuste de credenciales APN, configuración del servidor Plaspy y establecimiento de intervalos de reporte o entradas de eventos.

- Configure el dispositivo con los ajustes de servidor de Plaspy para que los mensajes lleguen a la plataforma y se muestren en tiempo real y en el historial.
- Proporcione los datos de APN y de red para que el GL500MG pueda abrir una sesión GPRS usando TCP o UDP.
- Establezca los intervalos de reporte y las entradas de eventos para controlar la frecuencia de envío de localizaciones y telemetría de sensores.
- Valide la conectividad del dispositivo y confirme que los mensajes llegan a Plaspy usando el gestor de dispositivos o los registros de la plataforma.
- Consulte la documentación del fabricante para la sintaxis específica de firmware y cualquier parámetro opcional.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto para la ingestión en la plataforma

## Requisitos típicos antes de la configuración

- Un GL500MG alimentado y con tarjeta SIM instalada, con batería suficiente o alimentación externa durante la configuración inicial.
- Plan de datos activo y credenciales APN para la tarjeta SIM que habiliten la conectividad GPRS.
- Acceso al método de configuración que soporte la unidad, como comandos SMS o la herramienta de configuración del fabricante.
- Conocimiento de la contraseña del dispositivo si es necesaria para configurar; los ejemplos públicos usan la contraseña por defecto queclink donde se indica.
- Una cuenta en Plaspy o acceso al gestor de dispositivos para confirmar que el equipo está reportando a la plataforma después de la configuración.
- Confirmación de la versión de firmware o revisión de hardware si piensa usar características avanzadas que puedan variar entre revisiones.

## Cómo se conecta este rastreador a Plaspy

El GL500MG envía localización y telemetría de sensores a Plaspy transmitiendo mensajes al endpoint y puerto compartidos de Plaspy. Plaspy ingiere los mensajes del protocolo del dispositivo y los presenta en mapas, alertas y en el historial. Habitualmente esto se logra configurando el dispositivo con el dominio o la IP de Plaspy y seleccionando TCP o UDP como transporte.

- El dispositivo se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede seleccionarse como UDP o TCP según la configuración del equipo y las condiciones de la red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan mensajes al puerto compartido usado por todos los dispositivos.
- Las actualizaciones de ubicación, eventos de movimiento y las entradas de sensores configuradas se transmiten a Plaspy para visibilidad en tiempo real.
- El almacenamiento en buffer y los reportes periódicos ayudan a asegurar la entrega de datos ante interrupciones temporales de conectividad.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de QuecLink para el GL500MG, como los comandos SMS documentados o la herramienta del fabricante.
2. Prepare las credenciales APN y confirme que la tarjeta SIM tiene datos habilitados y puede registrarse en la red celular.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto en 8888 y elija UDP o TCP como transporte si el equipo requiere selección explícita.
5. Aplique o guarde la configuración en el dispositivo y envíe los SMS o los comandos de configuración por lotes que sean necesarios.
6. Reinicie o apague/encienda el dispositivo si el fabricante lo exige para aplicar los ajustes de red y servidor.
7. Valide que el equipo reporte a Plaspy revisando el estado del dispositivo en la plataforma, los registros de mensajes entrantes o el gestor de dispositivos en Plaspy.

## Comandos de configuración de ejemplo

Los comandos SMS públicos de QuecLink a continuación son ejemplos usados para configurar el GL500MG. Estos comandos usan la contraseña del dispositivo queclink en los ejemplos e incluyen marcadores APN que deben sustituirse por las credenciales de su operador. Preserve el orden al aplicar los comandos, ya que algunos pasos son preparatorios.

- Comando inicial opcional de restauración de fábrica
  ```
  AT+GTRTO=queclink,4,,,,,,FFFF$
  ```
  Nota: Este comando restaura la configuración de fábrica y es opcional. Úselo sólo si pretende restablecer el dispositivo.

- Ajustar la zona horaria a UTC 0
  ```
  AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
  ```

- Establecer el APN del operador
  ```
  AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
  ```
  Reemplace los marcadores con los valores de su operador SIM:
  - {{apn}} es el nombre del APN
  - {{apnu}} es el usuario del APN si se requiere
  - {{apnp}} es la contraseña del APN si se requiere

- Configurar el servidor GPRS a Plaspy usando dominio e IP y puerto 8888
  ```
  AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
  ```
  Este comando configura el dispositivo para reportar al dominio y la IP del servidor de Plaspy en el puerto 8888. Plaspy acepta UDP o TCP en este puerto y detecta automáticamente el protocolo del rastreador.

- Ajustar el intervalo de actualización a 60 segundos
  ```
  AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
  ```

- Habilitar la notificación del botón SOS en la entrada 2
  ```
  AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
  ```

Si utiliza el método SMS, envíe cada comando como un SMS separado al número del dispositivo. Confirme las respuestas del equipo cuando sea posible y verifique el reporte en Plaspy tras la configuración.

## Notas de configuración

- La sintaxis exacta de los SMS y los parámetros disponibles pueden variar según la versión de firmware y la revisión de hardware; verifique el conjunto de comandos contra el firmware que tenga.
- Elija UDP o TCP según la confiabilidad de su red y cualquier requisito de tunelización o firewall; Plaspy acepta ambos en el puerto compartido y detectará el protocolo automáticamente.
- Los comandos de ejemplo usan la contraseña pública por defecto queclink; cambie las contraseñas por defecto cuando corresponda por motivos de seguridad y siga las indicaciones del fabricante para actualizar contraseñas.
- La configuración vía SMS se muestra porque está presente en ejemplos públicos; QuecLink dispone además de herramientas de configuración o interfaces cableadas que pueden usarse para programación por lotes.
- Siempre valide que los mensajes lleguen a Plaspy después de la configuración comprobando el estado del dispositivo y los registros de mensajes entrantes en la plataforma Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el GL500MG con Plaspy ofrece una forma eficiente de convertir la telemetría de activos de larga duración en visibilidad accionable. El bajo consumo del GL500MG y sus sensores integrados lo hacen adecuado para despliegues donde se requiere reporte infrecuente pero confiable. Al configurarlo para reportar al endpoint y puerto compartidos de Plaspy, los equipos obtienen mapas centralizados, alertas por eventos y reproducción histórica para monitorear movimientos de activos y condiciones ambientales.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los métodos específicos de configuración por dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar las últimas instrucciones de configuración y la documentación de firmware en el sitio de QuecLink https://www.queclink.com/ antes de finalizar los despliegues.
