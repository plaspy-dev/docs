---
slug: /tzone/tz_avl05/configuration
id: tz_avl05-configuration
sidebar_label: Configuration
title: TZone - TZ-AVL05 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador TZone TZ-AVL05 a Plaspy mediante servidor compartido y comandos SMS o GPRS
keywords:
  - configuración TZone TZ-AVL05
  - instalación TZone TZ-AVL05
  - configuración TZ-AVL05 Plaspy
  - configuración GPS Plaspy
  - configuración rastreador TZone
  - configuración rastreo vehicular
  - guía instalación rastreador GPS
  - seguimiento de flotas Plaspy
  - configuración tracker GPRS
  - configuración tracker SMS
---

# TZone - TZ-AVL05 Configuración

Esta página describe el contexto público de configuración para usar el rastreador GPS TZone TZ-AVL05 con Plaspy. Explica los parámetros de servidor prácticos y los pasos habituales para preparar el equipo y que reporte ubicación y estado a la plataforma Plaspy. El contenido se basa en comandos de configuración públicos y en la descripción del dispositivo que indica soporte para GPRS TCP UDP y SMS como métodos de comunicación.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, aquí se incluyen los comandos SMS públicos del dispositivo y se explica cómo esos comandos se mapean a los ajustes de servidor de Plaspy.

## Resumen de la configuración

Esta guía muestra los pasos prácticos para preparar un TZ-AVL05 y que se comunique con Plaspy usando el punto de conexión y puerto compartidos de la plataforma. El objetivo es asegurar que el rastreador pueda establecer conexión GPRS (o usar SMS cuando aplique), registrarse con la operadora y enviar actualizaciones de posición a Plaspy para que el dispositivo aparezca y reporte correctamente en la plataforma.

- Configure los parámetros de red del equipo, como el APN del operador, para que GPRS pueda conectarse.
- Defina el intervalo de reporte del rastreador para que Plaspy reciba actualizaciones oportunas.
- Apunte el rastreador a los ajustes de servidor de Plaspy para que los datos lleguen al destino correcto.
- Active el modo GPRS en el dispositivo para que transmita por datos móviles.
- Verifique que el dispositivo reporte a Plaspy y que las posiciones sean visibles en la plataforma.

## Ajustes de servidor de Plaspy

Use estos valores de servidor de Plaspy al configurar el TZ-AVL05 para Plaspy:

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- transporte: UDP o TCP
- detección automática de protocolo en Plaspy

Tenga en cuenta que Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador para simplificar el registro.

## Requisitos habituales antes de la configuración

- Una tarjeta SIM activa insertada en el rastreador con datos habilitados y capacidad de SMS si piensa enviar comandos por SMS.
- Batería suficiente o alimentación externa para que el dispositivo permanezca encendido durante la configuración.
- Acceso al método de configuración provisto por el fabricante para el TZ-AVL05 (comandos SMS o herramienta del proveedor).
- Conocimiento del APN del operador móvil y, opcionalmente, del usuario y contraseña del APN para la SIM.
- Capacidad de enviar mensajes SMS al rastreador si va a usar comandos de configuración vía SMS.
- Una cuenta en Plaspy y el registro del dispositivo en la plataforma para validar el reporte una vez configurado el rastreador.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el TZ-AVL05 envía su ubicación y estado al punto de conexión y puerto compartidos de Plaspy. Plaspy recibe el tráfico entrante del rastreador en el puerto 8888 y detecta el protocolo de forma automática para decodificar los mensajes y mostrarlos en la plataforma.

- El rastreador establece una sesión de datos GPRS usando el APN del operador y luego abre una conexión TCP o UDP al endpoint de Plaspy.
- La telemetría y las actualizaciones de posición se envían al dominio o IP de Plaspy en el puerto 8888.
- Plaspy detecta automáticamente el protocolo específico del rastreador y procesa los mensajes entrantes.
- Los eventos y datos periódicos de ubicación se hacen visibles en Plaspy para monitoreo y generación de informes.
- Si se usan SMS para la configuración inicial, el dispositivo se cambia luego a GPRS para el reporte continuo a Plaspy.

## Flujo típico de configuración

1. Obtenga el método de configuración oficial del fabricante para el TZ-AVL05 y confirme la contraseña por defecto del dispositivo si fuera necesario.
2. Configure el APN del operador y, si aplica, el usuario y contraseña del APN usando el método recomendado por el fabricante.
3. Ingrese d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 como la dirección del servidor en el dispositivo.
4. Establezca el puerto del servidor en 8888 en el rastreador.
5. Seleccione UDP o TCP en el dispositivo si el hardware requiere una selección explícita de transporte.
6. Aplique o guarde la configuración y active el modo GPRS en el rastreador.
7. Reinicie o desconecte y vuelva a conectar la alimentación del dispositivo si el fabricante lo requiere para activar los nuevos ajustes.
8. Valide que el equipo reporte a Plaspy y que las posiciones y eventos aparezcan en la plataforma.

## Comandos de configuración de ejemplo

El TZ-AVL05 puede configurarse enviando comandos SMS. Los siguientes comandos SMS públicos se proporcionan en el contenido de configuración del dispositivo y deben enviarse en el orden mostrado al realizar una configuración inicial. Reemplace los marcadores donde se indica.

- Establecer el APN del operador. Reemplace {{apn}} por el APN de su operadora. Si su operador requiere usuario o contraseña del APN, incluya {{apnu}} y {{apnp}} como se muestra. apnu y apnp son opcionales y solo se necesitan si su APN requiere autenticación.

```
*000000,011,{{apn}},{{apnu}},{{apnp}}#
```

- Definir el intervalo de actualización de ubicación a 60 segundos (ejemplo). Ajuste el valor del intervalo según necesite.

```
*000000,018,60,999#
```

- Establecer el servidor GPRS a Plaspy usando la IP pública de Plaspy y el puerto. Este ejemplo usa la IP 54.85.159.138 y el puerto 8888 publicados para Plaspy.

```
*000000,015,0,54.85.159.138,8888#
```

- Activar el modo GPRS en el rastreador para que use datos móviles para el reporte.

```
*000000,016,1#
```

Notas sobre los marcadores
- {{apn}} es la cadena APN del operador necesaria para datos.
- {{apnu}} es el usuario APN y es opcional.
- {{apnp}} es la contraseña APN y es opcional.
- La contraseña numérica inicial 000000 en estos comandos es la contraseña de comandos del dispositivo usada en los ejemplos públicos. Confirme la contraseña por defecto con el fabricante y cámbiela si lo considera oportuno.

## Notas de configuración

- Las variaciones de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta del SMS y los campos disponibles; confirme siempre con la documentación del fabricante para su versión del dispositivo.
- El TZ-AVL05 admite configuración vía SMS y reporte por GPRS según las descripciones públicas del dispositivo; use SMS para la configuración inicial de parámetros cuando sea necesario.
- Elija UDP o TCP en el dispositivo según el comportamiento de la red y la operadora. Plaspy acepta cualquiera de los dos transportes y realizará la detección automática del protocolo.
- Plaspy usa el puerto 8888 para todos los dispositivos compatibles, por lo que es esencial configurar correctamente el puerto en el rastreador.
- Si experimenta problemas de conectividad, verifique el APN, la asignación de datos de la SIM y si el dispositivo requiere reinicio después de la configuración.

## Por qué usar Plaspy con esta configuración

Usar el TZ-AVL05 con Plaspy ofrece un camino directo para centralizar la recolección de datos de ubicación y eventos de vehículos en una plataforma. Con los comandos SMS documentados públicamente puede preparar el equipo para usar GPRS y apuntarlo al endpoint de Plaspy, de modo que los datos de rastreo aparezcan en su cuenta Plaspy para monitoreo, alertas y flujos operativos.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Por favor verifique los pasos específicos del dispositivo, el comportamiento del firmware y los detalles más recientes del fabricante en el sitio oficial de TZone http://www.tzonedigital.com/ ya que las especificaciones y procedimientos de configuración del fabricante pueden cambiar con el tiempo.
