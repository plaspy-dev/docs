---
slug: /aovx/am300/configuration
id: am300-configuration
sidebar_label: Configuration
title: AOVX - AM300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del AOVX AM300 para usarlo con el servidor de Plaspy, comandos y pasos de integración
keywords:
  - configuración AOVX AM300
  - configuración del AOVX AM300 para Plaspy
  - servidor AOVX AM300 para Plaspy
  - configuración GPS AOVX AM300
  - configuración de software de rastreo AOVX AM300
  - configuración del rastreador AOVX AM300
  - configuración AM300 para Plaspy
  - configuración GPS del AM300
  - configuración del rastreador AOVX
  - configuración de rastreadores GPS en Plaspy
---

# AOVX - AM300 Configuration

En esta página encontrará el contexto público de configuración para usar el AOVX AM300 con Plaspy. Aquí reunimos los valores compartidos del servidor de Plaspy y los comandos públicos del rastreador que necesita para apuntar el dispositivo a Plaspy y confirmar su configuración actual.

Plaspy utiliza el mismo puerto de servidor para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Esto simplifica la integración del lado de la plataforma, aunque el proceso exacto de configuración del fabricante puede variar según el firmware, la revisión del hardware, el tipo de instalación y la herramienta utilizada para aplicar los ajustes.

## Resumen de la configuración

El AOVX AM300 se configura para enviar datos de rastreo al punto de conexión del servidor de Plaspy usando los detalles públicos que se indican abajo. En la práctica, el objetivo es asegurar que el dispositivo esté dirigido al servicio compartido de Plaspy, conectado con el transporte esperado y listo para reportar información de ubicación y estado en la plataforma.

- Prepare el rastreador para que pueda comunicarse con Plaspy usando el punto de conexión y el puerto compartidos.
- Configure el destino de reporte con el dominio del servidor de Plaspy o con su dirección IP.
- Use la opción de transporte correcta si el método de configuración del fabricante solicita UDP o TCP.
- Confirme que el dispositivo esté reportando activamente después de guardar los ajustes.
- Revise los parámetros y el estado del rastreador para validar que la configuración se aplicó correctamente.
- Mantenga la configuración alineada con el firmware del dispositivo y con el flujo público de configuración del fabricante.

## Ajustes del servidor de Plaspy

Use los siguientes parámetros públicos de Plaspy al configurar el AM300:

- Dominio del servidor `d.plaspy.com`
- IP del servidor `54.85.159.138`
- Puerto `8888`
- Compatibilidad con transporte `UDP` o `TCP`
- Detección automática de protocolo en Plaspy

Estos valores son el destino de conexión estándar para los dispositivos compatibles en Plaspy. La plataforma usa el mismo puerto en todos los dispositivos, y la selección del protocolo se maneja automáticamente una vez que el rastreador empieza a enviar datos.

## Requisitos habituales antes de iniciar

Antes de configurar el AM300, asegúrese de que el rastreador esté listo para la configuración inicial y de que tenga acceso al método oficial del fabricante para aplicar comandos o guardar parámetros de red.

- El dispositivo debe tener energía disponible y estar listo para la configuración.
- Debe contar con acceso al método o herramienta oficial de configuración de AOVX descrito por el fabricante.
- La información de APN de la red móvil debe estar disponible cuando el flujo de configuración la solicite.
- Debe confirmar que el método de configuración elegido pueda enviar los comandos del rastreador que se muestran abajo.
- El rastreador debe poder almacenar y aplicar los ajustes después de enviarlos.
- La instalación debe permitir que el dispositivo vuelva a conectarse y empiece a reportar después de guardar la configuración.

## Cómo se conecta este rastreador a Plaspy

El AM300 se conecta a Plaspy enviando sus datos de rastreo al punto de conexión compartido del servidor de Plaspy en el puerto 8888. Una vez que el dispositivo está configurado correctamente, Plaspy recibe el flujo de datos entrante e identifica automáticamente el protocolo que está usando el rastreador.

- El rastreador se apunta a `d.plaspy.com` o `54.85.159.138` como destino de reporte.
- El puerto `8888` se usa para la conexión del dispositivo.
- El dispositivo puede comunicarse mediante `UDP` o `TCP` si el flujo de configuración requiere elegir un transporte.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que los datos llegan a la plataforma.
- Después de conectarse, el dispositivo puede aparecer en Plaspy para monitoreo, reportes y visibilidad operativa.
- Las revisiones de estado y configuración ayudan a confirmar que el rastreador se está comunicando como se espera.

## Flujo común de configuración

1. Abra el método o software oficial de configuración de AOVX que se usa para administrar el AM300.
2. Ingrese el APN del operador si la configuración requiere parámetros de acceso a la red.
3. Configure el servidor de reporte como `d.plaspy.com` o `54.85.159.138`.
4. Establezca el puerto en `8888`.
5. Seleccione `UDP` o `TCP` si el dispositivo o la herramienta de configuración solicita elegir un transporte.
6. Aplique o guarde la configuración en la herramienta del fabricante.
7. Reinicie el dispositivo si el modelo o la herramienta requieren un reinicio para que los nuevos ajustes surtan efecto.
8. Verifique que el dispositivo reporte a Plaspy y revise el estado en vivo o la respuesta de parámetros.

## Ejemplos de comandos de configuración

El flujo público de configuración del AM300 incluye comandos tipo SMS para definir el APN del operador, apuntar el rastreador a Plaspy, establecer el intervalo de actualización y habilitar el modo GPRS. Los marcadores como `{{apn}}`, `{{apnu}}` y `{{apnp}}` representan el nombre del APN, el usuario del APN y la contraseña del APN cuando el operador requiere esas credenciales.

- Configure el APN

```text
APN,{{apn}}# 
```

Si su operador requiere credenciales, el comando admite los marcadores opcionales de usuario y contraseña:

```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Configure el servidor GPRS en Plaspy

```text
SERVER,1,d.plaspy.com,8888,0#
```

- Defina el intervalo de reporte

```text
TIMER,60,60#
```

- Habilite el modo GPRS

```text
GPRSON,1#
```

- Consulte la configuración actual

```text
PARAM#
```

- Consulte el estado del rastreador

```text
STATUS#
```

## Notas de configuración

- Los comandos públicos mostrados arriba son útiles para la preparación básica del rastreador, pero el comportamiento exacto puede variar según la versión del firmware.
- Algunas instalaciones pueden usar configuración por SMS, mientras que otras dependen del software del fabricante u otro método público de configuración.
- Si el dispositivo solicita seleccionar un transporte, use la opción que coincida con su plan de implementación, ya sea `UDP` o `TCP`.
- Plaspy acepta el rastreador en el puerto compartido y detecta automáticamente el protocolo, así que la tarea principal es apuntar el dispositivo al servidor y puerto correctos.
- Siempre debe revisar la documentación del fabricante para conocer la sintaxis más reciente de los comandos y el comportamiento específico del dispositivo.

## Por qué usar Plaspy con esta configuración

Cuando el AM300 se configura para enviar datos a Plaspy, puede ofrecer visibilidad práctica para monitoreo de activos a largo plazo, procesos de seguridad y supervisión operativa. La configuración compartida del servidor simplifica la implementación entre dispositivos compatibles, mientras que la detección automática del protocolo ayuda a reducir la complejidad del lado de la plataforma durante la integración.

Para equipos que administran activos y necesitan reportes confiables y una configuración de servidor sencilla, Plaspy ofrece un espacio centralizado para recibir datos del rastreador, revisar el estado y monitorear la actividad con el tiempo. Para conocer más sobre Plaspy, visite https://www.plaspy.com. Para obtener los detalles más recientes de configuración específicos del dispositivo, el comportamiento del firmware y la guía del fabricante, verifique la información actual en el sitio oficial de AOVX en https://www.aovx.com/.
