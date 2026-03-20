---
slug: /concox/gt800/configuration
id: gt800-configuration
sidebar_label: Configuration
title: Concox - GT800 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Concox GT800 con ajustes de servidor Plaspy, comandos SMS y pasos para conectar el rastreador a Plaspy
keywords:
  - configuración Concox GT800
  - instalación Concox GT800
  - Concox GT800 Plaspy
  - configuración servidor GT800
  - configuración GPS GT800
  - configuración rastreador Concox
  - configuración GPS vehículo
  - instalación rastreador GPS
  - configuración seguimiento de flotas
  - integración rastreador Plaspy
---

# Concox - GT800: Configuración

Esta página describe la configuración pública necesaria para usar el rastreador GPS vehicular Concox GT800 con Plaspy. Aquí encontrará los ajustes de servidor prácticos y los comandos SMS de configuración que se usan habitualmente para apuntar unidades GT800 a Plaspy, de modo que el dispositivo pueda reportar ubicación y estado a la plataforma.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto de escucha para los dispositivos compatibles, detectando automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por eso esta guía se centra en los comandos y ajustes públicos que suelen ser aplicables al integrar el GT800 con Plaspy.

## Resumen de la configuración

Configurar el GT800 para Plaspy prepara el dispositivo para comunicarse de forma estable con la plataforma y permite visibilidad de ubicación, reportes y monitoreo. El flujo de configuración público normalmente establece el APN del dispositivo, el servidor GPRS, el intervalo de envío y habilita el modo GPRS para que el rastreador pueda enviar datos a Plaspy.

- Configure el APN de datos móviles para que el GT800 establezca conexión GPRS.
- Apunte el servidor del dispositivo a d.plaspy.com o a la IP del servidor Plaspy para que la telemetría llegue a la plataforma.
- Use el puerto de escucha estándar de Plaspy para alcanzar el endpoint compartido.
- Habilite y verifique el reporte por GPRS y ajuste el intervalo de reporte según su caso de uso.
- Valide la conectividad y confirme que el dispositivo aparezca en Plaspy tras la configuración.

## Ajustes de servidor Plaspy

Utilice los siguientes ajustes públicos de servidor Plaspy al configurar el GT800:

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un GT800 con alimentación y acceso a un teléfono o herramienta capaz de enviar mensajes SMS de configuración si va a usar SMS.
- Una tarjeta SIM válida con datos móviles (GPRS) habilitados y las credenciales APN necesarias del operador móvil.
- Acceso al manual de comandos del Concox GT800 o documentación del fabricante correspondiente a su revisión de firmware.
- Conocimiento del APN, nombre de usuario (APN username) y contraseña (APN password) proporcionados por su operador, si son necesarios.
- Una cuenta en Plaspy o acceso a la plataforma para verificar que el dispositivo esté reportando tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el GT800 usa la conexión de datos móviles para enviar actualizaciones de ubicación y estado al endpoint compartido y al puerto de Plaspy. Plaspy recibe los mensajes del dispositivo y los asocia con la cuenta o entrada de dispositivo correspondiente para que los datos sean visibles en la plataforma.

- El rastreador se apunta al dominio d.plaspy.com o a la IP del servidor 54.85.159.138.
- Los mensajes del dispositivo se envían al puerto 8888 en el endpoint de Plaspy.
- El GT800 puede usar TCP o UDP según la configuración; Plaspy admite ambos y detecta el protocolo automáticamente.
- La frecuencia de envío la controla el temporizador del dispositivo y puede ajustarse (por ejemplo, el comando TIMER puede fijar intervalos de 60 segundos).
- Tras una configuración exitosa, el dispositivo debería aparecer y enviar actualizaciones a Plaspy para seguimiento y monitoreo de eventos.

## Flujo común de configuración

1. Acceda al método oficial de configuración Concox para su unidad GT800 (comandos SMS o el software recomendado por el fabricante).
2. Configure el APN del dispositivo usando el comando APN, suministrando [apn] y opcionalmente [apnu] y [apnp] para el usuario y contraseña del APN.
3. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 y establezca el puerto en 8888.
4. Seleccione el tipo de transporte (UDP o TCP) si el dispositivo requiere una selección explícita.
5. Habilite el modo GPRS y configure el temporizador de reporte según sus necesidades de monitoreo.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware requiere un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta o lista de dispositivos.

## Comandos de configuración de ejemplo

El GT800 puede configurarse enviando los siguientes comandos SMS en el orden mostrado. Estos comandos provienen de referencias públicas de configuración del Concox GT800 y son los que comúnmente se usan para apuntar dispositivos a Plaspy.

- Reinicio de fábrica opcional (usar solo si necesita restaurar valores por defecto antes de configurar):

```
FACTORY#
```

- Ajustar la zona horaria a UTC-0:

```
GMT,E,0#
```

- Configurar el APN del operador. Reemplace los marcadores por los valores de su operador. [apn] es obligatorio, [apnu] y [apnp] son opcionales y representan el usuario y la contraseña del APN:

```
APN,[apn],[apnu],[apnp]#
```

- Establecer el servidor GPRS usando el dominio Plaspy y el puerto (ejemplo con selección de dominio y campo de UDP/TCP):

```
SERVER,1,d.plaspy.com,8888,0#
```

- O establecer el servidor GPRS usando la IP de Plaspy:

```
SERVER,0,54.85.159.138,8888,0#
```

- Fijar el intervalo de actualización a cada 60 segundos (dos variantes comunes):

```
TIMER,60#
```

o

```
TIMER,60,60#
```

- Habilitar el modo GPRS:

```
GPRSON,1#
```

- Verificar la configuración actual de GPRS y servidor:

```
GPRSSET#
```

Notas sobre los marcadores:
- [apn] = valor APN de su operador móvil.
- [apnu] = usuario del APN si el operador lo requiere.
- [apnp] = contraseña del APN si el operador lo requiere.

Envíe estos comandos como mensajes SMS al GT800 en el orden indicado al realizar la configuración inicial. Use el comando de reinicio de fábrica únicamente cuando sea apropiado.

## Observaciones de configuración

- Las revisiones de firmware o variantes regionales de Concox pueden interpretar los comandos de forma distinta; confirme la sintaxis exacta con la documentación del fabricante para su unidad GT800.
- El GT800 admite configuración vía SMS (los comandos públicos mostrados arriba), lo cual resulta útil para ajustes en campo sin acceso a una herramienta de configuración.
- Elija UDP o TCP según sus preferencias de red y el comportamiento del dispositivo; Plaspy admite ambos y detecta el protocolo correcto automáticamente.
- Mantenga las credenciales APN seguras y confirme que coinciden con los requisitos del operador antes de habilitar el reporte por GPRS.
- Todos los dispositivos en Plaspy usan por defecto el puerto 8888 para comunicarse con el endpoint compartido de la plataforma.

## Por qué usar Plaspy con esta configuración

Usar el GT800 con Plaspy ofrece una vía práctica para centralizar la ubicación de vehículos, el estado y los reportes de eventos en una sola plataforma de seguimiento. Apuntar el GT800 al endpoint de Plaspy permite a las organizaciones monitorear flotas, responder a incidencias y mantener visibilidad operativa sin necesidad de cambios de backend específicos por dispositivo.

Para más información sobre Plaspy, visite https://www.plaspy.com. Para métodos de configuración específicos de dispositivos y detalles de firmware de Concox, verifique la información vigente en el sitio del fabricante https://www.iconcox.com/ ya que las especificaciones y los pasos de configuración pueden cambiar con el tiempo.
